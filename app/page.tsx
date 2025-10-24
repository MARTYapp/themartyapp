"use client"
import { useEffect, useState } from "react"
import "./globals.css"

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => setShowOverlay(false), 1000)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* ===== Magical Overlay ===== */}
      {showOverlay && (
        <div
          className={`
            fixed inset-0 z-50 flex items-center justify-center text-center
            bg-[rgba(0,112,243,0.75)] backdrop-blur-md
            transition-opacity duration-1000 ease-out
            ${fadeOut ? "opacity-0" : "opacity-100"}
          `}
        >
          <div
            className="
              animate-[pulseGlow_3s_ease-in-out_infinite]
              flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10
              p-8 sm:p-16 text-white"
          >
            <div className="max-w-md space-y-4">
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight drop-shadow-[0_0_10px_rgba(59,130,246,0.9)]">
                MARTY ≠ THERAPY
              </h1>
              <p className="text-lg sm:text-xl opacity-90 leading-snug">
                Not a therapist. Not a vibe app.<br />
                Just MARTY.
              </p>
              <p className="text-sm uppercase tracking-wider opacity-80 mt-4">
                Built & Founded by Eric Adler, 2025
              </p>
            </div>

            <button
              onClick={() => {
                setFadeOut(true)
                setTimeout(() => setShowOverlay(false), 1000)
              }}
              className="
                mt-6 sm:mt-0 px-8 py-3 text-sm sm:text-base font-semibold
                bg-white text-black rounded-full shadow-lg hover:scale-105
                transition-transform duration-300 ease-in-out
              "
            >
              Launch MARTY
            </button>
          </div>
        </div>
      )}

      {/* ===== Main Page ===== */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
          Not a therapist. Not a vibe app. Just MARTY.
        </h1>
        <p className="text-gray-400 max-w-lg">
          A modern emotional intelligence ecosystem. Quiet tech for loud minds.
        </p>
      </section>

      {/* ===== Keyframes ===== */}
      <style jsx global>{`
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 20px rgba(0, 112, 243, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(0, 112, 243, 0.9);
          }
          100% {
            box-shadow: 0 0 20px rgba(0, 112, 243, 0.4);
          }
        }
      `}</style>
    </main>
  )
}