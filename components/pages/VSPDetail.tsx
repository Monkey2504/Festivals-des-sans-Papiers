
import React from 'react';
import { useAppContext } from '../../context/AppContext';
import ManifestoAudio from '../ManifestoAudio';

const VSPDetail: React.FC = () => {
  const { dispatch } = useAppContext();

  const manifestoText = "La Voix des Sans-Papiers de Bruxelles est un collectif autogéré fondé en 2014. Nous luttons pour la régularisation totale, l'abolition des centres fermés et la reconnaissance de notre citoyenneté active. Notre souveraineté est politique, financière et humaine.";

  return (
    <article className="max-w-[1300px] mx-auto px-8 py-24 text-black">
      
      {/* HEADER PRINCIPAL */}
      <header className="mb-32 border-b-[12px] border-black pb-16 relative">
        <div className="flex justify-between items-baseline mb-8">
          <span className="font-mono text-sm text-[#BC0000] font-black tracking-[0.3em] uppercase italic">
            Affirmation du Sujet Politique
          </span>
          <div className="flex gap-4">
             <ManifestoAudio text={manifestoText} />
          </div>
        </div>
        <h1 className="font-anton text-[10vw] leading-[0.8] tracking-tighter uppercase">
          LA VOIX DES <br/>
          <span className="text-[#BC0000]">SANS-PAPIERS.</span>
        </h1>
        <div className="mt-12 max-w-4xl">
          <p className="font-serif text-4xl lg:text-5xl italic leading-tight text-black/90">
            Un collectif autogéré à Bruxelles, fondé en 2014, qui organise, revendique et rend visible les droits des personnes sans titre de séjour.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* CONTENU PRINCIPAL */}
        <div className="lg:col-span-8 space-y-32">

          {/* 01. IDENTITÉ & AUTOGESTION */}
          <section className="relative">
            <span className="absolute -left-12 top-0 font-anton text-6xl opacity-10">01</span>
            <h2 className="font-anton text-5xl uppercase mb-10 border-b-2 border-black inline-block">
              Identité & Auto-gestion
            </h2>
            <div className="font-mono text-lg leading-relaxed space-y-6">
              <p>
                La VSP Bruxelles est née en 2014 d'une occupation de bâtiment public pour revendiquer la régularisation de toutes les personnes sans papiers. Ce n’est pas une association classique : c’est un espace de vie collective et de lutte où les membres prennent toutes les décisions.
              </p>
              <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-anton text-2xl mb-4 text-[#BC0000]">Principes d'autogestion</h3>
                <ul className="list-none space-y-3 text-sm font-bold">
                  <li>— Décisions par assemblées générales souveraines</li>
                  <li>— Charte définie par et pour les membres</li>
                  <li>— Indépendance totale des alliés et partenaires extérieurs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 02. REVENDICATIONS POLITIQUES */}
          <section className="bg-black text-white p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-anton text-9xl opacity-5">LUTTE</div>
            <h2 className="font-anton text-5xl uppercase text-[#BC0000] mb-12">Plateforme de revendications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-[#BC0000] pl-6">
                <h4 className="font-anton text-xl mb-2">Régularisation totale</h4>
                <p className="font-mono text-xs opacity-60">
                  Droit inconditionnel pour toutes les personnes sans titre de séjour.
                </p>
              </div>
              <div className="border-l-4 border-white/20 pl-6">
                <h4 className="font-anton text-xl mb-2">Abolition des centres</h4>
                <p className="font-mono text-xs opacity-60">
                  Fin des expulsions et des centres de rétention.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="lg:col-span-4">
          <div className="sticky top-40 space-y-12">
            <div className="p-8 border-4 border-black bg-white shadow-[10px_10px_0px_0px_rgba(188,0,0,1)]">
              <h3 className="font-anton text-2xl mb-6 uppercase">Échelle européenne</h3>
              <p className="font-mono text-xs opacity-60 mb-6 leading-relaxed">
                La VSP s’inscrit dans un réseau européen avec <strong>PICUM</strong> pour relier actions locales et plaidoyer international.
              </p>
            </div>
            <div className="space-y-4">
              <button 
                onClick={() => dispatch({type: 'SET_VIEW', payload: 'cooperative'})}
                className="w-full bg-[#BC0000] text-white font-anton text-2xl py-8 hover:bg-black transition-all shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
              >
                SOUTENIR LE CYCLE
              </button>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
};

export default VSPDetail;
