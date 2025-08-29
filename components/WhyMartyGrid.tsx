// app/components/WhyMartyGrid.tsx
import { JSX } from "react";

type Item = { label: string; icon?: JSX.Element };

const Marty: Item[] = [
  { label: 'Persona engine: steady “older-bro” voice, trauma-informed.' },
  { label: 'Reflection > generation: flags loops, nudges action.' },
  { label: 'DBT + EF design: opposite action, timers, visual tools.' },
  { label: 'Cultural brand: gritty, cinematic, not corporate.' },
  { label: 'Memory schema → actionable patterns.' },
];

const LLMs: Item[] = [
  { label: 'General-purpose, neutral tone.' },
  { label: 'Great at text; not built for reflection loops.' },
  { label: 'No therapeutic frame or EF/DBT nudges.' },
  { label: 'No opinionated cultural identity.' },
  { label: 'Chat history ≠ structured emotional archive.' },
];

const Wellness: Item[] = [
  { label: 'Pastel UI, guided journaling, generic affirmations.' },
  { label: 'Light on action; heavy on “vibes.”' },
  { label: 'Often not neuro-inclusive for avoiders/overthinkers.' },
  { label: 'Limited pattern tracking across entries.' },
  { label: 'Corporate tone → low emotional resonance.' },
];

export default function WhyMartyGrid() {
  return (
    <section className="relative w-full border-t border-white/10 bg-black">
      {/* optional background layers if you already use them */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(1200px_600px_at_10%_-10%,rgba(255,255,255,0.06),transparent_60%),radial-gradient(900px_500px_at_110%_120%,rgba(0,153,255,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Not therapy. Not vibes. <span className="inline-block bg-white text-black px-2 pb-0.5">Just MARTY.</span>
          </h2>
          <span className="text-xs uppercase tracking-widest text-white/50">theMARTYapp.com</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* MARTY column — dominant */}
          <Card
            title="MARTY"
            tone="dominant"
            points={Marty}
            kicker="Persona • DBT/EF • Action"
            badge="Wins"
          />

          {/* ChatGPT / LLMs — neutral/muted */}
          <Card
            title="ChatGPT / LLMs"
            tone="muted"
            points={LLMs}
            kicker="General-purpose"
            badge="Different"
          />

          {/* Wellness Apps — muted */}
          <Card
            title="Wellness Apps"
            tone="muted"
            points={Wellness}
            kicker="Vibes-first"
            badge="Old Playbook"
          />
        </div>
      </div>
    </section>
  );
}

function Card({
  title,
  points,
  tone = "muted",
  kicker,
  badge,
}: {
  title: string;
  points: Item[];
  tone?: "dominant" | "muted";
  kicker?: string;
  badge?: string;
}) {
  const dominant = tone === "dominant";
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl border p-6 sm:p-8",
        dominant
          ? "border-white/30 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_10px_40px_-10px_rgba(0,153,255,0.35)]"
          : "border-white/10 bg-white/[0.03]",
      ].join(" ")}
    >
      {/* glow edge for MARTY */}
      {dominant && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20 [mask-image:radial-gradient(350px_200px_at_10%_-10%,black,transparent)]" />
      )}

      <div className="mb-5 flex items-center justify-between">
        <h3 className={["text-2xl font-black tracking-tight",
          dominant ? "text-white" : "text-white/80"].join(" ")}>
          {title}
        </h3>
        {badge && (
          <span
            className={[
              "rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",
              dominant ? "bg-white text-black" : "bg-white/10 text-white/70",
            ].join(" ")}
          >
            {badge}
          </span>
        )}
      </div>

      {/* bullet list */}
      <ul className="space-y-3">
        {points.map((p, i) => (
          <li key={i} className="flex gap-3">
            {/* icon */}
            <span
              className={[
                "mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-sm",
                dominant ? "bg-white" : "bg-white/30",
              ].join(" ")}
            />
            <span className={dominant ? "text-white/95" : "text-white/70"}>
              {p.label}
            </span>
          </li>
        ))}
      </ul>

      {/* footer kicker */}
      {kicker && (
        <div className="mt-6 flex items-center justify-between">
          <span className={dominant ? "text-xs text-white/70" : "text-xs text-white/40"}>
            {kicker}
          </span>
          {dominant && (
            <span className="text-[10px] font-semibold uppercase tracking-widest text-white/60 group-hover:text-white/80 transition">
              MARTY ≠ THERAPY
            </span>
          )}
        </div>
      )}
    </div>
  );
}