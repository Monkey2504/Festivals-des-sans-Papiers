
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
    <div className={`min-h-screen relative selection:bg-[#BC0000] selection:text-white transition-colors duration-500 ${isHome ? 'bg-[#0F0F0F]' : 'bg-[#F2F0EB]'}`}>
      <Header />
      <JoinModal />

      <main role="main" className={`transition-opacity duration-300 pb-16 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        {renderContent()}

        {!isHome && (
          <>
            {/* CTA Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-24 bg-[#0F0F0F] text-center">
              <div className="max-w-2xl mx-auto">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#BC0000] mb-6">
                  Rejoindre le mouvement
                </p>
                <h2 className="font-serif italic text-3xl md:text-4xl text-white mb-6 leading-tight">
                  Devenez l'un des 150 co-fondateurs de la coopérative.
                </h2>
                <p className="text-white/60 text-base mb-10 leading-relaxed max-w-lg mx-auto">
                  Chaque co-fondateur contribue à bâtir l'outil technique du festival — une structure pérenne, indépendante, au service des collectifs.
                </p>
                <button
                  onClick={() => dispatch({ type: 'TOGGLE_JOIN_MODAL', payload: true })}
                  className="bg-[#BC0000] text-white px-8 py-4 text-sm font-medium rounded-sm hover:bg-[#a00000] transition-colors cursor-pointer"
                >
                  {t.common.subscribe}
                </button>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#F2F0EB] px-4 sm:px-6 lg:px-8 py-16 border-t border-black/10">
              <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="lg:col-span-2">
                  <span
                    className="font-anton text-2xl block mb-4 cursor-pointer"
                    onClick={() => dispatch({ type: 'SET_VIEW', payload: 'home' })}
                  >
                    {APP_CONFIG.BRAND_NAME}
                  </span>
                  <p className="font-serif italic text-base text-black/60 leading-relaxed max-w-xs">
                    Un réseau de soirées culturelles co-organisées avec des collectifs de sans-papiers, à Bruxelles.
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/40 block mb-5">Navigation</span>
                  <ul className="flex flex-col gap-3 text-sm">
                    {[
                      { view: 'home', label: 'Accueil' },
                      { view: 'vsp', label: 'VSP BXL' },
                      { view: 'project', label: 'Le Projet' },
                      { view: 'tour', label: 'La Tournée' },
                      { view: 'cooperative', label: 'La Coopérative' },
                    ].map(({ view, label }) => (
                      <li key={view}>
                        <button
                          onClick={() => dispatch({ type: 'SET_VIEW', payload: view as any })}
                          className="text-black/70 hover:text-[#BC0000] transition-colors"
                        >
                          {label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/40 block mb-5">Contact</span>
                  <p className="text-sm text-black/70 mb-2">contact@festivalsanspapiers.be</p>
                  <p className="text-xs text-black/40 leading-relaxed mt-6">
                    Festival des Sans-Papiers<br />
                    Porté par Ballal asbl<br />
                    En transition vers une coopérative autonome
                  </p>
                </div>
              </div>
            </footer>
          </>
        )}
      </main>

      <GeminiAuditor />
      <CrowdfundingTracker />
    </div>
  );
};

export default App;
