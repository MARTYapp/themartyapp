"use client";
import Link from "next/link";

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-sm">
        <Link href="/" className="font-extrabold tracking-tight">MARTY</Link>
        <div className="flex items-center gap-5">
          <a href="#why" className="hover:opacity-80">Why MARTY</a>
          <a href="#journal" className="hover:opacity-80">Try</a>
          <a href="#fund" className="rounded-full border border-white/30 px-3 py-1 hover:bg-white hover:text-black transition">Fund</a>
        </div>
      </nav>
    </header>
  );
}
