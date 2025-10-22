export default function LaunchModal({ onClose }: { onClose: () => void }) {
    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
        <div className="bg-gray-900 text-white p-8 rounded-xl max-w-lg text-center border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Not a therapist. Not a vibe app. Just MARTY.</h2>
          <p className="text-gray-300 mb-8 text-sm leading-relaxed">
            An emotionally fluent, modern ecosystem bridging recovery, coaching, and self-awareness. 
            Built to turn chaos into clarity — without pretending to be therapy.
          </p>
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            Launch MARTY
          </button>
        </div>
      </div>
    )
  }