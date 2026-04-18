
import React from 'react';
import { useInView } from '../../hooks/useInView';

const FestivalPurposeSection: React.FC = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="but"
      className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-[#F2F0EB]"
      aria-labelledby="festival-purpose-title"
    >
      <div className="max-w-4xl mx-auto">
        {/* Label */}
        <p className={`font-mono text-[10px] uppercase tracking-[0.3em] text-[#BC0000] mb-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Ce qu'on construit
        </p>

        {/* Titre */}
        <h2
          id="festival-purpose-title"
          className={`font-serif italic text-3xl md:text-4xl text-black leading-tight mb-8 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Un festival qui grandit de bas en haut.
        </h2>

        {/* Corps */}
        <div className={`space-y-5 mb-10 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-base md:text-lg text-black/80 leading-relaxed max-w-2xl">
            Le Festival des Sans-Papiers n'est pas un événement qu'on organise <em>pour</em> les sans-papiers. C'est un réseau qui se construit <em>avec</em> eux — collectif par collectif, soirée par soirée, quartier par quartier.
          </p>
          <p className="text-base md:text-lg text-black/80 leading-relaxed max-w-2xl">
            L'objectif n'est pas d'abord financier. C'est que chaque collectif devienne un acteur culturel qui compte dans sa ville. Qui a des ressources, des contacts, une légitimité — et qui peut agir quand il le décide.
          </p>
        </div>

        {/* Citation */}
        <blockquote className={`border-l-2 border-[#BC0000] pl-5 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="font-serif italic text-lg md:text-xl text-black/70 leading-relaxed">
            "Ce n'est pas en forçant l'unité qu'on construit un mouvement. C'est en renforçant chaque partie que l'ensemble devient possible."
          </p>
          <footer className="mt-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A68A56]">Ballal asbl</span>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default FestivalPurposeSection;
