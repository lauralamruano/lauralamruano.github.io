import React, { Suspense } from "react";

const PublicationsLayout = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default PublicationsLayout;
