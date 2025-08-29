import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Investors — MARTY ≠ THERAPY",
  description:
    "MARTY is a voice-first, persona-driven AI that turns reflection into action. Investor overview and acquisition thesis.",
  openGraph: {
    title: "Investors — MARTY ≠ THERAPY",
    images: ["/branding/social-opengraph.png"],
  },
};

function SlideFrame({
  title,
  subtitle,
  image,
  caption,
}: {
  title?: string;
  subtitle?: string;
  image?: string;
  caption?: string;
}) {
  return (
    <section
      className="relative flex h-[100svh] w-full snap-start items-center justify-center overflow-hidden bg-black text-white"
      aria-label={title || subtitle}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-30 grid-overlay" />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 text-center sm:gap-8">
        {title && (
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            {title}
          </h1>
        )}
        {subtitle && <p className="text-white/70 sm:text-lg">{subtitle}</p>}

        {image && (
          <div className="relative mt-4 aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-xl border border-white/10">
            <Image
              src={image}
              alt={title || subtitle || "deck slide"}
              fill
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>
        )}

        {caption && (
          <div className="text-xs uppercase tracking-[0.18em] text-white/50">
            {caption}
          </div>
        )}
      </div>
    </section>
  );
}

export default function InvestorsPage() {
  return (
    <main className="h-[100svh] snap-y snap-mandatory overflow-y-auto bg-black text-white">
      {/* Cover (slide 1) */}
      <SlideFrame
        title="MARTY × Meta"
        subtitle="Acquisition pitch — cinematic personal AI with teeth"
        image="/branding/Meta/1.png"
        caption="Cover"
      />

      {/* Slide 1 — The Product */}
      <SlideFrame
        title="Just MARTY"
        subtitle="Voice-first AI persona — trauma-smart, older-brother tone"
        image="/branding/Meta/2.png"
        caption="Slide 1 — The Product"
      />

      <SlideFrame
        title="Why MARTY > ChatGPT & Calm"
        subtitle="Cinematic vs. Corporate"
        image="/branding/Meta/3.png"
        caption="Slide 2 — Differentiation"
      />

      <SlideFrame
        title="Retention = Value"
        subtitle="North Star KPI: 3 × 8 × 3"
        image="/branding/Meta/4.png"
        caption="Slide 3 — KPI"
      />

      <SlideFrame
        title="Monetization Stack"
        subtitle="4 revenue streams → multi-$B potential"
        image="/branding/Meta/5.png"
        caption="Slide 4 — Monetization"
      />

      <SlideFrame
        title="Why Meta Should Buy Now"
        subtitle="Own the cultural wedge"
        image="/branding/Meta/6.png"
        caption="Slide 5 — Acquisition Thesis"
      />

      <section className="relative flex min-h-[70svh] w-full snap-start items-center justify-center bg-black">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Get the full investor memo
          </h2>
          <p className="max-w-2xl text-white/70 sm:text-lg">
            Interested in the deeper deck, benchmarks, and roadmap? Let’s talk.
            We’ll share the complete model, North Star KPI instrumentation, and
            GTM sprints.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="mailto:eric@themarty.app" className="btn btn-primary">
              Email Eric
            </Link>
            <Link href="/branding/MARTY_Investor_OnePager.pdf" className="btn btn-outline">
              Download one‑pager
            </Link>
          </div>
          <div className="text-xs uppercase tracking-[0.18em] text-white/50">
            MARTY ≠ THERAPY
          </div>
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-40 grid-overlay" />
      </section>
    </main>
  );
}