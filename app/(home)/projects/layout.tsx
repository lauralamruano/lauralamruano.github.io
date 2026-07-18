import React, { Suspense } from "react";

const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default ProjectsLayout;
