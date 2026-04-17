
import { Translations, Partner } from './types';

export const APP_CONFIG = {
  BRAND_NAME: "THE MOVMENT",
  CROWDFUNDING_GOAL: 10000,
  INITIAL_RAISED: 7450,
  INITIAL_FOUNDERS: 74,
  TOTAL_FOUNDERS_GOAL: 150,
  PHASE_2_GOAL: 100000,
  COOP_INFO: {
    legalForm: "Coopérative (en création)",
    mission: "Offrir un outil technique stable aux luttes sociales bruxelloises.",
    vision: "Assurer la pérennité du festival au-delà des urgences quotidiennes des leaders.",
    roadmap: {
      phase1: "Lever 10 000€ pour lancer la coopérative (fond de campagne).",
      phase2: "Organiser la tournée pour atteindre le budget de 100 000€.",
      phase3: "Réaliser le festival national et préparer la passation au collectif suivant."
    }
  },
  BUDGET_DETAILS: [
    { label: "Création Coopérative", amount: 1500, desc: "Frais légaux et structure juridique de l'outil." },
    { label: "Matériel de tournée", amount: 4500, desc: "Infrastructure mobile pour les quartiers." },
    { label: "Campagne & Com", amount: 2500, desc: "Faire connaître la lutte de la VSP partout." },
    { label: "Fond de roulement", amount: 1500, desc: "Lancement des premières dates en salles." }
  ],
};

export const TRANSLATIONS: Translations = {
  FR: {
    common: {
      donate: 'SOUTENIR LE FOND DE CAMPAGNE',
      learnMore: 'EN SAVOIR PLUS',
      partners: 'LIEUX PARTENAIRES',
      totalGoal: 'Objectif Coop : 10 000€',
      raised: 'MONTANT RÉCOLTÉ',
      remaining: 'RESTE À TROUVER',
      subscribe: 'REJOINDRE LA COOP',
      seedsDossier: 'CONSULTER LE DOSSIER'
    }
  },
  NL: {
    common: {
      donate: 'STEUN DE CAMPAGNE',
      learnMore: 'MEER WETEN',
      partners: 'PARTNERS',
      totalGoal: 'Doel: 10 000€',
      raised: 'VERZAMELD',
      remaining: 'TE GAAN',
      subscribe: 'WORD LID',
      seedsDossier: 'MANIFEST'
    }
  },
  EN: {
    common: {
      donate: 'SUPPORT THE CAMPAIGN',
      learnMore: 'LEARN MORE',
      partners: 'PARTNERS',
      totalGoal: 'Goal: 10,000€',
      raised: 'RAISED',
      remaining: 'TO GO',
      subscribe: 'JOIN US',
      seedsDossier: 'DOSSIER'
    }
  }
};

export const PARTNERS: Partner[] = [
  {
    id: 1,
    name: 'KVS',
    description: 'Une institution partenaire qui accueille la tournée pour mobiliser son public.',
    location: 'BRUXELLES CENTRE',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'BEURSSCHOUWBURG',
    description: 'Espace de solidarité pour valoriser la parole politique des sans-papiers.',
    location: 'BRUXELLES CENTRE',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800'
  }
];
