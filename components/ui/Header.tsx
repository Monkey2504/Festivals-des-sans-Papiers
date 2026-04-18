
import React, { useCallback, useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { Language, View } from '../../types';
import LanguageSwitcher from '../LanguageSwitcher';
import { APP_CONFIG } from '../../constants';

const NAV_ITEMS: { view: View; label: string }[] = [
  { view: 'vsp', label: 'VSP BXL' },
  { view: 'project', label: 'Le Projet' },
  { view: 'tour', label: 'La Tournée' },
  { view: 'cooperative', label: 'La Coopérative' },
  { view: 'finances', label: 'Finances' },
];

const Header: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSetLang = useCallback((lang: Language) => {
    dispatch({ type: 'SET_LANGUAGE', payload: lang });
  }, [dispatch]);

  const setView = (view: View) => dispatch({ type: 'SET_VIEW', payload: view });
  const isHome = state.currentView === 'home';
  const isTransparent = isHome && !isScrolled && !state.isMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isTransparent
            ? 'bg-transparent py-6 text-white'
            : 'bg-white/95 backdrop-blur-sm py-4 border-b border-black/10 shadow-sm text-black'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => setView('home')}
            className="font-anton text-xl tracking-tight leading-none cursor-pointer"
          >
            {APP_CONFIG.BRAND_NAME}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map(({ view, label }) => (
              <button
                key={view}
                onClick={() => setView(view)}
                className={`text-sm transition-colors pb-0.5 ${
                  state.currentView === view
                    ? 'text-[#BC0000] border-b border-[#BC0000]'
                    : isTransparent
                    ? 'text-white/80 hover:text-white'
                    : 'text-black/70 hover:text-black'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <div className={`hidden sm:block ${isTransparent ? '[&_button]:text-white/70 [&_button]:hover:text-white' : ''}`}>
              <LanguageSwitcher currentLang={state.language} setLang={handleSetLang} />
            </div>

            <button
              onClick={() => dispatch({ type: 'TOGGLE_JOIN_MODAL', payload: true })}
              className="hidden sm:block bg-[#BC0000] text-white text-xs font-medium px-4 py-2 rounded-sm hover:bg-[#a00000] transition-colors cursor-pointer"
            >
              Rejoindre la coop
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
              className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
              aria-label={state.isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={state.isMenuOpen}
            >
              <span className={`w-6 h-0.5 transition-all duration-300 ${isTransparent ? 'bg-white' : 'bg-black'} ${state.isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 transition-all duration-300 ${isTransparent ? 'bg-white' : 'bg-black'} ${state.isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 transition-all duration-300 ${isTransparent ? 'bg-white' : 'bg-black'} ${state.isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[90] bg-[#0F0F0F]/97 backdrop-blur-md transition-all duration-500 ease-in-out ${state.isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!state.isMenuOpen}
      >
        <div className="h-full flex flex-col justify-center items-center gap-8 p-8">
          <nav className="flex flex-col gap-6 text-center">
            {[{ view: 'home' as View, label: 'Accueil' }, ...NAV_ITEMS].map(({ view, label }) => (
              <button
                key={view}
                onClick={() => setView(view)}
                className={`font-serif italic text-3xl sm:text-4xl text-white/90 hover:text-white transition-colors ${state.currentView === view ? 'text-[#BC0000]' : ''}`}
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => {
              dispatch({ type: 'TOGGLE_JOIN_MODAL', payload: true });
              dispatch({ type: 'TOGGLE_MENU' });
            }}
            className="bg-[#BC0000] text-white text-sm font-medium px-8 py-3 rounded-sm hover:bg-[#a00000] transition-colors mt-4"
          >
            Rejoindre la coop
          </button>

          <div className="mt-4">
            <LanguageSwitcher currentLang={state.language} setLang={handleSetLang} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
