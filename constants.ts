
import { Translations, Partner } from './types';

export const APP_CONFIG = {
  CROWDFUNDING_GOAL: 15000,
  INITIAL_RAISED: 7450,
  INITIAL_FOUNDERS: 74,
  TOTAL_FOUNDERS_GOAL: 150,
  PHASE_2_GOAL: 150000,
  FESTIVAL_DNA: {
    definition: "Une affirmation politique radicale : le festival est un bloc indivisible qui commence dans les quartiers et s'achève par le rassemblement national.",
    format: "La territorialisation de la lutte : des événements de quartier qui financent la souveraineté de la VSP BXL pour cette édition.",
    finalities: [
      { 
        title: "SOUVERAINETÉ", 
        desc: "L'indépendance financière est le socle de notre parole politique." 
      },
      { 
        title: "PARRAINAGE TOURNANT", 
        desc: "Une édition dédiée à un collectif. Cette année, 100% des bénéfices vont à la VSP BXL." 
      },
      { 
        title: "PASSATION", 
        desc: "Une fois le festival accompli, l'outil est transmis au collectif suivant pour la prochaine lutte." 
      }
    ]
  },
  BUDGET_DETAILS: [
    { label: "Outil coopératif", amount: 1500, desc: "Fonder la structure juridique qui protège la lutte." },
    { label: "Affirmation & Com", amount: 3500, desc: "Porter la parole de la VSP dans l'espace public." },
    { label: "Matériel de souveraineté", amount: 6000, desc: "Infrastructures mobiles pour la tournée des quartiers." },
    { label: "Trésorerie de combat", amount: 4000, desc: "Capital d'action pour l'autonomie immédiate." }
  ],
  COOP_INFO: {
    legalForm: "ASBL THE MOVMENT",
    mission: "Offrir un outil de souveraineté tournant aux collectifs de sans-papiers.",
    vision: "Chaque festival est la propriété politique du collectif marraine de l'année.",
    roadmap: {
      phase1: "Bâtir l'outil (15k€) : Financer l'indépendance technique.",
      phase2: "La Tournée (150k€) : Territorialiser la lutte et lever les fonds pour la VSP.",
      phase3: "Le Rassemblement : L'affirmation nationale et la passation de l'outil."
    }
  }
};

export const TRANSLATIONS: Translations = {
  FR: {
    governance: {
      title: 'Le Parrainage Tournant',
      description: 'The Movment est une infrastructure de passage. Cette édition appartient à la VSP BXL.',
      points: [
        'L\'OUTIL : La Coopérative, propriété collective qui sécurise la technique.',
        'LA MARRAINE : La VSP BXL, qui dirige l\'affirmation et reçoit 100% des bénéfices.',
        'LE CYCLE : Une fois le festival fini, nous choisissons ensemble le prochain combat.'
      ]
    },
    triptych: {
      title: 'Bloc Indivisible',
      pillars: [
        { title: 'TERRITORIALISATION', desc: 'La tournée des quartiers EST le festival en marche.' },
        { title: 'SOUVERAINETÉ', desc: 'S\'autofinancer pour garantir la pureté de notre parole.' },
        { title: 'AFFIRMATION', desc: 'S\'imposer comme sujets politiques par notre propre force.' }
      ]
    },
    common: {
      donate: 'FINANCER LA VSP BXL',
      learnMore: 'COMPRENDRE LE CYCLE',
      partners: 'ZONES D\'AFFIRMATION',
      totalGoal: 'Objectif Outil : 15 000€',
      raised: 'CAPITAL RÉCOLTÉ',
      remaining: 'À CONQUÉRIR',
      subscribe: 'REJOINDRE LA COOP',
      seedsDossier: 'MANIFESTE DU PROJET'
    }
  },
  NL: {
    governance: { title: 'Roterend Peterschap', description: 'The Movment is een infrastructuur. Deze editie is van VSP BXL.', points: ['HET INSTRUMENT: De coöperatie pour la techniek.', 'DE METER: VSP BXL leidt en ontvangt 100% van de winst.', 'DE CYCLUS: Na het festival kiezen we de volgende strijd.'] },
    triptych: { title: 'Onverdeelbaar Blok', pillars: [{ title: 'TERRITORIALISERING', desc: 'De tour door de wijken IS het festival.' }, { title: 'SOUVEREINITEIT', desc: 'Zelffinanciering pour une politieke stem.' }, { title: 'BEVESTIGING', desc: 'Zichzelf als politiek subject positioneren.' }] },
    common: { donate: 'VSP BXL STEUNEN', learnMore: 'ONTDEK DE CYCLUS', partners: 'PARTNERS', totalGoal: 'Doel: 15 000€', raised: 'VERZAMELD', remaining: 'TE GAAN', subscribe: 'WORD LID', seedsDossier: 'MANIFEST' }
  },
  EN: {
    governance: { title: 'Rotating Sponsorship', description: 'The Movment is an infrastructure. This edition belongs to VSP BXL.', points: ['THE TOOL: The Cooperative securing the technique.', 'THE SPONSOR: VSP BXL leads and receives 100% of the profits.', 'THE CYCLE: After the festival, we pick the next struggle.'] },
    triptych: { title: 'One Unified Block', pillars: [{ title: 'TERRITORIALIZATION', desc: 'The neighborhood tour IS the festival.' }, { title: 'SOVEREIGNTY', desc: 'Self-financing for a pure political voice.' }, { title: 'AFFIRMATION', desc: 'Asserting ourselves as political subjects.' }] },
    common: { donate: 'FUND VSP BXL', learnMore: 'DISCOVER THE CYCLE', partners: 'PARTNERS', totalGoal: 'Start Goal: 15,000€', raised: 'RAISED', remaining: 'TO CONQUER', subscribe: 'JOIN US', seedsDossier: 'PROJECT' }
  }
};

export const PARTNERS: Partner[] = [
  {
    id: 1,
    name: 'KVS',
    description: 'Une institution qui prend sa part en accueillant la territorialisation de la lutte.',
    location: 'BRUXELLES CENTRE',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'BEURSSCHOUWBURG',
    description: 'Espace de souveraineté pour la parole radicale des sans-papiers.',
    location: 'BRUXELLES CENTRE',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800'
  }
];
