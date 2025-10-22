"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Reflection {
  id: string;
  message: string;
  reply: string;
  timestamp: string;
}

export default function AdminPage() {
  const [reflections, setReflections] = useState<Reflection[]>([]);

  useEffect(() => {
    async function fetchReflections() {
      const { data } = await supabase
        .from("reflections")
        .select("*")
        .order("timestamp", { ascending: false });
      setReflections(data || []);
    }
    fetchReflections();
  }, []);

  return (
    <div className="p-8 text-gray-200">
      <h1 className="text-3xl mb-4">Admin Dashboard</h1>
      {reflections.length === 0 ? (
        <p>No reflections yet.</p>
      ) : (
        <ul className="space-y-4">
          {reflections.map((r) => (
            <li key={r.id} className="border-b border-gray-600 pb-2">
              <p className="text-sm text-gray-400">{r.timestamp}</p>
              <p className="font-semibold">{r.message}</p>
              <p className="text-gray-500 italic">{r.reply}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}