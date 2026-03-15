"use client";

import { useState, useEffect, useRef } from "react";

const COUPON = "BLESSED10";

export default function ExitIntent() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    if (localStorage.getItem("rwj-exit-intent-shown")) return;

    const onMouseLeave = (e: MouseEvent) => {
      if (triggered.current) return;
      if (e.clientY <= 10) {
        triggered.current = true;
        setVisible(true);
        localStorage.setItem("rwj-exit-intent-shown", "1");
      }
    };

    let lastScrollY = window.scrollY;
    let lastScrollTime = Date.now();
    const onScroll = () => {
      if (triggered.current) return;
      const now = Date.now();
      const delta = window.scrollY - lastScrollY;
      const elapsed = now - lastScrollTime;
      if (delta < -80 && elapsed < 300) {
        triggered.current = true;
        setVisible(true);
        localStorage.setItem("rwj-exit-intent-shown", "1");
      }
      lastScrollY = window.scrollY;
      lastScrollTime = now;
    };

    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, coupon: COUPON, site: "redwhitejesus" }),
      });
    } catch {}
    setSubmitted(true);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.72)",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
      fontFamily: "var(--font-body), 'Space Grotesk', sans-serif",
    }}>
      <div style={{
        background: "#F8F7F5",
        border: "2px solid #CC2200",
        maxWidth: 440,
        width: "100%",
        padding: "40px 36px",
        position: "relative",
      }}>
        <button
          onClick={() => setVisible(false)}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 12,
            right: 16,
            background: "none",
            border: "none",
            color: "#999",
            fontSize: 22,
            cursor: "pointer",
            lineHeight: 1,
          }}
        >
          &times;
        </button>

        {submitted ? (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 13, color: "#6A6A6A", marginBottom: 8 }}>
              Your discount code:
            </div>
            <div style={{
              fontSize: 28,
              fontFamily: "var(--font-heading), serif",
              color: "#CC2200",
              letterSpacing: 4,
              marginBottom: 16,
            }}>
              {COUPON}
            </div>
            <p style={{ fontSize: 14, color: "#6A6A6A", lineHeight: 1.6 }}>
              Use at checkout for 10% off. Blessed and well-dressed since Bethlehem.
            </p>
          </div>
        ) : (
          <>
            <div style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "2px",
              color: "#B8960C",
              textTransform: "uppercase",
              marginBottom: 8,
            }}>
              Before You Go
            </div>
            <h2 style={{
              fontFamily: "var(--font-heading), serif",
              fontSize: 28,
              color: "#1A1A1A",
              lineHeight: 1.15,
              marginBottom: 12,
            }}>
              Take 10% Off Your First Order
            </h2>
            <p style={{
              fontSize: 14,
              color: "#6A6A6A",
              lineHeight: 1.65,
              marginBottom: 24,
            }}>
              One Nation. Under God. Undeniably American. Enter your email and we will send you a discount code.
            </p>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{
                  padding: "12px 16px",
                  border: "1px solid #D8D4CE",
                  fontSize: 14,
                  outline: "none",
                  fontFamily: "inherit",
                  color: "#1A1A1A",
                  background: "#fff",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "13px",
                  background: "#CC2200",
                  color: "#fff",
                  border: "none",
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: "1px",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  textTransform: "uppercase",
                }}
              >
                Get My 10% Off
              </button>
            </form>
            <p style={{ fontSize: 11, color: "#aaa", marginTop: 12, lineHeight: 1.5 }}>
              One-time use. No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
