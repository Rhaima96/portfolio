export default {
  nav: {
    expertise: 'Expertise',
    parcours: 'Parcours',
    projets: 'Projets',
    contact: 'Contact',
  },
  toggles: {
    language: 'EN',
    theme: {
      light: 'Mode sombre',
      dark: 'Mode clair',
    },
  },
  hero: {
    availability: 'Disponible pour des missions senior, tech lead ou produit',
    title: 'Je conçois des plateformes Laravel et Vue.js robustes, rapides et prêtes pour la production.',
    intro:
      "Développeur Senior Full-Stack avec 6+ ans d'expérience, j'accompagne des équipes sur des CRM, LMS, plateformes métiers, e-commerce et produits SaaS avec une approche orientée performance, lisibilité et impact.",
    ctaPrimary: 'Me contacter',
    ctaSecondary: 'Voir les projets',
    ctaResume: 'Télécharger le CV',
    stats: [
      { value: '6+', label: "années d'expérience" },
      { value: '10k+', label: 'commandes traitées sur un projet e-commerce' },
      { value: '+45%', label: 'trafic SEO gagné sur une plateforme SSR' },
    ],
    panel: {
      expertise: 'Expertise',
      impact: 'Impact',
      lead: 'Lead',
    },
  },
  sectionLabels: {
    expertise: 'Expertise',
    impact: 'Impact',
    timeline: 'Parcours',
    projects: 'Projets sélectionnés',
    opensource: 'Open source',
    skills: 'Stack',
    contact: 'Contact',
  },
  headings: {
    impact: 'Exécution, ownership et résultats mesurables.',
    timeline: 'Parcours professionnel',
    skills: 'Outils, frameworks et réflexes de delivery.',
  },
  summary: {
    title: 'Un profil senior orienté exécution',
    text:
      "Je travaille à l'intersection du produit, de l'architecture et de l'expérience utilisateur. Mon terrain de jeu: structurer des applications complexes, poser les bons choix techniques et livrer des interfaces fluides sans sacrifier la maintenabilité.",
  },
  cards: [
    {
      title: 'Architecture & produit',
      text: "Cadrage technique, analyse fonctionnelle, découpage de fonctionnalités et choix d'architecture pour des produits durables.",
    },
    {
      title: 'Full-stack Laravel / Vue',
      text: 'Développement end-to-end avec APIs, back-office, dashboards, SSR, authentification, paiements et intégrations tierces.',
    },
    {
      title: 'Performance & qualité',
      text: 'Optimisation du temps de chargement, SEO, stabilité, revues de code, documentation et montée en qualité continue.',
    },
  ],
  impact: [
    'Conception de systèmes métiers utilisés en production par des milliers d’utilisateurs.',
    'Réduction de 40% du temps de traitement sur une solution e-commerce.',
    'Amélioration de 30% des performances sur une plateforme opérationnelle.',
    'Pilotage technique, priorisation et revue de code sur des projets multi-acteurs.',
  ],
  experience: [
    {
      period: "Sept. 2025 - Aujourd'hui",
      title: 'Développeur Full-Stack Laravel / Vue.js',
      company: 'ECG Assurance · Gabès, Tunisie',
      points: [
        "Conception et développement d'un CRM métier.",
        'Analyse des besoins, implémentation et documentation.',
        'Optimisation des performances et maintenance évolutive.',
      ],
    },
    {
      period: 'Sept. 2024 - Août 2025',
      title: 'Développeur Full-Stack Laravel / Inertia / Vue.js',
      company: 'Black Gold · Dammam, Arabie Saoudite',
      points: [
        "Participation à l'architecture et aux choix techniques.",
        "Développement de plateformes LMS, HRM et portail emploi.",
        "Collaboration avec des équipes internationales.",
      ],
    },
    {
      period: 'Août 2022 - Août 2024',
      title: 'Team Lead & Développeur Full-Stack Laravel',
      company: 'itSolve · Remote pour la France',
      points: [
        "Pilotage technique, estimation des charges et planification d'équipe.",
        "Livraison de plateformes e-commerce, intervention technique et VTC.",
        'Mise en place de SEO SSR, dashboards, signatures numériques et déploiement VPS.',
      ],
    },
    {
      period: 'Juil. 2020 - Août 2022',
      title: 'Développeur Laravel',
      company: 'TMKiiN · Gabès, Tunisie',
      points: [
        'Développement backend de plateformes de livraison et messagerie.',
        "Intégration d'APIs externes comme WhatsApp et Geidea.",
        "Documentation fonctionnelle et technique d'applications métier.",
      ],
    },
  ],
  projects: [
    {
      title: 'Jasmin Emballage',
      meta: 'E-commerce · Laravel · Vue.js · API · Paiement · Livraison',
      text:
        "Développement d'une solution e-commerce ayant traité plus de 10 000 commandes, avec APIs mobiles, intégration Sogecommerce et logistique Boxtal.",
      result: 'Résultat: 40% de gain sur le temps de traitement.',
    },
    {
      title: 'SOS Protech',
      meta: 'Plateforme métier · Vue 3 · Inertia SSR · SEO · Dashboard',
      text:
        "Conception d'une plateforme complète de gestion d'interventions, devis, factures, rapports PDF et signatures numériques.",
      result: 'Résultat: +45% de trafic organique et -30% sur le temps de chargement.',
    },
    {
      title: 'Black Gold Platforms',
      meta: 'LMS · HRM · Emploi · Laravel 10 · Vue.js · Inertia',
      text:
        "Contribution à plusieurs produits métier avec participation aux décisions d'architecture et collaboration à distance dans un contexte international.",
      result: 'Résultat: socles applicatifs robustes pour des usages variés.',
    },
  ],
  openSource: {
    title: 'Des packages pensés pour des besoins concrets',
    text:
      "Je contribue aussi à l'écosystème Laravel avec des packages publiés et documentés, orientés intégration paiement et productivité back-office.",
    items: [
      {
        name: 'laravel-flouci',
        description: "Package Laravel pour l'intégration de la passerelle Flouci.",
        href: 'https://packagist.org/packages/rhaima/laravel-flouci',
      },
      {
        name: 'larakonnect',
        description: "Package Laravel pour l'intégration de Konnect.network.",
        href: 'https://packagist.org/packages/rhaima/larakonnect',
      },
      {
        name: 'Voltpanel',
        description: "Outil de création de panneaux d'administration basé sur la VILT stack.",
        href: 'https://rhaima96.github.io/voltpanel-docs',
      },
    ],
  },
  skills: [
    'Laravel',
    'Vue.js 2/3',
    'Inertia.js',
    'Nuxt.js',
    'Livewire',
    'PHP / OOP',
    'Symfony',
    'REST APIs',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Tailwind CSS',
    'Bootstrap',
    'Docker',
    'GitHub / GitLab',
    'Agile / Scrum',
    'SEO technique',
    'Documentation',
  ],
  contact: {
    title: 'Construisons un portfolio qui ouvre des opportunités',
    text:
      'Disponible pour des collaborations en freelance, CDI, lead technique ou accompagnement produit.',
    email: 'Envoyer un email',
    resume: 'Télécharger le CV',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    phone: 'Téléphone',
    location: 'Basé à Gabès, Tunisie · Français courant · Anglais professionnel',
  },
  footer: 'Portfolio bilingue FR / EN construit avec Vue 3, Tailwind CSS et vue-i18n.',
}
