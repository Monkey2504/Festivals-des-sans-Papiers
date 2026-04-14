
import React from 'react';
import { useAppContext } from '../../context/AppContext';
import ManifestoAudio from '../ManifestoAudio';

const VSPDetail: React.FC = () => {
  const { dispatch } = useAppContext();

  const manifestoText = "La Voix des Sans-Papiers de Bruxelles est un collectif autogéré fondé en 2014. Nous luttons pour la régularisation totale, l'abolition des centres fermés et la reconnaissance de notre citoyenneté active. Notre souveraineté est politique, financière et humaine.";

  const revendications = [
    { title: 'Régularisation totale', desc: 'Droit inconditionnel pour toutes les personnes sans titre de séjour.' },
    { title: 'Abolition des centres', desc: 'Fin des expulsions et fermeture des centres de rétention.' },
    { title: 'Citoyenneté active', desc: 'Reconnaissance pleine et entière de notre présence et de notre contribution.' },
    { title: 'Réseau européen', desc: 'Membre de PICUM — actions locales et plaidoyer international.' },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-black">
      <header className="mb-16 border-b border-black/10 pb-10">
        <div className="flex items-start justify-between gap-4 mb-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#BC0000]">Collectif parrain · Édition 2025–2026</p>
          <ManifestoAudio text={manifestoText} />
        </div>
        <h1 className="font-serif italic text-4xl md:text-5xl leading-tight mb-5">
          La Voix des Sans-Papiers de Bruxelles.
        </h1>
        <p className="text-base text-black/60 leading-relaxed max-w-2xl">
          Un collectif autogéré à Bruxelles, fondé en 2014, qui organise, revendique et rend visible les droits des personnes sans titre de séjour.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">

          <section className="space-y-4">
            <h2 className="font-serif italic text-2xl text-black">Identité et autogestion</h2>
            <p className="text-sm text-black/70 leading-relaxed">
              La VSP Bruxelles est née en 2014 d'une occupation de bâtiment public pour revendiquer la régularisation de toutes les personnes sans papiers. Ce n'est pas une association classique : c'est un espace de vie collective et de lutte où les membres prennent toutes les décisions.
            </p>
            <div className="bg-[#F2F0EB] border border-black/5 rounded-sm p-5 space-y-2">
              {[
                'Décisions par assemblées générales souveraines',
                'Charte définie par et pour les membres',
                'Indépendance totale vis-à-vis des alliés et partenaires extérieurs',
              ].map((item, i) => (
                <p key={i} className="text-sm text-black/70 flex gap-2">
                  <span className="text-[#BC0000] shrink-0">—</span>
                  {item}
                </p>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif italic text-2xl text-black">Plateforme de revendications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {revendications.map((r, i) => (
                <div key={i} className="bg-white border border-black/8 rounded-sm p-5 shadow-sm">
                  <h3 className="text-sm font-semibold text-black mb-1.5">{r.title}</h3>
                  <p className="text-sm text-black/50 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[#0F0F0F] text-white rounded-sm p-6">
            <h3 className="font-serif italic text-xl text-white mb-3">Collectif parrain du festival</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Cette année, la VSP BXL est le collectif parrain. Elle garantit que les sans-papiers sont visibles, valorisés, et que le contenu respecte les valeurs politiques de la lutte. L'outil de la coopérative est à son service pour cette édition.
            </p>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 h-fit space-y-5">
          <div className="bg-white border border-black/8 rounded-sm p-6 shadow-sm">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/40 mb-5">En chiffres</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-black/5 pb-3">
                <span className="text-black/60">Fondé en</span>
                <span className="font-semibold">2014</span>
              </div>
              <div className="flex justify-between border-b border-black/5 pb-3">
                <span className="text-black/60">Réseau</span>
                <span className="font-semibold">PICUM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/60">Statut</span>
                <span className="font-semibold">Collectif parrain</span>
              </div>
            </div>
            <button
              onClick={() => dispatch({ type: 'SET_VIEW', payload: 'cooperative' })}
              className="mt-6 w-full bg-[#BC0000] text-white text-sm font-medium py-3 rounded-sm hover:bg-[#a00000] transition-colors cursor-pointer"
            >
              Soutenir le cycle
            </button>
          </div>

          <div className="bg-[#F2F0EB] border border-black/5 rounded-sm p-5">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/40 mb-3">En savoir plus</h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => dispatch({ type: 'SET_VIEW', payload: 'pact' })}
                className="text-left text-sm text-black/70 hover:text-[#BC0000] transition-colors"
              >
                → Le pacte d'alliance
              </button>
              <button
                onClick={() => dispatch({ type: 'SET_VIEW', payload: 'cooperative' })}
                className="text-left text-sm text-black/70 hover:text-[#BC0000] transition-colors"
              >
                → La coopérative
              </button>
            </div>
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

export default VSPDetail;
