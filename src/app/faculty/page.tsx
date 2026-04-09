import { Metadata } from 'next';
import { Award, Briefcase } from 'lucide-react';
import { FACULTY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Faculty & Staff | Sree Vignan Public School',
  description: 'Meet our experienced and dedicated faculty members.',
};

const facultyDescriptions: Record<string, string> = {
  Principal:
    'I believe Sree Vignan School builds confident, disciplined, and value-driven students who are prepared for every stage of life.',
  'Vice Principal':
    'What makes our school special is the balance of academic excellence, personal care, and a culture where every child feels encouraged to grow.',
  'Senior Teacher':
    'At Sree Vignan, we focus on strong fundamentals and clear guidance so students can learn with confidence and perform consistently.',
  Teacher:
    'I value the supportive environment here, where curiosity is welcomed and students are guided to understand concepts deeply.',
  'Sports Coordinator':
    'Our school gives equal importance to fitness, teamwork, and discipline, helping children grow stronger both inside and outside the classroom.',
  'Computer Science Teacher':
    'Sree Vignan helps students stay future-ready by combining technology, practical learning, and problem-solving skills from an early stage.',
};

export default function FacultyPage() {
  return (
    <>
      {/* Header */}
      <section
        className="section-padding pt-24"
        style={{
          background:
            'linear-gradient(135deg, #f0ebe0 0%, #f7f1e4 55%, #fffaf0 100%)',
        }}
      >
        <div className="container-safe text-center">
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
            Meet Our Team
          </span>
          <h1 className="text-heading-lg mb-4" style={{ color: '#1a3a5c' }}>
            Our Faculty &{' '}
            <span style={{ color: '#e67e22' }}>Staff</span>
          </h1>
          <p
            className="text-subheading max-w-3xl mx-auto"
            style={{ color: '#7a6a55' }}
          >
            Meet our experienced and dedicated team of educators
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section
        className="section-padding"
        style={{ background: '#f0ebe0' }}
      >
        <div className="container-safe">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FACULTY.map((member) => (
              <div
                key={member.id}
                className="transition-all duration-300 group overflow-hidden rounded-2xl"
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(26,58,92,0.07)',
                  boxShadow: '0 16px 40px rgba(26,58,92,0.08)',
                }}
              >
                {/* Photo */}
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white text-sm italic">Excellence in Education</p>
                  </div>
                </div>

                {/* Info */}
                <div className="px-6 pb-6">
                  <h3 className="text-xl font-bold mb-1" style={{ color: '#1a3a5c' }}>
                    {member.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase size={16} style={{ color: '#e67e22' }} />
                    <p className="text-sm font-semibold" style={{ color: '#e67e22' }}>
                      {member.position}
                    </p>
                  </div>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span style={{ color: '#7a6a55' }}>Subject:</span>
                      <span className="font-medium" style={{ color: '#1a3a5c' }}>{member.subject}</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: '#7a6a55' }}>Qualification:</span>
                      <span className="font-medium" style={{ color: '#1a3a5c' }}>{member.qualification}</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: '#7a6a55' }}>Experience:</span>
                      <span className="font-medium" style={{ color: '#1a3a5c' }}>{member.experience}</span>
                    </div>
                  </div>

                  <div
                    className="pt-4"
                    style={{ borderTop: '1px solid rgba(243,156,18,0.16)' }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Award size={16} style={{ color: '#f39c12' }} />
                      <p className="text-xs font-semibold" style={{ color: '#1a3a5c' }}>
                        Description:
                      </p>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: '#7a6a55' }}>
                      {facultyDescriptions[member.position] ??
                        'Sree Vignan School creates a caring environment where students learn with confidence, discipline, and purpose.'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
