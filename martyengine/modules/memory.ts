export type Message = {
  role: "user" | "marty";
  content: string;
  ts: number;
};

let conversation: Message[] = [];

export function addMessage(role: "user" | "marty", content: string) {
  conversation.push({ role, content, ts: Date.now() });
  // Optional: trim history to avoid blowing up
  if (conversation.length > 20) {
    conversation = conversation.slice(-20);
  }
}

export function getConversation(): Message[] {
  return conversation;
}

export function clearConversation() {
  conversation = [];
}