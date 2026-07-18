export type Language = 'en' | 'es' | 'it';

export interface Translations {
  navigation: {
    about: string;
    experience: string;
    skills: string;
    projects: string;
    publications: string;
  };
  publications: {
    title: string;
    subtitle: string;
    viewOnLinkedin: string;
    empty: string;
  };
  projects: {
    title: string;
    subtitle: string;
    filters: {
      product: string;
      accessibility: string;
      frontend: string;
    };
    featured: {
      a11yAudit: { tag: string; title: string; description: string; cta: string };
      ecommerce: { tag: string; title: string; description: string; cta: string };
    };
    techLabel: string;
    resultsLabel: string;
    cards: {
      designSystem: { title: string; tech: string; results: string };
      jobPortal: { title: string; tech: string; results: string };
      dataDashboard: { title: string; tech: string; results: string };
    };
    liveDemo: {
      badge: string;
      title: string;
      description: string;
    };
    challenge: {
      progress: string;
      checkButton: string;
      nextButton: string;
      prevButton: string;
      restartButton: string;
      correct: string;
      incorrect: string;
      linkPurpose: {
        eyebrow: string;
        question: string;
        options: { before: string; linkText: string; after: string }[];
        explanation: string;
      };
      beyondColor: {
        eyebrow: string;
        question: string;
        hint: string;
        chips: string[];
        explanation: string;
      };
      contrast: {
        eyebrow: string;
        question: string;
        hint: string;
        ratioLabel: string;
        passLabel: string;
        failLabel: string;
        explanation: string;
      };
      result: {
        eyebrow: string;
        title: string;
        scoreSuffix: string;
        high: string;
        mid: string;
        low: string;
        cta: string;
      };
    };
    github: {
      title: string;
      repos: { name: string; meta: string; description: string }[];
      viewProfile: string;
    };
    optimization: {
      title: string;
      beforeLabel: string;
      afterLabel: string;
      flows: { title: string; before: string; after: string }[];
    };
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
    contrastChecker: {
      title: string;
      subtitle: string;
      backgroundLabel: string;
      textLabel: string;
      sampleText: string;
      ratioLabel: string;
      aaLarge: string;
      aaNormal: string;
      aaa: string;
      okNote: string;
      bugNote: string;
      colors: {
        celeste: string;
        esmeralda: string;
        blanco: string;
        white: string;
        black: string;
        muted: string;
        accent: string;
        secondary: string;
        lightGray: string;
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
      projects: 'Projects',
      publications: 'Publications',
    },
    publications: {
      title: 'Publications',
      subtitle: 'Thoughts on accessibility, product, and inclusive design — straight from my LinkedIn.',
      viewOnLinkedin: 'View on LinkedIn',
      empty: 'Posts are loading from LinkedIn. If they do not appear, view them directly on LinkedIn.',
    },
    projects: {
      title: 'Projects',
      subtitle: 'A selection of accessibility-driven products, design systems, and optimization work — each shipped with measurable outcomes.',
      filters: {
        product: 'Product',
        accessibility: 'Accessibility',
        frontend: 'Frontend',
      },
      featured: {
        a11yAudit: {
          tag: 'accessibility',
          title: 'A11y Audit Platform Redesign',
          description: 'End-to-end accessibility overhaul. WCAG 2.1 AA compliancy.',
          cta: 'View Case Study',
        },
        ecommerce: {
          tag: 'product',
          title: 'User-Centric E-commerce Flow',
          description: 'Improved checkout conversion with streamlined UX.',
          cta: 'View Case Study',
        },
      },
      techLabel: 'Tech',
      resultsLabel: 'Results',
      cards: {
        designSystem: {
          title: 'Design System Initiative',
          tech: 'Figma, React',
          results: '+30% Dev Efficiency',
        },
        jobPortal: {
          title: 'Inclusive Job Portal',
          tech: 'Vue.js, Python',
          results: '+15% Applicant Diversity',
        },
        dataDashboard: {
          title: 'Data Dashboard Optimization',
          tech: 'Angular, Node.js',
          results: '50% Faster Load Time',
        },
      },
      liveDemo: {
        badge: 'Interactive Test',
        title: 'Test your digital accessibility skills',
        description: 'A 3-challenge mini-game inspired by real audit findings — spot the accessible option and get instant feedback on each answer.',
      },
      challenge: {
        progress: 'Challenge {n} of {total}',
        checkButton: 'Check answer',
        nextButton: 'Next',
        prevButton: 'Back',
        restartButton: 'Try again',
        correct: 'Correct!',
        incorrect: 'Not quite',
        linkPurpose: {
          eyebrow: 'Link purpose',
          question: 'Pick the link whose text is descriptive and makes sense on its own (without reading the surrounding text).',
          options: [
            { before: '', linkText: 'Create a new ticket', after: ' in the corporate Jira account.' },
            { before: '', linkText: 'Here', after: ' you can create a new ticket.' },
            { before: 'You can create a new ticket ', linkText: 'https://inlearning.atlassian.net/browse/UTPW-929?atlOrgin=ey', after: '' },
          ],
          explanation: 'Screen-reader users often browse a list of links out of context. "Create a new ticket" states the destination on its own — "Here" and a raw URL do not.',
        },
        beyondColor: {
          eyebrow: 'Not color alone',
          question: 'Which elements help you convey important information (like errors or instructions) without relying on color alone?',
          hint: 'Select the two correct options.',
          chips: ['Descriptive text', 'Icon', 'Animation', 'Text size', 'Underline'],
          explanation: 'A descriptive text label plus a supporting icon convey meaning to everyone, including color-blind users. Animation and size alone are not reliable cues.',
        },
        contrast: {
          eyebrow: 'Contrast',
          question: 'Using the contrast checker, find the tone that meets the minimum contrast required by WCAG for normal text (4.5:1) against white text.',
          hint: 'Drag the white circle — or use the arrow keys — onto a tone that reaches the minimum contrast.',
          ratioLabel: 'WCAG contrast ratio',
          passLabel: 'Meets AA (4.5:1)',
          failLabel: 'Below AA',
          explanation: 'For normal text, WCAG AA requires a contrast ratio of at least 4.5:1. Lighter tints fail against white text, so you need a darker shade.',
        },
        result: {
          eyebrow: 'Your result',
          title: 'How did you do?',
          scoreSuffix: 'of 3 challenges',
          high: 'Excellent — you have a sharp eye for accessibility.',
          mid: 'Good start — a few of these trip up most teams.',
          low: 'Accessibility is subtle, and that is exactly the point.',
          cta: 'These are the everyday issues I help teams catch and fix — turning WCAG compliance into a repeatable part of the product process, not a last-minute audit.',
        },
      },
      github: {
        title: 'GitHub Repos',
        repos: [
          { name: 'LauraLam/A11y-Toolkit', meta: '1.2k stars', description: 'Accessibility auditing tools.' },
          { name: 'LauraLam/React-Accessible-Components', meta: '500 forks', description: 'Reusable components.' },
        ],
        viewProfile: 'View Profile',
      },
      optimization: {
        title: 'Optimization Flows',
        beforeLabel: 'Before',
        afterLabel: 'After',
        flows: [
          { title: 'Checkout Process', before: '5 steps, 120s', after: '3 steps, 72s (-40% Time)' },
          { title: 'Search Result Page', before: 'High Bounce Rate', after: 'Improved Relevance (+25% Engagement)' },
        ],
      },
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
      contrastChecker: {
        title: 'WCAG Contrast Checker',
        subtitle: 'As an Accessibility Tester, this is exactly the kind of issue I audit every day. Pick a background and try different text colors.',
        backgroundLabel: '1. Pick a background color',
        textLabel: '2. Try a text color',
        sampleText: 'This is a sample text',
        ratioLabel: 'contrast ratio',
        aaLarge: 'AA · Large text (3:1)',
        aaNormal: 'AA · Normal text (4.5:1)',
        aaa: 'AAA · High level (7:1)',
        okNote: 'Good combination — this text would be readable for most users.',
        bugNote: 'This is a real accessibility bug: insufficient contrast is one of the most common findings in WCAG audits.',
        colors: {
          celeste: 'Sky blue',
          esmeralda: 'Emerald',
          blanco: 'White',
          white: 'White',
          black: 'Black',
          muted: "Gray (the site's secondary text)",
          accent: 'Dark sky blue',
          secondary: 'Dark emerald',
          lightGray: 'Light gray',
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
      projects: 'Proyectos',
      publications: 'Publicaciones',
    },
    publications: {
      title: 'Publicaciones',
      subtitle: 'Reflexiones sobre accesibilidad, producto y diseño inclusivo — directamente desde mi LinkedIn.',
      viewOnLinkedin: 'Ver en LinkedIn',
      empty: 'Las publicaciones se están cargando desde LinkedIn. Si no aparecen, míralas directamente en LinkedIn.',
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Una selección de productos centrados en la accesibilidad, sistemas de diseño y trabajo de optimización — cada uno entregado con resultados medibles.',
      filters: {
        product: 'Producto',
        accessibility: 'Accesibilidad',
        frontend: 'Frontend',
      },
      featured: {
        a11yAudit: {
          tag: 'accessibility',
          title: 'Rediseño de Plataforma de Auditoría A11y',
          description: 'Revisión integral de accesibilidad. Conformidad WCAG 2.1 AA.',
          cta: 'Ver Caso de Estudio',
        },
        ecommerce: {
          tag: 'product',
          title: 'Flujo de E-commerce Centrado en el Usuario',
          description: 'Mejor conversión de pago con una experiencia simplificada.',
          cta: 'Ver Caso de Estudio',
        },
      },
      techLabel: 'Tecnología',
      resultsLabel: 'Resultados',
      cards: {
        designSystem: {
          title: 'Iniciativa de Sistema de Diseño',
          tech: 'Figma, React',
          results: '+30% Eficiencia de Desarrollo',
        },
        jobPortal: {
          title: 'Portal de Empleo Inclusivo',
          tech: 'Vue.js, Python',
          results: '+15% Diversidad de Candidatos',
        },
        dataDashboard: {
          title: 'Optimización de Panel de Datos',
          tech: 'Angular, Node.js',
          results: '50% Carga Más Rápida',
        },
      },
      liveDemo: {
        badge: 'Test Interactivo',
        title: 'Evalúa tus habilidades en accesibilidad digital',
        description: 'Un mini-juego de 3 retos inspirado en hallazgos reales de auditoría — detecta la opción accesible y recibe retroalimentación al instante.',
      },
      challenge: {
        progress: 'Reto {n} de {total}',
        checkButton: 'Comprobar',
        nextButton: 'Siguiente',
        prevButton: 'Anterior',
        restartButton: 'Reintentar',
        correct: '¡Correcto!',
        incorrect: 'No exactamente',
        linkPurpose: {
          eyebrow: 'Propósito de los enlaces',
          question: 'Selecciona el enlace cuyo texto es descriptivo y comprensible por sí mismo (sin necesidad de leer el texto que lo rodea).',
          options: [
            { before: '', linkText: 'Crear un nuevo ticket', after: ' en la cuenta corporativa de Jira.' },
            { before: '', linkText: 'Aquí', after: ' puede crear un nuevo ticket.' },
            { before: 'Puede crear un nuevo ticket ', linkText: 'https://inlearning.atlassian.net/browse/UTPW-929?atlOrgin=ey', after: '' },
          ],
          explanation: 'Las personas usuarias de lectores de pantalla suelen navegar los enlaces fuera de contexto. «Crear un nuevo ticket» indica el destino por sí solo — «Aquí» o una URL en crudo, no.',
        },
        beyondColor: {
          eyebrow: 'No solo color',
          question: '¿Cuáles elementos pueden ayudarte a transmitir información importante (como errores o instrucciones) sin depender únicamente del color?',
          hint: 'Selecciona las dos opciones correctas.',
          chips: ['Texto descriptivo', 'Icono', 'Animación', 'Tamaño de texto', 'Subrayado'],
          explanation: 'Un texto descriptivo junto a un icono de apoyo transmiten el mensaje a todas las personas, incluidas las que no distinguen colores. La animación o el tamaño por sí solos no son pistas fiables.',
        },
        contrast: {
          eyebrow: 'Contraste',
          question: 'Usando el verificador de contraste, identifica el tono que cumple con el contraste mínimo requerido por WCAG para texto normal (4.5:1) sobre texto blanco.',
          hint: 'Arrastra el círculo blanco —o usa las flechas del teclado— sobre un tono que alcance el contraste mínimo.',
          ratioLabel: 'Ratio de contraste WCAG',
          passLabel: 'Cumple AA (4.5:1)',
          failLabel: 'No cumple AA',
          explanation: 'Para texto normal, WCAG AA exige un ratio de contraste de al menos 4.5:1. Los tonos claros no cumplen sobre texto blanco, por eso necesitas un tono más oscuro.',
        },
        result: {
          eyebrow: 'Tu resultado',
          title: '¿Cómo te fue?',
          scoreSuffix: 'de 3 retos',
          high: 'Excelente — tienes buen ojo para la accesibilidad.',
          mid: 'Buen comienzo — algunos de estos confunden a muchos equipos.',
          low: 'La accesibilidad es sutil, y de eso se trata precisamente.',
          cta: 'Estos son los problemas cotidianos que ayudo a los equipos a detectar y resolver — convirtiendo el cumplimiento de WCAG en parte repetible del proceso de producto, no en una auditoría de último minuto.',
        },
      },
      github: {
        title: 'Repositorios GitHub',
        repos: [
          { name: 'LauraLam/A11y-Toolkit', meta: '1.2k estrellas', description: 'Herramientas de auditoría de accesibilidad.' },
          { name: 'LauraLam/React-Accessible-Components', meta: '500 forks', description: 'Componentes reutilizables.' },
        ],
        viewProfile: 'Ver Perfil',
      },
      optimization: {
        title: 'Flujos de Optimización',
        beforeLabel: 'Antes',
        afterLabel: 'Después',
        flows: [
          { title: 'Proceso de Pago', before: '5 pasos, 120s', after: '3 pasos, 72s (-40% Tiempo)' },
          { title: 'Página de Resultados', before: 'Alta Tasa de Rebote', after: 'Relevancia Mejorada (+25% Interacción)' },
        ],
      },
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
      contrastChecker: {
        title: 'Detector de Contraste WCAG',
        subtitle: 'Como Accessibility Tester, este es exactamente el tipo de problema que audito a diario. Elegí un fondo y probá distintos colores de texto.',
        backgroundLabel: '1. Elegí un color de fondo',
        textLabel: '2. Probá un color de texto',
        sampleText: 'Este es un texto de ejemplo',
        ratioLabel: 'ratio de contraste',
        aaLarge: 'AA · Texto grande (3:1)',
        aaNormal: 'AA · Texto normal (4.5:1)',
        aaa: 'AAA · Nivel alto (7:1)',
        okNote: 'Buena combinación — este texto sería legible para la mayoría de las personas usuarias.',
        bugNote: 'Este es un bug de accesibilidad real: el contraste insuficiente es uno de los hallazgos más comunes en auditorías WCAG.',
        colors: {
          celeste: 'Celeste',
          esmeralda: 'Esmeralda',
          blanco: 'Blanco',
          white: 'Blanco',
          black: 'Negro',
          muted: 'Gris (texto secundario del sitio)',
          accent: 'Celeste oscuro',
          secondary: 'Esmeralda oscuro',
          lightGray: 'Gris claro',
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
      projects: 'Progetti',
      publications: 'Pubblicazioni',
    },
    publications: {
      title: 'Pubblicazioni',
      subtitle: 'Riflessioni su accessibilità, prodotto e design inclusivo — direttamente dal mio LinkedIn.',
      viewOnLinkedin: 'Vedi su LinkedIn',
      empty: 'Le pubblicazioni si stanno caricando da LinkedIn. Se non compaiono, guardale direttamente su LinkedIn.',
    },
    projects: {
      title: 'Progetti',
      subtitle: 'Una selezione di prodotti orientati all\'accessibilità, design system e lavori di ottimizzazione — ciascuno rilasciato con risultati misurabili.',
      filters: {
        product: 'Prodotto',
        accessibility: 'Accessibilità',
        frontend: 'Frontend',
      },
      featured: {
        a11yAudit: {
          tag: 'accessibility',
          title: 'Redesign della Piattaforma di Audit A11y',
          description: 'Revisione completa dell\'accessibilità. Conformità WCAG 2.1 AA.',
          cta: 'Vedi Caso di Studio',
        },
        ecommerce: {
          tag: 'product',
          title: 'Flusso E-commerce Incentrato sull\'Utente',
          description: 'Migliore conversione al checkout con UX semplificata.',
          cta: 'Vedi Caso di Studio',
        },
      },
      techLabel: 'Tecnologia',
      resultsLabel: 'Risultati',
      cards: {
        designSystem: {
          title: 'Iniziativa Design System',
          tech: 'Figma, React',
          results: '+30% Efficienza di Sviluppo',
        },
        jobPortal: {
          title: 'Portale di Lavoro Inclusivo',
          tech: 'Vue.js, Python',
          results: '+15% Diversità dei Candidati',
        },
        dataDashboard: {
          title: 'Ottimizzazione Dashboard Dati',
          tech: 'Angular, Node.js',
          results: '50% Caricamento Più Veloce',
        },
      },
      liveDemo: {
        badge: 'Test Interattivo',
        title: 'Valuta le tue competenze di accessibilità digitale',
        description: 'Un mini-gioco di 3 sfide ispirato a veri risultati di audit — individua l\'opzione accessibile e ricevi un feedback immediato.',
      },
      challenge: {
        progress: 'Sfida {n} di {total}',
        checkButton: 'Verifica',
        nextButton: 'Avanti',
        prevButton: 'Indietro',
        restartButton: 'Riprova',
        correct: 'Corretto!',
        incorrect: 'Non proprio',
        linkPurpose: {
          eyebrow: 'Scopo dei link',
          question: 'Scegli il link il cui testo è descrittivo e comprensibile da solo (senza dover leggere il testo circostante).',
          options: [
            { before: '', linkText: 'Crea un nuovo ticket', after: ' nell\'account aziendale Jira.' },
            { before: '', linkText: 'Qui', after: ' puoi creare un nuovo ticket.' },
            { before: 'Puoi creare un nuovo ticket ', linkText: 'https://inlearning.atlassian.net/browse/UTPW-929?atlOrgin=ey', after: '' },
          ],
          explanation: 'Chi usa uno screen reader spesso naviga i link fuori contesto. «Crea un nuovo ticket» indica la destinazione da solo — «Qui» o un URL grezzo, no.',
        },
        beyondColor: {
          eyebrow: 'Non solo il colore',
          question: 'Quali elementi ti aiutano a trasmettere informazioni importanti (come errori o istruzioni) senza dipendere solo dal colore?',
          hint: 'Seleziona le due opzioni corrette.',
          chips: ['Testo descrittivo', 'Icona', 'Animazione', 'Dimensione del testo', 'Sottolineatura'],
          explanation: 'Un testo descrittivo insieme a un\'icona di supporto trasmettono il messaggio a tutti, incluse le persone che non distinguono i colori. Animazione o dimensione da soli non sono indizi affidabili.',
        },
        contrast: {
          eyebrow: 'Contrasto',
          question: 'Usando il verificatore di contrasto, individua la tonalità che soddisfa il contrasto minimo richiesto da WCAG per il testo normale (4.5:1) su testo bianco.',
          hint: 'Trascina il cerchio bianco —o usa le frecce della tastiera— su una tonalità che raggiunga il contrasto minimo.',
          ratioLabel: 'Rapporto di contrasto WCAG',
          passLabel: 'Soddisfa AA (4.5:1)',
          failLabel: 'Sotto AA',
          explanation: 'Per il testo normale, WCAG AA richiede un rapporto di contrasto di almeno 4.5:1. Le tonalità chiare non bastano su testo bianco, serve una tonalità più scura.',
        },
        result: {
          eyebrow: 'Il tuo risultato',
          title: 'Come è andata?',
          scoreSuffix: 'di 3 sfide',
          high: 'Eccellente — hai un ottimo occhio per l\'accessibilità.',
          mid: 'Buon inizio — alcune di queste mettono in difficoltà molti team.',
          low: 'L\'accessibilità è sottile, ed è proprio questo il punto.',
          cta: 'Questi sono i problemi quotidiani che aiuto i team a individuare e risolvere — trasformando la conformità WCAG in una parte ripetibile del processo di prodotto, non in un audit dell\'ultimo minuto.',
        },
      },
      github: {
        title: 'Repository GitHub',
        repos: [
          { name: 'LauraLam/A11y-Toolkit', meta: '1.2k stelle', description: 'Strumenti di audit dell\'accessibilità.' },
          { name: 'LauraLam/React-Accessible-Components', meta: '500 fork', description: 'Componenti riutilizzabili.' },
        ],
        viewProfile: 'Vedi Profilo',
      },
      optimization: {
        title: 'Flussi di Ottimizzazione',
        beforeLabel: 'Prima',
        afterLabel: 'Dopo',
        flows: [
          { title: 'Processo di Checkout', before: '5 passaggi, 120s', after: '3 passaggi, 72s (-40% Tempo)' },
          { title: 'Pagina dei Risultati', before: 'Alta Frequenza di Rimbalzo', after: 'Rilevanza Migliorata (+25% Coinvolgimento)' },
        ],
      },
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
      contrastChecker: {
        title: 'Verificatore di Contrasto WCAG',
        subtitle: 'Come Accessibility Tester, questo è esattamente il tipo di problema che verifico ogni giorno. Scegli uno sfondo e prova diversi colori di testo.',
        backgroundLabel: '1. Scegli un colore di sfondo',
        textLabel: '2. Prova un colore di testo',
        sampleText: 'Questo è un testo di esempio',
        ratioLabel: 'rapporto di contrasto',
        aaLarge: 'AA · Testo grande (3:1)',
        aaNormal: 'AA · Testo normale (4.5:1)',
        aaa: 'AAA · Livello alto (7:1)',
        okNote: 'Buona combinazione — questo testo sarebbe leggibile per la maggior parte degli utenti.',
        bugNote: "Questo è un bug di accessibilità reale: il contrasto insufficiente è uno dei riscontri più comuni negli audit WCAG.",
        colors: {
          celeste: 'Azzurro',
          esmeralda: 'Smeraldo',
          blanco: 'Bianco',
          white: 'Bianco',
          black: 'Nero',
          muted: 'Grigio (testo secondario del sito)',
          accent: 'Azzurro scuro',
          secondary: 'Smeraldo scuro',
          lightGray: 'Grigio chiaro',
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
