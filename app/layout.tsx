import type { Metadata } from "next";
import "@fontsource-variable/montserrat";

import "./globals.css";

export const metadata: Metadata = {
  title: "Laura Lam",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-licorice">{children}</body>
    </html>
  );
}
