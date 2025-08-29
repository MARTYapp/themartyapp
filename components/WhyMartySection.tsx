// components/WhyMartySection.tsx
"use client";

import Image from "next/image";

// ---------- Types ----------
type FeatureRow = {
  label: string;
  marty: boolean;
  llm: boolean;
  wellness: boolean;
};

// ---------- Data ----------
const FEATURE_ROWS: FeatureRow[] = [
  { label: "Persona engine (trauma-smart, older-bro tone)", marty: true, llm: false, wellness: false },
  { label: "DBT + EF scaffolds (opposite action, timers, nudges)", marty: true, llm: false, wellness: false },
  { label: "Pattern memory across entries (loop detection)", marty: true, llm: false, wellness: true },
  { label: "Voice-first journaling & reflection UX", marty: true, llm: false, wellness: true },
  { label: "Cinematic brand with cultural edge", marty: true, llm: false, wellness: false },
  { label: "Generic text generation", marty: true, llm: true, wellness: false },
];

// ---------- UI Bits ----------
function Dot({ on }: { on: boolean }) {
  return (
    <span
      aria-hidden
      className={["inline-block h-2.5 w-2.5 rounded-sm align-middle", on ? "bg-white" : "bg-white/25"].join(" ")}
    />
  );
}

function ComparisonTable() {
  return (
    <section aria-labelledby="compare-heading" className="mt-12">
      <h3 id="compare-heading" className="mb-4 text-lg font-bold text-white/90">How MARTY differs</h3>

      <div className="overflow-hidden rounded-lg border border-white/10">
        {/* Header */}
        <div className="grid grid-cols-12 bg-white/[0.03] text-sm font-semibold">
          <div className="col-span-6 px-4 py-3 text-white/70">Capability</div>
          <div className="col-span-2 px-4 py-3">MARTY</div>
          <div className="col-span-2 px-4 py-3 text-white/70">ChatGPT / LLMs</div>
          <div className="col-span-2 px-4 py-3 text-white/70">Wellness Apps</div>
        </div>

        {/* Rows */}
        <ul className="divide-y divide-white/10">
          {FEATURE_ROWS.map((r, i) => (
            <li key={i} className="grid grid-cols-12 items-center text-sm">
              <div className="col-span-6 px-4 py-3 text-white/85">{r.label}</div>
              <div className="col-span-2 px-4 py-3"><Dot on={r.marty} /></div>
              <div className="col-span-2 px-4 py-3"><Dot on={r.llm} /></div>
              <div className="col-span-2 px-4 py-3"><Dot on={r.wellness} /></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ---------- Value Panel (image version) ----------
export function ValuePanel() {
  return (
    <section aria-labelledby="value-heading" className="mt-12">
      <h3 id="value-heading" className="mb-4 text-lg font-bold text-white/90">
        Why this makes money
      </h3>

      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10">
        <Image
          src="/branding/slide.png"
          alt="Why this makes money"
          fill
          priority
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}

// ---------- Default export (used on homepage) ----------
export default function WhyMartySection() {
  return (
    <section id="why-marty" className="w-full bg-black text-white" role="region" aria-labelledby="why-marty-heading">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 id="why-marty-heading" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          What MARTY is
        </h2>

        <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-white/85">
          <p>
            MARTY is a voice-first AI that acts like a trauma-smart older brother — blending DBT and
            executive-function design to turn reflection into daily action.
          </p>
          <p>No vibes. No generic affirmations. A clear persona plus tools that nudge real behavior change.</p>
        </div>

        {/* Comparison — cooler, clearer */}
        <ComparisonTable />

        {/* Value — why this makes money */}
        <ValuePanel />
      </div>
    </section>
  );
}