"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [showMission, setShowMission] = useState(true);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-[#0B0C0F] text-gray-100">
      {/* Top Nav */}
      <nav className="absolute top-6 left-6 flex items-center space-x-4 text-sm text-gray-400">
        <Link href="/" className="font-semibold hover:text-white transition">
          theMARTYapp
        </Link>
        <Link href="/about" className="hover:text-white transition">
          About
        </Link>
        <Link href="/fund" className="hover:text-white transition">
          #FundTheFounder
        </Link>
      </nav>

      {/* Mission Modal */}
      {showMission && (
        <div className="bg-[#151618]/90 border border-gray-800 rounded-2xl shadow-xl p-10 max-w-xl text-center backdrop-blur-lg">
          <h1 className="text-4xl font-semibold mb-4">
            Not a therapist. Not a vibe app. Just MARTY.
          </h1>

          <p className="text-gray-400 leading-relaxed mb-6">
            An emotionally fluent, modern ecosystem bridging recovery, coaching,
            and self-awareness. Built to turn chaos into clarity — without pretending
            to be therapy.
          </p>

          <button
            onClick={() => {
              setShowMission(false);
              window.location.href = "/chat";
            }}
            className="mt-4 px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition"
          >
            Launch MARTY
          </button>

          <p className="text-sm text-gray-500 mt-8">
            Built and founded by <span className="text-gray-300">Eric Adler</span>.
          </p>
        </div>
      )}
    </main>
  );
}