import { TimeZone, Language } from './types';

export const SUPPORTED_LANGUAGES: { code: Language; name: string; flag: string }[] = [
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'pt-br', name: 'Português (BR)', flag: '🇧🇷' },
];

export const UI_TEXT = {
  it: {
    title: 'GlobalTimeTourism',
    subtitle: 'Esplora il mondo in tempo reale con Gemini',
    searchPlaceholder: 'Cerca città o paese...',
    mainTitle: 'Fusi Orari Globali',
    mainSubtitle: 'Seleziona una città per generare una vista AI e scoprire curiosità locali.',
    noResults: 'Nessuna città trovata per',
    footer: 'Powered by Google Gemini API & React',
    explore: 'Esplora',
    weather: {
      clear: 'Sereno',
      cloudy: 'Nuvoloso',
      fog: 'Nebbia',
      rain: 'Pioggia',
      snow: 'Neve',
      showers: 'Rovesci',
      thunderstorm: 'Temporale',
      variable: 'Variabile'
    },
    modal: {
      view: 'Visualizza',
      genImage: 'Genera Vista',
      generating: 'Generazione in corso (Gemini)...',
      specialty: 'Specialità Locale',
      facts: 'Curiosità',
      history: 'Storia in breve',
      visit: 'Quando visitare',
      currency: 'Valuta',
      lang: 'Lingua',
      landmarks: 'Luoghi iconici',
      noData: 'Dati non disponibili.',
      loadingData: 'Analisi della città in corso...',
      aiPrompt: 'Genera un\'immagine fotorealistica in tempo reale con l\'IA.'
    },
    timeOfDay: {
        day: 'Giorno',
        night: 'Notte'
    },
    globalSearch: {
      button: 'Cerca nel database globale AI',
      desc: 'Trova qualsiasi città del mondo usando l\'IA',
      searching: 'Ricerca globale in corso...',
      notFound: 'Città non trovata.'
    }
  },
  en: {
    title: 'GlobalTimeTourism',
    subtitle: 'Explore the world in real-time with Gemini',
    searchPlaceholder: 'Search city or country...',
    mainTitle: 'Global Time Zones',
    mainSubtitle: 'Select a city to generate an AI view and discover local facts.',
    noResults: 'No cities found for',
    footer: 'Powered by Google Gemini API & React',
    explore: 'Explore',
    weather: {
      clear: 'Clear',
      cloudy: 'Cloudy',
      fog: 'Fog',
      rain: 'Rain',
      snow: 'Snow',
      showers: 'Showers',
      thunderstorm: 'Thunderstorm',
      variable: 'Variable'
    },
    modal: {
      view: 'View',
      genImage: 'Generate View',
      generating: 'Generating (Gemini)...',
      specialty: 'Local Specialty',
      facts: 'Fun Facts',
      history: 'Brief History',
      visit: 'Best time to visit',
      currency: 'Currency',
      lang: 'Language',
      landmarks: 'Iconic Landmarks',
      noData: 'Data not available.',
      loadingData: 'Analyzing city data...',
      aiPrompt: 'Generate a photorealistic image in real-time with AI.'
    },
    timeOfDay: {
        day: 'Day',
        night: 'Night'
    },
    globalSearch: {
      button: 'Search Global AI Database',
      desc: 'Find any city in the world using AI',
      searching: 'Global search in progress...',
      notFound: 'City not found.'
    }
  },
  es: {
    title: 'GlobalTimeTourism',
    subtitle: 'Explora el mundo en tiempo real con Gemini',
    searchPlaceholder: 'Buscar ciudad o país...',
    mainTitle: 'Husos Horarios Globales',
    mainSubtitle: 'Selecciona una ciudad para generar una vista de IA y descubrir datos locales.',
    noResults: 'No se encontraron ciudades para',
    footer: 'Desarrollado por Google Gemini API & React',
    explore: 'Explorar',
    weather: {
      clear: 'Despejado',
      cloudy: 'Nublado',
      fog: 'Niebla',
      rain: 'Lluvia',
      snow: 'Nieve',
      showers: 'Chubascos',
      thunderstorm: 'Tormenta',
      variable: 'Variable'
    },
    modal: {
      view: 'Ver',
      genImage: 'Generar Vista',
      generating: 'Generando (Gemini)...',
      specialty: 'Especialidad Local',
      facts: 'Curiosidades',
      history: 'Historia breve',
      visit: 'Cuándo visitar',
      currency: 'Moneda',
      lang: 'Idioma',
      landmarks: 'Lugares icónicos',
      noData: 'Datos no disponibles.',
      loadingData: 'Analizando datos de la ciudad...',
      aiPrompt: 'Genera una imagen fotorrealista en tiempo real con IA.'
    },
    timeOfDay: {
        day: 'Día',
        night: 'Noche'
    },
    globalSearch: {
      button: 'Buscar en base de datos global IA',
      desc: 'Encuentra cualquier ciudad del mundo con IA',
      searching: 'Búsqueda global en curso...',
      notFound: 'Ciudad no encontrada.'
    }
  },
  fr: {
    title: 'GlobalTimeTourism',
    subtitle: 'Explorez le monde en temps réel avec Gemini',
    searchPlaceholder: 'Rechercher une ville ou un pays...',
    mainTitle: 'Fuseaux Horaires Mondiaux',
    mainSubtitle: 'Sélectionnez une ville pour générer une vue IA et découvrir des faits locaux.',
    noResults: 'Aucune ville trouvée pour',
    footer: 'Propulsé par Google Gemini API & React',
    explore: 'Explorer',
    weather: {
      clear: 'Dégagé',
      cloudy: 'Nuageux',
      fog: 'Brouillard',
      rain: 'Pluie',
      snow: 'Neige',
      showers: 'Averses',
      thunderstorm: 'Orage',
      variable: 'Variable'
    },
    modal: {
      view: 'Voir',
      genImage: 'Générer Vue',
      generating: 'Génération (Gemini)...',
      specialty: 'Spécialité Locale',
      facts: 'Faits Divers',
      history: 'Brève histoire',
      visit: 'Quand visiter',
      currency: 'Devise',
      lang: 'Langue',
      landmarks: 'Lieux emblématiques',
      noData: 'Données non disponibles.',
      loadingData: 'Analyse de la ville en cours...',
      aiPrompt: 'Générez une image photoréaliste en temps réel avec l\'IA.'
    },
    timeOfDay: {
        day: 'Jour',
        night: 'Nuit'
    },
    globalSearch: {
      button: 'Recherche globale IA',
      desc: 'Trouvez n\'importe quelle ville avec l\'IA',
      searching: 'Recherche globale en cours...',
      notFound: 'Ville non trouvée.'
    }
  },
  de: {
    title: 'GlobalTimeTourism',
    subtitle: 'Entdecke die Welt in Echtzeit mit Gemini',
    searchPlaceholder: 'Stadt oder Land suchen...',
    mainTitle: 'Globale Zeitzonen',
    mainSubtitle: 'Wähle eine Stadt, um eine KI-Ansicht zu generieren und lokale Fakten zu entdecken.',
    noResults: 'Keine Städte gefunden für',
    footer: 'Unterstützt von Google Gemini API & React',
    explore: 'Erkunden',
    weather: {
      clear: 'Klar',
      cloudy: 'Bewölkt',
      fog: 'Nebel',
      rain: 'Regen',
      snow: 'Schnee',
      showers: 'Schauer',
      thunderstorm: 'Gewitter',
      variable: 'Variabel'
    },
    modal: {
      view: 'Ansehen',
      genImage: 'Ansicht generieren',
      generating: 'Generiere (Gemini)...',
      specialty: 'Lokale Spezialität',
      facts: 'Wissenswertes',
      history: 'Kurze Geschichte',
      visit: 'Beste Reisezeit',
      currency: 'Währung',
      lang: 'Sprache',
      landmarks: 'Wahrzeichen',
      noData: 'Daten nicht verfügbar.',
      loadingData: 'Analysiere Stadtdaten...',
      aiPrompt: 'Erstelle ein fotorealistisches Bild in Echtzeit mit KI.'
    },
    timeOfDay: {
        day: 'Tag',
        night: 'Nacht'
    },
    globalSearch: {
      button: 'Globale KI-Suche',
      desc: 'Finde jede Stadt der Welt mit KI',
      searching: 'Globale Suche läuft...',
      notFound: 'Stadt nicht gefunden.'
    }
  },
  pt: {
    title: 'GlobalTimeTourism',
    subtitle: 'Explore o mundo em tempo real com Gemini',
    searchPlaceholder: 'Pesquisar cidade ou país...',
    mainTitle: 'Fusos Horários Globais',
    mainSubtitle: 'Selecione uma cidade para gerar uma vista de IA e descobrir curiosidades locais.',
    noResults: 'Nenhuma cidade encontrada para',
    footer: 'Desenvolvido por Google Gemini API & React',
    explore: 'Explorar',
    weather: {
      clear: 'Limpo',
      cloudy: 'Nublado',
      fog: 'Nevoeiro',
      rain: 'Chuva',
      snow: 'Neve',
      showers: 'Aguaceiros',
      thunderstorm: 'Trovoada',
      variable: 'Variável'
    },
    modal: {
      view: 'Ver',
      genImage: 'Gerar Vista',
      generating: 'A gerar (Gemini)...',
      specialty: 'Especialidade Local',
      facts: 'Curiosidades',
      history: 'História breve',
      visit: 'Melhor época',
      currency: 'Moeda',
      lang: 'Língua',
      landmarks: 'Marcos icônicos',
      noData: 'Dados não disponíveis.',
      loadingData: 'A analisar dados da cidade...',
      aiPrompt: 'Gere uma imagem fotorrealista em tempo real com IA.'
    },
    timeOfDay: {
        day: 'Dia',
        night: 'Noite'
    },
    globalSearch: {
      button: 'Pesquisa Global IA',
      desc: 'Encontre qualquer cidade do mundo com IA',
      searching: 'Pesquisa global em andamento...',
      notFound: 'Cidade não encontrada.'
    }
  },
  'pt-br': {
    title: 'GlobalTimeTourism',
    subtitle: 'Explore o mundo em tempo real com Gemini',
    searchPlaceholder: 'Buscar cidade ou país...',
    mainTitle: 'Fusos Horários Globais',
    mainSubtitle: 'Selecione uma cidade para gerar uma visualização de IA e descobrir fatos locais.',
    noResults: 'Nenhuma cidade encontrada para',
    footer: 'Desenvolvido por Google Gemini API & React',
    explore: 'Explorar',
    weather: {
      clear: 'Ensolarado',
      cloudy: 'Nublado',
      fog: 'Neblina',
      rain: 'Chuva',
      snow: 'Neve',
      showers: 'Pancadas',
      thunderstorm: 'Tempestade',
      variable: 'Variável'
    },
    modal: {
      view: 'Visualizar',
      genImage: 'Gerar Imagem',
      generating: 'Gerando (Gemini)...',
      specialty: 'Prato Típico',
      facts: 'Curiosidades',
      history: 'História breve',
      visit: 'Melhor época',
      currency: 'Moeda',
      lang: 'Idioma',
      landmarks: 'Pontos turísticos',
      noData: 'Dados indisponíveis.',
      loadingData: 'Analisando dados da cidade...',
      aiPrompt: 'Gere uma imagem fotorrealista em tempo real com IA.'
    },
    timeOfDay: {
        day: 'Dia',
        night: 'Noite'
    },
    globalSearch: {
      button: 'Busca Global IA',
      desc: 'Encontre qualquer cidade do mundo com IA',
      searching: 'Busca global em andamento...',
      notFound: 'Cidade não encontrada.'
    }
  }
};

