"use client";

import { useState, useEffect } from "react";
import { useCart } from "../lib/cart-context";

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
    observed: "Receiving ashes on the forehead as a sign of mortality and repentance. Great conversation starter at work.",
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
    observed: "Palm branches, processions, and the beginning of Holy Week.",
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
      "The first permanent English settlement at Jamestown brought Christian worship to the continent. The Protestant tradition that would shape American culture took root here and never left.",
  },
  {
    stat: "Founding",
    label: "Faith shaped the founders",
    detail:
      "Phrases like 'endowed by their Creator,' 'one nation under God,' and 'In God We Trust' are baked into American identity. Whether the founders were devout or deist, they built a country that took God seriously.",
  },
  {
    stat: "$1.2T",
    label: "annual social value from faith communities",
    detail:
      "A 2017 Baylor University study estimated that American faith communities contribute $1.2 trillion in social value annually -- food banks, hospitals, disaster relief, addiction recovery, mentorship, and more.",
  },
  {
    stat: "380,000+",
    label: "Christian congregations in the US",
    detail:
      "There are more churches in America than there are McDonald's, Starbucks, and Walmart locations combined. Christianity is not a niche pursuit. It is woven into the physical landscape of the country.",
  },
  {
    stat: "35,000+",
    label: "Celebrate Recovery chapters worldwide",
    detail:
      "Started in a California church in 1991, Celebrate Recovery now operates in more than 35,000 churches globally. Faith-based recovery works -- and American Christians built the infrastructure to prove it.",
  },
];

