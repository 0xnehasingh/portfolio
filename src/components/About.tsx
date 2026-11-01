"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useScroll, useTransform, type MotionValue } from "framer-motion";
import { stats } from "@/lib/data";
import { SectionHeading, ease } from "./ui";

const bio =
  "Hi, I'm Neha Singh. I build full-stack Web3 products — smart contracts and agentic dApps. I've designed product architecture from zero, written the contracts, wired the integrations and taken features all the way to users. I've won 20+ Web3 hackathons, and my long-term goal is Y Combinator.";

const details = [
  "I work hands-on across the whole stack and own problems end to end. I ship small, learn fast and iterate without waiting for permission — and I'd love to show you what I'm working on.",
];

const highlight = new Set(["Web3", "agentic", "20+", "Y", "Combinator."]);

function Word({ w, progress, range }: { w: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className={highlight.has(w) ? "italic text-accent" : ""}>
      {w}{" "}
    </motion.span>
  );
}

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const v = useMotionValue(0);
  const rounded = useTransform(v, (x) => Math.round(x).toString().padStart(2, "0"));
  useEffect(() => {
    if (inView) animate(v, to, { duration: 2.2, ease: [0.16, 1, 0.3, 1] });
  }, [inView, to, v]);
  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = bio.split(" ");

  return (
    <section id="about" className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
      <SectionHeading index="04" kicker="About · India → SF" title="About" italic="me" />

      <div className="grid gap-12 md:grid-cols-12">
        <p className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.16em] text-muted md:col-span-3">
          Full-stack blockchain developer
          <br />
          Web3 · Smart contracts
          <br />
          Agentic dApps · AI agents
        </p>
        <div className="md:col-span-9">
          <p ref={ref} className="font-serif text-[2.1rem] leading-[1.12] tracking-[-0.01em] sm:text-[2.6rem] lg:text-[3.1rem]">
            {words.map((w, i) => (
              <Word key={i} w={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
            ))}
          </p>
          <div className="mt-12 grid gap-6 border-t border-line pt-8 text-[17px] leading-relaxed text-ink/75 md:max-w-2xl">
            {details.map((d, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease }}
              >
                {d}
              </motion.p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 grid border-t border-ink sm:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease }}
            className="border-b border-line py-8 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0"
          >
            <p className={`font-serif leading-none tracking-[-0.03em] ${i === 0 ? "text-[8rem] text-accent md:text-[10rem]" : "text-[8rem] md:text-[10rem]"}`}>
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
