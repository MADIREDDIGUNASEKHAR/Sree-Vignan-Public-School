'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const programs = [
  {
    id: 'nursery',
    name: 'Nursery',
    tag: 'Ages 2–5',
    tagColor: '#EC4899',
    description: 'A joyful first step into learning — play-based activities, rhymes, drawing, and social skills that build a happy foundation.',
    accent: '#EC4899',
    light: '#FDF2F8',
    bg: '#FFF0F9',
    cta: '/admission',
    doodle: (
      <svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        {/* Sun */}
        <circle cx="150" cy="40" r="22" fill="#FDE68A"/>
        {[0,45,90,135,180,225,270,315].map((a,i) => (
          <line key={i}
            x1={150 + 26*Math.cos(a*Math.PI/180)} y1={40 + 26*Math.sin(a*Math.PI/180)}
            x2={150 + 34*Math.cos(a*Math.PI/180)} y2={40 + 34*Math.sin(a*Math.PI/180)}
            stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round"/>
        ))}
        {/* Smiley face on sun */}
        <circle cx="144" cy="37" r="2.5" fill="#92400E"/>
        <circle cx="156" cy="37" r="2.5" fill="#92400E"/>
        <path d="M144,43 Q150,48 156,43" stroke="#92400E" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

        {/* ABC blocks */}
        <rect x="20" y="120" width="38" height="38" rx="6" fill="#7C3AED" stroke="#5b21b6" strokeWidth="1.5"/>
        <text x="39" y="145" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white" fontFamily="serif">A</text>
        <rect x="62" y="128" width="38" height="38" rx="6" fill="#EC4899" stroke="#be185d" strokeWidth="1.5"/>
        <text x="81" y="153" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white" fontFamily="serif">B</text>
        <rect x="104" y="120" width="38" height="38" rx="6" fill="#D4AF37" stroke="#a16207" strokeWidth="1.5"/>
        <text x="123" y="145" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white" fontFamily="serif">C</text>

        {/* Crayon */}
        <g transform="translate(148, 110) rotate(30)">
          <rect x="0" y="0" width="14" height="55" rx="2" fill="#ef4444"/>
          <rect x="0" y="0" width="14" height="10" rx="2" fill="#d1d5db"/>
          <polygon points="0,55 14,55 7,70" fill="#fcd9b0"/>
          <polygon points="3,62 11,62 7,70" fill="#1a1a1a" opacity="0.7"/>
        </g>

        {/* Rainbow arc */}
        <path d="M30,110 Q80,60 140,108" stroke="#ef4444" strokeWidth="3" fill="none" opacity="0.6"/>
        <path d="M35,115 Q80,68 138,114" stroke="#f97316" strokeWidth="3" fill="none" opacity="0.6"/>
        <path d="M40,120 Q80,76 136,120" stroke="#eab308" strokeWidth="3" fill="none" opacity="0.6"/>

        {/* Stars */}
        <text x="165" y="90" fontSize="16" fill="#D4AF37" opacity="0.7">✦</text>
        <text x="18" y="80" fontSize="12" fill="#EC4899" opacity="0.6">✦</text>
        <text x="90" y="30" fontSize="10" fill="#7C3AED" opacity="0.5">✦</text>
      </svg>
    ),
  },
  {
    id: 'primary',
    name: 'Primary Education',
    tag: 'Classes 1–5',
    tagColor: '#7C3AED',
    description: 'Strong foundations in literacy, numeracy, science, and values — delivered through engaging lessons and hands-on projects.',
    accent: '#7C3AED',
    light: '#EDE9FE',
    bg: '#F5F3FF',
    cta: '/academics',
    doodle: (
      <svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        {/* Open book */}
        <path d="M30,60 Q100,50 100,140 Q100,50 170,60 L170,160 Q100,150 100,160 Q100,150 30,160 Z"
          fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5"/>
        <line x1="100" y1="55" x2="100" y2="158" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="4,3"/>
        {/* Lines on pages */}
        <line x1="42" y1="85" x2="92" y2="82" stroke="#7C3AED" strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
        <line x1="42" y1="95" x2="92" y2="92" stroke="#7C3AED" strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
        <line x1="42" y1="105" x2="88" y2="103" stroke="#7C3AED" strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
        <line x1="42" y1="115" x2="92" y2="113" stroke="#7C3AED" strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
        <line x1="108" y1="82" x2="158" y2="85" stroke="#7C3AED" strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
        <line x1="108" y1="92" x2="158" y2="95" stroke="#7C3AED" strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
        <line x1="112" y1="103" x2="158" y2="105" stroke="#7C3AED" strokeWidth="1" opacity="0.4" strokeLinecap="round"/>

        {/* Pencil */}
        <g transform="translate(148, 130) rotate(-25)">
          <rect x="0" y="0" width="13" height="50" rx="2" fill="#F59E0B"/>
          <rect x="0" y="0" width="13" height="9" rx="2" fill="#d1d5db"/>
          <rect x="1.5" y="9" width="10" height="6" fill="#f87171"/>
          <polygon points="0,50 13,50 6.5,64" fill="#fcd9b0"/>
          <polygon points="3,57 10,57 6.5,64" fill="#1a1a1a" opacity="0.8"/>
        </g>

        {/* Ruler */}
        <g transform="translate(18, 150) rotate(-8)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#fde68a" stroke="#D4AF37" strokeWidth="1.2"/>
          {[8,18,28,38,48,58,68,78].map((x,i) => (
            <line key={x} x1={x} y1="0" x2={x} y2={i===4?12:7} stroke="#D4AF37" strokeWidth="1"/>
          ))}
        </g>

        <text x="16" y="55" fontSize="14" fill="#D4AF37" opacity="0.6">✦</text>
        <text x="170" y="170" fontSize="11" fill="#7C3AED" opacity="0.5">✦</text>
      </svg>
    ),
  },
  {
    id: 'secondary',
    name: 'Secondary Education',
    tag: 'Classes 6–10',
    tagColor: '#0D9488',
    description: 'Comprehensive curriculum covering science, mathematics, social studies, and languages — preparing students for board examinations.',
    accent: '#0D9488',
    light: '#CCFBF1',
    bg: '#F0FDFA',
    cta: '/academics',
    doodle: (
      <svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        {/* Beaker / flask */}
        <path d="M80,40 L80,100 L50,155 Q46,165 56,168 L144,168 Q154,165 150,155 L120,100 L120,40 Z"
          fill="#CCFBF1" stroke="#0D9488" strokeWidth="2"/>
        <path d="M80,40 L120,40" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Liquid */}
        <path d="M58,145 L60,138 L140,138 L142,145 Q148,163 144,167 L56,167 Q52,163 58,145 Z"
          fill="#0D9488" opacity="0.25"/>
        {/* Bubbles */}
        <circle cx="85" cy="148" r="5" fill="#0D9488" opacity="0.4"/>
        <circle cx="105" cy="142" r="4" fill="#0D9488" opacity="0.3"/>
        <circle cx="120" cy="150" r="6" fill="#0D9488" opacity="0.35"/>
        {/* Bubbles rising */}
        <circle cx="92" cy="118" r="3" fill="#0D9488" opacity="0.25"/>
        <circle cx="110" cy="108" r="4" fill="#0D9488" opacity="0.2"/>

        {/* Math symbols floating */}
        <text x="148" y="60" fontSize="22" fill="#7C3AED" opacity="0.5" fontWeight="bold">∑</text>
        <text x="20" y="75" fontSize="18" fill="#D4AF37" opacity="0.55" fontWeight="bold">π</text>
        <text x="155" y="120" fontSize="16" fill="#0D9488" opacity="0.45" fontWeight="bold">∫</text>
        <text x="18" y="140" fontSize="16" fill="#EC4899" opacity="0.45" fontWeight="bold">Δ</text>

        {/* Atom rings */}
        <ellipse cx="155" cy="160" rx="24" ry="12" fill="none" stroke="#0D9488" strokeWidth="1.2" opacity="0.4"/>
        <ellipse cx="155" cy="160" rx="24" ry="12" fill="none" stroke="#0D9488" strokeWidth="1.2" opacity="0.4" transform="rotate(60 155 160)"/>
        <ellipse cx="155" cy="160" rx="24" ry="12" fill="none" stroke="#0D9488" strokeWidth="1.2" opacity="0.4" transform="rotate(120 155 160)"/>
        <circle cx="155" cy="160" r="4" fill="#0D9488" opacity="0.5"/>
      </svg>
    ),
  },
  {
    id: 'iit',
    name: 'IIT Foundation',
    tag: 'Classes 8–10',
    tagColor: '#D4AF37',
    description: 'Rigorous coaching in Physics, Chemistry, Mathematics, and logical reasoning — building the analytical edge for JEE & NEET success.',
    accent: '#D4AF37',
    light: '#FEF9C3',
    bg: '#FFFBEB',
    cta: '/academics',
    doodle: (
      <svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        {/* Rocket */}
        <g transform="translate(90,20) rotate(15)">
          <path d="M20,0 Q36,20 36,55 L28,70 L12,70 L4,55 Q4,20 20,0Z"
            fill="#1C3A47" stroke="#0f2530" strokeWidth="1.5"/>
          {/* Window */}
          <circle cx="20" cy="30" r="9" fill="#93C5FD" stroke="white" strokeWidth="1.5"/>
          {/* Fins */}
          <path d="M4,55 L-8,72 L12,65Z" fill="#D4AF37"/>
          <path d="M36,55 L48,72 L28,65Z" fill="#D4AF37"/>
          {/* Fire */}
          <path d="M12,70 Q20,88 28,70" fill="#F59E0B" opacity="0.9"/>
          <path d="M14,70 Q20,82 26,70" fill="#FDE68A" opacity="0.9"/>
        </g>

        {/* Graduation cap */}
        <g transform="translate(18,110)">
          <ellipse cx="42" cy="32" rx="38" ry="9" fill="#1C3A47"/>
          <rect x="18" y="10" width="48" height="22" rx="4" fill="#1C3A47"/>
          <rect x="24" y="4" width="36" height="8" rx="2" fill="#0f2530"/>
          <line x1="42" y1="32" x2="80" y2="24" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="82" cy="23" r="5" fill="#D4AF37"/>
          <line x1="82" y1="28" x2="86" y2="48" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
          <line x1="86" y1="48" x2="80" y2="56" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
          <line x1="86" y1="48" x2="92" y2="56" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
        </g>

        {/* Trophy */}
        <g transform="translate(128, 115)">
          <path d="M18,0 L18,22 Q18,36 26,38 Q34,36 34,22 L34,0 Z" fill="#fde68a" stroke="#D4AF37" strokeWidth="1.5"/>
          <path d="M18,8 Q10,8 10,16 Q10,26 18,26" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M34,8 Q42,8 42,16 Q42,26 34,26" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="26" y1="38" x2="26" y2="46" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
          <line x1="19" y1="46" x2="33" y2="46" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
        </g>

        {/* Stars trail from rocket */}
        <circle cx="115" cy="75" r="3" fill="#D4AF37" opacity="0.6"/>
        <circle cx="122" cy="88" r="2" fill="#D4AF37" opacity="0.4"/>
        <circle cx="128" cy="100" r="2.5" fill="#D4AF37" opacity="0.5"/>

        <text x="15" y="108" fontSize="13" fill="#D4AF37" opacity="0.5">✦</text>
        <text x="168" y="80" fontSize="10" fill="#7C3AED" opacity="0.4">✦</text>
        <text x="20" y="185" fontSize="14" fill="#EC4899" opacity="0.4">✦</text>
      </svg>
    ),
  },
];

