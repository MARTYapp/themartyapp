export default function FundPage() {
  return (
    <main className="relative min-h-[80vh] bg-black text-white px-6 py-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Cinematic background sweep + noise */}
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

      <div className="relative z-10 max-w-2xl text-center">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-6">
          Fund the Founder
        </h1>
        <p className="text-lg text-white/70 mb-10">
          Every dollar keeps MARTY alive — servers, prototypes, survival. No VC
          filter. Just you and the founder making it real.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://buy.stripe.com/00w14o92R4Zo9I25CJaAw01"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-square bg-white text-black hover:bg-black hover:text-white"
          >
            Support via Stripe
          </a>
          <a
            href="https://buymeacoffee.com/ericadler"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-square border border-white/30 text-white hover:bg-white hover:text-black"
          >
            Buy Me a Coffee
          </a>
        </div>
      </div>
    </main>
  );
}
