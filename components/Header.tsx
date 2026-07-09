"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Practice", href: "#practice" },
  { label: "Specializations", href: "#specializations" },
  { label: "Credentials", href: "#credentials" },
  { label: "Patients", href: "#patients" },
  { label: "Journal", href: "#journal" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/85 backdrop-blur-md border-b border-rule/30" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-14">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#top" className="flex items-center gap-3 group">
            <span className="inline-block w-7 h-7 relative">
              <span className="absolute inset-0 rounded-full border border-ink" />
              <span className="absolute inset-[5px] rounded-full bg-signal pulse-dot" />
            </span>
            <span className="font-display text-lg md:text-xl tracking-tighter2 leading-none">
              Dr. Mira Halden
              <span className="block marker mt-0.5">M.D. — F.A.C.C.</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="marker marker-ink hover:text-signal transition-colors"
              >
                {it.label}
              </a>
            ))}
            <a href="#book" className="btn-ink">
              Book appointment
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </a>
          </nav>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block w-5 h-3">
              <span
                className={`absolute left-0 right-0 h-px bg-ink transition-transform ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-px bg-ink top-1.5 transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-px bg-ink transition-transform ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden border-b border-rule/30 transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6 bg-paper">
          <ul className="flex flex-col gap-4">
            {navItems.map((it) => (
              <li key={it.href}>
                <a
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="marker marker-ink"
                >
                  {it.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#book" onClick={() => setOpen(false)} className="btn-ink mt-2 w-full justify-center">
                Book appointment
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
