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
    <div className="sticky top-16 z-40 w-full bg-primary-purple text-white overflow-hidden flex items-center h-[38px] text-[13px] font-medium">
      {/* Label badge */}
      <div className="bg-accent-gold text-royal-navy font-bold text-xs px-4 h-full flex items-center whitespace-nowrap z-10 flex-shrink-0 tracking-wide">
        📢 UPDATES
      </div>

      {/* Scrolling track */}
      <div className="overflow-hidden flex-1 h-full flex items-center">
        <div className="flex items-center whitespace-nowrap animate-ticker hover:[animation-play-state:paused]">
          {doubled.map((text, i) => (
            <span key={i} className="inline-flex items-center gap-2 pr-12 opacity-95">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-gold flex-shrink-0 inline-block" />
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}