export const TIME_ZONES: TimeZone[] = [
    // --- UTC-12 to UTC-8 ---
    { id: 'baker-island', offset: 'UTC-12', city: 'Baker Island', country: 'US Minor Islands', region: 'Etc/GMT+12', description: 'Isola disabitata nel Pacifico.', lat: 0.19, lng: -176.47 },
    { id: 'pago-pago', offset: 'UTC-11', city: 'Pago Pago', country: 'Samoa Americane', region: 'Pacific/Pago_Pago', description: 'Porto naturale e capitale.', lat: -14.27, lng: -170.70 },
    { id: 'honolulu', offset: 'UTC-10', city: 'Honolulu', country: 'USA (Hawaii)', region: 'Pacific/Honolulu', description: 'Waikiki Beach e Pearl Harbor.', lat: 21.30, lng: -157.85 },
    { id: 'papeete', offset: 'UTC-10', city: 'Papeete', country: 'Polinesia Francese', region: 'Pacific/Tahiti', description: 'Paradiso tropicale.', lat: -17.54, lng: -149.57 },
    { id: 'anchorage', offset: 'UTC-9', city: 'Anchorage', country: 'USA (Alaska)', region: 'America/Anchorage', description: 'Natura selvaggia e aurore.', lat: 61.21, lng: -149.90 },
    { id: 'los-angeles', offset: 'UTC-8', city: 'Los Angeles', country: 'USA', region: 'America/Los_Angeles', description: 'Hollywood e Santa Monica.', lat: 34.05, lng: -118.24 },
    { id: 'san-francisco', offset: 'UTC-8', city: 'San Francisco', country: 'USA', region: 'America/Los_Angeles', description: 'Golden Gate Bridge.', lat: 37.77, lng: -122.41 },
    { id: 'seattle', offset: 'UTC-8', city: 'Seattle', country: 'USA', region: 'America/Los_Angeles', description: 'La città dello Smeraldo.', lat: 47.60, lng: -122.33 },
    { id: 'las-vegas', offset: 'UTC-8', city: 'Las Vegas', country: 'USA', region: 'America/Los_Angeles', description: 'La capitale dell\'intrattenimento.', lat: 36.16, lng: -115.13 },
    { id: 'vancouver', offset: 'UTC-8', city: 'Vancouver', country: 'Canada', region: 'America/Vancouver', description: 'Oceano e montagne.', lat: 49.28, lng: -123.12 },
    { id: 'tijuana', offset: 'UTC-8', city: 'Tijuana', country: 'Messico', region: 'America/Tijuana', description: 'Città di confine vibrante.', lat: 32.51, lng: -117.03 },

    // --- UTC-7 ---
    { id: 'denver', offset: 'UTC-7', city: 'Denver', country: 'USA', region: 'America/Denver', description: 'La Mile High City.', lat: 39.73, lng: -104.99 },
    { id: 'phoenix', offset: 'UTC-7', city: 'Phoenix', country: 'USA', region: 'America/Phoenix', description: 'Valle del Sole.', lat: 33.44, lng: -112.07 },
    { id: 'salt-lake-city', offset: 'UTC-7', city: 'Salt Lake City', country: 'USA', region: 'America/Denver', description: 'Capitale dello Utah.', lat: 40.76, lng: -111.89 },
    { id: 'calgary', offset: 'UTC-7', city: 'Calgary', country: 'Canada', region: 'America/Edmonton', description: 'Città del petrolio e dei rodei.', lat: 51.04, lng: -114.07 },
    { id: 'edmonton', offset: 'UTC-7', city: 'Edmonton', country: 'Canada', region: 'America/Edmonton', description: 'La porta del nord.', lat: 53.54, lng: -113.49 },

    // --- UTC-6 ---
    { id: 'mexico-city', offset: 'UTC-6', city: 'Città del Messico', country: 'Messico', region: 'America/Mexico_City', description: 'Antica capitale azteca.', lat: 19.43, lng: -99.13 },
    { id: 'chicago', offset: 'UTC-6', city: 'Chicago', country: 'USA', region: 'America/Chicago', description: 'Architettura e blues.', lat: 41.87, lng: -87.62 },
    { id: 'houston', offset: 'UTC-6', city: 'Houston', country: 'USA', region: 'America/Chicago', description: 'Space City.', lat: 29.76, lng: -95.36 },
    { id: 'dallas', offset: 'UTC-6', city: 'Dallas', country: 'USA', region: 'America/Chicago', description: 'Centro economico del Texas.', lat: 32.77, lng: -96.79 },
    { id: 'austin', offset: 'UTC-6', city: 'Austin', country: 'USA', region: 'America/Chicago', description: 'Capitale della musica dal vivo.', lat: 30.26, lng: -97.74 },
    { id: 'guadalajara', offset: 'UTC-6', city: 'Guadalajara', country: 'Messico', region: 'America/Mexico_City', description: 'Patria dei Mariachi.', lat: 20.65, lng: -103.34 },
    { id: 'monterrey', offset: 'UTC-6', city: 'Monterrey', country: 'Messico', region: 'America/Monterrey', description: 'Centro industriale.', lat: 25.68, lng: -100.31 },
    { id: 'guatemala-city', offset: 'UTC-6', city: 'Città del Guatemala', country: 'Guatemala', region: 'America/Guatemala', description: 'La più grande città dell\'America Centrale.', lat: 14.63, lng: -90.50 },
    { id: 'san-jose-cr', offset: 'UTC-6', city: 'San José', country: 'Costa Rica', region: 'America/Costa_Rica', description: 'Cuore della Valle Centrale.', lat: 9.92, lng: -84.09 },

    // --- UTC-5 ---
    { id: 'new-york', offset: 'UTC-5', city: 'New York', country: 'USA', region: 'America/New_York', description: 'La Grande Mela.', lat: 40.71, lng: -74.00 },
    { id: 'toronto', offset: 'UTC-5', city: 'Toronto', country: 'Canada', region: 'America/Toronto', description: 'CN Tower e multiculturalismo.', lat: 43.65, lng: -79.38 },
    { id: 'montreal', offset: 'UTC-5', city: 'Montreal', country: 'Canada', region: 'America/Toronto', description: 'Anima francese del Canada.', lat: 45.50, lng: -73.56 },
    { id: 'washington-dc', offset: 'UTC-5', city: 'Washington D.C.', country: 'USA', region: 'America/New_York', description: 'Capitale degli Stati Uniti.', lat: 38.90, lng: -77.03 },
    { id: 'miami', offset: 'UTC-5', city: 'Miami', country: 'USA', region: 'America/New_York', description: 'Spiagge e Art Deco.', lat: 25.76, lng: -80.19 },
    { id: 'atlanta', offset: 'UTC-5', city: 'Atlanta', country: 'USA', region: 'America/New_York', description: 'Hub del sud.', lat: 33.74, lng: -84.38 },
    { id: 'boston', offset: 'UTC-5', city: 'Boston', country: 'USA', region: 'America/New_York', description: 'Città storica e universitaria.', lat: 42.36, lng: -71.05 },
    { id: 'philadelphia', offset: 'UTC-5', city: 'Filadelfia', country: 'USA', region: 'America/New_York', description: 'Culla della libertà.', lat: 39.95, lng: -75.16 },
    { id: 'bogota', offset: 'UTC-5', city: 'Bogotá', country: 'Colombia', region: 'America/Bogota', description: 'Capitale andina.', lat: 4.71, lng: -74.07 },
    { id: 'lima', offset: 'UTC-5', city: 'Lima', country: 'Perù', region: 'America/Lima', description: 'Capitale gastronomica.', lat: -12.04, lng: -77.04 },
    { id: 'panama-city', offset: 'UTC-5', city: 'Panama City', country: 'Panama', region: 'America/Panama', description: 'Il Canale e i grattacieli.', lat: 8.98, lng: -79.51 },
    { id: 'havana', offset: 'UTC-5', city: 'L\'Avana', country: 'Cuba', region: 'America/Havana', description: 'Storia e auto d\'epoca.', lat: 23.11, lng: -82.36 },

    // --- UTC-4 ---
    { id: 'santiago', offset: 'UTC-4', city: 'Santiago', country: 'Cile', region: 'America/Santiago', description: 'Ai piedi delle Ande.', lat: -33.44, lng: -70.66 },
    { id: 'caracas', offset: 'UTC-4', city: 'Caracas', country: 'Venezuela', region: 'America/Caracas', description: 'Valle costiera.', lat: 10.48, lng: -66.90 },
    { id: 'la-paz', offset: 'UTC-4', city: 'La Paz', country: 'Bolivia', region: 'America/La_Paz', description: 'La capitale più alta del mondo.', lat: -16.50, lng: -68.11 },
    { id: 'santo-domingo', offset: 'UTC-4', city: 'Santo Domingo', country: 'Rep. Dominicana', region: 'America/Santo_Domingo', description: 'Prima città del Nuovo Mondo.', lat: 18.48, lng: -69.93 },
    { id: 'san-juan', offset: 'UTC-4', city: 'San Juan', country: 'Porto Rico', region: 'America/Puerto_Rico', description: 'Città murata storica.', lat: 18.46, lng: -66.10 },
    { id: 'manaus', offset: 'UTC-4', city: 'Manaus', country: 'Brasile', region: 'America/Manaus', description: 'Nel cuore dell\'Amazzonia.', lat: -3.11, lng: -60.02 },
    { id: 'halifax', offset: 'UTC-4', city: 'Halifax', country: 'Canada', region: 'America/Halifax', description: 'Porto marittimo storico.', lat: 44.64, lng: -63.57 },

    // --- UTC-3:30 to UTC-3 ---
    { id: 'st-johns', offset: 'UTC-3:30', city: "St. John's", country: 'Canada', region: 'America/St_Johns', description: 'Città più orientale del Nord America.', lat: 47.56, lng: -52.71 },
    { id: 'buenos-aires', offset: 'UTC-3', city: 'Buenos Aires', country: 'Argentina', region: 'America/Argentina/Buenos_Aires', description: 'La Parigi del Sud America.', lat: -34.60, lng: -58.38 },
    { id: 'sao-paulo', offset: 'UTC-3', city: 'San Paolo', country: 'Brasile', region: 'America/Sao_Paulo', description: 'Motore economico del Brasile.', lat: -23.55, lng: -46.63 },
    { id: 'rio-de-janeiro', offset: 'UTC-3', city: 'Rio de Janeiro', country: 'Brasile', region: 'America/Sao_Paulo', description: 'Cristo Redentore e Copacabana.', lat: -22.90, lng: -43.17 },
    { id: 'brasilia', offset: 'UTC-3', city: 'Brasilia', country: 'Brasile', region: 'America/Sao_Paulo', description: 'Architettura modernista.', lat: -15.79, lng: -47.88 },
    { id: 'montevideo', offset: 'UTC-3', city: 'Montevideo', country: 'Uruguay', region: 'America/Montevideo', description: 'Sulle rive del Rio de la Plata.', lat: -34.90, lng: -56.16 },
    { id: 'salvador', offset: 'UTC-3', city: 'Salvador', country: 'Brasile', region: 'America/Bahia', description: 'Cultura afro-brasiliana.', lat: -12.97, lng: -38.50 },
    { id: 'recife', offset: 'UTC-3', city: 'Recife', country: 'Brasile', region: 'America/Recife', description: 'La Venezia brasiliana.', lat: -8.04, lng: -34.87 },
    { id: 'fortaleza', offset: 'UTC-3', city: 'Fortaleza', country: 'Brasile', region: 'America/Fortaleza', description: 'Spiagge e turismo.', lat: -3.73, lng: -38.52 },

    // --- UTC-2 to UTC-1 ---
    { id: 'south-georgia', offset: 'UTC-2', city: 'Grytviken', country: 'Georgia del Sud', region: 'Atlantic/South_Georgia', description: 'Avamposto antartico.', lat: -54.28, lng: -36.50 },
    { id: 'praia', offset: 'UTC-1', city: 'Praia', country: 'Capo Verde', region: 'Atlantic/Cape_Verde', description: 'Arcipelago vulcanico.', lat: 14.93, lng: -23.51 },
    { id: 'azores', offset: 'UTC-1', city: 'Ponta Delgada', country: 'Portogallo (Azzorre)', region: 'Atlantic/Azores', description: 'Natura incontaminata.', lat: 37.74, lng: -25.66 },

    // --- UTC+0 ---
    { id: 'london', offset: 'UTC+0', city: 'Londra', country: 'Regno Unito', region: 'Europe/London', description: 'Big Ben e Tamigi.', lat: 51.50, lng: -0.12 },
    { id: 'dublin', offset: 'UTC+0', city: 'Dublino', country: 'Irlanda', region: 'Europe/Dublin', description: 'Città della letteratura.', lat: 53.34, lng: -6.26 },
    { id: 'lisbon', offset: 'UTC+0', city: 'Lisbona', country: 'Portogallo', region: 'Europe/Lisbon', description: 'Tram e azulejos.', lat: 38.72, lng: -9.13 },
    { id: 'porto', offset: 'UTC+0', city: 'Porto', country: 'Portogallo', region: 'Europe/Lisbon', description: 'Famosa per il vino.', lat: 41.15, lng: -8.62 },
    { id: 'casablanca', offset: 'UTC+0', city: 'Casablanca', country: 'Marocco', region: 'Africa/Casablanca', description: 'Moschea Hassan II.', lat: 33.57, lng: -7.58 },
    { id: 'rabat', offset: 'UTC+0', city: 'Rabat', country: 'Marocco', region: 'Africa/Casablanca', description: 'Capitale imperiale.', lat: 34.02, lng: -6.83 },
    { id: 'dakar', offset: 'UTC+0', city: 'Dakar', country: 'Senegal', region: 'Africa/Dakar', description: 'Punto più occidentale dell\'Africa.', lat: 14.71, lng: -17.46 },
    { id: 'accra', offset: 'UTC+0', city: 'Accra', country: 'Ghana', region: 'Africa/Accra', description: 'Mercati vivaci.', lat: 5.60, lng: -0.18 },
    { id: 'reykjavik', offset: 'UTC+0', city: 'Reykjavík', country: 'Islanda', region: 'Atlantic/Reykjavik', description: 'Terra del ghiaccio e del fuoco.', lat: 64.14, lng: -21.94 },

    // --- UTC+1 ---
    { id: 'rome', offset: 'UTC+1', city: 'Roma', country: 'Italia', region: 'Europe/Rome', description: 'Colosseo e Vaticano.', lat: 41.90, lng: 12.49 },
    { id: 'milan', offset: 'UTC+1', city: 'Milano', country: 'Italia', region: 'Europe/Rome', description: 'Capitale della moda.', lat: 45.46, lng: 9.19 },
    { id: 'paris', offset: 'UTC+1', city: 'Parigi', country: 'Francia', region: 'Europe/Paris', description: 'Torre Eiffel.', lat: 48.85, lng: 2.35 },
    { id: 'berlin', offset: 'UTC+1', city: 'Berlino', country: 'Germania', region: 'Europe/Berlin', description: 'Muro di Berlino e club.', lat: 52.52, lng: 13.40 },
    { id: 'madrid', offset: 'UTC+1', city: 'Madrid', country: 'Spagna', region: 'Europe/Madrid', description: 'Musei e movida.', lat: 40.41, lng: -3.70 },
    { id: 'barcelona', offset: 'UTC+1', city: 'Barcellona', country: 'Spagna', region: 'Europe/Madrid', description: 'Sagrada Familia.', lat: 41.38, lng: 2.17 },
    { id: 'amsterdam', offset: 'UTC+1', city: 'Amsterdam', country: 'Paesi Bassi', region: 'Europe/Amsterdam', description: 'Canali e biciclette.', lat: 52.36, lng: 4.90 },
    { id: 'brussels', offset: 'UTC+1', city: 'Bruxelles', country: 'Belgio', region: 'Europe/Brussels', description: 'Sede dell\'UE.', lat: 50.85, lng: 4.35 },
    { id: 'vienna', offset: 'UTC+1', city: 'Vienna', country: 'Austria', region: 'Europe/Vienna', description: 'Musica classica e caffè.', lat: 48.20, lng: 16.37 },
    { id: 'zurich', offset: 'UTC+1', city: 'Zurigo', country: 'Svizzera', region: 'Europe/Zurich', description: 'Finanza e lago.', lat: 47.37, lng: 8.54 },
    { id: 'geneva', offset: 'UTC+1', city: 'Ginevra', country: 'Svizzera', region: 'Europe/Zurich', description: 'Diplomazia internazionale.', lat: 46.20, lng: 6.14 },
    { id: 'prague', offset: 'UTC+1', city: 'Praga', country: 'Rep. Ceca', region: 'Europe/Prague', description: 'Città delle cento guglie.', lat: 50.07, lng: 14.43 },
    { id: 'budapest', offset: 'UTC+1', city: 'Budapest', country: 'Ungheria', region: 'Europe/Budapest', description: 'Terme e Danubio.', lat: 47.49, lng: 19.04 },
    { id: 'warsaw', offset: 'UTC+1', city: 'Varsavia', country: 'Polonia', region: 'Europe/Warsaw', description: 'Città fenice.', lat: 52.22, lng: 21.01 },
    { id: 'stockholm', offset: 'UTC+1', city: 'Stoccolma', country: 'Svezia', region: 'Europe/Stockholm', description: 'Arcipelago scandinavo.', lat: 59.32, lng: 18.06 },
    { id: 'oslo', offset: 'UTC+1', city: 'Oslo', country: 'Norvegia', region: 'Europe/Oslo', description: 'Fiordi e vichinghi.', lat: 59.91, lng: 10.75 },
    { id: 'copenhagen', offset: 'UTC+1', city: 'Copenaghen', country: 'Danimarca', region: 'Europe/Copenhagen', description: 'Design e Sirenetta.', lat: 55.67, lng: 12.56 },
    { id: 'lagos', offset: 'UTC+1', city: 'Lagos', country: 'Nigeria', region: 'Africa/Lagos', description: 'Gigante africano.', lat: 6.52, lng: 3.37 },
    { id: 'kinshasa', offset: 'UTC+1', city: 'Kinshasa', country: 'RDC', region: 'Africa/Kinshasa', description: 'Sul fiume Congo.', lat: -4.44, lng: 15.26 },
    { id: 'algiers', offset: 'UTC+1', city: 'Algeri', country: 'Algeria', region: 'Africa/Algiers', description: 'La città bianca.', lat: 36.75, lng: 3.05 },
    { id: 'tunis', offset: 'UTC+1', city: 'Tunisi', country: 'Tunisia', region: 'Africa/Tunis', description: 'Storia cartaginese.', lat: 36.80, lng: 10.18 },

    // --- UTC+2 ---
    { id: 'cairo', offset: 'UTC+2', city: 'Il Cairo', country: 'Egitto', region: 'Africa/Cairo', description: 'Piramidi e Nilo.', lat: 30.04, lng: 31.23 },
    { id: 'athens', offset: 'UTC+2', city: 'Atene', country: 'Grecia', region: 'Europe/Athens', description: 'Acropoli.', lat: 37.98, lng: 23.72 },
    { id: 'istanbul', offset: 'UTC+3', city: 'Istanbul', country: 'Turchia', region: 'Europe/Istanbul', description: 'Tra due continenti.', lat: 41.00, lng: 28.97 }, // Turkey is UTC+3 usually
    { id: 'helsinki', offset: 'UTC+2', city: 'Helsinki', country: 'Finlandia', region: 'Europe/Helsinki', description: 'Perla del Baltico.', lat: 60.16, lng: 24.93 },
    { id: 'bucharest', offset: 'UTC+2', city: 'Bucarest', country: 'Romania', region: 'Europe/Bucharest', description: 'Piccola Parigi.', lat: 44.42, lng: 26.10 },
    { id: 'sofia', offset: 'UTC+2', city: 'Sofia', country: 'Bulgaria', region: 'Europe/Sofia', description: 'Ai piedi del monte Vitosha.', lat: 42.69, lng: 23.32 },
    { id: 'jerusalem', offset: 'UTC+2', city: 'Gerusalemme', country: 'Israele', region: 'Asia/Jerusalem', description: 'Città Santa.', lat: 31.76, lng: 35.21 },
    { id: 'tel-aviv', offset: 'UTC+2', city: 'Tel Aviv', country: 'Israele', region: 'Asia/Jerusalem', description: 'Spiagge e Bauhaus.', lat: 32.08, lng: 34.78 },
    { id: 'beirut', offset: 'UTC+2', city: 'Beirut', country: 'Libano', region: 'Asia/Beirut', description: 'Parigi del Medio Oriente.', lat: 33.89, lng: 35.50 },
    { id: 'amman', offset: 'UTC+2', city: 'Amman', country: 'Giordania', region: 'Asia/Amman', description: 'Città dei sette colli.', lat: 31.94, lng: 35.92 },
    { id: 'johannesburg', offset: 'UTC+2', city: 'Johannesburg', country: 'Sudafrica', region: 'Africa/Johannesburg', description: 'Cuore economico.', lat: -26.20, lng: 28.04 },
    { id: 'cape-town', offset: 'UTC+2', city: 'Città del Capo', country: 'Sudafrica', region: 'Africa/Johannesburg', description: 'Table Mountain.', lat: -33.92, lng: 18.42 },
    { id: 'khartoum', offset: 'UTC+2', city: 'Khartum', country: 'Sudan', region: 'Africa/Khartoum', description: 'Confluenza del Nilo.', lat: 15.50, lng: 32.55 },

    // --- UTC+3 ---
    { id: 'moscow', offset: 'UTC+3', city: 'Mosca', country: 'Russia', region: 'Europe/Moscow', description: 'Piazza Rossa.', lat: 55.75, lng: 37.61 },
    { id: 'st-petersburg', offset: 'UTC+3', city: 'San Pietroburgo', country: 'Russia', region: 'Europe/Moscow', description: 'Ermitage e canali.', lat: 59.93, lng: 30.33 },
    { id: 'minsk', offset: 'UTC+3', city: 'Minsk', country: 'Bielorussia', region: 'Europe/Minsk', description: 'Architettura sovietica.', lat: 53.90, lng: 27.56 },
    { id: 'riyadh', offset: 'UTC+3', city: 'Riad', country: 'Arabia Saudita', region: 'Asia/Riyadh', description: 'Capitale nel deserto.', lat: 24.71, lng: 46.67 },
    { id: 'jeddah', offset: 'UTC+3', city: 'Jeddah', country: 'Arabia Saudita', region: 'Asia/Riyadh', description: 'Porta della Mecca.', lat: 21.54, lng: 39.17 },
    { id: 'baghdad', offset: 'UTC+3', city: 'Baghdad', country: 'Iraq', region: 'Asia/Baghdad', description: 'Culla della civiltà.', lat: 33.31, lng: 44.36 },
    { id: 'nairobi', offset: 'UTC+3', city: 'Nairobi', country: 'Kenya', region: 'Africa/Nairobi', description: 'Safari city.', lat: -1.29, lng: 36.82 },
    { id: 'addis-ababa', offset: 'UTC+3', city: 'Addis Abeba', country: 'Etiopia', region: 'Africa/Addis_Ababa', description: 'Capitale diplomatica africana.', lat: 9.03, lng: 38.74 },
    { id: 'antananarivo', offset: 'UTC+3', city: 'Antananarivo', country: 'Madagascar', region: 'Indian/Antananarivo', description: 'Isola rossa.', lat: -18.87, lng: 47.50 },
    { id: 'doha', offset: 'UTC+3', city: 'Doha', country: 'Qatar', region: 'Asia/Qatar', description: 'Skyline futuristico.', lat: 25.28, lng: 51.53 },

    // --- UTC+3:30 to UTC+4:30 ---
    { id: 'tehran', offset: 'UTC+3:30', city: 'Teheran', country: 'Iran', region: 'Asia/Tehran', description: 'Monti e metropoli.', lat: 35.68, lng: 51.38 },
    { id: 'dubai', offset: 'UTC+4', city: 'Dubai', country: 'EAU', region: 'Asia/Dubai', description: 'Burj Khalifa.', lat: 25.20, lng: 55.27 },
    { id: 'abu-dhabi', offset: 'UTC+4', city: 'Abu Dhabi', country: 'EAU', region: 'Asia/Dubai', description: 'Grande Moschea.', lat: 24.45, lng: 54.37 },
    { id: 'baku', offset: 'UTC+4', city: 'Baku', country: 'Azerbaigian', region: 'Asia/Baku', description: 'Città del fuoco.', lat: 40.40, lng: 49.86 },
    { id: 'yerevan', offset: 'UTC+4', city: 'Yerevan', country: 'Armenia', region: 'Asia/Yerevan', description: 'Città rosa.', lat: 40.18, lng: 44.51 },
    { id: 'tbilisi', offset: 'UTC+4', city: 'Tbilisi', country: 'Georgia', region: 'Asia/Tbilisi', description: 'Terme e montagne.', lat: 41.71, lng: 44.82 },
    { id: 'muscat', offset: 'UTC+4', city: 'Mascate', country: 'Oman', region: 'Asia/Muscat', description: 'Tradizione e mare.', lat: 23.58, lng: 58.40 },
    { id: 'kabul', offset: 'UTC+4:30', city: 'Kabul', country: 'Afghanistan', region: 'Asia/Kabul', description: 'Valle storica.', lat: 34.55, lng: 69.20 },

    // --- UTC+5 to UTC+6 ---
    { id: 'karachi', offset: 'UTC+5', city: 'Karachi', country: 'Pakistan', region: 'Asia/Karachi', description: 'Porto sul Mar Arabico.', lat: 24.86, lng: 67.00 },
    { id: 'islamabad', offset: 'UTC+5', city: 'Islamabad', country: 'Pakistan', region: 'Asia/Karachi', description: 'Città giardino.', lat: 33.68, lng: 73.04 },
    { id: 'lahore', offset: 'UTC+5', city: 'Lahore', country: 'Pakistan', region: 'Asia/Karachi', description: 'Cuore culturale.', lat: 31.52, lng: 74.35 },
    { id: 'tashkent', offset: 'UTC+5', city: 'Tashkent', country: 'Uzbekistan', region: 'Asia/Tashkent', description: 'Via della Seta.', lat: 41.29, lng: 69.24 },
    { id: 'male', offset: 'UTC+5', city: 'Malé', country: 'Maldive', region: 'Indian/Maldives', description: 'Atollo oceanico.', lat: 4.17, lng: 73.50 },
    { id: 'mumbai', offset: 'UTC+5:30', city: 'Mumbai', country: 'India', region: 'Asia/Kolkata', description: 'Bollywood e finanza.', lat: 19.07, lng: 72.87 },
    { id: 'new-delhi', offset: 'UTC+5:30', city: 'New Delhi', country: 'India', region: 'Asia/Kolkata', description: 'Capitale storica.', lat: 28.61, lng: 77.20 },
    { id: 'bangalore', offset: 'UTC+5:30', city: 'Bangalore', country: 'India', region: 'Asia/Kolkata', description: 'Silicon Valley indiana.', lat: 12.97, lng: 77.59 },
    { id: 'chennai', offset: 'UTC+5:30', city: 'Chennai', country: 'India', region: 'Asia/Kolkata', description: 'Porta del sud.', lat: 13.08, lng: 80.27 },
    { id: 'kolkata', offset: 'UTC+5:30', city: 'Calcutta', country: 'India', region: 'Asia/Kolkata', description: 'Capitale culturale.', lat: 22.57, lng: 88.36 },
    { id: 'colombo', offset: 'UTC+5:30', city: 'Colombo', country: 'Sri Lanka', region: 'Asia/Colombo', description: 'Porto sull\'Oceano Indiano.', lat: 6.92, lng: 79.86 },
    { id: 'kathmandu', offset: 'UTC+5:45', city: 'Kathmandu', country: 'Nepal', region: 'Asia/Kathmandu', description: 'Templi e montagne.', lat: 27.71, lng: 85.32 },
    { id: 'dhaka', offset: 'UTC+6', city: 'Dhaka', country: 'Bangladesh', region: 'Asia/Dhaka', description: 'Città dei risciò.', lat: 23.81, lng: 90.41 },
    { id: 'almaty', offset: 'UTC+6', city: 'Almaty', country: 'Kazakistan', region: 'Asia/Almaty', description: 'Montagne Trans-Ili Alatau.', lat: 43.22, lng: 76.85 },
    { id: 'bishkek', offset: 'UTC+6', city: 'Bishkek', country: 'Kirghizistan', region: 'Asia/Bishkek', description: 'Mercati e montagne.', lat: 42.87, lng: 74.59 },

    // --- UTC+6:30 to UTC+8 ---
    { id: 'yangon', offset: 'UTC+6:30', city: 'Yangon', country: 'Myanmar', region: 'Asia/Yangon', description: 'Pagoda Shwedagon.', lat: 16.84, lng: 96.17 },
    { id: 'bangkok', offset: 'UTC+7', city: 'Bangkok', country: 'Thailandia', region: 'Asia/Bangkok', description: 'Città degli angeli.', lat: 13.75, lng: 100.50 },
    { id: 'jakarta', offset: 'UTC+7', city: 'Giacarta', country: 'Indonesia', region: 'Asia/Jakarta', description: 'Metropoli di Java.', lat: -6.20, lng: 106.84 },
    { id: 'hanoi', offset: 'UTC+7', city: 'Hanoi', country: 'Vietnam', region: 'Asia/Bangkok', description: 'Capitale millenaria.', lat: 21.02, lng: 105.83 },
    { id: 'ho-chi-minh', offset: 'UTC+7', city: 'Ho Chi Minh City', country: 'Vietnam', region: 'Asia/Bangkok', description: 'Dinamica Saigon.', lat: 10.82, lng: 106.62 },
    { id: 'phnom-penh', offset: 'UTC+7', city: 'Phnom Penh', country: 'Cambogia', region: 'Asia/Phnom_Penh', description: 'Perla d\'Asia.', lat: 11.55, lng: 104.92 },
    { id: 'singapore', offset: 'UTC+8', city: 'Singapore', country: 'Singapore', region: 'Asia/Singapore', description: 'Città giardino futuristica.', lat: 1.35, lng: 103.81 },
    { id: 'kuala-lumpur', offset: 'UTC+8', city: 'Kuala Lumpur', country: 'Malesia', region: 'Asia/Kuala_Lumpur', description: 'Petronas Towers.', lat: 3.13, lng: 101.68 },
    { id: 'beijing', offset: 'UTC+8', city: 'Pechino', country: 'Cina', region: 'Asia/Shanghai', description: 'Città Proibita.', lat: 39.90, lng: 116.40 },
    { id: 'shanghai', offset: 'UTC+8', city: 'Shanghai', country: 'Cina', region: 'Asia/Shanghai', description: 'Il Bund.', lat: 31.23, lng: 121.47 },
    { id: 'hong-kong', offset: 'UTC+8', city: 'Hong Kong', country: 'Cina', region: 'Asia/Hong_Kong', description: 'Skyline iconico.', lat: 22.31, lng: 114.16 },
    { id: 'taipei', offset: 'UTC+8', city: 'Taipei', country: 'Taiwan', region: 'Asia/Taipei', description: 'Taipei 101.', lat: 25.03, lng: 121.56 },
    { id: 'manila', offset: 'UTC+8', city: 'Manila', country: 'Filippine', region: 'Asia/Manila', description: 'Perla d\'Oriente.', lat: 14.59, lng: 120.98 },
    { id: 'perth', offset: 'UTC+8', city: 'Perth', country: 'Australia', region: 'Australia/Perth', description: 'Città più isolata.', lat: -31.95, lng: 115.86 },
    { id: 'ulaanbaatar', offset: 'UTC+8', city: 'Ulaanbaatar', country: 'Mongolia', region: 'Asia/Ulaanbaatar', description: 'Capitale nomade.', lat: 47.91, lng: 106.91 },

    // --- UTC+9 to UTC+14 ---
    { id: 'tokyo', offset: 'UTC+9', city: 'Tokyo', country: 'Giappone', region: 'Asia/Tokyo', description: 'Metropoli neon.', lat: 35.67, lng: 139.65 },
    { id: 'osaka', offset: 'UTC+9', city: 'Osaka', country: 'Giappone', region: 'Asia/Tokyo', description: 'Cucina e castello.', lat: 34.69, lng: 135.50 },
    { id: 'kyoto', offset: 'UTC+9', city: 'Kyoto', country: 'Giappone', region: 'Asia/Tokyo', description: 'Templi antichi.', lat: 35.01, lng: 135.76 },
    { id: 'seoul', offset: 'UTC+9', city: 'Seoul', country: 'Corea del Sud', region: 'Asia/Seoul', description: 'Tecnologia e palazzi.', lat: 37.56, lng: 126.97 },
    { id: 'busan', offset: 'UTC+9', city: 'Busan', country: 'Corea del Sud', region: 'Asia/Seoul', description: 'Porto e spiagge.', lat: 35.17, lng: 129.07 },
    { id: 'pyongyang', offset: 'UTC+9', city: 'Pyongyang', country: 'Corea del Nord', region: 'Asia/Pyongyang', description: 'Capitale isolata.', lat: 39.03, lng: 125.76 },
    { id: 'adelaide', offset: 'UTC+9:30', city: 'Adelaide', country: 'Australia', region: 'Australia/Adelaide', description: 'Vini e festival.', lat: -34.92, lng: 138.60 },
    { id: 'darwin', offset: 'UTC+9:30', city: 'Darwin', country: 'Australia', region: 'Australia/Darwin', description: 'Top End tropicale.', lat: -12.46, lng: 130.84 },
    { id: 'sydney', offset: 'UTC+10', city: 'Sydney', country: 'Australia', region: 'Australia/Sydney', description: 'Opera House.', lat: -33.86, lng: 151.20 },
    { id: 'melbourne', offset: 'UTC+10', city: 'Melbourne', country: 'Australia', region: 'Australia/Melbourne', description: 'Cultura e caffè.', lat: -37.81, lng: 144.96 },
    { id: 'brisbane', offset: 'UTC+10', city: 'Brisbane', country: 'Australia', region: 'Australia/Brisbane', description: 'Sunshine State.', lat: -27.46, lng: 153.02 },
    { id: 'port-moresby', offset: 'UTC+10', city: 'Port Moresby', country: 'Papua Nuova Guinea', region: 'Pacific/Port_Moresby', description: 'Porto naturale.', lat: -9.44, lng: 147.18 },
    { id: 'vladivostok', offset: 'UTC+10', city: 'Vladivostok', country: 'Russia', region: 'Asia/Vladivostok', description: 'Estremo oriente russo.', lat: 43.11, lng: 131.88 },
    { id: 'noumea', offset: 'UTC+11', city: 'Nouméa', country: 'Nuova Caledonia', region: 'Pacific/Noumea', description: 'Francia nel Pacifico.', lat: -22.27, lng: 166.44 },
    { id: 'auckland', offset: 'UTC+12', city: 'Auckland', country: 'Nuova Zelanda', region: 'Pacific/Auckland', description: 'Città delle vele.', lat: -36.84, lng: 174.76 },
    { id: 'wellington', offset: 'UTC+12', city: 'Wellington', country: 'Nuova Zelanda', region: 'Pacific/Auckland', description: 'Capitale ventosa.', lat: -41.28, lng: 174.77 },
    { id: 'christchurch', offset: 'UTC+12', city: 'Christchurch', country: 'Nuova Zelanda', region: 'Pacific/Auckland', description: 'Città giardino.', lat: -43.53, lng: 172.63 },
    { id: 'suva', offset: 'UTC+12', city: 'Suva', country: 'Fiji', region: 'Pacific/Fiji', description: 'Hub del Pacifico.', lat: -18.14, lng: 178.42 },
    { id: 'apia', offset: 'UTC+13', city: 'Apia', country: 'Samoa', region: 'Pacific/Apia', description: 'Isola Upolu.', lat: -13.83, lng: -171.76 },
    { id: 'kiritimati', offset: 'UTC+14', city: 'Kiritimati', country: 'Kiribati', region: 'Pacific/Kiritimati', description: 'Christmas Island.', lat: 1.87, lng: -157.40 },
];