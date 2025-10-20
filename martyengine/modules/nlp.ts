import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export interface Analysis {
  sentiment: "positive" | "negative" | "neutral";
  confidence: number;
}

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export async function analyzeText(input: string): Promise<Analysis> {
  try {
    const messages: ChatMessage[] = [
      {
        role: "system",
        content: `
          You are an NLP analyzer. Return a JSON object ONLY with:
          {
            "sentiment": "positive" | "negative" | "neutral",
            "confidence": number between 0 and 1
          }
          No explanation, just valid JSON.
        `,
      },
      { role: "user", content: input },
    ];

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      response_format: { type: "json_object" },
      max_tokens: 50,
    });

    const raw = completion.choices[0]?.message?.content || "{}";
    const parsed = JSON.parse(raw);

    const sentiment =
      parsed.sentiment === "positive" ||
      parsed.sentiment === "negative" ||
      parsed.sentiment === "neutral"
        ? parsed.sentiment
        : "neutral";

    const confidence =
      typeof parsed.confidence === "number" &&
      parsed.confidence >= 0 &&
      parsed.confidence <= 1
        ? parsed.confidence
        : 0.5;

    return { sentiment, confidence };
  } catch (err) {
    console.error("NLP error:", err);
    return { sentiment: "neutral", confidence: 0.5 };
  }
}