import { Metadata } from 'next';
import { Users, Trophy, Zap } from 'lucide-react';
import { CLUBS_AND_SPORTS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Clubs & Sports | Sree Vignan Public School',
  description: 'Explore clubs, sports teams, and activities available for students.',
};

const typeIcons: { [key: string]: React.ReactNode } = {
  'Sports': <Trophy size={24} className="text-primary-purple" />,
  'Academic': <Zap size={24} className="text-primary-purple" />,
  'Arts': <Users size={24} className="text-primary-purple" />,
  'Tech': <Zap size={24} className="text-primary-purple" />,
};

export default function ClubsPage() {
  const sports = CLUBS_AND_SPORTS.filter((item) => item.type === 'Sports');
  const academics = CLUBS_AND_SPORTS.filter((item) => item.type === 'Academic');
  const arts = CLUBS_AND_SPORTS.filter((item) => item.type === 'Arts');
  const tech = CLUBS_AND_SPORTS.filter((item) => item.type === 'Tech');

  const categories = [
    { name: 'Sports', items: sports, color: 'from-red-500' },
    { name: 'Academics', items: academics, color: 'from-blue-500' },
    { name: 'Arts & Culture', items: arts, color: 'from-pink-500' },
    { name: 'Technology', items: tech, color: 'from-green-500' },
  ];

  return (
    <>
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-purple-100 to-white pt-24">
        <div className="container-safe text-center">
          <h1 className="text-heading-lg mb-4">Clubs & Sports</h1>
          <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
            Discover our diverse clubs and sports programs for student development
          </p>
        </div>
      </section>

      {/* Clubs & Sports */}
      <section className="section-padding bg-white">
        <div className="container-safe">
          {categories.map((category) => (
            <div key={category.name} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-1 h-8 bg-gradient-to-b ${category.color} to-transparent`}></div>
                <h2 className="text-heading-md text-gray-900">{category.name}</h2>
              </div>

              {category.items.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className="card-premium hover:shadow-soft-xl transition-all duration-300 group overflow-hidden"
                    >
                      {/* Image */}
                      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <p className="text-white text-center font-semibold">
                            Join Our Team
                          </p>
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          {typeIcons[item.type]}
                          <span className="text-xs font-semibold text-primary-purple uppercase">
                            {item.type}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {item.name}
                        </h3>

                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="pt-4 border-t border-purple-100">
                          <p className="text-sm text-gray-700">
                            <span className="font-semibold">Coordinator:</span>{' '}
                            {item.coordinator}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="card-premium text-center py-8">
                  <p className="text-gray-600">No clubs in this category yet.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-cream-light">
        <div className="container-safe">
          <h2 className="text-heading-md text-center mb-12">Benefits of Joining Clubs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Skill Development',
                desc: 'Learn new skills and enhance existing talents',
              },
              {
                title: 'Leadership',
                desc: 'Develop leadership and teamwork abilities',
              },
              {
                title: 'Confidence',
                desc: 'Build confidence through participation',
              },
              {
                title: 'Network',
                desc: 'Make new friends with similar interests',
              },
            ].map((benefit, i) => (
              <div key={i} className="card-premium text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
