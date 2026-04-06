"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

// ── School branding ──────────────────────────────────────────────────────────
const SCHOOL_LOGO        = "/gallery/LOGO.png";
const SCHOOL_NAME        = "Sree Vignan School – Chodavaram";
const FOOTER_DISCLAIMER  = "As per results compiled up to April 2024. All rights reserved.";
const FOOTER_TAGLINE     = "Excellence in Education";

// ── Callout box ──────────────────────────────────────────────────────────────
const CALLOUT = {
  count:      "16",
  label:      "Students Above",
  highlight:  "580",
  sublabel:   "All India Ranks",
  badge:      "Highest among all Institutes",
};

// ── Batch years ───────────────────────────────────────────────────────────────
const BATCHES          = ["2025", "2024", "2023", "2022", "2021"];
const DEFAULT_BATCH    = "2025";

// ── Top 3 performers ──────────────────────────────────────────────────────────
const TOP_PERFORMERS = [
  {
    air:         1,
    name:        "Y MONISHA",
    score:       "597/600",
    courseType:  "Classroom Course",
    percentile:  "Overall 100 Percentile",
    image:       "/gallery/Results/Y MONISHA.jpeg",
    isCenter:    false,
  },
  {
    air:         2,
    name:        "P DOLA HARINI",
    score:       "595/600",
    courseType:  "Classroom Course",
    percentile:  "Overall 100 Percentile",
    image:       "/gallery/Results/P DOLA HARINI.jpeg",
    isCenter:    true,
  },
  {
    air:         3,
    name:        "B BALAJI",
    score:       "594/600",
    courseType:  "Classroom Course",
    percentile:  "Overall 100 Percentile",
    image:       "/gallery/Results/B Balaji.jpeg",
    isCenter:    false,
  },
];

// ── All rank students ─────────────────────────────────────────────────────────
const ALL_RANKS: RankStudent[] = [
  { air: 4,  name: "K PAVAN KUMAR NAIDU",      score: "591/600", detail: "100 Percentile", image: "/gallery/Results/K PAVAN KUMAR NAIDU.jpeg" },
  { air: 5,  name: "D GREESHMA",               score: "589/600", detail: "100 Percentile", image: "/gallery/Results/D GREESHMA.jpeg" },
  { air: 6,  name: "K TEJA SRI",               score: "587/600", detail: "100 Percentile", image: "/gallery/Results/K TEJA SRI.jpeg" },
  { air: 7,  name: "M SAI SEERSHIKA",          score: "586/600", detail: "100 Percentile", image: "/gallery/Results/M SAI SEERSHIKA.jpeg" },
  { air: 8,  name: "P BHUVANA SREE",           score: "585/600", detail: "100 Percentile", image: "/gallery/Results/P BHUVANA SREE.jpeg" },
  { air: 9,  name: "G ALEKHYA",                score: "584/600", detail: "100 Percentile", image: "/gallery/Results/G ALEKHYA.jpeg" },
  { air: 10, name: "N SRI DHATHRI",            score: "583/600", detail: "100 Percentile", image: "/gallery/Results/N SRI DHATHRI.jpeg" },
  { air: 11, name: "V PRABHA SURYA VAISHNAVI", score: "582/600", detail: "100 Percentile", image: "/gallery/Results/V PRABHA SURYA VAISHNAVI.jpeg" },
  { air: 12, name: "U BALA SREEDHAR",          score: "581/600", detail: "100 Percentile", image: "/gallery/Results/U BALA SREEDHAR.jpeg" },
  { air: 13, name: "A LIKHITHA",               score: "581/600", detail: "100 Percentile", image: "/gallery/Results/A LIKHITHA.jpeg" },
  { air: 14, name: "V TEJA",                   score: "580/600", detail: "100 Percentile", image: "/gallery/Results/V TEJA.jpeg" },
  { air: 34, name: "G BHAGYA SREE",            score: "567/600", detail: "Classroom",      image: "/gallery/Results/G BHAGYA SREE.jpeg" },
  { air: 35, name: "K KEERTHIKA SREE",         score: "565/600", detail: "Classroom",      image: "/gallery/Results/K KEERTHIKA SREE.jpeg" },
];

// =============================================================================
// END OF CONFIG
// =============================================================================

interface TopPerformer {
  air: number;
  name: string;
  score: string;
  courseType: string;
  percentile: string;
  image: string;
  isCenter?: boolean;
}

interface RankStudent {
  air: number;
  name: string;
  score: string;
  detail: string;
  image: string;
}

