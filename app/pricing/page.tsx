// app/pricing/page.tsx
"use client";

export default function PricingPage() {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      features: [
        "Basic journaling & reflection",
        "Limited coaching prompts",
        "Loop detection"
      ],
      cta: "Get Started",
      gradient: "bg-gradient-to-tr from-gray-700 to-gray-900"
    },
    {
      name: "MARTY+",
      price: "$9.99/mo",
      features: [
        "All Free features",
        "Deeper memory & analytics",
        "Custom persona/theme options",
        "Priority support"
      ],
      cta: "Upgrade to MARTY+",
      gradient: "bg-gradient-to-tr from-red-700 to-red-900"
    },
    {
      name: "DBT Bootcamps",
      price: "Per Program",
      features: [
        "Structured skill courses",
        "6-week DBT bootcamps",
        "Sleep, focus, relationships modules",
        "Voice-guided reflection"
      ],
      cta: "Enroll Now",
      gradient: "bg-gradient-to-tr from-indigo-700 to-violet-900"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 font-sans">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent leading-tight">
          Pricing
        </h1>
        <h2 className="text-lg text-white/50 mb-8 italic font-light tracking-wide">
          Not a subscription. A choice.
        </h2>
        <p className="text-lg text-white/60 mb-16 max-w-xl mx-auto font-light tracking-wide">
          Your mind, your move. MARTY meets you where you are — free, focused, or fully in.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {tiers.map((tier) => (
            <section
              key={tier.name}
              aria-label={tier.name}
              className={`rounded-3xl p-8 flex flex-col items-center transition-transform transform hover:scale-[1.05] hover:shadow-lg ${tier.gradient} border border-white/20 cursor-pointer`}
              style={{ willChange: 'transform' }}
            >
              <h2 className="text-3xl font-semibold mb-3 tracking-wide">{tier.name}</h2>
              <p className="text-4xl font-extrabold mb-6 tracking-tight">{tier.price}</p>
              <ul className="mb-8 space-y-3 text-white/80 text-left w-full max-w-xs text-sm leading-relaxed">
                {tier.features.map((f) => (
                  <li key={f} className="before:content-['•'] before:text-red-400 before:mr-3">
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="btn-square bg-white text-black px-8 py-4 font-semibold hover:bg-black hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-lg"
              >
                {tier.cta}
              </button>
            </section>
          ))}
        </div>
        <p className="mt-12 text-center text-white/40 text-xs max-w-md mx-auto tracking-wide font-light">
          All plans include emotional privacy, no data tracking, and lifetime access to your reflections.
        </p>
      </div>
    </main>
  );
}