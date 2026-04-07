export default {
  nav: {
    expertise: 'Expertise',
    parcours: 'Experience',
    projets: 'Projects',
    contact: 'Contact',
  },
  toggles: {
    language: 'FR',
    theme: {
      light: 'Dark mode',
      dark: 'Light mode',
    },
  },
  hero: {
    availability: 'Available for senior freelance, tech lead, or product roles',
    title: 'I build robust, fast, production-ready Laravel and Vue.js platforms.',
    intro:
      'Senior Full-Stack Developer with 6+ years of experience delivering CRM, LMS, business platforms, e-commerce systems, and SaaS products with a strong focus on performance, clarity, and user impact.',
    ctaPrimary: 'Get in touch',
    ctaSecondary: 'View projects',
    stats: [
      { value: '6+', label: 'years of experience' },
      { value: '10k+', label: 'orders processed on an e-commerce platform' },
      { value: '+45%', label: 'SEO traffic growth on an SSR platform' },
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
    timeline: 'Journey',
    projects: 'Selected projects',
    opensource: 'Open source',
    skills: 'Stack',
    contact: 'Contact',
  },
  headings: {
    impact: 'Execution, ownership, and measurable outcomes.',
    timeline: 'Professional journey',
    skills: 'Tools, frameworks, and delivery habits.',
  },
  summary: {
    title: 'A senior profile built for execution',
    text:
      'I work at the intersection of product thinking, architecture, and user experience. My sweet spot is structuring complex applications, making strong technical decisions, and shipping polished interfaces without compromising maintainability.',
  },
  cards: [
    {
      title: 'Architecture & product',
      text: 'Technical framing, functional analysis, feature planning, and architecture decisions for durable products.',
    },
    {
      title: 'Laravel / Vue full-stack',
      text: 'End-to-end development with APIs, admin panels, dashboards, SSR, authentication, payments, and third-party integrations.',
    },
    {
      title: 'Performance & quality',
      text: 'Load-time optimization, SEO, stability, code reviews, documentation, and continuous quality improvements.',
    },
  ],
  impact: [
    'Designed business platforms used in production by thousands of users.',
    'Reduced processing time by 40% on an e-commerce workflow.',
    'Improved platform performance by 30% on a live product.',
    'Led technical planning, prioritization, and code review across multi-stakeholder projects.',
  ],
  experience: [
    {
      period: 'Sep 2025 - Present',
      title: 'Full-Stack Laravel / Vue.js Developer',
      company: 'ECG Assurance · Gabes, Tunisia',
      points: [
        'Designed and developed a business CRM.',
        'Handled requirement analysis, implementation, and documentation.',
        'Optimized performance and supported ongoing product evolution.',
      ],
    },
    {
      period: 'Sep 2024 - Aug 2025',
      title: 'Full-Stack Laravel / Inertia / Vue.js Developer',
      company: 'Black Gold · Dammam, Saudi Arabia',
      points: [
        'Contributed to architecture and technical decisions.',
        'Built LMS, HRM, and job portal platforms.',
        'Collaborated with international teams in a remote environment.',
      ],
    },
    {
      period: 'Aug 2022 - Aug 2024',
      title: 'Team Lead & Full-Stack Laravel Developer',
      company: 'itSolve · Remote for France',
      points: [
        'Led technical planning, workload estimates, and team coordination.',
        'Delivered e-commerce, field-service, and VTC platforms.',
        'Implemented SEO-oriented SSR, dashboards, digital signatures, and VPS deployments.',
      ],
    },
    {
      period: 'Jul 2020 - Aug 2022',
      title: 'Laravel Developer',
      company: 'TMKiiN · Gabes, Tunisia',
      points: [
        'Built backend features for delivery and messaging platforms.',
        'Integrated third-party APIs such as WhatsApp and Geidea.',
        'Produced functional and technical documentation for business applications.',
      ],
    },
  ],
  projects: [
    {
      title: 'Jasmin Emballage',
      meta: 'E-commerce · Laravel · Vue.js · API · Payments · Shipping',
      text:
        'Built an e-commerce solution that processed over 10,000 orders, including mobile APIs, Sogecommerce payments, and Boxtal logistics.',
      result: 'Outcome: 40% faster operational processing.',
    },
    {
      title: 'SOS Protech',
      meta: 'Business platform · Vue 3 · Inertia SSR · SEO · Dashboard',
      text:
        'Built a full-service intervention management platform covering quotes, invoices, PDF reports, and digital signatures.',
      result: 'Outcome: +45% organic traffic and 30% faster load times.',
    },
    {
      title: 'Black Gold Platforms',
      meta: 'LMS · HRM · Jobs · Laravel 10 · Vue.js · Inertia',
      text:
        'Helped shape multiple business products, contributing to architecture decisions and international remote collaboration.',
      result: 'Outcome: solid application foundations across several use cases.',
    },
  ],
  openSource: {
    title: 'Open-source work grounded in real-world needs',
    text:
      'I also contribute to the Laravel ecosystem through published, documented packages focused on payment integrations and admin productivity.',
    items: [
      {
        name: 'laravel-flouci',
        description: 'Laravel package for Flouci payment gateway integration.',
        href: 'https://packagist.org/packages/rhaima/laravel-flouci',
      },
      {
        name: 'larakonnect',
        description: 'Laravel package for Konnect.network integration.',
        href: 'https://packagist.org/packages/rhaima/larakonnect',
      },
      {
        name: 'Voltpanel',
        description: 'Admin panel builder powered by the VILT stack.',
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
    'Technical SEO',
    'Documentation',
  ],
  contact: {
    title: 'Let’s build a portfolio that creates opportunities',
    text:
      'Available for freelance work, full-time opportunities, technical leadership, or product delivery support.',
    email: 'Send email',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    phone: 'Phone',
    location: 'Based in Gabes, Tunisia · Fluent French · Professional English',
  },
  footer: 'Bilingual FR / EN portfolio built with Vue 3, Tailwind CSS, and vue-i18n.',
}
