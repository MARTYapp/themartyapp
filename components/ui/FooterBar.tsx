import { useRouter } from "next/navigation"

export default function FooterBar() {
  const router = useRouter()

  return (
    <footer className="flex items-center justify-between bg-black/80 text-blue-400 px-4 py-3 fixed bottom-0 left-0 right-0">
      <div className="flex flex-col items-start">
        <button
          onClick={() => router.push("/chat")}
          className="flex items-center gap-2 font-semibold hover:underline"
        >
          <span className="text-lg">+</span> Talk to MARTY
        </button>

        {/* 🔥 Here's where the glow effect lives */}
        <div className="relative mt-1">
          <img
            src="/icons/wave-animated.svg"
            className="w-20 h-4 opacity-80 relative z-10"
            alt="wave"
          />
          <div className="absolute inset-0 blur-md bg-blue-500/20 animate-pulse"></div>
        </div>
      </div>

      <img src="/icons/mic.svg" className="w-6 h-6" alt="mic" />
    </footer>
  )
}