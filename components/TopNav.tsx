// components/TopNav.tsx
"use client";

import Link from "next/link";

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" title="Site built by Eric Adler" className="text-sm font-black tracking-widest glitch-text">
        the MARTY app
        </Link>

        <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wider">
          <a href="#why-marty" className="upper-label hover:text-white">Why</a>
          <a href="#faq" className="upper-label hover:text-white">FAQ</a>
          <a href="#journal" className="upper-label hover:text-white">Journal</a>
          <Link href="/investors" className="upper-label hover:text-white">
            Investors
          </Link>
          <Link
            href="/fund"
            className="btn-square ml-2"
          >
            Fund
          </Link>
        </div>
  </nav>
    </header>
  );
}