import { Metadata } from 'next';
import { Button } from '@/components/Button';
import { Heart, Lightbulb, Star, Shield } from 'lucide-react';
import { SCHOOL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us | Sree Vignan Public School',
  description: 'Learn about our school history, mission, vision, and educational approach.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-purple-100 to-white pt-24">
        <div className="container-safe text-center">
          <h1 className="text-heading-lg mb-4">About Sree Vignan Public School</h1>
          <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
            A leading educational institution committed to excellence and holistic development
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-safe">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="card-premium-lg">
              <div className="w-14 h-14 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Heart className="text-primary-purple" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To provide quality education that develops academic excellence, character, and values in every student, preparing them to be responsible citizens and leaders.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We focus on creating an environment where every child can learn, grow, and achieve their full potential.
              </p>
            </div>

            <div className="card-premium-lg">
              <div className="w-14 h-14 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Lightbulb className="text-primary-purple" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To become a leading educational institution known for academic excellence, character building, and development of socially responsible global citizens.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a school where learning is joyful, students are empowered, and education transforms lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-cream-light">
        <div className="container-safe">
          <h2 className="text-heading-lg text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Star, title: 'Excellence', desc: 'Striving for highest standards' },
              { icon: Heart, title: 'Integrity', desc: 'Honesty and ethical conduct' },
              { icon: Shield, title: 'Safety', desc: 'Safe and secure environment' },
              { icon: Lightbulb, title: 'Innovation', desc: 'Modern teaching methods' },
            ].map((value, i) => {
              const Icon = value.icon;
              return (
                <div key={i} className="card-premium text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Icon className="text-primary-purple" size={28} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-white">
        <div className="container-safe">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg text-center mb-8">Our Journey</h2>
            <div className="card-premium-lg space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Founded in {SCHOOL.foundedYear}, Sree Vignan Public School has been serving the community with dedication to quality education. Over the years, we have grown into one of the most trusted educational institutions in the region.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our commitment to academic excellence, discipline, and holistic development has earned us the trust of parents and appreciation of students. We continue to evolve and adapt to meet the needs of modern education while maintaining our core values.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we have over 1000 students and a team of 50+ dedicated teachers working together to create an environment of learning and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-purple to-purple-700 text-white">
        <div className="container-safe text-center">
          <h2 className="text-heading-lg mb-4">Join Our School Community</h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
            Be part of our journey towards excellence in education
          </p>
          <Button href="/contact" className="bg-accent-gold text-royal-navy hover:bg-yellow-400">
            Inquire About Admissions
          </Button>
        </div>
      </section>
    </>
  );
}
