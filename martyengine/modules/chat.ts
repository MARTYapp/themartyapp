export interface Analysis {
  sentiment: "positive" | "negative" | "neutral";
  [key: string]: unknown;
}

export function chatHandler(input: string, analysis: Analysis): string {
  const text = input.toLowerCase();

  switch (analysis.sentiment) {
    case "negative":
      if (text.includes("tired") || text.includes("alone") || text.includes("lost")) {
        return "Sounds like you’re running on fumes — want to talk about what’s been wearing you down?";
      }
      if (text.includes("angry") || text.includes("mad")) {
        return "Anger makes sense sometimes. What’s underneath it, you think?";
      }
      return "That sounds heavy — want to unpack it a little more?";
    case "positive":
      if (text.includes("win") || text.includes("good") || text.includes("finally")) {
        return "Hell yeah — that’s a solid moment. What made it click?";
      }
      return "Love that energy. Tell me more about what’s feeling right.";
    case "neutral":
    default:
      if (text.includes("idk") || text.includes("nothing") || text.includes("meh")) {
        return "Fair — sometimes it’s just one of those days. Want to check what’s underneath that?";
      }
      return "Okay, I hear you. What else is on your mind?";
  }
}
