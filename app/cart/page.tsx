"use client";

import { useState } from "react";
import { useCart } from "../../lib/cart-context";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cartItems }),
      });
      const data = await res.json();

      if (!res.ok || !data.url) {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      window.location.href = data.url;
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 860,
        margin: "0 auto",
        padding: "48px 24px 96px",
        minHeight: "60vh",
      }}
    >
      <div style={{ marginBottom: 40 }}>
        <div
          style={{
            color: "#B8960C",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Your Order
        </div>
        <h1
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 700,
            color: "#1A1A1A",
            fontFamily: "var(--font-heading), serif",
          }}
        >
          Your Cart
        </h1>
      </div>

      {cartItems.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "64px 24px",
            backgroundColor: "#F8F7F5",
            border: "1px solid #E8E6E1",
            borderRadius: 8,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              margin: "0 auto 24px",
              opacity: 0.4,
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
          <h2
            style={{
              color: "#1A1A1A",
              fontSize: 22,
              fontWeight: 600,
              marginBottom: 12,
              fontFamily: "var(--font-heading), serif",
            }}
          >
            Your cart is empty
          </h2>
          <p style={{ color: "#6A6A6A", fontSize: 15, marginBottom: 28 }}>
            Add some blessed gear and come back.
          </p>
          <a
            href="/"
            style={{
              backgroundColor: "#CC2200",
              color: "#FFFFFF",
              padding: "12px 28px",
              borderRadius: 4,
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Keep Shopping
          </a>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 24,
          }}
        >
          {/* Item list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.variantId}`}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E8E6E1",
                  borderRadius: 8,
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  flexWrap: "wrap",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                }}
              >
                {/* Icon placeholder */}
                <div
                  style={{
                    width: 72,
                    height: 72,
                    backgroundColor: "#F8F7F5",
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#CC2200"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v18M3 12h18"
                    />
                  </svg>
                </div>

                {/* Details */}
                <div style={{ flex: 1, minWidth: 160 }}>
                  <h3
                    style={{
                      color: "#1A1A1A",
                      fontSize: 16,
                      fontWeight: 600,
                      marginBottom: 4,
                    }}
                  >
                    {item.name}
                  </h3>
                  <div
                    style={{ color: "#B8960C", fontSize: 15, fontWeight: 700 }}
                  >
                    ${item.price.toFixed(2)} each
                  </div>
                </div>

                {/* Quantity controls */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.variantId,
                        item.quantity - 1
                      )
                    }
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 4,
                      border: "1px solid #E8E6E1",
                      backgroundColor: "#F8F7F5",
                      color: "#1A1A1A",
                      fontSize: 18,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    -
                  </button>
                  <span
                    style={{ color: "#1A1A1A", fontSize: 16, fontWeight: 600, minWidth: 24, textAlign: "center" }}
                  >
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.variantId,
                        item.quantity + 1
                      )
                    }
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 4,
                      border: "1px solid #E8E6E1",
                      backgroundColor: "#F8F7F5",
                      color: "#1A1A1A",
                      fontSize: 18,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>
                </div>

                {/* Line total */}
                <div
                  style={{
                    color: "#1A1A1A",
                    fontSize: 16,
                    fontWeight: 700,
                    minWidth: 64,
                    textAlign: "right",
                  }}
                >
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id, item.variantId)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#8A8A8A",
                    cursor: "pointer",
                    padding: 4,
                  }}
                  aria-label="Remove item"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E8E6E1",
              borderRadius: 8,
              padding: 28,
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                color: "#1A1A1A",
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 20,
                fontFamily: "var(--font-heading), serif",
              }}
            >
              Order Summary
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginBottom: 20,
              }}
            >
              {cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.variantId}-summary`}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#6A6A6A",
                    fontSize: 14,
                  }}
                >
                  <span>
                    {item.name} x{item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                borderTop: "1px solid #E8E6E1",
                paddingTop: 16,
                marginBottom: 24,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "#1A1A1A",
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                Total
              </span>
              <span
                style={{
                  color: "#B8960C",
                  fontSize: 24,
                  fontWeight: 800,
                  fontFamily: "var(--font-heading), serif",
                }}
              >
                ${total.toFixed(2)}
              </span>
            </div>

            {error && (
              <div
                style={{
                  backgroundColor: "rgba(204,34,0,0.06)",
                  border: "1px solid #CC2200",
                  borderRadius: 4,
                  padding: "12px 16px",
                  color: "#CC2200",
                  fontSize: 14,
                  marginBottom: 16,
                }}
              >
                {error}
              </div>
            )}

            <button
              onClick={handleCheckout}
              disabled={loading}
              style={{
                width: "100%",
                backgroundColor: loading ? "#882200" : "#CC2200",
                color: "#FFFFFF",
                padding: "16px 24px",
                borderRadius: 4,
                border: "none",
                fontWeight: 800,
                fontSize: 15,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "background-color 0.2s",
              }}
            >
              {loading ? "Redirecting..." : "Proceed to Checkout"}
            </button>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                marginTop: 16,
                color: "#8A8A8A",
                fontSize: 13,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              Secure checkout powered by Stripe
            </div>

            <button
              onClick={clearCart}
              style={{
                background: "none",
                border: "none",
                color: "#8A8A8A",
                fontSize: 13,
                cursor: "pointer",
                marginTop: 12,
                textDecoration: "underline",
                display: "block",
                margin: "12px auto 0",
              }}
            >
              Clear cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
