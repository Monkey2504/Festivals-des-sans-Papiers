
import React from 'react';
import { useAppContext } from '../../context/AppContext';

const PactDetail: React.FC = () => {
  const { dispatch } = useAppContext();

  const articles = [
    { 
      art: '01', 
      title: 'DÉLIMITATION DES RÔLES', 
      text: "La coopérative fournit l'infrastructure juridique et technique. Le collectif parrain assure l'orientation politique liée à sa lutte. Cette séparation garantit l'efficacité logistique sans interférer avec l'autonomie des personnes concernées." 
    },
    { 
      art: '02', 
      title: 'GOUVERNANCE ÉGALITAIRE', 
      text: "Le projet repose sur le principe : une personne égale une voix. Aucune part de capital social ne donne droit à une influence prépondérante. Les décisions stratégiques sont prises en assemblée de sociétaires." 
    },
    { 
      art: '03', 
      title: 'DESTINATION DES PROFITS', 
      text: "Le projet est à but non lucratif. 100% des bénéfices générés par le cycle (soirées et festival) sont affectés au financement de l'outil ou reversés au collectif parrain. Aucun dividende n'est versé aux membres de la coopérative." 
    },
    { 
      art: '04', 
      title: 'CADRE DE RÉMUNÉRATION', 
      text: "Pour garantir la faisabilité économique du projet, un forfait solidaire unique est appliqué à l'ensemble des artistes. Cette équité salariale permet de stabiliser le budget global et de maximiser les fonds reversés à la lutte." 
    },
    { 
      art: '05', 
      title: 'SYSTÈME TOURNANT', 
      text: "Le soutien à un collectif est limité à une édition. Cette règle évite l'accaparement de l'outil technique et permet de répondre à la diversité des stratégies et des temporalités des différents groupes de sans-papiers." 
    },
    { 
      art: '06', 
      title: 'TRANSPARENCE ET AUDIT', 
      text: "La comptabilité du projet est ouverte et traçable. Un bilan financier détaillé est produit après chaque édition pour justifier le fléchage des fonds et l'utilisation du capital investi par les sociétaires." 
    }
  ];

  return (
    <article className="max-w-[1200px] mx-auto px-8 py-24 text-black">
      <header className="mb-24 border-b-8 border-black pb-16">
        <span className="font-mono text-sm text-[#BC0000] font-black tracking-widest block mb-4 uppercase italic">Cadre de Coopération</span>
        <h1 className="font-anton text-[8vw] leading-[0.9] tracking-tighter uppercase mb-8">LE PACTE <br/><span className="text-[#BC0000]">D'ALLIANCE.</span></h1>
        <p className="font-serif text-3xl italic max-w-3xl leading-tight opacity-70">
          Ce document définit les règles de fonctionnement entre la coopérative et les collectifs partenaires. Il garantit la clarté des engagements et la pérennité de l'outil.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
        {articles.map((item, i) => (
          <section key={i} className="p-10 border-4 border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div className="mb-8">
              <span className="font-mono text-[10px] bg-black text-white px-3 py-1 mb-4 inline-block uppercase tracking-widest font-bold">Article {item.art}</span>
              <h3 className="font-anton text-3xl mb-4 uppercase tracking-tight">{item.title}</h3>
              <p className="font-mono text-base leading-relaxed opacity-80">{item.text}</p>
            </div>
            <div className="h-1.5 w-16 bg-[#BC0000]"></div>
          </section>
        ))}
      </div>

      <section className="bg-black text-white p-16 shadow-[20px_20px_0px_0px_rgba(188,0,0,1)] text-center">
        <h2 className="font-anton text-5xl mb-8 uppercase">SOUSCRIRE AU PACTE</h2>
        <p className="font-mono text-lg mb-12 opacity-70 max-w-2xl mx-auto">
          Devenir sociétaire, c'est investir dans un cadre juridique et technique stable mis au service successif des luttes.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <button className="bg-[#BC0000] text-white font-anton text-3xl px-12 py-6 hover:bg-white hover:text-black transition-all cursor-pointer">
            DEVENIR SOCIÉTAIRE
          </button>
          <button 
            onClick={() => dispatch({type: 'SET_VIEW', payload: 'finances'})}
            className="border-2 border-white text-white font-anton text-3xl px-12 py-6 hover:bg-white hover:text-black transition-all cursor-pointer"
          >
            DÉTAILS FINANCIERS
          </button>
        </div>
      </section>

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

export default PactDetail;
