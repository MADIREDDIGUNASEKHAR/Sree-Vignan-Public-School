'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const stats = [
  { id: 'students', num: 1000, suffix: '+', label: 'Students Enrolled',  sub: 'Growing family across all grades',    accent: '#9c0b0b', dur: 2000 },
  { id: 'pass',     num: 100,  suffix: '%', label: 'Board Pass Rate',     sub: 'Class 10 & 12 excellence',            accent: '#b5921e', dur: 1800 },
  { id: 'teachers', num: 50,   suffix: '+', label: 'Dedicated Teachers',  sub: 'Committed to every child',            accent: '#9c0b0b', dur: 1600 },
  { id: 'years',    num: 34,   suffix: '+', label: 'Years of Excellence', sub: 'Serving Chodavaram since 1992',       accent: '#1C3A47', dur: 1400 },
];

function StatCard({
  stat, visible, index,
}: {
  stat: typeof stats[0]; visible: boolean; index: number;
}) {
  const count = useCountUp(stat.num, stat.dur, visible);
  return (
    <div
      className="relative rounded-md p-5 overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.88)',
        border: '1px solid rgba(156,11,11,0.15)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: '0 2px 12px rgba(156,11,11,0.07)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.65s ease ${index * 120}ms, transform 0.65s ease ${index * 120}ms`,
      }}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-md" style={{ background: stat.accent }} />
      <p className="font-black leading-none mb-1" style={{ fontSize: 32, letterSpacing: '-0.02em', color: stat.accent }}>
        {count}{stat.suffix}
      </p>
      <p className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-1">{stat.label}</p>
      <p className="text-xs text-gray-400 leading-snug">{stat.sub}</p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative overflow-hidden section-padding"
      style={{ background: '#fffbcc' }}
    >
      {/* ── Watercolor wash background ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="wc-lg"><feGaussianBlur stdDeviation="26"/></filter>
          <filter id="wc-md"><feGaussianBlur stdDeviation="14"/></filter>
          <filter id="wc-sm"><feGaussianBlur stdDeviation="8"/></filter>
        </defs>
        <ellipse cx="120" cy="120" rx="260" ry="180" fill="#c4b5fd" opacity="0.18" filter="url(#wc-lg)"/>
        <ellipse cx="200" cy="460" rx="280" ry="150" fill="#fde68a" opacity="0.20" filter="url(#wc-lg)"/>
        <ellipse cx="720" cy="560" rx="380" ry="120" fill="#ddd6fe" opacity="0.14" filter="url(#wc-lg)"/>
        <ellipse cx="1340" cy="100" rx="220" ry="150" fill="#fef9c3" opacity="0.22" filter="url(#wc-lg)"/>
        <ellipse cx="1260" cy="500" rx="200" ry="140" fill="#ede9fe" opacity="0.18" filter="url(#wc-lg)"/>
        <path d="M 40 240 Q 200 200 380 240 Q 520 275 640 225" stroke="#7C3AED" strokeWidth="5" fill="none" opacity="0.07" strokeLinecap="round" filter="url(#wc-sm)"/>
        <path d="M 40 500 Q 240 465 420 510 Q 560 545 680 500" stroke="#D4AF37" strokeWidth="6" fill="none" opacity="0.09" strokeLinecap="round" filter="url(#wc-sm)"/>
        <circle cx="440" cy="70" r="22" fill="#D4AF37" opacity="0.12" filter="url(#wc-md)"/>
        <circle cx="580" cy="540" r="28" fill="#7C3AED" opacity="0.10" filter="url(#wc-md)"/>
        <circle cx="70" cy="560" r="18" fill="#9333EA" opacity="0.13" filter="url(#wc-md)"/>
        <circle cx="500" cy="320" r="12" fill="#D4AF37" opacity="0.08" filter="url(#wc-md)"/>
      </svg>

      {/* ── School doodle illustration ── */}
      <svg
        className="absolute pointer-events-none"
        style={{ left: 0, top: 0, height: '100%', width: '50%', opacity: 0.93 }}
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Blackboard */}
        <rect x="60" y="60" width="240" height="160" rx="8" fill="#1C3A47" stroke="#0f2530" strokeWidth="2"/>
        <rect x="70" y="70" width="220" height="140" rx="5" fill="#1e4a5c"/>
        <line x1="95" y1="108" x2="215" y2="108" stroke="white" strokeWidth="1.5" opacity="0.7" strokeLinecap="round"/>
        <line x1="95" y1="126" x2="255" y2="126" stroke="white" strokeWidth="1.5" opacity="0.5" strokeLinecap="round"/>
        <line x1="95" y1="144" x2="195" y2="144" stroke="white" strokeWidth="1.5" opacity="0.5" strokeLinecap="round"/>
        <text x="95" y="176" fontFamily="serif" fontSize="20" fill="white" opacity="0.85" fontWeight="bold">E = mc²</text>
        {/* Board legs */}
        <line x1="120" y1="220" x2="98" y2="300" stroke="#8B6914" strokeWidth="4" strokeLinecap="round"/>
        <line x1="240" y1="220" x2="262" y2="300" stroke="#8B6914" strokeWidth="4" strokeLinecap="round"/>
        <line x1="92" y1="300" x2="268" y2="300" stroke="#8B6914" strokeWidth="3" strokeLinecap="round"/>

        {/* Books stack */}
        <rect x="32" y="370" width="110" height="20" rx="3" fill="#7C3AED" stroke="#5b21b6" strokeWidth="1"/>
        <rect x="40" y="350" width="96" height="20" rx="3" fill="#D4AF37" stroke="#a16207" strokeWidth="1"/>
        <rect x="30" y="330" width="116" height="20" rx="3" fill="#1C3A47" stroke="#0f2530" strokeWidth="1"/>
        <rect x="44" y="310" width="90" height="20" rx="3" fill="#9333EA" stroke="#6b21a8" strokeWidth="1"/>
        <line x1="40" y1="310" x2="40" y2="390" stroke="white" strokeWidth="1" opacity="0.25"/>

        {/* Pencil */}
        <g transform="translate(188, 320) rotate(-22)">
          <rect x="0" y="0" width="18" height="85" rx="2" fill="#F59E0B"/>
          <rect x="0" y="0" width="18" height="13" rx="2" fill="#d1d5db"/>
          <rect x="2" y="13" width="14" height="7" fill="#f87171"/>
          <polygon points="0,85 18,85 9,106" fill="#fcd9b0"/>
          <polygon points="4,95 14,95 9,106" fill="#1a1a1a" opacity="0.8"/>
        </g>

        {/* Ruler */}
        <g transform="translate(260, 340) rotate(10)">
          <rect x="0" y="0" width="130" height="24" rx="3" fill="#fde68a" stroke="#D4AF37" strokeWidth="1.5"/>
          {[10,22,34,46,58,70,82,94,106,118].map((x, i) => (
            <line key={x} x1={x} y1="0" x2={x} y2={i === 4 ? 15 : 9} stroke="#D4AF37" strokeWidth="1"/>
          ))}
        </g>

        {/* Graduation cap */}
        <g transform="translate(320, 50)">
          <ellipse cx="65" cy="46" rx="50" ry="11" fill="#1C3A47"/>
          <rect x="32" y="12" width="66" height="34" rx="4" fill="#1C3A47"/>
          <rect x="38" y="5" width="54" height="9" rx="2" fill="#1a1a2e"/>
          <line x1="65" y1="46" x2="114" y2="37" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="117" cy="36" r="5.5" fill="#D4AF37"/>
          <line x1="117" y1="41" x2="121" y2="63" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
          <line x1="121" y1="63" x2="114" y2="74" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
          <line x1="121" y1="63" x2="128" y2="74" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
        </g>

        {/* Apple */}
        <g transform="translate(310, 180)">
          <ellipse cx="28" cy="34" rx="23" ry="25" fill="#ef4444"/>
          <ellipse cx="18" cy="26" rx="10" ry="12" fill="#f87171" opacity="0.45"/>
          <path d="M 28 9 Q 33 2 40 7" stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <ellipse cx="40" cy="5" rx="9" ry="5.5" fill="#22c55e" transform="rotate(-20 40 5)"/>
        </g>

        {/* Compass */}
        <g transform="translate(360, 235)">
          <line x1="20" y1="0" x2="0" y2="65" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"/>
          <line x1="20" y1="0" x2="40" y2="65" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="20" cy="0" r="4" fill="#9ca3af"/>
          <line x1="4" y1="24" x2="36" y2="24" stroke="#d1d5db" strokeWidth="1.5"/>
          <circle cx="0" cy="65" r="3" fill="#374151"/>
          <circle cx="40" cy="65" r="3" fill="#374151"/>
        </g>

        {/* Sparkles */}
        <text x="380" y="145" fontSize="14" fill="#D4AF37" opacity="0.6">✦</text>
        <text x="58"  y="265" fontSize="10" fill="#7C3AED" opacity="0.5">✦</text>
        <text x="285" y="72"  fontSize="12" fill="#D4AF37" opacity="0.5">✦</text>
        <text x="170" y="480" fontSize="16" fill="#7C3AED" opacity="0.4">✦</text>
        <text x="440" y="430" fontSize="10" fill="#D4AF37" opacity="0.5">✦</text>

        {/* Ground wave */}
        <path d="M 0 500 Q 100 478 200 500 Q 300 522 400 498 Q 480 480 600 505 L 600 600 L 0 600 Z" fill="#fde68a" opacity="0.22"/>
      </svg>

      {/* ── Content ── */}
      <div className="container-safe relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[440px]">

          {/* Left spacer — doodles fill this space */}
          <div className="hidden lg:block" />

          {/* Right — stats */}
          <div ref={ref} className="flex flex-col gap-5">
            <div>
              {/* Badge — matches header pill style */}
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
                style={{
                  background: '#9c0b0b',
                  color: '#fffbcc',
                  border: '1px solid rgba(156,11,11,0.3)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#fffbcc] inline-block" />
                Our Impact in Numbers
              </span>

              {/* Heading — mirrors header's school name style */}
              <h2 className="text-heading-lg font-bold text-gray-900 mb-2">
                Sree Vignan{' '}
                <span style={{ color: '#9c0b0b' }}>Over the Years</span>
              </h2>

              {/* Divider line — echoes header's top strip gradient */}
              <div
                className="h-[3px] w-16 rounded-full mb-3"
                style={{ background: 'linear-gradient(to right, #b91c1c, #ca8a04, #16a34a)' }}
              />

              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                A decade of nurturing young minds in Chodavaram — with results that speak louder than words.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <StatCard key={stat.id} stat={stat} visible={visible} index={i} />
              ))}
            </div>

            {/* CTA — matches header's "APPLY NOW" button exactly */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 w-fit px-6 py-2 rounded-md text-white text-xs font-bold tracking-widest uppercase hover:scale-105 transition"
              style={{ background: '#9c0b0b' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#fffbcc] animate-pulse inline-block" />
              Enrolling Now — 2026-27
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}