const OCCASIONS = [
  {
    name: "Christmas",
    description: "The big one. Gear that says it out loud.",
    href: "https://store.redwhitejesus.com/collections/christmas?tag=redwhitejesus-20",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#CC2200" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L4.5 18h15L12 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 18v3h8v-3" />
      </svg>
    ),
  },
  {
    name: "Easter",
    description: "The whole reason for the season.",
    href: "https://store.redwhitejesus.com/collections/easter?tag=redwhitejesus-20",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#CC2200" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    name: "Baptism",
    description: "For a day that changes everything.",
    href: "https://store.redwhitejesus.com/collections/baptism?tag=redwhitejesus-20",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#CC2200" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c0 6-6 9-6 13a6 6 0 0012 0c0-4-6-7-6-13z" />
      </svg>
    ),
  },
  {
    name: "Confirmation",
    description: "Own your faith. Wear it too.",
    href: "https://store.redwhitejesus.com/collections/confirmation?tag=redwhitejesus-20",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#CC2200" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "First Communion",
    description: "A milestone worth marking right.",
    href: "https://store.redwhitejesus.com/collections/first-communion?tag=redwhitejesus-20",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#CC2200" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    name: "Graduation",
    description: "Cap, gown, and a cross.",
    href: "https://store.redwhitejesus.com/collections/graduation?tag=redwhitejesus-20",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#CC2200" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    name: "Wedding",
    description: "Two becoming one, dressed accordingly.",
    href: "https://store.redwhitejesus.com/collections/wedding?tag=redwhitejesus-20",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#CC2200" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    name: "Just Because",
    description: "You don't need a reason. Faith never does.",
    href: "https://store.redwhitejesus.com/collections/all?tag=redwhitejesus-20",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#CC2200" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

const PRODUCTS = [
  {
    id: "classic-tee",
    variantId: "default",
    name: "RedWhiteJesus Classic Tee",
    price: 28,
    priceDisplay: "$28",
    desc: "Red, white, and blessed. Available S-4XL.",
    href: "https://store.redwhitejesus.com/products/classic-tee?tag=redwhitejesus-20",
  },
  {
    id: "cross-stars-cap",
    variantId: "default",
    name: "Cross & Stars Cap",
    price: 25,
    priceDisplay: "$25",
    desc: "For the Christian American who needs a hat with the right priorities.",
    href: "https://store.redwhitejesus.com/products/cross-stars-cap?tag=redwhitejesus-20",
  },
  {
    id: "faith-freedom-hoodie",
    variantId: "default",
    name: "Faith & Freedom Hoodie",
    price: 48,
    priceDisplay: "$48",
    desc: "Heavyweight fleece. Cross embroidered. Built for cold Sundays and colder winters.",
    href: "https://store.redwhitejesus.com/products/faith-freedom-hoodie?tag=redwhitejesus-20",
  },
  {
    id: "blessed-mug",
    variantId: "default",
    name: "Blessed Mug",
    price: 18,
    priceDisplay: "$18",
    desc: "15oz ceramic. Dishwasher safe. Because your morning coffee deserves a purpose statement.",
    href: "https://store.redwhitejesus.com/products/blessed-mug?tag=redwhitejesus-20",
  },
];

const FAQ = [
  {
    q: "Is this disrespectful to Christianity?",
    a: "No more than a WWJD bracelet. Christians have always worn their faith. From wooden crosses to printed tees, faith-forward expression is as old as the church itself. We make gear that's honest about who we are. That's not disrespectful -- it's the opposite.",
  },
  {
    q: "Who is this actually for?",
    a: "Christians who aren't embarrassed to be Christian. Americans who think faith and patriotism can coexist without anyone making a face. People who want merch that says something real. If any of that is you, you're in the right place.",
  },
  {
    q: "Are you affiliated with any church or denomination?",
    a: "Nope. RedWhiteJesus is independent. We're broadly Christian, which means we can talk to Baptists, Catholics, Methodists, Pentecostals, and non-denominationals without everyone getting weird about it. The cross is the cross.",
  },
  {
    q: "Does wearing this make me a better Christian?",
    a: "Absolutely not. Salvation is not a merch transaction. But it might start a conversation. And that's worth something.",
  },
  {
    q: "Isn't mixing religion and American identity kind of complicated?",
    a: "Yes. We didn't say it wasn't. Christianity shaped American history in ways that are worth celebrating and in ways that require honest accounting. We hold both. You can be proud of what faith has built in this country while being clear-eyed about when it's been misused. The answer to misuse isn't abandonment -- it's fidelity.",
  },
  {
    q: "Is this a political brand?",
    a: "No. Jesus wasn't a Republican or a Democrat. Neither are we. The gospel is not a party platform. We're Christian-American, which means we're for everyone who fits that description -- regardless of which lever they pull in November.",
  },
];

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroVisible, setHeroVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

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

  const handleAddToCart = (product: typeof PRODUCTS[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      variantId: product.variantId,
    });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.discount) setDiscountCode(data.discount);
    } catch {
      // continue regardless
    }
    setSubmitted(true);
    setSubmitting(false);
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
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section
        className="hero-section"
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
              fontSize: "clamp(32px, 6vw, 72px)",
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
              fontSize: "clamp(15px, 2.5vw, 20px)",
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
                cursor: "pointer",
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
              marginBottom: 12,
            }}
          >
            Shop for the Occasion
          </h2>
          <p style={{ color: "#a09888", fontSize: 15, maxWidth: 480, margin: "0 auto" }}>
            From Christmas morning to just-because Tuesday. Faith doesn't need a reason.
          </p>
        </div>
        <div
          className="occasions-grid"
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
              href={occ.href}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                backgroundColor: "#110e16",
                border: "1px solid #2a2030",
                borderRadius: 8,
                padding: "20px 20px",
                color: "#F5F0E8",
                fontSize: 13,
                fontWeight: 600,
                minWidth: 120,
                textDecoration: "none",
                transition: "border-color 0.2s",
                flex: "0 0 auto",
              }}
            >
              {occ.icon}
              <span style={{ fontSize: 14, fontWeight: 700 }}>{occ.name}</span>
              <span style={{ color: "#a09888", fontSize: 12, textAlign: "center", maxWidth: 100 }}>{occ.description}</span>
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
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {PRODUCTS.map((p) => (
              <div
                key={p.id}
                style={{
                  backgroundColor: "#15111c",
                  border: "1px solid #2a2030",
                  borderRadius: 8,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#1f1828",
                    borderRadius: 6,
                    height: 160,
                    marginBottom: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#CC2200"
                    strokeWidth="1.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
                  </svg>
                </div>
                <h3
                  style={{
                    color: "#F5F0E8",
                    fontSize: 17,
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
                    flex: 1,
                  }}
                >
                  {p.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      color: "#D4AF37",
                      fontSize: 22,
                      fontWeight: 700,
                    }}
                  >
                    {p.priceDisplay}
                  </span>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#a09888",
                      fontSize: 12,
                      textDecoration: "underline",
                    }}
                  >
                    View in Store
                  </a>
                </div>
                <button
                  onClick={() => handleAddToCart(p)}
                  style={{
                    backgroundColor: addedId === p.id ? "#2a6e2a" : "#CC2200",
                    color: "#F5F0E8",
                    padding: "11px 16px",
                    borderRadius: 4,
                    border: "none",
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  }}
                >
                  {addedId === p.id ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
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
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
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
                  fontSize: 15,
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

      {/* Brand Story */}
      <section
        style={{
          backgroundColor: "#0D0A10",
          padding: "64px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            className="brand-story-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            {/* Text side */}
            <div>
              <div
                style={{
                  color: "#D4AF37",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                The Story
              </div>
              <h2
                style={{
                  fontSize: "clamp(26px, 4vw, 42px)",
                  fontWeight: 800,
                  color: "#F5F0E8",
                  fontFamily: "Georgia, serif",
                  lineHeight: 1.15,
                  marginBottom: 20,
                }}
              >
                Why RedWhiteJesus Exists
              </h2>
              <p style={{ color: "#c8bfb0", fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                We noticed something. Christian-Americans -- one of the largest identities in the country -- didn't have a brand that spoke their language without being cheesy, preachy, or embarrassing to wear in public.
              </p>
              <p style={{ color: "#a09888", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                Faith and patriotism aren't opposites. They've been woven together in American life since the first colonial settlements. The founders debated theology. The abolitionists quoted scripture. The civil rights movement was led from church pulpits. Christianity shaped this country, and this country shaped Christianity.
              </p>
              <p style={{ color: "#a09888", fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
                RedWhiteJesus is for people who hold both identities without apology. We make gear that's worth wearing, content that's worth reading, and a community that's worth joining. No sanctimony. No shaming. Just faith, freedom, and honest design.
              </p>
              <a
                href="/blog"
                style={{
                  color: "#D4AF37",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  borderBottom: "2px solid #D4AF37",
                  paddingBottom: 2,
                }}
              >
                Read Our Stories
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            {/* Visual side */}
            <div
              style={{
                backgroundColor: "#110e16",
                border: "1px solid #2a2030",
                borderRadius: 12,
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              {[
                { icon: "cross", label: "Faith First", text: "We start with the cross. Everything else follows." },
                { icon: "flag", label: "Proudly American", text: "Christianity shaped this country. We honor that history." },
                { icon: "community", label: "Community", text: "Over 200 million Christian Americans. You're not alone." },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      backgroundColor: "rgba(204,34,0,0.15)",
                      border: "1px solid rgba(204,34,0,0.3)",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon === "cross" && (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#CC2200" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
                      </svg>
                    )}
                    {item.icon === "flag" && (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#CC2200" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V4l8 4 8-4v13l-8 4-8-4z" />
                      </svg>
                    )}
                    {item.icon === "community" && (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#CC2200" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <div style={{ color: "#F5F0E8", fontSize: 15, fontWeight: 700, marginBottom: 4 }}>
                      {item.label}
                    </div>
                    <p style={{ color: "#a09888", fontSize: 14, lineHeight: 1.6 }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Christian Glossary */}
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
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {GLOSSARY.map((g) => (
            <div
              key={g.term}
              style={{
                backgroundColor: "#110e16",
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
      </section>

      {/* Is This Disrespectful? FAQ */}
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
              Honest Answers
            </div>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 38px)",
                fontWeight: 700,
                color: "#F5F0E8",
                fontFamily: "Georgia, serif",
                marginBottom: 12,
              }}
            >
              Is This Disrespectful?
            </h2>
            <p style={{ color: "#a09888", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
              The questions people actually ask. The answers we actually give.
            </p>
          </div>
          <div
            className="faq-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
              gap: 20,
            }}
          >
            {FAQ.map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#15111c",
                  border: "1px solid #2a2030",
                  borderRadius: 8,
                  padding: 28,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    marginBottom: 14,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgba(204,34,0,0.15)",
                      color: "#CC2200",
                      fontSize: 12,
                      fontWeight: 800,
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      letterSpacing: "0.02em",
                    }}
                  >
                    Q
                  </div>
                  <h3
                    style={{
                      color: "#F5F0E8",
                      fontSize: 16,
                      fontWeight: 700,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.q}
                  </h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 14,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgba(212,175,55,0.1)",
                      color: "#D4AF37",
                      fontSize: 12,
                      fontWeight: 800,
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    A
                  </div>
                  <p style={{ color: "#c8bfb0", fontSize: 14, lineHeight: 1.7 }}>
                    {item.a}
                  </p>
                </div>
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
              className="holiday-row"
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
            New gear, stories, and culture -- delivered to your inbox. Plus a welcome discount.
          </p>
          {submitted ? (
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                border: "2px solid #F5F0E8",
                borderRadius: 8,
                padding: "24px 32px",
                color: "#F5F0E8",
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>
                Amen! You're on the list.
              </div>
              {discountCode && (
                <div>
                  <p style={{ fontSize: 14, color: "#ffccbb", marginBottom: 8 }}>
                    Your welcome discount code:
                  </p>
                  <div
                    style={{
                      backgroundColor: "rgba(0,0,0,0.25)",
                      borderRadius: 6,
                      padding: "10px 20px",
                      fontSize: 22,
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      fontFamily: "monospace",
                    }}
                  >
                    {discountCode}
                  </div>
                  <p style={{ fontSize: 12, color: "#ffccbb", marginTop: 8 }}>
                    15% off your first order
                  </p>
                </div>
              )}
            </div>
          ) : (
            <form
              onSubmit={handleEmail}
              className="email-form"
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
                disabled={submitting}
                style={{
                  backgroundColor: submitting ? "rgba(245,240,232,0.7)" : "#F5F0E8",
                  color: "#CC2200",
                  padding: "14px 28px",
                  borderRadius: 4,
                  border: "none",
                  fontWeight: 800,
                  fontSize: 14,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  cursor: submitting ? "not-allowed" : "pointer",
                }}
              >
                {submitting ? "..." : "Join Up"}
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
        <p style={{ color: "#a09888", fontSize: 16, maxWidth: 480, margin: "0 auto 32px" }}>
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
