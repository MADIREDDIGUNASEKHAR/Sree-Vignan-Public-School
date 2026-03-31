"use client";

import React from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const TOP_THREE = [
  {
    rank: "3",
    name: "Arjun Reddy",
    score: "498/500",
    tag: "STATE RANK 12",
    percentile: "99.9 Percentile",
    course: "Regular Batch",
    // Replace with actual image path e.g. "/images/arjun-reddy.jpg"
    image: null as string | null,
  },
  {
    rank: "1",
    name: "Ravi Kumar Sharma",
    score: "500/500",
    tag: "SCHOOL TOPPER",
    percentile: "100 Percentile",
    course: "Regular Batch",
    image: null as string | null,
  },
  {
    rank: "2",
    name: "Priya Venkatesh",
    score: "499/500",
    tag: "GIRL TOPPER",
    percentile: "100 Percentile",
    course: "Regular Batch",
    image: null as string | null,
  },
];

const RANKERS = [
  { rank: 4,  name: "Sai Teja M.",  score: "497", image: null as string | null },
  { rank: 5,  name: "Lakshmi N.",   score: "496", image: null },
  { rank: 6,  name: "Vikram S.",    score: "495", image: null },
  { rank: 7,  name: "Meena R.",     score: "495", image: null },
  { rank: 8,  name: "Aditya K.",    score: "494", image: null },
  { rank: 9,  name: "Pooja V.",     score: "493", image: null },
  { rank: 10, name: "Rahul M.",     score: "492", image: null },
  { rank: 11, name: "Divya T.",     score: "491", image: null },
  { rank: 12, name: "Kiran B.",     score: "490", image: null },
  { rank: 13, name: "Sneha G.",     score: "490", image: null },
  { rank: 14, name: "Nikhil P.",    score: "489", image: null },
  { rank: 15, name: "Anjali C.",    score: "488", image: null },
  { rank: 17, name: "Rohit V.",     score: "487", image: null },
  { rank: 18, name: "Deepa S.",     score: "486", image: null },
  { rank: 20, name: "Suresh N.",    score: "485", image: null },
  { rank: 22, name: "Tanisha K.",   score: "484", image: null },
  { rank: 23, name: "Manoj R.",     score: "483", image: null },
  { rank: 26, name: "Geeta P.",     score: "482", image: null },
  { rank: 31, name: "Harish D.",    score: "481", image: null },
  { rank: 33, name: "Kavya S.",     score: "480", image: null },
  { rank: 36, name: "Riya M.",      score: "479", image: null },
  { rank: 39, name: "Sunil T.",     score: "478", image: null },
];

const LEFT_STATS = [
  { num: "18",  label: "Students Scored 100%" },
  { num: "47",  label: "Students in Top 500" },
  { num: "112", label: "Students in Top 1000" },
];

const RIGHT_STATS = [
  { num: "89", label: "Scored 100% in Individual Subjects" },
  { num: "8",  label: "Students are State Toppers" },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────

const PALETTE = [
  ["#1a237e","#e8eaf6"],["#4a148c","#f3e5f5"],["#006064","#e0f7fa"],
  ["#1b5e20","#e8f5e9"],["#bf360c","#fbe9e7"],["#0d47a1","#e3f2fd"],
  ["#880e4f","#fce4ec"],["#e65100","#fff3e0"],
] as const;

function avatarColors(name: string): [string, string] {
  const idx = ((name.charCodeAt(0) ?? 0) + (name.charCodeAt(1) ?? 0)) % PALETTE.length;
  return PALETTE[idx];
}

function initials(name: string) {
  return name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
}

// ─── PHOTO PLACEHOLDER (large - for top 3) ────────────────────────────────────
// Replace `image` prop with actual src to show a real photo.
// Aspect ratio is maintained at ~3:4 (portrait).

function PhotoLg({ name, image, score }: { name: string; image: string | null; score: string }) {
  const [bg] = avatarColors(name);
  return (
    <div style={{ position: "relative", width: "100%", paddingTop: "125%", borderRadius: 14, overflow: "hidden" }}>
      {image ? (
        <img
          src={image}
          alt={name}
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "top center",
          }}
        />
      ) : (
        /* ── PLACEHOLDER: remove this block when real image is supplied ── */
        <div style={{
          position: "absolute", inset: 0, background: bg,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 6,
        }}>
          {/* Camera icon */}
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="7" width="20" height="14" rx="3" fill="rgba(255,255,255,0.25)" />
            <circle cx="12" cy="14" r="4" fill="rgba(255,255,255,0.45)" />
            <path d="M8 7l1.5-3h5L16 7" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
          </svg>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
            {initials(name)}
          </span>
          <span style={{ fontSize: 9, color: "rgba(255,255,255,0.5)" }}>Add Photo</span>
        </div>
      )}
      {/* Score badge */}
      <div style={{
        position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)",
        background: "#F7C948", color: "#1a237e", fontWeight: 900, fontSize: 11,
        padding: "3px 12px", borderRadius: 99, border: "2px solid #fff",
        whiteSpace: "nowrap", boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}>
        {score}
      </div>
    </div>
  );
}

