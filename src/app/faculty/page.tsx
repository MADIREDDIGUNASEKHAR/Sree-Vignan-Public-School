import { Metadata } from 'next';
import { Award, Briefcase } from 'lucide-react';
import { FACULTY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Faculty & Staff | Sree Vignan Public School',
  description: 'Meet our experienced and dedicated faculty members.',
};

export default function FacultyPage() {
  return (
    <>
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-purple-100 to-white pt-24">
        <div className="container-safe text-center">
          <h1 className="text-heading-lg mb-4">Our Faculty & Staff</h1>
          <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
            Meet our experienced and dedicated team of educators
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="section-padding bg-white">
        <div className="container-safe">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FACULTY.map((member) => (
              <div
                key={member.id}
                className="card-premium hover:shadow-soft-xl transition-all duration-300 group overflow-hidden"
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
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase size={16} className="text-primary-purple" />
                    <p className="text-sm font-semibold text-primary-purple">
                      {member.position}
                    </p>
                  </div>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subject:</span>
                      <span className="font-medium text-gray-900">{member.subject}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Qualification:</span>
                      <span className="font-medium text-gray-900">{member.qualification}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Experience:</span>
                      <span className="font-medium text-gray-900">{member.experience}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-purple-100">
                    <Award size={16} className="text-accent-gold" />
                    <p className="text-xs text-gray-600">
                      Dedicated to student excellence
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
