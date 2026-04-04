// components/FAQSection.tsx
'use client';

import { useState } from 'react';
import { FAQS } from '@/lib/constants';

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section
      className="relative overflow-hidden py-20"
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

      <div className="relative z-10 container-safe">
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
            FAQ
          </span>
          <h2
            className="font-black leading-tight mb-4"
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              letterSpacing: '-0.03em',
              color: '#111827',
            }}
          >
            Frequently Asked{' '}
            <span style={{ color: '#7C3AED' }}>Questions</span>
          </h2>
          <p
            className="text-base max-w-lg mx-auto leading-relaxed"
            style={{ color: '#6b7280' }}
          >
            Find answers to common questions about admissions and school policies
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                style={{
                  background: '#ffffff',
                  border: isOpen
                    ? '1.5px solid rgba(124,58,237,0.3)'
                    : '1.5px solid rgba(124,58,237,0.1)',
                  borderRadius: 16,
                  boxShadow: isOpen
                    ? '0 8px 32px rgba(124,58,237,0.1)'
                    : '0 2px 8px rgba(0,0,0,0.04)',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                  style={{ padding: '20px 24px' }}
                >
                  <span
                    className="font-bold text-base leading-snug"
                    style={{ color: '#111827' }}
                  >
                    {item.question}
                  </span>

                  {/* +/− icon */}
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      minWidth: 28,
                      borderRadius: '50%',
                      background: isOpen
                        ? '#7C3AED'
                        : 'rgba(124,58,237,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background 0.2s',
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      style={{
                        transition: 'transform 0.25s',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                    >
                      <path
                        d="M6 1v10M1 6h10"
                        stroke={isOpen ? '#ffffff' : '#7C3AED'}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  style={{
                    maxHeight: isOpen ? 400 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                  }}
                >
                  <p
                    className="leading-relaxed text-sm"
                    style={{
                      color: '#6b7280',
                      padding: '0 24px 20px',
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}