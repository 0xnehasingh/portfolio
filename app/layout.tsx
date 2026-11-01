import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { description, getSiteUrl, profile, socials } from "@/lib/site";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });

const themeBoot = `
try {
  var stored = localStorage.getItem("theme");
  var theme = stored === "dark" || stored === "light"
    ? stored
    : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.classList.remove("dark", "light");
  document.documentElement.classList.add(theme);
  document.documentElement.style.colorScheme = theme;
  var color = theme === "dark" ? "#12110e" : "#f4efe6";
  var meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "theme-color");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", color);
} catch (e) {}
`;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4efe6" },
    { media: "(prefers-color-scheme: dark)", color: "#12110e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export function generateMetadata(): Metadata {
  const siteUrl = getSiteUrl();
  const title = "Neha Singh — Full-stack Web3 and AI-agent builder";
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: "%s — Neha Singh",
    },
    description,
    applicationName: "Neha Singh",
    authors: [{ name: profile.name, url: profile.github }],
    creator: profile.name,
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      url: siteUrl,
      title,
      description,
      siteName: profile.name,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@0xnehasingh",
    },
    robots: { index: true, follow: true },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const siteUrl = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: siteUrl,
    description,
    homeLocation: {
      "@type": "Place",
      name: profile.location,
    },
    sameAs: socials.map((item) => item.href),
    knowsAbout: ["Web3", "Smart contracts", "AI agents", "Full-stack development"],
  };

  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${display.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
