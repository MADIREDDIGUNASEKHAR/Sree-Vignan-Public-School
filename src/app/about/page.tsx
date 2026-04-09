import { Metadata } from 'next';
import { Button } from '@/components/Button';
import { SCHOOL } from '@/lib/constants';
import LeadershipSection from '@/components/LeadershipSection';

export const metadata: Metadata = {
  title: 'About Us | Sree Vignan Public School',
  description: 'Learn about our school history, mission, vision, and educational approach.',
};

const ABOUT_FOUNDED_YEAR = '1992';

/* ─── Inline SVG icons (replaces lucide to avoid import issues) ─── */
const HeartIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#e67e22" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const LightbulbIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#e67e22" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/>
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
  </svg>
);
const StarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e67e22" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const ShieldIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e67e22" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

/* ─── Shared decorative bg rings ─── */
const BgRings = ({ top, right, bottom, left, color = '#1a3a5c', sizes = [260, 180] }: any) => (
  <svg aria-hidden="true" style={{ position: 'absolute', top, right, bottom, left, pointerEvents: 'none', opacity: 0.055 }}
    width="340" height="340" viewBox="0 0 340 340" fill="none">
    {sizes.map((r: number, i: number) => <circle key={i} cx="170" cy="170" r={r} stroke={color} strokeWidth="1"/>)}
  </svg>
);

/* ─── Section badge ─── */
const Badge = ({ children }: { children: React.ReactNode }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '6px 18px', borderRadius: 999,
    background: 'rgba(243,156,18,0.10)', border: '1px solid rgba(243,156,18,0.28)',
    color: '#b5490a', fontSize: 11, fontWeight: 700,
    letterSpacing: '0.14em', textTransform: 'uppercase' as const,
    fontFamily: 'var(--font-sans)', marginBottom: 20,
  }}>
    <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#e67e22',
      boxShadow: '0 0 0 3px rgba(230,126,34,0.22)', display: 'inline-block' }}/>
    {children}
  </span>
);

/* ─── Wavy underline ─── */
const WavyUnderline = () => (
  <svg style={{ position: 'absolute', bottom: -6, left: 0, width: '100%' }}
    height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
    <path d="M0 6 Q50 1 100 5 Q150 9 200 4" stroke="#e67e22" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.55"/>
  </svg>
);

/* ─── Star divider ─── */
const StarDivider = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14, maxWidth: 360, margin: '0 auto 52px', opacity: 0.3 }}>
    <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #1a3a5c)' }}/>
    <svg width="16" height="16" viewBox="0 0 20 20"><path d="M10 2l1.5 5h5l-4 3 1.5 5L10 12l-4 3 1.5-5-4-3h5z" fill="#e67e22"/></svg>
    <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #1a3a5c, transparent)' }}/>
  </div>
);

/* ─── Icon badge for cards ─── */
const IconBadge = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    width: 60, height: 60, borderRadius: 16,
    background: 'linear-gradient(135deg, #fff8ee 0%, #fdebd0 100%)',
    border: '1.5px solid rgba(243,156,18,0.28)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: 20,
    boxShadow: '0 4px 14px rgba(230,126,34,0.10)',
  }}>
    {children}
  </div>
);

/* ─── White card ─── */
const Card = ({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{
    background: '#ffffff', borderRadius: 20, padding: '36px 32px',
    border: '1px solid rgba(26,58,92,0.07)',
    boxShadow: '0 8px 32px rgba(26,58,92,0.07)',
    ...style,
  }}>
    {children}
  </div>
);

