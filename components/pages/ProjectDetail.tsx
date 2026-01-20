
import React from 'react';
import { APP_CONFIG } from '../../constants';

const ProjectDetail: React.FC = () => {
  return (
    <article className="max-w-[1000px] mx-auto px-8 py-24">
      <header className="mb-24 border-b-8 border-black pb-16">
        <span className="font-mono text-sm text-[#BC0000] font-black tracking-widest block mb-4 uppercase italic">Stratégie & Gouvernance</span>
        <h1 className="font-anton text-[10vw] leading-none tracking-tighter uppercase">LE MODÈLE DE <br/><span className="text-[#BC0000]">PARRAINAGE.</span></h1>
      </header>

      <section className="mb-32">
        <div className="bg-black text-white p-12 mb-16">
          <h2 className="font-anton text-4xl mb-6 text-[#BC0000]">L'ORGANISATION MARRAINE</h2>
          <p className="font-serif text-3xl italic leading-tight mb-8">
            "Pour cette première phase de lancement, c'est la <strong>VSP (Voix des Sans Papiers)</strong> qui assure le rôle de marraine."
          </p>
          <p className="font-mono text-lg opacity-80 leading-relaxed">
            Face à la difficulté de réunir tous les leaders d'organisations simultanément, nous avons opté pour un système tournant. La VSP garantit la dimension politique et s'assure que les sans-papiers sont visibles et valorisés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-4 border-black p-8">
            <h3 className="font-anton text-2xl mb-4">1. LA COOPÉRATIVE</h3>
            <p className="font-mono text-sm opacity-60 italic">L'outil technique.</p>
            <p className="mt-4 font-serif text-xl">Gère les finances, la logistique et la viabilité à long terme de l'infrastructure du festival.</p>
          </div>
          <div className="border-4 border-[#BC0000] p-8 bg-[#BC0000]/5">
            <h3 className="font-anton text-2xl mb-4 text-[#BC0000]">2. LA VSP BXL</h3>
            <p className="font-mono text-sm opacity-60 italic text-[#BC0000]">Le garant politique.</p>
            <p className="mt-4 font-serif text-xl">Définit le message, valide la programmation et assure la radicalité du combat pour la régularisation.</p>
          </div>
          <div className="border-4 border-black p-8">
            <h3 className="font-anton text-2xl mb-4">3. LE LIEU</h3>
            <p className="font-mono text-sm opacity-60 italic">L'ancrage urbain.</p>
            <p className="mt-4 font-serif text-xl">Offre son infrastructure, son expertise technique et son public local au projet.</p>
          </div>
        </div>
      </section>

      <section className="space-y-24">
        <div className="border-l-4 border-black pl-12">
          <h2 className="font-anton text-6xl mb-8 uppercase tracking-tighter">AGIR SANS ATTENDRE</h2>
          <p className="font-serif text-2xl opacity-80 leading-relaxed">
            Le système de parrainage permet de ne plus dépendre de l'unanimité constante, qui ralentit souvent l'action concrète. Chaque édition est confiée à une organisation qui prend le lead politique, soutenue par notre outil coopératif.
          </p>
        </div>
        
        <div className="p-16 border-8 border-black text-center bg-[#F2F0EB] shadow-[30px_30px_0px_0px_rgba(188,0,0,1)]">
          <h2 className="font-anton text-5xl mb-8">OBJECTIF : 200 000€</h2>
          <p className="font-mono text-lg leading-relaxed max-w-2xl mx-auto opacity-70">
            Un festival d'envergure nationale nécessite des moyens. Nous ne demandons pas de subsides, nous créons notre propre économie solidaire via la tournée des salles de Bruxelles.
          </p>
        </div>
      </section>
    </article>
  );
};

export default ProjectDetail;
