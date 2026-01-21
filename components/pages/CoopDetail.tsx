
import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { APP_CONFIG } from '../../constants';

const CoopDetail: React.FC = () => {
  const { dispatch } = useAppContext();

  return (
    <article className="max-w-[1100px] mx-auto px-8 py-24 text-black">
      <header className="mb-20 border-b-4 border-black pb-12">
        <span className="font-mono text-sm text-[#BC0000] font-black tracking-widest block mb-4 uppercase">L'Infrastructure Technique</span>
        <h1 className="font-anton text-6xl md:text-7xl leading-none uppercase mb-6 tracking-tighter">Bâtir la <br/><span className="text-[#BC0000]">Coopérative.</span></h1>
        <p className="font-serif text-2xl md:text-3xl italic max-w-3xl leading-tight opacity-70">
          Un outil stable pour porter les luttes successives des collectifs de sans-papiers, sans épuiser les leaders sur la technique.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-16">
          <section className="space-y-6">
            <h2 className="font-anton text-4xl uppercase border-b-2 border-black pb-2 text-[#BC0000]">Pourquoi une coopérative ?</h2>
            <div className="font-mono text-lg leading-relaxed space-y-4">
              <p>Actuellement, les leaders des collectifs de sans-papiers ont trop de problèmes quotidiens à gérer pour s'occuper seuls de la logistique d'un festival national.</p>
              <p><strong>La Coopérative (The Movment)</strong> est là pour ça. Son rôle est de proposer un outil technique et de vérifier, sur le temps long, que le projet est viable et que les collectifs en lutte gardent leur souveraineté politique.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-anton text-4xl uppercase border-b-2 border-black pb-2 text-[#BC0000]">Première étape : 10 000€</h2>
            <div className="font-mono text-lg leading-relaxed space-y-4">
              <p>Nous lançons un crowdfunding de <strong>10 000 €</strong> qui servira de "fond de campagne". Ce budget initial permet de créer officiellement la coopérative et de lancer la tournée dans les salles culturelles de Bruxelles.</p>
              <div className="p-8 bg-[#F2F0EB] border-4 border-black space-y-4 font-bold text-sm">
                <p>— Création juridique et statuts.</p>
                <p>— Matériel technique pour la tournée de quartier.</p>
                <p>— Lancement de la communication pour la VSP BXL.</p>
              </div>
            </div>
          </section>

          <section className="bg-black text-white p-10">
            <h3 className="font-anton text-3xl mb-4 text-[#BC0000]">Le parrainage tournant</h3>
            <p className="font-mono text-lg opacity-80">
              L'outil appartient à la coopérative, mais chaque édition est pilotée par un collectif parrain du festival. Cette année, c'est la VSP BXL qui utilise l'outil. L'année prochaine, ce sera une autre organisation.
            </p>
          </section>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-40 space-y-8">
            <div className="bg-white p-8 border-4 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-anton text-3xl mb-6 uppercase text-[#BC0000]">Objectif Outil</h3>
              <div className="space-y-4 font-mono text-xs uppercase font-bold">
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <span>Crowdfunding</span>
                  <span className="text-xl">10.000€</span>
                </div>
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <span>Récolté</span>
                  <span className="text-xl text-[#BC0000]">{APP_CONFIG.INITIAL_RAISED}€</span>
                </div>
              </div>
              <button 
                onClick={() => dispatch({ type: 'TOGGLE_JOIN_MODAL', payload: true })}
                className="mt-8 w-full bg-black text-white font-anton text-xl py-6 hover:bg-[#BC0000] transition-all cursor-pointer"
              >
                INVESTIR DANS L'OUTIL
              </button>
            </div>
          </div>
        </aside>
      </div>

      <footer className="mt-32 pt-16 border-t-4 border-black text-center">
        <button 
          onClick={() => dispatch({type: 'SET_VIEW', payload: 'pact'})}
          className="font-anton text-3xl hover:text-[#BC0000] transition-all uppercase cursor-pointer"
        >
          Lire le Pacte de Gouvernance →
        </button>
      </footer>
    </article>
  );
};

export default CoopDetail;
