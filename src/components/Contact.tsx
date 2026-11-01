"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { profile } from "@/lib/data";
import { Icons, ease } from "./ui";
import { useIST } from "./Nav";

const lineUp = { hidden: { y: "105%" }, show: { y: 0, transition: { duration: 1.1, ease } } };

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: null },
  { label: "X / Twitter", value: "@" + profile.x, href: `https://x.com/${profile.x}`, Icon: Icons.X },
  { label: "LinkedIn", value: "in/nehasingh3000", href: `https://${profile.linkedin}`, Icon: Icons.LinkedIn },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", message: "" });
  const time = useIST();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  // No backend: opens the visitor's mail app with the message pre-filled.
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${form.name || "your portfolio"}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${encodeURIComponent(form.message)}`;
  };

  return (
    <section id="contact" className="relative bg-ink pt-28 text-paper md:pt-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="h-px bg-paper/30" />
        <div className="mt-3 flex justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50">
          <span>(05)</span>
          <span>Contact · open to YC-bound teams</span>
        </div>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-10 font-serif text-[19vw] leading-[0.86] tracking-[-0.03em] md:text-[13rem]"
        >
          <span className="-mb-[0.1em] block overflow-hidden pb-[0.1em]">
            <motion.span className="block" variants={lineUp}>
              Let&apos;s build
            </motion.span>
          </span>
          <span className="-mb-[0.1em] block overflow-hidden pb-[0.1em] text-right">
            <motion.span className="block" variants={lineUp}>
              <em className="text-accent">together.</em>
            </motion.span>
          </span>
        </motion.h2>

        <div className="mt-20 grid gap-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <ul className="border-t border-paper/20">
              {channels.map(({ label, value, href, Icon }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease }}
                  className="border-b border-paper/20"
                >
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group relative flex items-center justify-between gap-4 overflow-hidden py-6"
                  >
                    <span className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
                    <span className="relative flex min-w-0 items-center gap-4 transition-transform duration-500 group-hover:translate-x-4">
                      <span className="w-24 shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/50 transition-colors group-hover:text-paper/80">
                        {label}
                      </span>
                      <span className="flex min-w-0 items-center gap-2 truncate text-xl font-medium tracking-tight sm:text-2xl">
                        {Icon && <Icon className="h-4 w-4 shrink-0" />}
                        <span className="truncate">{value}</span>
                      </span>
                    </span>
                    <ArrowUpRight className="relative mr-2 shrink-0 transition-transform duration-500 group-hover:rotate-45" size={22} />
                  </a>
                </motion.li>
              ))}
            </ul>
            <button onClick={copy} className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-paper/60 transition hover:text-accent">
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="flex flex-col gap-8 md:col-span-5 md:col-start-8"
          >
            <p className="font-serif text-4xl italic">Or drop a note —</p>
            <label className="block">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/50">Your name</span>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full border-b border-paper/30 bg-transparent py-3 text-xl outline-none transition-colors placeholder:text-paper/25 focus:border-accent"
                placeholder="Satoshi Nakamoto"
              />
            </label>
            <label className="block">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/50">Message</span>
              <textarea
                required
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full resize-none border-b border-paper/30 bg-transparent py-3 text-xl outline-none transition-colors placeholder:text-paper/25 focus:border-accent"
                placeholder="We're building an agentic dApp and…"
              />
            </label>
            <button
              type="submit"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-paper px-7 py-4 font-medium text-ink transition-colors hover:bg-accent hover:text-paper"
            >
              Send message <ArrowUpRight size={18} className="transition-transform group-hover:rotate-45" />
            </button>
          </motion.form>
        </div>
      </div>

      {/* footer */}
      <footer className="mt-28 overflow-hidden border-t border-paper/15">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-3 px-5 py-6 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/50 sm:flex-row md:px-10">
          <span>© {new Date().getFullYear()} Neha Singh</span>
          <span>India · {time || "--:--:--"} IST</span>
          <a href="#top" className="link-draw w-fit text-paper/80">
            Back to top ↑
          </a>
        </div>
        <p
          aria-hidden
          className="select-none whitespace-nowrap text-center font-serif text-[24vw] leading-[0.75] tracking-[-0.04em] text-paper/[0.06]"
        >
          Neha Singh
        </p>
      </footer>
    </section>
  );
}
