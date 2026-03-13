import type { Metadata } from "next";
import { Bebas_Neue, Exo_2 } from "next/font/google";
import "./globals.css";

const headingFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const bodyFont = Exo_2({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Numi Kicks",
  description: "Athletic-inspired landing page for Numi Kicks",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
