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
    <div className="mb-8">
      <h2 className="text-thulian_pink-400 pb-2">{company}</h2>
      <h3 className="mb-2 text-thulian_pink-800">{date}</h3>
      <h3 className="text-thulian_pink-400 mb-2">{position}:</h3>
      {tasks}
    </div>
  );
};
