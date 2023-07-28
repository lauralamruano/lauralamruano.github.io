import React, { Suspense } from "react";

const SkillsLayout = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default SkillsLayout;
