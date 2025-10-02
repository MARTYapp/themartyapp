#!/bin/bash

echo "🚀 Starting full MARTY setup with OpenAI-powered engine..."

# 1️⃣ Install dependencies
if [ -f package.json ]; then
  echo "Installing npm dependencies..."
  npm install
else
  echo "package.json not found. Initializing a new Node project..."
  npm init -y
fi

# Always install required deps
npm install react react-dom next typescript @types/react @types/node tailwindcss postcss autoprefixer openai

# 2️⃣ Create basic folder structure
echo "Creating core folders..."
mkdir -p app/api/marty/respond
mkdir -p components
mkdir -p public/branding
mkdir -p martyengine/modules
mkdir -p scripts

# 3️⃣ Create placeholder files if missing
echo "Creating placeholder files..."
touch app/page.tsx app/layout.tsx
touch app/api/marty/respond/index.ts
touch components/.gitkeep
touch public/branding/.gitkeep
touch README.md
touch .env.local

# 4️⃣ API route
cat <<EOL > app/api/marty/respond/index.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { martyRespond } from '../../../martyengine'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { message } = req.body
  const reply = await martyRespond(message || "")
  res.status(200).json({ reply })
}
EOL

# 5️⃣ Starter page
cat <<EOL > app/page.tsx
"use client"
import { useState } from "react"

export default function HomePage() {
  const [input, setInput] = useState("")
  const [chat, setChat] = useState<{user: string, marty: string}[]>([])

  async function sendMessage() {
    const res = await fetch("/api/marty/respond", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    })
    const data = await res.json()
    setChat([...chat, { user: input, marty: data.reply }])
    setInput("")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 font-sans">
      <h1 className="text-3xl font-bold mb-4">The MARTY App</h1>
      <div className="w-full max-w-md space-y-3">
        {chat.map((c, i) => (
          <div key={i} className="p-2 rounded bg-gray-100">
            <p><strong>You:</strong> {c.user}</p>
            <p><strong>MARTY:</strong> {c.marty}</p>
          </div>
        ))}
      </div>
      <div className="flex mt-4 w-full max-w-md">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-grow border rounded-l px-2 py-1"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="bg-black text-white px-4 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  )
}
EOL

# 6️⃣ Marty Engine core modules
cat <<EOL > martyengine/index.ts
import { chatHandler } from "./modules/chat"
import { analyzeText } from "./modules/nlp"
import { reflect } from "./modules/reflection"

export async function martyRespond(message: string): Promise<string> {
  if (!message.trim()) return "Say something, I’m listening."

  const analysis = await analyzeText(message)
  const reply = chatHandler(message, analysis)
  const reflection = await reflect(message, analysis)

  return \`\${reply}\\n\\n💭 Reflection: \${reflection}\`
}
EOL

cat <<EOL > martyengine/modules/chat.ts
export function chatHandler(input: string, analysis: any): string {
  if (analysis.sentiment === "negative") {
    return "Sounds heavy — want to unpack that a little more?"
  }
  if (analysis.sentiment === "positive") {
    return "Love that energy. Tell me more."
  }
  return "Okay, I hear you. What else is on your mind?"
}
EOL

# 7️⃣ NLP with OpenAI
cat <<EOL > martyengine/modules/nlp.ts
import OpenAI from "openai"

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function analyzeText(input: string) {
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are an NLP analyzer. Classify sentiment as positive, negative, or neutral." },
        { role: "user", content: input }
      ],
      max_tokens: 20
    })

    const sentiment = completion.choices[0].message?.content?.toLowerCase().includes("positive")
      ? "positive"
      : completion.choices[0].message?.content?.toLowerCase().includes("negative")
      ? "negative"
      : "neutral"

    return { sentiment }
  } catch (err) {
    console.error("NLP error:", err)
    return { sentiment: "neutral" }
  }
}
EOL

# 8️⃣ Reflection with OpenAI
cat <<EOL > martyengine/modules/reflection.ts
import OpenAI from "openai"

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function reflect(input: string, analysis: any): Promise<string> {
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are MARTY, a supportive reflection bot. Respond briefly and empathetically." },
        { role: "user", content: \`User said: "\${input}" (sentiment: \${analysis.sentiment})\` }
      ],
      max_tokens: 50
    })
    return completion.choices[0].message?.content || "Hmm… I’m not sure what to say."
  } catch (err) {
    console.error("Reflection error:", err)
    return "I’m having trouble reflecting right now."
  }
}
EOL

# 9️⃣ Tailwind CSS setup
if [ ! -f tailwind.config.ts ]; then
  echo "Initializing Tailwind CSS..."
  npx tailwindcss init -p
fi

# 🔟 TypeScript config
if [ ! -f tsconfig.json ]; then
  echo "Creating tsconfig.json..."
  npx tsc --init
fi

# 1️⃣1️⃣ Env var reminder
if ! grep -q "OPENAI_API_KEY" .env.local; then
  echo "OPENAI_API_KEY=your_api_key_here" >> .env.local
fi

# 1️⃣2️⃣ Make setup scripts executable
chmod +x createmarty.sh setupMartyEngine.sh

# ✅ Done
echo "✅ MARTY Engine with OpenAI is ready!"
echo "👉 Add your OpenAI key to .env.local and run: npm run dev"