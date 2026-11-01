"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#work", id: "work", label: "Work" },
  { href: "/#wins", id: "wins", label: "Wins" },
  { href: "/#experience", id: "experience", label: "Experience" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

export function SectionNav() {
  const [active, setActive] = useState("work");

  useEffect(() => {
    const nodes = links
      .map((link) => document.getElementById(link.id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Sections" className="sticky top-24 hidden self-start md:block">
      <ol className="space-y-1">
        {links.map((link, index) => {
          const current = active === link.id;
          return (
            <li key={link.id}>
              <Link
                href={link.href}
                aria-current={current ? "true" : undefined}
                className={`flex min-h-11 items-center gap-3 text-sm ${current ? "text-ink" : "text-muted"}`}
              >
                <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