// ─── Placeholder ──────────────────────────────────────────────────────────────
const Placeholder: React.FC<{ className?: string; style?: React.CSSProperties }> = ({
  className = "",
  style,
}) => (
  <div
    className={className}
    style={{
      background: "linear-gradient(135deg, #e2e8f0 0%, #cbd5e0 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...style,
    }}
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#94a3b8"
      strokeWidth="1.5"
      style={{ width: "40%", height: "40%" }}
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  </div>
);

// ─── Royal Marks Badge (Top 3) ────────────────────────────────────────────────
const RoyalMarksBadge: React.FC<{ score: string; id: string }> = ({ score, id }) => (
  <div
    style={{
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 110,
      height: 44,
    }}
  >
    <svg
      style={{ position: "absolute", top: 0, left: 0, width: 110, height: 44 }}
      viewBox="0 0 110 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`royalGrad-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#FFD700" />
          <stop offset="45%"  stopColor="#F4C430" />
          <stop offset="100%" stopColor="#C8960C" />
        </linearGradient>
      </defs>
      {/* shadow glow */}
      <ellipse cx="55" cy="28" rx="48" ry="12" fill="#8B6000" opacity="0.2" />
      {/* main pill */}
      <rect x="6" y="14" width="98" height="24" rx="12" fill={`url(#royalGrad-${id})`} stroke="#9A7000" strokeWidth="1" />
      {/* inner inset */}
      <rect x="9" y="17" width="92" height="18" rx="9" fill="none" stroke="rgba(255,230,80,0.55)" strokeWidth="0.75" />
      {/* left gem */}
      <circle cx="11" cy="26" r="4"   fill="#C8860A" stroke="#7a5000" strokeWidth="0.75" />
      <circle cx="11" cy="26" r="1.8" fill="#FFD700" />
      {/* right gem */}
      <circle cx="99" cy="26" r="4"   fill="#C8860A" stroke="#7a5000" strokeWidth="0.75" />
      <circle cx="99" cy="26" r="1.8" fill="#FFD700" />
      {/* crown */}
      <g transform="translate(43.5,-1)">
        <path
          d="M11 5.5 L4.5 13.5 L11 10.5 L17.5 13.5 L24 5.5 L21 13.5 L1 13.5 L-2 5.5 L4.5 10.5 Z"
          fill="#FFD700"
          stroke="#9A7000"
          strokeWidth="0.9"
        />
        <circle cx="11" cy="5"  r="2.2" fill="#B22222" stroke="#7a0000" strokeWidth="0.5" />
        <circle cx="2"  cy="7"  r="1.3" fill="#FFE066" stroke="#9A7000" strokeWidth="0.4" />
        <circle cx="20" cy="7"  r="1.3" fill="#FFE066" stroke="#9A7000" strokeWidth="0.4" />
      </g>
      {/* star accents */}
      <text x="20" y="30" fill="rgba(255,210,30,0.85)" fontSize="5.5" fontFamily="serif">✦</text>
      <text x="82" y="30" fill="rgba(255,210,30,0.85)" fontSize="5.5" fontFamily="serif">✦</text>
    </svg>

    <div
      style={{
        position: "absolute",
        top: 14,
        left: 6,
        width: 98,
        height: 24,
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <span
        style={{
          fontFamily: "'Cinzel', 'Georgia', serif",
          fontWeight: 900,
          fontSize: 13,
          color: "#7a3800",
          letterSpacing: "0.04em",
          textShadow: "0 1px 0 rgba(255,220,80,0.8)",
          lineHeight: 1,
        }}
      >
        {score}
      </span>
    </div>
  </div>
);

// ─── Simple Crown Badge (Ranks 4+) ───────────────────────────────────────────
const SimpleMarksBadge: React.FC<{ score: string; id: string }> = ({ score, id }) => (
  <div
    style={{
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 80,
      height: 28,
    }}
  >
    <svg
      style={{ position: "absolute", top: 0, left: 0, width: 80, height: 28 }}
      viewBox="0 0 80 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`simpleGrad-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#FFE44D" />
          <stop offset="100%" stopColor="#D4A017" />
        </linearGradient>
      </defs>
      <ellipse cx="40" cy="20" rx="35" ry="7" fill="#8B6000" opacity="0.18" />
      <rect x="4" y="10" width="72" height="16" rx="8" fill={`url(#simpleGrad-${id})`} stroke="#C8960C" strokeWidth="0.75" />
      <rect x="7" y="13" width="66" height="10" rx="5" fill="none" stroke="rgba(255,225,60,0.45)" strokeWidth="0.6" />
      {/* mini crown */}
      <g transform="translate(33.5,-1)">
        <path
          d="M6.5 3.5 L3 8.5 L6.5 7 L10 8.5 L13.5 3.5 L11.5 8.5 L1.5 8.5 Z"
          fill="#FFD700"
          stroke="#9A7000"
          strokeWidth="0.6"
        />
        <circle cx="6.5" cy="3" r="1.2" fill="#B22222" stroke="#7a0000" strokeWidth="0.4" />
      </g>
      <circle cx="10" cy="18" r="1.3" fill="rgba(255,210,30,0.75)" />
      <circle cx="70" cy="18" r="1.3" fill="rgba(255,210,30,0.75)" />
    </svg>

    <div
      style={{
        position: "absolute",
        top: 10,
        left: 4,
        width: 72,
        height: 16,
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <span
        style={{
          fontFamily: "'Cinzel', 'Georgia', serif",
          fontWeight: 700,
          fontSize: 10,
          color: "#7a3800",
          letterSpacing: "0.03em",
          lineHeight: 1,
        }}
      >
        {score}
      </span>
    </div>
  </div>
);

// ─── Batch Dropdown ───────────────────────────────────────────────────────────
const BatchDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([DEFAULT_BATCH]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggle = (batch: string) =>
    setSelected((prev) =>
      prev.includes(batch) ? prev.filter((b) => b !== batch) : [...prev, batch]
    );

  const label =
    selected.length === 0
      ? "Select Batch"
      : selected.length === 1
      ? `BATCH OF ${selected[0]}`
      : `${selected.length} BATCHES`;

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{ cursor: "pointer" }}
        className="flex items-center gap-2 bg-[#1A365D] text-white rounded-xl px-4 py-2.5 shadow-lg select-none"
      >
        <div className="text-right">
          <p style={{ fontSize: 9, letterSpacing: "0.15em", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", lineHeight: 1, marginBottom: 2, fontWeight: 600 }}>
            Excellence Journey
          </p>
          <p style={{ fontSize: 14, fontWeight: 900, letterSpacing: "0.05em", lineHeight: 1 }}>
            {label}
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: 16, height: 16, color: "rgba(255,255,255,0.8)", transition: "transform 0.2s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 bg-[#1A365D] rounded-xl shadow-2xl overflow-hidden border border-white/10"
          style={{ width: "13rem", zIndex: 50 }}
        >
          <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "12px 16px 4px" }}>
            Select Batches
          </p>
          {BATCHES.map((batch) => {
            const checked = selected.includes(batch);
            return (
              <button
                key={batch}
                onClick={() => toggle(batch)}
                style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "10px 16px", background: "transparent", border: "none", cursor: "pointer" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "transparent")}
              >
                <span
                  style={{ width: 16, height: 16, borderRadius: 4, border: checked ? "2px solid #FFD700" : "2px solid rgba(255,255,255,0.4)", background: checked ? "#FFD700" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.15s" }}
                >
                  {checked && (
                    <svg style={{ width: 10, height: 10, color: "#1A365D" }} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="2 6 5 9 10 3" />
                    </svg>
                  )}
                </span>
                <span style={{ color: "white", fontWeight: 700, fontSize: 14 }}>Batch of {batch}</span>
              </button>
            );
          })}
          <div style={{ padding: "10px 16px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <button
              onClick={() => setSelected([])}
              style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.5)", fontSize: 10, padding: 0 }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.85)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.5)")}
            >
              Clear all
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Header Bar ───────────────────────────────────────────────────────────────
const HeaderBar: React.FC = () => (
  <div className="w-full flex items-center justify-between px-6 md:px-10 py-3">
    <div style={{ background: "#ffffff", padding: 6, borderRadius: 8, boxShadow: "0 4px 12px rgba(0,0,0,0.1)", display: "inline-flex" }}>
      <Image
        src={SCHOOL_LOGO}
        alt={SCHOOL_NAME}
        width={111}
        height={111}
        style={{ objectFit: "contain" }}
      />
    </div>
    <BatchDropdown />
  </div>
);

// ─── Top Performer Card ───────────────────────────────────────────────────────
const TopPerformerCard: React.FC<{ performer: TopPerformer }> = ({ performer }) => {
  const { isCenter } = performer;
  const imgH = isCenter ? 160 : 140;

  return (
    <div className="text-center relative flex flex-col items-center">
      {/* Image wrapper — badge anchors to the bottom of this */}
      <div className="relative inline-block w-full">
        {performer.image ? (
          <Image
            src={performer.image}
            alt={`AIR ${performer.air} – ${performer.name}`}
            width={160}
            height={imgH}
            className="w-full object-cover"
            style={{
              height: imgH,
              clipPath: "ellipse(45% 50% at 50% 50%)",
              transform: isCenter ? "scale(1.06)" : "scale(1)",
            }}
          />
        ) : (
          <Placeholder
            className="w-full"
            style={{ height: imgH, clipPath: "ellipse(45% 50% at 50% 50%)" }}
          />
        )}

        {/* Royal badge overlapping the bottom of the portrait */}
        <div
          style={{
            position: "absolute",
            bottom: -14,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
          }}
        >
          <RoyalMarksBadge score={performer.score} id={String(performer.air)} />
        </div>
      </div>

      {/* marginTop clears the overlapping badge */}
      <div style={{ marginTop: 22 }}>
        <span className="block text-[#1A365D] font-bold text-xs">AIR</span>
        <span
          className={`block text-[#1A365D] font-black -mt-1 ${isCenter ? "text-6xl" : "text-5xl"}`}
        >
          {performer.air}
        </span>
        <p className="uppercase font-bold text-[#1A365D] text-[11px] leading-tight">{performer.name}</p>
        <p className="text-[9px] text-[#1A365D] mt-0.5">
          {performer.courseType}<br />{performer.percentile}
        </p>
      </div>
    </div>
  );
};

// ─── Small Rank Card ──────────────────────────────────────────────────────────
const SmallRankCard: React.FC<{ student: RankStudent }> = ({ student }) => (
  <div className="text-center">
    <p className="text-[10px] font-black text-[#1A365D] mb-1">AIR {student.air}</p>

    {/* Image wrapper — badge anchors to the bottom of this */}
    <div className="relative inline-block">
      {student.image ? (
        <Image
          src={student.image}
          alt={`AIR ${student.air} – ${student.name}`}
          width={64}
          height={84}
          className="w-16 h-[84px] rounded-md shadow-sm border border-gray-200 object-cover"
        />
      ) : (
        <Placeholder className="w-16 h-[84px] rounded-md shadow-sm border border-gray-200" />
      )}

      {/* Simple badge overlapping the bottom of the small portrait */}
      <div
        style={{
          position: "absolute",
          bottom: -11,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <SimpleMarksBadge score={student.score} id={String(student.air)} />
      </div>
    </div>

    {/* marginTop clears the overlapping badge */}
    <p className="text-[8px] font-bold text-[#1A365D] leading-tight uppercase line-clamp-2 max-w-[68px] mx-auto" style={{ marginTop: 18 }}>
      {student.name}
    </p>
    <p className="text-[7px] text-gray-600">{student.detail}</p>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const AcademicResultsPoster: React.FC = () => (
  <div
    className="min-h-screen w-full flex flex-col"
    style={{ background: "#fefacd", fontFamily: "'Inter', sans-serif" }}
  >
    <HeaderBar />

    <main className="flex-1 flex items-center justify-center">
      <div className="w-full max-w-5xl px-6 md:px-10 pb-10">

        {/* ── Top 3 + Callout ── */}
        <section className="relative z-10 grid grid-cols-12 gap-4 mb-10">
          <div className="col-span-12 lg:col-span-8 grid grid-cols-3 gap-2 items-end max-w-lg mx-auto lg:mx-0 w-full">
            {TOP_PERFORMERS.map((p) => (
              <TopPerformerCard key={p.air} performer={p} />
            ))}
          </div>
          <div className="col-span-12 lg:col-span-4 flex items-center justify-center">
            <div className="bg-white/80 p-6 rounded-3xl border-2 border-[#1A365D] text-center shadow-lg w-full">
              <div className="text-[#1A365D] font-black text-8xl leading-none">{CALLOUT.count}</div>
              <div className="text-[#1A365D] font-bold text-xl tracking-tighter uppercase">{CALLOUT.label}</div>
              <div
                className="bg-[#1A365D] text-white text-3xl font-black px-4 py-1 my-2 rounded-sm"
                style={{ transform: "skewX(-10deg)" }}
              >
                {CALLOUT.highlight}
              </div>
              <div className="text-[#1A365D] font-bold text-sm uppercase">{CALLOUT.sublabel}</div>
              <div className="mt-4 inline-block bg-yellow-300/50 border border-[#1A365D]/30 px-3 py-1 rounded-full text-[10px] font-bold text-[#1A365D]">
                {CALLOUT.badge}
              </div>
            </div>
          </div>
        </section>

        {/* ── Ranks Grid ── */}
        <section className="relative z-10">
          <div className="grid grid-cols-4 md:grid-cols-6 gap-y-6 gap-x-3">
            {ALL_RANKS.map((s) => (
              <SmallRankCard key={s.air} student={s} />
            ))}
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="mt-12 flex justify-between items-end border-t border-[#1A365D]/10 pt-4">
          <div className="text-[8px] text-[#1A365D]/60 font-medium">{FOOTER_DISCLAIMER}</div>
          <div className="bg-[#1A365D] text-white px-4 py-1 rounded text-xs font-bold uppercase tracking-widest">
            {FOOTER_TAGLINE}
          </div>
        </footer>

      </div>
    </main>
  </div>
);

export default AcademicResultsPoster;
