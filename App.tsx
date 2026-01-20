
import React, { useMemo } from 'react';
import { TRANSLATIONS, APP_CONFIG } from './constants';
import { useAppContext } from './context/AppContext';
import Header from './components/ui/Header';
import CrowdfundingTracker from './components/CrowdfundingTracker';
import HeroSection from './components/sections/HeroSection';
import FinancialSection from './components/sections/FinancialSection';
import PactSection from './components/sections/PactSection';
import TourSection from './components/sections/TourSection';
import FestivalPurposeSection from './components/sections/FestivalPurposeSection';
import GeminiAuditor from './components/GeminiAuditor';
import AgendaPartners from './components/AgendaPartners';

// Detailed Pages
import ProjectDetail from './components/pages/ProjectDetail';
import TourDetail from './components/pages/TourDetail';
import PactDetail from './components/pages/PactDetail';
import CoopDetail from './components/pages/CoopDetail';
import FinanceDetail from './components/pages/FinanceDetail';
import VSPDetail from './components/pages/VSPDetail';

const App: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const t = useMemo(() => TRANSLATIONS[state.language], [state.language]);

  const renderContent = () => {
    switch (state.currentView) {
      case 'project': return <ProjectDetail />;
      case 'tour': return <TourDetail />;
      case 'pact': return <PactDetail />;
      case 'cooperative': return <CoopDetail />;
      case 'finances': return <FinanceDetail />;
      case 'vsp': return <VSPDetail />;
      case 'home':
      default:
        return (
          <>
            <HeroSection />
            <div className="px-8 mb-24 flex justify-center">
              <button 
                onClick={() => dispatch({type: 'SET_VIEW', payload: 'project'})}
                className="font-anton text-2xl border-b-4 border-black hover:text-[#BC0000] hover:border-[#BC0000] transition-all"
              >
                LIRE LE DOSSIER COMPLET →
              </button>
            </div>
            <FestivalPurposeSection />
            <TourSection />
            <FinancialSection />
            <PactSection />
            
            <section id="reseau" className="px-8 py-32 scroll-mt-32">
              <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row items-baseline justify-between mb-24 border-b-2 border-black pb-8">
                  <h2 className="font-anton text-8xl lg:text-[9vw] tracking-tighter uppercase leading-none">MAILLAGE URBAIN</h2>
                  <span className="font-mono text-sm font-bold opacity-40 uppercase tracking-[0.4em]">Salles Partenaires</span>
                </div>
                <AgendaPartners t={t.common} />
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen relative selection:bg-[#BC0000] selection:text-white pb-32">
      <div 
        className="bg-text top-40 left-[-5%] opacity-[0.02] fixed pointer-events-none" 
        style={{ transform: `translateX(${state.scrollY * 0.05}px)` }}
        aria-hidden="true"
      >
        {state.currentView === 'home' ? 'AUTO-ORGANISATION' : state.currentView.toUpperCase()}
      </div>

      <Header />

      <main role="main" className="pt-40">
        {renderContent()}

        {/* Unified CTA for all pages */}
        <section className="px-8 py-64 bg-white text-center relative overflow-hidden border-t-4 border-black">
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="font-anton text-7xl lg:text-[10vw] leading-[0.8] mb-12 tracking-tighter uppercase">
              REJOIGNEZ LE <br/><span className="text-[#BC0000]">MOUVEMENT.</span>
            </h2>
            <p className="font-serif text-3xl lg:text-4xl italic mb-16 opacity-80 leading-tight">
              Devenez l'un des 150 co-fondateurs de la coopérative.
            </p>
            <button 
              onClick={() => dispatch({type: 'SET_VIEW', payload: 'cooperative'})}
              className="bg-black text-white font-anton text-5xl px-20 py-10 hover:bg-[#BC0000] transition-all transform hover:-translate-y-4 shadow-[20px_20px_0px_0px_rgba(188,0,0,1)] cursor-pointer"
            >
              {t.common.subscribe}
            </button>
          </div>
          <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,black,black_10px,#f0f0f0_10px,#f0f0f0_20px)]"></div>
        </section>
      </main>

      <footer className="bg-[#F2F0EB] px-8 py-32 border-t-4 border-black">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-6">
            <span className="font-anton text-7xl block mb-12 uppercase tracking-tighter cursor-pointer" onClick={() => dispatch({type:'SET_VIEW', payload:'home'})}>THE MOVMENT</span>
            <p className="font-serif text-2xl max-w-2xl leading-tight opacity-50 italic">
              "Notre projet n'est pas un événement unique, mais une structure pérenne."
            </p>
          </div>
          <div className="lg:col-span-3">
            <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em] block mb-10 opacity-30">NAVIGATION</span>
            <ul className="flex flex-col gap-4 font-anton text-2xl">
              <li><button onClick={() => dispatch({type:'SET_VIEW', payload:'home'})}>ACCUEIL</button></li>
              <li><button onClick={() => dispatch({type:'SET_VIEW', payload:'vsp'})}>VSP BXL</button></li>
              <li><button onClick={() => dispatch({type:'SET_VIEW', payload:'project'})}>LE PROJET</button></li>
              <li><button onClick={() => dispatch({type:'SET_VIEW', payload:'tour'})}>LA TOURNÉE</button></li>
              <li><button onClick={() => dispatch({type:'SET_VIEW', payload:'cooperative'})}>LA COOPÉRATIVE</button></li>
            </ul>
          </div>
          <div className="lg:col-span-3">
             <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em] block mb-10 opacity-30">CONTACT</span>
             <p className="font-anton text-3xl mb-2">fhzegert@gmail.com</p>
          </div>
        </div>
      </footer>

      <GeminiAuditor />
      <CrowdfundingTracker goal={APP_CONFIG.CROWDFUNDING_GOAL} raisedInitial={APP_CONFIG.INITIAL_RAISED} t={t.common} />
    </div>
  );
};

export default App;
