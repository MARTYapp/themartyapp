cat << 'EOF' > setupMartyEngine.sh
#!/bin/bash

# Create martyEngine folder
mkdir -p martyEngine

# --- dbt.ts ---
cat << 'EOD' > martyEngine/dbt.ts
export const dbtPrompt = \`
You are MARTY. Guide the user through DBT exercises:
- Mindfulness
- Opposite action
- Emotion regulation
- Distress tolerance

Use conversational, older-brother style humor. Call out avoidance like 'Nah, try again.'
\`;
EOD

# --- cbt.ts ---
cat << 'EOD' > martyEngine/cbt.ts
export const cbtPrompt = \`
Guide user through CBT techniques:
- Identify negative thoughts
- Challenge cognitive distortions
- Reframe thinking
Keep the tone casual but supportive.
\`;
EOD

# --- ef.ts ---
cat << 'EOD' > martyEngine/ef.ts
export const efPrompt = \`
Help the user improve executive function:
- Planning & prioritization
- Task initiation
- Time management
- Break procrastination loops
Use reminders and nudges in a friendly, firm tone.
\`;
EOD

# --- art.ts ---
cat << 'EOD' > martyEngine/art.ts
export const artPrompt = \`
Suggest creative/art therapy prompts:
- Quick sketches for emotions
- Journaling exercises
- Visualization exercises
Keep it playful but reflective.
\`;
EOD

# --- systemPrompts.ts ---
cat << 'EOD' > martyEngine/systemPrompts.ts
import { dbtPrompt } from "./dbt";
import { cbtPrompt } from "./cbt";
import { efPrompt } from "./ef";
import { artPrompt } from "./art";

export const baseSystemPrompt = \`
You are MARTY — the user’s resilient, older-brother style AI coach.
You combine DBT, CBT, executive-function skills, daily reviews, perfect day exercises, thought pattern recognition, and art therapy prompts.
Push users to reflect without therapy-speak. Humor is welcome.
Call out avoidance with lines like 'Nah, try again.'
\`;

export function assemblePrompt(modules: string[] = []) {
  let prompt = baseSystemPrompt;
  modules.forEach((mod) => {
    if (mod === "dbt") prompt += \`\\n\${dbtPrompt}\`;
    if (mod === "cbt") prompt += \`\\n\${cbtPrompt}\`;
    if (mod === "ef") prompt += \`\\n\${efPrompt}\`;
    if (mod === "art") prompt += \`\\n\${artPrompt}\`;
  });
  return prompt;
}
EOD

# --- utils.ts ---
cat << 'EOD' > martyEngine/utils.ts
const sessions: Record<string, any[]> = {};

export function saveUserMessage(userId: string, message: string) {
  if (!sessions[userId]) sessions[userId] = [];
  sessions[userId].push({ role: "user", content: message });
}

export function getUserHistory(userId: string) {
  return sessions[userId] || [];
}
EOD

# --- route.ts ---
cat << 'EOD' > app/api/marty/respond/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { assemblePrompt } from "../../../martyEngine/systemPrompts";
import { saveUserMessage, getUserHistory } from "../../../martyEngine/utils";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function selectModel(modules: string[]): string {
  if (modules.includes("ef") || modules.includes("cbt")) return "gpt-5-mini";
  return "gpt-5-nano";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages, modules = [], userId = "anon" } = body;

    // Save messages for memory
    messages.forEach((msg: any) => {
      if (msg.role === "user") saveUserMessage(userId, msg.content);
    });

    const history = getUserHistory(userId);
    const systemPrompt = assemblePrompt(modules);
    const model = selectModel(modules);

    const completion = await client.chat.completions.create({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        ...history,
        ...messages,
      ],
    });

    return NextResponse.json({
      reply: completion.choices[0].message?.content ?? "",
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to get MARTY response" },
      { status: 500 }
    );
  }
}
EOD

chmod +x setupMartyEngine.sh
echo "Setup script created. Run ./setupMartyEngine.sh to build martyEngine modules and route.ts."
EOF

echo "One-shot setup script created: setupMartyEngine.sh"