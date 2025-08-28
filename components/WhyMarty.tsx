// components/WhyMarty.tsx
import Link from "next/link";

export default function WhyMarty() {
  return (
    <section id="why" className="relative py-20 px-6 bg-black">
      <div className="mx-auto max-w-5xl">
        <header className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            Why MARTY is Special
          </h2>
          <p className="mt-3 text-white/70">
            What ChatGPT can’t do. What wellness apps won’t do.
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.03]">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <article className="p-6">
              <h3 className="text-2xl font-semibold mb-3">MARTY</h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li>• <strong>Persona engine</strong>: steady “older-bro” voice, trauma-informed.</li>
                <li>• <strong>Reflection &gt; generation</strong>: flags loops, nudges action.</li>
                <li>• <strong>DBT + EF design</strong>: opposite action, timers, visual tools.</li>
                <li>• <strong>Cultural brand</strong>: gritty, cinematic, not corporate.</li>
                <li>• <strong>Memory schema</strong> for your journal → actionable patterns.</li>
              </ul>
            </article>

            <article className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-white/85">ChatGPT / LLMs</h3>
              <ul className="space-y-3 text-sm text-white/60">
                <li>• General-purpose, neutral tone.</li>
                <li>• Great at <em>text</em>, not built for reflection loops.</li>
                <li>• No therapeutic frame or EF/DBT nudges.</li>
                <li>• No opinionated cultural identity.</li>
                <li>• Chat history ≠ structured emotional archive.</li>
              </ul>
            </article>

            <article className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-white/85">Wellness Apps</h3>
              <ul className="space-y-3 text-sm text-white/60">
                <li>• Pastel UI, guided journaling, generic affirmations.</li>
                <li>• Light on action; heavy on “vibes.”</li>
                <li>• Often not neuro-inclusive for avoiders/overthinkers.</li>
                <li>• Limited pattern tracking across entries.</li>
                <li>• Corporate wellness tone → low emotional stickiness.</li>
              </ul>
            </article>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[.04] p-5">
            <div className="text-xs uppercase tracking-widest text-white/50 mb-2">Reflection Loop</div>
            <p className="text-sm text-white/80">
              Every entry updates your <strong>pattern profile</strong> (loops, distortions, trends) and feeds DBT-style nudges.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[.04] p-5">
            <div className="text-xs uppercase tracking-widest text-white/50 mb-2">Neuro-inclusive</div>
            <p className="text-sm text-white/80">
              Tiny steps, timers, opposite action prompts, voice-first journaling. Built for the people most apps lose.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[.04] p-5">
            <div className="text-xs uppercase tracking-widest text-white/50 mb-2">Cultural Stickiness</div>
            <p className="text-sm text-white/80">
              Brutalist merch, subway-poster identity, cinematic motion. It feels <em>lived-in</em>, not HR-mandated.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="#journal" className="btn btn-primary">Try MARTY</Link>
          <Link href="#fund" className="btn btn-outline">Fund the Founder</Link>
        </div>
      </div>
    </section>
  );
}
