"use client";

import { useState } from "react";

type Msg = { id: number; from: "user" | "marty"; text: string };

export default function JournalPage() {
  const [messages, setMessages] = useState<Msg[]>([
    { id: 1, from: "marty", text: "Hey. You made it. This isn’t therapy — it’s us." },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    const clean = input.trim();
    if (!clean) return;

    const userMsg: Msg = { id: Date.now(), from: "user", text: clean };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // fake MARTY reflection after 1.2s
    setTimeout(() => {
      const reply: Msg = {
        id: Date.now() + 1,
        from: "marty",
        text: reflect(clean),
      };
      setMessages((prev) => [...prev, reply]);
    }, 1200);
  };

  const reflect = (txt: string) => {
    const t = txt.toLowerCase();
    if (t.includes("tired")) return "Rest counts as progress. 20 minutes. Timer on.";
    if (t.includes("stuck")) return "Pick one slice. 5 minutes. Move.";
    if (t.includes("ok")) return "‘Ok’ is enough. What’s one next micro-step?";
    return "Heard. What’s the next 10-minute action?";
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Your MARTY Journal</h1>

      {/* messages */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-6">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`max-w-[80%] px-4 py-2 rounded-2xl ${
              m.from === "user"
                ? "bg-white text-black self-end ml-auto"
                : "bg-purple-700/80"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      {/* input */}
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Say it like it is…"
          className="flex-1 bg-white/10 px-4 py-3 rounded-full outline-none placeholder:text-white/40"
        />
        <button
          onClick={send}
          className="rounded-full bg-white text-black font-semibold px-6 hover:bg-white/90"
        >
          Send
        </button>
      </div>
    </main>
  );
}