export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
        .about-page { font-family: 'Lora', Georgia, serif; }
        .about-page .sans { font-family: 'DM Sans', sans-serif; }
        .about-page .val-card { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        .about-page .val-card:hover { transform: translateY(-5px); box-shadow: 0 20px 48px rgba(26,58,92,0.13) !important; }
        .about-page .mission-card { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        .about-page .mission-card:hover { transform: translateY(-4px); box-shadow: 0 20px 48px rgba(26,58,92,0.12) !important; }
      `}</style>

      <div className="about-page">

        {/* ══ HERO ══════════════════════════════════════════════════════ */}
        <section style={{
          background: 'linear-gradient(135deg, #f0ebe0 0%, #f7f1e4 55%, #fffaf0 100%)',
          padding: '104px 24px 80px', position: 'relative', overflow: 'hidden', textAlign: 'center',
        }}>
          {/* School building SVG — decorative */}
          <svg aria-hidden="true" style={{ position: 'absolute', top: 28, left: 32, opacity: 0.08, pointerEvents: 'none' }}
            width="100" height="88" viewBox="0 0 100 88" fill="none">
            <rect x="16" y="34" width="68" height="50" rx="1" stroke="#1a3a5c" strokeWidth="2"/>
            <polygon points="50,5 9,36 91,36" stroke="#1a3a5c" strokeWidth="2" fill="none" strokeLinejoin="round"/>
            <rect x="38" y="58" width="24" height="26" rx="1" stroke="#1a3a5c" strokeWidth="1.5"/>
            <rect x="22" y="46" width="16" height="13" rx="1" stroke="#1a3a5c" strokeWidth="1.2"/>
            <rect x="62" y="46" width="16" height="13" rx="1" stroke="#1a3a5c" strokeWidth="1.2"/>
            <line x1="50" y1="5" x2="50" y2="0" stroke="#1a3a5c" strokeWidth="1.5"/>
            <rect x="47" y="0" width="6" height="5" stroke="#1a3a5c" strokeWidth="1"/>
          </svg>

          {/* Open book SVG — decorative */}
          <svg aria-hidden="true" style={{ position: 'absolute', bottom: 24, right: 48, opacity: 0.08, pointerEvents: 'none' }}
            width="80" height="62" viewBox="0 0 80 62" fill="none">
            <path d="M40 10 C40 10 22 5 4 10 L4 54 C22 49 40 54 40 54" stroke="#1a3a5c" strokeWidth="2" fill="none" strokeLinejoin="round"/>
            <path d="M40 10 C40 10 58 5 76 10 L76 54 C58 49 40 54 40 54" stroke="#1a3a5c" strokeWidth="2" fill="none" strokeLinejoin="round"/>
            <line x1="40" y1="10" x2="40" y2="54" stroke="#1a3a5c" strokeWidth="1.5"/>
            <line x1="16" y1="24" x2="34" y2="22" stroke="#1a3a5c" strokeWidth="1" opacity="0.6"/>
            <line x1="16" y1="32" x2="34" y2="30" stroke="#1a3a5c" strokeWidth="1" opacity="0.6"/>
            <line x1="16" y1="40" x2="34" y2="38" stroke="#1a3a5c" strokeWidth="1" opacity="0.6"/>
            <line x1="46" y1="22" x2="64" y2="24" stroke="#1a3a5c" strokeWidth="1" opacity="0.6"/>
            <line x1="46" y1="30" x2="64" y2="32" stroke="#1a3a5c" strokeWidth="1" opacity="0.6"/>
            <line x1="46" y1="38" x2="64" y2="40" stroke="#1a3a5c" strokeWidth="1" opacity="0.6"/>
          </svg>

          {/* Concentric arcs top-right */}
          <svg aria-hidden="true" style={{ position: 'absolute', top: 0, right: 0, opacity: 0.07, pointerEvents: 'none' }}
            width="320" height="320" viewBox="0 0 320 320" fill="none">
            <circle cx="320" cy="0" r="240" stroke="#1a3a5c" strokeWidth="1"/>
            <circle cx="320" cy="0" r="170" stroke="#1a3a5c" strokeWidth="1"/>
            <circle cx="320" cy="0" r="100" stroke="#e67e22" strokeWidth="1"/>
          </svg>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <Badge>About Us</Badge>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 700, color: '#1a3a5c', margin: '0 0 18px', lineHeight: 1.15 }}>
              About Sree Vignan{' '}
              <span style={{ color: '#e67e22', position: 'relative', display: 'inline-block' }}>
                Public School
                <WavyUnderline />
              </span>
            </h1>
            <p style={{ fontSize: 18, color: '#7a6a55', maxWidth: 560, margin: '0 auto', lineHeight: 1.75 }}>
              A leading educational institution committed to excellence and holistic development
            </p>

            {/* Quick stats row */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginTop: 48, flexWrap: 'wrap' as const }}>
              {[
                { n: '1000+', l: 'Students' },
                { n: '50+', l: 'Teachers' },
                { n: '34+', l: 'Years' },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: 32, fontWeight: 700, color: '#e67e22', margin: 0, lineHeight: 1 }}>{s.n}</p>
                  <p className="sans" style={{ fontSize: 12, color: '#7a6a55', margin: '4px 0 0', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ MISSION & VISION ══════════════════════════════════════════ */}
        <section style={{ background: '#f0ebe0', padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
          <BgRings bottom={-100} left={-80} sizes={[200, 130]} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <Badge>Our Purpose</Badge>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#1a3a5c', margin: 0 }}>
                Mission &amp; Vision
              </h2>
            </div>
            <StarDivider />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
              {/* Mission */}
              <div className="mission-card" style={{
                background: '#fff', borderRadius: 20, padding: '36px 32px',
                border: '1px solid rgba(26,58,92,0.07)', boxShadow: '0 8px 32px rgba(26,58,92,0.07)',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* corner arc */}
                <svg aria-hidden="true" style={{ position: 'absolute', top: 0, right: 0, opacity: 0.07 }}
                  width="90" height="90" viewBox="0 0 90 90" fill="none">
                  <circle cx="90" cy="0" r="70" stroke="#e67e22" strokeWidth="1.5"/>
                  <circle cx="90" cy="0" r="45" stroke="#e67e22" strokeWidth="1"/>
                </svg>
                <IconBadge><HeartIcon /></IconBadge>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#1a3a5c', marginBottom: 14 }}>Our Mission</h2>
                <p style={{ color: '#7a6a55', lineHeight: 1.8, marginBottom: 14 }}>
                  To provide quality education that develops academic excellence, character, and values in every student, preparing them to be responsible citizens and leaders.
                </p>
                <p style={{ color: '#7a6a55', lineHeight: 1.8, margin: 0 }}>
                  We focus on creating an environment where every child can learn, grow, and achieve their full potential.
                </p>
                <div style={{ marginTop: 24, width: 40, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, #e67e22, rgba(230,126,34,0.2))' }}/>
              </div>

              {/* Vision */}
              <div className="mission-card" style={{
                background: '#fff', borderRadius: 20, padding: '36px 32px',
                border: '1px solid rgba(26,58,92,0.07)', boxShadow: '0 8px 32px rgba(26,58,92,0.07)',
                position: 'relative', overflow: 'hidden',
              }}>
                <svg aria-hidden="true" style={{ position: 'absolute', top: 0, right: 0, opacity: 0.07 }}
                  width="90" height="90" viewBox="0 0 90 90" fill="none">
                  <circle cx="90" cy="0" r="70" stroke="#e67e22" strokeWidth="1.5"/>
                  <circle cx="90" cy="0" r="45" stroke="#e67e22" strokeWidth="1"/>
                </svg>
                <IconBadge><LightbulbIcon /></IconBadge>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#1a3a5c', marginBottom: 14 }}>Our Vision</h2>
                <p style={{ color: '#7a6a55', lineHeight: 1.8, marginBottom: 14 }}>
                  To become a leading educational institution known for academic excellence, character building, and development of socially responsible global citizens.
                </p>
                <p style={{ color: '#7a6a55', lineHeight: 1.8, margin: 0 }}>
                  We envision a school where learning is joyful, students are empowered, and education transforms lives.
                </p>
                <div style={{ marginTop: 24, width: 40, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, #e67e22, rgba(230,126,34,0.2))' }}/>
              </div>
            </div>
          </div>
        </section>

        {/* ══ CORE VALUES ═══════════════════════════════════════════════ */}
        <LeadershipSection />

        <section style={{ background: '#f7f1e4', padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
          <BgRings top={-80} right={-80} color="#e67e22" sizes={[200, 130]} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <Badge>What We Stand For</Badge>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#1a3a5c', margin: 0 }}>
                Our Core <span style={{ color: '#e67e22' }}>Values</span>
              </h2>
            </div>
            <StarDivider />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 20 }}>
              {[
                { Icon: StarIcon,     title: 'Excellence',  desc: 'Striving for the highest standards in every endeavour' },
                { Icon: HeartIcon,    title: 'Integrity',   desc: 'Honesty and ethical conduct in all that we do' },
                { Icon: ShieldIcon,   title: 'Safety',      desc: 'A safe, secure, and nurturing environment for all' },
                { Icon: LightbulbIcon,title: 'Innovation',  desc: 'Modern, creative teaching methods for today\'s learners' },
              ].map(({ Icon, title, desc }, i) => (
                <div key={i} className="val-card" style={{
                  textAlign: 'center', borderRadius: 20, padding: '32px 24px',
                  background: '#fff',
                  border: '1px solid rgba(26,58,92,0.07)',
                  boxShadow: '0 8px 28px rgba(26,58,92,0.07)',
                  position: 'relative', overflow: 'hidden',
                }}>
                  {/* Corner accent */}
                  <svg aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: 0, opacity: 0.06 }}
                    width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="0" cy="70" r="55" stroke="#1a3a5c" strokeWidth="1.2"/>
                    <circle cx="0" cy="70" r="30" stroke="#1a3a5c" strokeWidth="1"/>
                  </svg>

                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
                    <div style={{
                      width: 58, height: 58, borderRadius: 14,
                      background: 'linear-gradient(135deg, #fff8ee 0%, #fdebd0 100%)',
                      border: '1.5px solid rgba(243,156,18,0.28)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 4px 14px rgba(230,126,34,0.10)',
                    }}>
                      <Icon />
                    </div>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1a3a5c', marginBottom: 8 }}>{title}</h3>
                  <p className="sans" style={{ fontSize: 13.5, color: '#7a6a55', margin: 0, lineHeight: 1.65 }}>{desc}</p>

                  {/* Index dot */}
                  <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', gap: 4 }}>
                    {[0,1,2,3].map(j => (
                      <span key={j} style={{
                        width: j === i ? 16 : 5, height: 5, borderRadius: 3,
                        background: j === i ? '#e67e22' : 'rgba(230,126,34,0.2)',
                        transition: 'width 0.2s',
                        display: 'inline-block',
                      }}/>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ JOURNEY / HISTORY ═════════════════════════════════════════ */}
        <section style={{ background: '#f0ebe0', padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
          <BgRings bottom={-80} right={-60} sizes={[220, 150]} />

          <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <Badge>Since {ABOUT_FOUNDED_YEAR}</Badge>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#1a3a5c', margin: 0 }}>
                Our <span style={{ color: '#e67e22' }}>Journey</span>
              </h2>
            </div>
            <StarDivider />

            <div style={{
              background: '#fff', borderRadius: 20, padding: '40px 36px',
              border: '1px solid rgba(26,58,92,0.07)',
              boxShadow: '0 8px 32px rgba(26,58,92,0.07)',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Left accent bar */}
              <div style={{
                position: 'absolute', left: 0, top: 32, bottom: 32, width: 4, borderRadius: 2,
                background: 'linear-gradient(180deg, #e67e22 0%, rgba(230,126,34,0.15) 100%)',
              }}/>

              {/* Decorative quote mark */}
              <svg aria-hidden="true" style={{ position: 'absolute', top: 20, right: 28, opacity: 0.06 }}
                width="60" height="50" viewBox="0 0 60 50" fill="#1a3a5c">
                <path d="M0 50V28C0 12.5 8 4 24 0l4 6C18 8.5 14 14 14 22h10v28H0zm32 0V28C32 12.5 40 4 56 0l4 6C50 8.5 46 14 46 22h10v28H32z"/>
              </svg>

              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 18 }}>
                {[
                  `Founded in ${ABOUT_FOUNDED_YEAR}, Sree Vignan Public School has been serving the community with dedication to quality education. Over the years, we have grown into one of the most trusted educational institutions in the region.`,
                  `Our commitment to academic excellence, discipline, and holistic development has earned us the trust of parents and appreciation of students. We continue to evolve and adapt to meet the needs of modern education while maintaining our core values.`,
                  `Today, we have over 1000 students and a team of 50+ dedicated teachers working together to create an environment of learning and growth.`,
                ].map((para, i) => (
                  <p key={i} style={{ color: '#7a6a55', lineHeight: 1.85, margin: 0, fontSize: 15.5 }}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Timeline dots row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginTop: 32 }}>
                {[ABOUT_FOUNDED_YEAR, '2000', '2010', '2020', 'Today'].map((yr, i, arr) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', flex: i < arr.length - 1 ? 1 : 0 }}>
                    <div style={{ textAlign: 'center' as const }}>
                      <div style={{
                        width: i === arr.length - 1 ? 14 : 10, height: i === arr.length - 1 ? 14 : 10,
                        borderRadius: '50%',
                        background: i === arr.length - 1 ? '#e67e22' : 'rgba(230,126,34,0.35)',
                        border: i === arr.length - 1 ? '2px solid #e67e22' : '1.5px solid rgba(230,126,34,0.5)',
                      }}/>
                      <p className="sans" style={{ fontSize: 10, color: '#7a6a55', margin: '6px 0 0', fontWeight: 600 }}>{yr}</p>
                    </div>
                    {i < arr.length - 1 && (
                      <div style={{ flex: 1, height: 1.5, background: 'linear-gradient(90deg, rgba(230,126,34,0.5), rgba(230,126,34,0.2))', margin: '0 4px 14px' }}/>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ CTA ═══════════════════════════════════════════════════════ */}
        <section style={{
          background: 'linear-gradient(135deg, #1a3a5c 0%, #244a70 100%)',
          padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden',
        }}>
          {/* Decorative arcs */}
          <svg aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.07, pointerEvents: 'none' }}
            width="280" height="280" viewBox="0 0 280 280" fill="none">
            <circle cx="0" cy="0" r="200" stroke="#fff" strokeWidth="1"/>
            <circle cx="0" cy="0" r="130" stroke="#fff" strokeWidth="1"/>
          </svg>
          <svg aria-hidden="true" style={{ position: 'absolute', bottom: 0, right: 0, opacity: 0.07, pointerEvents: 'none' }}
            width="240" height="240" viewBox="0 0 240 240" fill="none">
            <circle cx="240" cy="240" r="180" stroke="#fff" strokeWidth="1"/>
            <circle cx="240" cy="240" r="110" stroke="#e67e22" strokeWidth="1"/>
          </svg>

          <div style={{ position: 'relative', zIndex: 2 }}>
            {/* Mortarboard SVG */}
            <svg style={{ marginBottom: 20, display: 'block', margin: '0 auto 20px' }}
              width="48" height="42" viewBox="0 0 48 42" fill="none">
              <polygon points="24,4 46,14 24,24 2,14" stroke="rgba(255,248,238,0.7)" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
              <path d="M10 19v12c0 4 6 7 14 7s14-3 14-7V19" stroke="rgba(255,248,238,0.7)" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
              <line x1="46" y1="14" x2="46" y2="28" stroke="rgba(255,248,238,0.55)" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="46" cy="30" r="2.5" fill="rgba(255,248,238,0.55)"/>
            </svg>

            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700, color: '#fff8ee', margin: '0 0 14px' }}>
              Join Our School Community
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,248,238,0.8)', maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.7 }}>
              Be part of our journey towards excellence in education
            </p>
            <Button
              href="/contact"
              style={{ background: '#e67e22', color: '#fff8ee', padding: '14px 36px', borderRadius: 12,
                fontWeight: 700, fontSize: 15, display: 'inline-block', textDecoration: 'none',
                boxShadow: '0 8px 28px rgba(230,126,34,0.35)' }}
            >
              Inquire About Admissions
            </Button>
          </div>
        </section>

      </div>
    </>
  );
}
