
import React, { useMemo, useEffect, useState, useRef } from 'react';
import { useAppContext } from '../../context/AppContext';

interface HeroSectionProps {
  onScrollTo?: (sectionId: string) => void;
}

const HeroSectionEnhanced: React.FC<HeroSectionProps> = ({ onScrollTo }) => {
  const { dispatch } = useAppContext();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  const fiveW = useMemo(() => [
    { 
        q: 'QUI ?', 
        r: 'LE FESTIVAL', 
        desc: 'Un mouvement porté par les collectifs en lutte (Edition VSP BXL).', 
        view: 'vsp' 
    },
    { 
        q: 'QUOI ?', 
        r: 'LE BLOC', 
        desc: 'La tournée des quartiers + Le grand rassemblement national.', 
        view: 'project' 
    },
    { 
        q: 'QUAND ?', 
        r: 'CYCLE 24-25', 
        desc: 'Mobilisation immédiate. Crowdfunding pour l’outil technique.', 
        view: 'finances' 
    },
    { 
        q: 'OÙ ?', 
        r: 'BRUXELLES', 
        desc: 'Dans les salles partenaires et les places publiques occupées.', 
        view: 'tour' 
    },
    { 
        q: 'COMMENT ?', 
        r: 'AUTOGESTION', 
        desc: 'Une coopérative souveraine possédée par les membres en lutte.', 
        view: 'cooperative' 
    },
    { 
        q: 'POURQUOI ?', 
        r: 'JUSTICE', 
        desc: 'Affirmer la dignité et exiger la régularisation pour tous.', 
        view: 'pact' 
    },
  ], []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F2F0EB] text-center px-4"
      role="banner"
    >
      {/* Background Grille Subtile */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border-r border-b border-black"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1500px] flex flex-col items-center py-20">
        
        {/* Label de Positionnement */}
        <div className={`mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="font-mono text-xs font-black uppercase tracking-[0.4em] bg-black text-white px-8 py-3 shadow-[6px_6px_0px_0px_rgba(188,0,0,1)]">
            Mouvement d'Affirmation Politique
          </span>
        </div>

        {/* TITRE GÉANT : LE FESTIVAL */}
        <h1 className="font-anton text-[12vw] sm:text-[11vw] leading-[0.8] tracking-tighter uppercase mb-20 flex flex-col items-center select-none">
          <span className={`block transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            FESTIVAL DES
          </span>
          <span className={`block text-[#BC0000] transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            SANS-PAPIERS
          </span>
        </h1>

        {/* GRILLE 5W : LA CLARTÉ TOTALE */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-[6px] border-black w-full bg-white transition-all duration-1000 delay-500 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {fiveW.map((item, index) => (
            <button
              key={index}
              onClick={() => dispatch({ type: 'SET_VIEW', payload: item.view as any })}
              className="group flex flex-col items-start p-10 border-r border-b last:border-r-0 border-black hover:bg-[#BC0000] transition-all text-left"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="font-anton text-2xl text-[#BC0000] group-hover:text-black">{item.q}</span>
                <div className="h-px w-8 bg-black/20 group-hover:bg-black/40"></div>
              </div>
              <span className="font-anton text-4xl mb-4 group-hover:text-white">{item.r}</span>
              <p className="font-mono text-xs uppercase leading-snug opacity-60 group-hover:opacity-100 group-hover:text-white">
                {item.desc}
              </p>
            </button>
          ))}
        </div>

        {/* Bouton d'action direct */}
        <div className={`mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button 
                onClick={() => dispatch({type: 'SET_VIEW', payload: 'project'})}
                className="font-anton text-3xl md:text-5xl border-b-8 border-[#BC0000] hover:text-[#BC0000] transition-all pb-2 cursor-pointer"
            >
                EXPLORER LE DOSSIER COMPLET →
            </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSectionEnhanced;
