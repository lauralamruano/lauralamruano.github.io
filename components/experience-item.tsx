import React from "react";

interface ExperienceItemProps {
  company: string;
  date: string;
  position: string;
  tasks: React.ReactNode;
  skills?: string[];
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  date,
  position,
  tasks,
  skills = ["Product Strategy", "WCAG Compliance", "User Research"],
}) => {
  return (
    <div className="relative mb-12 flex flex-col md:flex-row gap-6 md:gap-12 group">
      {/* Date and timeline dot - left side */}
      <div className="md:w-40 flex-shrink-0 flex md:flex-col items-start md:items-end justify-between md:justify-start pt-1 md:text-right">
        <div className="flex flex-col items-start md:items-end">
          <span className="text-sm font-semibold text-primary">{date}</span>
          <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">{company}</span>
        </div>
        {/* Timeline dot */}
        <div className="md:mt-6 w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm overflow-hidden p-2">
          <span className="material-symbols-outlined text-primary text-xl">work</span>
        </div>
      </div>
      
      {/* Timeline dot connector - desktop only */}
      <div className="absolute left-[158px] top-4 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 hidden md:block z-10 group-hover:bg-primary transition-colors"></div>
      
      {/* Experience card */}
      <div className="flex-grow bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col gap-1 mb-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{position}</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">{company}</p>
        </div>
        
        {/* Key achievement highlight */}
        <div className="bg-primary/5 border border-primary/10 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-xl">rocket_launch</span>
            <p className="text-[17px] font-medium text-slate-800 dark:text-slate-200">
              Key achievements and responsibilities for this role
            </p>
          </div>
        </div>
        
        {/* Expandable details */}
        <details className="group/details">
          <summary className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-primary mb-4 hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-1">
            <span className="material-symbols-outlined transition-transform group-open/details:rotate-180">expand_more</span>
            <span className="group-open/details:hidden">View detailed responsibilities</span>
            <span className="hidden group-open/details:inline">Show less</span>
          </summary>
          <div className="space-y-3 mb-6 text-[18px] text-slate-600 dark:text-slate-400 leading-relaxed">
            {tasks}
          </div>
        </details>
        
        {/* Skill tags */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
          {skills.map((skill, index) => (
            <span key={index} className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
