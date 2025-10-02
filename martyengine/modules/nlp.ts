import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export interface Analysis {
  sentiment: "positive" | "negative" | "neutral";
  confidence?: number;
}

export async function analyzeText(input: string): Promise<Analysis> {
  try {
    const messages: ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: "You are an NLP analyzer. Classify sentiment as positive, negative, or neutral."
      },
      { role: "user", content: input }
    ];

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      max_tokens: 20
    });

    const content = completion.choices[0].message?.content?.toLowerCase() || "";
    const sentiment: Analysis["sentiment"] = content.includes("positive")
      ? "positive"
      : content.includes("negative")
      ? "negative"
      : "neutral";

    return { sentiment };
  } catch (err) {
    console.error("NLP error:", err);
    return { sentiment: "neutral" };
  }
}
