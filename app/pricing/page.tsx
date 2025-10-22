"use client";

export default function PricingPage() {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      description: "Start your reflection practice with essential features.",
      features: [
        "Basic journaling & reflection",
        "Daily prompts",
        "Limited memory retention",
      ],
      cta: "Get Started",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      name: "Pro",
      price: "$9.99/mo",
      description: "Unlock depth, customization, and AI-powered insight.",
      features: [
        "All Free features",
        "Voice journaling",
        "AI weekly reflection summaries",
        "Personalized room themes",
        "Priority support",
      ],
      cta: "Upgrade to Pro",
      gradient: "from-purple-500 to-blue-600",
    },
    {
      name: "Corporate / Schools",
      price: "Custom",
      description: "Empower your team or students with emotional accountability.",
      features: [
        "Multi-user dashboard",
        "Group analytics",
        "Custom onboarding & reports",
        "Dedicated admin portal",
      ],
      cta: "Contact Sales",
      gradient: "from-cyan-400 to-purple-600",
    },
  ];

  return (
    <section className="min-h-screen bg-[#0B0C0F] text-gray-100 flex flex-col items-center justify-center px-6 py-20">
      <h1 className="text-4xl sm:text-5xl font-semibold mb-4 text-center">
        Choose Your Plan
      </h1>
      <p className="text-gray-400 mb-12 max-w-xl text-center">
        MARTY ≠ THERAPY. But it helps you stay grounded, reflective, and
        accountable — wherever you are on your journey.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col justify-between bg-gradient-to-br ${tier.gradient} rounded-xl p-6 shadow-lg hover:scale-105 transition`}
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">{tier.name}</h2>
              <p className="text-gray-200 mb-4">{tier.price}</p>
              <p className="text-gray-300 mb-6 text-sm">{tier.description}</p>
              <ul className="space-y-2 mb-6 text-sm text-gray-100">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="text-purple-300">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full py-2 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition">
              {tier.cta}
            </button>
          </div>
        ))}
      </div>

      <p className="mt-12 text-xs text-gray-500 text-center">
        Built and founded by <span className="text-gray-300">Eric Adler</span>
      </p>
    </section>
  );
}