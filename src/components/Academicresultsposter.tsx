"use client";

import React, { useState, useRef, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TopPerformer {
  air: number;
  name: string;
  score: string;
  courseType: string;
  percentile: string;
  imageUrl: string;
  isCenter?: boolean;
}

interface RankStudent {
  air: number;
  name: string;
  detail: string;
  imageUrl?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const topPerformers: TopPerformer[] = [
  {
    air: 3,
    name: "Student Name",
    score: "300/300",
    courseType: "Classroom Course",
    percentile: "Overall 100 Percentile",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIKs-X5ZycE-cfQ_S5aQMagEV74YdbZOt-PEc0hZJqPkn5CodFlIpWIBPQ9WI_Uo4uNavMzhruFTSBEC2Q8YgyVZwU0Njbt2cg2kC4iTikrzkgBbyMbpzyHOKCBe6EF-WNnmJCYDLHwHC8ZqyC9y_bHzVxDJMM-eM2468AvDiXdgpuVwIrlfg6Gc8IldewPxia4yXtVLUkjDNoChVNcNa3kjm72MvTi4tYrb0Q0VzffZ2bRCcVC6I_gyJjNWYuwxigKOMoRLU9h4s",
  },
  {
    air: 4,
    name: "Student Name",
    score: "300/300",
    courseType: "Classroom Course",
    percentile: "Overall 100 Percentile",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsxFwyp2vY6wdoVeZrs4doYOJ_sjw9Tk5T4NF-h1N7uVz6dT5ML_SBJLBNMYUGlS1-T2inZdiaUrlnHbFK1aXxIZSa3hwyBPoR8V294_YUlGqZYX7fWM0ouP-6Uysa9XWsvFhTDaYt6KsVdqbQeJMLOp0cfazR8iucadlxByKnJxyplsO6_gCpGB3MamWS5MLiCpZCgzS8sMyUrWSvyC8xJENEzDgBiI5rDjCEU4M6MsZMNY1p2u_c0ykGECZiCADT54xwT1L7rT8",
    isCenter: true,
  },
  {
    air: 5,
    name: "Student Name",
    score: "300/300",
    courseType: "Classroom Course",
    percentile: "Overall 100 Percentile",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHnuNULoHD_o0IrS0MuWHB2mj4xd_9v5g73inkzfi7RQqbzi3g-1LymRpj2K0P2AkNgStvVWu1HRIcGOCvl2eIwUWAehO4G4K9MoGNj2jcm511IsDxd-aucSBzFHT3GRQ3gAAKfbmFV6H4lC62gipJDVQWZPaFZj9tF-zWR7zyUszz6BYDpkd47nQuLg13HB7tLeIJXG27PYtZB1xwBzNwWJD_M5ouyVzYpYMSbLojy2GyW9EMPL7SKfyHWO9-hoQXBdbd0ECg5zM",
  },
];

const ranksRow1: RankStudent[] = [
  11, 12, 17, 18, 20, 22, 23, 26, 31, 32, 33,
].map((air) => ({ air, name: "Student Name", detail: "100 Percentile" }));

const ranksRow2: RankStudent[] = [
  34, 35, 36, 45, 52, 54, 56, 60, 61, 64, 65,
].map((air) => ({ air, name: "Student Name", detail: "Classroom" }));

const ranksRow3: RankStudent[] = [75, 81, 82, 87, 91, 92, 93, 96, 100].map(
  (air) => ({ air, name: "Student Name", detail: "Classroom" })
);

// ─── Batch Dropdown ───────────────────────────────────────────────────────────

const BATCHES = ["2025", "2024", "2023", "2022", "2021"];

const BatchDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>(["2025"]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggle = (batch: string) => {
    setSelected((prev) =>
      prev.includes(batch) ? prev.filter((b) => b !== batch) : [...prev, batch]
    );
  };

  const label =
    selected.length === 0
      ? "Select Batch"
      : selected.length === 1
      ? `BATCH OF ${selected[0]}`
      : `${selected.length} BATCHES`;

  return (
    <div className="relative" ref={ref}>
      {/* Trigger pill */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{ cursor: "pointer" }}
        className="flex items-center gap-2 bg-[#1A365D] text-white rounded-xl px-4 py-2.5 shadow-lg select-none"
      >
        <div className="text-right">
          <p
            style={{
              fontSize: "9px",
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.7)",
              textTransform: "uppercase",
              lineHeight: 1,
              marginBottom: "2px",
              fontWeight: 600,
            }}
          >
            Excellence Journey
          </p>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 900,
              letterSpacing: "0.05em",
              lineHeight: 1,
            }}
          >
            {label}
          </p>
        </div>
        {/* Chevron */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            width: "1rem",
            height: "1rem",
            color: "rgba(255,255,255,0.8)",
            transition: "transform 0.2s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            flexShrink: 0,
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          className="absolute right-0 mt-2 bg-[#1A365D] rounded-xl shadow-2xl overflow-hidden border border-white/10"
          style={{ width: "13rem", zIndex: 50 }}
        >
          <p
            style={{
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              padding: "12px 16px 4px",
            }}
          >
            Select Batches
          </p>
          {BATCHES.map((batch) => {
            const checked = selected.includes(batch);
            return (
              <button
                key={batch}
                onClick={() => toggle(batch)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "10px 16px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(255,255,255,0.1)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background =
                    "transparent")
                }
              >
                {/* Checkbox */}
                <span
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "4px",
                    border: checked
                      ? "2px solid #FFD700"
                      : "2px solid rgba(255,255,255,0.4)",
                    background: checked ? "#FFD700" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.15s",
                  }}
                >
                  {checked && (
                    <svg
                      style={{ width: "10px", height: "10px", color: "#1A365D" }}
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="2 6 5 9 10 3" />
                    </svg>
                  )}
                </span>
                <span
                  style={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: "14px",
                  }}
                >
                  Batch of {batch}
                </span>
              </button>
            );
          })}
          <div
            style={{
              padding: "10px 16px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <button
              onClick={() => setSelected([])}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "rgba(255,255,255,0.5)",
                fontSize: "10px",
                padding: 0,
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.color =
                  "rgba(255,255,255,0.85)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.color =
                  "rgba(255,255,255,0.5)")
              }
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
    {/* School logo */}
    <div
      style={{
        background: "#111111",
        padding: "6px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        display: "inline-flex",
      }}
    >
      <img
        src="https://placehold.co/52x52/111111/ffffff?text=SVPS"
        alt="Sree Vignan Public School - Chodavaram"
        style={{ width: 52, height: 52, objectFit: "contain" }}
      />
    </div>

    {/* Batch selector */}
    <BatchDropdown />
  </div>
);

