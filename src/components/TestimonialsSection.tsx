'use client';

import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

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
      className="flex flex-col"
      style={{
        background: 'white',
        borderRadius: 16,
        padding: '28px 28px 24px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
        border: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      {/* Quote icon */}
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center mb-5 flex-shrink-0"
        style={{ background: '#f3f4f6' }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M2 10C2 7.5 3.5 5.5 6.5 4L7.2 5.2C5.3 6 4.4 7.2 4.4 8.6H7V13H2V10ZM9 10C9 7.5 10.5 5.5 13.5 4L14.2 5.2C12.3 6 11.4 7.2 11.4 8.6H14V13H9V10Z"
            fill="#9ca3af"
          />
        </svg>
      </div>

      {/* Review text */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
        {t.content}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid #f3f4f6' }}>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-black text-xs flex-shrink-0"
          style={{ background: color.bg, color: color.text }}
        >
          {getInitials(t.name)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-gray-900 font-bold text-sm leading-tight truncate">{t.name}</p>
          <p className="text-gray-400 text-xs mt-0.5 truncate">{t.relation}</p>
        </div>
        <div className="flex gap-0.5 flex-shrink-0">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const displayed = TESTIMONIALS.slice(0, 6);

  return (
    <section
      className="relative"
      style={{ background: '#f8f7ff' }}
    >
      {/* Subtle gradient at bottom corners like the screenshot */}
      <div
        className="absolute bottom-0 left-0 w-72 h-72 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at bottom left, rgba(139,92,246,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-72 h-72 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at bottom right, rgba(251,191,36,0.10) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
            style={{
              background: 'transparent',
              border: '1px solid #e5e7eb',
              color: '#6b7280',
            }}
          >
            Testimonials
          </span>
          <h2
            className="font-black text-gray-900 leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.03em' }}
          >
            What Parents Are{' '}
            <span style={{ color: '#7C3AED' }}>Saying About Us</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}