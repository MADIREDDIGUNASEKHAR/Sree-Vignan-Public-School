'use client';

const announcements = [
  "🎉 Admissions Open for 2026-27 — Enroll your child today!",
  "📅 Annual Day Celebration on April 15th — All parents are invited",
  "🏆 Our students won 1st place at the District Science Fair",
  "📚 New Computer Lab inaugurated — State-of-the-art facilities",
  "🌟 Results: 100% pass rate in Class 10 Board Exams",
];

export default function AnnouncementTicker() {
  const doubled = [...announcements, ...announcements];

  return (
    <div className="fixed top-[72px] left-0 w-full z-[49] bg-[#9c0b0b] text-white flex items-center h-[36px] overflow-hidden leading-none">

      {/* 🔥 LABEL (LOCKED) */}
      <div className="bg-[#fffbcc] text-[#9c0b0b] font-bold text-[10px] sm:text-xs px-3 sm:px-4 h-full flex items-center whitespace-nowrap tracking-wide flex-shrink-0 z-10">
        📢 UPDATES
      </div>

      {/* 🔥 DIVIDER (premium look) */}
      <div className="w-[1px] h-4 sm:h-5 bg-white/30 mx-2 flex-shrink-0" />

      {/* 🔥 SCROLL CONTAINER */}
      <div className="overflow-hidden flex-1 h-full flex items-center">

        <div className="flex items-center whitespace-nowrap animate-ticker hover:[animation-play-state:paused]">

          {doubled.map((text, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 pr-8 sm:pr-12 opacity-95"
            >
              {/* DOT */}
              <span className="w-1.5 h-1.5 rounded-full bg-[#fffbcc] flex-shrink-0" />

              {/* TEXT */}
              <span className="whitespace-nowrap">
                {text}
              </span>
            </span>
          ))}

        </div>

      </div>
    </div>
  );
}