"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experience } from "@/lib/data";
import { SectionHeading, Tag, ease } from "./ui";

export default function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const line = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
      <SectionHeading index="03" kicker="Experience · employers kept private" title="Experience" italic="log" />

      <ol ref={ref} className="relative">
        {/* track + self-drawing line */}
        <div className="absolute bottom-0 left-[7px] top-0 w-px bg-line md:left-[calc(25%+7px)]" />
        <motion.div style={{ scaleY: line }} className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-accent md:left-[calc(25%+7px)]" />

        {experience.map((e) => (
          <li key={e.role} className="relative grid gap-3 pb-16 pl-10 md:grid-cols-4 md:gap-0 md:pl-0 md:last:pb-0">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-35% 0px" }}
              transition={{ type: "spring", stiffness: 300, damping: 16 }}
              className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-2 border-accent bg-paper md:left-[25%]"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-25% 0px" }}
              transition={{ duration: 0.8 }}
              className="font-mono text-xs uppercase tracking-[0.16em] text-muted md:pr-10 md:pt-1 md:text-right"
            >
              {e.period}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-25% 0px" }}
              transition={{ duration: 0.9, ease }}
              className="md:col-span-3 md:pl-14"
            >
              <h3 className="font-serif text-4xl leading-none tracking-[-0.01em] md:text-5xl">{e.role}</h3>
              <p className="mt-2 font-mono text-xs text-muted">@ {e.org}</p>
              <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-ink/80">{e.focus}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {e.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </motion.div>
          </li>
        ))}
      </ol>
    </section>
  );
}
