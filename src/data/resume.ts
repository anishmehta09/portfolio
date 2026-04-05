export const resume = {
  name: "Anish Mehta",
  title: "Principal Full Stack Engineer",
  location: "Durham, NC",
  email: "anishmehta09@gmail.com",
  summary:
    "Senior full stack engineer with 10+ years of experience in financial services, specializing in complex planning applications. Currently expanding into React, Next.js, and AI engineering.",

  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],

  skills: {
    frontend: [
      "Angular",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "RxJS",
      "NGRX",
      "Apollo Client",
    ],
    backend: ["NestJS", "Node.js", "Express.js", "GraphQL", "REST"],
    tools: ["Nx Monorepo", "JIRA", "Confluence", "Mural", "Rally"],
    methodologies: ["Agile", "Waterfall", "Tailored SDLC"],
    functional: [
      "Estate Planning",
      "Private Wealth",
      "Financial Planning",
      "Retirement Planning",
    ],
  },

  experience: [
    {
      company: "Fidelity Investments",
      role: "Principal Full Stack Engineer",
      location: "Durham, USA",
      period: "March 2022 — Present",
      project:
        "An intuitive platform translating complex financial goals of ~3 million monthly users into clear, actionable strategies — modeling, tracking, and adjusting progress toward major milestones.",
      bullets: [
        "Led strategic migration of 40+ applications within an Nx monorepo from GraphQL to REST, collaborating with architecture teams to define enterprise standards",
        "Part of technical leadership team managing development of a feature-rich financial planning application using Angular, NestJS, GraphQL, REST and TypeScript",
        "Own the full development lifecycle for user-facing features, from API schema design in NestJS & GraphQL to UI development in Angular",
        "Designed and implemented BFF GraphQL services architecture, improving system scalability and maintainability",
        "Implemented real-time interactive features using GraphQL subscriptions and Server-Sent Events",
        "Led a high-performing team of 8 developers while providing technical oversight to a broader community of 30+ engineers",
        "Championed code reusability by developing shared libraries within Nx Monorepos, reducing redundancy across applications",
      ],
    },
    {
      company: "TechGroup America Inc.",
      role: "Principal Systems Analyst",
      location: "Boston, USA",
      period: "March 2021 — March 2022",
      project:
        "A retirement planning tool using sophisticated financial modeling to project future wealth and generate personalized savings and investment roadmaps.",
      bullets: [
        "Developed web pages and components using Angular",
        "Designed and developed GraphQL APIs to interact with backend services",
        "Created reusable components, custom modules, directives, pipes and services in Angular",
        "Created complex orchestration and sequence diagrams to depict system interactions",
      ],
    },
    {
      company: "TechGroup America Inc.",
      role: "Principal Systems Analyst",
      location: "Boston, USA",
      period: "January 2018 — March 2021",
      project:
        "A web tool using proprietary methodology to generate optimal, prioritized plans for allocating savings across emergency funds, HSAs, 401ks, IRAs and other investment accounts.",
      bullets: [
        "Gathered business requirements from Fidelity's Workplace business sponsors",
        "Assisted Tech Lead and Systems Architect in preparing the System Framework",
        "Created user stories for frontend development and backend integration",
        "Facilitated story grooming and iteration planning sessions, continuously resolving blockers",
      ],
    },
    {
      company: "TechGroup America Inc.",
      role: "Systems Analyst",
      location: "Smithfield, USA",
      period: "March 2017 — January 2018",
      project:
        "A comprehensive wealth management platform migrating the entire advisory workflow from spreadsheets into a unified ecosystem for HNW client lifecycle management.",
      bullets: [
        "Created scoping documents and worked closely with Solutions Architect on Information Architecture",
        "Decomposed complex Excel calculation engines into rules for Functional Requirement Documents",
        "Created high-level business flows, orchestration and sequence diagrams",
        "Worked with internal & external integration partners on integration plans",
      ],
    },
    {
      company: "Incept Data Solutions",
      role: "Systems Analyst",
      location: "Smithfield, USA",
      period: "September 2015 — March 2017",
      project:
        "A sophisticated estate planning portal for high and medium-net-worth clients, orchestrating the entire preparatory phase from financial snapshot to attorney matching.",
      bullets: [
        "Gathered business & system requirements, developed BRDs, FRDs, and Non-Functional Requirements",
        "Documented process flow diagrams using MS Visio for current and future state of applications",
        "Led requirements gathering and coordinated design creation with the UX team",
        "Assisted Scrum Master in conducting scrum events and sprint planning",
      ],
    },
  ],

  education: [
    {
      institution: "Suffolk University",
      location: "Boston, USA",
      degree: "Master of Business Administration (MBA)",
      period: "Aug 2013 — May 2015",
      courses:
        "Real Estate, Investment Banking & Analysis, Fixed Income Securities, Venture Capital Finance",
    },
    {
      institution: "Gujarat University",
      location: "India",
      degree: "Bachelor of Commerce",
      period: "June 2008 — March 2011",
      courses:
        "Adv. Accounting & Auditing, Adv. Statistics, Business Law, Corporate Finance",
    },
  ],

  projects: [
    {
      title: "Portfolio",
      description: "Personal portfolio with AI chatbot powered by Claude API",
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Claude API"],
      github: "https://github.com/anishmehta09/portfolio",
      live: "",
    },
    {
      title: "Stock Tracker",
      description: "Watchlist and stock tracking dashboard with real-time data",
      tech: ["Next.js", "React", "Recharts", "Polygon.io"],
      github: "https://github.com/anish/stock-tracker",
      live: "",
    },
  ],

  contact: {
    email: "anishmehta09@gmail.com",
    github: "https://github.com/anishmehta09",
    linkedin: "https://www.linkedin.com/in/anish-mehta-17ba1a87/",
  },
};

