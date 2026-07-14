'use client'

import React from "react";
import { ExperienceItem } from "@/components/experience-item";
import { ContrastChecker } from "@/components/ContrastChecker";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();
  
  return (
    <main className="lg:ml-72 flex-1 relative">
      <section className="px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-4xl">
          <h1 className="section-heading">{t.experience.title}</h1>
          
          {/* Timeline container */}
          <div className="relative">
            {/* Timeline line - desktop only */}
            <div className="absolute left-0 md:left-40 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 hidden md:block"></div>
            
            <Reveal delay={0}>
              <ExperienceItem
                company={t.experience.positions.a11yBot.company}
                date={t.experience.positions.a11yBot.date}
                position={t.experience.positions.a11yBot.position}
                skills={["Product Roadmap", "WCAG", "Agile/Scrum", "Stakeholder Management"]}
                tasks={
                  <>
                    {t.experience.positions.a11yBot.tasks.map((task, index) => (
                      <div key={index} className="flex gap-3">
                        <span className="text-primary mt-1.5 material-symbols-outlined text-sm">check_circle</span>
                        <span>{task}</span>
                      </div>
                    ))}
                  </>
                }
              />
            </Reveal>

            <Reveal delay={100}>
              <ExperienceItem
                company={t.experience.positions.accessibilityDetector.date}
                date={t.experience.positions.a11yBot.date}
                position={t.experience.positions.accessibilityDetector.position}
                skills={["Product Requirements", "Feature Prioritization", "WCAG 2.2"]}
                tasks={
                  <>
                    {t.experience.positions.accessibilityDetector.tasks.map((task, index) => (
                      <div key={index} className="flex gap-3">
                        <span className="text-primary mt-1.5 material-symbols-outlined text-sm">check_circle</span>
                        <span>{task}</span>
                      </div>
                    ))}
                  </>
                }
              />
            </Reveal>

            <Reveal delay={200}>
              <ExperienceItem
                company={t.experience.positions.accessibilityDetector.date}
                date={t.experience.positions.a11yBot.date}
                position={t.experience.positions.functionalTester.position}
                skills={["React", "Redux", "Axios"]}
                tasks={
                  <>
                    {t.experience.positions.functionalTester.tasks.map((task, index) => (
                      <div key={index} className="flex gap-3">
                        <span className="text-primary mt-1.5 material-symbols-outlined text-sm">check_circle</span>
                        <span>{task}</span>
                      </div>
                    ))}
                  </>
                }
              />
            </Reveal>

            <Reveal delay={300}>
              <ExperienceItem
                company={t.experience.positions.accessibilityDetector.date}
                date={t.experience.positions.a11yBot.date}
                position={t.experience.positions.accessibilityTester.position}
                skills={["WCAG Audits", "Assistive Technologies", "Usability Testing"]}
                tasks={
                  <>
                    {t.experience.positions.accessibilityTester.tasks.map((task, index) => (
                      <div key={index} className="flex gap-3">
                        <span className="text-primary mt-1.5 material-symbols-outlined text-sm">check_circle</span>
                        <span>{task}</span>
                      </div>
                    ))}
                  </>
                }
              />
              <div className="md:ml-[13rem]">
                <ContrastChecker />
              </div>
            </Reveal>

            {/* Download Resume Button */}
            <div className="flex justify-center mt-12">
              <a
                href="/Laura_Lam_Resume.pdf"
                download="Laura_Lam_Resume.pdf"
                className="px-6 py-3 bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800 rounded-full font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:border-primary dark:hover:border-primary hover:-translate-y-0.5 transition-all flex items-center gap-2 shadow-sm"
              >
                <span>Download Full Resume</span>
                <span className="material-symbols-outlined text-lg">download</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experience;
