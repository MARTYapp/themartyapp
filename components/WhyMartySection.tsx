// app/components/WhyMartySection.tsx
// Drop into your repo, then <WhyMartySection /> wherever you want this block.
// Requires Tailwind. Optional (but recommended): `npm i framer-motion`
//
// Brand copy is embedded exactly as requested.

"use client";

import { motion, useReducedMotion } from "framer-motion";

type Item = { label: string };

const MARTY_POINTS: Item[] = [
  { label: 'Persona engine: steady "older-bro" voice, trauma-informed.' },
  { label: "Reflection > generation: flags loops, nudges action." },
  { label: "DBT + EF design: opposite action, timers, visual tools." },
  { label: "Cultural brand: gritty, cinematic, not corporate." },
  { label: "Memory schema for your journal → actionable patterns." },
];

const LLM_POINTS: Item[] = [
  { label: "General-purpose, neutral tone." },
  { label: "Great at text; not built for reflection loops." },
  { label: "No therapeutic frame or EF/DBT nudges." },
  { label: "No opinionated cultural identity." },
  { label: "Chat history ≠ structured emotional archive." },
];

const WELLNESS_POINTS: Item[] = [
  { label: "Pastel UI, guided journaling, generic affirmations." },
  { label: "Light on action; heavy on “vibes.”" },
  { label: "Often not neuro-inclusive for avoiders/overthinkers." },
  { label: "Limited pattern tracking across entries." },
  { label: "Corporate wellness tone → low emotional resonance." },
];

// Animation helpers
const makeFadeUp = (reduce: boolean) => (i = 0) =>
  reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.25 } } }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { delay: 0.05 * i, duration: 0.4, ease: "easeOut" } },
      };

