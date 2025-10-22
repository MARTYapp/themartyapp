import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center min-h-[90vh] px-4">
        <Image
          src="/branding/Logo-MARTYnotTHERAPY.png"
          alt="MARTY ≠ THERAPY"
          width={256}
          height={256}
          className="opacity-90 mb-6"
          priority
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

      <section className="max-w-3xl mx-auto px-6 py-20 text-center space-y-6">
        <h2 className="text-3xl font-semibold text-gray-100">Our Mission</h2>

        <p className="text-gray-300 leading-relaxed">
          <strong>MARTY</strong> helps people turn emotional chaos into clarity —
          without pretending to be therapy.
        </p>

        <p className="text-gray-400 leading-relaxed">
          It’s not here to replace counseling; it’s here to make mental wellness
          accessible, masculine, modern, and emotionally fluent.
        </p>

        <p className="text-gray-400 leading-relaxed">
          <strong>MARTY ≠ THERAPY.</strong> It’s a reflection partner — a mirror that talks
          back, built for people who might never walk into a therapist’s office but
          still want the structure of emotional accountability.
        </p>

        <p className="text-gray-500 italic mt-10">
          Built and founded by <span className="text-gray-300 not-italic">Eric Adler</span>.
        </p>
      </section>
    </>
  );
}