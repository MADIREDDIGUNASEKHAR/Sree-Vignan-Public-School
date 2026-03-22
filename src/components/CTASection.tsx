import Link from 'next/link';

export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#6B21E8' }}
    >
      {/* Blobs — consistent with the rest of the site */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: 'rgba(91, 33, 182, 0.6)',
          top: '-140px',
          left: '-80px',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 360,
          height: 360,
          borderRadius: '50%',
          background: 'rgba(109, 40, 217, 0.5)',
          bottom: '-100px',
          right: '-60px',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'rgba(76, 29, 149, 0.55)',
          top: '10px',
          right: '20%',
        }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '52px 52px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">

        {/* Badge */}
        <span
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-7"
          style={{
            background: 'rgba(212,175,55,0.15)',
            border: '1px solid rgba(212,175,55,0.3)',
            color: '#D4AF37',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full inline-block animate-pulse"
            style={{ background: '#D4AF37' }}
          />
          Admissions Open
        </span>

        {/* Heading */}
        <h2
          className="font-black text-white leading-tight mb-5"
          style={{
            fontSize: 'clamp(36px, 5.5vw, 64px)',
            letterSpacing: '-0.03em',
          }}
        >
          Give Your Child the{' '}
          <span style={{ color: '#D4AF37' }}>Best Start</span>
          <br />in Life.
        </h2>

        {/* Subtext */}
        <p
          className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          Enroll now for the 2026–27 academic year at Sree Vignan Public School — where every child is empowered to excel.
        </p>

        {/* Trust pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {[
            '✦ CBSE Affiliated',
            '✦ 1000+ Students',
            '✦ 14+ Years of Excellence',
            '✦ Expert Faculty',
          ].map((item, i) => (
            <span
              key={i}
              className="text-xs font-semibold px-4 py-1.5 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.7)',
              }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-black transition-all hover:opacity-90 hover:scale-105"
            style={{
              background: '#D4AF37',
              color: '#1a0050',
              boxShadow: '0 8px 32px rgba(212,175,55,0.4)',
              letterSpacing: '-0.01em',
            }}
          >
            Enroll Your Child Now
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="#1a0050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-all hover:bg-white/15"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
            }}
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}