"use client";

import { useState } from "react";
import { useCart } from "../lib/cart-context";

const NAV_LINKS = [
  { label: "Shop", href: "https://store.redwhitejesus.com" },
  { label: "Holidays", href: "/calendar" },
  { label: "Daily Verse", href: "/daily-verse" },
  { label: "Cart", href: "/cart" },
  { label: "Blog", href: "/blog" },
  { label: "Get Involved", href: "/advertise" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItemCount } = useCart();

  return (
    <>
      <header
        style={{
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid #E8E6E1",
          position: "sticky",
          top: 0,
          zIndex: 200,
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        }}
      >
        <nav
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 24px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 4,
              textDecoration: "none",
            }}
          >
            <span
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#1A1A1A",
                letterSpacing: "0.02em",
                fontFamily: "var(--font-heading), serif",
              }}
            >
              Red White
            </span>
            <span
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#CC2200",
                letterSpacing: "0.02em",
                fontFamily: "var(--font-heading), serif",
              }}
            >
              Jesus
            </span>
          </a>

          {/* Desktop nav */}
          <div className="desktop-nav" style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: "#1A1A1A",
                  fontSize: 15,
                  fontWeight: 500,
                  letterSpacing: "0.03em",
                  opacity: 0.85,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {link.label === "Cart" && cartItemCount > 0 ? (
                  <>
                    Cart
                    <span
                      style={{
                        backgroundColor: "#CC2200",
                        color: "#FFFFFF",
                        fontSize: 11,
                        fontWeight: 700,
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {cartItemCount}
                    </span>
                  </>
                ) : (
                  link.label
                )}
              </a>
            ))}
          </div>

          {/* Mobile right side: cart icon + hamburger */}
          <div className="mobile-nav-controls" style={{ display: "none", alignItems: "center", gap: 16 }}>
            {/* Cart icon */}
            <a
              href="/cart"
              style={{
                position: "relative",
                color: "#1A1A1A",
                textDecoration: "none",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              {cartItemCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: -6,
                    right: -6,
                    backgroundColor: "#CC2200",
                    color: "#FFFFFF",
                    fontSize: 10,
                    fontWeight: 700,
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {cartItemCount}
                </span>
              )}
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 4,
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
              aria-label="Toggle menu"
            >
              <span
                style={{
                  display: "block",
                  width: 24,
                  height: 2,
                  backgroundColor: "#1A1A1A",
                  transition: "all 0.2s",
                  transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 24,
                  height: 2,
                  backgroundColor: "#1A1A1A",
                  transition: "all 0.2s",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 24,
                  height: 2,
                  backgroundColor: "#1A1A1A",
                  transition: "all 0.2s",
                  transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
                }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen overlay menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 190,
            backgroundColor: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
            paddingTop: 64,
          }}
          onClick={() => setMenuOpen(false)}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: "#1A1A1A",
                fontSize: 28,
                fontWeight: 700,
                fontFamily: "var(--font-heading), serif",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              {link.label}
              {link.label === "Cart" && cartItemCount > 0
                ? ` (${cartItemCount})`
                : ""}
            </a>
          ))}

          <a
            href="https://store.redwhitejesus.com"
            style={{
              marginTop: 16,
              backgroundColor: "#CC2200",
              color: "#FFFFFF",
              padding: "14px 40px",
              borderRadius: 4,
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Shop Now
          </a>
        </div>
      )}

      {/* Sticky mobile CTA bar */}
      <div
        className="mobile-cta-bar"
        style={{
          display: "none",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 150,
          backgroundColor: "#FFFFFF",
          borderTop: "1px solid #E8E6E1",
          boxShadow: "0 -2px 12px rgba(0,0,0,0.08)",
          padding: "12px 16px",
          gap: 12,
        }}
      >
        <a
          href="https://store.redwhitejesus.com"
          style={{
            flex: 1,
            backgroundColor: "#CC2200",
            color: "#FFFFFF",
            padding: "12px 16px",
            borderRadius: 4,
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          Shop Now
        </a>
        <a
          href="/cart"
          style={{
            flex: 1,
            border: "2px solid #D4AF37",
            color: "#B8960C",
            padding: "12px 16px",
            borderRadius: 4,
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          Cart{cartItemCount > 0 ? ` (${cartItemCount})` : ""}
        </a>
      </div>
    </>
  );
}
