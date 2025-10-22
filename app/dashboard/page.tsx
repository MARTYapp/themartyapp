"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Reflection {
  message: string;
  emotion: string;
  timestamp: string;
}

export default function DashboardPage() {
  const [reflections, setReflections] = useState<Reflection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadReflections() {
      // Get current user (if using Supabase Auth)
      const { data: { user } } = await supabase.auth.getUser();

      // Fallback if no auth setup yet
      const userId = user?.id || "test"; // matches what’s in your screenshot

      // Fetch reflections for this user
      const { data, error } = await supabase
        .from("reflections")
        .select("message, emotion, timestamp")
        .eq("user_id", userId)
        .order("timestamp", { ascending: false });

      if (error) {
        console.error("Error loading reflections:", error);
      } else {
        setReflections(data || []);
      }
      setLoading(false);
    }

    loadReflections();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl font-semibold text-[#3B82F6] mb-2">
        Your Reflections
      </h1>
      <p className="text-gray-400 mb-12 text-center max-w-[40ch]">
        A look back at how you’ve been feeling.
      </p>

      {loading ? (
        <p className="text-gray-500">Loading reflections...</p>
      ) : reflections.length === 0 ? (
        <p className="text-gray-500">No reflections yet.</p>
      ) : (
        <div className="space-y-4 w-full max-w-md">
          {reflections.map((r, i) => (
            <div
              key={i}
              className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5"
            >
              <p className="text-gray-300 text-base mb-2 italic">
                “{r.message}”
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span className="capitalize text-[#3B82F6]">{r.emotion}</span>
                <span>{new Date(r.timestamp).toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}