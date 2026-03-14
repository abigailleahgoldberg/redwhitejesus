import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { holidays, getHolidayBySlug, getRelatedHolidays } from "../../data/holidays";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return holidays.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const holiday = getHolidayBySlug(slug);
  if (!holiday) return {};

  return {
    title: `${holiday.name} — Christian Holiday | RedWhiteJesus`,
    description: holiday.description,
    openGraph: {
      title: `${holiday.name} — Christian Holiday`,
      description: holiday.description,
      url: `https://redwhitejesus.com/holidays/${holiday.slug}`,
      siteName: "RedWhiteJesus",
      type: "website",
    },
    metadataBase: new URL("https://redwhitejesus.com"),
  };
}

const CROSS_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
  </svg>
);

const BOOK_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const CALENDAR_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
);

const ARROW_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export default async function HolidayPage({ params }: Props) {
  const { slug } = await params;
  const holiday = getHolidayBySlug(slug);

  if (!holiday) notFound();

  const related = getRelatedHolidays(slug, 4);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: holiday.name,
    description: holiday.description,
    url: `https://redwhitejesus.com/holidays/${holiday.slug}`,
    organizer: {
      "@type": "Organization",
      name: "Christian Church",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
        {/* Breadcrumb */}
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "16px 24px",
          }}
        >
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              color: "#8A8A8A",
            }}
            aria-label="Breadcrumb"
          >
            <a
              href="/"
              style={{ color: "#8A8A8A", textDecoration: "none" }}
            >
              Home
            </a>
            <span>/</span>
            <a
              href="/calendar"
              style={{ color: "#8A8A8A", textDecoration: "none" }}
            >
              Holidays
            </a>
            <span>/</span>
            <span style={{ color: "#1A1A1A", fontWeight: 600 }}>
              {holiday.name}
            </span>
          </nav>
        </div>

        {/* Hero */}
        <section
          style={{
            backgroundColor: "#F8F7F5",
            borderTop: "1px solid #E8E6E1",
            borderBottom: "1px solid #E8E6E1",
            padding: "64px 24px",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 56,
                height: 56,
                backgroundColor: "rgba(204,34,0,0.08)",
                border: "1px solid rgba(204,34,0,0.2)",
                borderRadius: "50%",
                marginBottom: 24,
                color: "#CC2200",
              }}
            >
              {CROSS_ICON}
            </div>
            <h1
              style={{
                fontSize: "clamp(32px, 6vw, 60px)",
                fontWeight: 800,
                color: "#1A1A1A",
                fontFamily: "var(--font-heading), serif",
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              {holiday.name}
            </h1>
            <p
              style={{
                fontSize: "clamp(16px, 2.5vw, 20px)",
                color: "#4A4A4A",
                lineHeight: 1.7,
                maxWidth: 640,
                margin: "0 auto",
              }}
            >
              {holiday.description}
            </p>
            {!holiday.isMoveable && holiday.day && (
              <div
                style={{
                  marginTop: 20,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E8E6E1",
                  borderRadius: 6,
                  padding: "8px 16px",
                  color: "#B8960C",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                <span style={{ color: "#B8960C" }}>{CALENDAR_ICON}</span>
                {new Date(2000, holiday.month - 1, holiday.day).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                })}
                {" each year"}
              </div>
            )}
            {holiday.isMoveable && (
              <div
                style={{
                  marginTop: 20,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E8E6E1",
                  borderRadius: 6,
                  padding: "8px 16px",
                  color: "#6A6A6A",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                <span style={{ color: "#6A6A6A" }}>{CALENDAR_ICON}</span>
                Moveable feast — date varies each year
              </div>
            )}
          </div>
        </section>

        {/* Main Content */}
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "64px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 48,
          }}
        >
          {/* Significance */}
          <section>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 4,
                  height: 32,
                  backgroundColor: "#CC2200",
                  borderRadius: 2,
                  flexShrink: 0,
                }}
              />
              <h2
                style={{
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  fontFamily: "var(--font-heading), serif",
                }}
              >
                Significance
              </h2>
            </div>
            <p
              style={{
                color: "#4A4A4A",
                fontSize: 16,
                lineHeight: 1.85,
              }}
            >
              {holiday.significance}
            </p>
          </section>

          {/* Scripture */}
          <section>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 4,
                  height: 32,
                  backgroundColor: "#B8960C",
                  borderRadius: 2,
                  flexShrink: 0,
                }}
              />
              <h2
                style={{
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  fontFamily: "var(--font-heading), serif",
                }}
              >
                Scripture
              </h2>
            </div>
            <blockquote
              style={{
                backgroundColor: "#F8F7F5",
                border: "1px solid #E8E6E1",
                borderLeft: "4px solid #B8960C",
                borderRadius: "0 8px 8px 0",
                padding: "24px 28px",
                margin: 0,
              }}
            >
              <div
                style={{
                  color: "#B8960C",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {BOOK_ICON}
                {holiday.scriptureRef}
              </div>
              <p
                style={{
                  color: "#1A1A1A",
                  fontSize: 18,
                  lineHeight: 1.7,
                  fontFamily: "var(--font-heading), serif",
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                &ldquo;{holiday.scriptureText}&rdquo;
              </p>
            </blockquote>
          </section>

          {/* How Observed */}
          <section>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 4,
                  height: 32,
                  backgroundColor: "#CC2200",
                  borderRadius: 2,
                  flexShrink: 0,
                }}
              />
              <h2
                style={{
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  fontFamily: "var(--font-heading), serif",
                }}
              >
                How It Is Observed
              </h2>
            </div>
            <p
              style={{
                color: "#4A4A4A",
                fontSize: 16,
                lineHeight: 1.85,
              }}
            >
              {holiday.howObserved}
            </p>
          </section>
        </div>

        {/* Related Holidays */}
        <section
          style={{
            backgroundColor: "#F8F7F5",
            borderTop: "1px solid #E8E6E1",
            padding: "64px 24px",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <div
                style={{
                  color: "#B8960C",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                The Liturgical Year
              </div>
              <h2
                style={{
                  fontSize: "clamp(20px, 3vw, 30px)",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  fontFamily: "var(--font-heading), serif",
                }}
              >
                Other Christian Holidays
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 20,
              }}
            >
              {related.map((rel) => (
                <a
                  key={rel.slug}
                  href={`/holidays/${rel.slug}`}
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E8E6E1",
                    borderRadius: 8,
                    padding: "20px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    textDecoration: "none",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    style={{
                      color: "#CC2200",
                      fontSize: 16,
                      fontWeight: 700,
                      fontFamily: "var(--font-heading), serif",
                    }}
                  >
                    {rel.name}
                  </div>
                  <p
                    style={{
                      color: "#6A6A6A",
                      fontSize: 13,
                      lineHeight: 1.6,
                      flex: 1,
                    }}
                  >
                    {rel.description}
                  </p>
                  <span
                    style={{
                      color: "#B8960C",
                      fontSize: 12,
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    Learn more {ARROW_ICON}
                  </span>
                </a>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <a
                href="/calendar"
                style={{
                  border: "2px solid #CC2200",
                  color: "#CC2200",
                  padding: "12px 32px",
                  borderRadius: 4,
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                View Full Calendar
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
