import FAQ from "@/components/FAQ";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-8">
          FAQ
        </h1>
        <FAQ />
      </div>
    </main>
  );
}