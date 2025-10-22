import { useRouter } from "next/navigation"
import Image from "next/image"

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
          <Image
            src="/icons/wave-animated.svg"
            width={80}
            height={16}
            alt="wave animation"
            className="opacity-80 relative z-10"
          />
          <div className="absolute inset-0 blur-md bg-blue-500/20 animate-pulse"></div>
        </div>
      </div>

      <Image src="/icons/mic.svg" alt="mic" width={24} height={24} />
    </footer>
  )
}