
import React from 'react';
import { useAppContext } from '../../context/AppContext';

const TourDetail: React.FC = () => {
  const { dispatch } = useAppContext();

  const objectives = [
    { num: '01', title: 'Financer le festival', desc: 'L\'objectif budgétaire pour un festival national de qualité est de 100 000 €. La tournée sert à collecter ces fonds étape par étape.' },
    { num: '02', title: 'Recruter des bénévoles', desc: 'Chaque soirée est l\'occasion de rencontrer ceux qui veulent donner du temps pour l\'accueil, la technique ou la logistique du grand final.' },
    { num: '03', title: 'Trouver des coopérants', desc: 'Nous cherchons les futurs sociétaires pour pérenniser la coopérative et garantir que cet outil technique serve aux luttes futures.' },
  ];

  const acteurs = [
    { num: '1', title: 'La Coopérative', role: 'Elle s\'occupe de l\'outil technique et vérifie que chaque soirée est financièrement rentable pour le festival.' },
    { num: '2', title: 'La VSP BXL', role: 'Elle garantit que les sans-papiers sont visibles, valorisés et que le contenu respecte les valeurs politiques de la lutte.' },
    { num: '3', title: 'Le Lieu Partenaire', role: 'Il connaît son public et son quartier. Il aide à proposer un événement qui correspond aux envies des gens du coin.' },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-black">
      <header className="mb-16 border-b border-black/10 pb-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#BC0000] mb-5">Organisation de la tournée</p>
        <h1 className="font-serif italic text-4xl md:text-5xl leading-tight mb-5">Comment nous bâtissons le festival.</h1>
        <p className="text-base text-black/60 leading-relaxed max-w-2xl">
          La tournée est le moteur financier et humain du projet. C'est durant ces mois de quartier que nous préparons le rassemblement national.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-12">

          <section>
            <h2 className="font-serif italic text-2xl text-black mb-6">Les trois buts de la tournée</h2>
            <div className="space-y-4">
              {objectives.map((obj) => (
                <div key={obj.num} className="flex gap-5 bg-white border border-black/8 rounded-sm p-5 shadow-sm">
                  <span className="font-mono text-[10px] text-[#BC0000] tracking-widest pt-0.5 shrink-0">{obj.num}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-black mb-1.5">{obj.title}</h3>
                    <p className="text-sm text-black/60 leading-relaxed">{obj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif italic text-2xl text-black mb-6">L'alliance des trois acteurs</h2>
            <div className="space-y-3">
              {acteurs.map((a) => (
                <div key={a.num} className="bg-[#F2F0EB] rounded-sm p-5 border border-black/5">
                  <h3 className="text-sm font-semibold text-black mb-2">{a.title}</h3>
                  <p className="text-sm text-black/60 leading-relaxed italic">{a.role}</p>
                </div>
              ))}
            </div>
          </section>

          <blockquote className="border-l-2 border-[#BC0000] pl-5">
            <p className="font-serif italic text-lg text-black/70 leading-relaxed">
              "Ces événements ne sont pas que des concerts. Ils sont le cœur de la campagne de la VSP BXL pour porter son message partout à Bruxelles."
            </p>
          </blockquote>
        </div>

        <aside className="lg:sticky lg:top-24 h-fit space-y-5">
          <div className="bg-white border border-black/8 rounded-sm p-6 shadow-sm">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/40 mb-4">Bilan chiffré</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-black/5 pb-3">
                <span className="text-black/60">Budget visé</span>
                <span className="font-semibold">100 000 €</span>
              </div>
              <div className="flex justify-between border-b border-black/5 pb-3">
                <span className="text-black/60">Mobilisation</span>
                <span className="font-semibold">+/- 1 000 pers.</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/60">Collectif parrain</span>
                <span className="font-semibold">VSP BXL</span>
              </div>
            </div>
            <button
              onClick={() => dispatch({ type: 'TOGGLE_JOIN_MODAL', payload: true })}
              className="mt-6 w-full bg-[#BC0000] text-white text-sm font-medium py-3 rounded-sm hover:bg-[#a00000] transition-colors cursor-pointer"
            >
              Aider à l'organisation
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

export default TourDetail;
