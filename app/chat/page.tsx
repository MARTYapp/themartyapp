"use client"
import { useState } from "react"
import Image from "next/image"

export default function ChatPage() {
  const [isThinking, setIsThinking] = useState(true)

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <div className="flex-grow flex items-center justify-center">
        {isThinking ? (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-gray-400 mb-2">MARTY is thinking...</p>
            <div className="relative">
              <Image
                src="/icons/wave-animated.svg"
                width={96}
                height={24}
                alt="thinking wave"
                className="opacity-80 relative z-10"
              />
              <div className="absolute inset-0 blur-md bg-blue-500/20 animate-pulse"></div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-gray-400">Start chatting with MARTY.</p>
          </div>
        )}
      </div>

      {/* Chat Input Bar */}
      <footer className="fixed bottom-0 left-0 right-0 bg-black/80 border-t border-gray-800 p-4 flex items-center justify-between">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-grow bg-gray-900 text-white rounded-lg px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => setIsThinking(!isThinking)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </footer>
    </main>
  )
}