import { GoogleGenAI, Type, SchemaType } from "@google/genai";
import { CityInfo, Language, TimeZone } from '../types';
import { SUPPORTED_LANGUAGES } from '../constants';

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key mancante. Assicurati che process.env.API_KEY sia impostato.");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateCityImage = async (city: string, country: string, timeOfDay: string): Promise<string | null> => {
  try {
    const ai = getClient();
    const prompt = `A highly detailed, photorealistic, cinematic wide shot of ${city}, ${country} during ${timeOfDay}. 
    The image should capture the essence of the city's most famous landmark or skyline. 
    High quality, 4k resolution, professional photography.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
            aspectRatio: "16:9",
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Errore generazione immagine:", error);
    throw error;
  }
};

export const generateCityInfo = async (city: string, country: string, language: Language = 'it'): Promise<CityInfo> => {
  try {
    const ai = getClient();
    const languageName = SUPPORTED_LANGUAGES.find(l => l.code === language)?.name || 'Italian';
    
    const prompt = `Provide a comprehensive guide for ${city}, ${country}. 
    Include:
    1. A general description (approx 2 sentences).
    2. A brief history (approx 3 sentences).
    3. The best time of year to visit.
    4. The local currency.
    5. The primary language(s) spoken.
    6. Top 3 iconic landmarks.
    7. 3 interesting/fun facts.
    8. A famous local dish.
    
    Translate EVERYTHING into ${languageName}.
    Return strictly JSON matching the schema.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            description: { type: Type.STRING, description: `General description in ${languageName}` },
            history: { type: Type.STRING, description: `Brief history in ${languageName}` },
            bestTimeToVisit: { type: Type.STRING, description: `Best time to visit in ${languageName}` },
            currency: { type: Type.STRING, description: `Currency in ${languageName}` },
            primaryLanguage: { type: Type.STRING, description: `Primary language in ${languageName}` },
            landmarks: { type: Type.ARRAY, items: { type: Type.STRING }, description: `List of 3 landmarks in ${languageName}` },
            facts: { type: Type.ARRAY, items: { type: Type.STRING }, description: `3 fun facts in ${languageName}` },
            dish: { type: Type.STRING, description: `Name and short description of a local dish in ${languageName}` }
          },
          required: ["description", "history", "bestTimeToVisit", "currency", "primaryLanguage", "landmarks", "facts", "dish"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("Nessuna risposta testuale dal modello.");
    
    return JSON.parse(text) as CityInfo;
  } catch (error) {
    console.error("Errore generazione info:", error);
    throw error;
  }
};

export const findCityData = async (query: string, language: Language): Promise<TimeZone | null> => {
    try {
        const ai = getClient();
        const languageName = SUPPORTED_LANGUAGES.find(l => l.code === language)?.name || 'Italian';
        
        const prompt = `Identify the city referred to in the query: "${query}". 
        Return a JSON object containing the city's geographical and time zone data.
        
        Details required:
        - City name (localized in ${languageName})
        - Country name (localized in ${languageName})
        - IANA Time Zone Region (e.g., 'Europe/Rome', 'America/New_York')
        - UTC Offset string (e.g., 'UTC+1', 'UTC-5')
        - Latitude and Longitude (numbers)
        - A very short description (1 sentence) in ${languageName}.
        
        If the query is not a valid city, return null.`;
        
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        city: { type: Type.STRING },
                        country: { type: Type.STRING },
                        region: { type: Type.STRING, description: "IANA time zone string" },
                        offset: { type: Type.STRING },
                        lat: { type: Type.NUMBER },
                        lng: { type: Type.NUMBER },
                        description: { type: Type.STRING }
                    },
                    required: ["city", "country", "region", "offset", "lat", "lng", "description"]
                }
            }
        });
        
        const text = response.text;
        if (!text) return null;
        
        const data = JSON.parse(text);
        if (!data.city || !data.region) return null;
        
        // Generate a simple ID
        const id = data.city.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-' + Math.floor(Math.random() * 1000);
        
        return {
            id,
            city: data.city,
            country: data.country,
            region: data.region,
            offset: data.offset,
            lat: data.lat,
            lng: data.lng,
            description: data.description
        } as TimeZone;
        
    } catch (error) {
        console.error("Errore ricerca città globale:", error);
        return null;
    }
}