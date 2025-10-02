import type { NextApiRequest, NextApiResponse } from "next";
import { martyRespond } from "../../../../martyengine";

type ResponseData = {
  reply?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { message } = req.body;
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required and must be a string" });
    }

    const reply = await martyRespond(message);
    res.status(200).json({ reply });
  } catch (err: unknown) {
    console.error("Error in /api/marty/respond:", err);
    res.status(500).json({ error: (err as Error).message || "Internal server error" });
  }
}
