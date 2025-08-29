"use client";

import { useEffect, useState } from "react";

export type FAQItem = {
  id: string;
  q: string;
  a: string;
};

const DEFAULT_FAQ: FAQItem[] = [
  {
    id: "what-is-marty",
    q: "What is MARTY?",
    a: "MARTY is an action‑oriented, trauma‑smart AI companion. It blends a steady, older‑bro voice with DBT + executive‑function design to nudge real behavior change. MARTY ≠ therapy and ≠ vibe apps.",
  },
  {
    id: "is-this-therapy",
    q: "Is this therapy?",
    a: "No. MARTY is not a therapist and not a replacement for licensed care. It’s a reflection AI for action — think: practical tools, nudges, and pattern‑spotting that complement, not replace, professional help.",
  },
  {
    id: "who-is-it-for",
    q: "Who is it for?",
    a: "For the ones who fall through the cracks — the avoiders, the overthinkers, the ED crew (executive-dysfunction). If pastel wellness apps never stuck, MARTY will."
  },
  {
    id: "privacy",
    q: "How does MARTY handle my data?",
    a: "We store as little as possible, encrypted in transit and at rest. You control your data. Deletion means deletion. We’ll publish a plain‑language privacy page before wide beta.",
  },
  {
    id: "pricing",
    q: "How much will it cost?",
    a: "Founders’ beta is free while we build core loops. Later: a simple paid plan that unlocks deeper memory, pattern analytics, and premium tools. No dark patterns.",
  },
  {
    id: "timeline",
    q: "When can I try it?",
    a: "We’re shipping a gritty, working prototype first — then iterating fast. Join the beta list and you’ll get early access as we roll features live.",
  },
];

function useHash(): string | null {
  const [hash, setHash] = useState<string | null>(null);
  useEffect(() => {
    const update = () => setHash(window.location.hash.replace(/^#/, "") || null);
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  return hash;
}

export default function FAQ({ compact = false, items = DEFAULT_FAQ }: { compact?: boolean; items?: FAQItem[] }) {
  const hash = useHash();
  const grid = compact
    ? "grid grid-cols-1 gap-3"
    : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6";

  return (
    <section id="faq" className="relative w-full bg-black text-white border-t border-white/10" aria-labelledby="faq-heading">
      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <header className="max-w-3xl">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Frequently Asked
          </h2>
          <p className="mt-3 text-base sm:text-lg text-white/70">
            No corporate fluff. If you don’t see your question, DM and we’ll add it.
          </p>
        </header>

        <div className={`mt-10 ${grid}`}>
          {items.map((it) => (
            <details
              key={it.id}
              id={it.id}
              open={hash === it.id}
              className="group rounded-2xl border border-white/12 bg-white/[0.035] p-0 backdrop-blur-[1px] transition-colors hover:bg-white/[0.05] focus-within:bg-white/[0.05]"
            >
              <summary
                className="flex w-full cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                <span className="text-base sm:text-lg font-semibold leading-snug text-white/95">
                  {it.q}
                </span>
                <Chevron className="h-5 w-5 text-white/60 transition-transform group-open:rotate-45" />
              </summary>

              <div className="px-5 pb-5">
                <div className="max-w-prose text-[0.98rem] leading-7 text-white/80">
                  {it.a}
                </div>
                <div className="mt-4 text-[11px] uppercase tracking-widest text-white/40">
                  <a href={`#${it.id}`} className="hover:text-white/70">Link</a>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}