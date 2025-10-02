"use client"
import { useState, useEffect, useRef } from "react"

type Message = { user: string; marty: string }

export default function HomePage() {
  const [input, setInput] = useState("")
  const [chat, setChat] = useState<Message[]>([])
  const chatEndRef = useRef<HTMLDivElement>(null)

  async function sendMessage() {
    const res = await fetch("/api/marty/respond", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    })
    const data = await res.json()
    setChat([...chat, { user: input, marty: data.reply }])
    setInput("")
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chat])

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 font-sans bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background overlays for cinematic feel */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/20 to-transparent animate-[sweep_6s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-noise opacity-10"></div>
      </div>

      <h1 className="relative text-4xl font-extrabold mb-6 text-red-600 drop-shadow-lg">The MARTY App</h1>
      <div className="relative w-full max-w-md h-[60vh] overflow-y-auto space-y-4 px-2 py-4 bg-black bg-opacity-70 rounded-xl shadow-lg scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-900">
        {chat.map((c, i) => (
          <div
            key={i}
            className={`rounded-xl p-4 max-w-[80%] break-words shadow-md ${
              c.user === chat[i].user && c.marty === chat[i].marty
                ? "ml-auto bg-gradient-to-r from-red-700 to-red-500 text-white"
                : "mr-auto bg-gradient-to-r from-gray-800 to-gray-700 text-gray-200"
            }`}
          >
            <p className="font-semibold mb-1">{c.user === chat[i].user ? "You:" : "MARTY:"}</p>
            <p>{c.user === chat[i].user ? c.user : c.marty}</p>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="flex mt-6 w-full max-w-md">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-grow px-4 py-3 rounded-l-xl border-0 bg-gray-900 text-white placeholder-red-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          placeholder="Type your message..."
          onKeyDown={e => {
            if (e.key === "Enter" && input.trim()) {
              e.preventDefault()
              sendMessage()
            }
          }}
        />
        <button
          onClick={sendMessage}
          className="btn-square rounded-r-xl bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3"
          disabled={!input.trim()}
        >
          Send
        </button>
      </div>
    </div>
  )
}
