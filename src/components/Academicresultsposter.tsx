"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

// =============================================================================
// ██████╗ ██████╗ ███╗   ██╗███████╗██╗ ██████╗
// ██╔════╝██╔═══██╗████╗  ██║██╔════╝██║██╔════╝
// ██║     ██║   ██║██╔██╗ ██║█████╗  ██║██║  ███╗
// ██║     ██║   ██║██║╚██╗██║██╔══╝  ██║██║   ██║
// ╚██████╗╚██████╔╝██║ ╚████║██║     ██║╚██████╔╝
//  ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝     ╚═╝ ╚═════╝
//
// Edit everything in this section to update the poster.
// Images go in:  public/results/  (e.g. public/results/air3.jpg)
// =============================================================================

// ── School branding ──────────────────────────────────────────────────────────
const SCHOOL_LOGO        = "/gallery/LOGO.png";   // your school logo
const SCHOOL_NAME        = "Sree Vignan School – Chodavaram";
const FOOTER_DISCLAIMER  = "As per results compiled up to April 2024. All rights reserved.";
const FOOTER_TAGLINE     = "Excellence in Education";

// ── Callout box (top-right card) ─────────────────────────────────────────────
const CALLOUT = {
  count:      "16",          // big number
  label:      "Students Above",
  highlight:  "580",
  sublabel:   "All India Ranks",
  badge:      "Highest among all Institutes",
};

// ── Batch years shown in the dropdown ────────────────────────────────────────
const BATCHES          = ["2025", "2024", "2023", "2022", "2021"];
const DEFAULT_BATCH    = "2025";   // pre-selected on load

// ── Top 3 performers (large portraits) ───────────────────────────────────────
// Images: place files in public/results/ e.g. air3.jpg, air4.jpg, air5.jpg
const TOP_PERFORMERS = [
  {
    air:         1,
    name:        "Y MONISHA",       // ← replace
    score:       "597/600",
    courseType:  "Classroom Course",
    percentile:  "Overall 100 Percentile",
    image:       "/gallery/Results/Y MONISHA.jpeg",
    isCenter:    false,
  },
  {
    air:         2,
    name:        "P DOLA HARINI",       // ← replace
    score:       "595/600",
    courseType:  "Classroom Course",
    percentile:  "Overall 100 Percentile",
    image:       "/gallery/Results/P DOLA HARINI.jpeg",  // ← replace filename
    isCenter:    true,                 // centre card — slightly larger
  },
  {
    air:         3,
    name:        "B BALAJI",       // ← replace
    score:       "594/600",
    courseType:  "Classroom Course",
    percentile:  "Overall 100 Percentile",
    image:       "/gallery/Results/B Balaji.jpeg",  // ← replace filename
    isCenter:    false,
  },
];

// ── Rank grid rows ────────────────────────────────────────────────────────────
// For each student add: { air, name, detail, image }
// image path example: "/results/air11.jpg"
// If you leave image blank ("") a grey placeholder is shown automatically.

const RANKS_ROW_1 = [
  { air: 4,  name: "K PAVAN KUMAR NAIDU", detail: "100 Percentile", image: "/gallery/Results/K PAVAN KUMAR NAIDU.jpeg"},
  { air: 5,  name: "D GREESHMA", detail: "100 Percentile", image: "/gallery/Results/D GREESHMA.jpeg"  },
  { air: 6,  name: "K TEJA SRI", detail: "100 Percentile", image: "/gallery/Results/K TEJA SRI.jpeg"  },
  { air: 7,  name: "M SAI SEERSHIKA", detail: "100 Percentile", image: "/gallery/Results/M SAI SEERSHIKA.jpeg"  },
  { air: 8,  name: "P BHUVANA SREE", detail: "100 Percentile", image: "/gallery/Results/P BHUVANA SREE.jpeg"  },
  { air: 9,  name: "G ALEKHYA", detail: "100 Percentile", image: "/gallery/Results/G ALEKHYA.jpeg"  },
  { air: 10, name: "N SRI DHATHRI", detail: "100 Percentile", image: "/gallery/Results/N SRI DHATHRI.jpeg"  },
  { air: 11,  name: "V PRABHA SURYA VAISHNAVI", detail: "100 Percentile", image: "/gallery/Results/V PRABHA SURYA VAISHNAVI.jpeg"  },
  { air: 12,  name: "U BALA SREEDHAR", detail: "100 Percentile", image: "/gallery/Results/U BALA SREEDHAR.jpeg"  },
  { air: 13,  name: "A LIKHITHA", detail: "100 Percentile", image: "/gallery/Results/A LIKHITHA.jpeg"  },
  { air: 14,  name: "V TEJA", detail: "100 Percentile", image: "/gallery/Results/V TEJA.jpeg"  },
];