export const chatContext = {
  summary: `Anish Mehta is a Principal Full Stack Engineer at Fidelity Investments in Durham, NC 
  with 10+ years of experience in financial services. He is self-taught in modern web development 
  and has led teams of 8 developers while providing oversight to 30+ engineers. He is currently 
  learning React, Next.js, and Tailwind CSS through personal projects.`,

  personality: `Anish is a lifelong learner who transitioned from business systems analysis to 
  full stack engineering through self-teaching. He bridges business strategy and technical 
  execution, and brings strong communication and leadership skills alongside his technical depth.`,

  aiJourney: `Anish recently applied to the Master of Science in Artificial Intelligence program 
  at UT Austin. His motivation stems from working on rule-based recommendation engines and savings 
  optimization tools at Fidelity, where he recognized the limitations of traditional systems and 
  the potential of machine learning to create truly predictive, personalized financial experiences. 
  He is particularly interested in reinforcement learning and case studies in ML. His goal is to 
  return to financial services as an AI architect building ethical and efficient ML models.`,

  currentFocus: `Anish is currently building two personal projects to learn the modern React 
  ecosystem — a personal portfolio with an AI chatbot (using Next.js, Tailwind, and the Claude API) 
  and a stock tracker/watchlist app. These projects are his way of applying new technologies 
  hands-on while expanding beyond his Angular and NestJS background.`,

  financialExpertise: `Anish has deep domain knowledge in financial services including estate 
  planning, private wealth management, retirement planning, and savings optimization. He has 
  built platforms serving approximately 3 million monthly users at Fidelity Investments.`,

  openToWork: true,
  openToWorkDetails: `Anish is open to AI engineering and full stack roles, particularly in 
  financial services or companies working on AI-powered products. He is based in Durham, NC.`,

  faqs: [
    {
      q: "What is Anish's tech stack?",
      a: "Primarily Angular, NestJS, GraphQL, TypeScript, and REST on the job. Currently learning React, Next.js, and Tailwind CSS through personal projects.",
    },
    {
      q: "Is Anish open to work?",
      a: "Yes, Anish is open to AI engineering and full stack roles, particularly in financial services or AI-focused companies.",
    },
    {
      q: "What is Anish's background in AI?",
      a: "Anish recently applied to the MSAI program at UT Austin. He has worked on recommendation engines and savings optimization tools, and is now actively learning AI/ML to transition into AI architecture.",
    },
    {
      q: "How many years of experience does Anish have?",
      a: "10+ years in financial services, spanning business systems analysis, full stack engineering, and technical leadership.",
    },
    {
      q: "Where does Anish work?",
      a: "Fidelity Investments in Durham, NC as a Principal Full Stack Engineer since March 2022.",
    },
  ],
};
