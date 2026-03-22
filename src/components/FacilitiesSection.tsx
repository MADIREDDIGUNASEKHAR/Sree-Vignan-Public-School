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
    accent: '#7C3AED',
    light: '#EDE9FE',
    tagText: '#6b21a8',
    stat: '14 Classrooms',
  },
  {
    id: 2,
    name: 'Library',
    tag: 'Resources',
    description: '5000+ books and digital resources designed to spark curiosity in every student.',
    image: '/gallery/image2.jpg',
    accent: '#D4AF37',
    light: '#FEF9C3',
    tagText: '#713f12',
    stat: '5000+ Books',
  },
  {
    id: 3,
    name: 'Playground',
    tag: 'Sports',
    description: 'Cricket, football, kabaddi, and athletics — nurturing fitness and team spirit.',
    image: '/gallery/image3.jpg',
    accent: '#0D9488',
    light: '#CCFBF1',
    tagText: '#0f5132',
    stat: '2 Acre Ground',
  },
  {
    id: 4,
    name: 'Computer Lab',
    tag: 'Digital',
    description: 'Fully equipped with modern hardware, software, and high-speed internet access.',
    image: '/gallery/image4.jpg',
    accent: '#EC4899',
    light: '#FCE7F3',
    tagText: '#831843',
    stat: '40 Computers',
  },
  {
    id: 5,
    name: 'Safe Campus',
    tag: 'Safety',
    description: 'CCTV surveillance and trained security personnel protecting your child 24/7.',
    image: '/gallery/image5.jpg',
    accent: '#6366f1',
    light: '#E0E7FF',
    tagText: '#1e3a5f',
    stat: '24/7 Security',
  },
  {
    id: 6,
    name: 'Cafeteria',
    tag: 'Nutrition',
    description: 'Hygienic, nutritious meals prepared fresh daily — so students recharge well.',
    image: '/gallery/image6.jpg',
    accent: '#9333EA',
    light: '#F3E8FF',
    tagText: '#581c87',
    stat: 'Fresh Daily',
  },
];

const looped = [...facilities, ...facilities, ...facilities];

function FacilityCard({ f }: { f: typeof facilities[0] }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col group"
      style={{
        width: 290,
        background: 'white',
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.25), 0 4px 16px rgba(0,0,0,0.12)',
      }}
    >
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: 188 }}>
        <Image
          src={f.image}
          alt={f.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="290px"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `${f.accent}22` }}
        />
      </div>

      <div className="px-5 py-5 flex flex-col flex-1">
        <span
          className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full w-fit mb-3"
          style={{ background: f.light, color: f.tagText }}
        >
          {f.tag}
        </span>
        <h3
          className="font-black text-gray-900 mb-1.5"
          style={{ fontSize: 17, lineHeight: 1.2 }}
        >
          {f.name}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed flex-1">
          {f.description}
        </p>
        <div
          className="flex items-center justify-between mt-4 pt-4"
          style={{ borderTop: '1px solid #f3f4f6' }}
        >
          <span className="text-xs font-bold" style={{ color: f.accent }}>
            {f.stat}
          </span>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ background: f.light }}
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

  const CARD_W = 290 + 20;
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
    <section className="overflow-hidden" style={{ background: '#5b21b6' }}>

      {/* ── Purple header ── */}
      <div className="relative px-8 md:px-16 pt-16 pb-16 overflow-hidden">

        {/* Deco circles */}
        <div className="absolute pointer-events-none" style={{
          width: 340, height: 340, borderRadius: '50%',
          background: 'rgba(212,175,55,0.10)', top: -100, right: -80,
        }}/>
        <div className="absolute pointer-events-none" style={{
          width: 180, height: 180, borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)', bottom: 60, left: '30%',
        }}/>
        <div className="absolute pointer-events-none" style={{
          width: 90, height: 90, borderRadius: '50%',
          background: 'rgba(212,175,55,0.18)', bottom: 90, right: '28%',
        }}/>
        <div className="absolute pointer-events-none" style={{
          width: 50, height: 50, borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)', top: 40, left: '18%',
        }}/>

        <div className="mb-5">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.22)',
              color: 'rgba(255,255,255,0.9)',
            }}
          >
            <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#D4AF37' }} />
            Infrastructure
          </span>
        </div>

        <h2
          className="text-white font-black leading-none mb-5"
          style={{
            fontSize: 'clamp(36px, 6vw, 68px)',
            letterSpacing: '-0.03em',
            maxWidth: 720,
          }}
        >
          A school built for<br />
          <span style={{ color: '#D4AF37' }}>your child's best.</span>
        </h2>
        <p
          className="text-sm leading-relaxed max-w-md"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          State-of-the-art facilities designed so every student can learn, grow, play, and thrive every single day.
        </p>
      </div>

      {/* ── Continuous scroll track — still on purple ── */}
      <div
        className="overflow-hidden relative"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
        style={{ paddingBottom: 48 }}
      >
        <div
          ref={trackRef}
          className="flex gap-5 will-change-transform"
          style={{
            paddingLeft: 32,
            paddingTop: 8,
            paddingBottom: 16,
            width: 'max-content',
          }}
        >
          {looped.map((f, i) => (
            <FacilityCard key={`${f.id}-${i}`} f={f} />
          ))}
        </div>

        {/* Fade edges — purple */}
        <div
          className="absolute inset-y-0 left-0 w-20 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #5b21b6, transparent)' }}
        />
        <div
          className="absolute inset-y-0 right-0 w-20 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #5b21b6, transparent)' }}
        />
      </div>

      {/* ── View all — gold on purple ── */}
      <div className="text-center pb-14">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold transition-all hover:opacity-90 hover:scale-105"
          style={{ background: '#D4AF37', color: '#1a0050' }}
        >
          View All Facilities
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M8 3l5 5-5 5"
              stroke="#1a0050"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

    </section>
  );
}