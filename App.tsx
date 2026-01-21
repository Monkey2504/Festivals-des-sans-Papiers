
import React, { useMemo, useEffect, useState } from 'react';
import { TRANSLATIONS, APP_CONFIG } from './constants';
import { useAppContext } from './context/AppContext';
import Header from './components/ui/Header';
import CrowdfundingTracker from './components/CrowdfundingTracker';
import HeroSection from './components/sections/HeroSection';
import GeminiAuditor from './components/GeminiAuditor';
import JoinModal from './components/ui/JoinModal';

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
  const [fade, setFade] = useState(true);

  // Cross-fade effect on view change
  useEffect(() => {
    setFade(false);
    const timer = setTimeout(() => setFade(true), 50);
    return () => clearTimeout(timer);
  }, [state.currentView]);

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
        return <HeroSection />;
    }
  };

  const isHome = state.currentView === 'home';

  return (
    <div className={`min-h-screen relative selection:bg-[#BC0000] selection:text-white transition-colors duration-700 ${isHome ? 'bg-[#0F0F0F]' : 'bg-[#F2F0EB]'}`}>
      <Header />
      <JoinModal />

      <main role="main" className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        {renderContent()}

        {!isHome && (
          <>
            <section className="px-8 py-40 md:py-64 bg-white text-center relative overflow-hidden border-t-4 border-black">
              <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="font-anton text-6xl md:text-7xl lg:text-[10vw] leading-[0.8] mb-12 tracking-tighter uppercase">
                  REJOIGNEZ LE <br/><span className="text-[#BC0000]">MOUVEMENT.</span>
                </h2>
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl italic mb-16 opacity-80 leading-tight">
                  Devenez l'un des 150 co-fondateurs de la coopérative.
                </p>
                <button 
                  onClick={() => dispatch({type: 'TOGGLE_JOIN_MODAL', payload: true})}
                  className="bg-black text-white font-anton text-3xl md:text-5xl px-12 md:px-20 py-8 md:py-10 hover:bg-[#BC0000] transition-all transform hover:-translate-y-4 shadow-[20px_20px_0px_0px_rgba(188,0,0,1)] cursor-pointer"
                >
                  {t.common.subscribe}
                </button>
              </div>
              <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,black,black_10px,#f0f0f0_10px,#f0f0f0_20px)]"></div>
            </section>

            <footer className="bg-[#F2F0EB] px-8 py-32 border-t-4 border-black">
              <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
                <div className="lg:col-span-6">
                  <span className="font-anton text-7xl block mb-12 uppercase tracking-tighter cursor-pointer" onClick={() => dispatch({type:'SET_VIEW', payload:'home'})}>
                    {APP_CONFIG.BRAND_NAME}
                  </span>
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
          </>
        )}
      </main>

      <GeminiAuditor />
      <CrowdfundingTracker goal={APP_CONFIG.CROWDFUNDING_GOAL} raisedInitial={APP_CONFIG.INITIAL_RAISED} t={t.common} />
    </div>
  );
};

export default App;
