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
    const tonePrompt =
      analysis.sentiment === "negative"
        ? "Respond with warmth and brevity. Show empathy and grounding without sugarcoating."
        : analysis.sentiment === "positive"
        ? "Reflect enthusiasm and curiosity. Mirror their tone with authentic validation."
        : "Be steady and real — conversational, grounded, and slightly curious.";

    const messages: ChatMessage[] = [
      {
        role: "system",
        content: `You are MARTY — a trauma‑smart, emotionally fluent reflection AI. You sound human, grounded, and brief (1‑3 sentences). ${tonePrompt}`,
      },
      ...history.map((m) => ({
        role: (m.role === "user" ? "user" : "assistant") as "user" | "assistant",
        content: m.content,
      })),
      {
        role: "user",
        content: `User just said: "${input}". Sentiment detected: ${analysis.sentiment}.`,
      },
    ];

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      max_tokens: 80,
      response_format: { type: "text" },
    });

    const content =
      completion.choices?.[0]?.message?.content?.trim() ??
      "Hmm… I’m here. Want to tell me a little more?";

    return content;
  } catch (err) {
    console.error("Reflection error:", err);
    return "I’m having trouble reflecting right now.";
  }
}