import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fadil TIDJANI | Designer UI/UX & Développeur Web",
  description:
    "Portfolio de Fadil TIDJANI - Designer UI/UX et Développeur Web. Découvrez mes projets, compétences et services.",
  keywords: [
    "portfolio",
    "designer",
    "UI/UX",
    "développeur web",
    "React",
    "Next.js",
    "IFRI",
    "Bénin",
  ],
  authors: [{ name: "Fadil TIDJANI" }],
  openGraph: {
    title: "Fadil TIDJANI | Designer UI/UX & Développeur Web",
    description:
      "Portfolio de Fadil TIDJANI - Designer UI/UX et Développeur Web.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen antialiased overflow-x-hidden">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
