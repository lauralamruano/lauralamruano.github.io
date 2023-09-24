import React, { Suspense } from "react";

const Experience = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default Experience;
