// components/TopNav.tsx
"use client";

import Link from "next/link";

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/70 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-sm font-bold tracking-wide">
          the <span className="font-extrabold">MARTY</span> app
        </Link>

        <div className="flex items-center gap-5 text-sm">
          <a href="#why" className="hover:text-white/90 text-white/70">Why MARTY</a>
          <Link href="/faq" className="hover:text-white/90 text-white/70">FAQ</Link>
          <a href="#journal" className="hover:text-white/90 text-white/70">Journal</a>
          <Link
            href="/fund"
            className="rounded-full border border-white/20 px-3 py-1.5 hover:bg-white hover:text-black transition"
          >
            Fund
          </Link>
        </div>
      </nav>
    </header>
  );
}