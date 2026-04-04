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
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              letterSpacing: '-0.03em',
              color: '#111827',
            }}
          >
            Explore More <span style={{ color: '#7C3AED' }}>Features</span>
          </h2>
          <p
            className="text-base max-w-lg mx-auto leading-relaxed"
            style={{ color: '#6b7280' }}
          >
            Discover our comprehensive online services designed for parents and students
          </p>
        </div>

        {/* Bento Grid */}
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {/* Hero card — 2 cols, 2 rows */}
          <HeroNewsCard
            feature={features[0]}
            latestPost={latestPost}
            style={{ gridColumn: '1 / 3', gridRow: '1 / 3', minHeight: 320 }}
          />

          {/* Admission */}
          <BentoCard feature={features[1]} style={{ gridColumn: '3', gridRow: '1' }} />

          {/* Faculty */}
          <BentoCard feature={features[2]} style={{ gridColumn: '3', gridRow: '2' }} />
        </div>
      </div>
    </section>
  );
}

/* ── Hero News Card ── */
function HeroNewsCard({
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
        padding: '36px 32px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.07)',
        ...style,
      }}
    >
      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: 160,
          height: 160,
          background:
            'radial-gradient(circle at top right, rgba(124,58,237,0.08) 0%, transparent 70%)',
          borderRadius: '0 20px 0 0',
        }}
      />

      <div style={{ fontSize: 48, marginBottom: 16, lineHeight: 1 }}>
        {feature.icon}
      </div>
      <h3
        className="font-black text-2xl mb-1"
        style={{ letterSpacing: '-0.02em', color: '#111827' }}
      >
        {feature.title}
      </h3>
      <p
        className="leading-relaxed"
        style={{ fontSize: '1rem', color: '#6b7280', marginBottom: 20 }}
      >
        {feature.description}
      </p>

      {/* Latest News Post */}
      {latestPost ? (
        <Link
          href="/news"
          className="flex flex-col rounded-2xl overflow-hidden mb-6"
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
          <div style={{ width: '100%', height: 140, overflow: 'hidden', flexShrink: 0 }}>
            {latestPost.image ? (
              <img
                src={latestPost.image}
                alt={latestPost.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #ede9fe 0%, #c4b5fd 100%)' }}
              >
                <span style={{ fontSize: 40, opacity: 0.5 }}>📰</span>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-4">
            <div className="flex justify-end mb-2">
              <span
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(124,58,237,0.1)', color: '#6b21a8' }}
              >
                {latestPost.category}
              </span>
            </div>

            <h4
              className="font-bold leading-snug mb-1 text-right"
              style={{ fontSize: '0.95rem', color: '#111827', letterSpacing: '-0.01em' }}
            >
              {latestPost.title}
            </h4>

            <p
              className="leading-snug mb-3 text-right line-clamp-2"
              style={{ fontSize: '0.8rem', color: '#6b7280' }}
            >
              {latestPost.excerpt}
            </p>

            <div className="flex items-center justify-end gap-1.5">
              <Calendar size={12} style={{ color: '#9ca3af' }} />
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
          className="rounded-2xl flex items-center justify-center mb-6"
          style={{
            height: 100,
            border: '1px dashed rgba(124,58,237,0.2)',
            background: '#faf8ff',
          }}
        >
          <p className="text-xs" style={{ color: '#a78bfa' }}>
            No news yet — check back soon.
          </p>
        </div>
      )}

      {/* CTA */}
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
        padding: '24px',
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
      <div style={{ fontSize: 36, marginBottom: 16, lineHeight: 1 }}>
        {feature.icon}
      </div>
      <h3
        className="font-black text-lg mb-2"
        style={{ letterSpacing: '-0.02em', color: '#111827' }}
      >
        {feature.title}
      </h3>
      <p
        className="leading-relaxed flex-1"
        style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: 20 }}
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