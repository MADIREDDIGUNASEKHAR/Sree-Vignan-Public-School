'use client';

import Link from 'next/link';
import { NEWS_POSTS } from '@/lib/constants';
import { Calendar } from 'lucide-react';

const features = [
  {
    icon: '📰',
    title: 'Latest News',
    description:
      'Stay updated with school news, achievements, and announcements from our vibrant community.',
    href: '/news',
    btnText: 'Read News',
    hero: true,
  },
  {
    icon: '📋',
    title: 'Online Admission',
    description: 'Apply online and track your application status in real time.',
    href: '/admission',
    btnText: 'Apply Now',
  },
  {
    icon: '👨‍🏫',
    title: 'Faculty',
    description: 'Meet our experienced and dedicated team of educators.',
    href: '/faculty',
    btnText: 'View Faculty',
  },
];

export default function FeaturesSection() {
  const latestPost = [...NEWS_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )[0];

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#fdf6e8' }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '52px 52px',
        }}
      />

      <div className="relative z-10 container-safe py-12 md:py-20 px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <span
            className="inline-flex items-center gap-2 px-4 md:px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 md:mb-6"
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
            className="font-black leading-tight mb-3 md:mb-4"
            style={{
              fontSize: 'clamp(24px, 5vw, 48px)',
              letterSpacing: '-0.03em',
              color: '#111827',
            }}
          >
            Explore More <span style={{ color: '#7C3AED' }}>Features</span>
          </h2>
          <p
            className="text-sm md:text-base max-w-lg mx-auto leading-relaxed"
            style={{ color: '#6b7280' }}
          >
            Discover our comprehensive online services designed for parents and students
          </p>
        </div>

        {/* ── Mobile layout (< md) ── */}
        <div className="flex flex-col gap-3 md:hidden">
          <NewsCard feature={features[0]} latestPost={latestPost} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <BentoCard feature={features[1]} />
            <BentoCard feature={features[2]} />
          </div>
        </div>

        {/* ── Desktop layout (md+) ── */}
        <div
          className="hidden md:grid gap-4"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto auto' }}
        >
          <NewsCard
            feature={features[0]}
            latestPost={latestPost}
            style={{ gridColumn: '1 / 3', gridRow: '1 / 3', minHeight: 320 }}
          />
          <BentoCard feature={features[1]} style={{ gridColumn: '3', gridRow: '1' }} />
          <BentoCard feature={features[2]} style={{ gridColumn: '3', gridRow: '2' }} />
        </div>
      </div>
    </section>
  );
}

/* ── News Card (used in both mobile and desktop) ── */
function NewsCard({
  feature,
  latestPost,
  style,
}: {
  feature: (typeof features)[number];
  latestPost: (typeof NEWS_POSTS)[number] | undefined;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="relative flex flex-col overflow-hidden"
      style={{
        background: '#ffffff',
        border: '1.5px solid rgba(124,58,237,0.12)',
        borderRadius: 20,
        padding: '24px 20px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.07)',
        ...style,
      }}
    >
      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: 140,
          height: 140,
          background:
            'radial-gradient(circle at top right, rgba(124,58,237,0.08) 0%, transparent 70%)',
          borderRadius: '0 20px 0 0',
        }}
      />

      <div style={{ fontSize: 40, marginBottom: 12, lineHeight: 1 }}>
        {feature.icon}
      </div>
      <h3
        className="font-black text-xl md:text-2xl mb-1"
        style={{ letterSpacing: '-0.02em', color: '#111827' }}
      >
        {feature.title}
      </h3>
      <p
        className="leading-relaxed text-sm md:text-base"
        style={{ color: '#6b7280', marginBottom: 16 }}
      >
        {feature.description}
      </p>

      {/* Latest News Post */}
      {latestPost ? (
        <Link
          href="/news"
          className="flex flex-col rounded-2xl overflow-hidden mb-5"
          style={{
            border: '1px solid rgba(124,58,237,0.12)',
            background: '#faf8ff',
            transition: 'box-shadow 0.2s, background 0.2s',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = '#f3eeff';
            el.style.boxShadow = '0 4px 20px rgba(124,58,237,0.14)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = '#faf8ff';
            el.style.boxShadow = 'none';
          }}
        >
          {/* Thumbnail */}
          <div style={{ width: '100%', height: 120, overflow: 'hidden', flexShrink: 0 }}>
            {latestPost.image ? (
              <img
                src={latestPost.image}
                alt={latestPost.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #ede9fe 0%, #c4b5fd 100%)',
                }}
              >
                <span style={{ fontSize: 36, opacity: 0.5 }}>📰</span>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-3 md:p-4">
            <div className="flex justify-end mb-1.5">
              <span
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(124,58,237,0.1)', color: '#6b21a8' }}
              >
                {latestPost.category}
              </span>
            </div>
            <h4
              className="font-bold leading-snug mb-1 text-right"
              style={{
                fontSize: '0.9rem',
                color: '#111827',
                letterSpacing: '-0.01em',
              }}
            >
              {latestPost.title}
            </h4>
            <p
              className="leading-snug mb-2 text-right line-clamp-2"
              style={{ fontSize: '0.78rem', color: '#6b7280' }}
            >
              {latestPost.excerpt}
            </p>
            <div className="flex items-center justify-end gap-1.5">
              <Calendar size={11} style={{ color: '#9ca3af' }} />
              <span className="text-xs" style={{ color: '#9ca3af' }}>
                {new Date(latestPost.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
          </div>
        </Link>
      ) : (
        <div
          className="rounded-2xl flex items-center justify-center mb-5"
          style={{
            height: 80,
            border: '1px dashed rgba(124,58,237,0.2)',
            background: '#faf8ff',
          }}
        >
          <p className="text-xs" style={{ color: '#a78bfa' }}>
            No news yet — check back soon.
          </p>
        </div>
      )}

      <Link
        href={feature.href}
        className="inline-flex items-center gap-1.5 text-sm font-bold mt-auto group/link"
        style={{ color: '#7C3AED' }}
      >
        {feature.btnText}
        <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );
}

/* ── Bento Card ── */
function BentoCard({
  feature,
  style,
}: {
  feature: (typeof features)[number];
  style?: React.CSSProperties;
}) {
  return (
    <Link
      href={feature.href}
      className="group relative flex flex-col overflow-hidden"
      style={{
        background: '#ffffff',
        border: '1.5px solid rgba(124,58,237,0.12)',
        borderRadius: 20,
        padding: '20px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.07)',
        transition: 'box-shadow 0.25s, transform 0.25s, background 0.2s',
        ...style,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = '#f5f3ff';
        el.style.transform = 'translateY(-3px)';
        el.style.boxShadow = '0 16px 48px rgba(124,58,237,0.14)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = '#ffffff';
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.07)';
      }}
    >
      <div style={{ fontSize: 32, marginBottom: 12, lineHeight: 1 }}>
        {feature.icon}
      </div>
      <h3
        className="font-black text-base md:text-lg mb-1.5"
        style={{ letterSpacing: '-0.02em', color: '#111827' }}
      >
        {feature.title}
      </h3>
      <p
        className="leading-relaxed flex-1 text-sm"
        style={{ color: '#6b7280', marginBottom: 16 }}
      >
        {feature.description}
      </p>
      <span
        className="inline-flex items-center gap-1.5 text-sm font-bold mt-auto"
        style={{ color: '#7C3AED' }}
      >
        {feature.btnText}
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}