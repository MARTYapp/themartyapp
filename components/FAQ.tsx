// components/FAQ.tsx
export default function FAQ() {
  const faqs = [
    {
      q: "How is this different from ChatGPT?",
      a: "ChatGPT generates text; MARTY reflects your patterns and nudges action. MARTY is a consistent persona (older-bro voice) with DBT/EF scaffolding—timers, opposite action, tiny steps.",
    },
    {
      q: "Is this therapy?",
      a: "No. MARTY ≠ THERAPY. Not a therapist, not a diagnosis tool. It’s a reflection loop + practical nudges to get you unstuck. Use therapy if you need clinical care.",
    },
    {
      q: "Why pay for MARTY?",
      a: "You’re paying for a persona engine that tracks your loops over time, structures your journal into an emotional archive, and gives you no-fluff DBT-style actions that actually move you forward.",
    },
    {
      q: "Is my data private?",
      a: "Your journal belongs to you. Encrypted at rest/in transit. Export or delete anytime. We never sell your data.",
    },
  ];
  return (
    <section className="py-16 px-6 bg-black">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tighter mb-8">FAQ</h1>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <details key={i} className="rounded-xl border border-white/10 bg-white/[.04] p-4">
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-3 text-white/80 text-sm leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
