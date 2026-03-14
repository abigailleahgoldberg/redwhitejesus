import type { Metadata } from "next";
import { holidays } from "../data/holidays";

export const metadata: Metadata = {
  title: "Christian Holiday Calendar | RedWhiteJesus",
  description:
    "The complete Christian holiday calendar — Christmas, Easter, Good Friday, Ash Wednesday, Pentecost, Epiphany, Advent, Palm Sunday. Dates, history, and significance.",
  openGraph: {
    title: "Christian Holiday Calendar",
    description:
      "The complete Christian holiday calendar — dates, history, and significance for every major feast.",
    url: "https://redwhitejesus.com/calendar",
    siteName: "RedWhiteJesus",
    type: "website",
  },
  metadataBase: new URL("https://redwhitejesus.com"),
};

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Map holidays to months — for moveable feasts use approximateMonth
function getHolidaysForMonth(month: number) {
  return holidays.filter((h) => {
    if (!h.isMoveable && h.month === month) return true;
    if (h.isMoveable && h.approximateMonth === month) return true;
    return false;
  });
}

const ARROW_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export default function CalendarPage() {
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
              color: "#B8960C",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            The Liturgical Year
          </div>
          <h1
            style={{
              fontSize: "clamp(30px, 5vw, 54px)",
              fontWeight: 800,
              color: "#1A1A1A",
              fontFamily: "var(--font-heading), serif",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Christian Holiday Calendar
          </h1>
          <p
            style={{
              color: "#4A4A4A",
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.7,
              maxWidth: 580,
              margin: "0 auto",
            }}
          >
            The feasts and seasons that have shaped Christian worship and culture for
            two thousand years. Fixed dates and moveable feasts, month by month.
          </p>
        </div>
      </section>

      {/* Legend */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "24px 24px 0",
          display: "flex",
          gap: 24,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 13, color: "#6A6A6A", fontWeight: 500 }}>Key:</span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
            color: "#6A6A6A",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#CC2200",
            }}
          />
          Fixed date
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
            color: "#6A6A6A",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 10,
              height: 10,
              borderRadius: "50%",
              border: "2px dashed #B8960C",
              backgroundColor: "transparent",
            }}
          />
          Moveable feast
        </span>
      </div>

      {/* 12-month grid */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "32px 24px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}
      >
        {MONTH_NAMES.map((monthName, idx) => {
          const month = idx + 1;
          const monthHolidays = getHolidaysForMonth(month);

          return (
            <div
              key={monthName}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E8E6E1",
                borderRadius: 10,
                overflow: "hidden",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              }}
            >
              {/* Month header */}
              <div
                style={{
                  backgroundColor: monthHolidays.length > 0 ? "#CC2200" : "#F8F7F5",
                  padding: "16px 20px",
                  borderBottom: "1px solid #E8E6E1",
                }}
              >
                <h2
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: monthHolidays.length > 0 ? "#FFFFFF" : "#8A8A8A",
                    fontFamily: "var(--font-heading), serif",
                    margin: 0,
                  }}
                >
                  {monthName}
                </h2>
              </div>

              {/* Holidays in this month */}
              <div style={{ padding: "16px 20px" }}>
                {monthHolidays.length === 0 ? (
                  <p
                    style={{
                      color: "#C0BDB8",
                      fontSize: 13,
                      fontStyle: "italic",
                      margin: 0,
                    }}
                  >
                    No major feasts this month
                  </p>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {monthHolidays.map((h) => (
                      <a
                        key={h.slug}
                        href={`/holidays/${h.slug}`}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 12,
                          padding: "12px 14px",
                          backgroundColor: "#F8F7F5",
                          border: "1px solid #E8E6E1",
                          borderRadius: 6,
                          textDecoration: "none",
                          transition: "border-color 0.2s",
                        }}
                      >
                        {/* Dot */}
                        <span
                          style={{
                            display: "inline-block",
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            backgroundColor: h.isMoveable ? "transparent" : h.color,
                            border: h.isMoveable ? `2px solid ${h.color}` : "none",
                            flexShrink: 0,
                            marginTop: 4,
                          }}
                        />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            style={{
                              color: "#CC2200",
                              fontSize: 15,
                              fontWeight: 700,
                              fontFamily: "var(--font-heading), serif",
                              marginBottom: 2,
                            }}
                          >
                            {h.name}
                          </div>
                          {!h.isMoveable && h.day ? (
                            <div
                              style={{
                                color: "#B8960C",
                                fontSize: 12,
                                fontWeight: 600,
                                marginBottom: 4,
                              }}
                            >
                              {monthName} {h.day}
                            </div>
                          ) : (
                            <div
                              style={{
                                color: "#8A8A8A",
                                fontSize: 12,
                                fontWeight: 500,
                                marginBottom: 4,
                              }}
                            >
                              Date varies each year
                            </div>
                          )}
                          <p
                            style={{
                              color: "#6A6A6A",
                              fontSize: 13,
                              lineHeight: 1.5,
                              margin: 0,
                            }}
                          >
                            {h.description}
                          </p>
                          <span
                            style={{
                              color: "#B8960C",
                              fontSize: 12,
                              fontWeight: 600,
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 3,
                              marginTop: 6,
                            }}
                          >
                            Learn more {ARROW_ICON}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
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
            Read Today&rsquo;s Bible Verse
          </h2>
          <p style={{ color: "#6A6A6A", fontSize: 15, marginBottom: 28, lineHeight: 1.7 }}>
            A new verse every day — from Psalms, Proverbs, the Gospels, and the Epistles.
          </p>
          <a
            href="/daily-verse"
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
            Daily Verse
          </a>
        </div>
      </section>
    </div>
  );
}
