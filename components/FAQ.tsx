// components/FAQ.tsx
import Link from "next/link";

type FAQItem = { q: string; a: string };

const FAQS: FAQItem[] = [
  {
    q: "How is this different from ChatGPT?",
    a: "MARTY is not a general chatbot. It runs a repeatable reflection loop (prompt → label pattern → DBT/EF nudge → one next step). Short, steady, and practical vs. long essay replies.",
  },
  {
    q: "Is this therapy?",
    a: "No. MARTY ≠ THERAPY. It’s a reflection and momentum tool inspired by DBT and Executive Functioning—helpful structure and nudges, not diagnosis or treatment.",
  },
  {
    q: "Who is this for?",
    a: "Avoiders, overthinkers, night‑shift minds—anyone who wants momentum without the pastel 'vibes.' Voice‑first optional, low‑friction UI, plain language.",
  },
  {
    q: "Why pay for MARTY?",
    a: "You’re paying for a consistent persona engine + pattern memory. It tracks loops over time, surfaces distortions, and turns entries into tiny, timed actions that actually move you forward.",
  },
  {
    q: "What happens to my data?",
    a: "Your journal belongs to you. We avoid creepy trackers. Encrypted in transit/at rest when stored. Export and deletion are priorities as we ship versions; we never sell your data.",
  },
  {
    q: "Can I use my voice instead of typing?",
    a: "Yes. Voice‑first is a core path—speak your entry, get a tight summary + nudge. Great for exhaustion, ADHD brains, and late‑night sessions.",
  },
  {
    q: "What makes MARTY feel different?",
    a: "A steady older‑bro voice, gritty/brutalist brand, and no‑fluff coaching. Less wellness‑poster, more real human cadence. It feels lived‑in, not HR software.",
  },
  {
    q: "I’m in crisis—should I use MARTY?",
    a: "If you’re in immediate danger or considering self‑harm, call your local emergency number or a crisis hotline (e.g., 988 in the U.S.). MARTY is not a crisis service.",
  },
  {
    q: "What’s the roadmap?",
    a: "Pattern Recognizer v1, DBT/EF visual tools, session memory, timeline view, and lightweight goals. Then HIPAA‑aware therapist dashboards and B2B licensing.",
  },
  {
    q: "How do I start?",
    a: "Open the Journal, type or speak one raw sentence, hit enter. MARTY will reflect it back, name a pattern, and ask for one 10‑minute next step. Timer on.",
  },
];

export default function FAQ({ compact = false }: { compact?: boolean }) {
  // compact=false → fuller grid for the /faq page
  // compact=true  → tighter grid for homepage sections
  return (
    <section id="faq" className="py-16 px-6 bg-black">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">FAQ</h2>

        <div className={`grid gap-6 ${compact ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
          {FAQS.map((item) => (
            <article
              key={item.q}
              className="rounded-2xl border border-white/10 bg-white/[.04] p-5"
            >
              <h3 className="font-semibold mb-2">{item.q}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{item.a}</p>
            </article>
          ))}
        </div>

        {compact && (
          <div className="mt-8">
            <Link
              href="/faq"
              className="text-sm underline underline-offset-4 text-white/80 hover:text-white"
            >
              Read the full FAQ →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}