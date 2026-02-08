'use client'

import React from "react";
import { ExperienceItem } from "@/components/experience-item";
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
            
            <ExperienceItem
              company={t.experience.positions.a11yBot.company}
              date={t.experience.positions.a11yBot.date}
              position={t.experience.positions.a11yBot.position}
              skills={["Product Strategy", "WCAG Compliance", "AI/ML", "User Research"]}
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
            
            <ExperienceItem
              company="Accessibility Detector"
              date={t.experience.positions.accessibilityDetector.date}
              position={t.experience.positions.accessibilityDetector.position}
              skills={["Data Analysis", "Mixpanel", "Agile/Scrum"]}
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
            
            <ExperienceItem
              company="Accessibility Testing"
              date="2020 — 2021"
              position={t.experience.positions.accessibilityTester.position}
              skills={["WCAG Testing", "Screen Readers", "Accessibility Audits"]}
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
            
            <ExperienceItem
              company="Software Testing"
              date="2019 — 2020"
              position={t.experience.positions.functionalTester.position}
              skills={["Test Planning", "Bug Tracking", "Test Automation"]}
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
            
            <ExperienceItem
              company={t.experience.positions.angelsPets.company}
              date={t.experience.positions.angelsPets.date}
              position={t.experience.positions.angelsPets.position}
              skills={["Social Media", "Content Strategy", "Community Management"]}
              tasks={
                <>
                  {t.experience.positions.angelsPets.tasks.map((task, index) => (
                    <div key={index} className="flex gap-3">
                      <span className="text-primary mt-1.5 material-symbols-outlined text-sm">check_circle</span>
                      <span>{task}</span>
                    </div>
                  ))}
                </>
              }
            />
            
            <ExperienceItem
              company={t.experience.positions.jmrl.company}
              date={t.experience.positions.jmrl.date}
              position={t.experience.positions.jmrl.position}
              skills={["Market Research", "Digital Marketing", "Content Creation"]}
              tasks={
                <>
                  {t.experience.positions.jmrl.tasks.map((task, index) => (
                    <div key={index} className="flex gap-3">
                      <span className="text-primary mt-1.5 material-symbols-outlined text-sm">check_circle</span>
                      <span>{task}</span>
                    </div>
                  ))}
                </>
              }
            />
            
            <ExperienceItem
              company={t.experience.positions.rechargePhones.company}
              date={t.experience.positions.rechargePhones.date}
              position={t.experience.positions.rechargePhones.position}
              skills={["QA Testing", "Test Cases", "Beta Testing"]}
              tasks={
                <>
                  {t.experience.positions.rechargePhones.tasks.map((task, index) => (
                    <div key={index} className="flex gap-3">
                      <span className="text-primary mt-1.5 material-symbols-outlined text-sm">check_circle</span>
                      <span>{task}</span>
                    </div>
                  ))}
                </>
              }
            />
            
            {/* Download Resume Button */}
            <div className="flex justify-center mt-12">
              <button className="px-6 py-3 bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800 rounded-full font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:border-primary dark:hover:border-primary transition-all flex items-center gap-2 shadow-sm">
                <span>Download Full Resume</span>
                <span className="material-symbols-outlined text-lg">download</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experience;
