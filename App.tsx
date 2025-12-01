import React, { useState, useMemo } from 'react';
import { TIME_ZONES, SUPPORTED_LANGUAGES, UI_TEXT } from './constants';
import { TimeZone, Language } from './types';
import { TimeZoneCard } from './components/TimeZoneCard';
import { CityDetailModal } from './components/CityDetailModal';
import { findCityData } from './services/geminiService';
import { Search, ChevronDown, Globe, Loader2, Plus, Sparkles } from 'lucide-react';

// Custom Animated Logo Component
const AppLogo = () => (
  <div className="relative group">
    {/* Glow Effect */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
    
    {/* Main Container */}
    <div className="relative w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl flex items-center justify-center border border-slate-700 shadow-xl overflow-hidden">
      
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 40 40">
          <pattern id="grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main Icon SVG */}
      <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8 relative z-10 drop-shadow-md">
        {/* Globe Circle */}
        <circle cx="32" cy="32" r="24" className="stroke-blue-500" strokeWidth="2.5" fill="url(#globeGradient)" />
        
        {/* Longitude Lines */}
        <path d="M32 8C32 8 18 18 18 32C18 46 32 56 32 56" className="stroke-blue-400 opacity-60" strokeWidth="2" strokeLinecap="round"/>
        <path d="M32 8C32 8 46 18 46 32C46 46 32 56 32 56" className="stroke-blue-400 opacity-60" strokeWidth="2" strokeLinecap="round"/>
        
        {/* Latitude Line */}
        <path d="M10 32H54" className="stroke-blue-400 opacity-60" strokeWidth="2" strokeLinecap="round"/>

        {/* Clock Hands (Time) */}
        <path d="M32 32L32 18" className="stroke-white" strokeWidth="3" strokeLinecap="round" />
        <path d="M32 32L42 38" className="stroke-white" strokeWidth="3" strokeLinecap="round" />
        <circle cx="32" cy="32" r="2.5" className="fill-white" />

        {/* AI Sparkle (Accent) */}
        <path d="M52 10L54 6L56 10L60 12L56 14L54 18L52 14L48 12Z" className="fill-amber-400 animate-pulse" />
        
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="globeGradient" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1e293b" stopOpacity="0.5"/>
            <stop offset="1" stopColor="#0f172a" stopOpacity="0.8"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
);

const App: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<TimeZone | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState<Language>('it');
  const [customZones, setCustomZones] = useState<TimeZone[]>([]);
  const [isSearchingGlobal, setIsSearchingGlobal] = useState(false);
  const [globalSearchError, setGlobalSearchError] = useState(false);

  const t = UI_TEXT[language];

  // Combine static and custom zones
  const allZones = useMemo(() => [...customZones, ...TIME_ZONES], [customZones]);

  // Filter logic
  const filteredZones = useMemo(() => {
    // If search is empty, return ALL zones (but we will slice them in render for performance)
    if (!searchTerm) return allZones;
    
    return allZones.filter(z => 
      z.city.toLowerCase().includes(searchTerm.toLowerCase()) || 
      z.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      z.offset.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, allZones]);

  // Performance optimization: 
  // If no search term, show only the first 24 items to keep the page light.
  // If searching, show all matches.
  const displayZones = searchTerm ? filteredZones : filteredZones.slice(0, 24);

  const handleGlobalSearch = async () => {
    if (!searchTerm) return;
    setIsSearchingGlobal(true);
    setGlobalSearchError(false);

    try {
        const newZone = await findCityData(searchTerm, language);
        if (newZone) {
            // Check if already exists in custom zones to avoid duplicates
            if (!customZones.some(z => z.city === newZone.city)) {
                setCustomZones(prev => [newZone, ...prev]);
            }
            setSearchTerm(''); // Clear search to show the result at top (since custom zones are prepended)
        } else {
            setGlobalSearchError(true);
        }
    } catch (e) {
        setGlobalSearchError(true);
    } finally {
        setIsSearchingGlobal(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 pb-20">
      
      {/* Header */}
      <header className="sticky top-0 z-30 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Custom Logo */}
            <AppLogo />
            
            <div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-400 tracking-tight">
                {t.title}
              </h1>
              <p className="text-xs text-slate-500 hidden sm:block font-medium tracking-wide">{t.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative group">
                <div className="flex items-center space-x-1 bg-slate-800 border border-slate-700 px-3 py-2 rounded-lg cursor-pointer hover:border-blue-500/50 transition-colors">
                    <span className="text-lg leading-none">{SUPPORTED_LANGUAGES.find(l => l.code === language)?.flag}</span>
                    <span className="text-sm font-medium text-slate-300 hidden sm:block uppercase">{language}</span>
                    <ChevronDown className="w-3 h-3 text-slate-500" />
                </div>
                {/* Dropdown */}
                <div className="absolute right-0 top-full mt-2 w-32 bg-slate-800 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
                    {SUPPORTED_LANGUAGES.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => setLanguage(lang.code)}
                            className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-2 hover:bg-slate-700 first:rounded-t-lg last:rounded-b-lg ${language === lang.code ? 'text-blue-400 bg-slate-700/50' : 'text-slate-300'}`}
                        >
                            <span>{lang.flag}</span>
                            <span>{lang.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Search */}
            <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input 
                type="text" 
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleGlobalSearch();
                }}
                className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-48 sm:w-64 transition-all"
                />
            </div>
          </div>
        </div>
        
        {/* Mobile Search Bar (Separate row) */}
        <div className="md:hidden px-4 pb-4">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input 
                type="text" 
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleGlobalSearch();
                }}
                className="pl-10 pr-4 py-2 w-full bg-slate-800 border border-slate-700 rounded-full text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">{t.mainTitle}</h2>
          <p className="text-slate-400">
            {searchTerm 
              ? `${filteredZones.length} risultati per "${searchTerm}"` 
              : t.mainSubtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[minmax(12rem,auto)]">
          
          {/* Static and Custom Zones */}
          {displayZones.map((zone) => {
            // Feature logic: Feature Rome if in list and no search, or simply first item if searching
            const isFeatured = !searchTerm && zone.id === 'rome'; 
            return (
              <TimeZoneCard 
                key={zone.id} 
                zone={zone} 
                onSelect={setSelectedZone}
                isFeatured={isFeatured} 
                language={language}
              />
            );
          })}
          
          {/* Global AI Search Card */}
          {searchTerm && (
            <div 
                onClick={!isSearchingGlobal ? handleGlobalSearch : undefined}
                className={`
                    relative overflow-hidden rounded-xl border-2 border-dashed
                    transition-all duration-300 cursor-pointer flex flex-col items-center justify-center p-6 h-56 text-center group
                    ${globalSearchError ? 'border-red-500/50 hover:bg-red-900/10' : 'border-slate-600 hover:border-blue-400 hover:bg-slate-800/50'}
                `}
            >
                {isSearchingGlobal ? (
                    <>
                        <Loader2 className="w-8 h-8 text-blue-400 animate-spin mb-4" />
                        <h3 className="text-white font-semibold">{t.globalSearch.searching}</h3>
                    </>
                ) : globalSearchError ? (
                    <>
                         <div className="p-3 bg-red-500/10 rounded-full mb-3 text-red-400">
                             <Search className="w-6 h-6" />
                         </div>
                         <h3 className="text-red-400 font-semibold mb-1">{t.globalSearch.notFound}</h3>
                         <p className="text-slate-500 text-xs">Riprova con un nome diverso</p>
                    </>
                ) : (
                    <>
                        <div className="p-3 bg-blue-500/10 rounded-full mb-3 group-hover:bg-blue-500/20 transition-colors">
                            <Sparkles className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-white font-semibold mb-1">{t.globalSearch.button}</h3>
                        <p className="text-slate-400 text-xs px-4">{t.globalSearch.desc} "{searchTerm}"</p>
                    </>
                )}
            </div>
          )}
        </div>

        {!searchTerm && (
          <div className="mt-12 text-center text-slate-500 text-sm">
             Visualizzazione parziale. Usa la barra di ricerca per trovare altre città.
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-12 py-8 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
              <p>{t.footer}</p>
          </div>
      </footer>

      {/* Modal */}
      {selectedZone && (
        <CityDetailModal 
          zone={selectedZone} 
          onClose={() => setSelectedZone(null)} 
          language={language}
        />
      )}
    </div>
  );
};

export default App;