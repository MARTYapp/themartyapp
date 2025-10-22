export default function FundTheFounder() {
    return (
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-semibold mb-4">#FundTheFounder</h1>
        <p className="text-gray-400 max-w-2xl mb-6">
          Support MARTY’s independent development. Every contribution fuels the mission:
          making emotional wellness accessible, and modern.
        </p>
        <a
          href="https://www.buymeacoffee.com/themartyapp"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition"
        >
          Buy Eric a Coffee ☕
        </a>
      </section>
    );
  }