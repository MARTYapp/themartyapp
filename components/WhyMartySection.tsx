import Image from "next/image";

export function ValuePanel() {
  return (
    <section aria-labelledby="value-heading" className="mt-12">
      <h3 id="value-heading" className="mb-4 text-lg font-bold text-white/90">
        Why this makes money
      </h3>

      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10">
        <Image
          src="/branding/slide.png"
          alt="Why this makes money"
          fill
          priority
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}