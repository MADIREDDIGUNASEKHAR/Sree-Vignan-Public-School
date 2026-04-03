import Link from 'next/link';
import Image from 'next/image';

const leaders = [
  {
    name: 'Founder & Director Sir',
    role: 'Founder & Director',
    qualification: 'M.A., B.Ed. - Please replace with exact qualification',
    image: '/gallery/P.png',
    message:
      'Sree Vignan Public School was built with a clear purpose: to give children a disciplined, value-based, and future-ready education. We want every student who learns here to grow with confidence, responsibility, and strong moral character.',
  },
  {
    name: 'Principal Madam',
    role: 'Principal',
    qualification: 'M.Sc., B.Ed. - Please replace with exact qualification',
    image: '/gallery/V.png',
    message:
      'We warmly welcome every family to our school community. Our aim is to help each child feel guided, encouraged, and inspired so that learning becomes meaningful, joyful, and deeply connected to life.',
  },
];

type LeadershipSectionProps = {
  preview?: boolean;
};

export default function LeadershipSection({ preview = false }: LeadershipSectionProps) {
  return (
    <section
      id={preview ? 'leadership-preview' : 'leadership'}
      className="relative overflow-hidden"
      style={{
        background: preview ? '#f7f1e4' : '#f0ebe0',
        padding: preview ? '72px 24px' : '84px 24px',
      }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-110px',
          right: '-90px',
          width: 300,
          height: 300,
          borderRadius: '50%',
          border: '1.5px solid rgba(243,156,18,0.14)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-100px',
          left: '-90px',
          width: 260,
          height: 260,
          borderRadius: '50%',
          border: '1.5px solid rgba(26,58,92,0.08)',
        }}
      />

      <div className="container-safe relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{
              background: 'rgba(243,156,18,0.12)',
              border: '1px solid rgba(243,156,18,0.3)',
              color: '#c0580a',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ background: '#e67e22' }}
            />
            Leadership
          </span>
          <h2 className="text-heading-lg mb-4" style={{ color: '#1a3a5c' }}>
            Meet Our <span style={{ color: '#e67e22' }}>Leadership</span>
          </h2>
          <p className="text-subheading" style={{ color: '#7a6a55' }}>
            {preview
              ? 'A short introduction to the guiding vision of our Founder, Director, and Principal.'
              : 'The leadership of our school shares one commitment: to shape students with academic excellence, discipline, care, and strong values.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={leader.role}
              className="overflow-hidden rounded-[28px]"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(26,58,92,0.07)',
                boxShadow: '0 16px 40px rgba(26,58,92,0.08)',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] h-full">
                <div
                  className="relative min-h-[320px] md:min-h-full"
                  style={{ backgroundColor: '#f5eee4' }}
                >
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 240px"
                    className="object-cover object-top"
                    priority={preview && index === 0}
                  />
                </div>

                <div className="p-7 md:p-8">
                  <div className="mb-4">
                    <span
                      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        background: 'rgba(243,156,18,0.12)',
                        color: '#c0580a',
                      }}
                    >
                      {leader.role}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#1a3a5c' }}>
                    {leader.name}
                  </h3>

                  <p className="text-sm font-semibold mb-3" style={{ color: '#e67e22' }}>
                    {leader.qualification}
                  </p>

                  <p className="text-xs uppercase tracking-[0.18em] font-bold mb-3" style={{ color: '#b5490a' }}>
                    Message To Website Visitors
                  </p>

                  <p
                    className="text-base leading-8 mb-6"
                    style={{ color: '#7a6a55' }}
                  >
                    "{leader.message}"
                  </p>

                  {!preview && (
                    <div
                      className="rounded-2xl px-4 py-4"
                      style={{
                        background: 'linear-gradient(135deg, #fff8ee 0%, #f9f1e4 100%)',
                        border: '1px solid rgba(243,156,18,0.18)',
                      }}
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.18em] mb-2" style={{ color: '#b5490a' }}>
                        Why This Section Is Here
                      </p>
                      <p className="text-sm leading-7" style={{ color: '#7a6a55' }}>
                        Families often choose a school by its values as much as its results. This space helps visitors understand the people and purpose leading the school.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {preview && (
          <div className="text-center mt-10">
            <Link
              href="/about#leadership"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold"
              style={{
                background: '#e67e22',
                color: '#fff8ee',
                boxShadow: '0 10px 28px rgba(230,126,34,0.24)',
              }}
            >
              View Full Leadership Section
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
