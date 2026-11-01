"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile, skills } from "@/lib/data";
import { ease } from "./ui";

function Line({ children, delay, className = "" }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <span className={`-mb-[0.08em] block overflow-hidden pb-[0.08em] ${className}`}>
      <motion.span className="block" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1.2, delay, ease }}>
        {children}
      </motion.span>
    </span>
  );
}

function Badge() {
  const text = "20+ WEB3 HACKATHON WINS • SHIPS FAST • ";
  return (
    <div className="relative h-24 w-24 sm:h-36 sm:w-36">
      <svg viewBox="0 0 200 200" className="animate-spin-slow absolute inset-0">
        <defs>
          <path id="circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text className="fill-ink font-mono text-[15px] uppercase tracking-[0.2em]">
          <textPath href="#circle">{text}</textPath>
        </text>
      </svg>
      <div className="absolute inset-[30%] grid place-items-center rounded-full bg-accent font-serif text-2xl tracking-tight text-paper sm:text-3xl">20+</div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const yBadge = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const rot = useTransform(scrollYProgress, [0, 1], [0, 90]);

  const meta = ["Portfolio ©2026", profile.role, "India → San Francisco"];

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden pt-20">
      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-5 md:px-10">
        {/* meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 grid grid-cols-2 gap-y-2 border-t border-line pt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted md:grid-cols-4"
        >
          {meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
          <span className="hidden text-right md:block">(Scroll ↓)</span>
        </motion.div>

        {/* name */}
        <h1 className="relative mb-8 mt-8 font-serif leading-[0.82] tracking-[-0.035em] md:mt-6">
          <motion.span style={{ x: xLeft }} className="block text-[29vw] md:text-[21vw] xl:text-[19rem]">
            <Line delay={0.35}>Neha</Line>
          </motion.span>
          <motion.span style={{ x: xRight }} className="block text-right text-[29vw] md:text-[21vw] xl:text-[19rem]">
            <Line delay={0.5}>
              <em className="pr-[0.04em]">Singh</em>
              <span className="text-accent">.</span>
            </Line>
          </motion.span>

          <motion.div
            style={{ y: yBadge, rotate: rot }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, ease }}
            className="absolute -top-[8%] right-0 md:right-[12%] md:top-[10%]"
          >
            <Badge />
          </motion.div>
        </h1>

        {/* statement + CTA */}
        <div className="mt-auto grid gap-8 border-t border-line pb-10 pt-6 md:grid-cols-12 md:pb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease }}
            className="text-3xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-4xl md:col-span-6 lg:text-5xl"
          >
            I build Web3 and AI agents that <em className="font-serif font-normal text-accent">ship.</em>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.05, ease }}
            className="flex flex-col justify-between gap-6 md:col-span-5 md:col-start-8"
          >
            <p className="max-w-md text-[15px] leading-relaxed text-muted">
              Full-stack blockchain developer building smart contracts, agentic dApps and autonomous AI agents — from weekend prototype to
              production. 20+ Web3 hackathons won so far.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent">
                Selected work <ArrowDown size={15} className="transition group-hover:translate-y-0.5" />
              </a>
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-medium transition-colors hover:bg-ink hover:text-paper">
                Get in touch <ArrowUpRight size={15} className="transition group-hover:rotate-45" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ink marquee band */}
      <div className="relative -mx-4 -rotate-[1.5deg] bg-ink py-4 text-paper">
        <div className="animate-marquee flex w-max">
          {[...skills, ...skills].map((s, i) => (
            <span key={i} className="flex items-center whitespace-nowrap px-6 font-serif text-2xl italic sm:text-3xl">
              {s}
              <span className="ml-12 not-italic text-accent">✺</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
