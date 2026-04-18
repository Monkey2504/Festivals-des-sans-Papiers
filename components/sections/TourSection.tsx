
import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { useInView } from '../../hooks/useInView';

const TIMELINE = [
  { step: '01', label: 'Soirée locale', desc: 'Dans les quartiers, avec les collectifs' },
  { step: '02', label: 'Événement régional', desc: 'Mutualisation des réseaux' },
  { step: '03', label: 'Festival national', desc: 'La grande scène collective' },
  { step: '04', label: 'Coopérative autonome', desc: 'Passation de l\'outil' },
];

const TourSection: React.FC = () => {
  const { dispatch } = useAppContext();
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="tournee"
      className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-[#0F0F0F] text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#BC0000] mb-4">
            La progression
          </p>
          <h2 className="font-serif italic text-3xl md:text-4xl text-white leading-tight mb-6">
            Du quartier à la région. De la région au national.
          </h2>
          <p className="text-base text-white/60 leading-relaxed max-w-2xl">
            Les soirées locales sont le premier échelon. Quand plusieurs collectifs renforcés se retrouvent, ils mutualisent leurs moyens, leurs réseaux, leurs compétences. En parallèle, une coopérative se construit progressivement — l'objectif est que le festival soit entièrement indépendant, géré par ceux qui l'ont construit.
          </p>
        </div>

        {/* Timeline */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {TIMELINE.map((item, i) => (
            <div key={i} className="relative">
              {/* Connector */}
              {i < TIMELINE.length - 1 && (
                <div className="hidden md:block absolute top-4 left-full w-full h-px bg-white/10 z-0" style={{ width: 'calc(100% - 1rem)' }} />
              )}
              <div className="relative z-10 bg-white/5 border border-white/10 rounded-sm p-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#BC0000] block mb-2">{item.step}</span>
                <p className="text-sm font-medium text-white mb-1">{item.label}</p>
                <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={() => dispatch({ type: 'SET_VIEW', payload: 'tour' })}
            className="bg-white text-black px-6 py-3 text-sm font-medium rounded-sm hover:bg-[#F2F0EB] transition-colors cursor-pointer"
          >
            Voir le détail de la tournée →
          </button>
          <button
            onClick={() => dispatch({ type: 'SET_VIEW', payload: 'cooperative' })}
            className="border border-white/20 text-white px-6 py-3 text-sm font-medium rounded-sm hover:border-white/50 transition-colors cursor-pointer"
          >
            La coopérative
          </button>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
