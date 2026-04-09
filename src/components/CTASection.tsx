import Image from 'next/image';
import Link from 'next/link';

const TRUST_PILLS = [
  '✦ CBSE Affiliated',
  '✦ 1000+ Students',
  '✦ 34+ Years of Excellence',
  '✦ Expert Faculty',
];

export default function CTASection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '100vh' }}>

      {/* ── School photo ── */}
      <div className="absolute inset-0">
        <Image
          src="/gallery/HERO/image2.jpeg"
          alt="Sree Vignan Public School"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* ── Dark radial scrim — heaviest at centre where text is ── */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 80% at 50% 50%,
              rgba(4, 8, 20, 0.80) 0%,
              rgba(4, 8, 20, 0.60) 60%,
              rgba(4, 8, 20, 0.32) 100%)
          `,
        }}
      />

      {/* Neon cyan top-left ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.14) 0%, transparent 70%)',
          top: -200, left: -150, filter: 'blur(12px)',
        }}
      />
      {/* Neon orange bottom-right ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 540, height: 540, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,101,0,0.15) 0%, transparent 70%)',
          bottom: -180, right: -120, filter: 'blur(12px)',
        }}
      />

      {/* ── Content ── */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: '100vh', paddingTop: 80, paddingBottom: 80 }}
      >
        {/* Eyebrow badge */}
        <span
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8"
          style={{
            background: 'rgba(0,212,255,0.08)',
            border: '1px solid rgba(0,212,255,0.55)',
            color: '#00D4FF',
            boxShadow: '0 0 20px rgba(0,212,255,0.25), inset 0 0 12px rgba(0,212,255,0.06)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <span
            style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#00D4FF',
              boxShadow: '0 0 8px #00D4FF, 0 0 16px #00D4FF',
              display: 'inline-block',
            }}
          />
          Admissions Open — 2026–27
        </span>

        {/* Headline */}
        <h2
          className="font-black leading-tight mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(38px, 6vw, 78px)',
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
            textShadow: '0 2px 40px rgba(0,0,0,0.9), 0 0 80px rgba(0,0,0,0.7)',
            maxWidth: 860,
          }}
        >
          Give Your Child the{' '}
          <span
            style={{
              color: '#FF6500',
              textShadow: '0 2px 10px rgba(0,0,0,0.35)',
            }}
          >
            Best Start
          </span>
          {' '}in Life.
        </h2>

        {/* Subtext in frosted glass pill */}
        <div
          style={{
            background: 'rgba(4,8,20,0.55)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.09)',
            borderRadius: 18,
            padding: '14px 30px',
            marginBottom: 36,
            maxWidth: 540,
          }}
        >
          <p style={{ fontSize: 16, lineHeight: 1.75, color: 'rgba(255,255,255,0.82)', margin: 0 }}>
            Enroll now for the 2026–27 academic year at Sree Vignan Public School —
            where every child is empowered to excel.
          </p>
        </div>

        {/* Trust pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {TRUST_PILLS.map((item, i) => (
            <span
              key={i}
              style={{
                fontSize: 12, fontWeight: 700,
                padding: '7px 18px', borderRadius: 100,
                background: 'rgba(4,8,20,0.52)',
                border: '1px solid rgba(0,212,255,0.35)',
                color: '#D0F5FF',
                boxShadow: '0 0 10px rgba(0,212,255,0.10)',
                backdropFilter: 'blur(10px)',
                letterSpacing: '0.02em',
              }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full font-black transition-all hover:scale-105"
            style={{
              padding: '16px 36px', fontSize: 15,
              background: 'linear-gradient(135deg, #FF6500 0%, #FF8C00 100%)',
              color: '#fff', letterSpacing: '-0.01em',
              boxShadow: `
                0 0 24px rgba(255,101,0,0.70),
                0 0 60px rgba(255,101,0,0.35),
                0 8px 32px rgba(0,0,0,0.4)
              `,
              textShadow: '0 1px 4px rgba(0,0,0,0.3)',
            }}
          >
            Enroll Your Child Now
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full font-bold transition-all hover:scale-105"
            style={{
              padding: '15px 32px', fontSize: 15,
              background: 'rgba(0,212,255,0.08)',
              border: '1.5px solid rgba(0,212,255,0.60)',
              color: '#00D4FF',
              boxShadow: `0 0 18px rgba(0,212,255,0.22), 0 8px 24px rgba(0,0,0,0.3)`,
              backdropFilter: 'blur(12px)',
              textShadow: '0 0 20px rgba(0,212,255,0.6)',
            }}
          >
            Learn More About Us
          </Link>
        </div>

        <p style={{ marginTop: 28, fontSize: 12, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.04em' }}>
          No application fee &nbsp;·&nbsp; Seats filling fast
        </p>
      </div>
    </section>
  );
}
