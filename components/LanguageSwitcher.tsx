
import React, { memo } from 'react';
import { Language } from '../types';

interface Props {
  currentLang: Language;
  setLang: (lang: Language) => void;
  showLabel?: boolean;
}

const LanguageSwitcher: React.FC<Props> = ({ 
  currentLang, 
  setLang,
  showLabel = true
}) => {
  const langs: Language[] = ['FR', 'NL', 'EN'];
  
  const langNames: Record<Language, string> = {
    'FR': 'Français',
    'NL': 'Nederlands',
    'EN': 'English'
  };

  return (
    <nav className="flex flex-col items-end" aria-label="Sélecteur de langue">
      {showLabel && (
        <span className="text-[10px] font-black uppercase tracking-widest opacity-30 mb-2">
          ÉDITION
        </span>
      )}
      <div className="flex gap-4">
        {langs.map((langue) => (
          <button
            key={langue}
            onClick={() => setLang(langue)}
            className={`font-anton text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#BC0000] focus:ring-offset-4 px-2 py-1 ${
              currentLang === langue 
                ? 'text-[#BC0000] border-b-2 border-[#BC0000]' 
                : 'text-black/40 hover:text-black hover:scale-110'
            }`}
            aria-label={`Traduire en ${langNames[langue]}`}
            aria-pressed={currentLang === langue}
          >
            {langue}
          </button>
        ))}
      </div>
    </nav>
  );
};

// Memoisation pour éviter les rendus si les props ne changent pas
export default memo(LanguageSwitcher);
