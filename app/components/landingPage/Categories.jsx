"use client";

import {
  Music2,
  Guitar,
  Tent,
  Mic2,
  Piano,
  Radio,
  ArrowRight,
  Ticket,
} from "lucide-react";

const ACCENT = {
  pink: "#FF2E6C",
  cyan: "#2FE6C8",
  amber: "#FF6B35",
  violet: "#8C6BFF",
  gold: "#E8B84B",
  sage: "#9BD770",
};

const INK = "#0D0D12";
const PAPER = "#F3EEE1";

const categories = [
  {
    title: "K-Pop",
    total: "126 concerts",
    artist: "BLACKPINK, BTS, IVE",
    icon: Mic2,
    accent: ACCENT.pink,
    tier: "VIP access",
    code: "KP-0126",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200",
  },
  {
    title: "Pop",
    total: "248 concerts",
    artist: "Bruno Mars, Dua Lipa",
    icon: Radio,
    accent: ACCENT.cyan,
    tier: "VIP access",
    code: "PO-0248",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200",
  },
  {
    title: "Rock",
    total: "84 concerts",
    artist: "Coldplay, Imagine Dragons",
    icon: Guitar,
    accent: ACCENT.amber,
    tier: "General admission",
    code: "RK-0084",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200",
  },
  {
    title: "EDM",
    total: "91 festivals",
    artist: "Martin Garrix, Alan Walker",
    icon: Tent,
    accent: ACCENT.violet,
    tier: "General admission",
    code: "ED-0091",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200",
  },
  {
    title: "Jazz",
    total: "42 live shows",
    artist: "Jakarta Jazz Festival",
    icon: Piano,
    accent: ACCENT.gold,
    tier: "General admission",
    code: "JZ-0042",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200",
  },
  {
    title: "Indie",
    total: "73 concerts",
    artist: "Hindia, Feast, Reality Club",
    icon: Music2,
    accent: ACCENT.sage,
    tier: "General admission",
    code: "IN-0073",
    image:
      "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1200",
  },
];

const stats = [
  { value: "10K+", label: "Available events", accent: ACCENT.pink },
  { value: "150K+", label: "Happy customers", accent: ACCENT.cyan },
  { value: "120+", label: "Trusted partners", accent: ACCENT.violet },
  { value: "4.9", label: "User rating", accent: ACCENT.gold },
];

const marqueeItems = categories
  .map((c) => `${c.artist}`)
  .join("  ✦  ");

function Perforation() {
  const dots = new Array(9).fill(0);
  return (
    <div
      className="hidden sm:flex flex-col items-center justify-between absolute top-0 bottom-0"
      style={{ left: "72%", width: 0, zIndex: 20 }}
    >
      <div
        className="absolute top-0 bottom-0"
        style={{
          left: -1,
          width: 2,
          backgroundImage: `repeating-linear-gradient(to bottom, ${INK} 0 8px, transparent 8px 16px)`,
          opacity: 0.35,
        }}
      />
      <div
        className="rounded-full absolute"
        style={{ top: -10, left: -10, width: 20, height: 20, background: INK }}
      />
      <div
        className="rounded-full absolute"
        style={{ bottom: -10, left: -10, width: 20, height: 20, background: INK }}
      />
    </div>
  );
}