// ─── PHOTO PLACEHOLDER (small - for ranker grid) ──────────────────────────────

function PhotoSm({ name, image }: { name: string; image: string | null }) {
  const [bg] = avatarColors(name);
  return (
    <div style={{
      width: "100%", paddingTop: "100%", borderRadius: "50%", overflow: "hidden",
      position: "relative", margin: "0 auto",
      boxShadow: "0 2px 8px rgba(0,0,0,0.18)", border: "3px solid #fff",
    }}>
      {image ? (
        <img
          src={image}
          alt={name}
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "top center",
          }}
        />
      ) : (
        <div style={{
          position: "absolute", inset: 0, background: bg,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 2 }}>
            <rect x="2" y="7" width="20" height="14" rx="3" fill="rgba(255,255,255,0.3)" />
            <circle cx="12" cy="14" r="4" fill="rgba(255,255,255,0.5)" />
            <path d="M8 7l1.5-3h5L16 7" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
          </svg>
          <span style={{ fontSize: 9, color: "rgba(255,255,255,0.8)", fontWeight: 700 }}>
            {initials(name)}
          </span>
        </div>
      )}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="10" cy="10" r="10" fill="#1a237e" />
      <path d="M5 10.5l3.5 3.5L15 7" stroke="#F7C948" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

// ─── TOP CARD ─────────────────────────────────────────────────────────────────

function TopCard({ r, isCenter }: { r: typeof TOP_THREE[0]; isCenter: boolean }) {
  const medalColor: Record<string, string> = { "1": "#F7C948", "2": "#c8c8c8", "3": "#cd7f32" };
  const medalText:  Record<string, string> = { "1": "#1a237e",  "2": "#333",    "3": "#fff"   };

  return (
    <div style={{
      background: "#fff",
      borderRadius: 18,
      padding: "12px 10px 14px",
      textAlign: "center",
      boxShadow: isCenter
        ? "0 10px 40px rgba(26,35,126,0.28), 0 2px 10px rgba(0,0,0,0.10)"
        : "0 4px 16px rgba(26,35,126,0.12)",
      border: isCenter ? "2.5px solid #1a237e" : "1.5px solid rgba(26,35,126,0.15)",
      transform: isCenter ? "translateY(-12px) scale(1.04)" : "scale(1)",
      position: "relative", zIndex: isCenter ? 2 : 1,
      flex: 1, minWidth: 0,
    }}>
      {r.tag && (
        <div style={{
          background: "#1a237e", color: "#F7C948", fontSize: 8, fontWeight: 900,
          letterSpacing: "0.12em", padding: "3px 8px", borderRadius: 99,
          display: "inline-block", marginBottom: 8, textTransform: "uppercase",
        }}>
          {r.tag}
        </div>
      )}

      {/* Photo */}
      <PhotoLg name={r.name} image={r.image} score={r.score} />

      {/* Medal */}
      <div style={{
        width: isCenter ? 48 : 40, height: isCenter ? 48 : 40,
        borderRadius: "50%",
        background: medalColor[r.rank] ?? "#1a237e",
        margin: "10px auto 6px",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: isCenter ? 24 : 18, fontWeight: 900,
        color: medalText[r.rank] ?? "#fff",
        border: "3px solid #fff", boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}>
        {r.rank}
      </div>

      <p style={{ fontWeight: 800, fontSize: isCenter ? 13 : 11, color: "#1a237e", margin: "0 0 2px", lineHeight: 1.3 }}>
        {r.name}
      </p>
      <p style={{ fontSize: 10, color: "#888", margin: "0 0 2px" }}>{r.course}</p>
      <p style={{ fontSize: 10, fontWeight: 700, color: "#4a148c", margin: 0 }}>{r.percentile}</p>
    </div>
  );
}

// ─── SMALL RANKER CARD ────────────────────────────────────────────────────────

function SmallCard({ r }: { r: typeof RANKERS[0] }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 12, padding: "10px 7px 9px",
      textAlign: "center",
      boxShadow: "0 2px 10px rgba(26,35,126,0.10)",
      border: "1px solid rgba(26,35,126,0.10)",
    }}>
      <p style={{
        fontSize: 8, fontWeight: 900, color: "#1a237e", letterSpacing: "0.12em",
        textTransform: "uppercase", margin: "0 0 6px",
      }}>
        AIR {r.rank}
      </p>
      {/* Fixed-size photo container */}
      <div style={{ width: 56, height: 56, margin: "0 auto 6px" }}>
        <PhotoSm name={r.name} image={r.image} />
      </div>
      <p style={{ fontSize: 10, fontWeight: 700, color: "#1a237e", margin: "0 0 1px", lineHeight: 1.3 }}>
        {r.name}
      </p>
      <p style={{ fontSize: 9, color: "#888", margin: 0 }}>{r.score}/500</p>
    </div>
  );
}

