
import React from 'react';

const TourSection: React.FC = () => {
  return (
    <section id="tournee" className="px-8 py-48 bg-white border-y-2 border-black/10 scroll-mt-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="font-mono text-xs text-[#BC0000] font-black tracking-widest block mb-4 uppercase">Le Voyage</span>
            <h3 className="font-anton text-8xl lg:text-9xl tracking-tighter uppercase leading-[0.8] mb-12">
              UNE TOURNÉE <br/>DANS TOUT <br/>BRUXELLES.
            </h3>
            <div className="space-y-8 font-serif text-3xl italic leading-tight opacity-80">
              <p className="border-l-8 border-[#BC0000] pl-8">
                "Avant le grand festival, nous venons à vous. Dans vos centres culturels, vos cafés et vos quartiers."
              </p>
              <p className="text-2xl">
                Cette tournée est le coeur du projet. Chaque soirée partagée permet de financer les étapes suivantes 
                et de faire grandir notre communauté d'entraide.
              </p>
            </div>
          </div>

          <div className="bg-[#F2F0EB] border-4 border-black p-12 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] relative">
            <h4 className="font-anton text-5xl mb-8 uppercase tracking-tighter leading-none text-[#BC0000]">VOUS AVEZ <br/>UNE SALLE ?</h4>
            <p className="font-mono text-sm mb-12 leading-relaxed opacity-70">
              Nous cherchons des lieux accueillants : centres culturels, maisons de quartier ou tout espace prêt à 
              partager une soirée avec nous. Si vous connaissez un endroit, parlez-en autour de vous !
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-anton text-xl shrink-0">1</div>
                <p className="font-anton text-xl uppercase">Proposez un lieu</p>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-anton text-xl shrink-0">2</div>
                <p className="font-anton text-xl uppercase">On vient avec l'énergie</p>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 rounded-full bg-[#BC0000] text-white flex items-center justify-center font-anton text-xl shrink-0">3</div>
                <p className="font-anton text-xl uppercase">Le projet grandit</p>
              </div>
            </div>

            <button 
              className="w-full bg-black text-white font-anton text-3xl py-8 hover:bg-[#BC0000] transition-all shadow-[8px_8px_0px_0px_rgba(188,0,0,1)]"
              onClick={() => window.location.href = 'mailto:fhzegert@gmail.com'}
            >
              NOUS CONTACTER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
