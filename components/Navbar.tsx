/* eslint-disable no-restricted-syntax */
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#0B0C0F]/80 backdrop-blur-md">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/branding/logo-icon.png"
          alt="MARTY"
          className="w-8 h-8"
          width={32}
          height={32}
          priority
        />
        <span className="font-semibold tracking-wide text-gray-100">MARTY</span>
      </Link>
      <div className="space-x-6 text-sm text-gray-300">
        <Link href="/pricing" className="hover:text-white">
          Pricing
        </Link>
        <Link href="/fund" className="hover:text-white">
          #FundTheFounder
        </Link>
      </div>
    </nav>
  );
}