// ─── MAIN SECTION ─────────────────────────────────────────────────────────────

export default function ClassXResultsSection() {
  return (
    <section style={{
      background: "linear-gradient(160deg,#F7C948 0%,#f4be20 55%,#e8ab00 100%)",
      padding: "52px 0 44px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Watermark */}
      <div aria-hidden style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        fontSize: 260, fontWeight: 900, color: "rgba(26,35,126,0.05)",
        whiteSpace: "nowrap", pointerEvents: "none", userSelect: "none",
        letterSpacing: "-0.04em",
      }}>SVPS</div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>

        {/* ── HEADER ── */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
          marginBottom: 28, gap: 16, flexWrap: "wrap",
        }}>
          <div style={{ flex: 1, minWidth: 220 }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#1a237e", margin: "0 0 3px", letterSpacing: "0.03em" }}>
              Making every student a Success story
            </p>
            <h2 style={{
              fontSize: "clamp(26px,4vw,48px)", fontWeight: 900, color: "#1a237e",
              margin: "0 0 4px", lineHeight: 0.95, letterSpacing: "-0.025em", textTransform: "uppercase",
            }}>
              UNMATCHED RESULTS
            </h2>
            <p style={{ fontSize: "clamp(13px,1.8vw,20px)", fontWeight: 700, color: "#1a237e", margin: 0, opacity: 0.85 }}>
              by Our Students in <strong>10th Board Exams 2025</strong>
            </p>
          </div>

          {/* Years badge */}
          <div style={{
            width: 96, height: 96, borderRadius: "50%", background: "#1a237e",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            textAlign: "center", flexShrink: 0,
            boxShadow: "0 4px 24px rgba(26,35,126,0.40)", border: "4px solid rgba(255,255,255,0.28)",
          }}>
            <p style={{ fontSize: 30, fontWeight: 900, color: "#F7C948", margin: 0, lineHeight: 1 }}>35</p>
            <p style={{
              fontSize: 8, fontWeight: 800, color: "#fff", margin: "2px 0 0",
              textTransform: "uppercase", letterSpacing: "0.07em", lineHeight: 1.35,
            }}>
              Years of<br />Excellence
            </p>
          </div>
        </div>

        {/* ── HERO ROW (top 3 + stat box) ── */}
        <div style={{ display: "flex", gap: 14, marginBottom: 18, alignItems: "flex-end" }}>
          {/* Top 3 in 2-1-3 order */}
          <div style={{ flex: 1, display: "flex", gap: 10, alignItems: "flex-end" }}>
            {[TOP_THREE[0], TOP_THREE[1], TOP_THREE[2]].map((r, i) => (
              <TopCard key={r.rank} r={r} isCenter={i === 1} />
            ))}
          </div>

          {/* Highlight stat box */}
          <div style={{
            background: "#1a237e", borderRadius: 18, padding: "22px 16px",
            textAlign: "center", minWidth: 140, maxWidth: 160,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            flexShrink: 0, boxShadow: "0 8px 32px rgba(26,35,126,0.38)",
          }}>
            <p style={{ fontSize: 58, fontWeight: 900, color: "#F7C948", margin: 0, lineHeight: 1 }}>
              50<span style={{ fontSize: 28 }}>+</span>
            </p>
            <p style={{
              fontSize: 10, fontWeight: 800, color: "#fff", margin: "6px 0 3px",
              textTransform: "uppercase", letterSpacing: "0.08em", lineHeight: 1.45,
            }}>
              Students in Top 100
            </p>
            <p style={{ fontSize: 9, color: "rgba(247,201,72,0.85)", fontStyle: "italic", margin: 0 }}>
              Highest among all schools
            </p>
          </div>
        </div>

        {/* ── RANKERS GRID ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))",
          gap: 8, marginBottom: 18,
        }}>
          {RANKERS.map((r, idx) => <SmallCard key={`${r.rank}-${idx}`} r={r} />)}
        </div>

        {/* ── STATS BAR ── */}
        <div style={{
          background: "rgba(255,255,255,0.84)", borderRadius: 14,
          padding: "18px 24px",
          display: "grid", gridTemplateColumns: "1fr auto 1fr",
          gap: 16, alignItems: "center",
        }}>
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {LEFT_STATS.map(s => (
              <div key={s.label} style={{ display: "flex", alignItems: "flex-start", gap: 7 }}>
                <CheckIcon />
                <span>
                  <strong style={{ fontSize: 17, fontWeight: 900, color: "#1a237e", marginRight: 5 }}>
                    {s.num}
                  </strong>
                  <span style={{ fontSize: 11, color: "#444", fontWeight: 600 }}>{s.label}</span>
                </span>
              </div>
            ))}
          </div>

          {/* Center */}
          <div style={{
            textAlign: "center",
            borderLeft: "1.5px solid rgba(26,35,126,0.15)",
            borderRight: "1.5px solid rgba(26,35,126,0.15)",
            padding: "0 22px",
          }}>
            <p style={{
              fontSize: 9, color: "#555", fontWeight: 700, margin: "0 0 1px",
              letterSpacing: "0.06em", textTransform: "uppercase",
            }}>
              Students Eligible for Higher Studies
            </p>
            <p style={{ fontSize: 50, fontWeight: 900, color: "#1a237e", margin: "0 0 2px", lineHeight: 1 }}>5000</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
              <span style={{ fontSize: 10, color: "#444", fontWeight: 700 }}>Science: 2800</span>
              <span style={{ fontSize: 10, color: "#aaa" }}>|</span>
              <span style={{ fontSize: 10, color: "#444", fontWeight: 700 }}>Commerce: 2200</span>
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {RIGHT_STATS.map(s => (
              <div key={s.label} style={{ display: "flex", alignItems: "flex-start", gap: 7 }}>
                <CheckIcon />
                <span>
                  <strong style={{ fontSize: 17, fontWeight: 900, color: "#1a237e", marginRight: 5 }}>
                    {s.num}
                  </strong>
                  <span style={{ fontSize: 11, color: "#444", fontWeight: 600 }}>{s.label}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── FOOTER ── */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          marginTop: 18, paddingTop: 16,
          borderTop: "1.5px solid rgba(26,35,126,0.25)",
          flexWrap: "wrap", gap: 12,
        }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 600, color: "#1a237e", margin: 0, opacity: 0.75 }}>Heartiest</p>
            <p style={{ fontSize: 18, fontWeight: 900, color: "#1a237e", margin: 0 }}>Congratulations!</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
            {/* School logo placeholder — replace with <img src="/logo.png" .../> */}
            <div style={{
              width: 52, height: 52, borderRadius: "50%", background: "#1a237e",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 900, fontSize: 11, color: "#F7C948", letterSpacing: "-0.03em",
              border: "3px solid rgba(255,255,255,0.4)",
            }}>
              SVPS
            </div>
            <p style={{ fontSize: 10, fontWeight: 700, color: "#1a237e", margin: 0, textAlign: "center", lineHeight: 1.35 }}>
              Sree Vignan Public School<br />
              <span style={{ fontWeight: 600, opacity: 0.7 }}>Chodavaram</span>
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#1a237e", margin: 0 }}>Authenticity of Results</p>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#1a237e", margin: "2px 0 0", opacity: 0.75 }}>
              Excellence in Education
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}