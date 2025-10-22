"use client";

import { useState } from "react";
import MissionModal from "@/components/modals/MissionModal";
import FeaturesModal from "@/components/modals/FeaturesModal";
import UpgradeModal from "@/components/modals/UpgradeModal";

export default function HomePage() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [showMission, setShowMission] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* ===== Top Nav ===== */}
      <nav className="absolute top-6 left-0 right-0 flex justify-between items-center px-6 text-sm sm:text-base">
        <a
          href="/"
          className="text-blue-500 font-medium hover:opacity-80 transition"
        >
          theMARTYapp
        </a>
        <div className="space-x-6">
          <button
            onClick={() => setShowMission(true)}
            className="text-gray-400 hover:text-blue-500 transition"
          >
            mission
          </button>
          <button
            onClick={() => setShowFeatures(true)}
            className="text-gray-400 hover:text-blue-500 transition"
          >
            features
          </button>
        </div>
      </nav>

      {/* ===== Disclaimer Modal (Landing) ===== */}
      {showDisclaimer && (
        <section className="flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug mb-6">
            Not a therapist.<br />
            Not a vibe app.<br />
            Just MARTY.
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl max-w-[28ch] md:max-w-[36ch] leading-relaxed mb-10">
            An emotionally fluent, modern ecosystem<br />
            bridging recovery, coaching,<br />
            and self-awareness.<br />
            <br />
            Built to turn chaos into clarity —<br />
            without pretending to be therapy.
          </p>

          <button
            onClick={() => setShowDisclaimer(false)}
            className="mt-4 px-6 py-3 rounded-full text-[#3B82F6] border border-[#3B82F6] font-semibold hover:bg-[#3B82F6] hover:text-black transition duration-200 ease-out"
          >
            Launch MARTY
          </button>
        </section>
      )}

      {/* ===== Chat View (Placeholder for now) ===== */}
      {!showDisclaimer && (
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-10">
          <div className="flex justify-between w-full px-8">
            <a
              href="/"
              className="text-[#3B82F6] font-medium hover:opacity-80 transition"
            >
              theMARTYapp
            </a>
            <button
              onClick={() => setShowUpgrade(true)}
              className="text-[#3B82F6] hover:opacity-80 transition"
            >
              upgrade
            </button>
          </div>

          <button className="px-6 py-3 rounded-full bg-[#3B82F6] text-black font-semibold hover:bg-blue-600 transition">
            Talk to MARTY
          </button>
        </div>
      )}

      {/* ===== Modals ===== */}
      <MissionModal show={showMission} onClose={() => setShowMission(false)} />
      <FeaturesModal
        show={showFeatures}
        onClose={() => setShowFeatures(false)}
      />
      <UpgradeModal show={showUpgrade} onClose={() => setShowUpgrade(false)} />
    </main>
  );
}