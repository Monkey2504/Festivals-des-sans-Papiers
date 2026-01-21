
import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { APP_CONFIG } from '../../constants';

const TourDetail: React.FC = () => {
  const { dispatch } = useAppContext();

  const objectives = [
    {
      title: "Financer le festival",
      desc: "L'objectif budgétaire pour un festival national de qualité est de 100 000 €. La tournée sert à collecter ces fonds étape par étape."
    },
    {
      title: "Recruter des bénévoles",
      desc: "Chaque soirée est l'occasion de rencontrer ceux qui veulent donner du temps pour l'accueil, la technique ou la logistique du grand final."
    },
    {
      title: "Trouver des coopérants",
      desc: "Nous cherchons les futurs sociétaires pour pérenniser la coopérative et garantir que cet outil technique serve aux luttes futures."
    }
  ];

  return (
    <article className="max-w-[1100px] mx-auto px-8 py-24 text-black">
      <header className="mb-20 border-b-4 border-black pb-12">
        <span className="font-mono text-xs text-[#BC0000] font-black tracking-widest block mb-4 uppercase">Organisation de la tournée</span>
        <h1 className="font-anton text-6xl md:text-7xl leading-none uppercase mb-6 tracking-tighter">Comment nous bâtissons <br/><span className="text-[#BC0000]">le festival.</span></h1>
        <p className="font-serif text-2xl md:text-3xl italic max-w-3xl leading-tight opacity-70">
          La tournée est le moteur financier et humain du projet. C'est durant ces mois de quartier que nous préparons le rassemblement national.
        </p>
      </header>

      {/* Les Objectifs Prioritaires */}
      <section className="mb-32">
        <h2 className="font-anton text-3xl uppercase mb-10 border-b border-black/20 pb-2">Les trois buts de la tournée</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {objectives.map((obj, i) => (
            <div key={i} className="border-l-4 border-[#BC0000] pl-6 py-2">
              <h3 className="font-anton text-2xl mb-3 uppercase tracking-tight">{obj.title}</h3>
              <p className="font-mono text-sm leading-relaxed opacity-70">{obj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-16">
          <section className="space-y-6">
            <h2 className="font-anton text-4xl uppercase text-[#BC0000]">L'alliance des trois acteurs</h2>
            <p className="font-mono text-lg leading-relaxed">
              Pour chaque événement de la tournée, nous réunissons trois forces complémentaires afin de garantir que l'action soit à la fois rentable, politique et ancrée dans le quartier :
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-6 border-2 border-black">
                <h4 className="font-anton text-xl uppercase mb-2">1. La Coopérative</h4>
                <p className="font-mono text-sm opacity-70 italic">Responsabilité : Elle s'occupe de l'outil technique et vérifie que chaque soirée est financièrement rentable pour le festival.</p>
              </div>
              <div className="bg-white p-6 border-2 border-black">
                <h4 className="font-anton text-xl uppercase mb-2">2. La VSP BXL</h4>
                <p className="font-mono text-sm opacity-70 italic">Responsabilité : Elle garantit que les sans-papiers sont visibles, valorisés et que le contenu de la soirée respecte les valeurs politiques de la lutte.</p>
              </div>
              <div className="bg-white p-6 border-2 border-black">
                <h4 className="font-anton text-xl uppercase mb-2">3. Le Lieu Partenaire</h4>
                <p className="font-mono text-sm opacity-70 italic">Responsabilité : Le lieu connaît son public et son quartier. Il aide à proposer un événement qui correspond aux envies des gens du coin.</p>
              </div>
            </div>
          </section>

          <section className="bg-black text-white p-12 border-l-[12px] border-[#BC0000]">
            <h3 className="font-anton text-3xl mb-4">Campagne politico-culturelle</h3>
            <p className="font-serif text-2xl italic opacity-80 leading-snug">
              "Ces événements ne sont pas que des concerts. Ils sont le cœur de la campagne de la VSP BXL pour porter son message partout à Bruxelles."
            </p>
          </section>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-40 bg-[#F2F0EB] p-8 border-4 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-anton text-2xl mb-6 uppercase text-[#BC0000]">Bilan chiffré</h3>
            <div className="space-y-4 font-mono text-xs uppercase font-bold">
              <div className="flex justify-between border-b border-black/10 pb-2">
                <span>Budget visé</span>
                <span>100.000€</span>
              </div>
              <div className="flex justify-between border-b border-black/10 pb-2">
                <span>Mobilisation</span>
                <span>+/- 1000 pers.</span>
              </div>
              <div className="flex justify-between border-b border-black/10 pb-2">
                <span>Collectif Parrain</span>
                <span>VSP BXL</span>
              </div>
            </div>
            <button 
              onClick={() => dispatch({ type: 'TOGGLE_JOIN_MODAL', payload: true })}
              className="mt-10 w-full bg-black text-white font-anton text-xl py-6 hover:bg-[#BC0000] transition-all cursor-pointer"
            >
              AIDER À L'ORGANISATION
            </button>
          </div>
        </aside>
      </div>

      <footer className="mt-32 pt-16 border-t-4 border-black text-center">
        <button 
          onClick={() => dispatch({type: 'SET_VIEW', payload: 'project'})}
          className="font-anton text-3xl hover:text-[#BC0000] transition-all uppercase cursor-pointer"
        >
          Comprendre le modèle souverain →
        </button>
      </footer>
    </article>
  );
};

export default TourDetail;
