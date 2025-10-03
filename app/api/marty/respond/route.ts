import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

function buildSystemPrompt(modules: string[]): string {
  return `You are MARTY, a supportive AI guide. Modules active: ${modules.join(", ") || "none"}.`;
}

function selectModel(modules: string[]): string {
  if (modules.includes("ef") || modules.includes("cbt")) return "gpt-5-mini";
  return "gpt-5-nano";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages, modules = [] }: { messages: ChatMessage[]; modules?: string[] } = body;

    if (!Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid message format" }, { status: 400 });
    }

    const systemPrompt = buildSystemPrompt(modules);
    const model = selectModel(modules);

    const completion = await client.chat.completions.create({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        ...messages,
      ],
    });

    const reply = completion.choices?.[0]?.message?.content || "";

    return NextResponse.json({ reply });
  } catch (err: any) {
    console.error(err);
    if (err instanceof OpenAI.APIError) {
      return NextResponse.json({ error: err.message }, { status: err.status ?? 500 });
    }
    return NextResponse.json({ error: "Failed to get MARTY response" }, { status: 500 });
  }
}