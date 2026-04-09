import { Users, Heart, Shield, Star, BookOpen, Award, Lightbulb, Globe } from "lucide-react";

// ============================================================
// ✏️  EDIT YOUR CONTENT HERE
// ============================================================
const SECTION_DATA = {
  heading: "Why Choose Sree Vignan?",
  subheading:
    "We are committed to providing quality education and holistic development",
  cards: [
    {
      icon: "users",
      label: "01",
      title: "Experienced Teachers",
      description:
        "Qualified faculty with years of teaching experience and passion for education",
    },
    {
      icon: "heart",
      label: "02",
      title: "Holistic Development",
      description:
        "Academic excellence combined with personality and character development",
    },
    {
      icon: "shield",
      label: "03",
      title: "Safe & Secure",
      description:
        "Secure campus with strict discipline and student safety measures",
    },
    {
      icon: "star",
      label: "04",
      title: "Values & Discipline",
      description:
        "Focus on moral values, discipline, and social responsibility",
    },
  ],
};

const ICON_MAP = {
  users: Users,
  heart: Heart,
  shield: Shield,
  star: Star,
  book: BookOpen,
  award: Award,
  light: Lightbulb,
  globe: Globe,
};

export default function WhyChooseSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Nunito:wght@400;500;600;700;800&display=swap');

        .wcs * { box-sizing: border-box; }

        .wcs {
          background: #fdf6e8;
          padding: 80px 24px 90px;
          font-family: 'Nunito', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Subtle decorative rings */
        .wcs::before {
          content: '';
          position: absolute;
          top: -160px; right: -160px;
          width: 420px; height: 420px;
          border-radius: 50%;
          border: 1.5px solid rgba(124,58,237,0.12);
          pointer-events: none;
        }
        .wcs::after {
          content: '';
          position: absolute;
          bottom: -120px; left: -120px;
          width: 320px; height: 320px;
          border-radius: 50%;
          border: 1.5px solid rgba(212,175,55,0.12);
          pointer-events: none;
        }

        .wcs-inner {
          max-width: 1060px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Header */
        .wcs-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .wcs-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.85);
          border: 1px solid #d8c4f0;
          border-radius: 100px;
          padding: 5px 16px 5px 10px;
          margin-bottom: 18px;
        }

        .wcs-eyebrow-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #7C3AED;
        }

        .wcs-eyebrow span {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: #6b21a8;
        }

        .wcs-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 900;
          color: #111827;
          line-height: 1.15;
          margin: 0 0 14px;
        }

        .wcs-heading em {
          font-style: normal;
          color: #7C3AED;
          position: relative;
        }

        .wcs-sub {
          font-size: 16px;
          font-weight: 500;
          color: #6b7280;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Grid */
        .wcs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        @media (max-width: 640px) {
          .wcs-grid { grid-template-columns: 1fr; }
        }

        /* Card */
        .wcs-card {
          background: #fff;
          border-radius: 20px;
          padding: 28px 26px;
          border: 1px solid rgba(124,58,237,0.12);
          display: flex;
          gap: 18px;
          align-items: flex-start;
          position: relative;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          cursor: default;
        }

        .wcs-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 4px; height: 100%;
          background: linear-gradient(to bottom, #7C3AED, #A855F7);
          border-radius: 20px 0 0 20px;
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .wcs-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(124,58,237,0.14);
          border-color: rgba(124,58,237,0.24);
        }

        .wcs-card:hover::before {
          opacity: 1;
        }

        /* Number label */
        .wcs-number {
          position: absolute;
          top: 18px; right: 22px;
          font-family: 'Playfair Display', serif;
          font-size: 42px;
          font-weight: 900;
          color: rgba(124,58,237,0.08);
          line-height: 1;
          pointer-events: none;
          transition: color 0.25s ease;
        }

        .wcs-card:hover .wcs-number {
          color: rgba(124,58,237,0.14);
        }

        /* Icon box */
        .wcs-icon-box {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
          border: 1.5px solid rgba(124,58,237,0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }

        .wcs-card:hover .wcs-icon-box {
          background: linear-gradient(135deg, #7C3AED 0%, #A855F7 100%);
          border-color: transparent;
          transform: rotate(-5deg) scale(1.08);
        }

        .wcs-icon-box svg {
          color: #7C3AED;
          transition: color 0.25s ease;
          width: 22px; height: 22px;
        }

        .wcs-card:hover .wcs-icon-box svg {
          color: #fff;
        }

        /* Text */
        .wcs-card-body { flex: 1; min-width: 0; }

        .wcs-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-weight: 800;
          color: #111827;
          margin: 0 0 8px;
          line-height: 1.3;
        }

        .wcs-card-desc {
          font-size: 13.5px;
          font-weight: 500;
          color: #6b7280;
          line-height: 1.65;
          margin: 0;
        }

        /* Divider line accent under heading */
        .wcs-heading-line {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
          margin: 16px auto 0;
        }
        .wcs-heading-line .dot { width:6px;height:6px;border-radius:50%;background:#7C3AED; }
        .wcs-heading-line .line { width:60px;height:2px;border-radius:2px;background:linear-gradient(to right,#7C3AED,#A855F7); }
      `}</style>

      <section className="wcs" id="why-choose">
        <div className="wcs-inner">

          {/* Header */}
          <div className="wcs-header">
            <div className="wcs-eyebrow">
              <div className="wcs-eyebrow-dot" />
              <span>Our Promise to You</span>
            </div>

            <h2 className="wcs-heading">
              Why Choose <em>Sree Vignan?</em>
            </h2>

            <div className="wcs-heading-line">
              <div className="line" />
              <div className="dot" />
              <div className="line" />
            </div>

            <p className="wcs-sub" style={{ marginTop: 18 }}>
              {SECTION_DATA.subheading}
            </p>
          </div>

          {/* Cards */}
          <div className="wcs-grid">
            {SECTION_DATA.cards.map((card, i) => {
              const Icon = ICON_MAP[card.icon] || Star;
              return (
                <div className="wcs-card" key={i}>
                  <div className="wcs-number">{card.label}</div>
                  <div className="wcs-icon-box">
                    <Icon />
                  </div>
                  <div className="wcs-card-body">
                    <h3 className="wcs-card-title">{card.title}</h3>
                    <p className="wcs-card-desc">{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
