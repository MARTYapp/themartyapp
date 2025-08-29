export default function FundPage() {
  return (
    <main className="relative min-h-[80vh] bg-black text-white px-6 py-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Cinematic grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "50px 50px, 50px 50px",
        }}
      />
      <div className="noise" aria-hidden />

      <div className="relative z-10 w-full max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          Fund the Founder
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/80 mb-12 max-w-2xl mx-auto">
          Every contribution keeps MARTY alive — servers, prototypes, and survival. 
          No VC filter. Just you and the founder making it real.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://buy.stripe.com/00w14o92R4Zo9I25CJaAw01"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-square bg-white text-black hover:bg-black hover:text-white text-sm sm:text-base px-6 py-3"
          >
            Support via Stripe
          </a>
          <a
            href="https://buymeacoffee.com/ericadler"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-square border border-white/30 text-white hover:bg-white hover:text-black text-sm sm:text-base px-6 py-3"
          >
            Buy Me a Coffee
          </a>
        </div>
      </div>
    </main>
  );
}
