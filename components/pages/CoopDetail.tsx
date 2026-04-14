
import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { APP_CONFIG } from '../../constants';

const CoopDetail: React.FC = () => {
  const { dispatch } = useAppContext();
  const progression = APP_CONFIG.INITIAL_RAISED / APP_CONFIG.CROWDFUNDING_GOAL * 100;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-black">
      <header className="mb-16 border-b border-black/10 pb-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#BC0000] mb-5">L'infrastructure technique</p>
        <h1 className="font-serif italic text-4xl md:text-5xl leading-tight mb-5">Bâtir la coopérative.</h1>
        <p className="text-base text-black/60 leading-relaxed max-w-2xl">
          Un outil stable pour porter les luttes successives des collectifs de sans-papiers, sans épuiser les leaders sur la technique.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">

          <section className="space-y-4">
            <h2 className="font-serif italic text-2xl text-black">Pourquoi une coopérative ?</h2>
            <p className="text-sm text-black/70 leading-relaxed">
              Actuellement, les leaders des collectifs de sans-papiers ont trop de problèmes quotidiens à gérer pour s'occuper seuls de la logistique d'un festival national.
            </p>
            <p className="text-sm text-black/70 leading-relaxed">
              La Coopérative (<strong>The Movment</strong>) est là pour ça. Son rôle est de proposer un outil technique et de vérifier, sur le temps long, que le projet est viable et que les collectifs en lutte gardent leur souveraineté politique.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif italic text-2xl text-black">Première étape : 10 000 €</h2>
            <p className="text-sm text-black/70 leading-relaxed">
              Nous lançons un crowdfunding de <strong>10 000 €</strong> qui servira de fond de campagne. Ce budget initial permet de créer officiellement la coopérative et de lancer la tournée dans les salles culturelles de Bruxelles.
            </p>
            <div className="bg-[#F2F0EB] border border-black/8 rounded-sm p-5 space-y-2">
              {['Création juridique et statuts.', 'Matériel technique pour la tournée de quartier.', 'Lancement de la communication pour la VSP BXL.'].map((item, i) => (
                <p key={i} className="text-sm text-black/70 flex gap-2">
                  <span className="text-[#BC0000] shrink-0">—</span>
                  {item}
                </p>
              ))}
            </div>
          </section>

          <section className="bg-[#0F0F0F] text-white rounded-sm p-6">
            <h3 className="font-serif italic text-xl text-white mb-3">Le parrainage tournant</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              L'outil appartient à la coopérative, mais chaque édition est pilotée par un collectif parrain du festival. Cette année, c'est la VSP BXL qui utilise l'outil. L'année prochaine, ce sera une autre organisation.
            </p>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 h-fit space-y-5">
          <div className="bg-white border border-black/8 rounded-sm p-6 shadow-sm">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/40 mb-5">Objectif Phase 1</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-black/60">Récolté</span>
                  <span className="font-semibold text-[#BC0000]">{APP_CONFIG.INITIAL_RAISED.toLocaleString()} €</span>
                </div>
                <div className="w-full h-1 bg-black/8 rounded-full overflow-hidden">
                  <div className="h-full bg-[#BC0000] rounded-full" style={{ width: `${progression}%` }} />
                </div>
                <div className="flex justify-between text-xs text-black/30 mt-1">
                  <span>0 €</span>
                  <span>{APP_CONFIG.CROWDFUNDING_GOAL.toLocaleString()} €</span>
                </div>
              </div>
              <div className="flex justify-between text-sm border-t border-black/5 pt-3">
                <span className="text-black/60">Co-fondateurs</span>
                <span className="font-semibold">{APP_CONFIG.INITIAL_FOUNDERS} / {APP_CONFIG.TOTAL_FOUNDERS_GOAL}</span>
              </div>
            </div>
            <button
              onClick={() => dispatch({ type: 'TOGGLE_JOIN_MODAL', payload: true })}
              className="mt-6 w-full bg-[#BC0000] text-white text-sm font-medium py-3 rounded-sm hover:bg-[#a00000] transition-colors cursor-pointer"
            >
              Devenir co-fondateur
            </button>
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

export default CoopDetail;
