
import React from 'react';
import { useAppContext } from '../../context/AppContext';

const TourSection: React.FC = () => {
  const { dispatch } = useAppContext();

  return (
    <section id="tournee" className="px-8 py-48 bg-white border-y-4 border-black scroll-mt-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="font-mono text-xs text-[#BC0000] font-black tracking-widest block mb-4 uppercase italic">Répertoire d'Action</span>
            <h3 className="font-anton text-8xl lg:text-9xl tracking-tighter uppercase leading-[0.8] mb-12 text-black">
              TERRITOIRE <br/>EN LUTTE.
            </h3>
            <div className="space-y-8 font-serif text-3xl italic leading-tight text-black opacity-90">
              <p className="border-l-8 border-[#BC0000] pl-8">
                "La tournée des quartiers n'est pas une promotion, c'est l'acte de subjectivation politique par l'occupation de l'espace public."
              </p>
              <p className="text-2xl leading-relaxed">
                Le festival commence là où les gens vivent. En territorialisant la lutte, nous transformons chaque commune en une zone d'affirmation. 
                Les bénéfices financent directement la <strong>VSP BXL</strong>, transformant la solidarité culturelle en levier juridique.
              </p>
              <div className="flex flex-wrap gap-8">
                <button 
                  onClick={() => dispatch({type: 'SET_VIEW', payload: 'vsp'})}
                  className="font-anton text-2xl border-b-4 border-black hover:text-[#BC0000] hover:border-[#BC0000] transition-all uppercase pt-4 cursor-pointer"
                >
                  DÉCOUVRIR LE RÉCIT VSP →
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#F2F0EB] border-4 border-black p-12 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] relative flex flex-col">
            <h4 className="font-anton text-5xl mb-8 uppercase tracking-tighter leading-none text-black">L'OUTIL <br/><span className="text-[#BC0000]">SOUVERAIN.</span></h4>
            <p className="font-mono text-sm mb-12 leading-relaxed text-black italic font-bold">
              Pour cette édition, 100% des bénéfices sont acquis à la Voix des Sans-Papiers pour briser l'isolement et porter les revendications nationales.
            </p>
            
            <div className="space-y-8 mb-16">
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-anton text-xl shrink-0">01</div>
                <p className="font-anton text-xl uppercase text-black">Occupations & Visibilité</p>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-anton text-xl shrink-0">02</div>
                <p className="font-anton text-xl uppercase text-black">Cultures & Chorales Militantes</p>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 rounded-full bg-[#BC0000] text-white flex items-center justify-center font-anton text-xl shrink-0">03</div>
                <p className="font-anton text-xl uppercase text-black">Régularisation sur critères clairs</p>
              </div>
            </div>

            <button 
              onClick={() => dispatch({type: 'SET_VIEW', payload: 'cooperative'})}
              className="w-full bg-black text-white font-anton text-3xl py-8 hover:bg-[#BC0000] transition-all shadow-[8px_8px_0px_0px_rgba(188,0,0,1)] text-center block cursor-pointer"
            >
              INVESTIR DANS L'OUTIL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
