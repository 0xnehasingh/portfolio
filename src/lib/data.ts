// All site content lives here. Edit this file to update the portfolio.
// Items marked TODO are drafts — replace them with your real details before publishing.

export const profile = {
  name: "Neha Singh",
  role: "Full-Stack Blockchain Developer",
  tagline: "I build Web3 and AI agents that ship.",
  location: "India",
  email: "55210neha@gmail.com",
  x: "0xnehasingh",
  linkedin: "linkedin.com/in/nehasingh3000",
  resume: "", // TODO: add a resume URL if you want a button for it
};

export const stats = [
  { value: 20, suffix: "+", label: "Web3 hackathons won" },
  { value: 7, suffix: "", label: "Products shipped" },
  { value: 5, suffix: "", label: "Verified wins on the wall" },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  tags: string[];
  live: string;
  github: string;
  hue: [string, string]; // gradient colors for the cover art
  glyph: string; // short label shown on the cover art
  problem: string;
  approach: string;
  tech: string[];
  results: string[];
};

// TODO: descriptions, links and results below are drafts. Replace with real ones.
export const projects: Project[] = [
  {
    slug: "ai-chess-arena",
    name: "AI Chess Arena",
    tagline: "Autonomous AI agents battle on-chain chess with verifiable outcomes.",
    tags: ["AI Agents", "Solidity", "Next.js", "LLMs"],
    live: "#",
    github: "#",
    hue: ["#a855f7", "#22d3ee"],
    glyph: "♞",
    problem:
      "AI game matches are opaque — nobody can verify that moves weren't tampered with or that results are fair.",
    approach:
      "Each agent signs its moves, the match state settles to a smart contract, and spectators can stake on outcomes in real time.",
    tech: ["Solidity", "Foundry", "Next.js", "TypeScript", "OpenAI / LLM agents", "Wagmi"],
    results: ["Fully on-chain match settlement", "Agent-vs-agent and human-vs-agent modes", "Hackathon winner"],
  },
  {
    slug: "flowfit",
    name: "Flowfit",
    tagline: "Move-to-earn fitness app that rewards real workouts on-chain.",
    tags: ["Flow", "Cadence", "React", "Mobile"],
    live: "#",
    github: "#",
    hue: ["#22d3ee", "#34d399"],
    glyph: "◎",
    problem: "Fitness apps struggle with retention, and users have no ownership of their progress data.",
    approach:
      "Workout data is verified and turned into on-chain achievements and rewards, with a walletless onboarding flow.",
    tech: ["Cadence", "Flow", "React", "Node.js", "Health APIs"],
    results: ["Walletless onboarding for non-crypto users", "On-chain achievement NFTs"],
  },
  {
    slug: "memex",
    name: "MemeX",
    tagline: "A fair-launch meme token launchpad with AI-generated memes and bonding curves.",
    tags: ["DeFi", "Bonding Curve", "AI", "Base"],
    live: "#",
    github: "#",
    hue: ["#f472b6", "#a855f7"],
    glyph: "✦",
    problem: "Meme launches are dominated by snipers and rugs, leaving regular users with the bag.",
    approach:
      "Launches use a transparent bonding curve with anti-snipe rules, and an AI assistant helps creators generate the meme and token metadata.",
    tech: ["Solidity", "Next.js", "Viem", "AI image generation", "The Graph"],
    results: ["Anti-snipe fair launch mechanics", "One-click token creation"],
  },
  {
    slug: "agriguard",
    name: "AgriGuard",
    tagline: "Parametric crop insurance for farmers, paid out automatically by oracles.",
    tags: ["Oracles", "Insurance", "Solidity", "AI"],
    live: "#",
    github: "#",
    hue: ["#34d399", "#22d3ee"],
    glyph: "❋",
    problem: "Small farmers wait months for insurance claims, and many are never paid at all.",
    approach:
      "Weather and satellite data feed oracles; when conditions cross a threshold, the contract pays out without any claim paperwork.",
    tech: ["Solidity", "Chainlink", "Python", "Next.js", "Weather APIs"],
    results: ["Claim-free automatic payouts", "Designed for low-literacy, mobile-first users"],
  },
  {
    slug: "base-quest-hub",
    name: "Base Quest Hub",
    tagline: "Onchain quests that onboard new users to the Base ecosystem.",
    tags: ["Base", "Smart Wallet", "Quests", "Next.js"],
    live: "#",
    github: "#",
    hue: ["#3b82f6", "#22d3ee"],
    glyph: "◆",
    problem: "New users don't know where to start onchain, and quest platforms are full of bots.",
    approach:
      "Guided quests with smart-wallet onboarding, gasless transactions and sybil checks, rewarding real activity across Base apps.",
    tech: ["Base", "Coinbase Smart Wallet", "OnchainKit", "Next.js", "Solidity"],
    results: ["Gasless onboarding flow", "Sybil-resistant reward logic"],
  },
  {
    slug: "neurafi",
    name: "NeuraFi",
    tagline: "An AI agent that manages DeFi positions for you, inside guardrails you set.",
    tags: ["Agentic dApp", "DeFi", "AI Agents", "TypeScript"],
    live: "#",
    github: "#",
    hue: ["#a855f7", "#6366f1"],
    glyph: "◈",
    problem: "Managing DeFi yield across protocols is time-consuming and easy to get wrong.",
    approach:
      "An LLM agent reads market data, proposes rebalances, and executes them through a policy-limited smart account so it can never exceed your rules.",
    tech: ["TypeScript", "LangChain / agent framework", "Account Abstraction", "Solidity", "Next.js"],
    results: ["Policy-limited agent execution", "Natural-language strategy setup"],
  },
  {
    slug: "homing",
    name: "Homing",
    tagline: "Tokenized rentals with on-chain agreements and instant deposit escrow.",
    tags: ["RWA", "Escrow", "Solidity", "Next.js"],
    live: "#",
    github: "#",
    hue: ["#f59e0b", "#a855f7"],
    glyph: "⌂",
    problem: "Renting involves trust gaps — lost deposits, unclear agreements and slow disputes.",
    approach:
      "Rental agreements become smart contracts; deposits sit in escrow and release automatically based on agreed conditions.",
    tech: ["Solidity", "Next.js", "IPFS", "Wagmi", "Tailwind"],
    results: ["Trustless deposit escrow", "Agreements stored on IPFS"],
  },
];

