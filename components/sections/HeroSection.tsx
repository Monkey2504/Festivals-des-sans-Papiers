
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';

const HeroSection: React.FC = () => {
  const { dispatch } = useAppContext();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0F0F0F] text-white px-6 sm:px-12 py-24"
      role="banner"
    >
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
        
        <h1 className={`font-anton text-[10vw] sm:text-[8vw] leading-[0.85] tracking-tighter uppercase mb-20 text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          OFFRIR UN <br/>
          <span className="text-[#BC0000]">FESTIVAL</span> <br/>
          AUX SANS-PAPIERS.
        </h1>

        <div className={`max-w-4xl mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight text-center text-white italic">
            Pour lutter contre les divisions internes, contre le manque d’argent au sein du mouvement, contre l’extrême droite et la droite extrême au pouvoir et leur narratif sur les sans-papiers ; pour clamer la valeur de nos amis ; parce que nous refusons la criminalisation d’êtres humains au seul motif qu’ils n’ont pas les bons papiers, parce que nous rejetons l’amalgame entre précarité administrative et dangerosité sociale ; <span className="text-[#BC0000] not-italic font-anton uppercase text-3xl sm:text-4xl block mt-6">offrons-leur une scène nationale.</span>
          </p>
        </div>

        <div className={`max-w-4xl transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight text-center text-white/90 italic">
            Pour un festival politique qui invite chaque année à réfléchir cette thématique au niveau national, pour créer un outil capable de rassembler des milliers de personnes chaque année, et enfin pour se faire du bien, <span className="text-white not-italic font-anton uppercase text-3xl sm:text-4xl underline decoration-[#BC0000] decoration-4 underline-offset-8 block mt-6">offrons aux sans-papiers un festival digne de ce nom.</span>
          </p>
        </div>

        <div className={`mt-24 transition-all duration-1000 delay-[1200ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
           <button 
             onClick={() => dispatch({type: 'SET_VIEW', payload: 'project'})}
             className="bg-[#BC0000] text-white font-anton text-2xl px-12 py-6 hover:bg-white hover:text-black transition-all shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] hover:shadow-none uppercase tracking-widest cursor-pointer"
           >
             Accéder au dossier technique →
           </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
