// components/TopNav.tsx
"use client";

import Link from "next/link";

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between relative">
        <Link href="/" title="Site built by Eric Adler" className="text-sm font-black tracking-widest glitch-text">
          the MARTY app
        </Link>

        <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wider">
          <a href="#why-marty" className="upper-label hover:text-white transition-colors duration-300">Why</a>
          <a href="#faq" className="upper-label hover:text-white transition-colors duration-300">FAQ</a>
          <Link href="/pricing" className="upper-label hover:text-white transition-colors duration-300">Pricing</Link>
          <a href="#journal" className="upper-label hover:text-white transition-colors duration-300">Journal</a>
          <Link href="/investors" className="upper-label hover:text-white transition-colors duration-300">
            Investors
          </Link>
          <Link
            href="/fund"
            className="btn-square ml-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all"
          >
            Fund
          </Link>
        </div>
      </nav>

      {/* Subtle pulsing dot for cinematic effect */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
    </header>
  );
}