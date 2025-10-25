"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import "./globals.css"

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        setShowOverlay(false)
        router.push("/chat")
      }, 1200)
    }, 3200)
    return () => clearTimeout(timer)
  }, [router])

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* ===== Background Chat Placeholder (Blurry Behind Overlay) ===== */}
      <section
        className={`flex flex-col items-center justify-center min-h-screen px-6 text-center transition-filter duration-1000 ease-out ${
          showOverlay && !fadeOut ? "blur-sm brightness-75" : ""
        }`}
      >
        <h1 className="text-3xl sm:text-5xl font-semibold mb-4">
          Loading MARTY...
        </h1>
      </section>

      {/* ===== Cinematic Overlay ===== */}
      {showOverlay && (
        <div
          className={`
            fixed inset-0 z-[9999] flex items-center justify-center
            bg-[rgba(0,112,243,0.85)] backdrop-blur-lg
            transition-opacity duration-1000 ease-out
            ${fadeOut ? "opacity-0" : "opacity-100"}
          `}
        >
          <div
            className={`
              animate-[pulseGlow_3s_ease-in-out_infinite]
              flex flex-col items-center justify-center
              text-center space-y-6 max-w-lg mx-4 p-8 sm:p-12 rounded-3xl
              bg-black/40 border border-[#0070f3]/40 shadow-[0_0_40px_rgba(0,112,243,0.6)]
            `}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.9)]">
              Not a therapist. Not a vibe app. Just MARTY.
            </h1>
            <p className="text-base sm:text-lg text-blue-100 leading-snug">
              A modern emotional intelligence ecosystem. <br />
              Quiet tech for loud minds.
            </p>
            <p className="text-xs uppercase tracking-wider text-blue-200">
              Founded by Eric Adler, 2025
            </p>

            <button
              onClick={() => {
                setFadeOut(true)
                setTimeout(() => {
                  setShowOverlay(false)
                  router.push("/chat")
                }, 1000)
              }}
              className="mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Launch MARTY
            </button>
          </div>
        </div>
      )}

      {/* ===== Global Glow Animation ===== */}
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