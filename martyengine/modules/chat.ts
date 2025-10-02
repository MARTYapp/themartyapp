export interface Analysis {
  sentiment: "positive" | "negative" | "neutral";
  [key: string]: unknown;
}

export function chatHandler(input: string, analysis: Analysis): string {
  switch (analysis.sentiment) {
    case "negative":
      return "Sounds heavy — want to unpack that a little more?";
    case "positive":
      return "Love that energy. Tell me more.";
    case "neutral":
    default:
      return "Okay, I hear you. What else is on your mind?";
  }
}
