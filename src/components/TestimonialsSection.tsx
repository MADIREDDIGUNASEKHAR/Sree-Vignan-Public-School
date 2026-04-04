'use client';

import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Ramana Rao',
    relation: 'Parent of Class 10 Student',
    rating: 5,
    content:
      'Sree Vignan transformed my daughter completely. Her confidence, discipline, and results all improved dramatically.',
  },
  {
    name: 'Sunitha Devi',
    relation: 'Parent of Class 7 Student',
    rating: 5,
    content:
      'The school has an exceptional culture. My son went from average to top 5 in his class within a year.',
  },
  {
    name: 'Venkat Reddy',
    relation: 'Parent of Class 12 Student',
    rating: 5,
    content:
      'My daughter scored 98% in boards after joining Sree Vignan. Structured curriculum made the difference.',
  },
  {
    name: 'Latha Krishnan',
    relation: 'Parent of Twin Students',
    rating: 5,
    content:
      'Both my children rank in the top 10. The school balances academics with values beautifully.',
  },
  {
    name: 'Suresh Babu',
    relation: 'Alumni Parent - 2022 Batch',
    rating: 5,
    content:
      'My son cleared JEE Mains after graduating here. Strong foundation and discipline stayed with him.',
  },
  {
    name: 'Meena Kumari',
    relation: 'Parent of Class 9 Student',
    rating: 5,
    content:
      'My introverted child has blossomed into a confident young girl. The environment is warm and motivating.',
  },
  {
    name: 'Bhavani Prasad',
    relation: 'Parent of Class 5 Student',
    rating: 5,
    content:
      'Teachers notice every child closely. My son improved in reading, handwriting, and classroom participation.',
  },
  {
    name: 'Anitha Rani',
    relation: 'Parent of Nursery Student',
    rating: 5,
    content:
      'The early years program is joyful and caring. My daughter loves coming to school every morning.',
  },
  {
    name: 'Kiran Kumar',
    relation: 'Parent of Class 8 Student',
    rating: 5,
    content:
      'Discipline, academics, and communication with parents are all handled with impressive consistency.',
  },
  {
    name: 'Swapna Lakshmi',
    relation: 'Alumni Parent',
    rating: 5,
    content:
      'We trusted the school for both our children, and both received a strong academic and moral foundation.',
  },
  {
    name: 'Harish Chandra',
    relation: 'Parent of IIT Foundation Student',
    rating: 5,
    content:
      'The foundation coaching gave my son clarity, focus, and confidence in maths and science.',
  },
  {
    name: 'Sailaja Devi',
    relation: 'Parent of Class 6 Student',
    rating: 5,
    content:
      'The teachers are approachable and genuinely supportive. We always feel informed about our child’s progress.',
  },
];

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <article className="ts-card">
      <div className="ts-card-top">
        <div className="ts-quote-box">
          <Quote size={18} />
        </div>
        <div className="ts-stars">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} size={13} fill="currentColor" />
          ))}
        </div>
      </div>

      <p className="ts-content">{t.content}</p>

      <div className="ts-user">
        <div className="ts-avatar">{getInitials(t.name)}</div>
        <div>
          <p className="ts-name">{t.name}</p>
          <p className="ts-relation">{t.relation}</p>
        </div>
      </div>
    </article>
  );
}

