'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    image: '/gallery/image13.png',
    headline: 'Empowering Young Minds',
    subline: 'Quality Education in Chodavaram since 2010',
    cta: { label: 'Enroll Now', href: '/contact' },
  },
  {
    id: 2,
    image: '/gallery/image1.jpg',
    headline: 'Excellence in Academics',
    subline: '100% results — nurturing future leaders every year',
    cta: { label: 'Our Programs', href: '/academics' },
  },
  {
    id: 3,
    image: '/gallery/image2.jpg',
    headline: 'Beyond the Classroom',
    subline: 'Sports, arts, and activities for holistic growth',
    cta: { label: 'View Gallery', href: '/gallery' },
  },
  {
    id: 4,
    image: '/gallery/image3.jpg',
    headline: 'A Campus Built for Learners',
    subline: 'State-of-the-art facilities designed for modern education',
    cta: { label: 'Explore More', href: '/about' },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 700);
  }, [animating]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-[90vh] min-h-[560px] max-h-[800px] overflow-hidden bg-black">

      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.headline}
            fill
            priority={i === 0}
            className="object-cover scale-105"
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
      ))}

      {/* Branding block — bottom left like DPS */}
      <div className="absolute bottom-0 left-0 z-20 bg-primary-purple px-8 py-6 min-w-[260px]">
        <p className="text-accent-gold text-xs font-bold tracking-[0.2em] uppercase mb-1">
          Sree Vignan
        </p>
        <p className="text-white text-3xl font-black leading-none tracking-tight">
          PUBLIC
        </p>
        <p className="text-white text-3xl font-black leading-none tracking-tight">
          SCHOOL
        </p>
      </div>

      {/* Slide text content */}
      <div className="absolute inset-0 z-20 flex items-end pb-16 md:pb-20">
        <div className="container-safe w-full pl-[300px] md:pl-[320px]">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className={`transition-all duration-700 ${
                i === current
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 absolute'
              }`}
            >
              {i === current && (
                <>
                  <h1 className="text-white text-3xl md:text-5xl font-black leading-tight mb-3 drop-shadow-lg max-w-2xl">
                    {slide.headline}
                  </h1>
                  <p className="text-white/80 text-base md:text-lg mb-6 max-w-xl">
                    {slide.subline}
                  </p>
                  <Link
                    href={slide.cta.href}
                    className="inline-block bg-accent-gold text-royal-navy font-bold text-sm px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors"
                  >
                    {slide.cta.label} →
                  </Link>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-all"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M13 4L7 10L13 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-all"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7 4L13 10L7 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-5 right-6 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-6 h-2 bg-accent-gold'
                : 'w-2 h-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-[3px] bg-white/10">
        <div
          key={current}
          className="h-full bg-accent-gold"
          style={{ animation: 'progress 5s linear forwards' }}
        />
      </div>

      {/* Enquire Now — right side vertical tab like DPS */}
      <Link
        href="/contact"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-primary-purple text-white text-xs font-bold tracking-widest px-2 py-4 writing-mode-vertical hover:bg-purple-800 transition-colors"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        ENQUIRE NOW
      </Link>

      <style>{`
        @keyframes progress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </div>
  );
}