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
      gradient: "bg-gradient-to-tr from-marty-steel to-marty-bg"
    },
    {
      name: "Pro",
      price: "$9.99/mo",
      features: [
        "All Free features",
        "Deeper memory & analytics",
        "Custom persona/theme options",
        "Priority support"
      ],
      cta: "Upgrade to Pro",
      gradient: "bg-gradient-to-tr from-purple-500 to-pink-500"
    },
    {
      name: "Premium Courses",
      price: "Per Program",
      features: [
        "Structured skill courses",
        "6-week DBT bootcamps",
        "Sleep, focus, relationships modules",
        "Voice-guided reflection"
      ],
      cta: "Enroll Now",
      gradient: "bg-gradient-to-tr from-cyan-400 to-purple-600"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          Pricing
        </h1>
        <p className="text-lg text-white/70 mb-16">
          Simple, transparent plans for reflection and action. Start free, upgrade for more power, or unlock structured courses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <section key={tier.name} aria-label={tier.name} className={`rounded-2xl p-6 flex flex-col items-center transition-transform transform hover:scale-[1.03] ${tier.gradient} border border-white/10`}>
              <h2 className="text-2xl font-bold mb-2">{tier.name}</h2>
              <p className="text-3xl font-extrabold mb-4">{tier.price}</p>
              <ul className="mb-6 space-y-2 text-white/80">
                {tier.features.map((f) => (
                  <li key={f} className="before:content-['•'] before:text-gold before:mr-2">
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="btn-square bg-white text-black px-6 py-3 font-bold hover:bg-black hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                {tier.cta}
              </button>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}