export default function ProgramsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'right' ? 380 : -380, behavior: 'smooth' });
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#fdf6e8', paddingTop: '80px', paddingBottom: '80px' }}
    >
      {/* Watercolor wash background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="prog-lg2"><feGaussianBlur stdDeviation="30"/></filter>
          <filter id="prog-md2"><feGaussianBlur stdDeviation="14"/></filter>
          <filter id="prog-sm2"><feGaussianBlur stdDeviation="7"/></filter>
        </defs>
        <ellipse cx="80"   cy="80"  rx="240" ry="170" fill="#c4b5fd" opacity="0.15" filter="url(#prog-lg2)"/>
        <ellipse cx="1380" cy="100" rx="220" ry="150" fill="#fde68a" opacity="0.16" filter="url(#prog-lg2)"/>
        <ellipse cx="700"  cy="650" rx="400" ry="110" fill="#ddd6fe" opacity="0.12" filter="url(#prog-lg2)"/>
        <ellipse cx="180"  cy="620" rx="220" ry="130" fill="#fce7f3" opacity="0.14" filter="url(#prog-lg2)"/>
        <ellipse cx="1260" cy="600" rx="190" ry="140" fill="#ccfbf1" opacity="0.13" filter="url(#prog-lg2)"/>
        <path d="M 60 380 Q 260 340 480 380 Q 660 415 840 370" stroke="#7C3AED" strokeWidth="5" fill="none" opacity="0.06" strokeLinecap="round" filter="url(#prog-sm2)"/>
        <path d="M 600 620 Q 820 585 1060 620 Q 1240 648 1400 610" stroke="#D4AF37" strokeWidth="5" fill="none" opacity="0.07" strokeLinecap="round" filter="url(#prog-sm2)"/>
        <circle cx="460" cy="60"  r="20" fill="#D4AF37" opacity="0.10" filter="url(#prog-md2)"/>
        <circle cx="960" cy="50"  r="16" fill="#7C3AED" opacity="0.09" filter="url(#prog-md2)"/>
        <circle cx="80"  cy="650" r="18" fill="#EC4899" opacity="0.10" filter="url(#prog-md2)"/>
      </svg>

      <div className="relative z-10">

        {/* Header */}
        <div className="text-center mb-12 px-6">
          <span
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
            style={{ background: 'rgba(255,255,255,0.85)', border: '1px solid #d8c4f0', color: '#6b21a8' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-purple inline-block" />
            What We Offer
          </span>
          <h2 className="text-heading-lg text-gray-900 mb-4">
            Our <span className="text-primary-purple">Programs</span>
          </h2>
          <p className="text-subheading text-gray-500 max-w-xl mx-auto">
            From a child's very first steps into learning to competitive exam excellence — we have a program for every stage
          </p>
        </div>

        {/* Scroll controls */}
        <div className="flex justify-end gap-2 px-6 md:px-12 mb-6">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
            style={{
              background: canScrollLeft ? '#7C3AED' : 'rgba(255,255,255,0.8)',
              color: canScrollLeft ? 'white' : '#9ca3af',
              border: '1px solid rgba(124,58,237,0.2)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
            style={{
              background: canScrollRight ? '#7C3AED' : 'rgba(255,255,255,0.8)',
              color: canScrollRight ? 'white' : '#9ca3af',
              border: '1px solid rgba(124,58,237,0.2)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Scrollable track */}
        <div
          ref={(el) => {
            (scrollRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
            if (el) { el.addEventListener('scroll', checkScroll); checkScroll(); }
          }}
          className="flex gap-5 overflow-x-auto pb-6 px-6 md:px-12"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <style>{`.programs-scroll::-webkit-scrollbar { display: none; }`}</style>

          {programs.map((program, i) => (
            <div
              key={program.id}
              ref={i === 0 ? ref : undefined}
              className="flex-shrink-0 rounded-3xl overflow-hidden flex flex-col group cursor-pointer"
              style={{
                width: 320,
                background: program.bg,
                border: `1.5px solid ${program.accent}22`,
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.96)',
                transition: `opacity 0.65s ease ${i * 130}ms, transform 0.65s ease ${i * 130}ms`,
              }}
            >
              {/* Doodle illustration zone */}
              <div
                className="relative flex items-center justify-center overflow-hidden"
                style={{
                  height: 200,
                  background: `radial-gradient(circle at 60% 40%, ${program.light} 0%, ${program.bg} 70%)`,
                  borderBottom: `1.5px dashed ${program.accent}30`,
                }}
              >
                {/* Floating sparkles */}
                <div
                  className="absolute top-4 left-4 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
                  style={{ background: program.light, color: program.accent, border: `1.5px solid ${program.accent}40` }}
                >
                  {i + 1}
                </div>

                {/* Big doodle centered */}
                <div className="transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                  {program.doodle}
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-6 flex flex-col flex-1">
                {/* Tag */}
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 w-fit"
                  style={{ background: `${program.tagColor}18`, color: program.tagColor }}
                >
                  {program.tag}
                </span>

                <h3
                  className="font-black text-gray-900 mb-3"
                  style={{ fontSize: 20, lineHeight: 1.25 }}
                >
                  {program.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {program.description}
                </p>

                <Link
                  href={program.cta}
                  className="inline-flex items-center gap-2 mt-5 text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 w-fit group-hover:gap-3"
                  style={{
                    background: program.accent,
                    color: 'white',
                    boxShadow: `0 4px 14px ${program.accent}44`,
                  }}
                >
                  Explore Program
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}

          {/* End spacer */}
          <div className="flex-shrink-0 w-6" />
        </div>

        {/* Scroll dots indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {programs.map((p, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{ width: 8, height: 8, background: p.accent, opacity: 0.3 }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}