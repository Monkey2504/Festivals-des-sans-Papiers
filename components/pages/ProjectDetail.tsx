
import React from 'react';
import { useAppContext } from '../../context/AppContext';

const ProjectDetail: React.FC = () => {
  const { dispatch } = useAppContext();

  return (
    <article className="max-w-[1200px] mx-auto px-8 py-24 text-black">
      <header className="mb-24 border-b-8 border-black pb-16">
        <span className="font-mono text-sm text-[#BC0000] font-black tracking-widest block mb-4 uppercase italic">Note d'intention</span>
        <h1 className="font-anton text-[8vw] leading-[0.9] tracking-tighter uppercase mb-8">COMPRENDRE LE <br/><span className="text-[#BC0000]">PROJET.</span></h1>
        <p className="font-serif text-3xl italic max-w-3xl leading-tight opacity-70">
          Ce projet n'est pas seulement un événement culturel, c'est une <strong>pratique de subjectivation politique</strong> qui conteste les frontières de la citoyenneté.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Colonne Principale */}
        <div className="lg:col-span-8 space-y-24">
          
          <section className="space-y-6">
            <h2 className="font-anton text-4xl uppercase border-b-2 border-black pb-2">Un Outil de Citoyenneté Active</h2>
            <div className="font-mono text-lg leading-relaxed space-y-4">
              <p>Le Festival des Sans-Papiers est né d'un constat sociologique : même sans statut administratif, les collectifs comme la VSP BXL exercent une <strong>citoyenneté active</strong>. Ils habitent la ville, ils travaillent, ils créent de la solidarité.</p>
              <p>Le festival fournit l'infrastructure technique nécessaire pour que cette citoyenneté devienne visible et incontestable dans l'espace public.</p>
              <ul className="list-none space-y-4 pl-6 border-l-4 border-[#BC0000]">
                <li>— <strong>Territorialisation :</strong> Occuper les quartiers pour briser l'isolement.</li>
                <li>— <strong>Auto-possession :</strong> Reprendre le contrôle de son propre récit politique.</li>
                <li>— <strong>Souveraineté :</strong> S'autofinancer pour ne plus dépendre des médiateurs institutionnels.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-anton text-4xl uppercase border-b-2 border-black pb-2">Renverser l'Équation</h2>
            <div className="font-serif text-2xl italic leading-tight p-8 bg-[#F2F0EB] border-l-8 border-black shadow-lg">
              "Nous cherchons à renverser l'équation qui lie légalité administrative et accès aux droits humains."
            </div>
            <div className="font-mono text-lg leading-relaxed space-y-4">
              <p>Sur le plan philosophique, le projet affirme que la <strong>dignité politique</strong> ne peut être subordonnée à un tampon administratif. En construisant une coopérative possédée par les membres en lutte, nous créons une zone de souveraineté où le droit se pratique avant d'être octroyé.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-anton text-4xl uppercase border-b-2 border-black pb-2">Le Système de Parrainage Tournant</h2>
            <div className="font-mono text-lg leading-relaxed space-y-4">
              <p>Parce que la lutte est plurielle (Bruxelles, Verviers, Anvers), l'outil est tournant. Chaque édition est pilotée par un collectif marraine différent, permettant de respecter les temporalités et les stratégies de chacun, tout en mutualisant les moyens techniques.</p>
            </div>
          </section>

        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-40 space-y-8">
            <div className="bg-black text-white p-8 border-4 border-[#BC0000] shadow-[15px_15px_0px_0px_rgba(188,0,0,1)]">
              <h3 className="font-anton text-3xl mb-6 uppercase border-b border-white/20 pb-2">LOGIQUE</h3>
              <ul className="font-mono text-xs space-y-6 opacity-80">
                <li className="flex gap-4">
                  <span className="text-[#BC0000] font-bold text-lg">01.</span>
                  <span>AUTOGESTION TOTALE</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#BC0000] font-bold text-lg">02.</span>
                  <span>NON-LUCRATIVITÉ RADICALE</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#BC0000] font-bold text-lg">03.</span>
                  <span>AFFIRMATION DU SUJET</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#BC0000] font-bold text-lg">04.</span>
                  <span>RÉSEAU TRANSNATIONAL</span>
                </li>
              </ul>
            </div>

            <div className="p-8 border-4 border-black bg-white">
              <h4 className="font-anton text-2xl uppercase mb-4">LE MANIFESTE</h4>
              <button 
                onClick={() => dispatch({type: 'SET_VIEW', payload: 'vsp'})}
                className="w-full bg-black text-white font-anton text-xl py-4 hover:bg-[#BC0000] transition-all cursor-pointer"
              >
                LIRE LE RÉCIT VSP BXL
              </button>
            </div>
          </div>
        </aside>
      </div>

      <footer className="mt-32 pt-16 border-t-4 border-black text-center">
        <button 
          onClick={() => dispatch({type: 'SET_VIEW', payload: 'home'})}
          className="font-anton text-4xl hover:text-[#BC0000] transition-all uppercase cursor-pointer"
        >
          ← RETOUR À L'ACCUEIL
        </button>
      </footer>
    </article>
  );
};

export default ProjectDetail;
