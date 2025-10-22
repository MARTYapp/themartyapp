export default function Home() {
    return (
      <section className="flex flex-col items-center justify-center text-center min-h-[90vh] px-4">
        <img
          src="/branding/Logo-MARTYnotTHERAPY.png"
          alt="MARTY ≠ THERAPY"
          className="w-48 sm:w-64 opacity-90 mb-6"
        />
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
          Not a therapist. Not a vibe app. Just MARTY.
        </h1>
        <p className="text-gray-400 max-w-lg">
          A masculine, emotionally fluent ecosystem bridging recovery, coaching, and self-awareness.
        </p>
        <button className="mt-8 px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition">
          Launch the Beta
        </button>
      </section>
    );
  }