export default function WhyMartySection() {
  const reduce = useReducedMotion();
  const fadeUp = makeFadeUp(reduce);
  // subtle glitch/pulse for the headline (disabled if reduced motion)
  const glitchAnim = reduce
    ? {}
    : {
        animate: {
          // tiny jitter + brightness pulse
          x: [0, 0.2, -0.2, 0],
          y: [0, -0.2, 0.2, 0],
          filter: ["brightness(1)", "brightness(1.15)", "brightness(1)", "brightness(1)"] as any,
        },
        transition: { duration: 2.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
      } as const;
  return (
    <section id="why-marty" className="relative w-full bg-black text-white" role="region" aria-labelledby="why-marty-heading">
      {/* cinematic background noise / sweeps */}
      <motion.div
        className="pointer-events-none absolute inset-0 mix-blend-screen opacity-70"
        aria-hidden
        style={{
          background:
            "radial-gradient(1200px 600px at 10% -10%, rgba(255,255,255,0.06), transparent 60%), radial-gradient(900px 500px at 110% 120%, rgba(0,153,255,0.08), transparent 60%)",
        }}
        initial={false}
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={reduce ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-[0.06]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-24">
        {/* Headline */}
        <motion.h2
          {...fadeUp()}
          id="why-marty-heading"
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          Not therapy. Not vibes.{" "}
          <motion.span
            aria-label="Why MARTY exists"
            className="whitespace-nowrap bg-white px-2 pb-1 text-black"
            {...glitchAnim}
          >
            Just MARTY.
          </motion.span>
        </motion.h2>

        {/* Manifesto Bridge (innovative layout) */}
        <motion.div
          role="article"
          initial="initial"
          animate="animate"
          className="relative mx-auto mt-10 grid max-w-5xl grid-cols-1 items-stretch gap-6 sm:mt-12 md:grid-cols-12"
        >
          {/* Left bar / label */}
          <div className="md:col-span-3">
            <div className="sticky top-6 flex flex-col gap-3 md:pt-2">
              <span aria-label="Why MARTY exists" className="w-fit rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/70">
                The Why
              </span>
              <div className="h-8 w-1 rounded-full bg-white/60 md:h-24" />
            </div>
          </div>

          {/* Copy block with staggered emphasis */}
          <div className="md:col-span-9">
            <motion.div
              role="article"
              initial="initial"
              animate="animate"
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
            >
              <ManifestoLine i={0}>
                <span className="text-white/85">MARTY is not therapy and it’s not a vibe app.</span>{" "}
                It’s the first{" "}
                <strong className="bg-white px-1 text-black">action-oriented, trauma-smart, AI companion</strong>{" "}
                built for the people who fall through the cracks of wellness and mental health.
              </ManifestoLine>

              <ManifestoDivider />

              <ManifestoLine i={1}>
                Where other platforms give you{" "}
                <strong className="underline decoration-white/40 underline-offset-4">generic affirmations</strong> or{" "}
                <strong className="underline decoration-white/40 underline-offset-4">neutral chatbots</strong>, MARTY
                uses a <strong>persona engine</strong> — a steady, older-brother voice that’s trauma-informed — combined
                with <strong>DBT + executive function design</strong> to nudge real behavior change.
              </ManifestoLine>

              <ManifestoDivider />

              <ManifestoLine i={2}>
                Think of it as the{" "}
                <strong className="bg-white px-1 text-black">gritty, cinematic alternative</strong> to pastel self-care
                apps and corporate wellness platforms.
              </ManifestoLine>

              {/* Footer strip */}
              <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-widest">
                <span className="text-white/50">Reflection AI for Action</span>
                <span aria-hidden="true" className="hidden sm:inline">•</span>
                <span className="text-white/60">MARTY ≠ THERAPY</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contrast Grid */}
        <motion.div {...fadeUp(4)} className="relative mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card title="MARTY" badge="Wins" tone="dominant" points={MARTY_POINTS} kicker="Persona • DBT/EF • Action" />
          <Card title="ChatGPT / LLMs" badge="Different" tone="muted" points={LLM_POINTS} kicker="General-purpose" />
          <Card title="Wellness Apps" badge="Old Playbook" tone="muted" points={WELLNESS_POINTS} kicker="Vibes-first" />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Subcomponents ---------- */

function ManifestoLine({ children, i = 0 }: { children: React.ReactNode; i?: number }) {
  const reduce = useReducedMotion();
  const variants = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.25 } } }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { delay: 0.05 * i, duration: 0.4, ease: "easeOut" } } };
  return (
    <motion.p
      {...variants}
      className="mb-5 text-lg leading-relaxed text-white/80 md:text-[1.15rem]"
    >
      {children}
    </motion.p>
  );
}

function ManifestoDivider() {
  return <div className="my-5 h-px w-full bg-gradient-to-r from-white/10 via-white/30 to-white/10" />;
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
          ? "border-white/30 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_18px_60px_-20px_rgba(0,153,255,0.45)]"
          : "border-white/10 bg-white/[0.03]",
      ].join(" ")}
    >
      {/* glow / edge */}
      {dominant && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-2xl ring-1 ring-inset ring-white/20 [mask-image:radial-gradient(350px_200px_at_10%_-10%,black,transparent)]"
        />
      )}

      <div className="mb-5 flex items-center justify-between">
        <h3 className={["text-2xl font-black tracking-tight", dominant ? "text-white" : "text-white/85"].join(" ")}>
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

      <ul className="space-y-3">
        {points.map((p, i) => (
          <li key={i} className="flex gap-3">
            <span
              className={["mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-sm", dominant ? "bg-white" : "bg-white/30"].join(
                " ",
              )}
            />
            <span className={dominant ? "text-white/95" : "text-white/70"}>{p.label}</span>
          </li>
        ))}
      </ul>

      {kicker && (
        <div className="mt-6 flex items-center justify-between">
          <span className={dominant ? "text-xs text-white/70" : "text-xs text-white/40"}>{kicker}</span>
          {dominant && (
            <span className="text-[10px] font-semibold uppercase tracking-widest text-white/60 transition group-hover:text-white/80">
              MARTY ≠ THERAPY
            </span>
          )}
        </div>
      )}
    </div>
  );
}