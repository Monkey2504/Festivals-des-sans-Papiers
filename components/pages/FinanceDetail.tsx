
import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { APP_CONFIG } from '../../constants';

const FinanceDetail: React.FC = () => {
  const { dispatch } = useAppContext();
  const totalBudget = APP_CONFIG.BUDGET_DETAILS.reduce((sum, i) => sum + i.amount, 0);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-black">
      <header className="mb-16 border-b border-black/10 pb-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#BC0000] mb-5">Souveraineté financière</p>
        <h1 className="font-serif italic text-4xl md:text-5xl leading-tight mb-5">Transparence totale.</h1>
        <p className="text-base text-black/60 leading-relaxed max-w-2xl">
          Chaque euro généré par le cycle VSP (Tournée + Festival) revient à la VSP. La coopérative ne conserve que son capital d'outil de base pour maintenir l'infrastructure.
        </p>
      </header>

      <div className="space-y-12">

        {/* Phase 1 */}
        <section>
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#BC0000]">Phase 1</span>
            <h2 className="font-serif italic text-2xl text-black">
              Capital de l'outil — {APP_CONFIG.CROWDFUNDING_GOAL.toLocaleString()} €
            </h2>
          </div>
          <p className="text-sm text-black/60 leading-relaxed mb-6 max-w-2xl">
            L'investissement initial pour créer la coopérative, le matériel de tournée et la structure juridique. Cet outil reste la propriété de la coopérative et sera transmis de collectif en collectif au fil des éditions.
          </p>
          <div className="overflow-x-auto border border-black/10 rounded-sm bg-white shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-black/10 bg-[#F2F0EB]">
                  <th className="px-5 py-3 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">Poste</th>
                  <th className="px-5 py-3 text-right font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">Montant</th>
                  <th className="px-5 py-3 text-right font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">%</th>
                </tr>
              </thead>
              <tbody>
                {APP_CONFIG.BUDGET_DETAILS.map((item, i) => {
                  const pct = totalBudget > 0 ? Math.round((item.amount / totalBudget) * 100) : 0;
                  return (
                    <tr key={i} className="border-b border-black/5">
                      <td className="px-5 py-4">
                        <p className="text-sm font-medium text-black">{item.label}</p>
                        {item.desc && <p className="text-xs text-black/40 mt-0.5">{item.desc}</p>}
                      </td>
                      <td className="px-5 py-4 text-right font-mono text-sm font-semibold text-[#BC0000]">
                        {item.amount.toLocaleString('fr-BE')} €
                      </td>
                      <td className="px-5 py-4 text-right font-mono text-xs text-black/40">{pct}%</td>
                    </tr>
                  );
                })}
                <tr className="bg-[#F2F0EB]">
                  <td className="px-5 py-4 text-sm font-semibold text-black">Total</td>
                  <td className="px-5 py-4 text-right font-mono text-sm font-bold text-[#BC0000]">
                    {totalBudget.toLocaleString('fr-BE')} €
                  </td>
                  <td className="px-5 py-4 text-right font-mono text-xs text-black/40">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Phase 2 */}
        <section>
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#BC0000]">Phase 2</span>
            <h2 className="font-serif italic text-2xl text-black">
              Objectif cycle — {APP_CONFIG.PHASE_2_GOAL.toLocaleString()} €
            </h2>
          </div>
          <p className="text-sm text-black/60 leading-relaxed mb-6 max-w-2xl">
            L'objectif du cycle complet (Tournée des quartiers + Festival National). Il garantit une souveraineté financière totale pour la VSP BXL.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-black/8 rounded-sm p-6 shadow-sm">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40 mb-3">Opérations & logistique</p>
              <p className="font-serif italic text-3xl text-black">90 000 €</p>
              <p className="text-xs text-black/50 mt-2 leading-relaxed">Artistes, technique, communication, lieux.</p>
            </div>
            <div className="bg-[#BC0000]/5 border border-[#BC0000]/20 rounded-sm p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#BC0000] mb-3">Trésorerie de lutte VSP</p>
              <p className="font-serif italic text-3xl text-black">60 000 €</p>
              <p className="text-xs text-black/50 mt-2 leading-relaxed">Reversés directement au collectif parrain.</p>
            </div>
          </div>
        </section>

        {/* Principes */}
        <section className="bg-[#0F0F0F] text-white rounded-sm p-8">
          <h2 className="font-serif italic text-xl text-white mb-6">Une économie de lutte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Zéro profit', body: '100% des bénéfices sont réinvestis dans la lutte. Pas de dividendes.' },
              { title: 'Audit public', body: 'Les comptes sont audités annuellement et accessibles à tous les membres.' },
              { title: 'Équité salariale', body: 'Un forfait solidaire unique appliqué à l\'ensemble des artistes.' },
            ].map((p, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-sm p-5">
                <h3 className="text-sm font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

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

export default FinanceDetail;
