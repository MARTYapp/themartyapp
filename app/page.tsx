// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import WhyMarty from "@/components/WhyMarty";
import FAQ from "@/components/FAQ";

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
            Quiet tech for loud minds. Not a therapist. Not a vibe app. Just MARTY.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="#journal" className="btn btn-primary">Try Marty Now</Link>
            <Link href="#fund" className="btn btn-outline">Fund Marty</Link>
          </div>

          <div className="mt-10 text-xs text-white/50">scroll</div>
        </div>
      </section>

      <WhyMarty />

      <FAQ compact />

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
            Every dollar goes straight into building MARTY — servers, prototypes, survival. No VC filter. Just you + the founder making this real.
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