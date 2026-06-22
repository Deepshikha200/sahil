export const profile = {
  name: 'Sahil Sahu',
  title: 'Full-Stack .NET Engineer',
  location: 'Panchkula, Haryana',
  phone: '+91 98772 96733',
  email: 'sahilsahu856@gmail.com',
  linkedin: 'https://linkedin.com/in/con-sahil-sahu',
  github: 'https://github.com/sahilz123',
  relocation: 'Open to Relocation (Poland/EU) – Visa Sponsorship Required',

  summary:
    'Full-stack .NET engineer with 2.5+ years of experience building scalable, production-grade systems using .NET 6/8, C#, ASP.NET Core, React, PostgreSQL, MS SQL Server, RabbitMQ, and Azure. Experience spans enterprise SaaS platforms and government enterprise systems, including distributed messaging, OpenIddict-based authentication, SSRS/RDL reporting, and modernization of legacy platforms to EF Core 8. Known for owning critical modules end-to-end, improving system performance, delivering client-facing features, and building clean, maintainable architectures.',

  skills: [
    {
      category: 'Languages & Frameworks',
      items: ['C#', '.NET 6/8', 'ASP.NET Core', 'React.js', 'Blazor'],
    },
    {
      category: 'Architecture & Backend',
      items: ['Microservices', 'REST APIs', 'Clean Architecture', 'SOLID', 'Dependency Injection'],
    },
    {
      category: 'Cloud & Messaging',
      items: ['Azure Functions', 'Azure Service Bus', 'RabbitMQ', 'ElasticSearch'],
    },
    {
      category: 'Integrations',
      items: ['SendGrid', 'Twilio', 'Webhooks', 'AWS S3'],
    },
    {
      category: 'Authentication & Security',
      items: ['OpenIddict', 'OAuth2', 'JWT', 'Encrypted Tokens', 'RBAC'],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MS SQL Server', 'EF Core 8', 'EF6', 'Query Optimization'],
    },
    {
      category: 'Reporting',
      items: ['SSRS', 'RDL Reports'],
    },
    {
      category: 'DevOps & Tooling',
      items: ['CI/CD', 'Azure Pipelines', 'GitHub Actions', 'Git', 'Docker', 'Splunk'],
    },
    {
      category: 'Testing',
      items: ['FakeItEasy', 'Moq', 'XUnit', 'TDD'],
    },
  ],

  experience: [
    {
      role: 'Software Engineer',
      company: 'Outworks Solutions',
      period: 'Feb 2026 – Present',
      client: 'Punjab State Warehouse Corporation (Govt. of Punjab)',
      link: 'https://pswc.in/',
      stack: 'ASP.NET Core, .NET 6, MS SQL Server, SSRS/RDL',
      highlights: [
        'Own and maintain complete modules for PSWC enterprise systems, working directly with government stakeholders on requirements, deployment, and support.',
        'Developed and maintain the Pension Portal for pension processing and disbursement workflows.',
        'Built and maintain the Godown Rent Agreement module for warehouse lease lifecycle management.',
        'Designed RDL-based SSRS reports for departmental, audit, and compliance reporting.',
        'Primary developer for end-to-end delivery — from MS SQL Server database design through deployment and production support.',
      ],
    },
    {
      role: 'Associate Software Engineer',
      company: 'Compunnel Inc.',
      period: 'April 2025 – Jan 2026',
      projects: [
        {
          name: 'Message Harbor',
          link: 'https://messageharbour.compunnel.com/home',
          stack: '.NET 6, React, RabbitMQ, PostgreSQL, Microservices',
          highlights: [
            'Led development of a multi-channel messaging platform supporting SMS, Email, WhatsApp, and RCS.',
            'Architected RabbitMQ-based pipelines reducing latency by ~35% and enabling 1M+ messages/day processing.',
            'Built modular provider integrations (Twilio, SendGrid, Infobip) with plug-and-play channel onboarding.',
            'Developed optimized React dashboards for large-scale reporting and analytics.',
          ],
        },
        {
          name: 'OfferCraft Loyalty Platform',
          link: 'https://offercraft.compunnel.com/rewards',
          stack: '.NET 8, EF Core 8, AWS S3, Splunk',
          highlights: [
            'Modernizing a large client loyalty system, migrating EF6 modules to EF Core 8.',
            'Integrated Splunk for observability, correlation IDs, and debugging dashboards.',
            'Implemented AWS S3 workflows for campaign and reward asset handling.',
            'Delivered the first module used in the client\'s initial live demo, contributing to project approval.',
          ],
        },
      ],
      highlights: [
        'Built Azure Function consumers for Service Bus queues enabling scalable inter-service communication.',
        'Developed internal Blazor/Razor admin tools.',
        'Contributed to CI/CD automation using Azure Pipelines and GitHub Actions.',
        'Strengthened testing culture using FakeItEasy, Moq, and clean testing patterns.',
      ],
    },
    {
      role: 'Trainee Software Engineer',
      company: 'Compunnel Inc.',
      period: 'Jan 2024 – Jan 2025',
      projects: [
        {
          name: 'Message Harbor',
          stack: '.NET 6, React, RabbitMQ, PostgreSQL, Microservices',
          highlights: [
            'Contributed to early MCMS development including APIs, queue processing, and UI layers.',
            'Implemented foundational OpenIddict authentication workflows.',
            'Authored complete unit test suites manually, improving early platform stability.',
            'Grew into independent module ownership by year-end.',
          ],
        },
        {
          name: 'OpenIddict Authentication Platform',
          link: 'https://github.com/sahilz123/SahilIdentityServer',
          stack: '.NET 8, Razor Pages, MS SQL',
          highlights: [
            'Designed secure authentication using encrypted JWTs and restricted claim exposure.',
            'Automated refresh-token lifecycle in React using custom proxy interceptors.',
            'Implemented centralized SSO flows for Message Harbour.',
            'Refactored authentication architecture for long-term maintainability.',
          ],
        },
      ],
    },
  ],

  projects: [
    {
      name: 'Message Harbor',
      url: 'https://messageharbour.compunnel.com/home',
      description:
        'Multi-channel messaging platform supporting SMS, Email, WhatsApp, and RCS — powering communication workflows inside Eximius.',
      stack: ['.NET 6', 'React', 'RabbitMQ', 'PostgreSQL'],
    },
    {
      name: 'OfferCraft Loyalty Platform',
      url: 'https://offercraft.compunnel.com/rewards',
      description:
        'Client loyalty system with campaigns, games, questionnaires, offers, rewards, and redemption flows.',
      stack: ['.NET 8', 'EF Core 8', 'AWS S3', 'Splunk'],
    },
    {
      name: 'Sahil Identity Server',
      url: 'https://github.com/sahilz123/SahilIdentityServer',
      description:
        'OpenIddict-based authentication platform with encrypted JWTs, SSO flows, and refresh-token automation.',
      stack: ['.NET 8', 'OpenIddict', 'React', 'MS SQL'],
    },
    {
      name: 'PSWC Enterprise Systems',
      url: 'https://pswc.in/',
      description:
        'Government enterprise systems including Pension Portal and Godown Rent Agreement for Punjab State Warehouse Corporation.',
      stack: ['ASP.NET Core', '.NET 6', 'MS SQL Server', 'SSRS'],
    },
    {
      name: 'Eximius AI',
      url: 'https://eximius.ai',
      description:
        'Enabled the core messaging engine by leading Message Harbor\'s communication pipeline integration.',
      stack: ['.NET 6', 'RabbitMQ', 'Microservices'],
    },
  ],

  achievements: [
    'Enabled the core messaging engine for Eximius by leading Message Harbor\'s communication pipeline.',
    'Delivered the first OfferCraft module early, powering the client\'s initial live demo.',
    'Independently delivered a complex campaign/game/rewards workflow accepted with minimal revisions.',
    'Achieved ~35% latency reduction and stable 1M+ messages/day throughput in MCMS.',
  ],

  education: [
    {
      degree: 'M.Sc. Information Technology',
      school: 'Panjab University',
      period: '2022–2024',
      score: '80%',
    },
    {
      degree: 'B.Sc. Computer Science',
      school: 'Panjab University',
      period: '2019–2022',
      score: '75%',
    },
  ],

  certifications: ['Microsoft Certified: Azure AI Fundamentals (AI-900)'],

  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
};
