
import React from 'react';

const TourDetail: React.FC = () => {
  return (
    <article className="max-w-[1000px] mx-auto px-8 py-24">
      <header className="mb-24 border-b-8 border-black pb-16">
        <span className="font-mono text-sm text-[#BC0000] font-black tracking-widest block mb-4 uppercase italic">Logistique & Roadbook</span>
        <h1 className="font-anton text-[12vw] leading-none tracking-tighter uppercase">LA TOURNÉE <br/>DES QUARTIERS.</h1>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
        <div className="space-y-8">
          <h2 className="font-anton text-5xl uppercase">POURQUOI UNE TOURNÉE ?</h2>
          <p className="font-mono text-sm leading-relaxed">
            Organiser un festival national ne se fait pas depuis un bureau. Cela se fait en allant à la rencontre des gens, là où ils vivent. La tournée permet de :
          </p>
          <ul className="font-mono text-sm space-y-4 list-disc pl-4">
            <li><strong>Financer l'étape suivante :</strong> Les bénéfices des soirées de quartier paient le matériel du festival.</li>
            <li><strong>Recruter des alliés :</strong> Trouver des bénévoles et des hébergements pour les artistes.</li>
            <li><strong>Territorialiser la lutte :</strong> Porter le message de la régularisation dans chaque commune de Bruxelles.</li>
          </ul>
        </div>
        <div className="bg-[#F2F0EB] border-4 border-black p-10 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-anton text-4xl mb-6 uppercase text-[#BC0000]">KIT TECHNIQUE</h2>
          <p className="font-mono text-xs mb-8 opacity-70">Ce que nous demandons aux salles partenaires :</p>
          <ul className="font-mono text-xs space-y-4 uppercase tracking-wider">
            <li className="flex justify-between border-b border-black/10 pb-2"><span>Espace Scénique</span> <span>6x4m min.</span></li>
            <li className="flex justify-between border-b border-black/10 pb-2"><span>Système Son</span> <span>Adapté 200p.</span></li>
            <li className="flex justify-between border-b border-black/10 pb-2"><span>Bar & Cuisine</span> <span>Autogéré</span></li>
            <li className="flex justify-between border-b border-black/10 pb-2"><span>Accès PMR</span> <span>Indispensable</span></li>
          </ul>
        </div>
      </section>

      <section className="py-24 border-t-2 border-black/20">
        <h2 className="font-anton text-6xl mb-16 uppercase text-center">LE ROADMAP BRUXELLOIS</h2>
        <div className="space-y-4">
          {['Molenbeek', 'Saint-Gilles', 'Bruxelles-Ville', 'Schaerbeek', 'Ixelles', 'Anderlecht'].map((commune, i) => (
            <div key={i} className="group flex items-center justify-between p-6 border-2 border-black hover:bg-black hover:text-white transition-all cursor-pointer">
              <span className="font-anton text-3xl uppercase tracking-tighter">{commune}</span>
              <span className="font-mono text-xs opacity-50 group-hover:opacity-100 uppercase italic">Phase 2 : En discussion</span>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default TourDetail;
