export const profile = {
  name: 'Sahil Sahu',
  title: 'Full-Stack .NET Engineer',
  location: 'Panchkula, Haryana',
  phone: '+91 98772 96733',
  email: 'sahilsahu856@gmail.com',
  linkedin: 'https://linkedin.com/in/con-sahil-sahu',
  github: 'https://github.com/sahilz123',
  relocation: 'Open to Relocation (Poland / European Union)',
  relocation2: 'Visa Sponsorship Required',

  summary: [
    'I am a full-stack .NET engineer passionate about building reliable, scalable software that solves real business problems. With 2.5+ years of hands-on experience across enterprise SaaS and government systems, I specialize in end-to-end module ownership — from database design and API development to React dashboards and production deployment.',
    'My work spans high-throughput messaging platforms processing 1M+ messages/day, OpenIddict-based authentication systems, and large-scale loyalty platform modernization. I thrive in environments where I can take ownership, collaborate with stakeholders, and deliver clean, maintainable architectures using .NET 6/8, C#, ASP.NET Core, React, PostgreSQL, RabbitMQ, and Azure. I am actively seeking opportunities in Poland and the European Union where I can contribute to impactful engineering teams and grow alongside experienced professionals building products at scale.',
  ],

  skills: [
    {
      category: 'Languages & Frameworks',
      items: ['C#', '.NET 6/8', 'ASP.NET Core', 'React.js', 'Blazor', 'Razor Pages', 'JavaScript', 'LINQ'],
    },
    {
      category: 'Architecture & Backend',
      items: ['Microservices', 'REST APIs', 'Clean Architecture', 'SOLID', 'Dependency Injection', 'Entity Framework', 'MVC'],
    },
    {
      category: 'Cloud & Messaging',
      items: ['Microsoft Azure', 'Azure Functions', 'Azure Service Bus', 'RabbitMQ', 'ElasticSearch', 'Distributed Systems', 'Message Queues'],
    },
    {
      category: 'Integrations',
      items: ['SendGrid', 'Twilio', 'Infobip', 'Webhooks', 'AWS S3', 'WhatsApp', 'RCS'],
    },
    {
      category: 'Authentication & Security',
      items: ['OpenIddict', 'OAuth2', 'JWT', 'Encrypted Tokens', 'RBAC', 'Access/Refresh Tokens', 'Single Sign-On (SSO)'],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MS SQL Server', 'EF Core 8', 'EF6', 'Query Optimization', 'Database Design', 'Stored Procedures', 'Migrations'],
    },
    {
      category: 'Reporting',
      items: ['SSRS', 'RDL Reports', 'SQL Server Reporting Services'],
    },
    {
      category: 'Frontend',
      items: ['React.js', 'HTML5', 'CSS3', 'SCSS', 'Responsive UI', 'Bootstrap'],
    },
    {
      category: 'DevOps & Tooling',
      items: ['CI/CD', 'Azure Pipelines', 'GitHub Actions', 'Git', 'Docker', 'Splunk', 'Observability', 'Correlation IDs'],
    },
    {
      category: 'Testing',
      items: ['FakeItEasy', 'Moq', 'XUnit', 'TDD', 'Unit Testing', 'Integration Testing'],
    },
  ],

  experience: [
    {
      role: 'Software Engineer',
      company: 'Outworks Solutions',
      period: 'Mar 2026 – Present',
      client: 'Punjab State Warehouse Corporation',
      clientLink: 'https://pswc.in/',
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
      period: 'May 2024 – Feb 2026',
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
          link: 'https://www.nrttech.com/products/offercraft/',
          stack: '.NET 8, EF Core 8, AWS S3, Splunk',
          highlights: [
            'Modernizing a large client loyalty system, migrating EF6 modules to EF Core 8.',
            'Integrated Splunk for observability, correlation IDs, and debugging dashboards.',
            'Implemented AWS S3 workflows for campaign and reward asset handling.',
            'Delivered the first module used in the client\'s initial live demo, contributing to project approval.',
          ],
        },
      ],
    },
    {
      role: 'Trainee Software Engineer',
      company: 'Compunnel Inc.',
      period: 'Jan 2024 – May 2024',
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
      name: 'Eximius AI',
      url: 'https://eximius.ai',
      description:
        'Enabled the core messaging engine by leading Message Harbor\'s communication pipeline integration.',
      stack: ['.NET 6', 'RabbitMQ', 'Microservices'],
    },
    {
      name: 'OfferCraft Loyalty Platform',
      url: 'https://www.nrttech.com/products/offercraft/',
      description:
        'Client loyalty system with campaigns, games, questionnaires, offers, rewards, and redemption flows.',
      stack: ['.NET 8', 'EF Core 8', 'AWS S3', 'Splunk'],
    },
    {
      name: 'PSWC Enterprise Systems',
      url: 'https://pswc.in/',
      description:
        'Government enterprise systems including Pension Portal and Godown Rent Agreement for Punjab State Warehouse Corporation.',
      stack: ['ASP.NET Core', '.NET 6', 'MS SQL Server', 'SSRS'],
    },
    {
      name: 'Sahil Identity Server',
      url: 'https://github.com/sahilz123/SahilIdentityServer',
      description:
        'OpenIddict-based authentication platform with encrypted JWTs, SSO flows, and refresh-token automation.',
      stack: ['.NET 8', 'OpenIddict', 'React', 'MS SQL'],
    },
  ],

  achievements: [
    'Enabled the core messaging engine for Eximius by leading Message Harbor\'s communication pipeline.',
    'Delivered the first OfferCraft module early, powering the client\'s initial live demo.',
    'Independently delivered a complex campaign/game/rewards workflow accepted with minimal revisions.',
    'Achieved ~35% latency reduction and stable 1M+ messages/day throughput in MCMS.',
  ],

  additionalResponsibilities: [
    'Built Azure Function consumers for Service Bus queues enabling scalable inter-service communication.',
    'Developed internal Blazor/Razor admin tools.',
    'Contributed to CI/CD automation using Azure Pipelines and GitHub Actions.',
    'Strengthened testing culture using FakeItEasy, Moq, and clean testing patterns.',
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

  certifications: [
    {
      name: 'Microsoft Certified: Azure AI Fundamentals (AI-900)',
      url: 'https://learn.microsoft.com/en-us/users/sahilsahu-1624/credentials/bfed9b653d7983c0?ref=https%3A%2F%2Fwww.linkedin.com%2F',
    },
  ],

  leetcode: {
    username: 'sahilz123',
    profileUrl: 'https://leetcode.com/sahilz123/',
    fallback: { total: 0, easy: 0, medium: 0, hard: 0 },
  },

  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
};
