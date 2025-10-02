import FAQ from "@/components/FAQ";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-300 mb-10 max-w-3xl">
          Get clarity on how MARTY works, why it’s different, and how it can
          help you rethink mental wellness. These aren’t your typical
          cookie‑cutter answers—we keep it real.
        </p>
        <div className="rounded-xl bg-gray-950/60 backdrop-blur border border-gray-800 shadow-xl p-8">
          <FAQ />
        </div>
      </div>
    </main>
  );
}