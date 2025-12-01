import React, { useEffect, useState } from 'react';
import { TimeZone, Language } from '../types';
import { UI_TEXT } from '../constants';
import { formatInTimeZone } from 'date-fns-tz';
import { Clock, MapPin, Loader2, Image as ImageIcon, Cloud, Sun, CloudRain, CloudSnow, CloudLightning, CloudFog, Wind } from 'lucide-react';

interface TimeZoneCardProps {
  zone: TimeZone;
  onSelect: (zone: TimeZone) => void;
  isFeatured?: boolean;
  language: Language;
}

interface WeatherData {
  temperature: number;
  weathercode: number;
}

// Helper to map WMO Weather Codes to Icons and Labels
const getWeatherConfig = (code: number, lang: Language) => {
  const t = UI_TEXT[lang].weather;

  // Sun: Slow spin
  if (code === 0) return { label: t.clear, icon: Sun, color: 'text-amber-400', animation: 'animate-[spin_10s_linear_infinite]' };
  // Clouds/Atmosphere: Pulse
  if (code >= 1 && code <= 3) return { label: t.cloudy, icon: Cloud, color: 'text-slate-300', animation: 'animate-pulse' };
  if (code === 45 || code === 48) return { label: t.fog, icon: CloudFog, color: 'text-slate-400', animation: 'animate-pulse' };
  // Precipitations: Pulse (subtle activity)
  if (code >= 51 && code <= 67) return { label: t.rain, icon: CloudRain, color: 'text-blue-300', animation: 'animate-pulse' };
  if (code >= 71 && code <= 77) return { label: t.snow, icon: CloudSnow, color: 'text-white', animation: 'animate-pulse' };
  if (code >= 80 && code <= 82) return { label: t.showers, icon: CloudRain, color: 'text-blue-400', animation: 'animate-pulse' };
  if (code >= 95 && code <= 99) return { label: t.thunderstorm, icon: CloudLightning, color: 'text-yellow-400', animation: 'animate-pulse' };
  // Default
  return { label: t.variable, icon: Wind, color: 'text-slate-300', animation: 'animate-pulse' };
};

export const TimeZoneCard: React.FC<TimeZoneCardProps> = ({ zone, onSelect, isFeatured = false, language }) => {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch Weather from Open-Meteo (Free, No Key required)
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${zone.lat}&longitude=${zone.lng}&current_weather=true`
        );
        const data = await response.json();
        if (data.current_weather) {
          setWeather({
            temperature: data.current_weather.temperature,
            weathercode: data.current_weather.weathercode,
          });
        }
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
  }, [zone.lat, zone.lng]);

  // Format time for the specific zone
  const localTime = formatInTimeZone(time, zone.region, 'HH:mm');
  // Date format depends on locale slightly, but we keep it simple here or could use date-fns locales
  const localDate = formatInTimeZone(time, zone.region, 'EEE, d MMM');
  
  // Determine if it's day or night loosely based on hour
  const hour = parseInt(formatInTimeZone(time, zone.region, 'H'), 10);
  const isNight = hour < 6 || hour > 18;
  const periodColor = isNight ? 'text-indigo-300' : 'text-amber-300';
  const bgGradient = isFeatured 
    ? (isNight ? 'bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900' : 'bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400')
    : 'bg-slate-800 hover:bg-slate-750';

  // Weather Config
  const weatherConfig = weather ? getWeatherConfig(weather.weathercode, language) : null;
  const WeatherIcon = weatherConfig?.icon || Sun;

  return (
    <div 
      onClick={() => onSelect(zone)}
      className={`
        relative overflow-hidden rounded-xl border border-slate-700 
        transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:border-blue-500/50 group
        ${isFeatured ? 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2 h-full' : 'h-56'}
        ${bgGradient}
      `}
    >
        {/* Simple placeholder bg image effect */}
        <div className="absolute inset-0 z-0 opacity-20 transition-transform duration-700 group-hover:scale-110">
            <img 
              src={`https://picsum.photos/seed/${zone.city}/800/600`} 
              alt={zone.city} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
            />
        </div>
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 p-5 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start">
                <div>
                    <span className={`inline-flex items-center text-xs font-bold px-2 py-1 rounded-full bg-black/30 backdrop-blur-md mb-2 ${periodColor} border border-white/10`}>
                        {zone.offset}
                    </span>
                    <h3 className={`font-bold text-white leading-tight ${isFeatured ? 'text-3xl mt-2' : 'text-xl'}`}>
                        {zone.city}
                    </h3>
                    <div className="flex items-center text-slate-300 text-sm mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {zone.country}
                    </div>
                </div>
                {isFeatured && (
                    <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/10">
                        <ImageIcon className="w-6 h-6 text-white" />
                    </div>
                )}
            </div>

            <div className="mt-auto flex items-end justify-between">
                <div>
                    <div className={`font-mono text-white tracking-tighter ${isFeatured ? 'text-6xl font-light' : 'text-4xl font-semibold'}`}>
                        {localTime}
                    </div>
                    <div className="text-slate-300 text-sm font-medium mt-1">
                        {localDate}
                    </div>
                </div>

                {/* Weather Section */}
                {weather && weatherConfig && (
                    <div className="text-right bg-black/20 backdrop-blur-sm p-2 rounded-lg border border-white/5 animate-in fade-in duration-500">
                        <div className="flex items-center justify-end space-x-1 mb-0.5">
                            {/* Animated Icon */}
                            <WeatherIcon className={`w-5 h-5 ${weatherConfig.color} ${weatherConfig.animation}`} />
                            <span className="text-xl font-bold text-white">{Math.round(weather.temperature)}°</span>
                        </div>
                        <div className="text-xs font-medium text-slate-300">
                            {weatherConfig.label}
                        </div>
                    </div>
                )}
            </div>
        </div>
        
        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 backdrop-blur-[2px]">
            <div className="text-white font-semibold flex items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {UI_TEXT[language].explore} {zone.city} <Clock className="ml-2 w-4 h-4" />
            </div>
        </div>
    </div>
  );
};