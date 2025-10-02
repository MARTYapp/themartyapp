import { NextResponse } from "next/server";
import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function buildSystemPrompt(modules: string[]): string {
  return `You are MARTY, a supportive AI guide. Modules active: ${modules.join(", ") || "none"}.`;
}

// Select GPT model dynamically based on complexity
function selectModel(modules: string[]): string {
  // Example logic: if advanced EF or CBT, use larger model
  if (modules.includes("ef") || modules.includes("cbt")) return "gpt-5-mini";
  return "gpt-5-nano";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages, modules = [] }: { messages: ChatCompletionMessageParam[], modules?: string[] } = body;

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

    return NextResponse.json({
      reply: completion.choices[0].message?.content ?? "",
    });
  } catch (err) {
    if (err instanceof OpenAI.APIError) {
      return NextResponse.json({ error: err.message }, { status: err.status ?? 500 });
    }
    console.error(err);
    return NextResponse.json(
      { error: "Failed to get MARTY response" },
      { status: 500 }
    );
  }
}