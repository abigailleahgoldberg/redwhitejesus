import { posts } from "./data";

const CATEGORY_COLORS: Record<string, string> = {
  Culture: "#1B3A6B",
  History: "#7A5200",
  Religion: "#CC2200",
  Community: "#2a6e2a",
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
            color: "#B8960C",
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
            color: "#1A1A1A",
            fontFamily: "var(--font-heading), serif",
            marginBottom: 16,
          }}
        >
          Faith. History. Culture.
        </h1>
        <p style={{ color: "#6A6A6A", fontSize: 17, maxWidth: 520, margin: "0 auto" }}>
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
              backgroundColor: "#FFFFFF",
              border: "1px solid #E8E6E1",
              borderRadius: 8,
              padding: 28,
              display: "block",
              textDecoration: "none",
              transition: "border-color 0.2s, box-shadow 0.2s",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                display: "inline-block",
                backgroundColor: CATEGORY_COLORS[post.category] || "#6A6A6A",
                color: "#FFFFFF",
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
                color: "#1A1A1A",
                fontSize: 19,
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: 10,
                fontFamily: "var(--font-heading), serif",
              }}
            >
              {post.title}
            </h2>
            <p
              style={{
                color: "#6A6A6A",
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
              <span style={{ color: "#8A8A8A", fontSize: 12 }}>
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
