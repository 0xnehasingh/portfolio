export const profile = {
  name: "Neha Singh",
  role: "Full-Stack Blockchain Developer",
  location: "India",
  positioning: "Full-stack Web3 and AI-agent builder.",
  github: "https://github.com/0xnehasingh",
  x: "https://x.com/0xnehasingh",
  linkedin: "https://www.linkedin.com/in/nehasingh3000/",
} as const;

export const socials = [
  { label: "GitHub", href: profile.github, handle: "github.com/0xnehasingh" },
  { label: "X", href: profile.x, handle: "x.com/0xnehasingh" },
  { label: "LinkedIn", href: profile.linkedin, handle: "linkedin.com/in/nehasingh3000" },
] as const;

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  if (process.env.VERCEL_ENV === "production" && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export const description =
  "Neha Singh is a full-stack blockchain developer in India. She builds Web3 products, smart contracts, and AI agents, with 23 Web3 hackathon wins and five years of experience.";
