import type { Metadata } from "next";
import "./globals.css";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import { CartProvider } from "../lib/cart-context";
import Header from "../components/Header";
import ExitIntent from "../components/ExitIntent";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

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
    "Christian merch",
    "faith gifts",
    "Christian t-shirts",
    "religious gifts",
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
  alternates: {
    canonical: 'https://redwhitejesus.com',
  },
};

const NETWORK = [
  { label: "JewSA", href: "https://jewsa.com" },
  { label: "HindUSA", href: "https://hindusa.com" },
  { label: "AllahICan", href: "https://allahican.com" },
  { label: "U-God Sacred Texts", href: "https://u-god.com" },
  { label: "WeBearish", href: "https://webearish.com" },
  { label: "The Voice of Cash", href: "https://thevoiceofcash.com" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "RedWhiteJesus",
          "url": "https://redwhitejesus.com",
          "description": "Christian-American pride, culture, and gear. One Nation. Under God. Undeniably American."
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "RedWhiteJesus",
          "url": "https://redwhitejesus.com"
        }) }} />
      </head>
      <body>
        <CartProvider>
          <Header />

          <main>{children}</main>
          <ExitIntent />

          <footer
            style={{
              backgroundColor: "#F8F7F5",
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
                      fontFamily: "var(--font-heading), serif",
                    }}
                  >
                    <span style={{ color: "#1A1A1A" }}>Red White</span>
                    <span style={{ color: "#CC2200" }}> Jesus</span>
                  </div>
                  <p style={{ color: "#6A6A6A", fontSize: 14, lineHeight: 1.7 }}>
                    One Nation. Under God. Undeniably American.
                    <br />
                    Blessed and dressed since Bethlehem.
                  </p>
                </div>

                <div style={{ minWidth: 160 }}>
                  <div
                    style={{
                      color: "#B8960C",
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
                      { label: "Holidays", href: "/calendar" },
                      { label: "Daily Verse", href: "/daily-verse" },
                      { label: "Resources", href: "/resources" },
                      { label: "Cart", href: "/cart" },
                      { label: "Blog", href: "/blog" },
                      { label: "Advertise", href: "/advertise" },
                    ].map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        style={{ color: "#6A6A6A", fontSize: 14, textDecoration: "none" }}
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div style={{ minWidth: 220 }}>
                  <div
                    style={{
                      color: "#B8960C",
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
                        style={{ color: "#6A6A6A", fontSize: 14, textDecoration: "none" }}
                      >
                        {site.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div
                style={{
                  borderTop: "1px solid #E8E6E1",
                  paddingTop: 24,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 16,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p style={{ color: "#8A8A8A", fontSize: 13 }}>
                  &copy; {new Date().getFullYear()} RedWhiteJesus. All rights reserved. Made with faith and a healthy respect for the First Amendment.
                </p>
                <p style={{ color: "#8A8A8A", fontSize: 13 }}>
                  Not affiliated with any political party. Just God and country.
                </p>
                <div style={{ width: "100%", display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center", paddingTop: 16 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#B8960C", letterSpacing: "0.1em", textTransform: "uppercase" }}>Resources</span>
                  <a href="https://www.biblegateway.com" target="_blank" rel="noopener noreferrer" style={{ color: "#6A6A6A", fontSize: 13, textDecoration: "none" }}>BibleGateway — Scripture Online →</a>
                  <a href="https://www.christianitytoday.com" target="_blank" rel="noopener noreferrer" style={{ color: "#6A6A6A", fontSize: 13, textDecoration: "none" }}>Christianity Today →</a>
                  <a href="https://www.barna.com" target="_blank" rel="noopener noreferrer" style={{ color: "#6A6A6A", fontSize: 13, textDecoration: "none" }}>Barna Research — Faith in America →</a>
                </div>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
