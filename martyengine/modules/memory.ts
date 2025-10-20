export type Message = {
  role: "user" | "marty";
  content: string;
  ts: number;
};

let conversation: Message[] = [];

// ---------- Persistence Helpers ----------
function loadConversation() {
  try {
    const saved = localStorage.getItem("marty_conversation");
    if (saved) {
      conversation = JSON.parse(saved);
    }
  } catch {
    // Ignore for non-browser environments
  }
}

function saveConversation() {
  try {
    localStorage.setItem("marty_conversation", JSON.stringify(conversation));
  } catch {
    // Ignore if unavailable (e.g., SSR)
  }
}

// ---------- Core Memory Logic ----------
export function addMessage(role: "user" | "marty", content: string) {
  conversation.push({ role, content, ts: Date.now() });
  if (conversation.length > 20) {
    conversation = conversation.slice(-20);
  }
  saveConversation();
}

export function getConversation(): Message[] {
  if (!conversation.length) loadConversation();
  return conversation;
}

export function clearConversation() {
  conversation = [];
  try {
    localStorage.removeItem("marty_conversation");
  } catch {
    // Ignore in non-browser context
  }
}