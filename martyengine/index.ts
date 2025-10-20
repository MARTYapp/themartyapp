import { chatHandler, Analysis as ChatAnalysis } from "./modules/chat";
import { analyzeText } from "./modules/nlp";
import { reflect } from "./modules/reflection";
import { addMessage, getConversation } from "./modules/memory";

// Primary orchestrator for MARTY's conversational flow
export async function martyRespond(message: string): Promise<string> {
  if (!message.trim()) return "Say something, I’m listening.";

  // Save user message
  addMessage("user", message);

  // Run sentiment + NLP analysis
  const analysis = await analyzeText(message);

  // Generate MARTY's brief real-time reply
  const reply = chatHandler(message, analysis as unknown as ChatAnalysis);

  // Get conversation history (last 10 for focus)
  const history = getConversation().slice(-10);

  // Generate contextual reflection
  const reflection = await reflect(message, analysis, history);

  // Persist MARTY's responses
  addMessage("marty", reply);
  addMessage("marty", `💭 Reflection: ${reflection}`);

  // Adaptive emotional pacing
  let separator = "\n\n💭 Reflection: ";
  if (analysis.sentiment === "negative") separator = "\n\n🕯️  Reflection: ";
  if (analysis.sentiment === "positive") separator = "\n\n⚡ Reflection: ";

  return `${reply}${separator}${reflection}`;
}