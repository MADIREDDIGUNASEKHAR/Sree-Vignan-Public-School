'use client';

import Link from 'next/link';

const features = [
  {
    icon: '📰',
    title: 'Latest News',
    description: 'Stay updated with school news, achievements, and announcements',
    href: '/news',
    btnText: 'Read News',
  },
  {
    icon: '📋',
    title: 'Online Admission',
    description: 'Apply for admission online and track your application status',
    href: '/admission',
    btnText: 'Apply Now',
  },
  {
    icon: '👨‍🏫',
    title: 'Faculty',
    description: 'Meet our experienced and dedicated team of educators',
    href: '/faculty',
    btnText: 'View Faculty',
  },
  {
    icon: '❓',
    title: 'FAQ',
    description: 'Find answers to common questions about admissions and school policies',
    href: '/faq',
    btnText: 'Read FAQ',
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#6B21E8' }}
    >
      {/* Blobs */}
      <div className="absolute pointer-events-none" style={{
        width: 380, height: 380, borderRadius: '50%',
        background: 'rgba(91, 33, 182, 0.6)',
        top: '-120px', left: '-70px',
      }} />
      <div className="absolute pointer-events-none" style={{
        width: 460, height: 460, borderRadius: '50%',
        background: 'rgba(109, 40, 217, 0.5)',
        top: '-160px', right: '-90px',
      }} />
      <div className="absolute pointer-events-none" style={{
        width: 220, height: 220, borderRadius: '50%',
        background: 'rgba(76, 29, 149, 0.55)',
        bottom: '-60px', right: '15%',
      }} />

      {/* Grid texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '52px 52px',
      }} />

      <div className="relative z-10 container-safe py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            style={{
              background: 'rgba(212,175,55,0.15)',
              border: '1px solid rgba(212,175,55,0.3)',
              color: '#D4AF37',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ background: '#D4AF37' }}
            />
            Quick Links
          </span>
          <h2
            className="font-black text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.03em' }}
          >
            Explore More{' '}
            <span style={{ color: '#D4AF37' }}>Features</span>
          </h2>
          <p className="text-white/45 text-base max-w-lg mx-auto leading-relaxed">
            Discover our comprehensive online services designed for parents and students
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <Link
              key={i}
              href={feature.href}
              className="group flex flex-col"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.06)',
                borderRadius: 20,
                padding: '28px 24px',
                backdropFilter: 'blur(12px)',
                transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#f5f3ff';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = '#ffffff';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <div className="text-4xl mb-5">{feature.icon}</div>
              <h3
                className="text-gray-900 font-black text-lg mb-2"
                style={{ letterSpacing: '-0.02em' }}
              >
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">
                {feature.description}
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-sm font-bold"
                style={{ color: '#D4AF37' }}
              >
                {feature.btnText} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}