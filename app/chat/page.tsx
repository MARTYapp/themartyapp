"use client"

import { useState } from "react"
import SidePanel from "@/components/core-ui/SidePanel"

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Yo — I’m MARTY. What’s on your mind today?" },
  ])
  const [input, setInput] = useState("")
  const [panelOpen, setPanelOpen] = useState(false)

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    setMessages([...messages, { role: "user", content: input }])
    setInput("")
  }

  return (
    <div className="relative flex h-screen w-full bg-gradient-to-b from-[#001f3f] to-black text-white">
      {/* Side Panel */}
      <SidePanel open={panelOpen} setOpen={setPanelOpen} />

      {/* Chat */}
      <div className="flex flex-col flex-1 justify-between">
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 scrollbar-thin">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm sm:text-base ${
                  msg.role === "user"
                    ? "bg-[#0070f3] text-white shadow-[0_0_10px_rgba(0,112,243,0.8)]"
                    : "bg-[#111] text-gray-100 border border-[#0070f3]/20"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={sendMessage}
          className="p-4 bg-[#0b0b0b]/90 flex items-center gap-2 border-t border-[#0070f3]/40"
        >
          <button
            type="button"
            onClick={() => setPanelOpen(!panelOpen)}
            className="p-2 text-[#0070f3] hover:text-white"
          >
            ☰
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Talk to MARTY..."
            className="flex-1 bg-transparent border border-[#0070f3]/40 rounded-full px-4 py-2 text-white focus:outline-none focus:border-[#0070f3] placeholder:text-gray-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#0070f3] rounded-full hover:bg-[#0090ff] transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}