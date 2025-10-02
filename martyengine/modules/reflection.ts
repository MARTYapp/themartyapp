import OpenAI from "openai";
import type { getConversation } from "./memory";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export interface Analysis {
  sentiment: "positive" | "negative" | "neutral";
}

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export async function reflect(
  input: string,
  analysis: Analysis,
  history: ReturnType<typeof getConversation>
): Promise<string> {
  try {
    const messages: ChatMessage[] = [
      {
        role: "system",
        content:
          "You are MARTY, a supportive reflection bot. Always brief, empathetic, and context-aware.",
      },
      ...history.map((m) => ({
        role: (m.role === "user" ? "user" : "assistant") as "user" | "assistant",
        content: m.content,
      })),
      {
        role: "user",
        content: `New input: "${input}" (sentiment: ${analysis.sentiment})`,
      },
    ];

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      max_tokens: 80,
    });

    const content =
      completion.choices?.[0]?.message?.content ?? "Hmm… I’m not sure what to say.";

    return content;
  } catch (err) {
    console.error("Reflection error:", err);
    return "I’m having trouble reflecting right now.";
  }
}