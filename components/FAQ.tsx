"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export type FAQItem = {
  id: string; // stable id for deep-linking
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
    a: "The ones who fall through the cracks: avoiders, overthinkers, the executive‑dysfunction crew, the Quiet Bros™. If pastel wellness apps never stuck for you, MARTY’s for you.",
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

function useHashOpen() {
  const [hash, setHash] = useState<string | null>(null);
  useEffect(() => {
    const onHash = () => setHash(window.location.hash.replace(/^#/, "") || null);
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return hash;
}

export default function FAQ({ compact = false, items = DEFAULT_FAQ }: { compact?: boolean; items?: FAQItem[] }) {
  const hash = useHashOpen();
  const reduce = useReducedMotion();

  const [query, setQuery] = useState("");
  const [openSignal, setOpenSignal] = useState(0);
  const [closeSignal, setCloseSignal] = useState(0);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.trim().toLowerCase();
    return items.filter((it) => it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q));
  }, [items, query]);

  const highlight = useCallback((text: string) => {
    const q = query.trim();
    if (!q) return text;
    const idx = text.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return text;
    const before = text.slice(0, idx);
    const match = text.slice(idx, idx + q.length);
    const after = text.slice(idx + q.length);
    return (
      <>
        {before}
        <mark className="bg-white text-black px-0.5 rounded-sm">{match}</mark>
        {after}
      </>
    );
  }, [query]);

  // Precompute JSON-LD for SEO
  const jsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }), [items]);

  const gridClasses = compact
    ? "grid grid-cols-1 gap-3"
    : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6";

  return (
    <section id="faq" className="relative w-full bg-black text-white border-t border-white/10" aria-labelledby="faq-heading">
      {/* optional ambient */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(1200px_600px_at_110%_10%,rgba(255,255,255,0.05),transparent_60%)]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 id="faq-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Frequently Asked — Answered Like a Human
        </h2>
        <p className="mt-3 max-w-2xl text-white/70">
          No corporate fluff. If you don’t see your question, DM and we’ll add it.
        </p>

        {/* Controls: Search + Expand/Collapse */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <label className="relative block w-full sm:max-w-md">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions…"
              className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/30"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/50">⌘K</span>
          </label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpenSignal((n) => n + 1)}
              className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-xs uppercase tracking-widest text-white/80 hover:bg-white/10"
            >
              Expand all
            </button>
            <button
              onClick={() => setCloseSignal((n) => n + 1)}
              className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-xs uppercase tracking-widest text-white/80 hover:bg-white/10"
            >
              Collapse all
            </button>
          </div>
        </div>

        <div className={`mt-10 ${gridClasses}`}>
          {filteredItems.map((it, idx) => (
            <FAQCard
              key={it.id}
              item={it}
              defaultOpen={hash === it.id}
              reduce={reduce}
              index={idx}
              openSignal={openSignal}
              closeSignal={closeSignal}
              highlightFn={highlight}
            />
          ))}
        </div>

        {/* SEO JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </div>
    </section>
  );
}

function CopyRow({ anchor }: { anchor: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      const url = typeof window !== 'undefined' ? window.location.origin + window.location.pathname + anchor : anchor;
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };
  return (
    <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-widest text-white/40">
      <a href={anchor} className="hover:text-white/70">Link</a>
      <button onClick={copy} className="rounded px-2 py-1 hover:text-white/70">
        {copied ? 'Copied' : 'Copy link'}
      </button>
    </div>
  );
}

function FAQCard({ item, defaultOpen = false, reduce, index, openSignal, closeSignal, highlightFn }: { item: FAQItem; defaultOpen?: boolean; reduce: boolean; index: number; openSignal: number; closeSignal: number; highlightFn: (text: string) => React.ReactNode; }) {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  useEffect(() => {
    if (defaultOpen) setOpen(true);
  }, [defaultOpen]);

  useEffect(() => {
    if (openSignal) setOpen(true);
  }, [openSignal]);
  useEffect(() => {
    if (closeSignal) setOpen(false);
  }, [closeSignal]);

  // Smooth height animation
  const variants = reduce
    ? { collapsed: { opacity: 0 }, expanded: { opacity: 1 } }
    : {
        collapsed: { opacity: 0, height: 0 },
        expanded: { opacity: 1, height: 'auto', transition: { duration: 0.28, ease: 'easeOut' } },
      };

  const anchor = `#${item.id}`;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.03] hover:bg-white/[0.05] transition">
      <button
        id={item.id}
        aria-controls={`${item.id}-panel`}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left"
      >
        <span className="text-base font-semibold leading-snug sm:text-lg">
          {highlightFn(item.q)}
        </span>
        <span
          className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/20 bg-white/5 text-xs text-white/70 group-hover:text-white/90"
          aria-hidden="true"
        >
          <motion.span
            initial={false}
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.18 }}
          >
            +
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            id={`${item.id}-panel`}
            role="region"
            aria-labelledby={item.id}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={variants}
            className="px-5 pb-5"
          >
            <div className="text-white/75 leading-relaxed">
              {highlightFn(item.a)}
            </div>
            <CopyRow anchor={anchor} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}