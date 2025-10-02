export default function FundPage() {
  return (
    <main className="relative min-h-[80vh] bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-24 flex flex-col items-center justify-center overflow-hidden">
      {/* Cinematic grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 bg-cinematic-grid"
      />
      <div className="noise" aria-hidden />

      <div className="relative z-10 w-full max-w-3xl text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Fund the Founder
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          No VC filter. No middlemen. Just you + the vision.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/80 mb-12 max-w-2xl mx-auto">
          Every contribution keeps MARTY alive — powering servers, prototypes,
          and survival. You’re not just funding an app, you’re fueling a
          movement that puts radical honesty and emotional intelligence front
          and center.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://buy.stripe.com/00w14o92R4Zo9I25CJaAw01"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-square bg-white text-black hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white text-sm sm:text-base px-8 py-4 transition-all duration-300 shadow-lg"
          >
            Support via Stripe
          </a>
          <a
            href="https://buymeacoffee.com/ericadler"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-square border border-white/40 text-white hover:bg-white hover:text-black text-sm sm:text-base px-8 py-4 transition-all duration-300 shadow-lg"
          >
            Buy Me a Coffee
          </a>
        </div>
      </div>
    </main>
  );
}
