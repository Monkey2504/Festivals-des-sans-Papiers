
import React from 'react';

const PactDetail: React.FC = () => {
  const articles = [
    { art: '01', title: 'APPARTENANCE', text: "Le festival appartient aux collectifs de sans-papiers. La coopérative n'est que l'outil juridique à leur service." },
    { art: '02', title: 'SOUVERAINETÉ', text: "Une personne = une voix. Le capital apporté ne donne aucun droit de vote supplémentaire. Les décisions sont prises en assemblée." },
    { art: '03', title: 'AUTO-ORGANISATION', text: "L'ensemble de la programmation est validée par le comité politique composé majoritairement de personnes sans-papiers." },
    { art: '04', title: 'TRANSPARENCE TOTALE', text: "Chaque centime est traçable. Les bilans financiers sont publics et expliqués de manière accessible à tous les membres." },
    { art: '05', title: 'SOLIDARITÉ CACHET', text: "Nous pratiquons un forfait unique. Aucun artiste ne peut demander plus de 200€ pour une prestation, assurant l'équité totale." },
    { art: '06', title: 'NON-DISCRIMINATION', text: "Le festival est un espace safe. Tout comportement raciste, sexiste ou homophobe entraîne l'exclusion immédiate." }
  ];

  return (
    <article className="max-w-[1000px] mx-auto px-8 py-24">
      <header className="mb-24 border-b-8 border-black pb-16 text-center">
        <span className="font-mono text-sm text-[#BC0000] font-black tracking-widest block mb-4 uppercase italic">Statuts & Charte Éthique</span>
        <h1 className="font-anton text-[10vw] leading-none tracking-tighter uppercase">LE PACTE DE <br/>CONFIANCE.</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((item, i) => (
          <div key={i} className="p-10 border-4 border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div className="mb-8">
              <span className="font-mono text-[10px] bg-black text-white px-3 py-1 mb-4 inline-block uppercase tracking-widest">Article {item.art}</span>
              <h3 className="font-anton text-4xl mb-4 uppercase">{item.title}</h3>
              <p className="font-serif text-2xl italic leading-tight opacity-80">{item.text}</p>
            </div>
            <div className="h-2 w-12 bg-[#BC0000]"></div>
          </div>
        ))}
      </div>

      <div className="mt-32 p-16 bg-black text-white text-center">
        <h2 className="font-anton text-6xl mb-8 uppercase">DEVENIR COOPÉRANT</h2>
        <p className="font-serif text-3xl mb-12 italic opacity-60">"C'est s'engager à respecter ces 6 piliers pour toute la durée de l'aventure."</p>
        <button className="bg-[#BC0000] text-white font-anton text-4xl px-12 py-6 hover:bg-white hover:text-black transition-all">SIGNER LE PACTE</button>
      </div>
    </article>
  );
};

export default PactDetail;
