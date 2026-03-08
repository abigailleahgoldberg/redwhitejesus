import { posts } from "./data";

const CATEGORY_COLORS: Record<string, string> = {
  Culture: "#1B3A6B",
  History: "#4a3000",
  Religion: "#CC2200",
  Community: "#2a4a2a",
};

export const metadata = {
  title: "Blog -- RedWhiteJesus",
  description:
    "Faith, history, and culture for Christian Americans. Stories about Easter, Advent, American Christianity, and more.",
};

export default function BlogPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <div
          style={{
            color: "#D4AF37",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          From the RedWhiteJesus Blog
        </div>
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 52px)",
            fontWeight: 800,
            color: "#F5F0E8",
            fontFamily: "Georgia, serif",
            marginBottom: 16,
          }}
        >
          Faith. History. Culture.
        </h1>
        <p style={{ color: "#a09888", fontSize: 17, maxWidth: 520, margin: "0 auto" }}>
          Everything you wanted to know about Christian-American life, history, and tradition.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 28,
        }}
      >
        {sorted.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{
              backgroundColor: "#110e16",
              border: "1px solid #2a2030",
              borderRadius: 8,
              padding: 28,
              display: "block",
              textDecoration: "none",
              transition: "border-color 0.2s",
            }}
          >
            <div
              style={{
                display: "inline-block",
                backgroundColor: CATEGORY_COLORS[post.category] || "#2a2030",
                color: "#F5F0E8",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "4px 10px",
                borderRadius: 3,
                marginBottom: 14,
              }}
            >
              {post.category}
            </div>
            <h2
              style={{
                color: "#F5F0E8",
                fontSize: 19,
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: 10,
                fontFamily: "Georgia, serif",
              }}
            >
              {post.title}
            </h2>
            <p
              style={{
                color: "#a09888",
                fontSize: 14,
                lineHeight: 1.7,
                marginBottom: 16,
              }}
            >
              {post.description}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ color: "#5a5060", fontSize: 12 }}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span style={{ color: "#CC2200", fontSize: 13, fontWeight: 600 }}>
                Read more &rarr;
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
