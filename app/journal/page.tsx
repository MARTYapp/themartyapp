"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { id: number; from: "user" | "marty"; text: string };

export default function JournalPage() {
  const [messages, setMessages] = useState<Msg[]>([
    { id: 1, from: "marty", text: "Hey. You made it. This isn’t therapy — it’s us." },
  ]);
  const [input, setInput] = useState("");
  const scrollerRef = useRef<HTMLDivElement | null>(null);

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

  // Auto-scroll on new messages
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages.length]);

  // Keyboard shortcut: Cmd/Ctrl+Enter sends
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      send();
    }
  };

  return (
    <main className="relative min-h-[100svh] bg-black text-white">
      {/* Cinematic grid + sweep background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px, 40px 40px",
          maskImage:
            "radial-gradient(1000px_400px_at_10%_-10%, black, transparent 70%), radial-gradient(800px_600px_at_110%_120%, black, transparent 60%)",
        }}
      />

      {/* Top Bar */}
      <header className="sticky top-0 z-10 border-b border-white/10 bg-black/70 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4">
          <h1 className="text-[11px] font-black uppercase tracking-[0.2em] text-white/80">
            MARTY ≠ THERAPY
          </h1>
          <div className="flex items-center gap-3 text-[11px] text-white/50">
            <kbd className="rounded border border-white/20 bg-white/5 px-1.5 py-0.5">⌘</kbd>
            <span>+</span>
            <kbd className="rounded border border-white/20 bg-white/5 px-1.5 py-0.5">↵</kbd>
            <span className="hidden sm:inline">to send</span>
          </div>
        </div>
      </header>

      {/* Chat */}
      <section className="mx-auto flex min-h-[calc(100svh-160px)] max-w-4xl flex-col px-5 py-6">
        {/* Stream */}
        <div
          ref={scrollerRef}
          className="flex-1 overflow-y-auto pr-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20"
        >
          <div className="space-y-4 pb-6">
            {messages.map((m) => (
              <Bubble key={m.id} from={m.from}>
                {m.text}
              </Bubble>
            ))}
          </div>
        </div>

        {/* Composer */}
        <div className="sticky bottom-0 z-10 mt-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2">
          <div className="flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
                onKeyDown(e);
              }}
              placeholder="Say it like it is…"
              className="flex-1 rounded-xl bg-black/60 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:ring-1 focus:ring-white/20"
            />
            <button
              onClick={send}
              className="rounded-xl border border-white bg-white px-5 py-2.5 font-semibold text-black transition hover:bg-black hover:text-white hover:shadow-[0_0_0_1px_#fff]"
            >
              Send
            </button>
          </div>
          {/* Quick actions */}
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <Quick onClick={() => setInput((v) => (v ? v + " 10-min timer" : "10-min timer"))}>10‑min timer</Quick>
            <Quick onClick={() => setInput((v) => (v ? v + " opposite action" : "opposite action"))}>Opposite action</Quick>
            <Quick onClick={() => setInput((v) => (v ? v + " breathe 4-4-4-4" : "breathe 4‑4‑4‑4"))}>4‑count breath</Quick>
          </div>
        </div>
      </section>
    </main>
  );
}

function Bubble({ from, children }: { from: "user" | "marty"; children: React.ReactNode }) {
  const isUser = from === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={[
          "max-w-[80%] rounded-xl border px-4 py-3 text-sm leading-relaxed shadow-sm",
          isUser
            ? "border-white bg-white text-black rounded-tr-sm"
            : "border-white/15 bg-white/[0.04] text-white/90 rounded-tl-sm",
        ].join(" ")}
      >
        {!isUser && (
          <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-white/50">MARTY</div>
        )}
        {children}
      </div>
    </div>
  );
}

function Quick({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg border border-white/15 bg-white/[0.04] px-2.5 py-1.5 text-[11px] uppercase tracking-widest text-white/70 transition hover:bg-white/10 hover:text-white"
    >
      {children}
    </button>
  );
}