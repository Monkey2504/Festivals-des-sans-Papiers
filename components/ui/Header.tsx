
import React, { useCallback } from 'react';
import { useAppContext } from '../../context/AppContext';
import { View } from '../../types';
import LanguageSwitcher from '../LanguageSwitcher';

const Header: React.FC = () => {
  const { state, dispatch } = useAppContext();
  
  const handleSetLang = useCallback((lang: any) => {
    dispatch({ type: 'SET_LANGUAGE', payload: lang });
  }, [dispatch]);

  const setView = (view: View) => {
    dispatch({ type: 'SET_VIEW', payload: view });
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        state.isScrolled 
          ? 'bg-[#F2F0EB]/95 py-4 border-b-2 border-black shadow-sm' 
          : 'bg-transparent py-8'
      } backdrop-blur-sm`}
    >
      <div className="max-w-[1600px] mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <h1 
            className="font-anton text-4xl leading-none tracking-tighter cursor-pointer" 
            onClick={() => setView('home')}
          >
            THE MOVMENT
          </h1>
          <div className="hidden md:block h-8 w-px bg-black opacity-10"></div>
          <p className="hidden md:block font-serif text-lg italic opacity-40">La solidarité en mouvement</p>
        </div>
        
        <div className="flex items-center gap-10">
          <nav className="hidden lg:flex gap-8 font-anton text-xs tracking-[0.2em] uppercase">
            <button 
              onClick={() => setView('project')} 
              className={`hover:text-[#BC0000] transition-colors ${state.currentView === 'project' ? 'text-[#BC0000]' : ''}`}
            >
              Le Projet
            </button>
            <button 
              onClick={() => setView('tour')} 
              className={`hover:text-[#BC0000] transition-colors ${state.currentView === 'tour' ? 'text-[#BC0000]' : ''}`}
            >
              La Tournée
            </button>
            <button 
              onClick={() => setView('pact')} 
              className={`hover:text-[#BC0000] transition-colors ${state.currentView === 'pact' ? 'text-[#BC0000]' : ''}`}
            >
              Le Pacte
            </button>
            <button 
              onClick={() => setView('finances')} 
              className={`hover:text-[#BC0000] transition-colors ${state.currentView === 'finances' ? 'text-[#BC0000]' : ''}`}
            >
              Transparence
            </button>
          </nav>
          <LanguageSwitcher currentLang={state.language} setLang={handleSetLang} />
        </div>
      </div>
    </header>
  );
};

export default Header;
