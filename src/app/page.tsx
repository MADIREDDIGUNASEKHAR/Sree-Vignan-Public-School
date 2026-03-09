import React from 'react';
import { Metadata } from 'next';
import { Star, BookOpen, Award, Users, Heart, Lock, Lightbulb, Palette, Zap, Monitor, BookMarked, Trophy, Cpu, Shield, Coffee, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/Button';
import { SCHOOL, PROGRAMS, FACILITIES, WHY_CHOOSE, TESTIMONIALS } from '@/lib/constants';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Home | Sree Vignan Public School',
  description: 'Empowering young minds for a bright future. Quality education in Chodavaram.',
};

const iconMap: { [key: string]: React.ReactNode } = {
  'BookOpen': <BookOpen size={32} className="text-primary-purple" />,
  'Lightbulb': <Lightbulb size={32} className="text-primary-purple" />,
  'Palette': <Palette size={32} className="text-primary-purple" />,
  'Zap': <Zap size={32} className="text-primary-purple" />,
  'Monitor': <Monitor size={32} className="text-primary-purple" />,
  'BookMarked': <BookMarked size={32} className="text-primary-purple" />,
  'Trophy': <Trophy size={32} className="text-primary-purple" />,
  'Cpu': <Cpu size={32} className="text-primary-purple" />,
  'Shield': <Shield size={32} className="text-primary-purple" />,
  'Coffee': <Coffee size={32} className="text-primary-purple" />,
  'Users': <Users size={32} className="text-primary-purple" />,
  'Heart': <Heart size={32} className="text-primary-purple" />,
  'Lock': <Lock size={32} className="text-primary-purple" />,
  'Star': <Star size={32} className="text-primary-purple" />,
};

