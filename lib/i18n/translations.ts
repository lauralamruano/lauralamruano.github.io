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
      title: 'Laura Lam | Project Manager',
      subtitle: 'Project Manager specializing in digital accessibility (WCAG), leading technology products that prioritize user experience, quality, and inclusive design.',
      viewExperience: 'View Experience',
      getInTouch: 'Get in Touch',
      aboutMe: {
        title: 'About Me',
        paragraph1: 'Project Manager with a background in Computer Engineering and a strong specialization in digital accessibility (WCAG). Focused on leading technology products that prioritize user experience, quality, and inclusive design.',
        paragraph2: 'Currently leading a product team building accessibility-driven web solutions, coordinating efforts across development, QA, and stakeholders to deliver high-quality outcomes aligned with user needs.',
        yearsExperience: 'Years Experience',
        projectsDelivered: 'Projects Delivered',
        clientSatisfaction: 'Client Satisfaction',
      },
      coreCompetencies: {
        title: 'Core Competencies',
        technicalExcellence: {
          title: 'Technical Excellence',
          description: 'Frontend development with React, Flutter, Redux and Axios, focused on accessibility and inclusive design',
        },
        productStrategy: {
          title: 'Product Strategy',
          description: 'Roadmap definition, feature prioritization, and stakeholder collaboration aligned with user needs',
        },
        teamLeadership: {
          title: 'Team Leadership',
          description: 'Leading cross-functional teams across development, QA, and product with agile methodologies',
        },
        growthFocus: {
          title: 'Accessibility Focus',
          description: 'WCAG-compliant audits, assistive technology testing, and accessibility-driven product development',
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
          company: 'A11y Solutions',
          date: 'April 2023 – Present',
          position: 'Project Manager / Product Lead',
          tasks: [
            'Led a cross-functional team of 10 people (development, QA, product) focused on web accessibility solutions aligned with WCAG standards.',
            'Defined product roadmap, priorities, and feature scope in collaboration with stakeholders.',
            'Coordinated delivery across all team functions to ensure efficient and consistent output.',
            'Analyzed product behavior and identified opportunities for improvement.',
            'Contributed to the design and evolution of accessibility issue detection tools.',
          ],
        },
        accessibilityDetector: {
          date: 'A11y Solutions',
          position: 'Product Analyst',
          tasks: [
            'Played a key role in developing an accessibility issue detector.',
            'Worked closely with cross-functional teams to define product requirements, prioritize features, and ensure the product met the evolving needs of users.',
          ],
        },
        accessibilityTester: {
          position: 'QA & Accessibility Tester',
          tasks: [
            'Conducted 15+ accessibility audits for international enterprise clients, including Starbucks, Mastercard, NBA, BBVA, Barceló Hotel Group, and Walmart — covering web, mobile, and native platforms.',
            'Tested with assistive technologies, analyzed navigation and interaction, and facilitated usability testing with individuals with disabilities.',
            'Executed functional test cases, detected and logged bugs, tracked defects, and developed test scripts and detailed reports.',
          ],
        },
        functionalTester: {
          position: 'Frontend Developer',
          tasks: [
            'Developed an accessibility-focused bot interface using React, improving user experience for individuals with disabilities.',
            'Implemented state management with Redux to streamline data flow and improve application performance.',
            'Integrated Axios for seamless API interactions, ensuring efficient data retrieval and management.',
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
      title: 'Laura Lam | Project Manager',
      subtitle: 'Project Manager especializada en accesibilidad digital (WCAG), liderando productos tecnológicos que priorizan la experiencia del usuario, la calidad y el diseño inclusivo.',
      viewExperience: 'Ver Experiencia',
      getInTouch: 'Contactar',
      aboutMe: {
        title: 'Acerca de Mí',
        paragraph1: 'Project Manager con formación en Ingeniería Informática y una fuerte especialización en accesibilidad digital (WCAG). Enfocada en liderar productos tecnológicos que priorizan la experiencia del usuario, la calidad y el diseño inclusivo.',
        paragraph2: 'Actualmente liderando un equipo de producto construyendo soluciones web orientadas a la accesibilidad, coordinando esfuerzos entre desarrollo, QA y stakeholders para entregar resultados de alta calidad alineados con las necesidades del usuario.',
        yearsExperience: 'Años de Experiencia',
        projectsDelivered: 'Proyectos Entregados',
        clientSatisfaction: 'Satisfacción del Cliente',
      },
      coreCompetencies: {
        title: 'Competencias Clave',
        technicalExcellence: {
          title: 'Excelencia Técnica',
          description: 'Desarrollo frontend con React, Flutter, Redux y Axios, enfocado en accesibilidad y diseño inclusivo',
        },
        productStrategy: {
          title: 'Estrategia de Producto',
          description: 'Definición de roadmap, priorización de funcionalidades y colaboración con stakeholders alineada a las necesidades del usuario',
        },
        teamLeadership: {
          title: 'Liderazgo de Equipo',
          description: 'Liderazgo de equipos multifuncionales entre desarrollo, QA y producto con metodologías ágiles',
        },
        growthFocus: {
          title: 'Enfoque en Accesibilidad',
          description: 'Auditorías WCAG, pruebas con tecnologías asistivas y desarrollo de producto orientado a la accesibilidad',
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
          company: 'A11y Solutions',
          date: 'Abril 2023 – Presente',
          position: 'Project Manager / Product Lead',
          tasks: [
            'Lideré un equipo multifuncional de 10 personas (desarrollo, QA, producto) enfocado en soluciones de accesibilidad web alineadas con los estándares WCAG.',
            'Definí el roadmap del producto, prioridades y alcance de funcionalidades en colaboración con los stakeholders.',
            'Coordiné la entrega entre todas las funciones del equipo para garantizar resultados eficientes y consistentes.',
            'Analicé el comportamiento del producto e identifiqué oportunidades de mejora.',
            'Contribuí al diseño y evolución de herramientas de detección de problemas de accesibilidad.',
          ],
        },
        accessibilityDetector: {
          date: 'A11y Solutions',
          position: 'Analista de Producto',
          tasks: [
            'Tuve un rol clave en el desarrollo de un detector de problemas de accesibilidad.',
            'Trabajé estrechamente con equipos multifuncionales para definir requisitos del producto, priorizar funcionalidades y garantizar que el producto satisficiera las necesidades cambiantes de los usuarios.',
          ],
        },
        accessibilityTester: {
          position: 'QA & Tester de Accesibilidad',
          tasks: [
            'Realicé más de 15 auditorías de accesibilidad para clientes empresariales internacionales, incluyendo Starbucks, Mastercard, NBA, BBVA, Barceló Hotel Group y Walmart, cubriendo plataformas web, móvil y nativas.',
            'Realicé pruebas con tecnologías asistivas, analicé navegación e interacción, y facilité pruebas de usabilidad con personas con discapacidades.',
            'Ejecuté casos de prueba funcionales, detecté y registré bugs, rastreé defectos y desarrollé scripts de prueba e informes detallados.',
          ],
        },
        functionalTester: {
          position: 'Desarrolladora Frontend',
          tasks: [
            'Desarrollé una interfaz de bot enfocada en accesibilidad usando React, mejorando la experiencia del usuario para personas con discapacidades.',
            'Implementé gestión de estado con Redux para optimizar el flujo de datos y mejorar el rendimiento de la aplicación.',
            'Integré Axios para interacciones API fluidas, asegurando recuperación y gestión eficiente de datos.',
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
      title: 'Laura Lam | Project Manager',
      subtitle: 'Project Manager specializzata in accessibilità digitale (WCAG), guida prodotti tecnologici che danno priorità all\'esperienza utente, alla qualità e al design inclusivo.',
      viewExperience: 'Vedi Esperienza',
      getInTouch: 'Contattami',
      aboutMe: {
        title: 'Chi Sono',
        paragraph1: 'Project Manager con background in Ingegneria Informatica e forte specializzazione nell\'accessibilità digitale (WCAG). Focalizzata nel guidare prodotti tecnologici che danno priorità all\'esperienza utente, alla qualità e al design inclusivo.',
        paragraph2: 'Attualmente guida un team di prodotto per costruire soluzioni web orientate all\'accessibilità, coordinando sforzi tra sviluppo, QA e stakeholder per consegnare risultati di alta qualità allineati con le esigenze degli utenti.',
        yearsExperience: 'Anni di Esperienza',
        projectsDelivered: 'Progetti Conseguiti',
        clientSatisfaction: 'Soddisfazione del Cliente',
      },
      coreCompetencies: {
        title: 'Competenze Chiave',
        technicalExcellence: {
          title: 'Eccellenza Tecnica',
          description: 'Sviluppo frontend con React, Flutter, Redux e Axios, focalizzato sull\'accessibilità e design inclusivo',
        },
        productStrategy: {
          title: 'Strategia di Prodotto',
          description: 'Definizione roadmap, prioritizzazione funzionalità e collaborazione con stakeholder allineata alle esigenze utente',
        },
        teamLeadership: {
          title: 'Leadership di Team',
          description: 'Guida di team cross-funzionali tra sviluppo, QA e prodotto con metodologie agili',
        },
        growthFocus: {
          title: 'Focus sull\'Accessibilità',
          description: 'Audit WCAG, testing con tecnologie assistive e sviluppo prodotto orientato all\'accessibilità',
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
          company: 'A11y Solutions',
          date: 'Aprile 2023 – Presente',
          position: 'Project Manager / Product Lead',
          tasks: [
            'Ho guidato un team cross-funzionale di 10 persone (sviluppo, QA, prodotto) focalizzato su soluzioni di accessibilità web allineate con gli standard WCAG.',
            'Ho definito roadmap del prodotto, priorità e portata delle funzionalità in collaborazione con gli stakeholder.',
            'Ho coordinato la consegna tra tutte le funzioni del team per garantire output efficiente e coerente.',
            'Ho analizzato il comportamento del prodotto e identificato opportunità di miglioramento.',
            'Ho contribuito al design e all\'evoluzione di strumenti per il rilevamento di problemi di accessibilità.',
          ],
        },
        accessibilityDetector: {
          date: 'A11y Solutions',
          position: 'Analista di Prodotto',
          tasks: [
            'Ho avuto un ruolo chiave nello sviluppo di un rilevatore di problemi di accessibilità.',
            'Ho lavorato a stretto contatto con team cross-funzionali per definire requisiti di prodotto, prioritizzare funzionalità e garantire che il prodotto soddisfacesse le esigenze in evoluzione degli utenti.',
          ],
        },
        accessibilityTester: {
          position: 'QA & Tester di Accessibilità',
          tasks: [
            'Ho condotto oltre 15 audit di accessibilità per clienti enterprise internazionali, tra cui Starbucks, Mastercard, NBA, BBVA, Barceló Hotel Group e Walmart, coprendo piattaforme web, mobile e native.',
            'Ho testato con tecnologie assistive, analizzato navigazione e interazione, e facilitato test di usabilità con persone con disabilità.',
            'Ho eseguito casi di test funzionali, rilevato e registrato bug, tracciato difetti e sviluppato script di test e report dettagliati.',
          ],
        },
        functionalTester: {
          position: 'Sviluppatrice Frontend',
          tasks: [
            'Ho sviluppato un\'interfaccia bot focalizzata sull\'accessibilità usando React, migliorando l\'esperienza utente per persone con disabilità.',
            'Ho implementato gestione stato con Redux per ottimizzare il flusso dati e migliorare le performance dell\'applicazione.',
            'Ho integrato Axios per interazioni API fluide, assicurando recupero e gestione efficiente dei dati.',
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
