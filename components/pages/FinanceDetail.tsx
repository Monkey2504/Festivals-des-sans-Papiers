
import React from 'react';
import { APP_CONFIG } from '../../constants';

const FinanceDetail: React.FC = () => {
  return (
    <article className="max-w-[1000px] mx-auto px-8 py-24">
      <header className="mb-24 border-b-8 border-black pb-16">
        <span className="font-mono text-sm text-[#BC0000] font-black tracking-widest block mb-4 uppercase italic">Transparence Radicale</span>
        <h1 className="font-anton text-[10vw] leading-none tracking-tighter uppercase">BILAN & <br/>PROJECTIONS.</h1>
      </header>

      <section className="space-y-32">
        {/* Phase 1 */}
        <div className="relative">
          <div className="absolute -left-12 top-0 text-[#BC0000] font-anton text-8xl opacity-10 select-none">01</div>
          <h2 className="font-anton text-6xl mb-12 uppercase tracking-tighter border-b-4 border-black inline-block">CRÉATION DU CAPITAL (15.000€)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="font-mono text-sm leading-relaxed">
                Ce fonds, récolté via crowdfunding, constitue le <strong>capital social de la coopérative</strong>. Il sert à financer les outils de base (site, statut légal, assurances) et à lancer la campagne de la VSP.
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
            <div className="bg-black text-white p-8 font-serif italic text-3xl leading-snug">
              "Le crowdfunding est notre acte de naissance. Sans lui, l'outil coopératif n'existe pas."
            </div>
          </div>
        </div>

        {/* INTERMEDIATE PHASE: THE TOUR */}
        <div className="py-20 border-4 border-dashed border-black bg-white relative overflow-hidden">
          <div className="absolute right-0 top-0 bg-[#BC0000] text-white font-anton px-4 py-2 rotate-90 translate-x-1/2 translate-y-full uppercase text-xs tracking-widest">
            Levée de fonds politique
          </div>
          
          <div className="px-10">
            <h2 className="font-anton text-6xl mb-8 uppercase tracking-tighter text-black">LA TOURNÉE : SENSIBILISATION & LEVIER</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 space-y-6">
                <p className="font-serif text-2xl leading-tight">
                  Chaque événement dans les salles culturelles bruxelloises sert deux buts : <strong>sensibiliser le public au combat de la VSP</strong> et accumuler les bénéfices pour atteindre le budget du festival.
                </p>
                <div className="p-4 bg-black text-white font-mono text-xs uppercase tracking-widest text-center">
                  Bénéfices Tournée = Financement Phase 2
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="bg-[#F2F0EB] border-2 border-black p-6 space-y-4">
                  <h4 className="font-anton text-xl border-b border-black pb-2">PROJECTION ÉVÉNEMENT</h4>
                  <p className="font-mono text-[10px] leading-tight opacity-70 italic">
                    Une soirée de 300 personnes peut générer environ 2.500€ de bénéfices nets réinjectés dans le fonds commun.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="relative">
          <div className="absolute -left-12 top-0 text-[#BC0000] font-anton text-8xl opacity-10 select-none">02</div>
          <div className="bg-[#F2F0EB] p-12 border-4 border-black shadow-[20px_20px_0px_0px_rgba(188,0,0,1)]">
            <h2 className="font-anton text-6xl mb-8 uppercase tracking-tighter text-[#BC0000]">LE FESTIVAL (200.000€)</h2>
            <p className="font-serif text-3xl mb-12 italic leading-tight">
              L'objectif de 200.000€ couvre l'organisation d'un festival national sur deux jours, incluant les cachets de solidarité, la sécurité et l'infrastructure scénique.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white border-2 border-black">
                <h3 className="font-anton text-xl mb-2">INFRASTRUCTURE</h3>
                <p className="font-anton text-4xl mt-4">120.000€</p>
              </div>
              <div className="p-6 bg-white border-2 border-black">
                <h3 className="font-anton text-xl mb-2">HUMAIN & ART</h3>
                <p className="font-anton text-4xl mt-4">80.000€</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default FinanceDetail;