// Hero Section
function HeroSection() {
  return (
    <section className="relative pt-12 md:pt-20 pb-16 md:pb-32 overflow-hidden bg-gradient-to-br from-purple-50 to-white">
      <div className="container-safe">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-primary-purple font-semibold text-sm">
              📚 Admissions Open 2026-27
            </div>

            <h1 className="text-heading-xl text-gray-900">
              Empowering Young Minds for a Bright Future
            </h1>

            <p className="text-subheading text-gray-600">
              Quality Education in Chodavaram. Focus on academic excellence and holistic development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="/contact">Enroll Now</Button>
              <Button href="#about" variant="secondary">Learn More</Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-300">
              <div>
                <p className="text-3xl font-bold text-primary-purple">1000+</p>
                <p className="text-sm text-gray-600 font-medium">Happy Students</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-purple">50+</p>
                <p className="text-sm text-gray-600 font-medium">Dedicated Teachers</p>
              </div>
            </div>
          </div>

                {/* Right Image Placeholder */}
                <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-soft-lg">
        <img
          src="/gallery/image13.png"
          alt="Sree Vignan School Classroom Learning"
          className="w-full h-full object-cover"
        />
      </div>
              </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-safe">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-heading-lg mb-4">About Sree Vignan Public School</h2>
          <p className="text-subheading text-gray-600">
            Founded in {SCHOOL.foundedYear}, we have been providing quality education with emphasis on academic excellence, discipline, and character development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '1000+', label: 'Students Enrolled' },
            { number: '50+', label: 'Dedicated Teachers' },
            { number: '14+', label: 'Years of Excellence' },
          ].map((stat, i) => (
            <div key={i} className="card-premium text-center">
              <p className="text-4xl font-bold text-primary-purple mb-2">{stat.number}</p>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Programs Section
function ProgramsSection() {
  return (
    <section className="section-padding bg-cream-light">
      <div className="container-safe">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-heading-lg mb-4">Our Programs</h2>
          <p className="text-subheading text-gray-600 max-w-2xl mx-auto">
            Comprehensive educational programs designed to develop students holistically
          </p>
        </div>

        <div className="grid-responsive-2 lg:grid-responsive-4 gap-6">
          {PROGRAMS.map((program) => (
            <div key={program.id} className="card-premium">
              <div className="mb-4">
                {iconMap[program.icon] || <BookOpen size={32} />}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{program.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Facilities Section
function FacilitiesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-safe">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-heading-lg mb-4">Modern Facilities</h2>
          <p className="text-subheading text-gray-600 max-w-2xl mx-auto">
            State-of-the-art infrastructure for holistic development
          </p>
        </div>

        <div className="grid-responsive-3">
          {FACILITIES.map((facility) => (
            <div key={facility.id} className="card-premium">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  {iconMap[facility.icon] || <Trophy size={32} />}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{facility.name}</h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseSection() {
  return (
    <section className="section-padding bg-cream-light">
      <div className="container-safe">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-heading-lg mb-4">Why Choose Sree Vignan?</h2>
          <p className="text-subheading text-gray-600 max-w-2xl mx-auto">
            We are committed to providing quality education and holistic development
          </p>
        </div>

        <div className="grid-responsive-2">
          {WHY_CHOOSE.map((reason, i) => (
            <div key={i} className="card-premium">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  {iconMap[reason.icon] || <Star size={28} />}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function GallerySection() {
  const galleryItems = [
  { id: 1, title: 'Classroom Learning', category: 'Academics', image: '/gallery/image1.jpg' },
  { id: 2, title: 'Sports Day', category: 'Activities', image: '/gallery/image2.jpg' },
  { id: 3, title: 'School Event', category: 'Events', image: '/gallery/image3.jpg' },
  { id: 4, title: 'Student Projects', category: 'Academics', image: '/gallery/image4.jpg' },
  { id: 5, title: 'Cultural Program', category: 'Activities', image: '/gallery/image5.jpg' },
  { id: 6, title: 'Awards Ceremony', category: 'Events', image: '/gallery/image6.jpg' },
];

  return (
    <section className="section-padding bg-white">
      <div className="container-safe">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-heading-lg mb-4">School Gallery</h2>
          <p className="text-subheading text-gray-600 max-w-2xl mx-auto">
            Moments from school activities and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="relative rounded-xl overflow-hidden shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 group">
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="badge bg-accent-gold/90 text-royal-navy">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/gallery" variant="secondary">View Full Gallery</Button>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  return (
    <section className="section-padding bg-cream-light">
      <div className="container-safe">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-heading-lg mb-4">Parent Testimonials</h2>
          <p className="text-subheading text-gray-600 max-w-2xl mx-auto">
            What parents say about our school
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <div key={i} className="card-premium">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} size={18} className="fill-accent-gold text-accent-gold" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                <p className="text-xs text-gray-600">{testimonial.relation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-purple to-purple-700 text-white">
      <div className="container-safe text-center">
        <h2 className="text-heading-lg mb-4">Admissions Open for 2026-27</h2>
        <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
          Give your child the best education with Sree Vignan Public School
        </p>
        <Button href="/contact" className="bg-accent-gold text-royal-navy hover:bg-yellow-400">
          Enroll Your Child Now
        </Button>
      </div>
    </section>
  );
}

// Location Section
function LocationSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-safe">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Map Placeholder */}
          {/* Google Map */}
<div className="rounded-2xl overflow-hidden shadow-soft-lg h-96 lg:h-full min-h-96">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1899.1016719470615!2d82.9283667!3d17.8291001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a397f4a63ada1c3%3A0x257a44b7d679c0e4!2sSree%20Vignan%20Public%20School!5e0!3m2!1sen!2sin!4v1772612201610!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full h-full"
  ></iframe>
</div>

          {/* Address & Details */}
          <div className="space-y-6">
            <h2 className="text-heading-lg">Visit Us</h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary-purple" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Address</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{SCHOOL.address.fullAddress}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary-purple" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Phone</p>
                  <a href={`tel:${SCHOOL.phone}`} className="text-primary-purple font-semibold hover:underline">
                    {SCHOOL.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Award className="text-primary-purple" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Working Hours</p>
                  <p className="text-gray-600 text-sm">{SCHOOL.hours}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button href={SCHOOL.maps} external>Get Directions</Button>
              <Button
                href={`https://wa.me/${SCHOOL.whatsapp}?text=${encodeURIComponent('Hello Sree Vignan Public School, I would like to inquire about admissions.')}`}
                external
                variant="secondary"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <FacilitiesSection />
      <WhyChooseSection />
      <GallerySection />
      <TestimonialsSection />
      <FeaturesSection />
      <CTASection />
      <LocationSection />
    </>
  );
}

// New Features Section
function FeaturesSection() {
  return (
    <section className="section-padding bg-cream-light">
      <div className="container-safe">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-heading-lg mb-4">Explore More Features</h2>
          <p className="text-subheading text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive online services designed for parents and students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: '📰',
              title: 'Latest News',
              description: 'Stay updated with school news, achievements, and announcements',
              href: '/news',
              btnText: 'Read News',
            },
            {
              icon: '📋',
              title: 'Online Admission',
              description: 'Apply for admission online and track your application status',
              href: '/admission',
              btnText: 'Apply Now',
            },
            {
              icon: '👨‍🏫',
              title: 'Faculty',
              description: 'Meet our experienced and dedicated team of educators',
              href: '/faculty',
              btnText: 'View Faculty',
            },
            {
              icon: '❓',
              title: 'FAQ',
              description: 'Find answers to common questions about admissions and school policies',
              href: '/faq',
              btnText: 'Read FAQ',
            },
          ].map((feature, i) => (
            <div key={i} className="card-premium hover:shadow-soft-xl transition-all group">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-purple transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6">{feature.description}</p>
              <a
                href={feature.href}
                className="inline-flex items-center text-primary-purple font-semibold hover:gap-2 transition-all"
              >
                {feature.btnText} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
