import React, { useEffect, useState } from 'react';
import { TimeZone, CityInfo, Language } from '../types';
import { generateCityImage, generateCityInfo } from '../services/geminiService';
import { UI_TEXT } from '../constants';
import { X, Sparkles, Utensils, Info, Loader2, Camera, History, Calendar, Coins, Languages, Landmark } from 'lucide-react';
import { formatInTimeZone } from 'date-fns-tz';

interface CityDetailModalProps {
  zone: TimeZone;
  onClose: () => void;
  language: Language;
}

export const CityDetailModal: React.FC<CityDetailModalProps> = ({ zone, onClose, language }) => {
  const [image, setImage] = useState<string | null>(null);
  const [info, setInfo] = useState<CityInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingImg, setLoadingImg] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const t = UI_TEXT[language];

  // Time-based greeting for prompt
  const currentHour = parseInt(formatInTimeZone(new Date(), zone.region, 'H'), 10);
  const timeOfDay = currentHour >= 6 && currentHour < 18 ? 'daylight' : 'night';
  const timeLabel = currentHour >= 6 && currentHour < 18 ? t.timeOfDay.day : t.timeOfDay.night;

  useEffect(() => {
    // Load text info automatically
    const loadInfo = async () => {
      setLoading(true);
      try {
        // Pass language to service
        const data = await generateCityInfo(zone.city, zone.country, language);
        setInfo(data);
      } catch (err) {
        console.error(err);
        setError(t.modal.loadingData);
      } finally {
        setLoading(false);
      }
    };
    loadInfo();
  }, [zone, language]);

  const handleGenerateImage = async () => {
    setLoadingImg(true);
    try {
        // Use Gemini 2.5 Image model
        const base64Img = await generateCityImage(zone.city, zone.country, timeOfDay);
        setImage(base64Img);
    } catch (err) {
        console.error(err);
        setError("Impossibile generare l'immagine.");
    } finally {
        setLoadingImg(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-6xl bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700 flex flex-col md:flex-row max-h-[95vh]">
        
        {/* Left Side: Image Area */}
        <div className="w-full md:w-2/5 bg-slate-900 relative min-h-[300px] md:h-auto flex items-center justify-center group flex-shrink-0">
            {image ? (
                <img src={image} alt={`AI view of ${zone.city}`} className="w-full h-full object-cover animate-in fade-in duration-700" />
            ) : (
                <>
                     {/* Placeholder behind */}
                    <img 
                        src={`https://picsum.photos/seed/${zone.city}/800/1000`} 
                        alt="Placeholder" 
                        className="absolute inset-0 w-full h-full object-cover opacity-30" 
                    />
                    <div className="relative z-10 text-center p-6 w-full">
                        <div className="mb-4 inline-block p-4 rounded-full bg-slate-800/50 border border-slate-600 backdrop-blur-md text-slate-400">
                             <Camera className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{t.modal.view} {zone.city}</h3>
                        <p className="text-slate-400 text-sm mb-6">{t.modal.aiPrompt}</p>
                        
                        <button 
                            onClick={handleGenerateImage}
                            disabled={loadingImg}
                            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed mx-auto"
                        >
                            {loadingImg ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    {t.modal.generating}
                                </>
                            ) : (
                                <>
                                    <Sparkles className="w-5 h-5 mr-2" />
                                    {t.modal.genImage} ({timeLabel})
                                </>
                            )}
                        </button>
                    </div>
                </>
            )}

            {/* Close button for mobile */}
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 md:hidden p-2 bg-black/50 text-white rounded-full hover:bg-black/70 z-20"
            >
                <X className="w-5 h-5" />
            </button>
        </div>

        {/* Right Side: Info Area */}
        <div className="w-full md:w-3/5 p-6 md:p-8 overflow-y-auto bg-slate-800">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-1">{zone.city}</h2>
                    <p className="text-blue-400 font-medium text-lg">{zone.country}</p>
                    <p className="text-slate-400 text-sm mt-1">{zone.region} • {zone.offset}</p>
                </div>
                <button 
                    onClick={onClose}
                    className="hidden md:block p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-full transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>

            {loading ? (
                 <div className="space-y-6">
                    <div className="h-4 bg-slate-700/50 rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-slate-700/50 rounded w-5/6 animate-pulse"></div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="h-24 bg-slate-700/50 rounded-xl animate-pulse"></div>
                        <div className="h-24 bg-slate-700/50 rounded-xl animate-pulse"></div>
                    </div>
                    <div className="h-32 bg-slate-700/50 rounded-xl animate-pulse mt-4"></div>
                 </div>
            ) : info ? (
                <div className="space-y-8">
                    
                    {/* Introduction */}
                    <div className="text-slate-300 leading-relaxed text-lg">
                        {info.description}
                    </div>

                    {/* Quick Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-slate-700/30 p-4 rounded-xl border border-slate-700 flex items-start space-x-3">
                            <Coins className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">{t.modal.currency}</h4>
                                <p className="text-white font-medium">{info.currency}</p>
                            </div>
                        </div>
                         <div className="bg-slate-700/30 p-4 rounded-xl border border-slate-700 flex items-start space-x-3">
                            <Languages className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">{t.modal.lang}</h4>
                                <p className="text-white font-medium">{info.primaryLanguage}</p>
                            </div>
                        </div>
                        <div className="bg-slate-700/30 p-4 rounded-xl border border-slate-700 flex items-start space-x-3 sm:col-span-2">
                            <Calendar className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">{t.modal.visit}</h4>
                                <p className="text-white font-medium">{info.bestTimeToVisit}</p>
                            </div>
                        </div>
                    </div>

                    {/* History */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <History className="w-5 h-5 mr-2 text-red-400" />
                            {t.modal.history}
                        </h3>
                         <p className="text-slate-300 text-sm leading-relaxed bg-slate-700/20 p-4 rounded-xl border border-slate-700/50">
                            {info.history}
                         </p>
                    </div>

                    {/* Landmarks */}
                    <div>
                         <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Landmark className="w-5 h-5 mr-2 text-indigo-400" />
                            {t.modal.landmarks}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {info.landmarks.map((mark, i) => (
                                <div key={i} className="bg-slate-700/30 p-3 rounded-lg border border-slate-700/50 text-sm text-center text-slate-200 font-medium">
                                    {mark}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dish */}
                    <div className="bg-gradient-to-r from-orange-900/20 to-slate-700/30 rounded-xl p-5 border border-orange-500/20">
                        <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                            <Utensils className="w-5 h-5 mr-2 text-orange-400" />
                            {t.modal.specialty}
                        </h3>
                        <p className="text-slate-300 italic">"{info.dish}"</p>
                    </div>

                    {/* Fun Facts */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Info className="w-5 h-5 mr-2 text-sky-400" />
                            {t.modal.facts}
                        </h3>
                        <ul className="space-y-3">
                            {info.facts.map((fact, i) => (
                                <li key={i} className="flex items-start bg-slate-700/20 p-3 rounded-lg border border-slate-700/50 hover:bg-slate-700/40 transition-colors">
                                    <span className="flex-shrink-0 w-6 h-6 bg-sky-900/50 text-sky-400 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                                        {i + 1}
                                    </span>
                                    <span className="text-slate-300 text-sm leading-relaxed">{fact}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-64 text-slate-500">
                    <p>{t.modal.noData}</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};