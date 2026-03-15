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

    // Send welcome email with coupon to subscriber
    const htmlContent =
      '<div style="max-width:600px;margin:0 auto;font-family:Arial,sans-serif;">' +
      '<div style="background:#CC2200;padding:32px;text-align:center;">' +
      '<h1 style="color:#ffffff;font-size:28px;margin:0;letter-spacing:2px;">RedWhiteJesus</h1>' +
      '</div>' +
      '<div style="padding:40px 32px;background:#ffffff;text-align:center;">' +
      '<h2 style="color:#CC2200;font-size:22px;margin-bottom:16px;">Welcome to the flock! You\'re officially blessed and well-dressed.</h2>' +
      '<p style="color:#333333;font-size:16px;line-height:1.6;margin-bottom:24px;">Here\'s 10% off your first order:</p>' +
      '<div style="background:#fff5f5;border:2px dashed #CC2200;padding:24px;margin:24px 0;display:inline-block;">' +
      '<p style="color:#333333;font-size:14px;margin:0 0 8px;">Your discount code:</p>' +
      '<p style="color:#CC2200;font-size:32px;font-weight:900;letter-spacing:4px;margin:0;">BLESSED10</p>' +
      '</div>' +
      '<p style="color:#333333;font-size:14px;margin:24px 0;">Use this code at checkout for 10% off your entire order.</p>' +
      '<a href="https://redwhitejesus.com/#shop" style="display:inline-block;background:#CC2200;color:#ffffff;font-weight:900;font-size:16px;padding:16px 40px;text-decoration:none;letter-spacing:1px;">SHOP NOW</a>' +
      '</div>' +
      '<div style="padding:24px 32px;background:#f5f5f5;text-align:center;">' +
      '<p style="color:#666666;font-size:12px;margin:0;">One Nation. Under God. Undeniably American.</p>' +
      '<p style="color:#666666;font-size:11px;margin:8px 0 0;opacity:0.6;">You received this because you subscribed at redwhitejesus.com</p>' +
      '</div>' +
      '</div>';

    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { name: "RedWhiteJesus", email: "abigailleahgoldberg@gmail.com" },
        to: [{ email }],
        subject: "Welcome! Here's 10% Off — God's Got Good Taste",
        htmlContent: htmlContent,
      }),
    });

    return NextResponse.json({
      success: true,
      discount: "BLESSED10",
    });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