function TicketCard({ item, index }) {
  const Icon = item.icon;
  const tilt = index % 2 === 0 ? "-0.6deg" : "0.6deg";

  return (
    <div
      className="group relative flex overflow-hidden"
      style={{
        background: INK,
        borderRadius: 18,
        border: `1px solid ${item.accent}33`,
        minHeight: 220,
        transform: `rotate(0deg)`,
        transition: "transform 400ms ease, box-shadow 400ms ease",
        boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `rotate(${tilt}) translateY(-4px)`;
        e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.5)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "rotate(0deg) translateY(0)";
        e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.35)";
      }}
    >
      {/* Main stub */}
      <div className="relative flex-1 overflow-hidden" style={{ width: "72%" }}>
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${INK}CC 0%, ${INK}66 35%, ${INK}F2 100%)`,
          }}
        />

        <div
          className="absolute left-5 top-5 flex items-center gap-2 rounded-full px-3 py-1.5"
          style={{ background: `${item.accent}26`, border: `1px solid ${item.accent}66` }}
        >
          <Icon size={14} color={item.accent} />
          <span
            className="text-[10px] font-medium uppercase"
            style={{ color: item.accent, letterSpacing: "2px", fontFamily: "var(--font-mono)" }}
          >
            {item.tier}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6">
          <p
            className="text-[11px] uppercase mb-2"
            style={{ color: item.accent, letterSpacing: "3px", fontFamily: "var(--font-mono)" }}
          >
            Now selling
          </p>
          <h3
            className="text-white leading-none"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 40px)" }}
          >
            {item.title}
          </h3>
          <p className="mt-2 text-sm" style={{ color: "#C9C7D4" }}>
            {item.artist}
          </p>
          <p
            className="mt-1 text-xs"
            style={{ color: "#8B899A", fontFamily: "var(--font-mono)" }}
          >
            {item.total}
          </p>
        </div>
      </div>

      <Perforation />

      {/* Stub */}
      <div
        className="relative flex flex-col items-center justify-between py-6"
        style={{ width: "28%", background: PAPER }}
      >
        <span
          className="text-[10px] font-semibold"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            letterSpacing: "4px",
            color: INK,
            fontFamily: "var(--font-mono)",
          }}
        >
          {item.title.toUpperCase()} · TICKET
        </span>

        <button
          className="flex items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5"
          style={{ width: 34, height: 34, background: INK }}
          aria-label={`Explore ${item.title}`}
        >
          <ArrowRight size={15} color={PAPER} />
        </button>

        <span
          className="text-[9px]"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            letterSpacing: "2px",
            color: "#6B6858",
            fontFamily: "var(--font-mono)",
          }}
        >
          {item.code}
        </span>
      </div>
    </div>
  );
}

export default function Categories() {
  return (
    <section className="py-24" style={{ background: INK }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;600&display=swap');
        section, section * { box-sizing: border-box; }
        section {
          --font-display: 'Anton', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
          --font-body: 'Inter', sans-serif;
          font-family: var(--font-body);
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 32s linear infinite;
        }
      `}</style>

      {/* Marquee ticker */}
      <div
        className="w-full overflow-hidden mb-20 py-4"
        style={{ borderTop: "1px solid #ffffff1a", borderBottom: "1px solid #ffffff1a" }}
      >
        <div className="marquee-track flex whitespace-nowrap" style={{ width: "max-content" }}>
          {[0, 1].map((i) => (
            <span
              key={i}
              className="px-6 text-sm uppercase"
              style={{ color: "#8B899A", letterSpacing: "3px", fontFamily: "var(--font-mono)" }}
            >
              {marqueeItems} &nbsp; ✦ &nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Ticket size={16} color={ACCENT.pink} />
              <p
                className="uppercase text-xs"
                style={{ color: ACCENT.pink, letterSpacing: "4px", fontFamily: "var(--font-mono)" }}
              >
                Now selling
              </p>
            </div>
            <h2
              className="text-white leading-[0.95]"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 68px)" }}
            >
              Browse categories
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7" style={{ color: "#A9A7B5" }}>
            Every stub below is a doorway into a different world of live music.
            Pick a genre, pull a ticket, and see who's playing near you.
          </p>
        </div>

        {/* Ticket grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {categories.map((item, i) => (
            <TicketCard item={item} index={i} key={item.title} />
          ))}
        </div>

        {/* Backstage pass stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="relative pt-7 pb-6 px-5 text-center"
              style={{
                background: PAPER,
                borderRadius: 14,
                transform: `rotate(${i % 2 === 0 ? "-1.2deg" : "1.2deg"})`,
                borderTop: `4px solid ${s.accent}`,
              }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  top: -8,
                  left: "50%",
                  marginLeft: -8,
                  width: 16,
                  height: 16,
                  background: INK,
                }}
              />
              <h3
                style={{ fontFamily: "var(--font-display)", color: INK, fontSize: "clamp(28px,3.5vw,36px)" }}
              >
                {s.value}
              </h3>
              <p
                className="mt-2 text-[11px] uppercase"
                style={{ color: "#6B6858", letterSpacing: "2px", fontFamily: "var(--font-mono)" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}