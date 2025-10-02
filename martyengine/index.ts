import { chatHandler, Analysis as ChatAnalysis } from "./modules/chat";
import { analyzeText } from "./modules/nlp";
import { reflect } from "./modules/reflection";
import { addMessage, getConversation } from "./modules/memory";

// Use the shared Analysis type from chat to satisfy TS
export async function martyRespond(message: string): Promise<string> {
  if (!message.trim()) return "Say something, I’m listening.";

  // Save user message
  addMessage("user", message);

  // Analyze
  const analysis = await analyzeText(message);

  // Get MARTY's short reply
  const reply = chatHandler(message, analysis as ChatAnalysis);

  // Generate reflection with context
  const reflection = await reflect(message, analysis, getConversation());

  // Save MARTY’s response
  addMessage("marty", reply);
  addMessage("marty", `💭 Reflection: ${reflection}`);

  return `${reply}\n\n💭 Reflection: ${reflection}`;
}