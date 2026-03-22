'use client';

import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

const row1 = TESTIMONIALS.slice(0, Math.ceil(TESTIMONIALS.length / 2));
const row2 = TESTIMONIALS.slice(Math.ceil(TESTIMONIALS.length / 2));

const padRow = (arr: typeof TESTIMONIALS) => {
  while (arr.length < 4) arr = [...arr, ...arr];
  return arr;
};

const loopRow1 = [...padRow(row1), ...padRow(row1), ...padRow(row1)];
const loopRow2 = [...padRow(row2), ...padRow(row2), ...padRow(row2)];

const avatarColors = [
  { bg: '#EDE9FE', text: '#6b21a8' },
  { bg: '#FEF9C3', text: '#713f12' },
  { bg: '#FCE7F3', text: '#831843' },
  { bg: '#CCFBF1', text: '#0f5132' },
  { bg: '#E0E7FF', text: '#1e3a5f' },
  { bg: '#F3E8FF', text: '#581c87' },
];

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

function TestimonialCard({ t, index }: { t: typeof TESTIMONIALS[0]; index: number }) {
  const color = avatarColors[index % avatarColors.length];
  return (
    <div
      className="flex-shrink-0 flex flex-col"
      style={{
  width: 320,
  background: 'rgba(15,5,40,0.55)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: 16,
  padding: '20px 22px',
  backdropFilter: 'blur(16px)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
}}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
            style={{ background: color.bg, color: color.text }}
          >
            {getInitials(t.name)}
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-tight">{t.name}</p>
            <p className="text-white/40 text-xs mt-0.5">{t.relation}</p>
          </div>
        </div>
        <div className="flex gap-0.5">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>

      <div
        className="w-7 h-7 rounded-lg flex items-center justify-center mb-3 flex-shrink-0"
        style={{ background: 'rgba(212,175,55,0.25)' }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 9C2 6.5 3.5 4.5 6 3.5L6.5 4.5C4.8 5.2 4 6.3 4 7.5H6V11H2V9ZM8 9C8 6.5 9.5 4.5 12 3.5L12.5 4.5C10.8 5.2 10 6.3 10 7.5H12V11H8V9Z" fill="#D4AF37"/>
        </svg>
      </div>
      <p className="text-white/75 text-sm leading-relaxed italic flex-1">
        "{t.content}"
      </p>
    </div>
  );
}

function ScrollRow({
  items,
  speed,
  reverse = false,
}: {
  items: typeof TESTIMONIALS;
  speed: number;
  reverse?: boolean;
}) {
  const trackRef   = useRef<HTMLDivElement>(null);
  const animRef    = useRef<number>(0);
  const posRef     = useRef<number>(0);
  const pausedRef  = useRef<boolean>(false);
  const startedRef = useRef<boolean>(false);

  const CARD_W = 320 + 16;
  const SET_W  = CARD_W * Math.floor(items.length / 3);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || startedRef.current) return;
    startedRef.current = true;

    posRef.current = reverse ? 0 : SET_W;
    track.style.transform = `translateX(-${posRef.current}px)`;

    const animate = () => {
      if (!pausedRef.current) {
        posRef.current += reverse ? -speed : speed;
        if (posRef.current >= SET_W * 2) posRef.current -= SET_W;
        if (posRef.current <= 0) posRef.current += SET_W;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animRef.current);
      startedRef.current = false;
    };
  }, [SET_W, speed, reverse]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          gap: 16,
          width: 'max-content',
          paddingLeft: 32,
          paddingRight: 32,
        }}
      >
        {items.map((t, i) => (
          <TestimonialCard key={i} t={t} index={i} />
        ))}
      </div>

      {/* Edge fades — match #5b21b6 */}
      <div
        className="absolute inset-y-0 left-0 w-20 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #5b21b6, transparent)' }}
      />
      <div
        className="absolute inset-y-0 right-0 w-20 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #5b21b6, transparent)' }}
      />
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#5b21b6' }}
    >
      {/* Grid texture — same as FacilitiesSection */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glow orbs — same style as FacilitiesSection circles */}
      <div className="absolute pointer-events-none" style={{
        width: 500, height: 500, borderRadius: '50%',
        background: 'rgba(255,255,255,0.06)',
        top: -120, right: -80,
      }}/>
      <div className="absolute pointer-events-none" style={{
        width: 260, height: 260, borderRadius: '50%',
        background: 'rgba(100,50,180,0.35)',
        top: 80, left: '35%',
      }}/>
      <div className="absolute pointer-events-none" style={{
        width: 180, height: 180, borderRadius: '50%',
        background: 'rgba(212,175,55,0.10)',
        bottom: 60, right: 100,
      }}/>
      <div className="absolute pointer-events-none" style={{
        width: 120, height: 120, borderRadius: '50%',
        background: 'rgba(212,175,55,0.08)',
        bottom: 80, left: 60,
      }}/>

      {/* Header */}
      <div className="relative z-10 text-center pt-20 pb-14 px-6">
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
          style={{
            background: 'rgba(212,175,55,0.15)',
            border: '1px solid rgba(212,175,55,0.3)',
            color: '#D4AF37',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 7C1 5 2.5 3.5 5 2.5L5.4 3.3C3.9 4 3.2 5 3.2 6H5V9H1V7ZM7 7C7 5 8.5 3.5 11 2.5L11.4 3.3C9.9 4 9.2 5 9.2 6H11V9H7V7Z" fill="#D4AF37"/>
          </svg>
          Parent Testimonials
        </span>

        <h2
          className="font-black text-white leading-tight mb-4"
          style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.03em' }}
        >
          What Parents Are<br />
          <span style={{ color: '#D4AF37' }}>Saying About Us</span>
        </h2>
        <p className="text-white/45 text-base max-w-lg mx-auto leading-relaxed">
          Hear from the families who trust Sree Vignan Public School with their children's future
        </p>
      </div>

      {/* Two scrolling rows */}
      <div className="relative z-10 flex flex-col gap-4 pb-20">
        <ScrollRow items={loopRow1} speed={0.5} reverse={false} />
        <ScrollRow items={loopRow2} speed={0.4} reverse={true} />
      </div>
    </section>
  );
}