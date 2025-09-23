import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
// Si tu n’as pas ce composant, commente la ligne suivante
import SmoothScroll from "@/components/SmoothScroll";

import { Plus_Jakarta_Sans, Bodoni_Moda } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const bodoni  = Bodoni_Moda({ subsets: ["latin"], display: "swap", variable: "--font-display" });

export const metadata: Metadata = {
  title: "Villa Villaverde — Fuerteventura",
  description:
    "Villa lumineuse à Villaverde (Fuerteventura) — piscine privée, fibre, vue volcan & plages turquoise.",
  metadataBase: typeof process !== "undefined" ? new URL("http://localhost:3000") : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${jakarta.variable} ${bodoni.variable}`}>
      <body className="font-sans antialiased bg-[color:var(--page)] text-[color:var(--ink)]">
        <SmoothScroll />
        <ProgressBar />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


