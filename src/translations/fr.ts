import { TranslationKeys } from './en';

export const fr: TranslationKeys = {
  // Header Navigation
  header: {
    navigation: {
      aboutMe: "À Propos",
      educationExperience: "Formation & Expérience",
      projects: "Projets",
      contact: "Contact"
    }
  },

  // Hero Section
  hero: {
    greeting: "Bonjour",
    name: "Je suis",
    nameHighlight: "Abdessamad Karimi",
    description: "Un développeur full stack fraîchement diplômé basé au Maroc.",
    buttons: {
      whoAmI: "Qui suis-je ?",
      downloadResume: "Télécharger CV"
    },
    tooltips: {
      coffeeLover: "Amateur de Café ☕",
      technologyPassionate: "Passionné de Technologie 💻",
      aiEnthusiast: "Passionné d'IA 🤖",
      creativeThinker: "Penseur Créatif 💡",
      problemSolver: "Résolveur de Problèmes ⚙️",
      catPerson: "Amateur de Chats 🐱"
    }
  },

  // About Section
  about: {
    title: "À Propos de Moi",
    greeting: "Salut ! Je suis Abdessamad",
    subtitle: "Jeune diplômé • Développeur full-stack • Résolveur de problèmes",
    sections: {
      description: "Description",
      qualities: "Qualités",
      skills: "Compétences"
    },
    description: {
      paragraph1: "Je suis un développeur full-stack passionné avec une perspective fraîche et un enthousiasme pour créer des solutions numériques innovantes. En tant que jeune diplômé, j'apporte des pratiques de développement modernes, des technologies de pointe et une base solide en développement frontend et backend. Je m'épanouis en transformant des problèmes complexes en applications élégantes et conviviales.",
      paragraph2: "Mon parcours dans le développement logiciel est motivé par la curiosité et un engagement envers l'apprentissage continu. J'aime travailler avec diverses technologies et frameworks, en restant toujours à jour avec les dernières tendances et meilleures pratiques de l'industrie."
    },
    qualities: {
      cleanCodeAdvocate: {
        title: "Défenseur du Code Propre",
        description: "Écriture de code maintenable et lisible qui suit les meilleures pratiques"
      },
      performanceFocused: {
        title: "Axé sur la Performance",
        description: "Optimisation des applications pour la vitesse et l'efficacité"
      },
      problemSolver: {
        title: "Résolveur de Problèmes",
        description: "Décomposition de défis complexes en solutions gérables"
      },
      teamCollaborator: {
        title: "Collaborateur d'Équipe",
        description: "Travail efficace dans des environnements agiles et des équipes transversales"
      }
    },
    skillCategories: {
      frontend: "Frontend",
      backend: "Backend",
      mobile: "Mobile",
      database: "Base de Données",
      aiMl: "IA & ML",
      devops: "DevOps"
    },
    viewJourney: "View my journey 🎓"
  },

  // Education Section
  education: { 
    title: "Educations et expériences",
    subtitle: "Mon parcours académique et expérience professionnelle en technologie",
    items: {
      masters: {
        title: "Master en Systèmes Distribués et Intelligence Artificielle",
        institution: "ENSET Mohammedia",
        location: "Mohammedia, Maroc",
        period: "Sep 2023 - Présent",
        description: "Études avancées en Systèmes Distribués et Intelligence Artificielle, axées sur l'apprentissage automatique, les réseaux de neurones et l'architecture de systèmes évolutifs."
      },
      bachelor: {
        title: "Licence en Sciences Mathématiques et Informatique",
        institution: "Faculté des Sciences Ain Chock",
        location: "Casablanca, Maroc",
        period: "Oct 2022 - Jun 2023",
        description: "Diplôme fondamental en Sciences Mathématiques et Informatique, construisant une base solide en mathématiques, algorithmes et programmation."
      },
      bts: {
        title: "Brevet de Technicien Supérieur (BTS) - Systèmes et Réseaux Informatiques",
        institution: "BTS - Brevet de Technicien Supérieur",
        location: "Casablanca, Maroc",
        period: "Oct 2020 - Jul 2022",
        description: "Brevet de Technicien Supérieur spécialisé en Systèmes et Réseaux Informatiques, couvrant l'administration réseau, la gestion système et l'infrastructure IT."
      }
    },
    experience: {
      xelops1: {
        title: "Stage Développeur Fullstack",
        company: "Xelops Technology (Ex Neoxia Maroc)",
        type: "Stage",
        location: "Casablanca-Settat, Maroc · Sur site",
        period: "Fév 2025 - Présent · 6 mois",
        description: "Travail sur des projets de développement full-stack utilisant des technologies modernes incluant React Native et React.js pour les applications mobiles et web.",
        skills: ["React Native", "React.js", "Spring Boot", "Java", "Redis", "Développement Full-stack"]
      },
      xelops2: {
        title: "Stage Développeur Full-stack",
        company: "Xelops Technology (Ex Neoxia Maroc)",
        type: "Stage",
        location: "Casablanca-Settat, Maroc · Hybride",
        period: "Jul 2024 - Aoû 2024 · 2 mois",
        description: "Création d'un plugin IntelliJ qui génère des tests unitaires utilisant la technologie IA, améliorant la productivité des développeurs et la qualité du code.",
        skills: ["Tests Unitaires", "Intelligence Artificielle (IA)", "Développement Plugin IntelliJ", "Java", "Kotlin"]
      },
      teamwill: {
        title: "Stage Administrateur Système",
        company: "TEAMWILL",
        type: "Stage",
        location: "Casablanca-Settat, Maroc · Sur site",
        period: "Jun 2022 - Jul 2022 · 2 mois",
        description: "Rôle d'administration système axé sur l'implémentation CI/CD, la configuration Jenkins et la gestion d'infrastructure.",
        skills: ["CI/CD", "Jenkins", "Administration Système", "DevOps", "Linux"]
      }
    }
  },

  // Projects Section
  projects: {
    title: "My projects",
    subtitle: "Une vitrine de mon travail récent et de mes contributions à la communauté tech",
    items: {
      cleverbotAi: {
        title: "Cleverbot Ai",
        description: "Une application Android intelligente alimentée par l'API OpenAI qui fournit des capacités d'IA conversationnelle avec une interface belle et intuitive.",
        category: "Mobile"
      },
      connectAi: {
        title: "ConnectAI",
        description: "Une plateforme qui vous connecte avec les créateurs d'outils IA, où vous pouvez partager des idées, réagir aux innovations, apprendre sur les technologies émergentes et développer votre réseau.",
        category: "Site Web"
      },
      evently: {
        title: "Evently",
        description: "Une plateforme simple pour créer, rejoindre et gérer des événements, conçue pour rationaliser l'organisation et connecter les participants avec facilité.",
        category: "Site Web"
      }
    },
    buttons: {
      viewCode: "Voir le Code"
    },
    github: {
      title: "Plus de Projets",
      description: "Ce ne sont que quelques points forts de mon portfolio. Consultez mon GitHub pour plus de projets, contributions et travaux open-source.",
      button: "Voir Tous les Projets sur GitHub"
    }
  },

  // Contact Section
  contact: {
    title: "Contactez moi",
    subtitle: "Vous avez un projet en tête ou voulez simplement discuter de technologie ? J'aimerais avoir de vos nouvelles !",
    info: {
      email: "Email",
      phone: "Téléphone",
      location: "Localisation"
    },
    socialTitle: "Connectez-vous avec moi",
    coffeeQuote: "Prenons un café virtuel et discutons votre prochaine grande idée !"
  },

  // Footer
  footer: {
    version: "Version : 1.0",
    hosting: "Hébergé avec Vercel",
    developer: "Développé par"
  },

  // Loading Screen
  loading: {
    welcome: "Bienvenue",
    welcomeFrench: "Bienvenue",
    welcomeArabic: "مرحبا"
  },

  // Resume Download Modal
  resumeModal: {
    title: "Télécharger CV",
    description: "Choisissez votre langue préférée pour télécharger mon CV.",
    downloadIn: "Télécharger en"
  },

  // Common
  common: {
    loading: "Chargement...",
    error: "Erreur",
    success: "Succès",
    copy: "Copier",
    copied: "Copié !"
  },

  // Metadata
  metadata: {
    title: "Abdessamad Karimi - Portfolio",
    description: "Un développeur passionné qui aime le café et le code propre.",
    keywords: "développeur, full-stack, portfolio, react, next.js, typescript"
  }
};
