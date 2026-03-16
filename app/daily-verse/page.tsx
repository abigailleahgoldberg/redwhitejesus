import type { Metadata } from "next";
import { getDailyVerse } from "../data/verses";
import ShareImageButton from "./ShareImageButton";

export const metadata: Metadata = {
  title: "Daily Bible Verse | RedWhiteJesus",
  description:
    "A new Bible verse every day — from Psalms, Proverbs, the Gospels, and the Epistles. Faith for every morning.",
  openGraph: {
    title: "Daily Bible Verse",
    description:
      "A new Bible verse every day. Faith for every morning.",
    url: "https://redwhitejesus.com/daily-verse",
    siteName: "RedWhiteJesus",
    type: "website",
  },
  metadataBase: new URL("https://redwhitejesus.com"),
};

function getDayOfYear(): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

const THEME_LABELS: Record<string, string> = {
  hope: "Hope",
  strength: "Strength",
  love: "Love",
  faith: "Faith",
  peace: "Peace",
  wisdom: "Wisdom",
  courage: "Courage",
  gratitude: "Gratitude",
};

const BOOK_ICON = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const SHARE_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
  </svg>
);

export default function DailyVersePage() {
  const dayOfYear = getDayOfYear();
  const verse = getDailyVerse(dayOfYear);
  const themeLabel = THEME_LABELS[verse.theme] || verse.theme;

  // Format today's date
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
              marginBottom: 10,
            }}
          >
            {today}
          </div>
          <h1
            style={{
              fontSize: "clamp(30px, 5vw, 52px)",
              fontWeight: 800,
              color: "#1A1A1A",
              fontFamily: "var(--font-heading), serif",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Daily Bible Verse
          </h1>
          <p
            style={{
              color: "#6A6A6A",
              fontSize: 16,
              lineHeight: 1.6,
            }}
          >
            A new verse every morning. Same verse for everyone, same day worldwide.
          </p>
        </div>
      </section>

      {/* Verse Card */}
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "56px 24px" }}>
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E8E6E1",
            borderTop: "4px solid #CC2200",
            borderRadius: 12,
            padding: "48px 40px",
            boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
            textAlign: "center",
          }}
        >
          {/* Theme badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              backgroundColor: "rgba(184,150,12,0.1)",
              border: "1px solid rgba(184,150,12,0.25)",
              borderRadius: 20,
              padding: "5px 14px",
              marginBottom: 32,
              color: "#B8960C",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {themeLabel}
          </div>

          {/* Verse text */}
          <blockquote
            style={{
              margin: 0,
              marginBottom: 32,
            }}
          >
            <p
              style={{
                fontSize: "clamp(18px, 3vw, 26px)",
                lineHeight: 1.7,
                color: "#1A1A1A",
                fontFamily: "var(--font-heading), serif",
                fontStyle: "italic",
                marginBottom: 0,
              }}
            >
              &ldquo;{verse.text}&rdquo;
            </p>
          </blockquote>

          {/* Reference */}
          <div
            style={{
              color: "#CC2200",
              fontSize: 18,
              fontWeight: 700,
              fontFamily: "var(--font-heading), serif",
              marginBottom: 36,
            }}
          >
            — {verse.reference}
          </div>

          {/* Action buttons */}
          <div style={{ display: "inline-flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <button
              id="copy-verse-btn"
              onClick={undefined}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "#FFFFFF",
                border: "2px solid #E8E6E1",
                color: "#1A1A1A",
                padding: "12px 24px",
                borderRadius: 6,
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
                letterSpacing: "0.03em",
              }}
            >
              {SHARE_ICON}
              Copy to Clipboard
            </button>
            <ShareImageButton
              verse={verse.text}
              reference={verse.reference}
              theme={themeLabel}
            />
          </div>
        </div>

        {/* Scripture context note */}
        <div
          style={{
            marginTop: 32,
            padding: "20px 24px",
            backgroundColor: "#F8F7F5",
            border: "1px solid #E8E6E1",
            borderRadius: 8,
            fontSize: 14,
            color: "#6A6A6A",
            lineHeight: 1.7,
          }}
        >
          <strong style={{ color: "#1A1A1A" }}>About this verse:</strong> This verse
          comes from the{" "}
          <strong style={{ color: "#CC2200" }}>{verse.reference}</strong> and carries a
          theme of <strong style={{ color: "#B8960C" }}>{themeLabel.toLowerCase()}</strong>.
          Bible translations used are from the New International Version (NIV). For deeper
          study, visit{" "}
          <a
            href="https://www.biblegateway.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#CC2200", fontWeight: 600 }}
          >
            BibleGateway.com
          </a>
          .
        </div>
      </section>

      {/* Copy script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var btn = document.getElementById('copy-verse-btn');
              if (btn) {
                btn.addEventListener('click', function() {
                  var text = ${JSON.stringify(`"${verse.text}" — ${verse.reference}`)};
                  if (navigator.clipboard) {
                    navigator.clipboard.writeText(text).then(function() {
                      btn.textContent = 'Copied!';
                      setTimeout(function() {
                        btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"></path></svg> Copy to Clipboard';
                      }, 2000);
                    });
                  }
                });
              }
            })();
          `,
        }}
      />

      {/* More links */}
      <section
        style={{
          backgroundColor: "#F8F7F5",
          borderTop: "1px solid #E8E6E1",
          padding: "56px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 20,
          }}
        >
          <a
            href="/calendar"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E8E6E1",
              borderRadius: 8,
              padding: "24px 20px",
              textDecoration: "none",
              textAlign: "center",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                color: "#CC2200",
                fontSize: 15,
                fontWeight: 700,
                fontFamily: "var(--font-heading), serif",
                marginBottom: 6,
              }}
            >
              Holiday Calendar
            </div>
            <p style={{ color: "#6A6A6A", fontSize: 13, margin: 0 }}>
              Christian feasts and seasons, month by month.
            </p>
          </a>
          <a
            href="/resources"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E8E6E1",
              borderRadius: 8,
              padding: "24px 20px",
              textDecoration: "none",
              textAlign: "center",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                color: "#CC2200",
                fontSize: 15,
                fontWeight: 700,
                fontFamily: "var(--font-heading), serif",
                marginBottom: 6,
              }}
            >
              Christian Resources
            </div>
            <p style={{ color: "#6A6A6A", fontSize: 13, margin: 0 }}>
              Bibles, theology, and study tools.
            </p>
          </a>
          <a
            href="/blog"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E8E6E1",
              borderRadius: 8,
              padding: "24px 20px",
              textDecoration: "none",
              textAlign: "center",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                color: "#CC2200",
                fontSize: 15,
                fontWeight: 700,
                fontFamily: "var(--font-heading), serif",
                marginBottom: 6,
              }}
            >
              From the Blog
            </div>
            <p style={{ color: "#6A6A6A", fontSize: 13, margin: 0 }}>
              Faith, history, and Christian culture.
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}
