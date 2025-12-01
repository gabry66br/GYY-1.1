export type Language = 'it' | 'en' | 'es' | 'fr' | 'de' | 'pt' | 'pt-br';

export interface TimeZone {
  id: string;
  offset: string; // e.g., "UTC+1"
  city: string;
  country: string;
  region: string; // IANA time zone identifier e.g., "Europe/Rome"
  description: string;
  lat: number;
  lng: number;
}

export interface CityInfo {
  description: string;
  history: string;
  bestTimeToVisit: string;
  currency: string;
  primaryLanguage: string;
  landmarks: string[];
  facts: string[];
  dish: string;
}

export interface GeneratedContent {
  imageUrl?: string;
  info?: CityInfo;
  loading: boolean;
  error?: string;
}