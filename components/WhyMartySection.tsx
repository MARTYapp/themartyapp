// app/components/WhyMartySection.tsx
"use client";

export default function WhyMartySection() {
  return (
    <section id="why-marty" className="w-full bg-black text-white" role="region" aria-labelledby="why-marty-heading">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 id="why-marty-heading" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          What MARTY is
        </h2>

        <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-white/85">
          <p>
            MARTY is a voice-first AI that acts like a trauma-smart older brother — blending DBT and executive-function
            design to turn reflection into daily action.
          </p>
          <p>No vibes. No generic affirmations. A clear persona plus tools that nudge real behavior change.</p>
        </div>

        {/* Comparison — cooler, clearer */}
        <ComparisonTable />

        {/* Value — why this prints money */}
        <ValuePanel />
      </div>
    </section>
  );
}

/* ---------- Comparison & Value Components ---------- */

type FeatureRow = {
  label: string;
  marty: boolean;
  llm: boolean;
  wellness: boolean;
  note?: string;
};

const FEATURE_ROWS: FeatureRow[] = [
  { label: "Persona engine (trauma-smart, older-bro tone)", marty: true, llm: false, wellness: false },
  { label: "DBT + EF scaffolds (opposite action, timers, nudges)", marty: true, llm: false, wellness: false },
  { label: "Pattern memory across entries (loop detection)", marty: true, llm: false, wellness: true },
  { label: "Voice-first journaling & reflection UX", marty: true, llm: false, wellness: true },
  { label: "Cinematic brand with cultural edge", marty: true, llm: false, wellness: false },
  { label: "Generic text generation", marty: true, llm: true, wellness: false },
];

function Dot({ on }: { on: boolean }) {
  return (
    <span
      aria-hidden
      className={[
        "inline-block h-2.5 w-2.5 rounded-sm align-middle",
        on ? "bg-white" : "bg-white/25",
      ].join(" ")}
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

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-lg border border-white/10 p-4">
      <div className="text-xs uppercase tracking-[0.18em] text-white/50">{label}</div>
      <div className="mt-1 text-2xl font-extrabold">{value}</div>
      {sub && <div className="mt-1 text-xs text-white/60">{sub}</div>}
    </div>
  );
}

function ValuePanel() {
  return (
    <section aria-labelledby="value-heading" className="mt-12">
      <h3 id="value-heading" className="mb-4 text-lg font-bold text-white/90">Why this has $$ value</h3>

      {/* Stats tied to MARTY's KPI definition */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Stat
          label="Retention North Star"
          value="3×8×3"
          sub="3 sessions/week · 8 min min · 3 weeks — your 'returning user' KPI"
        />
        <Stat
          label="Monetization Stack"
          value="4 streams"
          sub="Premium plan · Merch/affiliates · Coaching/Groups · B2B Modules"
        />
        <Stat
          label="Brand Advantage"
          value="High signal"
          sub="Gritty, cinematic identity → cuts through pastel sameness → higher willingness to pay"
        />
      </div>

      {/* Narrative bullets */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-white/10 p-4">
          <h4 className="mb-2 text-sm font-semibold text-white/80">Conversion levers</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>• Persona fit for avoiders/overthinkers → higher day-7 activation vs. generic bots</li>
            <li>• DBT/EF scaffolds turn reflection → tasks → streaks</li>
            <li>• Cinematic brand & voice → referral-friendly content (clips, quotes, rooms)</li>
          </ul>
        </div>
        <div className="rounded-lg border border-white/10 p-4">
          <h4 className="mb-2 text-sm font-semibold text-white/80">Revenue levers</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>• Premium: advanced modules, voice logs, pattern reports</li>
            <li>• Merch & affiliate: “MARTY ≠ THERAPY” drops + tools → direct margin</li>
            <li>• B2B: team resilience / EF toolkit licensing</li>
          </ul>
        </div>
      </div>
    </section>
  );
}