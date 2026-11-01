# Portfolio research

Short notes on the sites used as references, and the decisions taken from them. The page is not a copy of any of these.

## Primary references

- [Soumalya Paul](https://www.soumalyapaul.com/) — one-line positioning, proof counters directly under it, skills attached to real shipped work, a short experience timeline, and a single AI × Web3 thesis before contact. Neha’s opening follows that order: the line “Full-stack Web3 and AI-agent builder.”, then 23 hackathon wins and 5 years. Only those two numbers are used. Skills in the opening name the repos they actually appear in.
- [Abhishek](https://www.abhish3k.xyz/) — a hackathon wall of physical “admit one” tickets. The wins section uses that ticket form. The tickets do not drag. Dragging would cost accessibility and weight, and only five verified results exist, so a static wall is the honest version. The headline count stays 23. The other wins are not invented.
- [Hans Michael Hauser](https://www.hansmichaelhauser.com/) — each relevant project carries a trophy line with sponsor, track, and place. MemeX uses Safe Agentathon, the SEI track, and 1st, plus the Venice AI and Zerebro places. Flowfit only says it was built for the Flow Hackathon, because the README states no place.
- [Siegfried Bozza](https://siegfried-bozza-portfolio-next.vercel.app/) — every project has Case study, Live demo, and Code. Live demo is omitted when the page did not load. NeuraFi’s listed homepage returned 404, so that card has Case study and Code only.

## Other sites studied

- [Brittany Chiang](https://brittanychiang.com/) — dark, quiet, one accent, and a contents column that tracks the section in view. The desktop index and the single rust accent come from that discipline. The layout is not her two-column résumé.
- [Rauno Freiberg, Portfolio 2025](https://www.awwwards.com/sites/portfolio-2025) — Awwwards honorable mention. Noted for a dark, crafted interface, horizontal project galleries, and small interaction details. Those galleries and the OS-style dock were left out so the page stays fast and readable on a phone.
- [giats.me](https://giats.me/) ([source](https://github.com/Giats2498/giats-portfolio)) — CSS Design Awards, Awwwards honorable mention, GSAP site of the day. WebGL, fluid cursors, and scroll theatres are the standout. They were not used. A content site with real project text should not spend its budget on a 3D background.
- [Godly](https://godly.website/) — reviewed as a gallery of current personal sites (large type, dark field, unusual scroll). Large serif type and a dark default are the pieces kept. Custom cursors and scroll-jacking are not.
- [WeAreDevelopers, March 2025 portfolio notes](https://www.wearedevelopers.com/magazine/561-web-developer-portfolio-inspiration-and-examples-march-2025) — the useful point from the Brittany Chiang write-up is restraint: one accent, short copy, motion that can be turned off.
- [Abdulkader Safi on editorial portfolios](https://abdulkadersafi.com/blog/i-redesigned-my-portfolio-from-tech-dashboard-to-editorial) — numbered rows instead of a grid of identical cards, warm near-black rather than pure black, and one accent. Project rows on this site follow that.
- [Felix Yeboah, dark studio](https://felixyeboah.dev/writing/redesigning-my-portfolio-dark-studio) — hairline rules instead of shadowed cards, mono for metadata, and a rationed accent. Tickets are the only “cards,” and they exist because the wins section is a wall of tickets.
- Web3 portfolios used as a check against generic crypto templates: [Sandoche Adittane](https://www.sandoche.com/resume/), [Dr. Alex](https://yonkoo11.github.io/portfolio/), [Tenyokj](https://tenyokj.vercel.app/), [Muhammad Ramadhani](https://ramadhvni.com/portfolio). The useful pattern is a plain stack line and a real project sentence. Neon grids, fake TVL, and invented user counts were rejected.

## Decisions

- Order is hero and proof, projects, wins, experience, contact. Skills sit in the opening, after the counters, because that is where Soumalya ties tools to shipped work. There is no separate biography: no further personal facts were provided.
- Type is Fraunces for the positioning line and titles, Geist for reading, Geist Mono for dates, indexes, and stack lines. The palette is warm paper in light mode and warm black in dark mode, with one rust accent. The first visit follows the system theme. A control switches and remembers the choice.
- Motion is limited to color and a smooth in-page jump, and it is removed for `prefers-reduced-motion`. No animation library.
- Case studies repeat the README and the dependency list. They do not add employers, dates, or usage numbers.
- Contact is three links: GitHub, X, and LinkedIn. No form, no email, no phone.
- The current employer is described only as an AI, SaaS, and Web3 product studio. The company name is not on the site. game terminal is listed through December 2025, with no invented title or start date.
