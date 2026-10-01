import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.status(200).json({
      connected: true,
      database: "Supabase PostgreSQL",
      orm: "Prisma"
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    res.status(500).json({
      connected: false,
      error: "Database connection failed"
    });
  }
}
