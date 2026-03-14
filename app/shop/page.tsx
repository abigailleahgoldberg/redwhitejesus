export const metadata = {
  title: "Shop -- RedWhiteJesus",
  description:
    "Christian-American gear, gifts, and apparel. Blessed and dressed. Shop RedWhiteJesus.",
};

const PRODUCTS = [
  {
    name: "RedWhiteJesus Classic Tee",
    price: "$28",
    desc: "Red, white, and blessed. The original. Available S-4XL in classic and fitted cuts.",
    tag: "Bestseller",
    href: "https://store.redwhitejesus.com/products/classic-tee?tag=redwhitejesus-20",
  },
  {
    name: "Cross & Stars Cap",
    price: "$25",
    desc: "For the Christian American who needs a hat with the right priorities. Adjustable fit.",
    tag: "Fan Favorite",
    href: "https://store.redwhitejesus.com/products/cross-stars-cap?tag=redwhitejesus-20",
  },
  {
    name: "Blessed & Dressed Hoodie",
    price: "$48",
    desc: "Heavyweight fleece. Front pocket. The words speak for themselves. As do the vibes.",
    tag: "New",
    href: "https://store.redwhitejesus.com/products/blessed-hoodie?tag=redwhitejesus-20",
  },
  {
    name: "One Nation Tote",
    price: "$18",
    desc: "For your Bible, your potluck dish, your groceries, and your general belongings. Canvas.",
    tag: null,
    href: "https://store.redwhitejesus.com/products/one-nation-tote?tag=redwhitejesus-20",
  },
  {
    name: "Grace Mug",
    price: "$16",
    desc: "Your morning coffee, now with 100% more theological significance. 14oz ceramic.",
    tag: "Gift Idea",
    href: "https://store.redwhitejesus.com/products/grace-mug?tag=redwhitejesus-20",
  },
  {
    name: "Hallelujah Sticker Pack",
    price: "$10",
    desc: "Five premium vinyl stickers. Weatherproof. Perfect for Bibles, laptops, and bumpers.",
    tag: null,
    href: "https://store.redwhitejesus.com/products/hallelujah-stickers?tag=redwhitejesus-20",
  },
];

const OCCASIONS = [
  { name: "Christmas", href: "https://store.redwhitejesus.com/collections/christmas?tag=redwhitejesus-20" },
  { name: "Easter", href: "https://store.redwhitejesus.com/collections/easter?tag=redwhitejesus-20" },
  { name: "Baptism", href: "https://store.redwhitejesus.com/collections/baptism?tag=redwhitejesus-20" },
  { name: "Graduation", href: "https://store.redwhitejesus.com/collections/graduation?tag=redwhitejesus-20" },
  { name: "Wedding", href: "https://store.redwhitejesus.com/collections/wedding?tag=redwhitejesus-20" },
  { name: "Just Because", href: "https://store.redwhitejesus.com/collections/just-because?tag=redwhitejesus-20" },
];

export default function ShopPage() {
  return (
    <div>
      {/* Header */}
      <div
        style={{
          background: "#F8F7F5",
          padding: "64px 24px 56px",
          textAlign: "center",
          borderBottom: "1px solid #E8E6E1",
        }}
      >
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
          Blessed and Dressed
        </div>
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 52px)",
            fontWeight: 800,
            color: "#1A1A1A",
            fontFamily: "var(--font-heading), serif",
            marginBottom: 16,
          }}
        >
          The RedWhiteJesus Shop
        </h1>
        <p
          style={{
            color: "#6A6A6A",
            fontSize: 17,
            maxWidth: 480,
            margin: "0 auto 28px",
            lineHeight: 1.6,
          }}
        >
          Christian-American gear that your pastor, your grandma, and your entire small group will approve of. Probably.
        </p>
        <a
          href="https://store.redwhitejesus.com?tag=redwhitejesus-20"
          style={{
            backgroundColor: "#CC2200",
            color: "#FFFFFF",
            padding: "14px 36px",
            borderRadius: 4,
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Visit Full Store
        </a>
      </div>

      {/* Occasions */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 30px)",
              fontWeight: 700,
              color: "#1A1A1A",
              fontFamily: "var(--font-heading), serif",
            }}
          >
            Shop by Occasion
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
          }}
        >
          {OCCASIONS.map((occ) => (
            <a
              key={occ.name}
              href={occ.href}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                backgroundColor: "#FFFFFF",
                border: "1px solid #E8E6E1",
                borderRadius: 8,
                padding: "18px 24px",
                color: "#1A1A1A",
                fontSize: 13,
                fontWeight: 600,
                minWidth: 110,
                textDecoration: "none",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              <span>{occ.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "16px 24px 64px" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <h2
            style={{
              fontSize: "clamp(20px, 3vw, 30px)",
              fontWeight: 700,
              color: "#1A1A1A",
              fontFamily: "var(--font-heading), serif",
            }}
          >
            Featured Products
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {PRODUCTS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E8E6E1",
                borderRadius: 8,
                padding: 24,
                display: "block",
                textDecoration: "none",
                position: "relative",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              {p.tag && (
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    backgroundColor: "#CC2200",
                    color: "#FFFFFF",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "3px 8px",
                    borderRadius: 2,
                  }}
                >
                  {p.tag}
                </div>
              )}
              <div
                style={{
                  backgroundColor: "#F8F7F5",
                  borderRadius: 6,
                  height: 160,
                  marginBottom: 18,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#CC2200" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
                </svg>
              </div>
              <h3
                style={{
                  color: "#1A1A1A",
                  fontSize: 17,
                  fontWeight: 700,
                  marginBottom: 8,
                  fontFamily: "var(--font-heading), serif",
                }}
              >
                {p.name}
              </h3>
              <p
                style={{
                  color: "#6A6A6A",
                  fontSize: 13,
                  lineHeight: 1.6,
                  marginBottom: 16,
                }}
              >
                {p.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#B8960C", fontSize: 20, fontWeight: 700 }}>
                  {p.price}
                </span>
                <span
                  style={{
                    backgroundColor: "#CC2200",
                    color: "#FFFFFF",
                    padding: "8px 16px",
                    borderRadius: 4,
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                  }}
                >
                  Shop Now
                </span>
              </div>
            </a>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: 40,
            padding: "32px",
            backgroundColor: "#F8F7F5",
            border: "1px solid #E8E6E1",
            borderRadius: 8,
          }}
        >
          <p
            style={{
              color: "#1A1A1A",
              fontSize: 18,
              fontWeight: 600,
              marginBottom: 8,
              fontFamily: "var(--font-heading), serif",
            }}
          >
            More gear where that came from.
          </p>
          <p style={{ color: "#6A6A6A", fontSize: 14, marginBottom: 20 }}>
            The full store has everything from tees to mugs to gifts for every occasion.
          </p>
          <a
            href="https://store.redwhitejesus.com?tag=redwhitejesus-20"
            style={{
              backgroundColor: "#CC2200",
              color: "#FFFFFF",
              padding: "14px 36px",
              borderRadius: 4,
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            See Everything &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
