// components/TopNav.tsx
import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-12 flex items-center justify-between text-sm">
        <Link href="/" className="font-bold tracking-wider">MARTY</Link>
        <div className="flex items-center gap-4">
          <a href="#why" className="text-white/80 hover:text-white transition">Why MARTY</a>
          <a href="#journal" className="text-white/80 hover:text-white transition">Journal</a>
          <a href="#fund" className="text-white/80 hover:text-white transition">Fund</a>
          <Link href="/faq" className="text-white/80 hover:text-white transition">FAQ</Link>
        </div>
      </div>
    </nav>
  );
}
