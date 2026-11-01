"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { Icons, SectionHeading, Tag, ease } from "./ui";

// Editorial colour per project cover (index-matched to `projects`).
const palette = ["#ff4f00", "#141312", "#2f4b3a", "#b8a37e", "#1f3a8a", "#7a2e1f", "#3d3a35"];

function Cover({ p, i, className = "" }: { p: Project; i: number; className?: string }) {
  const bg = palette[i % palette.length];
  const light = bg === "#b8a37e";
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: bg, color: light ? "#141312" : "#f2efe8" }}>
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] [background-size:32px_32px]" />
      <span className="absolute -bottom-[0.18em] right-3 select-none font-serif text-[9rem] leading-none sm:text-[11rem]">{p.glyph}</span>
      <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.18em] opacity-80">
        ({String(i + 1).padStart(2, "0")}) {p.slug}
      </div>
      <div className="absolute bottom-4 left-4 max-w-[60%] font-serif text-3xl leading-none">{p.name}</div>
    </div>
  );
}

function Row({ p, i, onOpen, onHover }: { p: Project; i: number; onOpen: () => void; onHover: (i: number | null) => void }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay: (i % 4) * 0.06, ease }}
      className="border-b border-line"
    >
      <div
        role="button"
        tabIndex={0}
        data-cursor="Open"
        aria-label={`Open case study: ${p.name}`}
        onClick={onOpen}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), onOpen())}
        onMouseEnter={() => onHover(i)}
        onMouseLeave={() => onHover(null)}
        className="group relative block cursor-pointer overflow-hidden py-6 outline-none focus-visible:bg-paper-2 md:py-8"
      >
        {/* ink fill that rises on hover */}
        <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />

        <div className="relative grid grid-cols-12 items-center gap-4 px-1 transition-colors duration-500 group-hover:text-paper md:px-4">
          <span className="col-span-2 font-mono text-xs text-muted transition-colors group-hover:text-paper/60 md:col-span-1">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="col-span-10 md:col-span-5">
            <h3 className="font-serif text-4xl leading-none tracking-[-0.01em] transition-transform duration-500 group-hover:translate-x-3 sm:text-5xl md:text-6xl">
              {p.name}
            </h3>
            <p className="mt-2 text-sm text-muted transition-colors group-hover:text-paper/70 md:hidden">{p.tagline}</p>
          </div>
          <p className="hidden text-sm leading-relaxed text-muted transition-colors group-hover:text-paper/70 md:col-span-3 md:block">{p.tagline}</p>
          <div className="col-span-12 flex items-center gap-2 md:col-span-3 md:justify-end">
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 rounded-full border border-current px-3.5 py-1.5 text-xs font-medium transition-colors hover:border-accent hover:bg-accent hover:text-paper"
            >
              View Live <ArrowUpRight size={12} />
            </a>
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-full border border-current px-3.5 py-1.5 text-xs font-medium transition-colors hover:border-accent hover:bg-accent hover:text-paper"
            >
              <Icons.GitHub className="h-3 w-3" /> GitHub
            </a>
          </div>
        </div>
        <div className="relative mt-4 flex flex-wrap gap-1.5 px-1 md:ml-[8.33%] md:px-4 [&>span]:transition-colors group-hover:[&>span]:border-paper/25 group-hover:[&>span]:text-paper/80">
          {p.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </motion.li>
  );
}

/** Preview card that follows the cursor while a row is hovered (desktop). */
function FloatingPreview({ index }: { index: number | null }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 22 });
  const sy = useSpring(y, { stiffness: 180, damping: 22 });

  useEffect(() => {
    const m = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", m, { passive: true });
    return () => window.removeEventListener("pointermove", m);
  }, [x, y]);

  return (
    <motion.div style={{ x: sx, y: sy }} className="pointer-events-none fixed left-0 top-0 z-40 hidden [@media(pointer:fine)]:block">
      <AnimatePresence>
        {index !== null && (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            exit={{ opacity: 0, scale: 0.6, rotate: 0 }}
            transition={{ duration: 0.35, ease }}
            className="ml-8 -translate-y-1/2 overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)]"
          >
            <div className="relative h-[220px] w-[320px]">
              {projects.map((p, i) => (
                <motion.div key={p.slug} className="absolute inset-0" animate={{ y: `${(i - index) * 100}%` }} transition={{ duration: 0.5, ease }}>
                  <Cover p={p} i={i} className="h-full w-full" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Drawer({ p, i, onClose }: { p: Project; i: number; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const sections = [
    { k: "Problem", v: p.problem },
    { k: "Approach", v: p.approach },
  ];

  return (
    <motion.div className="fixed inset-0 z-[100]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label={p.name}>
      <div className="absolute inset-0 bg-ink/50 backdrop-blur-[2px]" onClick={onClose} data-cursor="Close" />
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.7, ease }}
        className="absolute inset-y-0 right-0 flex w-full max-w-2xl flex-col overflow-y-auto bg-paper"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-paper/90 px-6 py-4 backdrop-blur md:px-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Case study — {String(i + 1).padStart(2, "0")}/07</span>
          <button onClick={onClose} className="link-draw font-mono text-[11px] uppercase tracking-[0.18em]">
            Close ✕
          </button>
        </div>

        <Cover p={p} i={i} className="h-64 shrink-0 md:h-80" />

        <div className="px-6 py-10 md:px-10">
          <h3 className="font-serif text-6xl leading-[0.9] tracking-[-0.02em] md:text-7xl">{p.name}</h3>
          <p className="mt-4 text-xl leading-snug text-ink/80">{p.tagline}</p>

          <dl className="mt-12 divide-y divide-line border-y border-line">
            {sections.map((s, n) => (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + n * 0.08, ease }}
                className="grid gap-2 py-6 md:grid-cols-[140px_1fr]"
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{s.k}</dt>
                <dd className="leading-relaxed text-ink/85">{s.v}</dd>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.51, ease }} className="grid gap-3 py-6 md:grid-cols-[140px_1fr]">
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Tech used</dt>
              <dd className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </dd>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.59, ease }} className="grid gap-3 py-6 md:grid-cols-[140px_1fr]">
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Results</dt>
              <dd>
                <ul className="space-y-2">
                  {p.results.map((r) => (
                    <li key={r} className="flex gap-3 text-ink/85">
                      <span className="text-accent">✺</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </dd>
            </motion.div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent">
              View Live <ArrowUpRight size={15} />
            </a>
            <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-medium transition-colors hover:bg-ink hover:text-paper">
              <Icons.GitHub className="h-4 w-4" /> Source code
            </a>
          </div>
        </div>
      </motion.aside>
    </motion.div>
  );
}

export default function Projects() {
  const [open, setOpen] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="work" className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
      <SectionHeading index="01" kicker="Selected work · 2023—2026" title="Selected" italic="work" />
      <ul className="border-t border-ink">
        {projects.map((p, i) => (
          <Row key={p.slug} p={p} i={i} onOpen={() => setOpen(i)} onHover={setHover} />
        ))}
      </ul>
      <FloatingPreview index={open === null ? hover : null} />
      {mounted &&
        createPortal(
          <AnimatePresence>{open !== null && <Drawer p={projects[open]} i={open} onClose={() => setOpen(null)} />}</AnimatePresence>,
          document.body
        )}
    </section>
  );
}
