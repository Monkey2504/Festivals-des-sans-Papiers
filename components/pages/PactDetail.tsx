
import React from 'react';
import { useAppContext } from '../../context/AppContext';

const PactDetail: React.FC = () => {
  const { dispatch } = useAppContext();

  const articles = [
    {
      art: '01',
      title: 'Délimitation des rôles',
      text: "La coopérative fournit l'infrastructure juridique et technique. Le collectif parrain assure l'orientation politique liée à sa lutte. Cette séparation garantit l'efficacité logistique sans interférer avec l'autonomie des personnes concernées."
    },
    {
      art: '02',
      title: 'Gouvernance égalitaire',
      text: "Le projet repose sur le principe : une personne égale une voix. Aucune part de capital social ne donne droit à une influence prépondérante. Les décisions stratégiques sont prises en assemblée de sociétaires."
    },
    {
      art: '03',
      title: 'Destination des profits',
      text: "Le projet est à but non lucratif. 100% des bénéfices générés par le cycle sont affectés au financement de l'outil ou reversés au collectif parrain. Aucun dividende n'est versé aux membres de la coopérative."
    },
    {
      art: '04',
      title: 'Cadre de rémunération',
      text: "Pour garantir la faisabilité économique du projet, un forfait solidaire unique est appliqué à l'ensemble des artistes. Cette équité salariale permet de stabiliser le budget global et de maximiser les fonds reversés à la lutte."
    },
    {
      art: '05',
      title: 'Système tournant',
      text: "Le soutien à un collectif est limité à une édition. Cette règle évite l'accaparement de l'outil technique et permet de répondre à la diversité des stratégies des différents groupes de sans-papiers."
    },
    {
      art: '06',
      title: 'Transparence et audit',
      text: "La comptabilité du projet est ouverte et traçable. Un bilan financier détaillé est produit après chaque édition pour justifier le fléchage des fonds et l'utilisation du capital investi par les sociétaires."
    }
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-black">
      <header className="mb-16 border-b border-black/10 pb-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#BC0000] mb-5">Cadre de coopération</p>
        <h1 className="font-serif italic text-4xl md:text-5xl leading-tight mb-5">Le pacte d'alliance.</h1>
        <p className="text-base text-black/60 leading-relaxed max-w-2xl">
          Ce document définit les règles de fonctionnement entre la coopérative et les collectifs partenaires. Il garantit la clarté des engagements et la pérennité de l'outil.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {articles.map((item) => (
          <section key={item.art} className="bg-white border border-black/8 rounded-sm p-6 shadow-sm">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#BC0000] mb-3">Article {item.art}</p>
            <h3 className="text-sm font-semibold text-black mb-3">{item.title}</h3>
            <p className="text-sm text-black/60 leading-relaxed">{item.text}</p>
          </section>
        ))}
      </div>

      <div className="bg-[#0F0F0F] text-white rounded-sm p-8 md:p-10">
        <h2 className="font-serif italic text-2xl text-white mb-3">Souscrire au pacte</h2>
        <p className="text-sm text-white/60 leading-relaxed mb-8 max-w-xl">
          Devenir sociétaire, c'est investir dans un cadre juridique et technique stable mis au service successif des luttes.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => dispatch({ type: 'TOGGLE_JOIN_MODAL', payload: true })}
            className="bg-[#BC0000] text-white text-sm font-medium px-6 py-3 rounded-sm hover:bg-[#a00000] transition-colors cursor-pointer"
          >
            Devenir sociétaire
          </button>
          <button
            onClick={() => dispatch({ type: 'SET_VIEW', payload: 'finances' })}
            className="border border-white/20 text-white text-sm font-medium px-6 py-3 rounded-sm hover:border-white/60 transition-colors cursor-pointer"
          >
            Voir les détails financiers
          </button>
        </div>
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

export default PactDetail;
