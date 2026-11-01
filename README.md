# Neha Singh — Portfolio

Next.js 15 · TypeScript · Tailwind CSS v4 · Framer Motion

Current design: **Editorial** (warm paper, serif type, orange accent).
The earlier **Neon** design is saved in `../saved-designs/neon-effect/`.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Edit content

Everything (projects, hackathon wins, experience, stats, links) lives in
`src/lib/data.ts`. Items marked `TODO` are drafts — replace them with real details.

## Structure

- `src/components/Background.tsx` — custom cursor follower
- `src/components/Hero.tsx` — animated name, rotating badge, skills marquee
- `src/components/Projects.tsx` — project list with hover preview + case-study drawer
- `src/components/Hackathons.tsx` — ticket wall with tear reveal
- `src/components/Experience.tsx` — self-drawing timeline
- `src/components/About.tsx` — bio + count-up stats
- `src/components/Contact.tsx` — links + mailto form

Deploy: push to GitHub and import into Vercel — no config needed.
