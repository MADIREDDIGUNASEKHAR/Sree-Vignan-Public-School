import { Metadata } from 'next';
import { Calendar, User } from 'lucide-react';
import { NEWS_POSTS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'News & Updates | Sree Vignan Public School',
  description: 'Read latest news, achievements, and updates from Sree Vignan Public School.',
};

export default function NewsPage() {
  return (
    <>
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-purple-100 to-white pt-24">
        <div className="container-safe text-center">
          <h1 className="text-heading-lg mb-4">School News & Updates</h1>
          <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
            Latest news, achievements, and updates from our school
          </p>
        </div>
      </section>

      {/* News Posts */}
      <section className="section-padding bg-white">
        <div className="container-safe">
          <div className="max-w-4xl mx-auto space-y-8">
            {NEWS_POSTS.map((post) => (
              <article
                key={post.id}
                className="card-premium-lg hover:shadow-soft-xl transition-all duration-300 border border-purple-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Image */}
                  <div className="md:col-span-1">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2">
                    <div className="flex gap-2 mb-3">
                      <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-primary-purple text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary-purple transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                    </div>

                    <button className="mt-4 inline-flex items-center text-primary-purple font-semibold hover:gap-2 transition-all">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