function TestimonialRow({
  items,
  className,
}: {
  items: typeof TESTIMONIALS;
  className: string;
}) {
  const loopItems = [...items, ...items];

  return (
    <div className="ts-marquee">
      <div className={`ts-track ${className}`}>
        {loopItems.map((t, i) => (
          <TestimonialCard key={`${t.name}-${className}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const firstRow = TESTIMONIALS.slice(0, 6);
  const secondRow = TESTIMONIALS.slice(6);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Nunito:wght@400;500;600;700;800&display=swap');

        .ts * { box-sizing: border-box; }

        .ts {
          background: #f0ebe0;
          min-height: calc(100vh - 108px);
          padding: 20px 0 12px;
          font-family: 'Nunito', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .ts::before {
          content: '';
          position: absolute;
          top: -160px;
          right: -160px;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          border: 1.5px solid rgba(243,156,18,0.14);
          pointer-events: none;
        }

        .ts::after {
          content: '';
          position: absolute;
          bottom: -120px;
          left: -120px;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          border: 1.5px solid rgba(26,58,92,0.08);
          pointer-events: none;
        }

        .ts-inner {
          max-width: 1460px;
          margin: 0 auto;
          min-height: calc(100vh - 140px);
          padding: 0 12px;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .ts-header {
          text-align: center;
          margin-bottom: 18px;
        }

        .ts-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(243,156,18,0.12);
          border: 1px solid rgba(243,156,18,0.3);
          border-radius: 100px;
          padding: 5px 16px 5px 10px;
          margin-bottom: 12px;
        }

        .ts-eyebrow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #e67e22;
        }

        .ts-eyebrow span {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: #c0580a;
        }

        .ts-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(26px, 3.6vw, 38px);
          font-weight: 900;
          color: #1a3a5c;
          line-height: 1.15;
          margin: 0 0 10px;
        }

        .ts-heading em {
          font-style: normal;
          color: #e67e22;
        }

        .ts-heading-line {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
          margin: 10px auto 0;
        }

        .ts-heading-line .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #f39c12;
        }

        .ts-heading-line .line {
          width: 60px;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(to right, #f39c12, #e67e22);
        }

        .ts-sub {
          font-size: 14px;
          font-weight: 500;
          color: #7a6a55;
          max-width: 560px;
          margin: 12px auto 0;
          line-height: 1.55;
        }

        .ts-stack {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ts-marquee {
          overflow: hidden;
          position: relative;
          mask-image: linear-gradient(to right, transparent, black 2.5%, black 97.5%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 2.5%, black 97.5%, transparent);
        }

        .ts-track {
          display: flex;
          gap: 14px;
          width: max-content;
        }

        .ts-track-left {
          animation: ts-left 30s linear infinite;
        }

        .ts-track-right {
          animation: ts-right 30s linear infinite;
        }

        .ts-marquee:hover .ts-track {
          animation-play-state: paused;
        }

        .ts-card {
          width: 270px;
          flex-shrink: 0;
          background: #fff;
          border-radius: 20px;
          padding: 16px;
          border: 1px solid rgba(26,58,92,0.07);
          box-shadow: 0 16px 40px rgba(26,58,92,0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .ts-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 44px rgba(26,58,92,0.12);
          border-color: rgba(243,156,18,0.25);
        }

        .ts-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 10px;
        }

        .ts-quote-box {
          width: 34px;
          height: 34px;
          border-radius: 14px;
          background: linear-gradient(135deg, #fff8ee 0%, #fdebd0 100%);
          border: 1.5px solid rgba(243,156,18,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #e67e22;
        }

        .ts-stars {
          display: flex;
          gap: 3px;
          color: #f39c12;
          flex-shrink: 0;
        }

        .ts-content {
          font-size: 12px;
          font-weight: 500;
          color: #7a6a55;
          line-height: 1.55;
          margin: 0 0 12px;
          min-height: 72px;
        }

        .ts-user {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ts-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 11px;
          flex-shrink: 0;
        }

        .ts-name {
          font-family: 'Playfair Display', serif;
          font-size: 14px;
          font-weight: 800;
          color: #1a3a5c;
          margin: 0 0 2px;
          line-height: 1.2;
        }

        .ts-relation {
          font-size: 11px;
          font-weight: 600;
          color: #c0580a;
          margin: 0;
        }

        @keyframes ts-left {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 9px)); }
        }

        @keyframes ts-right {
          from { transform: translateX(calc(-50% - 9px)); }
          to { transform: translateX(0); }
        }

        @media (max-width: 768px) {
          .ts {
            min-height: auto;
            padding: 64px 0 72px;
          }

          .ts-inner {
            min-height: auto;
            padding: 0 16px;
          }

          .ts-card {
            width: 280px;
          }

          .ts-content {
            min-height: auto;
          }
        }
      `}</style>

      <section className="ts">
        <div className="ts-inner">
          <div className="ts-header">
            <div className="ts-eyebrow">
              <div className="ts-eyebrow-dot" />
              <span>Testimonials</span>
            </div>

            <h2 className="ts-heading">
              What Parents are saying about us 
            </h2>

            <div className="ts-heading-line">
              <div className="line" />
              <div className="dot" />
              <div className="line" />
            </div>

            <p className="ts-sub">
              Generations of parents and students continue to choose Sree Vignan for its care, discipline, and academic strength.
            </p>
          </div>

          <div className="ts-stack">
            <TestimonialRow items={firstRow} className="ts-track-left" />
            <TestimonialRow items={secondRow} className="ts-track-right" />
          </div>
        </div>
      </section>
    </>
  );
}
