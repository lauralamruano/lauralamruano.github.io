import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laura Lam | Product Manager Portfolio",
  description: "Senior Product Manager specializing in accessibility-focused tech solutions and user-centric product development.",
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
