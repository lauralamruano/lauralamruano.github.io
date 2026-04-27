import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laura Lam | Project Manager Portfolio",
  description: "Project Manager with a background in Computer Engineering, specializing in digital accessibility (WCAG), leading tech products focused on user experience and inclusive design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
