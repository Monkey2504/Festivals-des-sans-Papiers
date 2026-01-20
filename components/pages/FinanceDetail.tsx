
import React from 'react';
import { APP_CONFIG } from '../../constants';

const FinanceDetail: React.FC = () => {
  return (
    <article className="max-w-[1000px] mx-auto px-8 py-24 text-black">
      <header className="mb-24 border-b-8 border-black pb-16">
        <span className="font-mono text-sm text-[#BC0000] font-black tracking-widest block mb-4 uppercase italic">Souveraineté Financière</span>
        <h1 className="font-anton text-[10vw] leading-none tracking-tighter uppercase">TRANSPARENCE <br/><span className="text-[#BC0000]">SOLAIRE.</span></h1>
      </header>

      <section className="space-y-32">
        <div className="bg-[#BC0000] text-white p-12 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-anton text-5xl mb-6 uppercase tracking-tighter">UNE ÉCONOMIE DE LUTTE</h2>
          <p className="font-serif text-3xl italic leading-tight mb-8">
            "Chaque euro généré par le cycle VSP (Tournée + Festival) revient à la VSP."
          </p>
          <p className="font-mono text-lg opacity-90 leading-relaxed">
            La Coopérative ne conserve que son capital d'outil de base (15k€) pour maintenir l'infrastructure. 
            Tout le surplus budgétaire de cette édition est un levier direct pour le collectif marraine. 
            Nous bâtissons une banque de solidarité tournante.
          </p>
        </div>

        {/* Phase 1 */}
        <div className="relative">
          <div className="absolute -left-12 top-0 text-[#BC0000] font-anton text-8xl opacity-10 select-none">01</div>
          <h2 className="font-anton text-6xl mb-12 uppercase tracking-tighter border-b-4 border-black inline-block text-black">CAPITAL DE L'OUTIL ({APP_CONFIG.CROWDFUNDING_GOAL.toLocaleString()}€)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="font-mono text-sm leading-relaxed text-black/70">
                C'est l'investissement initial nécessaire pour créer l'ASBL, le matériel de tournée et la structure juridique. Cet outil reste la propriété de la coopérative et sera transmis de collectif en collectif au fil des éditions.
              </p>
              <ul className="space-y-4">
                {APP_CONFIG.BUDGET_DETAILS.map((b, i) => (
                  <li key={i} className="flex justify-between items-baseline border-b border-black/10 pb-2">
                    <span className="font-mono text-xs uppercase">{b.label}</span>
                    <span className="font-anton text-2xl">{b.amount}€</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="relative">
          <div className="absolute -left-12 top-0 text-[#BC0000] font-anton text-8xl opacity-10 select-none">02</div>
          <div className="bg-[#F2F0EB] p-12 border-4 border-black shadow-[20px_20px_0px_0px_rgba(188,0,0,1)] text-black">
            <h2 className="font-anton text-6xl mb-8 uppercase tracking-tighter text-[#BC0000]">OBJECTIF CYCLE ({APP_CONFIG.PHASE_2_GOAL.toLocaleString()}€)</h2>
            <p className="font-serif text-3xl mb-12 italic leading-tight">
              C'est l'objectif du cycle complet (Tournée des quartiers + Festival National). Il garantit une souveraineté financière totale pour la VSP BXL.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white border-2 border-black">
                <h3 className="font-anton text-xl mb-2">OPÉRATIONS & LOGISTIQUE</h3>
                <p className="font-anton text-4xl mt-4">90.000€</p>
              </div>
              <div className="p-6 bg-white border-2 border-black">
                <h3 className="font-anton text-xl mb-2">TRÉSORERIE DE LUTTE VSP</h3>
                <p className="font-anton text-4xl mt-4">60.000€</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default FinanceDetail;
