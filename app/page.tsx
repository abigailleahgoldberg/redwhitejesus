"use client";

import { useState, useEffect } from "react";

const TICKER_TEXT =
  "ONE NATION UNDER GOD \u2022 RED WHITE AND JESUS \u2022 EST. BETHLEHEM, POPULARIZED EVERYWHERE \u2022 BLESSED AND DRESSED \u2022 FAITH FAMILY AND FIRE SALES \u2022 HALLELUJAH, YOU FOUND US \u2022 ";

const HERO_SLIDES = [
  {
    line1: "One Nation,",
    line2: "Under God.",
    sub: "Gear for Americans who take their faith and their freedom equally seriously.",
  },
  {
    line1: "We put the 'grace'",
    line2: "in Amazing Grace.",
    sub: "John Newton wrote it. We made merch. The story continues.",
  },
  {
    line1: "Blessed --",
    line2: "and now well-dressed.",
    sub: "Your pastor's reaction may vary. Your grandma's won't.",
  },
  {
    line1: "Christian-American.",
    line2: "Est. a very long time ago.",
    sub: "We were here before the Constitution. We helped write it.",
  },
  {
    line1: "We prayed about it.",
    line2: "Then we made merch.",
    sub: "God said go for it. Probably.",
  },
];

const GLOSSARY = [
  {
    term: "Grace",
    def: "Unmerited divine favor. Also what you say before dinner. Also the name of approximately one in five Southern grandmothers.",
  },
  {
    term: "Hallelujah",
    def: "Praise the Lord. Appropriate for salvation, touchdowns, finding a parking spot at church on Easter, and good barbecue.",
  },
  {
    term: "Amen",
    def: 'So be it. The universal Christian punctuation mark. Works for prayers, sermons, and anything a Southern grandmother says.',
  },
  {
    term: "Communion",
    def: "The Lord's Supper. Bread and wine (or grape juice, depending on your denomination and your relationship with grape juice).",
  },
  {
    term: "Salvation",
    def: "Being saved. The whole point, theologically speaking. Also the name of approximately one in four Southern churches.",
  },
  {
    term: "Revival",
    def: "A spiritual renewal meeting, often multi-night, often loud, occasionally followed by potluck. Attendance implied.",
  },
  {
    term: "Tithe",
    def: "Giving 10% of your income to the church. The oldest subscription service in human history. No cancel button.",
  },
  {
    term: "Potluck",
    def: "Not technically a theological term but functionally the most important institution in American Christianity. Show up with a dish.",
  },
];

const HOLIDAYS = [
  {
    name: "Christmas",
    date2026: "December 25, 2026",
    description: "The celebration of the birth of Jesus Christ.",
    observed: "Church services, gift-giving, family gatherings, nativity scenes, and enough Christmas carols to last until March.",
  },
  {
    name: "Easter",
    date2026: "April 5, 2026",
    description: "The resurrection of Jesus Christ, the central event of the Christian faith.",
    observed: "Sunrise services, Easter egg hunts, ham dinner, and the annual parking lot stress test at every church in America.",
  },
  {
    name: "Good Friday",
    date2026: "April 3, 2026",
    description: "Commemorates the crucifixion of Jesus Christ.",
    observed: "Solemn services, fasting, reflection. The quietest Friday on the Christian calendar.",
  },
  {
    name: "Ash Wednesday",
    date2026: "February 18, 2026",
    description: "The start of Lent, a 40-day season of reflection before Easter.",
    observed: "Receiving ashes on the forehead as a sign of mortality and repentance. \"Remember that you are dust.\" Great conversation starter at work.",
  },
  {
    name: "Pentecost",
    date2026: "May 24, 2026",
    description: "Celebrates the descent of the Holy Spirit on the apostles.",
    observed: "Church services, often with red vestments or decor. Sometimes called the birthday of the Church. Cake has not yet become standard but we support it.",
  },
  {
    name: "Advent",
    date2026: "Begins November 29, 2026",
    description: "A four-week season of waiting and preparation before Christmas.",
    observed: "Advent wreaths, candles lit each Sunday, calendars with tiny chocolate doors. Anticipation, correctly observed.",
  },
  {
    name: "Palm Sunday",
    date2026: "March 29, 2026",
    description: "Jesus's triumphal entry into Jerusalem, one week before Easter.",
    observed: "Palm branches, processions, and the beginning of Holy Week. Your church probably has palm fronds. Probably.",
  },
  {
    name: "Epiphany",
    date2026: "January 6, 2026",
    description: "Celebrates the visit of the Magi to the infant Jesus. Marks the end of the Christmas season.",
    observed: "The Feast of the Three Kings. King cake in some traditions. The official theological end of Christmas, which means you can take down the tree now.",
  },
];

