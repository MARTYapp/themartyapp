import type { NextApiRequest, NextApiResponse } from 'next'
import { martyRespond } from '../../../../martyengine'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { message } = req.body
  const reply = await martyRespond(message || "")
  res.status(200).json({ reply })
}
