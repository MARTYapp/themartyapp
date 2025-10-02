import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import type { getConversation } from "./memory";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export interface Analysis {
  sentiment: "positive" | "negative" | "neutral";
}

export async function reflect(
  input: string,
  analysis: Analysis,
  history: ReturnType<typeof getConversation>
): Promise<string> {
  try {
    const messages: ChatCompletionMessageParam[] = [
      { role: "system", content: "You are MARTY, a supportive reflection bot. Always brief, empathetic, and context-aware." },
      ...history.map(m => ({
        role: (m.role === "user" ? "user" : "assistant") as "user" | "assistant",
        content: m.content
      })),
      { role: "user", content: `New input: "${input}" (sentiment: ${analysis.sentiment})` }
    ];

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      max_tokens: 80
    });

    return completion.choices[0].message?.content || "Hmm… I’m not sure what to say.";
  } catch (err) {
    console.error("Reflection error:", err);
    return "I’m having trouble reflecting right now.";
  }
}