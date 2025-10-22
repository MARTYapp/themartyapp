"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  role: "user" | "marty";
  content: string;
  emotion?: string;
  timestamp: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: input,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      const reply: Message = {
        id: crypto.randomUUID(),
        role: "marty",
        content: data.reply ?? "MARTY is thinking...",
        emotion: "reflective",
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, reply]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "marty",
          content: "Connection issue — try again.",
          timestamp: new Date().toISOString(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-[90vh] w-full max-w-lg mx-auto rounded-xl bg-[#0B0C0F]/90 backdrop-blur-md border border-gray-800 shadow-xl">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-800 flex items-center justify-center">
        <span className="text-gray-400 text-sm tracking-wider">
          MARTY ≠ THERAPY
        </span>
      </div>

      {/* Message area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 scrollbar-thin scrollbar-thumb-gray-800">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${
              msg.role === "user" ? "items-end" : "items-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-[80%] leading-relaxed text-sm ${
                msg.role === "user"
                  ? "bg-gradient-to-r from-blue-700 to-blue-600 text-white"
                  : "bg-[#1A1B1F] text-gray-200 border border-gray-700"
              }`}
            >
              {msg.content}
            </div>
            <div className="mt-1 text-[10px] text-gray-500 flex items-center gap-2">
              <span>{new Date(msg.timestamp).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</span>
              {msg.role === "marty" && msg.emotion && (
                <span className="uppercase tracking-widest text-[9px] text-gray-600 bg-gray-900/40 px-1.5 py-0.5 rounded-sm">
                  {msg.emotion}
                </span>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="text-gray-500 text-xs italic text-center pt-2">
            MARTY is thinking...
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Input bar */}
      <div className="border-t border-gray-800 px-4 py-3 flex items-center gap-2">
        <input
          type="text"
          placeholder="Type to reflect..."
          className="flex-1 bg-transparent outline-none text-gray-200 text-sm placeholder-gray-600"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-sm transition disabled:opacity-40"
        >
          Send
        </button>
      </div>
    </div>
  );
}