
export type Language = 'FR' | 'NL' | 'EN';
export type View = 'home' | 'project' | 'tour' | 'pact' | 'cooperative' | 'finances' | 'vsp';

export interface Partner {
  id: number;
  name: string;
  description: string;
  location: string;
  imageUrl: string;
}

export interface TranslationSet {
  common: {
    donate: string;
    learnMore: string;
    partners: string;
    totalGoal: string;
    raised: string;
    remaining: string;
    subscribe: string;
    seedsDossier: string;
  };
}

export type Translations = Record<Language, TranslationSet>;

export interface AppState {
  language: Language;
  currentView: View;
  isMenuOpen: boolean;
  isJoinModalOpen: boolean;
}
