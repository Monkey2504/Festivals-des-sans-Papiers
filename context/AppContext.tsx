
import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Language, AppState, View } from '../types';

type AppAction = 
  | { type: 'SET_LANGUAGE'; payload: Language }
  | { type: 'SET_VIEW'; payload: View }
  | { type: 'TOGGLE_MENU' }
  | { type: 'SET_SCROLL'; payload: { y: number; isScrolled: boolean } };

const initialState: AppState = {
  language: (localStorage.getItem('preferred_language') as Language) || 'FR',
  currentView: 'home',
  isMenuOpen: false,
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
      window.scrollTo(0, 0);
      return { ...state, currentView: action.payload, isMenuOpen: false };
    case 'TOGGLE_MENU':
      return { ...state, isMenuOpen: !state.isMenuOpen };
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
