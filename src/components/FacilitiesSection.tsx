'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const facilities = [
  {
    id: 1,
    name: 'Smart Classrooms',
    tag: 'Academics',
    description: 'Interactive boards and tech-enabled digital learning tools for every grade level.',
    image: '/gallery/image1.jpg',
    accent: '#e67e22',
    light: '#fdebd0',
    tagText: '#c0580a',
    titleColor: '#1a3a5c',
    stat: '14 Classrooms',
  },
  {
    id: 2,
    name: 'Library',
    tag: 'Resources',
    description: '5000+ books and digital resources designed to spark curiosity in every student.',
    image: '/gallery/image2.jpg',
    accent: '#f39c12',
    light: '#fff4dc',
    tagText: '#a85a0a',
    titleColor: '#1a3a5c',
    stat: '5000+ Books',
  },
  {
    id: 3,
    name: 'Playground',
    tag: 'Sports',
    description: 'Cricket, football, kabaddi, and athletics — nurturing fitness and team spirit.',
    image: '/gallery/image3.jpg',
    accent: '#1C3A47',
    light: '#e7ecef',
    tagText: '#1a3a5c',
    titleColor: '#1a3a5c',
    stat: '2 Acre Ground',
  },
  {
    id: 4,
    name: 'Computer Lab',
    tag: 'Digital',
    description: 'Fully equipped with modern hardware, software, and high-speed internet access.',
    image: '/gallery/image4.jpg',
    accent: '#e67e22',
    light: '#fdebd0',
    tagText: '#c0580a',
    titleColor: '#1a3a5c',
    stat: '40 Computers',
  },
  {
    id: 5,
    name: 'Safe Campus',
    tag: 'Safety',
    description: 'CCTV surveillance and trained security personnel protecting your child 24/7.',
    image: '/gallery/image5.jpg',
    accent: '#1C3A47',
    light: '#e7ecef',
    tagText: '#1a3a5c',
    titleColor: '#1a3a5c',
    stat: '24/7 Security',
  },
  {
    id: 6,
    name: 'Cafeteria',
    tag: 'Nutrition',
    description: 'Hygienic, nutritious meals prepared fresh daily — so students recharge well.',
    image: '/gallery/image6.jpg',
    accent: '#f39c12',
    light: '#fff4dc',
    tagText: '#a85a0a',
    titleColor: '#1a3a5c',
    stat: 'Fresh Daily',
  },
];

const looped = [...facilities, ...facilities, ...facilities];

