'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

import me from "../../assets/images/avatar.png";

const HomePage = () => {
  const { t } = useLanguage();
  return (
    <main className="lg:ml-72 flex-1 relative">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-4xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
            <div className="relative">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src={me}
                  alt="Laura Lam - Product Manager"
                  className="w-full h-full object-cover"
                  quality={100}
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-sm">verified</span>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6" style={{ color: 'rgb(var(--text))' }}>
                Laura Lam <span className="text-primary">|</span> Product Manager
              </h1>
              <p className="text-2xl md:text-3xl font-light mb-8 max-w-2xl" style={{ color: 'rgb(var(--muted))' }}>
                {t.home.subtitle}
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link 
              href="/experience"
              className="btn-primary"
            >
              {t.home.viewExperience}
            </Link>
            <Link 
              href="#contact"
              className="btn-secondary"
            >
              {t.home.getInTouch}
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-surface" id="about">
        <div className="max-w-4xl">
          <h2 className="section-heading">{t.home.aboutMe.title}</h2>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'rgb(var(--muted))' }}>
            <p>
              {t.home.aboutMe.paragraph1}
            </p>
            <p>
              {t.home.aboutMe.paragraph2}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="card text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted">{t.home.aboutMe.yearsExperience}</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted">{t.home.aboutMe.projectsDelivered}</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted">{t.home.aboutMe.clientSatisfaction}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'rgb(var(--text))' }}>
            {t.home.coreCompetencies.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors" style={{ backgroundColor: 'rgb(var(--accent) / 0.1)' }}>
                  <span className="material-symbols-outlined text-primary">code</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'rgb(var(--text))' }}>{t.home.coreCompetencies.technicalExcellence.title}</h3>
                  <p className="text-muted">{t.home.coreCompetencies.technicalExcellence.description}</p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors" style={{ backgroundColor: 'rgb(var(--accent) / 0.1)' }}>
                  <span className="material-symbols-outlined text-primary">psychology</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'rgb(var(--text))' }}>{t.home.coreCompetencies.productStrategy.title}</h3>
                  <p className="text-muted">{t.home.coreCompetencies.productStrategy.description}</p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors" style={{ backgroundColor: 'rgb(var(--accent) / 0.1)' }}>
                  <span className="material-symbols-outlined text-primary">groups</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'rgb(var(--text))' }}>{t.home.coreCompetencies.teamLeadership.title}</h3>
                  <p className="text-muted">{t.home.coreCompetencies.teamLeadership.description}</p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors" style={{ backgroundColor: 'rgb(var(--accent) / 0.1)' }}>
                  <span className="material-symbols-outlined text-primary">trending_up</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'rgb(var(--text))' }}>{t.home.coreCompetencies.growthFocus.title}</h3>
                  <p className="text-muted">{t.home.coreCompetencies.growthFocus.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 md:px-12 lg:px-24 py-32" id="contact">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'rgb(var(--text))' }}>{t.home.contact.title}</h2>
          <p className="text-xl mb-12 text-center" style={{ color: 'rgb(var(--muted))' }}>
            {t.home.contact.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:lamruanolaura@gmail.com"
              className="text-2xl md:text-3xl font-bold text-primary hover:text-primary/80 hover:underline underline-offset-8 transition-all break-all"
            >
              lamruanolaura@gmail.com
            </a>
          </div>
          
          <div className="flex gap-6 justify-center mt-12">
            <a 
              href="https://github.com/lauralamruano" 
              className="text-slate-400 hover:text-primary transition-colors p-3 rounded-full hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={t.accessibility.githubProfile}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/lauralamruano" 
              className="text-slate-400 hover:text-primary transition-colors p-3 rounded-full hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={t.accessibility.linkedinProfile}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://wa.me/+5354916323" 
              className="text-slate-400 hover:text-primary transition-colors p-3 rounded-full hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={t.accessibility.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
