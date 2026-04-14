
import React from 'react';
import { useAppContext } from '../../context/AppContext';

const HeroSection: React.FC = () => {
  const { dispatch } = useAppContext();

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0F0F0F] text-white px-4 sm:px-6 lg:px-8 py-32"
      role="banner"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600"
          alt=""
          className="w-full h-full object-cover opacity-15"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/70 via-[#0F0F0F]/50 to-[#0F0F0F]" />
      </div>

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center">

        {/* Label */}
        <p className="animate-fade-in delay-200 font-mono text-[10px] uppercase tracking-[0.35em] text-[#BC0000] mb-8">
          Festival des Sans-Papiers · Bruxelles · 2025–2026
        </p>

        {/* H1 — Anton uniquement ici */}
        <h1 className="animate-fade-slide-up delay-400 font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-8">
          FESTIVAL DES<br />
          <span className="text-[#BC0000]">SANS-PAPIERS.</span>
        </h1>

        {/* Sous-titre */}
        <p className="animate-fade-slide-up delay-600 font-serif italic text-xl md:text-2xl text-white/80 leading-relaxed max-w-xl mb-4">
          Un réseau de soirées culturelles co-organisées avec des collectifs de sans-papiers — quartier par quartier, à Bruxelles.
        </p>

        {/* Citation */}
        <p className="animate-fade-slide-up delay-600 font-serif italic text-base text-white/50 leading-relaxed max-w-lg mb-12">
          "Ce n'est pas en forçant l'unité qu'on construit un mouvement. C'est en renforçant chaque partie que l'ensemble devient possible."
        </p>

        {/* CTAs */}
        <div className="animate-fade-in delay-800 flex flex-col sm:flex-row gap-3 items-center">
          <button
            onClick={() => dispatch({ type: 'SET_VIEW', payload: 'project' })}
            className="bg-[#BC0000] text-white px-8 py-3.5 text-sm font-medium rounded-sm hover:bg-[#a00000] transition-colors cursor-pointer"
          >
            Comprendre le projet →
          </button>
          <button
            onClick={() => dispatch({ type: 'TOGGLE_JOIN_MODAL', payload: true })}
            className="border border-white/30 text-white px-8 py-3.5 text-sm font-medium rounded-sm hover:border-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            Rejoindre la coop
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in delay-800">
        <div className="w-px h-12 bg-gradient-to-b from-white/0 to-white/20 mx-auto mb-2" />
        <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">Découvrir</p>
      </div>
    </section>
  );
};

export default HeroSection;
