import { Metadata } from 'next';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
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
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-28 pb-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,58,92,0.58), rgba(26,58,92,0.58)), url('/gallery/Events_Header.png')",
          backgroundPosition: 'center 22%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Decorative large text watermark */}
        <span
          aria-hidden
          className="pointer-events-none select-none absolute -bottom-6 left-1/2 -translate-x-1/2 text-[clamp(6rem,18vw,14rem)] font-black leading-none tracking-tighter whitespace-nowrap"
          style={{ color: 'rgba(255,255,255,0.04)' }}
        >
          CALENDAR
        </span>

        {/* Diagonal accent stripe */}
        <div
          className="absolute top-0 right-0 w-1/3 h-full opacity-10"
          style={{
            background:
              'repeating-linear-gradient(55deg, #e67e22 0px, #e67e22 1px, transparent 1px, transparent 28px)',
          }}
        />

        <div className="container-safe relative z-10 text-center">
          <span
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            style={{
              background: 'rgba(230,126,34,0.18)',
              border: '1px solid rgba(230,126,34,0.4)',
              color: '#f39c12',
              letterSpacing: '0.18em',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse inline-block"
              style={{ background: '#e67e22' }}
            />
            School Calendar
          </span>

          <h1
            className="font-black leading-none mb-5"
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 5rem)',
              color: '#fffaf0',
              letterSpacing: '-0.02em',
            }}
          >
            Events &amp;{' '}
            <span style={{ color: '#fffaf0' }}>Highlights</span>
          </h1>

          <p
            className="max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: 'rgba(255,250,240,0.6)' }}
          >
            Important dates, celebrations, and milestones across the academic year
          </p>
        </div>
      </section>

      {/* ── Upcoming Events — Timeline Layout ── */}
      <section
        className="section-padding"
        style={{ background: '#f0ebe0' }}
      >
        <div className="container-safe max-w-5xl">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-12">
            <span
              className="text-xs font-black tracking-[0.22em] uppercase"
              style={{ color: '#e67e22' }}
            >
              Upcoming
            </span>
            <div className="flex-1 h-px" style={{ background: 'rgba(230,126,34,0.25)' }} />
          </div>

          {/* Timeline */}
          {upcomingEvents.length > 0 ? (
            <div className="relative">
              {/* Vertical spine */}
              <div
                className="absolute left-[7.5rem] top-0 bottom-0 w-px hidden md:block"
                style={{ background: 'rgba(230,126,34,0.2)' }}
              />

              <div className="space-y-8">
                {upcomingEvents.map((event, i) => {
                  const start = new Date(event.startDate);
                  const day   = start.toLocaleDateString('en-US', { day: '2-digit' });
                  const mon   = start.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
                  const isMulti = event.endDate !== event.startDate;

                  return (
                    <div
                      key={event.id}
                      className="flex gap-0 md:gap-10 group"
                      style={{ animationDelay: `${i * 80}ms` }}
                    >
                      {/* Date stamp */}
                      <div className="hidden md:flex flex-col items-center shrink-0 w-24">
                        <div
                          className="relative z-10 w-16 h-16 rounded-2xl flex flex-col items-center justify-center shadow-lg transition-transform group-hover:-translate-y-0.5"
                          style={{
                            background: 'linear-gradient(135deg, #e67e22, #c0580a)',
                          }}
                        >
                          <span className="text-2xl font-black leading-none" style={{ color: '#fff' }}>
                            {day}
                          </span>
                          <span className="text-[9px] font-bold tracking-widest" style={{ color: 'rgba(255,255,255,0.75)' }}>
                            {mon}
                          </span>
                        </div>
                      </div>

                      {/* Card */}
                      <div
                        className="flex-1 rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-0.5"
                        style={{
                          background: '#ffffff',
                          boxShadow: '0 4px 20px rgba(26,58,92,0.08)',
                          border: '1px solid rgba(26,58,92,0.06)',
                        }}
                      >
                        {/* Top accent bar */}
                        <div
                          className="h-1 w-full"
                          style={{ background: 'linear-gradient(90deg, #e67e22, #f39c12)' }}
                        />

                        <div className="p-6 md:p-8">
                          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                            <span
                              className="inline-block px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase"
                              style={{
                                background: 'rgba(230,126,34,0.1)',
                                color: '#c0580a',
                                border: '1px solid rgba(230,126,34,0.2)',
                              }}
                            >
                              {event.category}
                            </span>

                            {/* Mobile date */}
                            <span
                              className="md:hidden text-sm font-bold"
                              style={{ color: '#e67e22' }}
                            >
                              {start.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                          </div>

                          <h3
                            className="font-black mb-3 leading-snug"
                            style={{
                              color: '#1a3a5c',
                              fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                              letterSpacing: '-0.01em',
                            }}
                          >
                            {event.title}
                          </h3>

                          <p
                            className="text-sm leading-relaxed mb-5"
                            style={{ color: '#7a6a55' }}
                          >
                            {event.description}
                          </p>

                          <div className="flex flex-wrap gap-x-6 gap-y-2">
                            <div className="flex items-center gap-2" style={{ color: '#7a6a55' }}>
                              <Calendar size={14} style={{ color: '#e67e22' }} />
                              <span className="text-sm">
                                {start.toLocaleDateString('en-US', {
                                  month: 'short', day: 'numeric', year: 'numeric',
                                })}
                                {isMulti && (
                                  <>
                                    {' — '}
                                    {new Date(event.endDate).toLocaleDateString('en-US', {
                                      month: 'short', day: 'numeric', year: 'numeric',
                                    })}
                                  </>
                                )}
                              </span>
                            </div>
                            <div className="flex items-center gap-2" style={{ color: '#7a6a55' }}>
                              <MapPin size={14} style={{ color: '#f39c12' }} />
                              <span className="text-sm">{event.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div
              className="text-center py-16 rounded-2xl"
              style={{
                background: '#ffffff',
                border: '1px dashed rgba(230,126,34,0.3)',
              }}
            >
              <p className="text-sm" style={{ color: '#a38f78' }}>
                No upcoming events at the moment — check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Past Events — Compact Grid ── */}
      {pastEvents.length > 0 && (
        <section
          className="pb-20 pt-4"
          style={{ background: '#f0ebe0' }}
        >
          <div className="container-safe max-w-5xl">

            {/* Section label */}
            <div className="flex items-center gap-4 mb-10">
              <span
                className="text-xs font-black tracking-[0.22em] uppercase"
                style={{ color: '#a38f78' }}
              >
                Recent
              </span>
              <div className="flex-1 h-px" style={{ background: 'rgba(26,58,92,0.1)' }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pastEvents.slice(0, 3).map((event) => (
                <div
                  key={event.id}
                  className="rounded-2xl p-5 group transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: '#ffffff',
                    border: '1px solid rgba(26,58,92,0.06)',
                    boxShadow: '0 2px 12px rgba(26,58,92,0.05)',
                    opacity: 0.82,
                  }}
                >
                  <div
                    className="w-8 h-1 rounded-full mb-4"
                    style={{ background: 'rgba(230,126,34,0.4)' }}
                  />
                  <span
                    className="text-[10px] font-black tracking-widest uppercase mb-2 block"
                    style={{ color: '#a38f78' }}
                  >
                    {new Date(event.startDate).toLocaleDateString('en-US', {
                      month: 'short', day: 'numeric', year: 'numeric',
                    })}
                  </span>
                  <h4
                    className="font-bold text-sm leading-snug mb-1"
                    style={{ color: '#1a3a5c' }}
                  >
                    {event.title}
                  </h4>
                  <p
                    className="text-xs leading-relaxed line-clamp-2"
                    style={{ color: '#a38f78' }}
                  >
                    {event.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}
    </>
  );
}
