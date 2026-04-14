
import React from 'react';
import { useInView } from '../../hooks/useInView';

const ACTIFS = [
  {
    num: '01',
    title: 'Un capital financier',
    body: '5 000 € dédiés à la culture, qui appartiennent au collectif. Pas consommés en une soirée, mais fructifiés — investis en matériel propre, en compétences, en projets futurs que le collectif décide seul.',
  },
  {
    num: '02',
    title: 'Un département événementiel',
    body: 'Une équipe interne formée, avec des rôles clairs : régie, programmation, communication, administration. Des gens capables d\'organiser d\'autres événements sans dépendre de Ballal ou du festival.',
  },
  {
    num: '03',
    title: 'Un réseau réel dans la cité',
    body: 'Des contacts avec des lieux, des artistes, des techniciens, des structures locales. Un réseau qui appartient au collectif — pas au festival — et qui dure après la soirée.',
  },
];

const GovernanceSection: React.FC = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="gouvernance"
      className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`mb-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#BC0000] mb-4">
            Ce que chaque collectif construit
          </p>
          <h2 className="font-serif italic text-3xl md:text-4xl text-black leading-tight">
            Trois actifs qui restent longtemps après la soirée.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {ACTIFS.map((actif, i) => (
            <article
              key={i}
              className={`bg-[#F2F0EB] rounded-sm p-6 md:p-7 border border-black/5 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: isInView ? `${i * 100}ms` : '0ms' }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#BC0000] block mb-4">{actif.num}</span>
              <h3 className="text-base font-semibold text-black mb-3 leading-snug">{actif.title}</h3>
              <p className="text-sm text-black/60 leading-relaxed">{actif.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;
