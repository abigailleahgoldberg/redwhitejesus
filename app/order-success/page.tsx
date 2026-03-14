"use client";

import { useEffect } from "react";
import { useCart } from "../../lib/cart-context";

export default function OrderSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div
      style={{
        maxWidth: 640,
        margin: "0 auto",
        padding: "80px 24px 120px",
        textAlign: "center",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Cross checkmark icon */}
      <div
        style={{
          width: 80,
          height: 80,
          backgroundColor: "rgba(212,175,55,0.15)",
          border: "2px solid #D4AF37",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 32,
        }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="2.5"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <div
        style={{
          color: "#D4AF37",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: 16,
        }}
      >
        Order Confirmed
      </div>

      <h1
        style={{
          fontSize: "clamp(28px, 5vw, 48px)",
          fontWeight: 800,
          color: "#F5F0E8",
          fontFamily: "Georgia, serif",
          marginBottom: 16,
          lineHeight: 1.1,
        }}
      >
        Blessed and ordered.
      </h1>

      <p
        style={{
          color: "#a09888",
          fontSize: 17,
          lineHeight: 1.7,
          marginBottom: 12,
          maxWidth: 480,
        }}
      >
        Your order is confirmed and on its way. You'll receive a confirmation
        email shortly with tracking information.
      </p>

      <p
        style={{
          color: "#a09888",
          fontSize: 15,
          lineHeight: 1.7,
          marginBottom: 40,
        }}
      >
        Thank you for shopping with RedWhiteJesus. One nation, under God,
        undeniably well-dressed.
      </p>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
        <a
          href="/"
          style={{
            backgroundColor: "#CC2200",
            color: "#F5F0E8",
            padding: "14px 32px",
            borderRadius: 4,
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Back to Home
        </a>
        <a
          href="/blog"
          style={{
            border: "2px solid #D4AF37",
            color: "#D4AF37",
            padding: "14px 32px",
            borderRadius: 4,
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Read the Blog
        </a>
      </div>
    </div>
  );
}