const RANKS_ROW_2 = [
  { air: 34,  name: "G BHAGYA SREE", detail: "Classroom", image: "/gallery/Results/G BHAGYA SREE.jpeg"  },
  { air: 35,  name: "K KEERTHIKA SREE", detail: "Classroom", image: "/gallery/Results/K KEERTHIKA SREE.jpeg"  },
  { air: 36,  name: "Student Name", detail: "Classroom", image: "/results/air36.jpg"  },
  { air: 45,  name: "Student Name", detail: "Classroom", image: "/results/air45.jpg"  },
  { air: 52,  name: "Student Name", detail: "Classroom", image: "/results/air52.jpg"  },
  { air: 54,  name: "Student Name", detail: "Classroom", image: "/results/air54.jpg"  },
  { air: 56,  name: "Student Name", detail: "Classroom", image: "/results/air56.jpg"  },
  { air: 60,  name: "Student Name", detail: "Classroom", image: "/results/air60.jpg"  },
  { air: 61,  name: "Student Name", detail: "Classroom", image: "/results/air61.jpg"  },
  { air: 64,  name: "Student Name", detail: "Classroom", image: "/results/air64.jpg"  },
  { air: 65,  name: "Student Name", detail: "Classroom", image: "/results/air65.jpg"  },
];

const RANKS_ROW_3 = [
  { air: 75,  name: "Student Name", detail: "Classroom", image: "/results/air75.jpg"  },
  { air: 81,  name: "Student Name", detail: "Classroom", image: "/results/air81.jpg"  },
  { air: 82,  name: "Student Name", detail: "Classroom", image: "/results/air82.jpg"  },
  { air: 87,  name: "Student Name", detail: "Classroom", image: "/results/air87.jpg"  },
  { air: 91,  name: "Student Name", detail: "Classroom", image: "/results/air91.jpg"  },
  { air: 92,  name: "Student Name", detail: "Classroom", image: "/results/air92.jpg"  },
  { air: 93,  name: "Student Name", detail: "Classroom", image: "/results/air93.jpg"  },
  { air: 96,  name: "Student Name", detail: "Classroom", image: "/results/air96.jpg"  },
  { air: 100, name: "Student Name", detail: "Classroom", image: "/results/air100.jpg" },
];

// =============================================================================
// END OF CONFIG — no need to edit below this line
// =============================================================================

// ─── Types ────────────────────────────────────────────────────────────────────

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
  detail: string;
  image: string;
}

