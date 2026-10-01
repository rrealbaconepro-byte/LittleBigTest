import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    online: true,
    databaseConfigured: Boolean(process.env.DATABASE_URL),
    prismaConfigured: Boolean(process.env.DATABASE_URL && process.env.DIRECT_URL),
    name: "LittleBigAdventure"
  });
}
