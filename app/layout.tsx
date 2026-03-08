import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RedWhiteJesus -- One Nation. Under God. Undeniably American.",
  description:
    "RedWhiteJesus: Christian-American pride, culture, and gear. One Nation. Under God. Undeniably American.",
  keywords: [
    "Christian American",
    "faith and patriotism",
    "Christian culture",
    "American Christianity",
    "faith apparel",
    "Christian gifts",
  ],
  openGraph: {
    title: "RedWhiteJesus -- One Nation. Under God. Undeniably American.",
    description:
      "Christian-American pride, culture, and gear. Blessed and well-dressed since Bethlehem.",
    url: "https://redwhitejesus.com",
    siteName: "RedWhiteJesus",
    type: "website",
  },
  metadataBase: new URL("https://redwhitejesus.com"),
};

const NAV_LINKS = [
  { label: "Shop", href: "https://store.redwhitejesus.com" },
  { label: "Blog", href: "/blog" },
  { label: "Get Involved", href: "/advertise" },
];

const NETWORK = [
  { label: "JewSA", href: "https://jewsa.com" },
  { label: "HindUSA", href: "https://hindusa-app.vercel.app" },
  { label: "AllahiCan", href: "https://allahican.com" },
  { label: "WeBearish", href: "https://webearish.com" },
  { label: "U-God Sacred Texts", href: "https://u-god.com" },
  { label: "The Voice of Cash", href: "https://thevoiceofcash.com" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "#08060A",
            borderBottom: "2px solid #CC2200",
            position: "sticky",
            top: 0,
            zIndex: 100,
          }}
        >
          <nav
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "0 24px",
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <a
              href="/"
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 4,
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#F5F0E8",
                  letterSpacing: "0.02em",
                  fontFamily: "Georgia, serif",
                }}
              >
                Red White
              </span>
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#CC2200",
                  letterSpacing: "0.02em",
                  fontFamily: "Georgia, serif",
                }}
              >
                Jesus
              </span>
            </a>
            <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: "#F5F0E8",
                    fontSize: 15,
                    fontWeight: 500,
                    letterSpacing: "0.03em",
                    opacity: 0.9,
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer
          style={{
            backgroundColor: "#0D0A10",
            borderTop: "2px solid #CC2200",
            padding: "48px 24px 32px",
            marginTop: 80,
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 48,
                justifyContent: "space-between",
                marginBottom: 40,
              }}
            >
              <div style={{ minWidth: 220 }}>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    marginBottom: 8,
                    fontFamily: "Georgia, serif",
                  }}
                >
                  <span style={{ color: "#F5F0E8" }}>Red White</span>
                  <span style={{ color: "#CC2200" }}> Jesus</span>
                </div>
                <p style={{ color: "#a09888", fontSize: 14, lineHeight: 1.7 }}>
                  One Nation. Under God. Undeniably American.
                  <br />
                  Blessed and dressed since Bethlehem.
                </p>
              </div>

              <div style={{ minWidth: 160 }}>
                <div
                  style={{
                    color: "#D4AF37",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 14,
                  }}
                >
                  Explore
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { label: "Shop", href: "https://store.redwhitejesus.com" },
                    { label: "Blog", href: "/blog" },
                    { label: "Advertise", href: "/advertise" },
                  ].map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      style={{ color: "#a09888", fontSize: 14 }}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>

              <div style={{ minWidth: 220 }}>
                <div
                  style={{
                    color: "#D4AF37",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 14,
                  }}
                >
                  The Network
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {NETWORK.map((site) => (
                    <a
                      key={site.label}
                      href={site.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#a09888", fontSize: 14 }}
                    >
                      {site.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                borderTop: "1px solid #2a2030",
                paddingTop: 24,
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={{ color: "#5a5060", fontSize: 13 }}>
                &copy; {new Date().getFullYear()} RedWhiteJesus. All rights reserved. Made with faith and a healthy respect for the First Amendment.
              </p>
              <p style={{ color: "#5a5060", fontSize: 13 }}>
                Not affiliated with any political party. Just God and country.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
