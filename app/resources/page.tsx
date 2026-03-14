import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Resources | RedWhiteJesus",
  description:
    "Trusted Christian resources — Bibles in 200+ translations, classic theology, Vatican documents, visual Bible study, and Christian culture.",
  openGraph: {
    title: "Christian Resources",
    description:
      "Trusted Christian resources for study, faith, and culture.",
    url: "https://redwhitejesus.com/resources",
    siteName: "RedWhiteJesus",
    type: "website",
  },
  metadataBase: new URL("https://redwhitejesus.com"),
};

const RESOURCES = [
  {
    name: "BibleGateway",
    url: "https://www.biblegateway.com",
    urlDisplay: "biblegateway.com",
    description:
      "The most comprehensive online Bible resource — full text in over 200 translations and 70 languages. Search by verse, passage, or keyword. Includes study notes, devotionals, and reading plans.",
    category: "Bible & Scripture",
    color: "#CC2200",
  },
  {
    name: "Christian Classics Ethereal Library",
    url: "https://ccel.org",
    urlDisplay: "ccel.org",
    description:
      "A digital library of thousands of classic Christian books and writings — from the early Church Fathers through the Reformation to the 19th century. Augustine, Aquinas, Calvin, Luther, Wesley, and much more. Free, searchable, and indispensable.",
    category: "Theology & History",
    color: "#B8960C",
  },
  {
    name: "Vatican Library",
    url: "https://www.vatican.va/content/vatican/en/archivio/biblioteca-apostolica-vaticana.html",
    urlDisplay: "vatican.va",
    description:
      "The official online home of Vatican documents, papal encyclicals, catechisms, and official Catholic teaching. Whether or not you're Catholic, the breadth of historic Christian documentation here is without parallel.",
    category: "Official Church Documents",
    color: "#5B2D8E",
  },
  {
    name: "The Bible Project",
    url: "https://bibleproject.com",
    urlDisplay: "bibleproject.com",
    description:
      "Beautiful, thoughtful animated videos that walk through every book of the Bible, major themes, and theological concepts. A remarkable resource for visual learners, new believers, and anyone who wants to understand Scripture more deeply.",
    category: "Visual Bible Study",
    color: "#CC2200",
  },
  {
    name: "Relevant Magazine",
    url: "https://relevantmagazine.com",
    urlDisplay: "relevantmagazine.com",
    description:
      "Christian culture, faith, and current events — written for people who take both their faith and the broader world seriously. Relevant covers theology, social justice, music, film, and what it means to live as a Christian in modern culture.",
    category: "Faith & Culture",
    color: "#B8960C",
  },
  {
    name: "Logos Bible Software",
    url: "https://www.logos.com",
    urlDisplay: "logos.com",
    description:
      "Professional-grade Bible study software used by pastors, theologians, and serious students of Scripture. The free tier offers substantial tools — original languages, cross-references, commentaries, and a massive library of resources.",
    category: "Bible Study Tools",
    color: "#2E7D32",
  },
];

const EXTERNAL_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const BOOK_ICON = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

export default function ResourcesPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* Page header */}
      <section
        style={{
          backgroundColor: "#F8F7F5",
          borderBottom: "1px solid #E8E6E1",
          padding: "64px 24px 56px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              backgroundColor: "rgba(204,34,0,0.08)",
              border: "1px solid rgba(204,34,0,0.2)",
              borderRadius: "50%",
              marginBottom: 24,
              color: "#CC2200",
            }}
          >
            {BOOK_ICON}
          </div>
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
            Go Deeper
          </div>
          <h1
            style={{
              fontSize: "clamp(30px, 5vw, 52px)",
              fontWeight: 800,
              color: "#1A1A1A",
              fontFamily: "var(--font-heading), serif",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Christian Resources
          </h1>
          <p
            style={{
              color: "#4A4A4A",
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.7,
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            Trusted tools and libraries for Scripture study, theology, church history,
            and Christian culture. Everything is free or has a generous free tier.
          </p>
        </div>
      </section>

      {/* Resources grid */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "64px 24px 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 28,
          }}
        >
          {RESOURCES.map((res) => (
            <div
              key={res.name}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E8E6E1",
                borderTop: `4px solid ${res.color}`,
                borderRadius: 10,
                padding: "28px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              }}
            >
              {/* Category badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignSelf: "flex-start",
                  backgroundColor: "rgba(184,150,12,0.1)",
                  border: "1px solid rgba(184,150,12,0.2)",
                  borderRadius: 4,
                  padding: "3px 10px",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#B8960C",
                }}
              >
                {res.category}
              </div>

              {/* Name */}
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#1A1A1A",
                  fontFamily: "var(--font-heading), serif",
                  margin: 0,
                }}
              >
                {res.name}
              </h2>

              {/* Description */}
              <p
                style={{
                  color: "#4A4A4A",
                  fontSize: 15,
                  lineHeight: 1.75,
                  flex: 1,
                  margin: 0,
                }}
              >
                {res.description}
              </p>

              {/* Link */}
              <a
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: res.color,
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: "none",
                  borderTop: "1px solid #E8E6E1",
                  paddingTop: 16,
                  marginTop: 4,
                }}
              >
                {res.urlDisplay}
                {EXTERNAL_ICON}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section
        style={{
          backgroundColor: "#F8F7F5",
          borderTop: "1px solid #E8E6E1",
          padding: "56px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              color: "#1A1A1A",
              fontFamily: "var(--font-heading), serif",
              marginBottom: 12,
            }}
          >
            Start with Today&rsquo;s Verse
          </h2>
          <p
            style={{
              color: "#6A6A6A",
              fontSize: 15,
              marginBottom: 28,
              lineHeight: 1.7,
            }}
          >
            A curated Bible verse every day — a simple way to keep Scripture at the center.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/daily-verse"
              style={{
                backgroundColor: "#CC2200",
                color: "#FFFFFF",
                padding: "14px 32px",
                borderRadius: 4,
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Daily Verse
            </a>
            <a
              href="/calendar"
              style={{
                border: "2px solid #D4AF37",
                color: "#B8960C",
                padding: "14px 32px",
                borderRadius: 4,
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Holiday Calendar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
