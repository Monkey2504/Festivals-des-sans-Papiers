
import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Language, AppState, View } from '../types';

type AppAction = 
  | { type: 'SET_LANGUAGE'; payload: Language }
  | { type: 'SET_VIEW'; payload: View }
  | { type: 'TOGGLE_MENU' }
  | { type: 'TOGGLE_JOIN_MODAL'; payload?: boolean }
  | { type: 'SET_SCROLL'; payload: { y: number; isScrolled: boolean } };

const getInitialView = (): View => {
  const hash = window.location.hash.replace('#', '') as View;
  const validViews: View[] = ['home', 'project', 'tour', 'pact', 'cooperative', 'finances', 'vsp'];
  return validViews.includes(hash) ? hash : 'home';
};

const initialState: AppState = {
  language: (localStorage.getItem('preferred_language') as Language) || 'FR',
  currentView: getInitialView(),
  isMenuOpen: false,
  isJoinModalOpen: false,
  scrollY: 0,
  isScrolled: false,
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | undefined>(undefined);

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      localStorage.setItem('preferred_language', action.payload);
      return { ...state, language: action.payload };
    case 'SET_VIEW':
      if (window.location.hash !== `#${action.payload}`) {
        window.location.hash = action.payload === 'home' ? '' : action.payload;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return { ...state, currentView: action.payload, isMenuOpen: false };
    case 'TOGGLE_MENU':
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case 'TOGGLE_JOIN_MODAL':
      const newState = action.payload !== undefined ? action.payload : !state.isJoinModalOpen;
      if (newState) document.body.style.overflow = 'hidden';
      else document.body.style.overflow = 'unset';
      return { ...state, isJoinModalOpen: newState };
    case 'SET_SCROLL':
      return { 
        ...state, 
        scrollY: action.payload.y, 
        isScrolled: action.payload.isScrolled 
      };
    default:
      return state;
  }
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const handleHashChange = () => {
      const view = getInitialView();
      if (view !== state.currentView) {
        dispatch({ type: 'SET_VIEW', payload: view });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          dispatch({ 
            type: 'SET_SCROLL', 
            payload: { y: window.scrollY, isScrolled: window.scrollY > 100 } 
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [state.currentView]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
