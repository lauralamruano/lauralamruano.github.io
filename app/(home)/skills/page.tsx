"use client";
import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const SkillsPage = () => {
  const { t } = useLanguage();
  const [activeToolIndex, setActiveToolIndex] = useState(0);
  const [activeFrameworkIndex, setActiveFrameworkIndex] = useState(0);
  const toolsContainerRef = useRef<HTMLDivElement>(null);
  const frameworksContainerRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: t.skills.categories.productManagement,
      icon: "rocket_launch",
      skills: [
        { name: t.skills.productSkills.productRoadmap.name, description: t.skills.productSkills.productRoadmap.description },
        { name: t.skills.productSkills.userResearch.name, description: t.skills.productSkills.userResearch.description },
        { name: t.skills.productSkills.abTesting.name, description: t.skills.productSkills.abTesting.description },
        { name: t.skills.productSkills.stakeholderMgmt.name, description: t.skills.productSkills.stakeholderMgmt.description }
      ]
    },
    {
      title: t.skills.categories.programmingLanguages,
      icon: "code",
      languages: [
        { name: "Python", type: "language" },
        { name: "Dart", type: "language" },
        { name: "HTML", type: "language" },
        { name: "CSS", type: "language" },
        { name: "JavaScript", type: "language" },
        { name: "TypeScript", type: "language" },
        { name: "MySQL", type: "language" },
        { name: "PostgreSQL", type: "language" }
      ]
    },
    {
      title: t.skills.categories.toolsAnalytics, 
      icon: "build",
      tools: [
        { name: "Jira", type: "tool" },
        { name: "GitHub", type: "tool" },
        { name: "Mixpanel", type: "tool" },
        { name: "Amplitude", type: "tool" },
        { name: "SQL", type: "tool" },
        { name: "Figma", type: "tool" }
      ]
    },
    {
      title: t.skills.categories.frameworksLibraries,
      icon: "layers",
      frameworks: [
        { name: "Git", type: "tool" },
        { name: "React", type: "framework" },
        { name: "Django", type: "framework" },
        { name: "Material UI", type: "framework" },
        { name: "Sass", type: "framework" },
        { name: "DaisyUI", type: "framework" },
        { name: "Flask", type: "framework" },
        { name: "Tailwind", type: "framework" },
        { name: "Flutter", type: "framework" },
        { name: "Postman", type: "tool" },
        { name: "AWS", type: "tool" }
      ]
    },
    {
      title: t.skills.categories.designPatterns,
      icon: "architecture",
      patterns: [
        { name: "Very Good Architecture", type: "pattern" },
        { name: "BLoC pattern", type: "pattern" },
        { name: "Dependency injection", type: "pattern" }
      ]
    },
    {
      title: t.skills.categories.operatingSystems,
      icon: "computer",
      systems: [
        { name: "Windows", type: "os" },
        { name: "MacOS", type: "os" }
      ]
    },
    {
      title: t.skills.categories.languages,
      icon: "language",
      languages: [
        { code: "🇪🇸", name: "Spanish", level: "Native", levelType: "primary" },
        { code: "🇺🇸", name: "English", level: "Intermediate", levelType: "secondary" },
        { code: "🇮🇹", name: "Italian", level: "Basic", levelType: "secondary" }
      ]
    },
    {
      title: t.skills.categories.education,
      icon: "school",
      education: [
        { period: "2022 - 2025", degree: "Computer Engineer", institution: "University of Cienfuegos - Carlos Rafael Rodriguez", isActive: true },
        { period: "2023", degree: "Product Strategy Cert.", institution: "Reforge", isActive: false }
      ]
    }
  ];

  const productSkills = skillCategories[0]?.skills || [];
  const programmingLanguages = skillCategories[1]?.languages || [];
  const tools = skillCategories[2]?.tools || [];
  const frameworks = skillCategories[3]?.frameworks || [];
  const patterns = skillCategories[4]?.patterns || [];
  const systems = skillCategories[5]?.systems || [];
  const spokenLanguages = skillCategories[6]?.languages || [];
  const education = skillCategories[7]?.education || [];

  // Generic carousel navigation function
  const scrollCarousel = (containerRef: React.RefObject<HTMLDivElement>, direction: 'prev' | 'next') => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scrollAmount = container.offsetWidth;
    
    if (direction === 'prev') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Keyboard navigation for carousels
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const activeElement = document.activeElement;
        if (activeElement === toolsContainerRef.current) {
          e.preventDefault();
          scrollCarousel(toolsContainerRef, e.key === 'ArrowLeft' ? 'prev' : 'next');
        } else if (activeElement === frameworksContainerRef.current) {
          e.preventDefault();
          scrollCarousel(frameworksContainerRef, e.key === 'ArrowLeft' ? 'prev' : 'next');
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="lg:ml-72 flex-1 relative">
      <section className="px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-6xl mx-auto">
          <header className="mb-16">
            <h1 className="text-5xl font-extrabold mb-4" style={{ color: 'rgb(var(--text))' }}>
              {t.skills.title}
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed" style={{ color: 'rgb(var(--muted))' }}>
              {t.skills.subtitle}
            </p>
          </header>

          <div className="space-y-16">
            {/* Product Management & Strategy Section */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary text-3xl" aria-hidden="true">
                  rocket_launch
                </span>
                <h2 className="text-2xl font-bold uppercase tracking-widest text-sm" style={{ color: 'rgb(var(--text))' }}>
                  {t.skills.categories.productManagement}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {productSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="card p-6 rounded-xl transition-all duration-200 hover:transform hover:-translate-y-1"
                    style={{ backgroundColor: 'rgb(var(--surface))' }}
                  >
                    <span className="material-symbols-outlined text-primary mb-4 block text-2xl" aria-hidden="true">
                      {skill.name === "Product Roadmap" && "map"}
                      {skill.name === "User Research" && "groups"}
                      {skill.name === "A/B Testing" && "science"}
                      {skill.name === "Stakeholder Mgmt" && "handshake"}
                    </span>
                    <h3 className="font-bold mb-2" style={{ color: 'rgb(var(--text))' }}>
                      {skill.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgb(var(--muted))' }}>
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Programming Languages Section - Carousel for overflow */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary text-3xl" aria-hidden="true">
                  code
                </span>
                <h2 className="text-2xl font-bold uppercase tracking-widest text-sm" style={{ color: 'rgb(var(--text))' }}>
                  {t.skills.categories.programmingLanguages}
                </h2>
              </div>
              
              {/* Carousel needed for 8 languages */}
              <div className="relative">
                <div className="lg:hidden flex justify-between mb-4">
                  <button
                    onClick={() => scrollCarousel(toolsContainerRef, 'prev')}
                    className="btn-secondary p-2 rounded-full"
                    aria-label={t.skills.accessibility.previousProgrammingLanguages}
                  >
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button
                    onClick={() => scrollCarousel(toolsContainerRef, 'next')}
                    className="btn-secondary p-2 rounded-full"
                    aria-label={t.skills.accessibility.nextProgrammingLanguages}
                  >
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
                
                <div 
                  ref={toolsContainerRef}
                  className="lg:grid lg:grid-cols-4 md:grid-cols-2 gap-4 overflow-x-auto lg:overflow-x-visible scroll-smooth"
                  role="region"
                  aria-label={t.skills.categories.programmingLanguages}
                  tabIndex={0}
                >
                  {programmingLanguages.map((lang, index) => (
                    <div 
                      key={index}
                      className="card p-4 rounded-xl flex flex-col items-center gap-3 transition-all duration-200 hover:border-primary/40 min-w-[120px] lg:min-w-0"
                      style={{ backgroundColor: 'rgb(var(--surface))' }}
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: 'rgb(var(--accent))' }}>
                        {lang.name === "Python" && (
                          <span className="material-symbols-outlined text-lg" style={{ color: 'white' }}>code</span>
                        )}
                        {lang.name === "Dart" && (
                          <span className="material-symbols-outlined text-lg" style={{ color: 'white' }}>flutter</span>
                        )}
                        {lang.name === "HTML" && (
                          <span className="material-symbols-outlined text-lg" style={{ color: 'white' }}>html</span>
                        )}
                        {lang.name === "CSS" && (
                          <span className="material-symbols-outlined text-lg" style={{ color: 'white' }}>css</span>
                        )}
                        {lang.name === "JavaScript" && (
                          <span className="material-symbols-outlined text-lg" style={{ color: 'white' }}>javascript</span>
                        )}
                        {lang.name === "TypeScript" && (
                          <span className="material-symbols-outlined text-lg" style={{ color: 'white' }}>data_object</span>
                        )}
                        {lang.name === "MySQL" && (
                          <span className="material-symbols-outlined text-lg" style={{ color: 'white' }}>storage</span>
                        )}
                        {lang.name === "PostgreSQL" && (
                          <span className="material-symbols-outlined text-lg" style={{ color: 'white' }}>database</span>
                        )}
                      </div>
                      <span className="font-medium text-center text-sm" style={{ color: 'rgb(var(--text))' }}>
                        {lang.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Tools & Analytics Section */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary text-3xl" aria-hidden="true">
                  build
                </span>
                <h2 className="text-2xl font-bold uppercase tracking-widest text-sm" style={{ color: 'rgb(var(--text))' }}>
                  {t.skills.categories.toolsAnalytics}
                </h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {tools.map((tool, index) => (
                  <div 
                    key={index}
                    className="card p-6 rounded-xl flex flex-col items-center justify-center group transition-all duration-200 hover:border-primary/40"
                    style={{ backgroundColor: 'rgb(var(--surface))' }}
                  >
                    <div className="w-10 h-10 mb-4 rounded flex items-center justify-center text-white transition-all group-hover:grayscale-0" style={{ backgroundColor: 'rgb(var(--accent))', filter: 'grayscale(1)' }}>
                      {tool.name === "Jira" && (
                        <span className="material-symbols-outlined text-xl" style={{ color: 'white' }}>task_alt</span>
                      )}
                      {tool.name === "GitHub" && (
                        <span className="material-symbols-outlined text-xl" style={{ color: 'white' }}>code</span>
                      )}
                      {tool.name === "Mixpanel" && (
                        <span className="material-symbols-outlined text-xl" style={{ color: 'white' }}>analytics</span>
                      )}
                      {tool.name === "Amplitude" && (
                        <span className="material-symbols-outlined text-xl" style={{ color: 'white' }}>trending_up</span>
                      )}
                      {tool.name === "SQL" && (
                        <span className="material-symbols-outlined text-xl" style={{ color: 'white' }}>database</span>
                      )}
                      {tool.name === "Figma" && (
                        <span className="material-symbols-outlined text-xl" style={{ color: 'white' }}>design_services</span>
                      )}
                    </div>
                    <span className="font-medium text-center" style={{ color: 'rgb(var(--text))' }}>
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Frameworks & Libraries Section - Carousel for overflow */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary text-3xl" aria-hidden="true">
                  layers
                </span>
                <h2 className="text-2xl font-bold uppercase tracking-widest text-sm" style={{ color: 'rgb(var(--text))' }}>
                  {t.skills.categories.frameworksLibraries}
                </h2>
              </div>
              
              <div className="relative">
                <div className="lg:hidden flex justify-between mb-4">
                  <button
                    onClick={() => scrollCarousel(frameworksContainerRef, 'prev')}
                    className="btn-secondary p-2 rounded-full"
                    aria-label={t.skills.accessibility.previousFrameworks}
                  >
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button
                    onClick={() => scrollCarousel(frameworksContainerRef, 'next')}
                    className="btn-secondary p-2 rounded-full"
                    aria-label={t.skills.accessibility.nextFrameworks}
                  >
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
                
                <div 
                  ref={frameworksContainerRef}
                  className="lg:grid lg:grid-cols-4 md:grid-cols-3 gap-4 overflow-x-auto lg:overflow-x-visible scroll-smooth"
                  role="region"
                  aria-label={t.skills.categories.frameworksLibraries}
                  tabIndex={0}
                >
                  {frameworks.map((framework, index) => (
                    <div 
                      key={index}
                      className="card p-4 rounded-xl flex flex-col items-center gap-3 transition-all duration-200 hover:border-primary/40 min-w-[140px] lg:min-w-0"
                      style={{ backgroundColor: 'rgb(var(--surface))' }}
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm transition-all group-hover:grayscale-0" style={{ backgroundColor: 'rgb(var(--accent))', filter: 'grayscale(1)' }}>
                        {framework.name === "Git" && (
                          <span className="material-symbols-outlined text-lg" style={{ color: 'white' }}>source</span>
                        )}
                        {framework.name === "React" && (
                          <span className="material-symbols-outlined text-lg" style={{ color: 'white' }}>hexagon</span>
                        )}
                        {framework.name === "Django" && (
                          <span className="material-symbols-outlined text-lg" style={{ color: 'white' }}>web</span>
                        )}
                        {framework.name === "Material UI" && (
                          <span className="material-symbols-outlined text-lg" style={{ color: 'white' }}>palette</span>
                        )}
                        {framework.name === "Sass" && (
                          <span className="material-symbols-outlined text-lg" style={{ color: 'white' }}>brush</span>
                        )}
                        {framework.name === "DaisyUI" && (
                          <span className="material-symbols-outlined text-lg" style={{ color: 'white' }}>spa</span>
                        )}
                        {framework.name === "Flask" && (
                          <span className="material-symbols-outlined text-lg" style={{ color: 'white' }}>science</span>
                        )}
                        {framework.name === "Tailwind" && (
                          <span className="material-symbols-outlined text-lg" style={{ color: 'white' }}>waves</span>
                        )}
                        {framework.name === "Flutter" && (
                          <span className="material-symbols-outlined text-lg" style={{ color: 'white' }}>flutter</span>
                        )}
                        {framework.name === "Postman" && (
                          <span className="material-symbols-outlined text-lg" style={{ color: 'white' }}>send</span>
                        )}
                        {framework.name === "AWS" && (
                          <span className="material-symbols-outlined text-lg" style={{ color: 'white' }}>cloud</span>
                        )}
                      </div>
                      <span className="font-medium text-center text-sm" style={{ color: 'rgb(var(--text))' }}>
                        {framework.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Design Patterns & Best Practices Section */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary text-3xl" aria-hidden="true">
                  architecture
                </span>
                <h2 className="text-2xl font-bold uppercase tracking-widest text-sm" style={{ color: 'rgb(var(--text))' }}>
                  {t.skills.categories.designPatterns}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {patterns.map((pattern, index) => (
                  <div 
                    key={index}
                    className="card p-6 rounded-xl transition-all duration-200 hover:border-primary/40"
                    style={{ backgroundColor: 'rgb(var(--surface))' }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded flex items-center justify-center text-white font-bold text-sm transition-all group-hover:grayscale-0" style={{ backgroundColor: 'rgb(var(--accent))', filter: 'grayscale(1)' }}>
                        {pattern.name === "Very Good Architecture" && (
                          <span className="material-symbols-outlined text-lg" style={{ color: 'white' }}>architecture</span>
                        )}
                        {pattern.name === "BLoC pattern" && (
                          <span className="material-symbols-outlined text-lg" style={{ color: 'white' }}>widgets</span>
                        )}
                        {pattern.name === "Dependency injection" && (
                          <span className="material-symbols-outlined text-lg" style={{ color: 'white' }}>hub</span>
                        )}
                      </div>
                      <h3 className="font-bold" style={{ color: 'rgb(var(--text))' }}>
                        {pattern.name}
                      </h3>
                    </div>
                    <span className="text-sm" style={{ color: 'rgb(var(--muted))' }}>
                      {pattern.type === 'pattern' ? 'Design Pattern' : 'Best Practice'}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Operating Systems Section */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary text-3xl" aria-hidden="true">
                  computer
                </span>
                <h2 className="text-2xl font-bold uppercase tracking-widest text-sm" style={{ color: 'rgb(var(--text))' }}>
                  {t.skills.categories.operatingSystems}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {systems.map((system, index) => (
                  <div 
                    key={index}
                    className="card p-6 rounded-xl flex flex-col items-center justify-center transition-all duration-200 hover:border-primary/40 min-h-[140px]"
                    style={{ backgroundColor: 'rgb(var(--surface))' }}
                  >
                    <div className="w-12 h-12 mb-3 rounded-lg flex items-center justify-center text-white transition-all group-hover:grayscale-0" style={{ backgroundColor: 'rgb(var(--accent))', filter: 'grayscale(1)' }}>
                      {system.name === "Windows" && (
                        <span className="material-symbols-outlined text-2xl" style={{ color: 'white' }}>desktop_windows</span>
                      )}
                      {system.name === "MacOS" && (
                        <span className="material-symbols-outlined text-2xl" style={{ color: 'white' }}>desktop_mac</span>
                      )}
                    </div>
                    <span className="font-medium text-center" style={{ color: 'rgb(var(--text))' }}>
                      {system.name}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages and Education Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <span className="material-symbols-outlined text-primary text-3xl" aria-hidden="true">
                    language
                  </span>
                  <h2 className="text-2xl font-bold uppercase tracking-widest text-sm" style={{ color: 'rgb(var(--text))' }}>
                    {t.skills.categories.languages}
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {spokenLanguages.map((lang: any, index: number) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border border-theme"
                      style={{ backgroundColor: 'rgb(var(--surface))' }}
                    >
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <span className="text-2xl flex-shrink-0" aria-hidden="true">{lang.code}</span>
                        <span className="font-semibold truncate" style={{ color: 'rgb(var(--text))' }}>
                          {lang.name}
                        </span>
                      </div>
                      <span 
                        className={`text-sm font-medium px-3 py-1 rounded-full flex-shrink-0 ${
                          lang.levelType === 'primary' 
                            ? 'text-primary' 
                            : 'text-muted'
                        }`}
                        style={{ 
                          backgroundColor: lang.levelType === 'primary' 
                            ? 'rgb(var(--accent) / 0.1)' 
                            : 'rgb(var(--border) / 0.5)' 
                        }}
                      >
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-8">
                  <span className="material-symbols-outlined text-primary text-3xl" aria-hidden="true">
                    school
                  </span>
                  <h2 className="text-2xl font-bold uppercase tracking-widest text-sm" style={{ color: 'rgb(var(--text))' }}>
                    {t.skills.categories.education}
                  </h2>
                </div>
                
                <div className="space-y-8 relative">
                  <div 
                    className="absolute inset-0 ml-5 -translate-x-px md:mx-auto md:translate-x-0 h-full w-0.5"
                    style={{
                      background: 'linear-gradient(to bottom, transparent, rgb(var(--border) / 0.3), transparent)'
                    }}
                  ></div>
                  
                  {education.map((edu, index) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div 
                        className={`
                          flex items-center justify-center w-10 h-10 rounded-full border shadow shrink-0 md:order-1 
                          md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2
                          ${edu.isActive 
                            ? 'text-white shadow-lg' 
                            : 'text-muted'
                          }
                        `}
                        style={{
                          backgroundColor: edu.isActive ? 'rgb(var(--accent))' : 'rgb(var(--surface))',
                          borderColor: edu.isActive ? 'rgb(var(--accent))' : 'rgb(var(--border))'
                        }}
                      >
                        <span className="material-symbols-outlined text-sm">
                          {edu.isActive ? 'check' : 'school'}
                        </span>
                      </div>
                      
                      <div 
                        className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-theme shadow-sm"
                        style={{ backgroundColor: 'rgb(var(--surface))' }}
                      >
                        <time 
                          className="font-medium text-xs mb-1 block"
                          style={{ color: 'rgb(var(--accent))' }}
                        >
                          {edu.period}
                        </time>
                        <div className="font-bold mb-1" style={{ color: 'rgb(var(--text))' }}>
                          {edu.degree}
                        </div>
                        <div className="text-sm" style={{ color: 'rgb(var(--muted))' }}>
                          {edu.institution}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SkillsPage;
