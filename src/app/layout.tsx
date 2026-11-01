import type { Metadata, Viewport } from "next";
import { Inter_Tight, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-jb", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif-is",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neha Singh — Full-Stack Blockchain Developer",
  description:
    "Neha Singh builds Web3 and AI agents that ship. Full-stack blockchain developer, 20+ Web3 hackathon wins, building agentic dApps from India.",
  openGraph: {
    title: "Neha Singh — I build Web3 and AI agents that ship.",
    description: "Full-stack blockchain developer · 20+ Web3 hackathon wins · Agentic dApps & AI agents.",
    type: "website",
  },
  twitter: { card: "summary_large_image", creator: "@0xnehasingh" },
};

export const viewport: Viewport = {
  themeColor: "#f2efe8",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${serif.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}
