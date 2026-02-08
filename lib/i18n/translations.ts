export type Language = 'en' | 'es' | 'it';

export interface Translations {
  navigation: {
    about: string;
    experience: string;
    skills: string;
  };
  home: {
    title: string;
    subtitle: string;
    viewExperience: string;
    getInTouch: string;
    aboutMe: {
      title: string;
      paragraph1: string;
      paragraph2: string;
      yearsExperience: string;
      projectsDelivered: string;
      clientSatisfaction: string;
    };
    coreCompetencies: {
      title: string;
      technicalExcellence: {
        title: string;
        description: string;
      };
      productStrategy: {
        title: string;
        description: string;
      };
      teamLeadership: {
        title: string;
        description: string;
      };
      growthFocus: {
        title: string;
        description: string;
      };
    };
    contact: {
      title: string;
      subtitle: string;
      emailLabel: string;
    };
  };
  experience: {
    title: string;
    positions: {
      a11yBot: {
        company: string;
        date: string;
        position: string;
        tasks: string[];
      };
      accessibilityDetector: {
        date: string;
        position: string;
        tasks: string[];
      };
      accessibilityTester: {
        position: string;
        tasks: string[];
      };
      functionalTester: {
        position: string;
        tasks: string[];
      };
      angelsPets: {
        company: string;
        date: string;
        position: string;
        tasks: string[];
      };
      jmrl: {
        company: string;
        date: string;
        position: string;
        tasks: string[];
      };
      rechargePhones: {
        company: string;
        date: string;
        position: string;
        tasks: string[];
      };
    };
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      productManagement: string;
      programmingLanguages: string;
      toolsAnalytics: string;
      frameworksLibraries: string;
      designPatterns: string;
      operatingSystems: string;
      languages: string;
      education: string;
    };
    productSkills: {
      productRoadmap: {
        name: string;
        description: string;
      };
      userResearch: {
        name: string;
        description: string;
      };
      abTesting: {
        name: string;
        description: string;
      };
      stakeholderMgmt: {
        name: string;
        description: string;
      };
    };
    accessibility: {
      previousProgrammingLanguages: string;
      nextProgrammingLanguages: string;
      previousFrameworks: string;
      nextFrameworks: string;
    };
  };
  languageSelector: {
    label: string;
    english: string;
    spanish: string;
    italian: string;
  };
  accessibility: {
    skipToMain: string;
    githubProfile: string;
    linkedinProfile: string;
    email: string;
    whatsapp: string;
    themeToggle: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    navigation: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
    },
    home: {
      title: 'Laura Lam | Product Manager',
      subtitle: 'Building scalable tech solutions that bridge the gap between complex engineering and user needs.',
      viewExperience: 'View Experience',
      getInTouch: 'Get in Touch',
      aboutMe: {
        title: 'About Me',
        paragraph1: 'Highly trained and motivated Computer Engineer with extensive experience in software development, programming, and frontend design. I excel at translating complex technical requirements into user-centric product solutions.',
        paragraph2: 'My approach combines technical expertise with strategic product thinking, ensuring that solutions not only work flawlessly but also deliver exceptional user experiences. I\'m passionate about building products that solve real problems while pushing the boundaries of what\'s technically possible.',
        yearsExperience: 'Years Experience',
        projectsDelivered: 'Projects Delivered',
        clientSatisfaction: 'Client Satisfaction',
      },
      coreCompetencies: {
        title: 'Core Competencies',
        technicalExcellence: {
          title: 'Technical Excellence',
          description: 'Full-stack development expertise with modern frameworks and best practices',
        },
        productStrategy: {
          title: 'Product Strategy',
          description: 'Data-driven decision making and user-centered design thinking',
        },
        teamLeadership: {
          title: 'Team Leadership',
          description: 'Cross-functional collaboration and agile project management',
        },
        growthFocus: {
          title: 'Growth Focus',
          description: 'Scaling products and optimizing user acquisition funnels',
        },
      },
      contact: {
        title: 'Let\'s build something impactful together.',
        subtitle: 'I\'m always open to discussing product strategy, technical challenges, or potential collaborations.',
        emailLabel: 'Email',
      },
    },
    experience: {
      title: 'Experience',
      positions: {
        a11yBot: {
          company: 'A11 y Solutions September 2023 - Present',
          date: 'A11y Bot',
          position: 'Frontend Developer',
          tasks: [
            'Developed an accessibility-focused bot interface using React, enhancing user experience for individuals with disabilities.',
            'Implemented state management with Redux to streamline data flow and improve application performance.',
            'Integrated Axios for seamless API interactions, ensuring efficient data retrieval and management.',
            'Designed and enforced authentication protocols with Auth0, ensuring secure user access and data protection.',
            'Collaborated with UX/UI designers to create intuitive layouts and features, enhancing usability and accessibility standards.',
          ],
        },
        accessibilityDetector: {
          date: 'Accesibility Detector',
          position: 'Product Analyst',
          tasks: [
            'Conduct market research to identify key accessibility issues in web applications.',
            'Collaborate with cross-functional teams to define product requirements and ensure alignment with WCAG 2.2 standards.',
            'Analyze user feedback and data to enhance the product\'s ability to detect and report accessibility issues.',
            'Develop product documentation and user guides for the accessibility issue detector.',
            'Participate in stakeholder meetings to present findings and gather input.',
            'Create requirements and functionalities, leveraging development skills and accessibility experience.',
          ],
        },
        accessibilityTester: {
          position: 'Accesibility Tester',
          tasks: [
            'Evaluation of compliance with accessibility standards.',
            'Testing with assistive technologies.',
            'Analysis of navigation and interaction.',
            'Facilitating usability testing with individuals having disabilities.',
            'Creating detailed reports.',
          ],
        },
        functionalTester: {
          position: 'Functional Tester',
          tasks: [
            'Executes test cases under varying circumstances.',
            'Documents and evaluates test results.',
            'Detects, logs, and reports program bugs and glitches.',
            'Tracks defects and helps troubleshoot errors.',
            'Reviews test procedures and develops test scripts.',
          ],
        },
        angelsPets: {
          company: 'ANGELS PETS',
          date: 'January 2023 - September 2023',
          position: 'Community Manager',
          tasks: [
            'Successfully spearhead campaigns on social media platforms including Facebook, Twitter, and Instagram',
            'Manage social media planning for execution of marketing strategies and community management',
            'Implement marketing and promotion tactics that led to 34% growth in total social media shares and 27% increase in website traffic from social media posts',
            'Monitor online presence of company\'s brand and engage with users, strengthening customer relationships',
          ],
        },
        jmrl: {
          company: 'JMRL',
          date: 'September 2023',
          position: 'Marketing',
          tasks: [
            'Analysis of market needs, trends and creative idea development.',
            'Design and management of plans, offline/online marketing activities',
            'Communication management and marketing plan in traditional media and digital platforms.',
            'Design and implementation of online marketing plans for clients from various sectors.',
            'Analysis of the competition, market study and trends in digital platforms.',
          ],
        },
        rechargePhones: {
          company: 'Recharge Phones',
          date: 'April 2023 - May 2023',
          position: 'QA Tester',
          tasks: [
            'Developed and executed test plans based on business requirements.',
            'Wrote integration, regression, and automated test cases.',
            'Maintained and executed regression test suites. Ran Beta testing and defect management.',
            'Provided recommendations on areas for test case automation.',
          ],
        },
      },
    },
    skills: {
      title: 'Skills',
      subtitle: 'A comprehensive overview of my technical expertise, product methodologies, and analytical toolkit developed through years of building user-centric solutions.',
      categories: {
        productManagement: 'Product Management & Strategy',
        programmingLanguages: 'Programming Languages',
        toolsAnalytics: 'Tools & Analytics',
        frameworksLibraries: 'Frameworks & Libraries',
        designPatterns: 'Design Patterns & Best Practices',
        operatingSystems: 'Operating Systems',
        languages: 'Languages',
        education: 'Education',
      },
      productSkills: {
        productRoadmap: {
          name: 'Product Roadmap',
          description: 'Prioritization frameworks (RICE/Kano) & strategic alignment',
        },
        userResearch: {
          name: 'User Research',
          description: 'Interviewing, personas, and qualitative data synthesis',
        },
        abTesting: {
          name: 'A/B Testing',
          description: 'Hypothesis testing and experimentation lifecycle',
        },
        stakeholderMgmt: {
          name: 'Stakeholder Mgmt',
          description: 'Cross-functional collaboration with Eng, Design, and Sales',
        },
      },
      accessibility: {
        previousProgrammingLanguages: 'Previous programming languages',
        nextProgrammingLanguages: 'Next programming languages',
        previousFrameworks: 'Previous frameworks',
        nextFrameworks: 'Next frameworks',
      },
    },
    languageSelector: {
      label: 'Language selector',
      english: 'EN',
      spanish: 'ES',
      italian: 'IT',
    },
    accessibility: {
      skipToMain: 'Skip to main content',
      githubProfile: 'GitHub profile',
      linkedinProfile: 'LinkedIn profile',
      email: 'Email Laura',
      whatsapp: 'WhatsApp',
      themeToggle: 'Toggle theme',
    },
  },
  es: {
    navigation: {
      about: 'Acerca de',
      experience: 'Experiencia',
      skills: 'Habilidades',
    },
    home: {
      title: 'Laura Lam | Product Manager',
      subtitle: 'Construyendo soluciones tecnológicas escalables que conectan la ingeniería compleja con las necesidades del usuario.',
      viewExperience: 'Ver Experiencia',
      getInTouch: 'Contactar',
      aboutMe: {
        title: 'Acerca de Mí',
        paragraph1: 'Ingeniera Informática altamente capacitada y motivada con amplia experiencia en desarrollo de software, programación y diseño frontend. Destaco en la traducción de requisitos técnicos complejos en soluciones de productos centradas en el usuario.',
        paragraph2: 'Mi enfoque combina experiencia técnica con pensamiento estratégico de productos, asegurando que las soluciones no solo funcionen sin problemas sino que también brinden experiencias de usuario excepcionales. Soy apasionada de construir productos que resuelven problemas reales mientras empujan los límites de lo técnicamente posible.',
        yearsExperience: 'Años de Experiencia',
        projectsDelivered: 'Proyectos Entregados',
        clientSatisfaction: 'Satisfacción del Cliente',
      },
      coreCompetencies: {
        title: 'Competencias Clave',
        technicalExcellence: {
          title: 'Excelencia Técnica',
          description: 'Expertos en desarrollo full-stack con frameworks modernos y mejores prácticas',
        },
        productStrategy: {
          title: 'Estrategia de Producto',
          description: 'Toma de decisiones basada en datos y pensamiento de diseño centrado en el usuario',
        },
        teamLeadership: {
          title: 'Liderazgo de Equipo',
          description: 'Colaboración multifuncional y gestión de proyectos ágiles',
        },
        growthFocus: {
          title: 'Enfoque en Crecimiento',
          description: 'Escalando productos y optimizando embudos de adquisición de usuarios',
        },
      },
      contact: {
        title: 'Construyamos algo impactante juntos.',
        subtitle: 'Siempre estoy abierta a discutir estrategia de productos, desafíos técnicos o colaboraciones potenciales.',
        emailLabel: 'Correo',
      },
    },
    experience: {
      title: 'Experiencia',
      positions: {
        a11yBot: {
          company: 'A11 y Solutions Septiembre 2023 - Presente',
          date: 'A11y Bot',
          position: 'Desarrolladora Frontend',
          tasks: [
            'Desarrollé una interfaz de bot enfocada en accesibilidad usando React, mejorando la experiencia del usuario para personas con discapacidades.',
            'Implementé gestión de estado con Redux para optimizar el flujo de datos y mejorar el rendimiento de la aplicación.',
            'Integré Axios para interacciones API fluidas, asegurando recuperación y gestión eficiente de datos.',
            'Diseñé y enforcing protocolos de autenticación con Auth0, asegurando acceso seguro de usuarios y protección de datos.',
            'Colaboré con diseñadores UX/UI para crear layouts intuitivos y características, mejorando usabilidad y estándares de accesibilidad.',
          ],
        },
        accessibilityDetector: {
          date: 'Detector de Accesibilidad',
          position: 'Analista de Producto',
          tasks: [
            'Realizo investigación de mercado para identificar problemas clave de accesibilidad en aplicaciones web.',
            'Colaboro con equipos multifuncionales para definir requisitos de producto y asegurar alineación con estándares WCAG 2.2.',
            'Analizo retroalimentación de usuarios y datos para mejorar la capacidad del producto para detectar y reportar problemas de accesibilidad.',
            'Desarrollo documentación de producto y guías de usuario para el detector de problemas de accesibilidad.',
            'Participo en reuniones con stakeholders para presentar hallazgos y recopilar input.',
            'Creo requisitos y funcionalidades, aprovechando habilidades de desarrollo y experiencia en accesibilidad.',
          ],
        },
        accessibilityTester: {
          position: 'Tester de Accesibilidad',
          tasks: [
            'Evaluación de cumplimiento con estándares de accesibilidad.',
            'Pruebas con tecnologías asistivas.',
            'Análisis de navegación e interacción.',
            'Facilitando pruebas de usabilidad con personas con discapacidades.',
            'Creando reportes detallados.',
          ],
        },
        functionalTester: {
          position: 'Tester Funcional',
          tasks: [
            'Ejecuta casos de prueba bajo circunstancias variables.',
            'Documenta y evalúa resultados de prueba.',
            'Detecta, registra y reporta bugs y glitches del programa.',
            'Rastrea defectos y ayuda a solucionar errores.',
            'Revisa procedimientos de prueba y desarrolla scripts de prueba.',
          ],
        },
        angelsPets: {
          company: 'ANGELS PETS',
          date: 'Enero 2023 - Septiembre 2023',
          position: 'Community Manager',
          tasks: [
            'Lideré exitosamente campañas en plataformas de redes sociales incluyendo Facebook, Twitter e Instagram',
            'Gestioné planificación de redes sociales para ejecución de estrategias de marketing y gestión de comunidad',
            'Implementé tácticas de marketing y promoción que resultaron en 34% de crecimiento en acciones de redes sociales y 27% de aumento en tráfico web desde posts de redes sociales',
            'Monitoreé presencia online de la marca de la empresa y me engagé con usuarios, fortaleciendo relaciones con clientes',
          ],
        },
        jmrl: {
          company: 'JMRL',
          date: 'Septiembre 2023',
          position: 'Marketing',
          tasks: [
            'Análisis de necesidades del mercado, tendencias y desarrollo de ideas creativas.',
            'Diseño y gestión de planes, actividades de marketing offline/online',
            'Gestión de comunicación y plan de marketing en medios tradicionales y plataformas digitales.',
            'Diseño e implementación de planes de marketing online para clientes de varios sectores.',
            'Análisis de la competencia, estudio de mercado y tendencias en plataformas digitales.',
          ],
        },
        rechargePhones: {
          company: 'Recharge Phones',
          date: 'Abril 2023 - Mayo 2023',
          position: 'QA Tester',
          tasks: [
            'Desarrollé y ejecuté planes de prueba basados en requisitos del negocio.',
            'Escribí casos de prueba de integración, regresión y automatizados.',
            'Mantuve y ejecuté suites de prueba de regresión. Realicé pruebas Beta y gestión de defectos.',
            'Proporcioné recomendaciones sobre áreas para automatización de casos de prueba.',
          ],
        },
      },
    },
    skills: {
      title: 'Habilidades',
      subtitle: 'Una descripción completa de mi experiencia técnica, metodologías de producto y kit de herramientas analíticas desarrolladas a través de años construyendo soluciones centradas en el usuario.',
      categories: {
        productManagement: 'Gestión de Producto & Estrategia',
        programmingLanguages: 'Lenguajes de Programación',
        toolsAnalytics: 'Herramientas & Análisis',
        frameworksLibraries: 'Frameworks & Librerías',
        designPatterns: 'Patrones de Diseño & Mejores Prácticas',
        operatingSystems: 'Sistemas Operativos',
        languages: 'Idiomas',
        education: 'Educación',
      },
      productSkills: {
        productRoadmap: {
          name: 'Roadmap de Producto',
          description: 'Frameworks de priorización (RICE/Kano) & alineación estratégica',
        },
        userResearch: {
          name: 'Investigación de Usuario',
          description: 'Entrevistas, personas y síntesis de datos cualitativos',
        },
        abTesting: {
          name: 'Pruebas A/B',
          description: 'Ciclo de vida de pruebas de hipótesis y experimentación',
        },
        stakeholderMgmt: {
          name: 'Gestión de Stakeholders',
          description: 'Colaboración multifuncional con Ing, Diseño y Ventas',
        },
      },
      accessibility: {
        previousProgrammingLanguages: 'Lenguajes de programación anteriores',
        nextProgrammingLanguages: 'Siguientes lenguajes de programación',
        previousFrameworks: 'Frameworks anteriores',
        nextFrameworks: 'Siguientes frameworks',
      },
    },
    languageSelector: {
      label: 'Selector de idioma',
      english: 'EN',
      spanish: 'ES',
      italian: 'IT',
    },
    accessibility: {
      skipToMain: 'Saltar al contenido principal',
      githubProfile: 'Perfil de GitHub',
      linkedinProfile: 'Perfil de LinkedIn',
      email: 'Email Laura',
      whatsapp: 'WhatsApp',
      themeToggle: 'Cambiar tema',
    },
  },
  it: {
    navigation: {
      about: 'Chi Sono',
      experience: 'Esperienza',
      skills: 'Competenze',
    },
    home: {
      title: 'Laura Lam | Product Manager',
      subtitle: 'Costruendo soluzioni tecnologiche scalabili che collegano l\'ingegneria complessa con le esigenze degli utenti.',
      viewExperience: 'Vedi Esperienza',
      getInTouch: 'Contattami',
      aboutMe: {
        title: 'Chi Sono',
        paragraph1: 'Ingegnere Informatico altamente qualificato e motivato con vasta esperienza nello sviluppo software, programmazione e design frontend. Eccello nel tradurre requisiti tecnici complessi in soluzioni di prodotto centrate sull\'utente.',
        paragraph2: 'Il mio approccio combina competenza tecnica con pensiero strategico di prodotto, assicurando che le soluzioni non solo funzionino perfettamente ma forniscano anche eccezionali esperienze utente. Sono appassionata nel costruire prodotti che risolvono problemi reali spingendo i limiti di ciò che è tecnicamente possibile.',
        yearsExperience: 'Anni di Esperienza',
        projectsDelivered: 'Progetti Conseguiti',
        clientSatisfaction: 'Soddisfazione del Cliente',
      },
      coreCompetencies: {
        title: 'Competenze Chiave',
        technicalExcellence: {
          title: 'Eccellenza Tecnica',
          description: 'Competenza sviluppo full-stack con framework moderni e best practices',
        },
        productStrategy: {
          title: 'Strategia di Prodotto',
          description: 'Decision making basato sui dati e design thinking centrato sull\'utente',
        },
        teamLeadership: {
          title: 'Leadership di Team',
          description: 'Collaborazione cross-funzionale e gestione progetti agile',
        },
        growthFocus: {
          title: 'Focus sulla Crescita',
          description: 'Scalare prodotti e ottimizzare funnel di acquisizione utenti',
        },
      },
      contact: {
        title: 'Costruiamo qualcosa di impattante insieme.',
        subtitle: 'Sono sempre aperta a discutere strategia di prodotto, sfide tecniche o collaborazioni potenziali.',
        emailLabel: 'Email',
      },
    },
    experience: {
      title: 'Esperienza',
      positions: {
        a11yBot: {
          company: 'A11 y Solutions Settembre 2023 - Presente',
          date: 'A11y Bot',
          position: 'Sviluppatrice Frontend',
          tasks: [
            'Ho sviluppato un\'interfaccia bot focalizzata sull\'accessibilità usando React, migliorando l\'esperienza utente per persone con disabilità.',
            'Ho implementato gestione stato con Redux per ottimizzare il flusso dati e migliorare le performance dell\'applicazione.',
            'Ho integrato Axios per interazioni API fluide, assicurando recupero e gestione efficiente dei dati.',
            'Ho progettato e applicato protocolli di autenticazione con Auth0, assicurando accesso utente sicuro e protezione dati.',
            'Ho collaborato con designer UX/UI per creare layout intuitivi e funzionalità, migliorando usabilità e standard di accessibilità.',
          ],
        },
        accessibilityDetector: {
          date: 'Rilevatore di Accessibilità',
          position: 'Analista di Prodotto',
          tasks: [
            'Conduco ricerche di mercato per identificare problemi chiave di accessibilità nelle applicazioni web.',
            'Collaboro con team cross-funzionali per definire requisiti di prodotto e assicurare allineamento con standard WCAG 2.2.',
            'Analizzo feedback utenti e dati per migliorare la capacità del prodotto di rilevare e reportare problemi di accessibilità.',
            'Sviluppo documentazione di prodotto e guide utente per il rilevatore di problemi di accessibilità.',
            'Partecipo a meeting con stakeholder per presentare risultati e raccogliere input.',
            'Creo requisiti e funzionalità, sfruttando competenze di sviluppo ed esperienza in accessibilità.',
          ],
        },
        accessibilityTester: {
          position: 'Tester di Accessibilità',
          tasks: [
            'Valutazione della conformità con standard di accessibilità.',
            'Testing con tecnologie assistive.',
            'Analisi di navigazione e interazione.',
            'Facilitando testing di usabilità con persone con disabilità.',
            'Creando report dettagliati.',
          ],
        },
        functionalTester: {
          position: 'Tester Funzionale',
          tasks: [
            'Esegue casi di test in circostanze variabili.',
            'Documenta e valuta risultati di test.',
            'Rileva, registra e reporta bug e glitch del programma.',
            'Traccia difetti e aiuta a risolvere errori.',
            'Revisiona procedure di test e sviluppa script di test.',
          ],
        },
        angelsPets: {
          company: 'ANGELS PETS',
          date: 'Gennaio 2023 - Settembre 2023',
          position: 'Community Manager',
          tasks: [
            'Ho guidato con successo campagne su piattaforme social media inclusi Facebook, Twitter e Instagram',
            'Ho gestito pianificazione social media per esecuzione di strategie di marketing e gestione community',
            'Ho implementato tattiche di marketing e promozione che hanno portato al 34% di crescita in condivisioni social media e 27% di aumento nel traffico web da post social media',
            'Ho monitorato presenza online del brand aziendale e mi sono engaggiata con utenti, rafforzando relazioni clienti',
          ],
        },
        jmrl: {
          company: 'JMRL',
          date: 'Settembre 2023',
          position: 'Marketing',
          tasks: [
            'Analisi dei bisogni di mercato, trend e sviluppo idee creative.',
            'Design e gestione di piani, attività di marketing offline/online',
            'Gestione comunicazione e piano marketing in media tradizionali e piattaforme digitali.',
            'Design e implementazione di piani marketing online per clienti di vari settori.',
            'Analisi della competizione, studio di mercato e trend in piattaforme digitali.',
          ],
        },
        rechargePhones: {
          company: 'Recharge Phones',
          date: 'Aprile 2023 - Maggio 2023',
          position: 'QA Tester',
          tasks: [
            'Ho sviluppato ed eseguito piani di test basati su requisiti business.',
            'Ho scritto casi di test di integrazione, regressione e automatizzati.',
            'Ho mantenuto ed eseguito suite di test di regressione. Ho eseguito testing Beta e gestione difetti.',
            'Ho fornito raccomandazioni su aree per automazione casi di test.',
          ],
        },
      },
    },
    skills: {
      title: 'Competenze',
      subtitle: 'Una panoramica completa della mia competenza tecnica, metodologie di prodotto e toolkit analitico sviluppato attraverso anni di costruzione di soluzioni centrate sull\'utente.',
      categories: {
        productManagement: 'Gestione Prodotto & Strategia',
        programmingLanguages: 'Linguaggi di Programmazione',
        toolsAnalytics: 'Strumenti & Analisi',
        frameworksLibraries: 'Framework & Librerie',
        designPatterns: 'Pattern di Design & Best Practices',
        operatingSystems: 'Sistemi Operativi',
        languages: 'Lingue',
        education: 'Educazione',
      },
      productSkills: {
        productRoadmap: {
          name: 'Roadmap Prodotto',
          description: 'Framework di priorizzazione (RICE/Kano) & allineamento strategico',
        },
        userResearch: {
          name: 'Ricerca Utenti',
          description: 'Interviste, personas e sintesi dati qualitativi',
        },
        abTesting: {
          name: 'Test A/B',
          description: 'Ciclo di vita test ipotesi e sperimentazione',
        },
        stakeholderMgmt: {
          name: 'Gestione Stakeholders',
          description: 'Collaborazione cross-funzionale con Ing, Design e Vendite',
        },
      },
      accessibility: {
        previousProgrammingLanguages: 'Linguaggi di programmazione precedenti',
        nextProgrammingLanguages: 'Prossimi linguaggi di programmazione',
        previousFrameworks: 'Framework precedenti',
        nextFrameworks: 'Prossimi framework',
      },
    },
    languageSelector: {
      label: 'Selettore lingua',
      english: 'EN',
      spanish: 'ES',
      italian: 'IT',
    },
    accessibility: {
      skipToMain: 'Salta al contenuto principale',
      githubProfile: 'Profilo GitHub',
      linkedinProfile: 'Profilo LinkedIn',
      email: 'Email Laura',
      whatsapp: 'WhatsApp',
      themeToggle: 'Cambia tema',
    },
  },
};
