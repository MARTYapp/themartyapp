// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-marty-bg text-white">
      {/* === HERO === */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* BG layers */}
        <div className="absolute inset-0 bg-hero-texture" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
        <div className="noise" />
        <div className="sweep" aria-hidden />

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
          {/* Logo above heading */}
          <Image
            src="/branding/logo-primary.png"
            alt="the MARTY app"
            width={220}
            height={220}
            priority
            className="mb-6"
          />

          {/* Wordmark headline */}
          <h1 className="text-[clamp(42px,9vw,112px)] leading-none font-extrabold tracking-tighter drop-shadow-glow">
            MARTY <span className="align-[12%] text-white/85">≠</span> THERAPY
          </h1>
          <p className="mt-3 text-[clamp(18px,3.5vw,34px)] font-semibold">Just MARTY</p>

          {/* Tagline */}
          <p className="mt-6 max-w-2xl text-white/75 text-[clamp(14px,2.6vw,18px)] leading-relaxed">
            Quiet tech for loud minds. Built for the avoiders, the overthinkers, and the night-crawlers.
            Not your therapist. Not your dad. Just MARTY.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="#journal" className="btn btn-primary">Try Marty Now</Link>
            <Link href="#fund" className="btn btn-outline">Fund Marty</Link>
          </div>

          <div className="mt-10 text-xs text-white/50">scroll</div>
        </div>
      </section>

      {/* === MEET MARTY AI === */}
      <section id="meet" className="relative py-20 px-6 bg-gradient-to-b from-black to-marty-bg">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tighter">Meet MARTY AI</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
            Your emotionally steady, trauma-informed digital bro. Voice-first. Neuro-inclusive.
            When you journal with MARTY, you’re not just venting — you’re in an interactive reflection loop
            where real tools meet real talk.
          </p>

          {/* “Fight card” feature grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-3 text-left">
            <article className="card">
              <div className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Round 1</div>
              <h3 className="text-2xl font-semibold mb-2">🧠 Pattern Recognizer</h3>
              <p className="text-white/75 text-sm leading-relaxed">
                Flags mental loops, distorted thoughts, and recurring narratives — so you can break the cycle and rewire them.
              </p>
            </article>

            <article className="card">
              <div className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Round 2</div>
              <h3 className="text-2xl font-semibold mb-2">📓 DBT + EF Visualizer</h3>
              <p className="text-white/75 text-sm leading-relaxed">
                Visual coaching rooted in DBT + Executive Functioning — calm your chaos and add structure you can stick to.
              </p>
            </article>

            <article className="card">
              <div className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Round 3</div>
              <h3 className="text-2xl font-semibold mb-2">🪞 Backward Review Journaling</h3>
              <p className="text-white/75 text-sm leading-relaxed">
                One day at a time. No judgment. Debriefs that make your story feel seen — and your patterns beatable.
              </p>
            </article>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="#journal" className="btn btn-primary">Try MARTY</Link>
            <Link href="#fund" className="btn btn-outline">Fund MARTY</Link>
          </div>
        </div>
      </section>

      {/* === POSTER BANNER === */}
      <section className="relative py-16 px-6 bg-black">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-white/[.04] p-8 sm:p-12 text-center">
          <div className="absolute inset-0 noise" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.06),transparent_60%)]" />
          <h3 className="text-[clamp(40px,8.5vw,100px)] font-extrabold leading-none tracking-tighter">
            MARTY <span className="align-[12%] text-white/80">≠</span> THERAPY
          </h3>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">Quiet tech for loud minds.</p>
        </div>
      </section>

      {/* === JOURNAL DEMO === */}
      <section id="journal" className="relative py-20 px-6 bg-black">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold mb-6 tracking-tighter">Your MARTY Journal</h3>
          <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
            <input
              placeholder="Type your thought…"
              className="w-full rounded-xl bg-black/40 px-4 py-3 outline-none placeholder:text-white/40"
            />
            <div className="mt-3 flex justify-end gap-3">
              <Link href="/journal" className="btn btn-primary">Open Full Journal</Link>
              <a
                href="https://buymeacoffee.com/ericadler"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Fund This Build
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* === FUND CTA === */}
      <section id="fund" className="relative py-20 px-6 bg-gradient-to-b from-marty-bg to-black">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-3xl font-bold mb-4 tracking-tighter">Fund the Founder</h3>
          <p className="text-white/80 max-w-xl mx-auto">
            Every dollar goes straight into building MARTY — servers, prototypes, design, survival. Thank you. 🙏
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/fund" className="btn btn-primary">Stripe / Checkout</Link>
            <a
              href="https://buymeacoffee.com/ericadler"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Buy Me a Coffee
            </a>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="border-t border-white/10 text-center text-xs text-white/60 py-8">
        MARTY ≠ THERAPY — Not a therapist. Not a vibe app. Just MARTY.
      </footer>
    </main>
  );
}