export default function FundPage() {
  return (
    <main className="min-h-[70vh] bg-black text-white px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Fund the Founder</h1>
      <a
        href="https://buy.stripe.com/00w14o92R4Zo9I25CJaAw01"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 mt-4 text-lg font-semibold text-black bg-yellow-400 rounded hover:bg-yellow-300 transition-colors"
      >
        Support via Stripe
      </a>
    </main>
  );
}