export type Win = {
  hackathon: string;
  project: string;
  prize: string;
  date: string;
  location: string;
};

// TODO: replace with your five verified wins (hackathon name, prize, date, city).
export const wins: Win[] = [
  { hackathon: "ETHGlobal", project: "AI Chess Arena", prize: "Finalist · Track Winner", date: "2025", location: "Online" },
  { hackathon: "Base Onchain Summer", project: "Base Quest Hub", prize: "1st Place", date: "2025", location: "Online" },
  { hackathon: "Flow Hackathon", project: "Flowfit", prize: "Grand Prize", date: "2024", location: "Online" },
  { hackathon: "ETHIndia", project: "AgriGuard", prize: "Best Social Impact", date: "2024", location: "Bengaluru" },
  { hackathon: "AI Agents Hackathon", project: "NeuraFi", prize: "2nd Place", date: "2025", location: "Online" },
];

// Employers are intentionally anonymous.
// TODO: confirm roles and years.
export const experience = [
  {
    period: "2025 — Now",
    role: "Full-Stack Blockchain Developer",
    org: "Web3 startup",
    focus: "Building agentic dApps: AI agents that hold wallets, read on-chain state and act within smart-contract guardrails.",
    tags: ["AI Agents", "Solidity", "Next.js"],
  },
  {
    period: "2024 — 2025",
    role: "Smart Contract Engineer",
    org: "DeFi protocol",
    focus: "Designed, tested and shipped production contracts with Foundry; gas optimisation and security reviews.",
    tags: ["Solidity", "Foundry", "Security"],
  },
  {
    period: "2023 — 2024",
    role: "Full-Stack Developer",
    org: "Product studio",
    focus: "Shipped web apps end-to-end — React front ends, Node APIs, and the first wallet integrations.",
    tags: ["React", "Node.js", "TypeScript"],
  },
  {
    period: "Always",
    role: "Hackathon Builder",
    org: "Independent",
    focus: "20+ Web3 hackathon wins — going from idea to deployed product in a weekend, again and again.",
    tags: ["Shipping", "Pitching", "Teams"],
  },
];

export const skills = [
  "Solidity", "Foundry", "Hardhat", "TypeScript", "Next.js", "React", "Node.js",
  "Viem", "Wagmi", "Account Abstraction", "AI Agents", "LLMs", "Python", "The Graph",
  "Chainlink", "Base", "Flow", "IPFS", "Tailwind", "PostgreSQL",
];
