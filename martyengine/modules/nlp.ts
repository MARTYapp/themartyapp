import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export interface Analysis {
  sentiment: "positive" | "negative" | "neutral";
  confidence?: number;
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
        content: "You are an NLP analyzer. Classify sentiment as positive, negative, or neutral. Also provide a confidence score as a number between 0 and 1."
      },
      { role: "user", content: input }
    ];

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      max_tokens: 50
    });

    const message = completion.choices?.[0]?.message;
    const content = message?.content?.toLowerCase() || "";

    let sentiment: Analysis["sentiment"] = "neutral";
    if (content.includes("positive")) {
      sentiment = "positive";
    } else if (content.includes("negative")) {
      sentiment = "negative";
    }

    // Attempt to parse confidence from content, expecting a number between 0 and 1
    let confidence: number | undefined = undefined;
    const confidenceMatch = content.match(/confidence[:\s]*([0-9]*\.?[0-9]+)/);
    if (confidenceMatch) {
      const parsed = parseFloat(confidenceMatch[1]);
      if (!isNaN(parsed) && parsed >= 0 && parsed <= 1) {
        confidence = parsed;
      }
    }

    return { sentiment, confidence };
  } catch (err) {
    console.error("NLP error:", err);
    return { sentiment: "neutral" };
  }
}