function FacilityCard({ f }: { f: typeof facilities[0] }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col group"
      style={{
        width: 280,
        borderRadius: 24,
        overflow: 'hidden',
        background: '#fff',
        border: '1px solid rgba(26,58,92,0.07)',
        boxShadow: '0 16px 40px rgba(26,58,92,0.08)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(26,58,92,0.12)';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(243,156,18,0.25)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(26,58,92,0.08)';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,58,92,0.07)';
      }}
    >
      {/* ── Full-bleed photo ── */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: 188 }}>
        <Image
          src={f.image}
          alt={f.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="280px"
        />

        {/* Colour wash on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `${f.accent}28` }}
        />

        {/* Number badge — top-left, ProgramsSection style */}
        <div
          className="absolute top-3 left-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black z-10"
          style={{
            background: 'rgba(255,255,255,0.92)',
            color: f.accent,
            border: `1.5px solid ${f.accent}55`,
            backdropFilter: 'blur(6px)',
          }}
        >
          {f.id}
        </div>

        {/* Stat pill — bottom right over photo */}
        <div
          className="absolute bottom-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-bold"
          style={{
            background: 'rgba(255,255,255,0.90)',
            color: f.accent,
            border: `1.5px solid ${f.accent}44`,
            backdropFilter: 'blur(6px)',
          }}
        >
          {f.stat}
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="px-5 py-4 flex flex-col flex-1">
        {/* Tag pill — same `accent18` formula as ProgramsSection */}
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 w-fit"
          style={{ background: `${f.accent}18`, color: f.tagText }}
        >
          {f.tag}
        </span>

        <h3
          className="font-black mb-1.5"
          style={{ fontSize: 17, lineHeight: 1.15, color: f.titleColor }}
        >
          {f.name}
        </h3>

        <p className="text-[12px] leading-relaxed flex-1" style={{ color: '#7a6a55' }}>
          {f.description}
        </p>

        {/* Footer — dashed divider matching ProgramsSection card rhythm */}
        <div
          className="flex items-center justify-between mt-3 pt-3"
          style={{ borderTop: `1.5px dashed ${f.accent}28` }}
        >
          <span className="text-[11px] font-bold" style={{ color: f.accent }}>
            Learn more
          </span>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ background: `${f.accent}18` }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 7h8M7 3l4 4-4 4"
                stroke={f.accent}
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FacilitiesSection() {
  const trackRef  = useRef<HTMLDivElement>(null);
  const animRef   = useRef<number>(0);
  const posRef    = useRef(0);
  const pausedRef = useRef(false);

  const CARD_W = 280 + 20;
  const TOTAL  = CARD_W * facilities.length;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    posRef.current = TOTAL;
    track.style.transform = `translateX(-${posRef.current}px)`;

    const step = () => {
      if (!pausedRef.current) {
        posRef.current += 0.6;
        if (posRef.current >= TOTAL * 2) posRef.current -= TOTAL;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, [TOTAL]);

  return (
    <section className="relative overflow-hidden" style={{ background: '#f0ebe0' }}>

      {/* ── Watercolor blobs — same as ProgramsSection ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="fac-lg"><feGaussianBlur stdDeviation="30"/></filter>
          <filter id="fac-md"><feGaussianBlur stdDeviation="14"/></filter>
          <filter id="fac-sm"><feGaussianBlur stdDeviation="7"/></filter>
        </defs>
        <ellipse cx="80"   cy="80"  rx="260" ry="180" fill="#fdebd0" opacity="0.28" filter="url(#fac-lg)"/>
        <ellipse cx="1380" cy="110" rx="230" ry="160" fill="#f6d7a7" opacity="0.22" filter="url(#fac-lg)"/>
        <ellipse cx="700"  cy="640" rx="420" ry="120" fill="#e9dfcf" opacity="0.16" filter="url(#fac-lg)"/>
        <ellipse cx="200"  cy="600" rx="230" ry="140" fill="#f8efe2" opacity="0.18" filter="url(#fac-lg)"/>
        <ellipse cx="1250" cy="580" rx="200" ry="150" fill="#e7ecef" opacity="0.15" filter="url(#fac-lg)"/>
        <path d="M60 380 Q260 340 480 380 Q660 415 840 370"
          stroke="#e67e22" strokeWidth="5" fill="none" opacity="0.05"
          strokeLinecap="round" filter="url(#fac-sm)"/>
        <path d="M600 620 Q820 585 1060 620 Q1240 648 1400 610"
          stroke="#f39c12" strokeWidth="5" fill="none" opacity="0.06"
          strokeLinecap="round" filter="url(#fac-sm)"/>
        <circle cx="460" cy="60"  r="20" fill="#f39c12" opacity="0.09" filter="url(#fac-md)"/>
        <circle cx="960" cy="50"  r="16" fill="#1C3A47" opacity="0.08" filter="url(#fac-md)"/>
        <circle cx="80"  cy="650" r="18" fill="#e67e22" opacity="0.09" filter="url(#fac-md)"/>
      </svg>

      {/* ── Header ── */}
      <div className="relative z-10 px-6 pt-16 pb-8 text-center">
        <span
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-3"
          style={{
            background: 'rgba(243,156,18,0.12)',
            border: '1px solid rgba(243,156,18,0.3)',
            color: '#c0580a',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#e67e22' }} />
          Infrastructure
        </span>

        <h2
          className="font-black leading-none mb-3"
          style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', letterSpacing: '-0.02em', color: '#1a3a5c' }}
        >
          A school built for{' '}
          <span style={{ color: '#e67e22' }}>your child's best.</span>
        </h2>

        <p className="text-sm leading-relaxed max-w-md mx-auto" style={{ color: '#7a6a55' }}>
          State-of-the-art facilities designed so every student can learn, grow, play, and thrive every single day.
        </p>
      </div>

      {/* ── Scrolling track ── */}
      <div
        className="relative z-10 overflow-hidden"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
        style={{ paddingBottom: 40 }}
      >
        <div
          ref={trackRef}
          className="flex gap-5 will-change-transform"
          style={{ paddingLeft: 32, paddingTop: 8, paddingBottom: 16, width: 'max-content' }}
        >
          {looped.map((f, i) => (
            <FacilityCard key={`${f.id}-${i}`} f={f} />
          ))}
        </div>

        <div
          className="absolute inset-y-0 left-0 w-20 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to right, #f0ebe0, transparent)' }}
        />
        <div
          className="absolute inset-y-0 right-0 w-20 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to left, #f0ebe0, transparent)' }}
        />
      </div>

      {/* ── CTA ── */}
      <div className="relative z-10 text-center pb-14">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold transition-all hover:opacity-90 hover:scale-105"
          style={{ background: '#e67e22', color: 'white', boxShadow: '0 4px 20px rgba(230,126,34,0.28)' }}
        >
          View All Facilities
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M8 3l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>

    </section>
  );
}
