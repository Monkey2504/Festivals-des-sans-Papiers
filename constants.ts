
import { Translations, Partner } from './types';

export const APP_CONFIG = {
  CROWDFUNDING_GOAL: 15000,
  INITIAL_RAISED: 7450,
  PHASE_2_GOAL: 200000, // Mis à jour selon le compte-rendu
  FESTIVAL_DNA: {
    definition: "Un événement majeur créé pour et par les personnes sans-papiers, sous le parrainage politique de la VSP BXL pour cette édition de lancement.",
    format: "Deux jours de rassemblement national à Bruxelles : concerts, partages culinaires, débats citoyens et ateliers de construction collective.",
    finalities: [
      { 
        title: "SOUVERAINETÉ", 
        desc: "Sortir de la dépendance aux subsides par un modèle d'autofinancement coopératif." 
      },
      { 
        title: "PARRAINAGE", 
        desc: "Chaque édition est portée par une organisation marraine (actuellement la VSP) qui garantit la radicalité politique." 
      },
      { 
        title: "AUTONOMIE", 
        desc: "Une structure technique pérenne au service des luttes, d'année en année." 
      }
    ]
  },
  BUDGET_DETAILS: [
    { label: "Vie de l'ASBL", amount: 1500, desc: "Assurances, frais de compte et cadre légal." },
    { label: "Outils & Com", amount: 3500, desc: "Site web, identité visuelle et campagnes VSP." },
    { label: "Logistique Tournée", amount: 6000, desc: "Matériel son/lumière mobile pour les événements de quartier." },
    { label: "Fonds de Roulement", amount: 4000, desc: "Trésorerie pour le lancement des premiers événements marrainés." }
  ],
  COOP_INFO: {
    legalForm: "ASBL THE MOVMENT",
    mission: "L'autonomie par la culture et le parrainage politique.",
    vision: "Un festival tournant porté par les organisations de terrain.",
    roadmap: {
      phase1: "Crowdfunding & Coopérative : Créer l'outil financier (15k€).",
      phase2: "La Tournée : Événements locaux avec la VSP pour lever les fonds (200k€).",
      phase3: "Le Festival : L'aboutissement politique et culturel national."
    }
  }
};

export const TRANSLATIONS: Translations = {
  FR: {
    governance: {
      title: 'Le Modèle Tripartite',
      description: 'Pour plus d\'efficacité, nous ne cherchons plus l\'unanimité constante, mais l\'action par le parrainage.',
      points: [
        'LA COOPÉRATIVE : L\'outil technique, financier et juridique stable.',
        'LA VSP (Marraine) : Le garant politique qui valide le contenu et la visibilité.',
        'LE LIEU : Le partenaire bruxellois qui offre son toit et sa technique.'
      ]
    },
    triptych: {
      title: 'Le Système de Parrainage',
      pillars: [
        { title: 'L\'OUTIL', desc: 'La Coopérative fournit le cadre de gestion sécurisé.' },
        { title: 'L\'ENGAGEMENT', desc: 'La VSP BXL porte cette première édition historique.' },
        { title: 'L\'OUVERTURE', desc: 'Les salles culturelles accueillent la lutte dans la ville.' }
      ]
    },
    common: {
      donate: 'SOUTENIR LE FESTIVAL',
      learnMore: 'DÉCOUVRIR LE MODÈLE',
      partners: 'SALLES PARTENAIRES',
      totalGoal: 'Objectif Lancement : 15 000€',
      raised: 'CAPITAL RÉCOLTÉ',
      remaining: 'RESTE À FINANCER',
      subscribe: 'DEVENIR SOCIÉTAIRE',
      seedsDossier: 'PRÉSENTATION DU PROJET'
    }
  },
  NL: {
    governance: { title: 'Drietalig Model', description: 'Efficiëntie door middel van politiek peterschap.', points: ['DE COÖPERATIE: Het stabiele technische en financiële instrument.', 'DE VSP (Meter): De politieke garantie voor inhoud en visibiliteit.', 'DE LOCATIE: De Brusselse partner die infrastructuur biedt.'] },
    triptych: { title: 'Peterschap Systeem', pillars: [{ title: 'HET INSTRUMENT', desc: 'De coöperatie biedt het beheerskader.' }, { title: 'HET ENGAGEMENT', desc: 'VSP BXL draagt deze eerste historische editie.' }, { title: 'DE OPENING', desc: 'Cultuurhuizen verwelkomen de strijd in de stad.' }] },
    common: { donate: 'HET FESTIVAL STEUNEN', learnMore: 'ONTDEK HET MODEL', partners: 'LOCATIES', totalGoal: 'Startdoel: 15 000€', raised: 'VERZAMELD', remaining: 'NOG NODIG', subscribe: 'WORD LID', seedsDossier: 'DOSSIER' }
  },
  EN: {
    governance: { title: 'Tripartite Model', description: 'Efficiency through political sponsorship.', points: ['THE COOPERATIVE: The stable technical and financial tool.', 'THE VSP (Sponsor): The political guarantor for content.', 'THE VENUE: The Brussels partner providing infrastructure.'] },
    triptych: { title: 'Sponsorship System', pillars: [{ title: 'THE TOOL', desc: 'The Cooperative provides the management framework.' }, { title: 'THE COMMITMENT', desc: 'VSP BXL leads this historic first edition.' }, { title: 'THE OPENING', desc: 'Venues welcome the struggle into the city.' }] },
    common: { donate: 'SUPPORT THE FESTIVAL', learnMore: 'DISCOVER THE MODEL', partners: 'PARTNERS', totalGoal: 'Start Goal: 15,000€', raised: 'RAISED', remaining: 'NEEDED', subscribe: 'JOIN US', seedsDossier: 'PROJECT' }
  }
};

export const PARTNERS: Partner[] = [
  {
    id: 1,
    name: 'KVS',
    description: 'Premier partenaire historique à avoir ouvert ses portes à la tournée de la VSP.',
    location: 'BRUXELLES CENTRE',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'BEURSSCHOUWBURG',
    description: 'Centre névralgique pour les débats citoyens et l\'auto-organisation.',
    location: 'BRUXELLES CENTRE',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800'
  }
];
