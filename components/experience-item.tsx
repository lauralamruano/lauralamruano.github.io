import React from "react";

interface ExperienceItemProps {
  company: string;
  date: string;
  position: string;
  tasks: React.ReactNode;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  date,
  position,
  tasks,
}) => {
  return (
    <article className="group relative mb-16">
      <div className="card p-8 rounded-xl" style={{ backgroundColor: 'rgb(var(--surface))' }}>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold" style={{ color: 'rgb(var(--text))' }}>
                {position}
              </h2>
            </div>
            <p className="text-primary font-medium text-lg mb-1">{company}</p>
            <p className="text-muted mb-3">{date}</p>
          </div>
        </div>

        {/* Tasks/Responsibilities */}
        <div className="space-y-3">
          {tasks}
        </div>
      </div>
    </article>
  );
};
