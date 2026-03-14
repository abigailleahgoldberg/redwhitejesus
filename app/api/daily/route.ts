import { NextResponse } from "next/server";
import { getDailyVerse } from "../../data/verses";

export const runtime = "edge";

export async function GET() {
  const now = new Date();
  // Day of year (0-indexed)
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const verse = getDailyVerse(dayOfYear);

  return NextResponse.json(verse, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
