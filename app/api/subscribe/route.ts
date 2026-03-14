import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Newsletter service not configured" },
        { status: 500 }
      );
    }

    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [3],
        updateEnabled: true,
        attributes: {
          SOURCE: "redwhitejesus.com",
        },
      }),
    });

    if (!res.ok && res.status !== 204) {
      const body = await res.json().catch(() => ({}));
      // 400 with "Contact already exist" is fine
      if (body?.code !== "duplicate_parameter") {
        console.error("Brevo error:", body);
        return NextResponse.json(
          { error: "Failed to subscribe" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      discount: "BLESSED15",
    });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