// ─── Fallback placeholder (shown when image file is missing / empty) ──────────

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
      {/* Trigger */}
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ width: 16, height: 16, color: "rgba(255,255,255,0.8)", transition: "transform 0.2s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 bg-[#1A365D] rounded-xl shadow-2xl overflow-hidden border border-white/10" style={{ width: "13rem", zIndex: 50 }}>
          <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", padding: "12px 16px 4px" }}>
            Select Batches
          </p>
          {BATCHES.map((batch) => {
            const checked = selected.includes(batch);
            return (
              <button key={batch} onClick={() => toggle(batch)}
                style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "10px 16px", background: "transparent", border: "none", cursor: "pointer" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "transparent")}
              >
                <span style={{ width: 16, height: 16, borderRadius: 4, border: checked ? "2px solid #FFD700" : "2px solid rgba(255,255,255,0.4)", background: checked ? "#FFD700" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.15s" }}>
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
            <button onClick={() => setSelected([])}
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

// ─── Score Badge ─────────────────────────────────────────────────────────────

const ScoreBadge: React.FC<{ score: string }> = ({ score }) => (
  <div
    style={{ transform: "rotate(-15deg)" }}
    className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white border-2 border-[#1A365D] text-[#1A365D] font-bold rounded-full w-12 h-12 flex items-center justify-center text-[10px] shadow-md text-center leading-tight z-10"
  >
    {score}
  </div>
);

// ─── Top Performer Card ───────────────────────────────────────────────────────

const TopPerformerCard: React.FC<{ performer: TopPerformer }> = ({ performer }) => {
  const { isCenter } = performer;
  return (
    <div className="text-center relative flex flex-col items-center">
      <div className="relative inline-block w-full">
        <ScoreBadge score={performer.score} />
        {performer.image ? (
          <Image
            src={performer.image}
            alt={`AIR ${performer.air} – ${performer.name}`}
            width={200}
            height={220}
            className={`w-full h-auto object-cover ${isCenter ? "scale-110" : ""}`}
            style={{ clipPath: "ellipse(45% 50% at 50% 50%)" }}
          />
        ) : (
          <Placeholder
            className={`w-full ${isCenter ? "scale-110" : ""}`}
            style={{ height: 220, clipPath: "ellipse(45% 50% at 50% 50%)" }}
          />
        )}
      </div>
      <div className={isCenter ? "mt-4" : "mt-2"}>
        <span className="block text-[#1A365D] font-bold text-sm">AIR</span>
        <span className={`block text-[#1A365D] font-black -mt-2 ${isCenter ? "text-7xl" : "text-6xl"}`}>
          {performer.air}
        </span>
        <p className="uppercase font-bold text-[#1A365D] text-xs leading-tight">{performer.name}</p>
        <p className="text-[10px] text-[#1A365D]">
          {performer.courseType}<br />{performer.percentile}
        </p>
      </div>
    </div>
  );
};

// ─── Small Rank Card ──────────────────────────────────────────────────────────

const SmallRankCard: React.FC<{ student: RankStudent; grayscale?: boolean }> = ({
  student,
  grayscale = false,
}) => (
  <div className={`text-center ${grayscale ? "group" : ""}`}>
    <p className="text-[10px] font-black text-[#1A365D] mb-1">AIR {student.air}</p>
    {student.image ? (
      <Image
        src={student.image}
        alt={`AIR ${student.air} – ${student.name}`}
        width={48}
        height={64}
        className={`w-12 h-16 mx-auto rounded-md shadow-sm border border-gray-200 object-cover ${
          grayscale ? "grayscale group-hover:grayscale-0 transition duration-300" : ""
        }`}
      />
    ) : (
      <Placeholder
        className={`w-12 h-16 mx-auto rounded-md shadow-sm border border-gray-200 ${
          grayscale ? "grayscale group-hover:grayscale-0 transition duration-300" : ""
        }`}
      />
    )}
    <p className="text-[8px] font-bold text-[#1A365D] mt-1 leading-tight uppercase truncate">
      {student.name}
    </p>
    <p className="text-[6px] text-gray-700">{student.detail}</p>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const AcademicResultsPoster: React.FC = () => (
  <div
    className="min-h-screen w-full flex flex-col"
    style={{ background: "linear-gradient(180deg, #FFD700 0%, #FFF9C4 100%)", fontFamily: "'Inter', sans-serif" }}
  >
    {/* Header */}
    <HeaderBar />

    {/* Body */}
    <main className="flex-1 flex items-center justify-center">
      <div className="w-full max-w-5xl px-6 md:px-10 pb-10">

        {/* Top Performers */}
        <section className="relative z-10 grid grid-cols-12 gap-4 mb-12">
          <div className="col-span-12 lg:col-span-8 grid grid-cols-3 gap-2 items-end">
            {TOP_PERFORMERS.map((p) => (
              <TopPerformerCard key={p.air} performer={p} />
            ))}
          </div>
          <div className="col-span-12 lg:col-span-4 flex items-center justify-center">
            <div className="bg-white/80 p-6 rounded-3xl border-2 border-[#1A365D] text-center shadow-lg w-full">
              <div className="text-[#1A365D] font-black text-8xl leading-none">{CALLOUT.count}</div>
              <div className="text-[#1A365D] font-bold text-xl tracking-tighter uppercase">{CALLOUT.label}</div>
              <div className="bg-[#1A365D] text-white text-3xl font-black px-4 py-1 my-2 rounded-sm" style={{ transform: "skewX(-10deg)" }}>
                {CALLOUT.highlight}
              </div>
              <div className="text-[#1A365D] font-bold text-sm uppercase">{CALLOUT.sublabel}</div>
              <div className="mt-4 inline-block bg-yellow-300/50 border border-[#1A365D]/30 px-3 py-1 rounded-full text-[10px] font-bold text-[#1A365D]">
                {CALLOUT.badge}
              </div>
            </div>
          </div>
        </section>

        {/* Ranks Grid */}
        <section className="relative z-10">
          <div className="space-y-8">
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-11 gap-x-2 gap-y-6">
              {RANKS_ROW_1.map((s) => <SmallRankCard key={s.air} student={s} grayscale />)}
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-11 gap-x-2 gap-y-6">
              {RANKS_ROW_2.map((s) => <SmallRankCard key={s.air} student={s} />)}
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-9 gap-x-2 gap-y-6 max-w-4xl mx-auto">
              {RANKS_ROW_3.map((s) => <SmallRankCard key={s.air} student={s} />)}
            </div>
          </div>
        </section>

        {/* Footer */}
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

