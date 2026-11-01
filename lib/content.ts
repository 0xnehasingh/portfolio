export type Trophy = {
  label: string;
  detail?: string;
};

export type ExtraLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  repoName: string;
  repoUrl: string;
  summary: string;
  stack: string[];
  demo?: string;
  trophy?: Trophy;
  paragraphs: string[];
  extras?: ExtraLink[];
};

export const projects: Project[] = [
  {
    slug: "ai-chess-arena",
    name: "AI Chess Arena",
    repoName: "AI-Chess-Arena",
    repoUrl: "https://github.com/0xnehasingh/AI-Chess-Arena",
    summary:
      "AI models battle in live chess matches while users bet on a favorite.",
    stack: ["Next.js", "TypeScript", "chess.js", "OpenAI", "Anthropic", "ethers"],
    demo: "https://chat-gpt-vs-claude.vercel.app",
    paragraphs: [
      "The repository README describes AI Chess Arena as a platform where AI models battle in real-time chess and users bet on a favorite.",
      "The same README lists a live match view, an animated board, per-player timers, commentary, and a betting pool with a 10% platform fee, split across the winners.",
      "Dependencies in the repo include Next.js, chess.js, react-chessboard, the OpenAI and Anthropic SDKs, ethers, Supabase, Zustand, Framer Motion, and a Socket.io client.",
    ],
  },
  {
    slug: "flowfit",
    name: "Flowfit",
    repoName: "Flowfit",
    repoUrl: "https://github.com/0xnehasingh/Flowfit",
    summary:
      "A gasless fitness app on Flow, using VRF for challenges, account linking, and sponsored transactions.",
    stack: ["Next.js", "FCL", "Cadence", "Solidity"],
    demo: "https://flowfit-frontend-tx79.vercel.app/",
    trophy: { label: "Built for the Flow Hackathon" },
    paragraphs: [
      "The README presents FlowFit as a fitness app on Flow. It names Flow VRF for daily challenges, account linking for social recovery, and sponsored transactions so the user does not pay gas.",
      "The README says it was built for a Flow hackathon. It does not state a placement.",
      "The repository contains Cadence contracts and Solidity contracts, both named FlowFitToken, FitnessChallenge, and AchievementNFT. The frontend package is Next.js with Flow FCL.",
    ],
  },
  {
    slug: "memex",
    name: "MemeX",
    repoName: "MemeX1_",
    repoUrl: "https://github.com/0xnehasingh/MemeX1_",
    summary:
      "Turns static meme tokens such as PEPE and DOGE into AI characters, called Memegents, that can chat, battle, and post.",
    stack: ["Next.js", "wagmi", "viem", "Safe", "SEI"],
    demo: "https://meme-x-ui8v.vercel.app/",
    trophy: {
      label: "Safe Agentathon · SEI track · 1st",
      detail: "Also 2nd, Venice AI track · 3rd, Zerebro track",
    },
    paragraphs: [
      "The README describes MemeX as an ecosystem that turns static meme tokens, including PEPE and DOGE, into AI characters called Memegents. Those characters chat, battle, post on social platforms, and can be staked.",
      "The README tech stack names Safe smart accounts, Story contracts, SEI among other chains, GPT-4, Stable Diffusion, Venice.ai, and The Graph. Package dependencies include Next.js, TypeScript, wagmi, viem, and RainbowKit. The repo also has a Python backend folder.",
      "At Safe Agentathon in February 2025, MemeX placed 1st on the SEI track, 2nd on the Venice AI track, and 3rd on the Zerebro track.",
      "The README links a Mech client demo on YouTube. That video is separate from the web app.",
    ],
    extras: [
      { label: "Devfolio", href: "https://devfolio.co/projects/memex-0a93" },
      { label: "Mech client video", href: "https://youtu.be/ntC5Q214I_I" },
    ],
  },
  {
    slug: "agriguard",
    name: "AgriGuard",
    repoName: "AgriGuard",
    repoUrl: "https://github.com/0xnehasingh/AgriGuard",
    summary:
      "Parametric crop insurance. The Solidity contract pays out from WeatherXM weather data.",
    stack: ["Next.js", "Solidity", "WeatherXM", "Chainlink", "NEAR"],
    demo: "https://agri-guard-6b47.vercel.app/",
    paragraphs: [
      "AgriGuardInsurance.sol is titled as parametric crop insurance powered by WeatherXM. The contract references a weather oracle and Chainlink price feeds, and it collects premiums and pays claims.",
      "lib/weatherxm.ts is a WeatherXM client. The repo also includes a NEAR testnet integration and NEAR wallet-selector packages.",
      "App dependencies include Next.js, wagmi, viem, ethers, web3, RainbowKit, Prisma, Redis, and web3.storage. The README also names Polygon, Ethereum, and Solana.",
    ],
  },
  {
    slug: "base-quest-hub",
    name: "Base Quest Hub",
    repoName: "Too-Quick",
    repoUrl: "https://github.com/0xnehasingh/Too-Quick",
    summary:
      "A quest board for Base. On-chain activity earns points and a place on the leaderboard.",
    stack: ["Next.js", "Solidity", "wagmi", "viem", "RainbowKit"],
    demo: "https://too-quick-9kpm.vercel.app/",
    paragraphs: [
      "The Too-Quick README calls the product Base Quest Hub: a gamified board where people complete on-chain quests, earn points, and compete on a leaderboard, with wallet login and ENS names.",
      "QuestHub.sol stores points, completed quest ids, and an ENS name. It exposes completeQuest and getTopUsers.",
      "Dependencies are Next.js, wagmi, viem, RainbowKit, ethers, and TanStack Query. The README says the contract is for Base and links a Base Sepolia address, 0xA3060095F8E39e9aef5e8127115A57820993B4C0.",
    ],
    extras: [
      {
        label: "Base Sepolia contract",
        href: "https://sepolia.basescan.org/address/0xA3060095F8E39e9aef5e8127115A57820993B4C0",
      },
    ],
  },
  {
    slug: "neurafi",
    name: "NeuraFi",
    repoName: "NeuraFi",
    repoUrl: "https://github.com/0xnehasingh/NeuraFi",
    summary:
      "An AI companion for sending, receiving, and managing crypto in conversation. The README says it is built on Base.",
    stack: ["Next.js", "Privy", "Vercel AI SDK", "AgentKit", "viem"],
    paragraphs: [
      "The README describes NeuraFi as a way to send, receive, and manage crypto in conversation, on Base, with Privy for sign-in.",
      "Dependencies include Next.js, Privy, the Vercel AI SDK, LangChain, LangGraph, Coinbase AgentKit, OpenAI via LangChain, viem, and Prisma.",
      "The homepage listed on the repository did not load, so this page does not link a live demo.",
    ],
  },
  {
    slug: "homing",
    name: "Homing",
    repoName: "Homing",
    repoUrl: "https://github.com/0xnehasingh/Homing",
    summary:
      "Fractional real-estate investment. Shares in the repo are an ERC-1155 token named HouseformShare.",
    stack: ["Next.js", "Solidity", "ERC-1155", "wagmi", "Hardhat"],
    demo: "https://homing-kappa.vercel.app",
    paragraphs: [
      "The README describes Homing as a way to fund real-estate projects and hold fractional ownership. Buyers receive tokens for the shares they purchase, and those shares can be redeemed when a project is sold.",
      "The contracts in the repository are HouseformManager.sol and HouseformShare.sol. HouseformShare is an ERC-1155.",
      "The app depends on Next.js, wagmi, viem, ethers, Hardhat, and the Hedera SDK. The README also points its contract links at Hashscan testnet, and a separate architecture note says BNB testnet. The deployed page title is Houseform.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const skillLead =
  "Solidity on AgriGuard, Flowfit, Base Quest Hub, and Homing. Safe smart accounts, SEI, and The Graph on MemeX. Cadence alongside Solidity on Flowfit. wagmi and viem on MemeX, AgriGuard, Base Quest Hub, and Homing. WeatherXM, Chainlink, and web3.storage on AgriGuard. Privy, the Vercel AI SDK, LangChain, and Coinbase AgentKit on NeuraFi. Next.js and TypeScript across these apps.";

export const skills = [
  "Solidity",
  "Foundry",
  "Hardhat",
  "ethers.js",
  "viem",
  "wagmi",
  "Web3.js",
  "The Graph",
  "IPFS",
  "Ethereum",
  "Polygon",
  "SEI",
  "Base",
  "Flow",
  "Layer 2s",
  "Safe",
  "Cadence",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "NestJS",
  "GraphQL",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "CI/CD",
  "OpenAI",
  "Vercel AI SDK",
] as const;

export type Win = {
  date: string;
  event: string;
  project: string;
  result: string;
  stamp: string;
  href?: string;
  hrefLabel?: string;
};

export const wins: Win[] = [
  {
    date: "February 2025",
    event: "Safe Agentathon",
    project: "MemeX",
    result: "1st, SEI track. Also 2nd, Venice AI track, and 3rd, Zerebro track.",
    stamp: "1st",
    href: "https://devfolio.co/projects/memex-0a93",
    hrefLabel: "Devfolio",
  },
  {
    date: "February 2025",
    event: "EDU Chain Semester 2",
    project: "EduLend",
    result: "5th in DeFi.",
    stamp: "5th",
    href: "https://github.com/0xnehasingh/EDULend_",
    hrefLabel: "Repository",
  },
  {
    date: "November 2024",
    event: "Encode Club Bitcoin Hackathon, Bangkok",
    project: "GOAT bounty",
    result: "7th place, GOAT bounty.",
    stamp: "7th",
  },
  {
    date: "2022",
    event: "ETHIndia",
    project: "Meet3Club",
    result: "3rd, Huddle01.",
    stamp: "3rd",
  },
  {
    date: "2022",
    event: "ETHGlobal HackFS",
    project: "WhoIsThis",
    result: "NFTPort and POAP prizes.",
    stamp: "Prize",
  },
];

export const experience = [
  {
    period: "January 2026 — Present",
    title: "Full-Stack Blockchain Developer",
    org: "AI, SaaS, and Web3 product studio",
    detail: "Full-stack blockchain development.",
  },
  {
    period: "Through December 2025",
    title: "game terminal",
    org: "",
    detail: "Worked at game terminal through December 2025.",
  },
] as const;

export const thesis =
  "I'm building toward an AI × crypto startup. The project in progress is an AI trading agent on the OpenAI Agents SDK.";