const STATS = [
  {
    stat: "~65%",
    label: "of Americans identify as Christian",
    detail:
      "Making Christianity the largest religious identity in the United States by a significant margin. That's over 200 million people who say grace, celebrate Christmas, and know at least one verse of Amazing Grace.",
  },
  {
    stat: "1607",
    label: "Christianity arrived in America",
    detail:
      "The first permanent English settlement at Jamestown, Virginia brought Christian worship to the continent. The faith was not new to the Americas -- Catholic missionaries had been here for over a century -- but the Protestant tradition that would shape American culture took root here.",
  },
  {
    stat: "Founding",
    label: "Faith shaped the founders",
    detail:
      "Phrases like 'endowed by their Creator,' 'one nation under God,' and 'In God We Trust' are baked into American identity. Whether the founders were devout or deist, they built a country that took God seriously.",
  },
];

const OCCASIONS = [
  { name: "Christmas", emoji: "🎄" },
  { name: "Easter", emoji: "✝️" },
  { name: "Baptism", emoji: "💧" },
  { name: "Graduation", emoji: "🎓" },
  { name: "Wedding", emoji: "💍" },
  { name: "Just Because", emoji: "🙏" },
];

const PRODUCTS = [
  {
    name: "RedWhiteJesus Classic Tee",
    price: "$28",
    desc: "Red, white, and blessed. Available S-4XL.",
    href: "https://store.redwhitejesus.com/products/classic-tee?tag=redwhitejesus-20",
  },
  {
    name: "Cross & Stars Cap",
    price: "$25",
    desc: "For the Christian American who needs a hat with the right priorities.",
    href: "https://store.redwhitejesus.com/products/cross-stars-cap?tag=redwhitejesus-20",
  },
];

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroVisible, setHeroVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroVisible(false);
      setTimeout(() => {
        setHeroIndex((i) => (i + 1) % HERO_SLIDES.length);
        setHeroVisible(true);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("https://formspree.io/f/redwhitejesus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      // continue regardless
    }
    setSubmitted(true);
  };

  const slide = HERO_SLIDES[heroIndex];

  return (
    <div>
      {/* Ticker */}
      <div
        style={{
          backgroundColor: "#CC2200",
          overflow: "hidden",
          height: 36,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            animation: "ticker 30s linear infinite",
          }}
        >
          {[TICKER_TEXT, TICKER_TEXT].map((t, i) => (
            <span
              key={i}
              style={{
                color: "#F5F0E8",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                paddingRight: 0,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #0f0c14 0%, #1B3A6B22 100%)",
          padding: "80px 24px 72px",
          textAlign: "center",
          minHeight: 420,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
            maxWidth: 720,
          }}
        >
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              marginBottom: 8,
              fontFamily: "Georgia, serif",
            }}
          >
            <span style={{ color: "#F5F0E8" }}>{slide.line1}</span>
            <br />
            <span style={{ color: "#CC2200" }}>{slide.line2}</span>
          </h1>
          <p
            style={{
              color: "#a09888",
              fontSize: "clamp(16px, 2.5vw, 20px)",
              marginTop: 20,
              maxWidth: 560,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.6,
            }}
          >
            {slide.sub}
          </p>
          <div
            style={{
              marginTop: 36,
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://store.redwhitejesus.com?tag=redwhitejesus-20"
              style={{
                backgroundColor: "#CC2200",
                color: "#F5F0E8",
                padding: "14px 32px",
                borderRadius: 4,
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Shop Now
            </a>
            <a
              href="/blog"
              style={{
                border: "2px solid #D4AF37",
                color: "#D4AF37",
                padding: "14px 32px",
                borderRadius: 4,
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Read More
            </a>
          </div>
        </div>

        {/* Slide dots */}
        <div style={{ display: "flex", gap: 8, marginTop: 40 }}>
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setHeroVisible(false);
                setTimeout(() => {
                  setHeroIndex(i);
                  setHeroVisible(true);
                }, 300);
              }}
              style={{
                width: i === heroIndex ? 24 : 8,
                height: 8,
                borderRadius: 4,
                border: "none",
                backgroundColor: i === heroIndex ? "#CC2200" : "#3a3040",
                transition: "all 0.3s ease",
                padding: 0,
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Shop for the Occasion */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "64px 24px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 40 }}>
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
            Every Season of Faith
          </div>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 38px)",
              fontWeight: 700,
              color: "#F5F0E8",
              fontFamily: "Georgia, serif",
            }}
          >
            Shop for the Occasion
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
          }}
        >
          {OCCASIONS.map((occ) => (
            <a
              key={occ.name}
              href={`https://store.redwhitejesus.com/collections/${occ.name.toLowerCase().replace(/ /g, "-")}?tag=redwhitejesus-20`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                backgroundColor: "#110e16",
                border: "1px solid #2a2030",
                borderRadius: 8,
                padding: "20px 28px",
                color: "#F5F0E8",
                fontSize: 14,
                fontWeight: 600,
                minWidth: 120,
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
            >
              <span style={{ fontSize: 28 }}>{occ.emoji}</span>
              <span>{occ.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Products */}
      <section
        style={{
          backgroundColor: "#0D0A10",
          padding: "64px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
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
              Blessed and Dressed
            </div>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 38px)",
                fontWeight: 700,
                color: "#F5F0E8",
                fontFamily: "Georgia, serif",
              }}
            >
              Featured Gear
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {PRODUCTS.map((p) => (
              <a
                key={p.name}
                href={p.href}
                style={{
                  backgroundColor: "#15111c",
                  border: "1px solid #2a2030",
                  borderRadius: 8,
                  padding: 28,
                  display: "block",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#1f1828",
                    borderRadius: 6,
                    height: 180,
                    marginBottom: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: 48 }}>✝️</span>
                </div>
                <h3
                  style={{
                    color: "#F5F0E8",
                    fontSize: 18,
                    fontWeight: 700,
                    marginBottom: 8,
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    color: "#a09888",
                    fontSize: 14,
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  {p.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      color: "#D4AF37",
                      fontSize: 20,
                      fontWeight: 700,
                    }}
                  >
                    {p.price}
                  </span>
                  <span
                    style={{
                      backgroundColor: "#CC2200",
                      color: "#F5F0E8",
                      padding: "8px 16px",
                      borderRadius: 4,
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                    }}
                  >
                    Shop Now
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <a
              href="https://store.redwhitejesus.com?tag=redwhitejesus-20"
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
              View All Products
            </a>
          </div>
        </div>
      </section>

      {/* Culture Stats */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "64px 24px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 40 }}>
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
            By the Numbers
          </div>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 38px)",
              fontWeight: 700,
              color: "#F5F0E8",
              fontFamily: "Georgia, serif",
            }}
          >
            Christian America
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {STATS.map((s) => (
            <div
              key={s.stat}
              style={{
                backgroundColor: "#110e16",
                border: "1px solid #2a2030",
                borderLeft: "4px solid #CC2200",
                borderRadius: 8,
                padding: 28,
              }}
            >
              <div
                style={{
                  fontSize: 40,
                  fontWeight: 800,
                  color: "#CC2200",
                  fontFamily: "Georgia, serif",
                  marginBottom: 4,
                }}
              >
                {s.stat}
              </div>
              <div
                style={{
                  color: "#F5F0E8",
                  fontSize: 16,
                  fontWeight: 600,
                  marginBottom: 12,
                }}
              >
                {s.label}
              </div>
              <p style={{ color: "#a09888", fontSize: 14, lineHeight: 1.7 }}>
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Christian Glossary */}
      <section
        style={{
          backgroundColor: "#0D0A10",
          padding: "64px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
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
              Words You Need to Know
            </div>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 38px)",
                fontWeight: 700,
                color: "#F5F0E8",
                fontFamily: "Georgia, serif",
              }}
            >
              The Christian Glossary
            </h2>
            <p
              style={{
                color: "#a09888",
                fontSize: 16,
                marginTop: 12,
                maxWidth: 520,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Essential vocabulary for navigating faith, family dinners, and Easter Sunday parking.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {GLOSSARY.map((g) => (
              <div
                key={g.term}
                style={{
                  backgroundColor: "#15111c",
                  border: "1px solid #2a2030",
                  borderRadius: 8,
                  padding: 24,
                }}
              >
                <div
                  style={{
                    color: "#CC2200",
                    fontSize: 18,
                    fontWeight: 800,
                    fontFamily: "Georgia, serif",
                    marginBottom: 8,
                  }}
                >
                  {g.term}
                </div>
                <p style={{ color: "#c8bfb0", fontSize: 14, lineHeight: 1.7 }}>
                  {g.def}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Holidays Calendar */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "64px 24px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 40 }}>
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
            Mark Your Calendar
          </div>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 38px)",
              fontWeight: 700,
              color: "#F5F0E8",
              fontFamily: "Georgia, serif",
            }}
          >
            Christian Holidays 2026
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {HOLIDAYS.map((h) => (
            <div
              key={h.name}
              style={{
                backgroundColor: "#110e16",
                border: "1px solid #2a2030",
                borderRadius: 8,
                padding: "24px 28px",
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: 24,
                alignItems: "start",
              }}
            >
              <div>
                <div
                  style={{
                    color: "#CC2200",
                    fontSize: 17,
                    fontWeight: 700,
                    fontFamily: "Georgia, serif",
                    marginBottom: 4,
                  }}
                >
                  {h.name}
                </div>
                <div
                  style={{
                    color: "#D4AF37",
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  {h.date2026}
                </div>
              </div>
              <div>
                <p
                  style={{
                    color: "#F5F0E8",
                    fontSize: 14,
                    marginBottom: 6,
                    fontWeight: 500,
                  }}
                >
                  {h.description}
                </p>
                <p style={{ color: "#a09888", fontSize: 14, lineHeight: 1.6 }}>
                  {h.observed}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Email Signup */}
      <section
        style={{
          backgroundColor: "#CC2200",
          padding: "64px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 800,
              color: "#F5F0E8",
              fontFamily: "Georgia, serif",
              marginBottom: 12,
            }}
          >
            Stay blessed. Get the drop.
          </h2>
          <p
            style={{
              color: "#ffccbb",
              fontSize: 16,
              marginBottom: 28,
              lineHeight: 1.6,
            }}
          >
            New gear, stories, and culture -- delivered to your inbox. No spam. Just faith and freedom.
          </p>
          {submitted ? (
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                border: "2px solid #F5F0E8",
                borderRadius: 8,
                padding: "20px 32px",
                color: "#F5F0E8",
                fontSize: 17,
                fontWeight: 600,
              }}
            >
              Amen! You're on the list. 🙏
            </div>
          ) : (
            <form
              onSubmit={handleEmail}
              style={{ display: "flex", gap: 12, maxWidth: 480, margin: "0 auto", flexWrap: "wrap" }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                style={{
                  flex: 1,
                  minWidth: 200,
                  padding: "14px 18px",
                  borderRadius: 4,
                  border: "2px solid rgba(255,255,255,0.3)",
                  backgroundColor: "rgba(0,0,0,0.2)",
                  color: "#F5F0E8",
                  fontSize: 15,
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#F5F0E8",
                  color: "#CC2200",
                  padding: "14px 28px",
                  borderRadius: 4,
                  border: "none",
                  fontWeight: 800,
                  fontSize: 14,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                Join Up
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Blog teaser */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "64px 24px",
          textAlign: "center",
        }}
      >
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
          From the Blog
        </div>
        <h2
          style={{
            fontSize: "clamp(24px, 4vw, 38px)",
            fontWeight: 700,
            color: "#F5F0E8",
            fontFamily: "Georgia, serif",
            marginBottom: 16,
          }}
        >
          Faith. History. Culture.
        </h2>
        <p style={{ color: "#a09888", fontSize: 16, marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
          From the roots of American Christianity to what Easter actually means, we cover it all.
        </p>
        <a
          href="/blog"
          style={{
            backgroundColor: "#CC2200",
            color: "#F5F0E8",
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
          Read the Blog
        </a>
      </section>
    </div>
  );
}
