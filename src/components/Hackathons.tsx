"use client";

import { motion } from "framer-motion";
import { wins, type Win } from "@/lib/data";
import { SectionHeading, ease } from "./ui";

// jagged torn edge on the stub's left side
const torn =
  "polygon(6% 0,100% 0,100% 100%,6% 100%,0 96%,5% 91%,0 86%,6% 80%,1% 74%,5% 68%,0 62%,6% 56%,1% 50%,5% 44%,0 38%,6% 32%,1% 26%,5% 20%,0 14%,6% 8%,1% 3%)";

const tilts = [-2, 1.5, -1, 2, -1.5];
const offsets = ["lg:mt-0", "lg:mt-20", "lg:mt-8", "lg:-mt-4", "lg:mt-12"];

function Barcode({ seed }: { seed: string }) {
  const bars = Array.from({ length: 30 }, (_, i) => ((seed.charCodeAt(i % seed.length) * (i + 3)) % 4) + 1);
  return (
    <div className="flex h-7 items-end gap-[2px]" aria-hidden>
      {bars.map((w, i) => (
        <span key={i} className="h-full bg-ink" style={{ width: w, opacity: i % 6 === 0 ? 0.35 : 0.9 }} />
      ))}
    </div>
  );
}

function Ticket({ w, i }: { w: Win; i: number }) {
  const dark = i % 2 === 1;
  const d = (i % 3) * 0.1;
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ rotate: 0, y: -6 }}
      variants={{
        hidden: { opacity: 0, y: 60, rotate: 0 },
        show: { opacity: 1, y: 0, rotate: tilts[i], transition: { duration: 0.9, delay: d, ease } },
      }}
      className={`${offsets[i]} relative`}
    >
      <div className="relative flex drop-shadow-[0_18px_30px_rgba(20,19,18,0.16)]">
        {/* main body: rips open left → right */}
        <motion.div
          variants={{
            hidden: { clipPath: "inset(0 100% 0 0)" },
            show: { clipPath: "inset(0 0% 0 0)", transition: { duration: 1, delay: 0.15 + d, ease } },
          }}
          className="relative flex-1 rounded-l-xl border border-r-0 border-ink/15 bg-[#fbf9f4] p-5 sm:p-6"
        >
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            <span>Winner</span>
            <span>No. {String(i + 1).padStart(3, "0")}</span>
          </div>
          <div className="my-4 h-px bg-ink/10" />
          <h3 className="font-serif text-[2rem] leading-[0.95] tracking-[-0.01em]">{w.hackathon}</h3>
          <p className="mt-2 text-sm text-muted">
            Project — <span className="text-ink">{w.project}</span>
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 font-mono text-[11px]">
            <div>
              <p className="uppercase tracking-widest text-muted">Date</p>
              <p className="mt-0.5">{w.date}</p>
            </div>
            <div>
              <p className="uppercase tracking-widest text-muted">Venue</p>
              <p className="mt-0.5">{w.location}</p>
            </div>
          </div>
          <div className="mt-5">
            <Barcode seed={w.hackathon + w.project} />
          </div>
        </motion.div>

        {/* perforation with notches */}
        <div className="relative w-0">
          <span className="absolute -top-2.5 left-0 h-5 w-5 -translate-x-1/2 rounded-full bg-paper" />
          <span className="absolute -bottom-2.5 left-0 h-5 w-5 -translate-x-1/2 rounded-full bg-paper" />
          <span className="absolute inset-y-3 left-0 border-l-2 border-dashed border-ink/20" />
        </div>

        {/* stub: tears away after the reveal */}
        <motion.div
          variants={{
            hidden: { x: 0, rotate: 0, opacity: 0 },
            show: {
              x: 5,
              rotate: 3,
              opacity: 1,
              transition: { opacity: { duration: 0.3, delay: 0.9 + d }, default: { type: "spring", stiffness: 180, damping: 12, delay: 1.05 + d } },
            },
          }}
          style={{ clipPath: torn, transformOrigin: "0% 0%" }}
          className={`relative flex w-20 flex-col items-center justify-between rounded-r-xl py-5 pl-3 pr-2 sm:w-24 ${dark ? "bg-ink text-paper" : "bg-accent text-paper"}`}
        >
          <span className="font-serif text-2xl leading-none">✺</span>
          <p className="rotate-180 text-sm font-semibold uppercase leading-tight tracking-wide [writing-mode:vertical-rl]">{w.prize}</p>
          <span className="font-mono text-[10px]">#{i + 1}</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Hackathons() {
  return (
    <section id="wins" className="relative bg-paper-2/60 py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionHeading index="02" kicker="Hackathon wins · 20+ total" title="The ticket" italic="wall" />
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {wins.map((w, i) => (
            <Ticket key={w.hackathon + i} w={w} i={i} />
          ))}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8, ease }}
            className="flex min-h-[230px] flex-col justify-between border border-dashed border-ink/30 p-6 lg:mt-6"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">In the drawer</span>
            <p className="font-serif text-8xl leading-none">
              15+<span className="text-accent">.</span>
            </p>
            <p className="text-sm text-muted">More wins across Web3 hackathons — full list on request.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
