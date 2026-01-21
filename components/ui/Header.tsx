
import React, { useCallback } from 'react';
import { useAppContext } from '../../context/AppContext';
import { View } from '../../types';
import LanguageSwitcher from '../LanguageSwitcher';
import { APP_CONFIG } from '../../constants';

const Header: React.FC = () => {
  const { state, dispatch } = useAppContext();
  
  const handleSetLang = useCallback((lang: any) => {
    dispatch({ type: 'SET_LANGUAGE', payload: lang });
  }, [dispatch]);

  const setView = (view: View) => {
    dispatch({ type: 'SET_VIEW', payload: view });
  };

  const isHome = state.currentView === 'home';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          state.isScrolled || !isHome || state.isMenuOpen
            ? 'bg-[#F2F0EB]/95 py-4 border-b-2 border-black shadow-sm text-black' 
            : 'bg-transparent py-8 text-white'
        } backdrop-blur-sm`}
      >
        <div className="max-w-[1600px] mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <h1 
              className="font-anton text-4xl leading-none tracking-tighter cursor-pointer" 
              onClick={() => setView('home')}
            >
              {APP_CONFIG.BRAND_NAME}
            </h1>
            <div className={`hidden md:block h-8 w-px ${isHome && !state.isScrolled ? 'bg-white' : 'bg-black'} opacity-10`}></div>
            <p className="hidden md:block font-serif text-lg italic opacity-40">La solidarité en mouvement</p>
          </div>
          
          <div className="flex items-center gap-10">
            <nav className="hidden lg:flex gap-8 font-anton text-xs tracking-[0.2em] uppercase">
              {['vsp', 'project', 'tour', 'cooperative'].map((v) => (
                <button 
                  key={v}
                  onClick={() => setView(v as View)} 
                  className={`hover:text-[#BC0000] transition-all pb-1 border-b-2 ${state.currentView === v ? 'text-[#BC0000] border-[#BC0000]' : 'border-transparent'}`}
                >
                  {v === 'project' ? 'Le Projet' : v === 'tour' ? 'La Tournée' : v === 'cooperative' ? 'La Coopérative' : 'VSP BXL'}
                </button>
              ))}
            </nav>
            
            <div className="flex items-center gap-6">
              <div className={`${isHome && !state.isScrolled && !state.isMenuOpen ? 'invert brightness-0' : ''} hidden sm:block`}>
                <LanguageSwitcher currentLang={state.language} setLang={handleSetLang} />
              </div>
              
              <button 
                onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
                className="lg:hidden flex flex-col gap-1.5 p-2"
                aria-label="Menu"
              >
                <span className={`w-8 h-1 transition-all ${isHome && !state.isScrolled && !state.isMenuOpen ? 'bg-white' : 'bg-black'} ${state.isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`w-8 h-1 transition-all ${isHome && !state.isScrolled && !state.isMenuOpen ? 'bg-white' : 'bg-black'} ${state.isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-8 h-1 transition-all ${isHome && !state.isScrolled && !state.isMenuOpen ? 'bg-white' : 'bg-black'} ${state.isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[90] bg-[#BC0000] text-white transition-transform duration-700 ease-in-out ${state.isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="h-full flex flex-col justify-center items-center p-8">
          <nav className="flex flex-col gap-6 text-center">
            {['home', 'vsp', 'project', 'tour', 'cooperative', 'finances'].map((v) => (
              <button 
                key={v}
                onClick={() => setView(v as View)}
                className="font-anton text-5xl sm:text-7xl hover:italic transition-all uppercase"
              >
                {v === 'home' ? 'Accueil' : v === 'project' ? 'Le Projet' : v === 'tour' ? 'La Tournée' : v === 'cooperative' ? 'La Coopérative' : v === 'vsp' ? 'VSP BXL' : 'Finances'}
              </button>
            ))}
          </nav>
          <div className="mt-20">
            <LanguageSwitcher currentLang={state.language} setLang={handleSetLang} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
