
import React from 'react';

const PactSection: React.FC = () => {
  const articles = [
    { art: '04', title: 'RÉINVESTISSEMENT', val: '100%', desc: '100% des bénéfices générés par le festival sont réinjectés dans la lutte.' },
    { art: '09', title: 'ÉQUITÉ CACHETS', val: '200€', desc: 'Chaque artiste perçoit le même forfait fixe de solidarité.' },
    { art: '13', title: 'SOUVERAINETÉ', val: '1 v.', desc: 'Une personne égale une voix, indépendamment de son capital.' }
  ];

  return (
    <section id="pacte" className="px-8 mb-48 scroll-mt-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 flex items-end justify-between border-b-2 border-black pb-12">
          <div>
            <span className="font-mono text-xs font-black text-[#BC0000] tracking-[0.4em] block mb-4 uppercase">Le Pacte de Co-sociétaires</span>
            <h3 className="font-anton text-8xl lg:text-9xl tracking-tighter leading-none uppercase">LA CHARTE</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, i) => (
            <article key={i} className="bg-white p-12 border-2 border-black flex flex-col justify-between min-h-[450px] relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all duration-300">
              <div className="absolute top-4 right-4 font-mono text-[10px] opacity-20" aria-hidden="true">ART. {item.art}</div>
              <div>
                <h4 className="font-anton text-5xl mb-8 leading-none">{item.title}</h4>
                <p className="font-serif text-3xl italic leading-snug opacity-80">{item.desc}</p>
              </div>
              <div className="pt-12">
                 <div className="font-mono text-6xl font-black text-[#BC0000]">{item.val}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PactSection;
