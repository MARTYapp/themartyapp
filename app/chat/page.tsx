"use client";

import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "marty", content: "Hey — I’m MARTY. What’s on your mind today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const reply = data.reply || "MARTY is thinking...";

      setMessages((prev) => [...prev, { role: "marty", content: reply }]);
    } catch (err) {
      console.error("Chat error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex flex-col h-screen bg-gradient-to-b from-[#0B0C0F] to-[#151618] text-gray-100">
      <header className="border-b border-gray-800 p-4 text-center text-sm tracking-wide text-gray-400">
        <span className="font-semibold text-gray-200">MARTY</span> ≠ THERAPY
      </header>

      {/* Chat Feed */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 scrollbar-thin scrollbar-thumb-gray-800">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-[#1C1D21] text-gray-200"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="text-sm text-gray-500 italic text-center mt-2">
            MARTY is thinking...
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={sendMessage}
        className="border-t border-gray-800 p-4 flex items-center space-x-3 bg-[#0B0C0F]"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your reflection..."
          className="flex-1 bg-transparent outline-none border border-gray-700 rounded-full px-4 py-2 text-sm focus:border-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-sm hover:scale-105 transition"
        >
          Send
        </button>
      </form>
    </main>
  );
}