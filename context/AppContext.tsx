
import React, { createContext, useContext, useReducer, useEffect, useMemo, useRef, ReactNode } from 'react';
import { Language, AppState, View } from '../types';

type AppAction =
  | { type: 'SET_LANGUAGE'; payload: Language }
  | { type: 'SET_VIEW'; payload: View }
  | { type: 'TOGGLE_MENU' }
  | { type: 'TOGGLE_JOIN_MODAL'; payload?: boolean };

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
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | undefined>(undefined);

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    case 'SET_VIEW':
      return { ...state, currentView: action.payload, isMenuOpen: false };
    case 'TOGGLE_MENU':
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case 'TOGGLE_JOIN_MODAL': {
      const next = action.payload !== undefined ? action.payload : !state.isJoinModalOpen;
      return { ...state, isJoinModalOpen: next };
    }
    default:
      return state;
  }
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const isFirstRender = useRef(true);

  // Persist language preference
  useEffect(() => {
    localStorage.setItem('preferred_language', state.language);
  }, [state.language]);

  // Sync document language attribute
  useEffect(() => {
    const langMap: Record<Language, string> = { FR: 'fr', NL: 'nl', EN: 'en' };
    document.documentElement.lang = langMap[state.language];
  }, [state.language]);

  // Sync URL hash with current view
  useEffect(() => {
    const newHash = state.currentView === 'home' ? '' : state.currentView;
    const currentHash = window.location.hash.replace('#', '');
    if (currentHash !== newHash) {
      window.location.hash = newHash;
    }
  }, [state.currentView]);

  // Scroll to top on view change (skip initial load)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [state.currentView]);

  // Lock/unlock body scroll when modal opens
  useEffect(() => {
    document.body.style.overflow = state.isJoinModalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [state.isJoinModalOpen]);

  // Handle browser back/forward navigation via hash
  useEffect(() => {
    const handleHashChange = () => {
      const view = getInitialView();
      dispatch({ type: 'SET_VIEW', payload: view });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
