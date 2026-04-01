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
      style={{ background: '#fdf6e8' }}
    >
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
              background: 'rgba(255,255,255,0.85)',
              border: '1px solid #d8c4f0',
              color: '#6b21a8',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ background: '#7C3AED' }}
            />
            Quick Links
          </span>
          <h2
            className="font-black leading-tight mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.03em', color: '#111827' }}
          >
            Explore More{' '}
            <span style={{ color: '#7C3AED' }}>Features</span>
          </h2>
          <p className="text-base max-w-lg mx-auto leading-relaxed" style={{ color: '#6b7280' }}>
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
                border: '1.5px solid rgba(124,58,237,0.12)',
                borderRadius: 20,
                padding: '28px 24px',
                transition: 'background 0.2s, transform 0.2s',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
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
                className="font-black text-lg mb-2"
                style={{ letterSpacing: '-0.02em', color: '#111827' }}
              >
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: '#6b7280' }}>
                {feature.description}
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-sm font-bold"
                style={{ color: '#7C3AED' }}
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
