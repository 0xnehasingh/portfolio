"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ease } from "./ui";

const links = [
  { href: "#work", label: "Work" },
  { href: "#wins", label: "Wins" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function useIST() {
  const [t, setT] = useState("");
  useEffect(() => {
    const f = () =>
      setT(
        new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(new Date())
      );
    f();
    const id = setInterval(f, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const time = useIST();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive("#" + e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${scrolled ? "bg-paper/80 backdrop-blur-md" : ""}`}
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 items-center px-5 py-4 md:grid-cols-[1fr_auto_1fr] md:px-10">
          <a href="#top" className="font-sans text-[15px] font-semibold tracking-tight">
            Neha Singh<sup className="ml-0.5 text-[9px] text-accent">●</sup>
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={`link-draw pb-0.5 text-[14px] transition-colors ${active === l.href ? "text-ink" : "text-muted hover:text-ink"}`}>
                  {active === l.href && <span className="mr-1.5 inline-block h-1.5 w-1.5 -translate-y-0.5 rounded-full bg-accent" />}
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-5">
            <span className="hidden font-mono text-[11px] uppercase tracking-wider text-muted lg:inline">
              IN · {time || "--:--:--"} IST
            </span>
            <a href="#contact" className="hidden rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-paper transition-colors hover:bg-accent md:inline-block">
              Let&apos;s talk
            </a>
            <button aria-label="Open menu" onClick={() => setOpen(true)} className="flex flex-col gap-1.5 p-2 md:hidden">
              <span className="block h-px w-6 bg-ink" />
              <span className="block h-px w-6 bg-ink" />
            </button>
          </div>
        </div>
        <motion.div style={{ scaleX: progress }} className="h-px origin-left bg-ink" />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease }}
            className="fixed inset-0 z-[90] flex flex-col bg-ink px-5 pb-8 pt-5 text-paper md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold">Neha Singh</span>
              <button onClick={() => setOpen(false)} className="font-mono text-xs uppercase tracking-widest">
                Close
              </button>
            </div>
            <ul className="mt-auto space-y-1">
              {links.map((l, i) => (
                <motion.li key={l.href} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.06, ease }}>
                  <a href={l.href} onClick={() => setOpen(false)} className="flex items-baseline justify-between border-b border-paper/15 py-3 font-serif text-5xl">
                    {l.label}
                    <span className="font-mono text-xs text-paper/50">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-wider text-paper/50">India · {time} IST</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
