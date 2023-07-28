import React, { Suspense } from "react";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default AboutLayout;
