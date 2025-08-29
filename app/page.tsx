import Image from "next/image";
import Link from "next/link";
import WhyMarty from "@/components/WhyMarty";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-marty-bg text-white">
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-black">
        {/* BG layers */}
        <div className="noise" aria-hidden />
        <div className="sweep" aria-hidden />

        {/* SEO H1 (screen-reader only) */}
        <h1 className="sr-only">The MARTY App — MARTY ≠ THERAPY</h1>

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
          {/* Primary logo */}
          <Image
            src="/branding/logo-primary.png"
            alt="The MARTY App primary logo"
            width={220}
            height={220}
            priority
            className="mb-6" />

          {/* One-line wordmark: MARTY ≠ THERAPY */}
          <Image
            // NOTE: if your filename includes the combining slash character, this UTF-8 path should still work.
            // If it 404s on deploy, rename the asset to a safe slug and update this path.
            src="/branding/Logo-MARTYnotTHERAPY.png"
            alt="MARTY ≠ THERAPY wordmark"
            width={1200}
            height={220}
            priority
            className="w-full max-w-[980px] h-auto drop-shadow-glow" />

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="#journal" className="btn btn-primary">Try Marty Now</Link>
            <Link href="#fund" className="btn btn-outline">Fund Marty</Link>
          </div>

          {/* Bottom line */}
          <div className="mt-10 text-sm sm:text-base text-white/80">
            Quiet tech for loud minds
          </div>
        </div>
      </section>
      <WhyMarty />
      <FAQ compact />

      {/* === JOURNAL DEMO === */}
      <section id="journal" className="relative py-20 px-6 bg-black">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 tracking-tighter">Your MARTY Journal</h2>
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
                aria-label="Open Buy Me a Coffee in a new tab to fund this build"
                className="btn btn-outline"
              >
                Fund This Build
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* === FUND CTA === */}
      <section id="fund" className="py-20 px-6 bg-black">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-tighter">Fund the Founder</h2>
          <p className="text-white/80 max-w-xl mx-auto">
            Every dollar goes straight into building MARTY — servers, prototypes, survival. No VC filter. Just you + the founder making this real.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/fund" className="btn btn-primary">Stripe / Checkout</Link>
            <a
              href="https://buymeacoffee.com/ericadler"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Buy Me a Coffee in a new tab"
              className="btn btn-outline"
            >
              Buy Me a Coffee
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 text-center text-xs text-white/60 py-8">
        MARTY ≠ THERAPY — Not a therapist. Not a vibe app. Just MARTY.
      </footer>
    </main>
  );
}