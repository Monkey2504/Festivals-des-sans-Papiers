
import React from 'react';

const GovernanceSection: React.FC = () => {
  return (
    <section id="gouvernance" className="px-8 py-48 bg-black text-white scroll-mt-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-24">
          <span className="font-mono text-xs text-[#BC0000] tracking-widest block mb-4 uppercase">Modèle Tripartite</span>
          <h3 className="font-anton text-7xl lg:text-9xl mb-12 uppercase">GOUVERNANCE DE PARRAINAGE</h3>
          <p className="font-serif text-3xl italic opacity-60 max-w-4xl mx-auto">
            "Plutôt que d'attendre l'unanimité de tous, nous confions chaque édition à une organisation marraine soutenue par l'outil coopératif."
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1px bg-white/10 border border-white/10">
          {[
            { 
              title: 'LA COOPÉRATIVE', 
              actor: 'THE MOVMENT', 
              role: 'Fournit l\'outil de gestion, garantit la viabilité financière et assure la vision à long terme.', 
              color: 'text-white' 
            },
            { 
              title: 'L\'ORGANISATION MARRAINE', 
              actor: 'VSP BXL', 
              role: 'Garantit la dimension politique, le contenu et la valorisation des personnes sans-papiers.', 
              color: 'text-[#BC0000]' 
            },
            { 
              title: 'LE LIEU D\'ACCUEIL', 
              actor: 'SALLES PARTENAIRES', 
              role: 'Apporte son infrastructure, son public local et son expertise technique.', 
              color: 'text-white/60' 
            }
          ].map((item, i) => (
            <div key={i} className="bg-black p-12 hover:bg-white/5 transition-colors border-r border-white/10 last:border-0">
              <div className={`font-anton text-2xl mb-2 ${item.color}`}>{item.title}</div>
              <div className="font-mono text-sm font-bold border-b border-white/20 pb-4 mb-6 uppercase tracking-widest">{item.actor}</div>
              <p className="font-serif text-2xl italic opacity-70 leading-tight">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;