// ─── Sub-components ───────────────────────────────────────────────────────────

const ScoreBadge: React.FC<{ score: string }> = ({ score }) => (
  <div
    style={{ transform: "rotate(-15deg)" }}
    className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white border-2 border-[#1A365D] text-[#1A365D] font-bold rounded-full w-12 h-12 flex items-center justify-center text-[10px] shadow-md text-center leading-tight z-10"
  >
    {score}
  </div>
);

const TopPerformerCard: React.FC<{ performer: TopPerformer }> = ({
  performer,
}) => {
  const isCenter = performer.isCenter;
  return (
    <div className="text-center relative flex flex-col items-center">
      <div className="relative inline-block">
        <ScoreBadge score={performer.score} />
        <img
          src={performer.imageUrl}
          alt={`AIR ${performer.air}`}
          className={`w-full h-auto object-cover ${isCenter ? "scale-110" : ""}`}
          style={{ clipPath: "ellipse(45% 50% at 50% 50%)" }}
        />
      </div>
      <div className={isCenter ? "mt-4" : "mt-2"}>
        <span className="block text-[#1A365D] font-bold text-sm">AIR</span>
        <span
          className={`block text-[#1A365D] font-black -mt-2 ${
            isCenter ? "text-7xl" : "text-6xl"
          }`}
        >
          {performer.air}
        </span>
        <p className="uppercase font-bold text-[#1A365D] text-xs leading-tight">
          {performer.name}
        </p>
        <p className="text-[10px] text-[#1A365D]">
          {performer.courseType}
          <br />
          {performer.percentile}
        </p>
      </div>
    </div>
  );
};

const SmallRankCard: React.FC<{ student: RankStudent; grayscale?: boolean }> =
  ({ student, grayscale = false }) => (
    <div className={`text-center ${grayscale ? "group" : ""}`}>
      <p className="text-[10px] font-black text-[#1A365D] mb-1">
        AIR {student.air}
      </p>
      <img
        src={student.imageUrl || "https://placehold.co/60x80"}
        alt={`AIR ${student.air}`}
        className={`w-12 h-16 mx-auto rounded-md shadow-sm border border-gray-200 object-cover ${
          grayscale
            ? "grayscale group-hover:grayscale-0 transition duration-300"
            : ""
        }`}
      />
      <p className="text-[8px] font-bold text-[#1A365D] mt-1 leading-tight uppercase truncate">
        {student.name}
      </p>
      <p className="text-[6px] text-gray-700">{student.detail}</p>
    </div>
  );

// ─── Main Component ───────────────────────────────────────────────────────────

const AcademicResultsPoster: React.FC = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{
        background: "linear-gradient(180deg, #FFD700 0%, #FFF9C4 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ── Header ── */}
      <HeaderBar />

      {/* ── Body ── */}
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-5xl px-6 md:px-10 pb-10">

          {/* ── Top Performers ── */}
          <section className="relative z-10 grid grid-cols-12 gap-4 mb-12">
            <div className="col-span-12 lg:col-span-8 grid grid-cols-3 gap-2 items-end">
              {topPerformers.map((performer) => (
                <TopPerformerCard key={performer.air} performer={performer} />
              ))}
            </div>
            <div className="col-span-12 lg:col-span-4 flex items-center justify-center">
              <div className="bg-white/80 p-6 rounded-3xl border-2 border-[#1A365D] text-center shadow-lg w-full">
                <div className="text-[#1A365D] font-black text-8xl leading-none">
                  34
                </div>
                <div className="text-[#1A365D] font-bold text-xl tracking-tighter uppercase">
                  Students In
                </div>
                <div
                  className="bg-[#1A365D] text-white text-3xl font-black px-4 py-1 my-2 rounded-sm"
                  style={{ transform: "skewX(-10deg)" }}
                >
                  TOP 100
                </div>
                <div className="text-[#1A365D] font-bold text-sm uppercase">
                  All India Ranks
                </div>
                <div className="mt-4 inline-block bg-yellow-300/50 border border-[#1A365D]/30 px-3 py-1 rounded-full text-[10px] font-bold text-[#1A365D]">
                  Highest among all Institutes
                </div>
              </div>
            </div>
          </section>

          {/* ── Ranks Grid ── */}
          <section className="relative z-10">
            <div className="space-y-8">
              <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-11 gap-x-2 gap-y-6">
                {ranksRow1.map((s) => (
                  <SmallRankCard key={s.air} student={s} grayscale />
                ))}
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-11 gap-x-2 gap-y-6">
                {ranksRow2.map((s) => (
                  <SmallRankCard key={s.air} student={s} />
                ))}
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-9 gap-x-2 gap-y-6 max-w-4xl mx-auto">
                {ranksRow3.map((s) => (
                  <SmallRankCard key={s.air} student={s} />
                ))}
              </div>
            </div>
          </section>

          {/* ── Footer ── */}
          <footer className="mt-12 flex justify-between items-end border-t border-[#1A365D]/10 pt-4">
            <div className="text-[8px] text-[#1A365D]/60 font-medium">
              As per results compiled up to April 2024. All rights reserved.
            </div>
            <div className="bg-[#1A365D] text-white px-4 py-1 rounded text-xs font-bold uppercase tracking-widest">
              Excellence in Education
            </div>
          </footer>

        </div>
      </main>
    </div>
  );
};

export default AcademicResultsPoster;