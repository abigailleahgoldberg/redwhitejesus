export const metadata = {
  title: "Advertise -- RedWhiteJesus",
  description:
    "Reach Christian-American audiences with RedWhiteJesus. Advertising and partnership opportunities for brands that share our values.",
};

const PLACEMENTS = [
  {
    name: "Homepage Banner",
    desc: "Prime real estate at the top of redwhitejesus.com. Seen by every visitor, every session.",
    price: "From $150/month",
  },
  {
    name: "Blog Sidebar",
    desc: "Your brand alongside faith, culture, and history content. Ideal for lifestyle and gift brands.",
    price: "From $80/month",
  },
  {
    name: "Newsletter Mention",
    desc: "A featured mention in our email newsletter to an engaged subscriber list.",
    price: "From $60/issue",
  },
  {
    name: "Sponsored Blog Post",
    desc: "A full editorial-quality post about your brand, product, or story. Written in our voice.",
    price: "From $250/post",
  },
];

const ACCEPTED = [
  "Christian books, music, and media",
  "Faith-based apparel and gifts",
  "Family-friendly products and services",
  "Christian events, conferences, and ministries",
  "Educational resources and curricula",
  "American-made goods and small businesses",
  "Churches and non-profit organizations",
  "Family travel and experiences",
];

const REJECTED = [
  "Gambling and online casinos",
  "Adult content of any kind",
  "Anti-Christian or anti-religion content",
  "Politically partisan campaigns or PACs",
  "Products making unverified health claims",
  "Alcohol and tobacco",
  "Predatory financial products",
];

export default function AdvertisePage() {
  return (
    <div>
      {/* Header */}
      <div
        style={{
          background: "#F8F7F5",
          padding: "64px 24px 56px",
          textAlign: "center",
          borderBottom: "2px solid #D4AF37",
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
          Partner With Us
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
          Advertise on RedWhiteJesus
        </h1>
        <p
          style={{
            color: "#4A4A4A",
            fontSize: 17,
            maxWidth: 560,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Reach an engaged audience of Christian Americans who care about faith, culture, and community. We are selective about our partners because our readers trust us.
        </p>
      </div>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "64px 24px" }}>
        {/* Audience */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E8E6E1",
            borderLeft: "4px solid #D4AF37",
            borderRadius: 8,
            padding: "32px 36px",
            marginBottom: 48,
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          }}
        >
          <h2
            style={{
              color: "#B8960C",
              fontSize: 22,
              fontWeight: 700,
              fontFamily: "var(--font-heading), serif",
              marginBottom: 16,
            }}
          >
            Our Audience
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 24,
            }}
          >
            {[
              { stat: "Christian Americans", desc: "Our core audience: practicing and cultural Christians across denominations" },
              { stat: "Gift buyers", desc: "Readers actively shopping for Christian gifts, occasions, and celebrations" },
              { stat: "Faith + culture", desc: "Readers interested in how Christianity intersects with American life and history" },
            ].map((item) => (
              <div key={item.stat}>
                <div
                  style={{
                    color: "#CC2200",
                    fontWeight: 700,
                    fontSize: 16,
                    marginBottom: 6,
                  }}
                >
                  {item.stat}
                </div>
                <div style={{ color: "#6A6A6A", fontSize: 14, lineHeight: 1.6 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Placements */}
        <h2
          style={{
            color: "#1A1A1A",
            fontSize: "clamp(20px, 3vw, 28px)",
            fontWeight: 700,
            fontFamily: "var(--font-heading), serif",
            marginBottom: 24,
          }}
        >
          Ad Placements
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            marginBottom: 56,
          }}
        >
          {PLACEMENTS.map((p) => (
            <div
              key={p.name}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E8E6E1",
                borderRadius: 8,
                padding: 24,
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              <h3
                style={{
                  color: "#1A1A1A",
                  fontSize: 17,
                  fontWeight: 700,
                  fontFamily: "var(--font-heading), serif",
                  marginBottom: 8,
                }}
              >
                {p.name}
              </h3>
              <p style={{ color: "#6A6A6A", fontSize: 14, lineHeight: 1.6, marginBottom: 14 }}>
                {p.desc}
              </p>
              <div style={{ color: "#B8960C", fontSize: 14, fontWeight: 700 }}>
                {p.price}
              </div>
            </div>
          ))}
        </div>

        {/* What we accept / reject */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 28,
            marginBottom: 56,
          }}
        >
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E8E6E1",
              borderTop: "3px solid #2a6e2a",
              borderRadius: 8,
              padding: 28,
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                color: "#2a6e2a",
                fontSize: 16,
                fontWeight: 700,
                marginBottom: 16,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              We Welcome
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {ACCEPTED.map((item) => (
                <li
                  key={item}
                  style={{
                    color: "#4A4A4A",
                    fontSize: 14,
                    padding: "6px 0",
                    borderBottom: "1px solid #E8E6E1",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                  }}
                >
                  <span style={{ color: "#2a6e2a", flexShrink: 0 }}>+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E8E6E1",
              borderTop: "3px solid #CC2200",
              borderRadius: 8,
              padding: 28,
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                color: "#CC2200",
                fontSize: 16,
                fontWeight: 700,
                marginBottom: 16,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              We Do Not Accept
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {REJECTED.map((item) => (
                <li
                  key={item}
                  style={{
                    color: "#4A4A4A",
                    fontSize: 14,
                    padding: "6px 0",
                    borderBottom: "1px solid #E8E6E1",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                  }}
                >
                  <span style={{ color: "#CC2200", flexShrink: 0 }}>--</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact CTA */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "2px solid #D4AF37",
            borderRadius: 8,
            padding: "36px 40px",
            textAlign: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <h2
            style={{
              color: "#1A1A1A",
              fontSize: 26,
              fontWeight: 700,
              fontFamily: "var(--font-heading), serif",
              marginBottom: 12,
            }}
          >
            Ready to partner with us?
          </h2>
          <p style={{ color: "#4A4A4A", fontSize: 15, marginBottom: 24, lineHeight: 1.6 }}>
            Send us a message. Tell us about your brand, your goals, and what you are hoping to accomplish. We will get back to you promptly.
          </p>
          <a
            href="mailto:advertise@redwhitejesus.com"
            style={{
              backgroundColor: "#D4AF37",
              color: "#1A1A1A",
              padding: "14px 40px",
              borderRadius: 4,
              fontWeight: 800,
              fontSize: 15,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Get in Touch
          </a>
          <p style={{ color: "#8A8A8A", fontSize: 12, marginTop: 16 }}>
            advertise@redwhitejesus.com -- We review every inquiry personally.
          </p>
        </div>
      </div>
    </div>
  );
}
