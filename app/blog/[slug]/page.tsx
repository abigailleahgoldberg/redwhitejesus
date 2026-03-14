import { notFound } from "next/navigation";
import { posts } from "../data";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} -- RedWhiteJesus`,
    description: post.description,
  };
}

function renderContent(content: string) {
  const paragraphs = content.split(/\n\n+/);
  return paragraphs.map((para, i) => {
    if (para.startsWith("**") && para.endsWith("**")) {
      return (
        <h3
          key={i}
          style={{
            color: "#B8960C",
            fontSize: 18,
            fontWeight: 700,
            marginTop: 32,
            marginBottom: 12,
            fontFamily: "var(--font-heading), serif",
          }}
        >
          {para.replace(/\*\*/g, "")}
        </h3>
      );
    }
    // Inline bold
    const parts = para.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p
        key={i}
        style={{
          color: "#4A4A4A",
          fontSize: 17,
          lineHeight: 1.8,
          marginBottom: 20,
        }}
      >
        {parts.map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={j} style={{ color: "#1A1A1A", fontWeight: 700 }}>
                {part.replace(/\*\*/g, "")}
              </strong>
            );
          }
          return part;
        })}
      </p>
    );
  });
}

const CATEGORY_COLORS: Record<string, string> = {
  Culture: "#1B3A6B",
  History: "#7A5200",
  Religion: "#CC2200",
  Community: "#2a6e2a",
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <div
        style={{
          backgroundColor: "#F8F7F5",
          borderBottom: "1px solid #E8E6E1",
          padding: "56px 24px 48px",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <a
            href="/blog"
            style={{
              color: "#8A8A8A",
              fontSize: 13,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 24,
              textDecoration: "none",
            }}
          >
            &larr; Back to Blog
          </a>
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
              marginBottom: 16,
            }}
          >
            {post.category}
          </div>
          <h1
            style={{
              fontSize: "clamp(26px, 4.5vw, 46px)",
              fontWeight: 800,
              color: "#1A1A1A",
              lineHeight: 1.2,
              fontFamily: "var(--font-heading), serif",
              marginBottom: 16,
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              color: "#6A6A6A",
              fontSize: 17,
              lineHeight: 1.6,
              marginBottom: 20,
            }}
          >
            {post.description}
          </p>
          <span style={{ color: "#8A8A8A", fontSize: 13 }}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "48px 24px 64px",
        }}
      >
        {renderContent(post.content)}

        {/* Shop CTA */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E8E6E1",
            borderLeft: "4px solid #CC2200",
            borderRadius: 8,
            padding: 28,
            marginTop: 48,
            marginBottom: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
          }}
        >
          <div>
            <div
              style={{
                color: "#1A1A1A",
                fontWeight: 700,
                fontSize: 17,
                marginBottom: 4,
              }}
            >
              Blessed and well-dressed.
            </div>
            <p style={{ color: "#6A6A6A", fontSize: 14 }}>
              RedWhiteJesus gear for the Christian American with taste.
            </p>
          </div>
          <a
            href="https://store.redwhitejesus.com?tag=redwhitejesus-20"
            style={{
              backgroundColor: "#CC2200",
              color: "#FFFFFF",
              padding: "12px 24px",
              borderRadius: 4,
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.04em",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Shop Now
          </a>
        </div>

        {/* More posts */}
        {otherPosts.length > 0 && (
          <div>
            <div
              style={{
                color: "#B8960C",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              More from the Blog
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {otherPosts.map((p) => (
                <a
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E8E6E1",
                    borderRadius: 8,
                    padding: "20px 24px",
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "#1A1A1A",
                        fontWeight: 600,
                        fontSize: 15,
                        marginBottom: 4,
                      }}
                    >
                      {p.title}
                    </div>
                    <div style={{ color: "#8A8A8A", fontSize: 13 }}>
                      {p.category}
                    </div>
                  </div>
                  <span style={{ color: "#CC2200", fontSize: 18, flexShrink: 0 }}>
                    &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
