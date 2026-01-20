
import React from 'react';
import { useAppContext } from '../../context/AppContext';

const PactSection: React.FC = () => {
  const { dispatch } = useAppContext();
  
  const articles = [
    { title: 'NON-LUCRATIVITÉ', val: '0€', desc: 'Aucun dividende versé. 100% des bénéfices vont au projet et au collectif parrain.' },
    { title: 'ÉQUITÉ SALARIALE', val: '200€', desc: 'Forfait unique de solidarité appliqué à l\'ensemble des artistes intervenants.' },
    { title: 'DÉCISIONNEL', val: '1 v.', desc: 'Une personne égale une voix, indépendamment de l\'investissement financier.' }
  ];

  return (
    <section id="pacte" className="px-8 mb-48 scroll-mt-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b-4 border-black pb-12 gap-8">
          <div>
            <span className="font-mono text-xs font-black text-[#BC0000] tracking-[0.4em] block mb-4 uppercase italic">Les Piliers de l'Alliance</span>
            <h3 className="font-anton text-7xl lg:text-9xl tracking-tighter leading-none uppercase">LA CHARTE.</h3>
          </div>
          <button 
            onClick={() => dispatch({type: 'SET_VIEW', payload: 'pact'})}
            className="font-anton text-2xl border-b-4 border-black hover:text-[#BC0000] hover:border-[#BC0000] transition-all uppercase pt-4 cursor-pointer"
          >
            LIRE LE PACTE COMPLET →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, i) => (
            <article key={i} className="bg-white p-12 border-4 border-black flex flex-col justify-between min-h-[400px] relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all duration-300">
              <div className="absolute top-6 right-6 font-mono text-[10px] opacity-20 font-black" aria-hidden="true">ENGAGEMENT {i+1}</div>
              <div>
                <h4 className="font-anton text-4xl mb-6 leading-none tracking-tight">{item.title}</h4>
                <p className="font-mono text-sm leading-relaxed opacity-80">{item.desc}</p>
              </div>
              <div className="pt-12">
                 <div className="font-anton text-7xl text-[#BC0000]">{item.val}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PactSection;
