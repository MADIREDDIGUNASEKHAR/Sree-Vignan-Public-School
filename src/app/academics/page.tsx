import { Metadata } from 'next';
import { BookOpen, Target, CheckCircle, Users } from 'lucide-react';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Academics | Sree Vignan Public School',
  description: 'Learn about our curriculum, teaching methodology, and academic approach.',
};

export default function AcademicsPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-br from-purple-100 to-white pt-24">
        <div className="container-safe text-center">
          <h1 className="text-heading-lg mb-4">Our Academics</h1>
          <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
            Comprehensive curriculum with focus on academic excellence and skill development
          </p>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding bg-white">
        <div className="container-safe">
          <h2 className="text-heading-lg text-center mb-12">Curriculum Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Primary Education (Classes 1-5)',
                subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Arts', 'Physical Education'],
              },
              {
                title: 'Secondary Education (Classes 6-10)',
                subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Sanskrit', 'Computer Science'],
              },
            ].map((level, i) => (
              <div key={i} className="card-premium-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{level.title}</h3>
                <ul className="space-y-3">
                  {level.subjects.map((subject, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-primary-purple flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="section-padding bg-cream-light">
        <div className="container-safe">
          <h2 className="text-heading-lg text-center mb-12">Teaching Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: 'Activity-Based Learning', desc: 'Interactive and practical learning methods' },
              { icon: BookOpen, title: 'Smart Classes', desc: 'Digital learning with interactive boards' },
              { icon: Users, title: 'Small Batches', desc: 'Personalized attention to each student' },
              { icon: CheckCircle, title: 'Regular Assessment', desc: 'Continuous evaluation and feedback' },
            ].map((method, i) => {
              const Icon = method.icon;
              return (
                <div key={i} className="card-premium text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Icon className="text-primary-purple" size={28} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 text-sm">{method.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Examination */}
      <section className="section-padding bg-white">
        <div className="container-safe">
          <h2 className="text-heading-lg text-center mb-12">Examination System</h2>
          <div className="max-w-3xl mx-auto card-premium-lg">
            <div className="space-y-6">
              <div className="border-l-4 border-primary-purple pl-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Continuous Assessment</h3>
                <p className="text-gray-600">Regular tests, assignments, and projects throughout the year</p>
              </div>
              <div className="border-l-4 border-primary-purple pl-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Periodic Exams</h3>
                <p className="text-gray-600">Half-yearly and annual examinations following official board patterns</p>
              </div>
              <div className="border-l-4 border-primary-purple pl-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Co-curricular Assessment</h3>
                <p className="text-gray-600">Evaluation of sports, arts, and other activities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-purple to-purple-700 text-white">
        <div className="container-safe text-center">
          <h2 className="text-heading-lg mb-4">Want to Know More?</h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
            Contact us for detailed information about our academic programs
          </p>
          <Button href="/contact" className="bg-accent-gold text-royal-navy hover:bg-yellow-400">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}
