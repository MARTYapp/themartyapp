import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Investors — MARTY ≠ THERAPY",
  description:
    "MARTY is a persona-driven, voice-first AI turning reflection into action. Investor overview, KPIs, and acquisition thesis.",
  openGraph: {
    title: "Investors — MARTY ≠ THERAPY",
    images: ["/branding/social-opengraph.png"],
  },
};

type SlideProps = {
  title?: string;
  subtitle?: string;
  image?: string;
  caption?: string;
};

function SlideFrame({
  title,
  subtitle,
  image,
  caption,
}: SlideProps) {
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

import type { JSX } from "react";

export default function InvestorsPage(): JSX.Element {
  return (
    <main className="h-[100svh] snap-y snap-mandatory overflow-y-auto bg-black text-white">
      {/* Cover */}
      <SlideFrame
        title="MARTY × Meta"
        subtitle="Investable AI — cinematic, persona-driven, high-retention"
        image="/branding/Meta/1.png"
        caption="Cover"
      />

      {/* Product Overview */}
      <SlideFrame
        title="Product: Just MARTY"
        subtitle="Voice-first AI persona — trauma-informed, engaging, older-brother tone"
        image="/branding/Meta/2.png"
        caption="Slide 1 — Product"
      />

      {/* Differentiation */}
      <SlideFrame
        title="Differentiation"
        subtitle="Cinematic UX vs. corporate AI — deep engagement, behavioral insights"
        image="/branding/Meta/3.png"
        caption="Slide 2 — Differentiation"
      />

      {/* KPIs */}
      <SlideFrame
        title="Retention = Value"
        subtitle="North Star KPI: 3 × 8 × 3 (daily active → engaged users → reflection completion)"
        image="/branding/Meta/4.png"
        caption="Slide 3 — KPI"
      />

      {/* Monetization */}
      <SlideFrame
        title="Monetization Stack"
        subtitle="4 high-margin revenue streams → multi-$B TAM"
        image="/branding/Meta/5.png"
        caption="Slide 4 — Monetization"
      />

      {/* Acquisition Thesis */}
      <SlideFrame
        title="Acquisition Thesis"
        subtitle="Own the cultural wedge — rapidly scale adoption and lock in retention"
        image="/branding/Meta/6.png"
        caption="Slide 5 — Acquisition Thesis"
      />

      {/* CTA Section */}
      <section className="relative flex min-h-[70svh] w-full snap-start items-center justify-center bg-black">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Access the full investor memo
          </h2>
          <p className="max-w-2xl text-white/70 sm:text-lg">
            Explore the full deck, market benchmarks, KPI dashboards, and GTM strategy. Contact us to review the detailed model, traction metrics, and revenue projections.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="mailto:eric@themarty.app" className="btn btn-primary" passHref>
              Email Eric
            </Link>
            <Link href="/branding/MARTY_Investor_OnePager.pdf" className="btn btn-outline" passHref>
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