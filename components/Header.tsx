"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-ink/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#top" className="flex items-baseline gap-2.5">
            <span className="font-display text-lg md:text-xl tracking-tight">
              ডা. তানভীর হাসান
            </span>
            <span className="hidden sm:inline text-ink/40 text-sm">
              হৃদরোগ বিশেষজ্ঞ
            </span>
          </a>
          <a href="#book" className="btn-ink" style={{ padding: "0.6rem 1.1rem", fontSize: "0.9rem" }}>
            অ্যাপয়েন্টমেন্ট নিন
          </a>
        </div>
      </div>
    </header>
  );
}