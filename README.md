# Neha Singh — portfolio

Personal site for Neha Singh, a full-stack blockchain developer in India. The copy is limited to her public GitHub work and the roles and hackathon results she confirmed. There is no email address and no phone number on the site.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

`npm run build` is the check that has to pass before deploy.

## Deploy on Vercel

Import this repository. Vercel detects Next.js and builds with `npm run build`. No extra config is required.

Optional: set `NEXT_PUBLIC_SITE_URL` to the production origin, including `https://`, if you want canonical and Open Graph URLs to use a custom domain. When that variable is unset, the site uses Vercel’s own URL.

## What’s on the page

Hero and proof, selected projects, hackathon wins, experience, and contact links to [GitHub](https://github.com/0xnehasingh), [X](https://x.com/0xnehasingh), and [LinkedIn](https://www.linkedin.com/in/nehasingh3000/). Project case studies live at `/work/[slug]`.

Design notes and sources are in [RESEARCH.md](./RESEARCH.md).
