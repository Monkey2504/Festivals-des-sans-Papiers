import React, { useMemo, useEffect, useState } from 'react';
import { APP_CONFIG } from '../../constants';
import { FestivalDNA } from '../../types';

interface Props {
  onVisibilityChange?: (isVisible: boolean) => void;
}

const FestivalPurposeSection: React.FC<Props> = ({ onVisibilityChange }) => {
  const { definition, format, finalities } = APP_CONFIG.FESTIVAL_DNA;
  const [isVisible, setIsVisible] = useState(false);

  // Observer pour les animations d'entrée
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (onVisibilityChange) {
              onVisibilityChange(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('but');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [onVisibilityChange]);

  // Mémoïsation
  const memoizedFinalities = useMemo(() => finalities, [finalities]);

  // Animation pour les piliers
  const pillarAnimationDelay = (index: number) => {
    return `${index * 100}ms`;
  };

  return (
    <section 
      id="but"
      className="px-4 sm:px-8 py-24 md:py-48 bg-black text-white overflow-hidden relative"
      aria-labelledby="festival-purpose-title"
      role="region"
    >
      {/* Background décoratif */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        aria-hidden="true"
      >
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-white/20 h-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* En-tête animé */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-32">
          <div className="lg:col-span-8">
            <span 
              className={`font-mono text-xs text-[#BC0000] font-black tracking-widest block mb-4 uppercase italic transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              role="doc-subtitle"
            >
              Notre raison d'être
            </span>
            
            <h2 
              id="festival-purpose-title"
              className={`font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl tracking-tighter uppercase leading-[0.8] mb-8 md:mb-12 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              LE FESTIVAL DES <br/>
              <span 
                className="text-[#BC0000] animate-pulse-slow"
                aria-label="sans-papiers"
              >
                SANS-PAPIERS.
              </span>
            </h2>
            
            <blockquote 
              className={`font-serif text-2xl md:text-4xl lg:text-5xl xl:text-6xl italic leading-tight mb-8 md:mb-12 border-l-4 md:border-l-8 border-[#BC0000] pl-4 md:pl-8 opacity-90 transition-all duration-1200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              cite="#festival-manifesto"
            >
              "{definition}"
            </blockquote>
            
            <div 
              className={`bg-white/5 p-6 md:p-8 border border-white/10 font-mono text-xs sm:text-sm uppercase tracking-widest leading-loose text-white/60 italic backdrop-blur-sm transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              role="note"
              aria-label="Format du festival"
            >
              {format}
            </div>
          </div>
          
          <div className="lg:col-span-4 flex flex-col justify-end">
            <article 
              className={`p-6 md:p-10 border-2 md:border-4 border-[#BC0000] bg-white text-black shadow-[8px_8px_0px_0px_rgba(188,0,0,1)] md:shadow-[15px_15px_0px_0px_rgba(188,0,0,1)] group hover:shadow-[20px_20px_0px_0px_rgba(188,0,0,0.8)] transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              role="complementary"
              aria-label="Prise de parole collective"
            >
              <h3 className="font-anton text-2xl md:text-3xl mb-4">
                REPRENDRE LA PAROLE
              </h3>
              <p className="font-mono text-xs leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                Ce festival n'est pas un spectacle sur les sans-papiers, c'est un espace où nous sommes les auteurs, les organisateurs et les voix principales. 
                Nous ne cherchons pas la pitié, nous affirmons notre existence et notre culture.
              </p>
              
              <div className="mt-6 pt-4 border-t border-black/10">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#BC0000]">
                  Manifeste 2025
                </span>
              </div>
            </article>
          </div>
        </div>

        {/* Grille des piliers avec animations séquentielles */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          role="list"
          aria-label="Piliers fondamentaux du festival"
        >
          {memoizedFinalities.map((finality, index) => (
            <article 
              key={index}
              className={`group border-t border-white/10 pt-6 md:pt-12 hover:border-[#BC0000] transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? pillarAnimationDelay(index) : '0ms'
              }}
              role="listitem"
              aria-labelledby={`finality-title-${index}`}
            >
              <span 
                className="font-mono text-[10px] text-[#BC0000] mb-4 block tracking-[0.3em]"
                role="presentation"
              >
                PILIER {String(index + 1).padStart(2, '0')}
              </span>
              
              <h3 
                id={`finality-title-${index}`}
                className="font-anton text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 uppercase tracking-tighter group-hover:text-[#BC0000] transition-colors duration-300"
              >
                {finality.title}
              </h3>
              
              <p className="font-mono text-xs leading-relaxed opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                {finality.desc}
              </p>
              
              <div 
                className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2"
                role="presentation"
                aria-hidden="true"
              >
                <span className="font-mono text-[8px] uppercase tracking-widest text-white/40">
                  En savoir plus
                </span>
                <svg 
                  className="w-4 h-4 text-[#BC0000]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FestivalPurposeSection;