'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { galleryItems } from '@/lib/galleryData';

const galleries = galleryItems;
const total = galleries.length;

function getCardStyle(offset: number): React.CSSProperties {
  const absOffset = Math.abs(offset);
  const sign = offset < 0 ? -1 : 1;

  if (absOffset === 0) {
    return {
      transform: 'translateX(0px) scale(1)',
      zIndex: 50,
      opacity: 1,
      filter: 'none',
      pointerEvents: 'auto', // ✅ FIXED: was 'none', which blocked the Link
    };
  }
  if (absOffset === 1) {
    return {
      transform: `translateX(${sign * 360}px) scale(0.88)`,
      zIndex: 30,
      opacity: 0.75,
      filter: 'brightness(0.7)',
      pointerEvents: 'auto',
      cursor: 'pointer',
    };
  }
  if (absOffset === 2) {
    return {
      transform: `translateX(${sign * 680}px) scale(0.78)`,
      zIndex: 10,
      opacity: 0.5,
      filter: 'brightness(0.55)',
      pointerEvents: 'auto',
      cursor: 'pointer',
    };
  }
  return {
    transform: `translateX(${sign * 900}px) scale(0.7)`,
    zIndex: 0,
    opacity: 0,
    pointerEvents: 'none',
  };
}

function GalleryCard({
  gallery,
  isCenter,
  onClick,
}: {
  gallery: (typeof galleries)[0];
  isCenter: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={!isCenter ? onClick : undefined}
      style={{
        width: isCenter ? 380 : 340,
        background: 'white',
        borderRadius: 24,
        overflow: 'hidden',
        boxShadow: isCenter
          ? '0 40px 100px rgba(0,0,0,0.45), 0 10px 30px rgba(0,0,0,0.2)'
          : '0 16px 48px rgba(0,0,0,0.25)',
        transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <span
          className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
          style={{ background: `${gallery.accent}20`, color: gallery.accent }}
        >
          {gallery.category}
        </span>
        <h3
          className="font-black text-gray-900 mb-2"
          style={{
            fontSize: isCenter ? 24 : 20,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            transition: 'font-size 0.4s ease',
          }}
        >
          {gallery.title}
        </h3>
        {isCenter && (
          <p className="text-gray-400 text-xs leading-relaxed">
            {gallery.description}
          </p>
        )}
      </div>

      {/* Image grid */}
      <div className="px-4 pb-2">
        {/* Top row */}
        <div className="grid grid-cols-2 gap-2 mb-2">
          {gallery.images.slice(0, 2).map((img, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden group"
              style={{
                height: isCenter ? 180 : 130,
                transition: 'height 0.4s ease',
              }}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 160px, 180px"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)' }}
              />
              <p className="absolute bottom-2 left-2.5 text-white font-bold text-[10px]">
                {img.label}
              </p>
            </div>
          ))}
        </div>

        <div className="h-px mb-2" style={{ background: '#f3f4f6' }} />

        {/* Bottom grid */}
        <div className="grid grid-cols-2 gap-2">
          {gallery.images.slice(2, isCenter ? 6 : 4).map((img, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden group"
              style={{
                height: isCenter ? 120 : 90,
                transition: 'height 0.4s ease',
              }}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 160px, 180px"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }}
              />
              <p className="absolute bottom-1.5 left-2 text-white font-bold text-[10px]">
                {img.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="mx-4 mb-4 mt-3 flex items-center justify-between pt-3"
        style={{ borderTop: '1px solid #f3f4f6' }}
      >
        <span className="text-xs text-gray-400 font-medium">
          {gallery.images.length} photos
        </span>

        {isCenter ? (
          <Link
            href={`/gallery/${gallery.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full transition-all hover:opacity-80 active:scale-95"
            style={{
              background: gallery.accent,
              color: 'white',
              boxShadow: `0 4px 12px ${gallery.accent}44`,
            }}
          >
            View More →
          </Link>
        ) : (
          <span
            className="text-xs font-bold px-3 py-1.5 rounded-full"
            style={{ background: `${gallery.accent}15`, color: gallery.accent }}
          >
            View More →
          </span>
        )}
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const prev = () => setActive(i => (i - 1 + total) % total);
  const next = () => setActive(i => (i + 1) % total);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);

    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);

    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const intervalId = window.setInterval(() => {
      setActive(i => (i + 1) % total);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, [isMobile]);

  const getOffset = (index: number) => {
    let offset = index - active;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  return (
    <section
      id="gallery"
      className="relative overflow-hidden scroll-mt-[108px]"
      style={{ background: '#fffacd' }}
    >
      {/* Subtle glow behind center card */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${galleries[active].accent}18 0%, transparent 70%)`,
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -30%)',
          transition: 'background 0.5s ease',
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center pt-16 pb-10 px-6">
        <span
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
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
          School Gallery
        </span>
        <h2
          className="font-black text-black leading-tight mb-3"
          style={{ fontSize: 'clamp(32px, 5vw, 52px)', letterSpacing: '-0.03em' }}
        >
          Every Moment,{' '}
          <span style={{ color: '#000000' }}>Every Memory.</span>
        </h2>
        <p className="text-black text-base max-w-lg mx-auto leading-relaxed">
          Click the side cards to navigate — explore every photo from each special event
        </p>
      </div>

      {/* 3D Carousel */}
      <div className="relative z-10" style={{ height: 720, marginBottom: 24 }}>
        <div className="absolute inset-0 flex items-center justify-center">
          {galleries.map((gallery, i) => {
            const offset = getOffset(i);
            const cardStyle = getCardStyle(offset);
            return (
              <div
                key={gallery.id}
                className="absolute"
                style={{
                  left: '50%',
                  marginLeft: i === active ? -190 : -170,
                  transition: 'all 0.55s cubic-bezier(0.4,0,0.2,1)',
                  ...cardStyle,
                }}
              >
                <GalleryCard
                  gallery={gallery}
                  isCenter={offset === 0}
                  onClick={() => setActive(i)}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="relative z-20 flex items-center justify-center gap-5 pb-8">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11 4L6 9l5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="flex gap-2">
          {galleries.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? 28 : 8,
                height: 8,
                background: i === active
                  ? galleries[active].accent
                  : 'rgba(255,255,255,0.25)',
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{
            background: galleries[active].accent,
            boxShadow: `0 4px 16px ${galleries[active].accent}66`,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M7 4l5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* View all */}
      <div className="relative z-10 text-center pb-14">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold transition-all hover:opacity-90 hover:scale-105"
          style={{ background: '#D4AF37', color: '#1a0050' }}
        >
          View Full Gallery
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M8 3l5 5-5 5" stroke="#1a0050" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </section>
  );
}
