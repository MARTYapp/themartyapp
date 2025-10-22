import OpenAI from "openai";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message required" }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are MARTY — a DBT-inspired, emotionally fluent reflection partner. You are direct, masculine, calm, and human. Help users process emotions and patterns without diagnosing or replacing therapy.",
        },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices[0]?.message?.content ?? "MARTY is thinking...";

    // Log to Supabase
    await supabase.from("reflections").insert([
      { message, reply, timestamp: new Date().toISOString() },
    ]);

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Chat API error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}