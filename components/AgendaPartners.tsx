
import React from 'react';
import { PARTNERS } from '../constants';
import { TranslationSet } from '../types';

interface Props {
  t: TranslationSet['common'];
}

const AgendaPartners: React.FC<Props> = ({ t }) => {
  return (
    <div className="border-t border-black/20">
      {PARTNERS.map((partner, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div 
            key={partner.id} 
            className={`group relative flex flex-col lg:flex-row items-stretch border-b border-black/20 min-h-[600px] transition-all duration-700 hover:bg-[#BC0000]/[0.02] overflow-hidden`}
          >
            {/* Background Narrative Typography */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none z-0">
              <span className="font-condensed text-[30vw] whitespace-nowrap leading-none tracking-tighter uppercase">
                {partner.name}
              </span>
            </div>

            {/* Part 1: Metadata / Status Column (Left/Right depending on index) */}
            <div className={`w-full lg:w-48 border-black/10 flex lg:flex-col justify-between p-6 z-10 ${isEven ? 'lg:border-r order-1' : 'lg:border-l order-3'}`}>
              <div className="space-y-4">
                <span className="font-condensed text-3xl text-[#BC0000] block leading-none">
                  {idx < 9 ? `0${idx + 1}` : idx + 1}
                </span>
                <div className="hidden lg:block w-8 h-1 bg-black"></div>
              </div>
              
              <div className="flex flex-col gap-2 items-end lg:items-start">
                <span className="bg-black text-white font-condensed text-[10px] px-2 py-1 tracking-widest uppercase">
                  Lieu d'Accueil
                </span>
                <span className="border border-black text-black font-black text-[9px] px-2 py-0.5 tracking-tighter uppercase">
                  Zone de Solidarité
                </span>
              </div>
            </div>

            {/* Part 2: Image Section (Asymmetric) */}
            <div className={`w-full lg:w-2/5 h-80 lg:h-auto overflow-hidden parallax-container z-10 ${isEven ? 'order-2' : 'order-1'}`}>
              <div className="relative h-full w-full">
                <img 
                  src={partner.imageUrl} 
                  alt={partner.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100 parallax-img"
                />
                {/* Status Overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-black p-3 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#BC0000]">Statut : Confirmé</p>
                  <p className="text-[9px] font-bold">Capacité : 500+ personnes</p>
                </div>
              </div>
            </div>

            {/* Part 3: Text Manifesto Content */}
            <div className={`flex-grow p-8 lg:p-16 flex flex-col justify-center z-10 ${isEven ? 'order-3' : 'order-2 lg:border-r border-black/10'}`}>
              <div className="max-w-xl">
                <div className="mb-8 relative inline-block">
                  <span className="font-serif-editorial text-2xl italic text-[#BC0000] mb-2 block">
                    {partner.location}
                  </span>
                  <h3 className="text-7xl lg:text-[7vw] font-condensed leading-[0.8] tracking-tighter uppercase group-hover:text-[#BC0000] transition-colors duration-500">
                    {partner.name}
                  </h3>
                  <div className="absolute -right-8 top-0 h-full w-1 bg-black/5 group-hover:bg-[#BC0000] transition-colors"></div>
                </div>
                
                <p className="font-serif-editorial text-3xl lg:text-4xl leading-tight mb-12 opacity-80 group-hover:opacity-100 transition-opacity">
                  {partner.description}
                </p>

                <div className="flex items-center gap-8 group/btn">
                  <button className="relative overflow-hidden group/text">
                    <span className="font-condensed text-2xl uppercase border-b-4 border-black group-hover/text:border-[#BC0000] transition-all pb-1 inline-block">
                      {t.learnMore}
                    </span>
                    <div className="h-0.5 w-0 bg-[#BC0000] group-hover/text:w-full transition-all duration-300"></div>
                  </button>
                  
                  <div className="flex-grow flex items-center gap-2 overflow-hidden opacity-20 group-hover:opacity-100 transition-opacity">
                    <div className="h-px bg-black flex-grow min-w-[20px]"></div>
                    <span className="font-black text-[9px] uppercase tracking-[0.4em] whitespace-nowrap">
                      Phase 2 : Tour des salles
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AgendaPartners;
