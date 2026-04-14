
import React from 'react';
import { useAppContext } from '../../context/AppContext';

const ProjectDetail: React.FC = () => {
  const { dispatch } = useAppContext();

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-black">
      {/* Header */}
      <header className="mb-16 border-b border-black/10 pb-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#BC0000] mb-5">Les deux seules conditions</p>
        <h1 className="font-serif italic text-4xl md:text-5xl leading-tight mb-6">
          Deux critères. Tout le reste est libre.
        </h1>
        <p className="text-base md:text-lg text-black/60 leading-relaxed max-w-2xl">
          Une soirée peut prendre n'importe quelle forme : une grande fête avec DJ, une lecture de poésie, un repas partagé, un débat, une projection. N'importe quoi que le collectif a envie de faire.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-10">

          <div className="bg-[#BC0000]/5 border-l-2 border-[#BC0000] p-6 rounded-sm">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#BC0000] mb-3">Condition A</p>
            <h2 className="text-lg font-semibold text-black mb-4">
              Le collectif de sans-papiers sort de la soirée plus puissant qu'avant.
            </h2>
            <p className="text-sm text-black/70 leading-relaxed">
              Plus de réseau, plus de contacts, plus de compétences, plus de visibilité locale. Pas juste une soirée réussie — une capacité réelle à agir davantage ensuite.
            </p>
          </div>

          <div className="bg-black/3 border-l-2 border-black/20 p-6 rounded-sm">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/40 mb-3">Condition B</p>
            <h2 className="text-lg font-semibold text-black mb-4">
              La soirée contribue à construire le festival — pas nécessairement en argent.
            </h2>
            <p className="text-sm text-black/70 leading-relaxed">
              En matériel de communication, en bénévoles formés, en liens avec des lieux et des structures, en apprentissages collectifs. La contribution est libre. Ce qui compte, c'est que quelque chose reste et renforce l'ensemble.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="font-serif italic text-2xl text-black">Comment proposer</h2>
            <p className="text-sm text-black/70 leading-relaxed">
              Pas de formulaire. Une conversation. N'importe qui peut initier une soirée — un collectif de sans-papiers, un groupe de citoyens, un lieu. Dans tous les cas, c'est le collectif de sans-papiers qui décide en premier du format et du message. Les citoyens et partenaires apportent leurs ressources — ils ne prennent pas les décisions à la place.
            </p>
            <p className="text-sm text-black/70 leading-relaxed">
              Envoyez votre idée à Ballal par email. On vérifie ensemble que les deux conditions sont remplies. Si elles le sont, on dit oui et on vous aide à trouver ce dont vous avez besoin.
            </p>
            <a
              href="mailto:contact@festivalsanspapiers.be"
              className="inline-block mt-2 text-sm text-[#BC0000] hover:underline underline-offset-4"
            >
              contact@festivalsanspapiers.be →
            </a>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 h-fit space-y-6">
          <div className="bg-white border border-black/8 rounded-sm p-6 shadow-sm">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/40 mb-4">Ce que vous construisez</h3>
            <ul className="space-y-3 text-sm text-black/70">
              <li className="flex gap-3"><span className="text-[#BC0000] shrink-0">—</span>Un capital financier propre au collectif</li>
              <li className="flex gap-3"><span className="text-[#BC0000] shrink-0">—</span>Un département événementiel interne</li>
              <li className="flex gap-3"><span className="text-[#BC0000] shrink-0">—</span>Un réseau réel dans la cité</li>
            </ul>
          </div>

          <div className="bg-white border border-black/8 rounded-sm p-6 shadow-sm">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/40 mb-4">En savoir plus</h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => dispatch({ type: 'SET_VIEW', payload: 'vsp' })}
                className="text-left text-sm text-black/70 hover:text-[#BC0000] transition-colors"
              >
                → La VSP BXL, collectif parrain
              </button>
              <button
                onClick={() => dispatch({ type: 'SET_VIEW', payload: 'cooperative' })}
                className="text-left text-sm text-black/70 hover:text-[#BC0000] transition-colors"
              >
                → La coopérative
              </button>
              <button
                onClick={() => dispatch({ type: 'SET_VIEW', payload: 'tour' })}
                className="text-left text-sm text-black/70 hover:text-[#BC0000] transition-colors"
              >
                → La tournée
              </button>
            </div>
          </div>
        </aside>
      </div>

      <footer className="mt-16 pt-8 border-t border-black/10 text-center">
        <button
          onClick={() => dispatch({ type: 'SET_VIEW', payload: 'home' })}
          className="text-sm text-black/40 hover:text-[#BC0000] transition-colors"
        >
          ← Retour à l'accueil
        </button>
      </footer>
    </article>
  );
};

export default ProjectDetail;
