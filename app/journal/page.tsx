/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-restricted-syntax */"use client";
import React, { useEffect, useRef, useState } from "react";

interface Message {
  id: number;
  role: "user" | "marty";
  text: string;
  ts: number;
}

export default function JournalPage() {
  const initial: Message[] = [
    { id: 1, role: "marty", text: "Hey. You made it. This isn't therapy — it's us.", ts: Date.now() },
  ];

  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window === "undefined") return initial;
    try {
      const saved = localStorage.getItem("marty_convo");
      return saved ? JSON.parse(saved) : initial;
    } catch {
      return initial;
    }
  });
  const [input, setInput] = useState("");
  const [loopAlerts, setLoopAlerts] = useState<string[]>([]);
  const [listening, setListening] = useState(false);

  const SpeechRecognitionClass =
    typeof window !== "undefined"
      ? (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      : null;
  const recognitionRef = useRef<any>(null);

  // Persist & detect on every message change
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("marty_convo", JSON.stringify(messages));
      } catch (e: any) {}
    }
    detectLoops();
  }, [messages]);

  // Basic pattern list we track locally. Move to server for production.
  const PATTERNS = ["fuck off", "i can't", "idk", "avoid", "later"];

  function sendMessage(text: string) {
    const clean = text?.trim();
    if (!clean) return;

    const userMsg: Message = { id: Date.now(), role: "user", text: clean, ts: Date.now() };
    setMessages((prev: Message[]) => [...prev, userMsg]);
    setInput("");

    // Track patterns locally
    trackPatterns(clean);

    // Simulate async MARTY response (replace with /api call)
    setTimeout(() => respondTo(clean), 350);
  }

  function appendMarty(text: string) {
    const m: Message = { id: Date.now(), role: "marty", text, ts: Date.now() };
    setMessages((prev: Message[]) => [...prev, m]);
  }

  function respondTo(text: string) {
    const lower = text.toLowerCase();
    const profanity = /\b(fuck|shit|bitch|asshole)\b/;

    if (profanity.test(lower) || lower.includes("idk") || lower.includes("i don't know")) {
      appendMarty("Heard. What's the next 10-minute action?");
      return;
    }

    if (lower.includes("smoke") || lower.includes("drink")) {
      appendMarty("If you do that, add: text someone you trust after it. Opposite action unlocked.");
      return;
    }

    appendMarty("Okay. Tell me more or pick a 10-minute action.");
  }

  function trackPatterns(text: string) {
    if (typeof window === "undefined") return;
    try {
      const counts = JSON.parse(localStorage.getItem("marty_loops") || "{}") as Record<string, number>;
      PATTERNS.forEach((p) => {
        if (text.toLowerCase().includes(p)) counts[p] = (counts[p] || 0) + 1;
      });
      localStorage.setItem("marty_loops", JSON.stringify(counts));
    } catch (e: any) {}
  }

  function detectLoops() {
    if (typeof window === "undefined") {
      setLoopAlerts([]);
      return;
    }
    try {
      const counts = JSON.parse(localStorage.getItem("marty_loops") || "{}") as Record<string, number>;
      const alerts = Object.entries(counts)
        .filter(([k, v]) => v >= 3)
        .map(([k, v]) => `${k} used ${v}x`);
      setLoopAlerts(alerts as string[]);
    } catch (e: any) {
      setLoopAlerts([]);
    }
  }

  function summarizeConversation() {
    // Lightweight client-side summary — replace with LLM call for production
    const userMsgs = messages.filter((m) => m.role === "user").slice(-8);
    const bullets = userMsgs.map((m) => `• ${m.text}`);
    // quick UI feedback — replace with a proper modal / UI element
    alert("Summary (stub):\n" + bullets.join("\n"));
  }

  // Voice capture (browser SpeechRecognition). Fallback gracefully.
  function toggleListen() {
    if (!SpeechRecognitionClass) {
      alert("Speech recognition not available in this browser.");
      return;
    }

    if (!recognitionRef.current) {
      const r = new SpeechRecognitionClass();
      r.lang = "en-US";
      r.interimResults = true;
      r.onresult = (ev: any) => {
        const last = ev.results[ev.results.length - 1][0].transcript;
        setInput((prev) => (prev ? prev + " " + last : last));
      };
      r.onend = () => setListening(false);
      recognitionRef.current = r;
    }

    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
    } else {
      recognitionRef.current?.start();
      setListening(true);
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Journal — Chat with MARTY</h1>

        {loopAlerts.length > 0 && (
          <div className="bg-yellow-600 text-black p-3 rounded mb-4">
            <strong>Loop detected:</strong> {loopAlerts.join("; ")} — Want to unpack?
          </div>
        )}

        <div className="space-y-3 mb-4">
          {messages.map((m: Message) => (
            <div
              key={m.id}
              className={`p-3 rounded-2xl max-w-[90%] ${
                m.role === "marty" ? "bg-neutral-800 self-start" : "bg-red-500 text-black self-end"
              }`}
            >
              <div className="text-sm opacity-60">{m.role === "marty" ? "MARTY" : "You"}</div>
              <div className="mt-1">{m.text}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <button onClick={toggleListen} className={`px-3 py-2 rounded ${listening ? "bg-red-600" : "bg-neutral-800"}`}>
            {listening ? "Listening..." : "Voice"}
          </button>

          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Say it like it is..." className="flex-1 bg-neutral-900 p-3 rounded text-white" />

          <button onClick={() => sendMessage(input)} className="bg-white text-black px-4 py-2 rounded">
            Send
          </button>
        </div>

        <div className="mt-4 flex gap-2">
          <button onClick={summarizeConversation} className="px-3 py-2 bg-neutral-800 rounded">
            Generate Summary
          </button>

          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                try {
                  localStorage.setItem("marty_saved_entry_" + Date.now(), JSON.stringify(messages));
                  alert("Saved to localStorage as entry");
                } catch (e: any) {
                  alert("Failed to save");
                }
              }
            }}
            className="px-3 py-2 bg-neutral-800 rounded"
          >
            Save Entry
          </button>
        </div>
      </div>
    </div>
  );
}
