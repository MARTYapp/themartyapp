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
      <section
        className={`flex flex-col items-center justify-center min-h-screen px-6 text-center transition-filter duration-1000 ease-out ${
          showOverlay && !fadeOut ? "blur-sm brightness-75" : ""
        }`}
      >
        <h1 className="text-3xl sm:text-5xl font-semibold mb-4">
          Loading MARTY...
        </h1>
      </section>

      {showOverlay && (
        <div
          className={`
            fixed inset-0 z-50 flex items-center justify-center
            transition-opacity duration-1000 ease-out
            ${fadeOut ? "opacity-0" : "opacity-100"}
          `}
        >
          <div
            className={`
              max-w-md w-full bg-[rgba(0,112,243,0.85)] rounded-xl
              animate-[pulseGlow_3s_ease-in-out_infinite]
              p-8 sm:p-16 text-white text-center shadow-lg
              backdrop-blur-md
            `}
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight drop-shadow-[0_0_10px_rgba(59,130,246,0.9)]">
                Not a therapist. Not a vibe app. Just MARTY.
              </h1>
              <p className="text-lg sm:text-xl opacity-90 leading-snug">
                A modern emotional intelligence ecosystem. <br />
                Quiet tech for loud minds.
              </p>
              <p className="text-sm uppercase tracking-wider opacity-80 mt-4">
                Founded by Eric Adler, 2025
              </p>
            </div>

            <button
              onClick={() => {
                setFadeOut(true)
                setTimeout(() => {
                  setShowOverlay(false)
                  router.push("/chat")
                }, 1000)
              }}
              className={`mt-6 px-8 py-3 text-sm sm:text-base font-semibold
                bg-white text-black rounded-full shadow-lg hover:scale-105
                transition-transform duration-300 ease-in-out`}
            >
              Launch MARTY
            </button>
          </div>
        </div>
      )}

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