"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/lib/site";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#wins", label: "Wins" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

function currentTheme(): "dark" | "light" {
  if (document.documentElement.classList.contains("dark")) return "dark";
  if (document.documentElement.classList.contains("light")) return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: "dark" | "light") {
  document.documentElement.classList.remove("dark", "light");
  document.documentElement.classList.add(theme);
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem("theme", theme);
  const color = theme === "dark" ? "#12110e" : "#f4efe6";
  let meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "theme-color");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", color);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);

  useEffect(() => {
    setTheme(currentTheme());
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function toggleTheme() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
  }

  return (
    <header className="site-header sticky top-0 z-40 border-b border-line">
      <div className="mx-auto flex max-w-page items-center gap-3 px-5 py-3 md:px-8">
        <Link href="/" className="font-display text-xl tracking-tight text-ink">
          {profile.name}
        </Link>
        <p className="hidden text-sm text-muted lg:block">Full-stack blockchain · India</p>
        <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center rounded-full px-3 text-sm text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 md:ml-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex min-h-11 items-center rounded-full border border-line px-3 text-sm text-ink"
            aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
          >
            {theme === null ? "Theme" : theme === "dark" ? "Light" : "Dark"}
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-full border border-line px-3 text-sm text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      <nav id="mobile-nav" aria-label="Mobile" className={open ? "border-t border-line md:hidden" : "hidden"}>
        <ul className="px-3 py-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex min-h-11 items-center rounded-xl px-2 text-lg"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
