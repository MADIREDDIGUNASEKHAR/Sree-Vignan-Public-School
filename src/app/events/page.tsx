import { Metadata } from 'next';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { EVENTS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'School Events | Sree Vignan Public School',
  description: 'View upcoming events and important dates in our school calendar.',
};

export default function EventsPage() {
  const upcomingEvents = EVENTS.filter(
    (event) => new Date(event.startDate) > new Date()
  );
  const pastEvents = EVENTS.filter(
    (event) => new Date(event.endDate) < new Date()
  );

  return (
    <>
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-purple-100 to-white pt-24">
        <div className="container-safe text-center">
          <h1 className="text-heading-lg mb-4">School Events & Calendar</h1>
          <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
            Important dates and upcoming events in our school
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="section-padding bg-white">
        <div className="container-safe max-w-4xl">
          {/* Upcoming Events */}
          <div className="mb-16">
            <h2 className="text-heading-md mb-8">📅 Upcoming Events</h2>
            <div className="space-y-6">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="card-premium border-l-4 border-primary-purple hover:shadow-soft-lg transition-all"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-primary-purple text-sm font-semibold">
                            {event.category}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {event.title}
                        </h3>

                        <p className="text-gray-600 mb-4">{event.description}</p>

                        <div className="space-y-2">
                          <div className="flex items-center gap-3 text-gray-600">
                            <Calendar size={18} className="text-primary-purple" />
                            <span>
                              {new Date(event.startDate).toLocaleDateString(
                                'en-US',
                                {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric',
                                }
                              )}
                              {event.endDate !== event.startDate && (
                                <>
                                  {' '}
                                  -{' '}
                                  {new Date(event.endDate).toLocaleDateString(
                                    'en-US',
                                    {
                                      month: 'short',
                                      day: 'numeric',
                                      year: 'numeric',
                                    }
                                  )}
                                </>
                              )}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600">
                            <MapPin size={18} className="text-accent-gold" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="card-premium text-center py-8">
                  <p className="text-gray-600">No upcoming events at the moment.</p>
                </div>
              )}
            </div>
          </div>

          {/* Past Events */}
          {pastEvents.length > 0 && (
            <div>
              <h2 className="text-heading-md mb-8 text-gray-600">📌 Recent Events</h2>
              <div className="space-y-4">
                {pastEvents.slice(0, 3).map((event) => (
                  <div
                    key={event.id}
                    className="card-premium border-l-4 border-accent-gold/50 opacity-75"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-gray-900">{event.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {event.description}
                        </p>
                      </div>
                      <span className="text-xs text-gray-500">
                        {new Date(event.startDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
