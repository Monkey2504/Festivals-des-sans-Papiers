
import React, { useMemo, useEffect, useState } from 'react';
import { APP_CONFIG } from '../../constants';
import { FestivalDNA } from '../../types';

interface Props {
  onVisibilityChange?: (isVisible: boolean) => void;
}

const FestivalPurposeSection: React.FC<Props> = ({ onVisibilityChange }) => {
  const { definition, format, finalities } = APP_CONFIG.FESTIVAL_DNA;
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section 
      id="but"
      className="px-4 sm:px-8 py-24 md:py-48 bg-black text-white overflow-hidden relative"
      aria-labelledby="festival-purpose-title"
      role="region"
    >
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-32">
          <div className="lg:col-span-8">
            <span className={`font-mono text-xs text-[#BC0000] font-black tracking-widest block mb-4 uppercase italic transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Subjectivation Politique
            </span>
            
            <h2 id="festival-purpose-title" className={`font-anton text-4xl sm:text-5xl md:text-6xl lg:text-8xl tracking-tighter uppercase leading-[0.8] mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              DÉPASSER <br/>
              <span className="text-[#BC0000]">L'INVISIBILITÉ.</span>
            </h2>
            
            <blockquote className={`font-serif text-2xl md:text-5xl italic leading-tight mb-8 md:mb-12 border-l-4 md:border-l-8 border-[#BC0000] pl-4 md:pl-8 opacity-90 transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              "La voix des sans-papiers n'est pas seulement un discours, c'est une contestation des frontières politiques de la citoyenneté."
            </blockquote>
            
            <div className={`bg-white/5 p-6 md:p-8 border border-white/10 font-mono text-xs sm:text-sm uppercase tracking-widest leading-loose text-white/60 italic transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              The Movment offre l'infrastructure technique nécessaire pour que l'« Active Citizenship » exercée sur le terrain rencontre enfin une affirmation publique souveraine.
            </div>
          </div>
          
          <div className="lg:col-span-4 flex flex-col justify-end">
            <article className={`p-10 border-4 border-[#BC0000] bg-white text-black shadow-[15px_15px_0px_0px_rgba(188,0,0,1)] transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <h3 className="font-anton text-3xl mb-4 uppercase">S'AUTO-POSSÉDER</h3>
              <p className="font-mono text-xs leading-relaxed opacity-70">
                Rompre avec l’image passivisée des « victimes » pour affirmer un rôle d’acteurs politiques à part entière. Ici, les concernés sont les auteurs de leur propre récit.
              </p>
            </article>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12" role="list">
          {[
            { title: "AUTOGESTION", desc: "S'organiser via des assemblées générales et une charte définie par les membres." },
            { title: "ACTION DIRECTE", desc: "L'occupation et la grève comme outils de visibilité et de souveraineté." },
            { title: "TRANSNATIONAL", desc: "Relier les voix locales (Bruxelles, Verviers) aux réseaux européens (PICUM)." }
          ].map((item, index) => (
            <article key={index} className={`group border-t border-white/10 pt-12 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 150}ms` }}>
              <span className="font-mono text-[10px] text-[#BC0000] mb-4 block tracking-[0.3em] uppercase">Stratégie {index + 1}</span>
              <h3 className="font-anton text-4xl mb-6 uppercase tracking-tighter group-hover:text-[#BC0000] transition-colors">{item.title}</h3>
              <p className="font-mono text-xs leading-relaxed opacity-50 group-hover:opacity-100 transition-opacity">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FestivalPurposeSection;
