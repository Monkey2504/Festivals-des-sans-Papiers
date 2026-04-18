
import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { useInView } from '../../hooks/useInView';

const ACTEURS = [
  {
    who: 'Collectifs de sans-papiers',
    accent: true,
    body: 'Vous initiez une soirée dans votre quartier. Vous décidez du format, du message, de ce que vous voulez que ça soit. On vous aide à trouver un groupe de citoyens engagés, un lieu, du matériel si besoin. Vous sortez de la soirée avec plus de contacts, plus de savoir-faire.',
  },
  {
    who: 'Citoyens engagés',
    accent: false,
    body: 'Vous apportez ce que vous avez — un réseau de lieux, d\'artistes, de techniciens, ou simplement du temps et de l\'énergie. Ce que vous construisez ensemble reste dans le collectif après votre départ. Un engagement temporaire avec un effet durable.',
  },
  {
    who: 'Lieux, institutions et partenaires',
    accent: false,
    body: 'Vous mettez à disposition une salle, un réseau, un budget. Vous devenez un maillon d\'un projet structuré sur plusieurs années — pas un one-shot, pas une charité. Un partenariat avec une dynamique qui grandit.',
  },
];

const PactSection: React.FC = () => {
  const { dispatch } = useAppContext();
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="pacte"
      className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-[#F2F0EB]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`mb-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#BC0000] mb-4">
            Comment s'impliquer
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-serif italic text-3xl md:text-4xl text-black leading-tight">
              Trois acteurs. Un seul réseau.
            </h2>
            <button
              onClick={() => dispatch({ type: 'SET_VIEW', payload: 'pact' })}
              className="text-[#BC0000] text-sm font-medium hover:underline underline-offset-4 whitespace-nowrap cursor-pointer"
            >
              Voir les conditions →
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ACTEURS.map((acteur, i) => (
            <article
              key={i}
              className={`bg-white rounded-sm p-6 md:p-7 border border-black/5 shadow-sm transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: isInView ? `${i * 100}ms` : '0ms' }}
            >
              <div className={`w-full h-0.5 mb-5 rounded-full ${acteur.accent ? 'bg-[#BC0000]' : 'bg-black/10'}`} />
              <h3 className="text-sm font-semibold text-black mb-3">{acteur.who}</h3>
              <p className="text-sm text-black/60 leading-relaxed">{acteur.body}</p>
            </article>
          ))}
        </div>

        {/* Comment proposer */}
        <div className={`mt-8 p-6 bg-white border border-black/8 rounded-sm transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/40 mb-3">Comment proposer</p>
          <p className="text-sm text-black/70 leading-relaxed max-w-2xl">
            Pas de formulaire. Une conversation. N'importe qui peut initier une soirée. Dans tous les cas, c'est le collectif de sans-papiers qui décide en premier du format et du message.
          </p>
          <a
            href="mailto:contact@festivalsanspapiers.be"
            className="inline-block mt-4 text-sm text-[#BC0000] hover:underline underline-offset-4"
          >
            contact@festivalsanspapiers.be →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PactSection;
