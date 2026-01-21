
import { Translations, Partner } from './types';

export const APP_CONFIG = {
  BRAND_NAME: "THE MOVMENT",
  CROWDFUNDING_GOAL: 10000,
  INITIAL_RAISED: 7450,
  INITIAL_FOUNDERS: 74,
  TOTAL_FOUNDERS_GOAL: 150,
  PHASE_2_GOAL: 100000,
  FESTIVAL_DNA: {
    definition: "Un festival qui commence dans les quartiers pour aboutir à une scène nationale. Le but est de créer un outil de souveraineté pour les collectifs de sans-papiers.",
    format: "Une alliance entre une coopérative technique, un collectif politique parrain et des lieux culturels partenaires.",
    finalities: [
      { 
        title: "SOUVERAINETÉ", 
        desc: "L'autofinancement pour garantir l'indépendance de la parole politique." 
      },
      { 
        title: "ROTATION", 
        desc: "Chaque année, un nouveau collectif parraine l'outil. Cette année : la VSP BXL." 
      },
      { 
        title: "TERRITOIRE", 
        desc: "Une tournée bruxelloise pour mobiliser bénévoles et fonds avant le grand final." 
      }
    ]
  },
  BUDGET_DETAILS: [
    { label: "Création Coopérative", amount: 1500, desc: "Frais légaux et structure juridique de l'outil." },
    { label: "Matériel de tournée", amount: 4500, desc: "Infrastructure mobile pour les quartiers." },
    { label: "Campagne & Com", amount: 2500, desc: "Faire connaître la lutte de la VSP partout." },
    { label: "Fond de roulement", amount: 1500, desc: "Lancement des premières dates en salles." }
  ],
  COOP_INFO: {
    legalForm: "Coopérative (en création)",
    mission: "Offrir un outil technique stable aux luttes sociales bruxelloises.",
    vision: "Assurer la pérennité du festival au-delà des urgences quotidiennes des leaders.",
    roadmap: {
      phase1: "Lever 10 000€ pour lancer la coopérative (fond de campagne).",
      phase2: "Organiser la tournée pour atteindre le budget de 100 000€.",
      phase3: "Réaliser le festival national et préparer la passation au collectif suivant."
    }
  }
};

export const TRANSLATIONS: Translations = {
  FR: {
    governance: {
      title: 'Le fonctionnement à trois',
      description: 'Chaque événement de la tournée repose sur une collaboration entre trois piliers complémentaires.',
      points: [
        'LA COOPÉRATIVE : Elle vérifie la rentabilité et gère l\'outil technique.',
        'LE COLLECTIF PARRAIN : Il garantit la visibilité et la valorisation des sans-papiers.',
        'LE LIEU : Il apporte son public et son expertise du terrain local.'
      ]
    },
    triptych: {
      title: 'Les objectifs de la tournée',
      pillars: [
        { title: 'FINANCEMENT', desc: 'Récolter les fonds nécessaires pour le festival national.' },
        { title: 'BÉNÉVOLAT', desc: 'Trouver les forces vives pour organiser le grand final.' },
        { title: 'COOPÉRATION', desc: 'Recruter les futurs membres de l\'infrastructure technique.' }
      ]
    },
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
    governance: { 
      title: 'Drie-actoren model', 
      description: 'Elk evenement rust op drie complementaire pijlers.', 
      points: [
        'DE COÖPERATIE: Beheert het instrument en de rendabiliteit.', 
        'HET PEETCOLLECTIEF (VSP BXL): Garandeert de politieke zichtbaarheid.', 
        'DE LOCATIE: Brengt het lokale publiek en expertise.'
      ] 
    },
    triptych: { 
      title: 'Doelen van de tour', 
      pillars: [
        { title: 'FINANCIERING', desc: 'Geld inzamelen voor het nationaal festival.' }, 
        { title: 'VRIJWILLIGERS', desc: 'Mensen vinden voor de organisatie.' }, 
        { title: 'COÖPERATIE', desc: 'Nieuwe leden werven voor de structuur.' }
      ] 
    },
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
    governance: { 
      title: 'Three-Actor Model', 
      description: 'Each event relies on three complementary pillars.', 
      points: [
        'THE COOP: Manages the tool and financial viability.', 
        'THE SPONSORING COLLECTIVE (VSP BXL): Guarantees political visibility.', 
        'THE VENUE: Provides local audience and expertise.'
      ] 
    },
    triptych: { 
      title: 'Tour Objectives', 
      pillars: [
        { title: 'FUNDING', desc: 'Raising funds for the national festival.' }, 
        { title: 'VOLUNTEERING', desc: 'Finding people for the final organization.' }, 
        { title: 'COOPERATION', desc: 'Recruiting new members for the structure.' }
      ] 
    },
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
