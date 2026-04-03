import React from 'react';
import { Metadata } from 'next';
import { Star, BookOpen, Award, Users, Heart, Lock, Lightbulb, Palette, Zap, Monitor, BookMarked, Trophy, Cpu, Shield, Coffee, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/Button';
import { SCHOOL, PROGRAMS, FACILITIES, WHY_CHOOSE, TESTIMONIALS } from '@/lib/constants';
import Image from "next/image";
import HeroSlider from '@/components/HeroSlider';
import StatsSection from '@/components/StatsSection';
import ProgramsSection from '@/components/ProgramsSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GallerySection from '@/app/gallery/page';
import ClassXResultsSection from '@/components/Classxresultssection';
import CTASection from '@/components/CTASection';
import FeaturesSection from '@/components/FeaturesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import LeadershipSection from '@/components/LeadershipSection';

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


// About Section
function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      style={{ background: '#f0ebe0' }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-140px',
          right: '-120px',
          width: 360,
          height: 360,
          borderRadius: '50%',
          border: '1.5px solid rgba(243,156,18,0.14)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-120px',
          left: '-120px',
          width: 300,
          height: 300,
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
            About Us
          </span>
          <h2 className="text-heading-lg mb-4" style={{ color: '#1a3a5c' }}>
            About Sree Vignan{' '}
            <span style={{ color: '#e67e22' }}>Public School</span>
          </h2>
          <p className="text-subheading" style={{ color: '#7a6a55' }}>
            Founded in {SCHOOL.foundedYear}, we have been providing quality education with emphasis on academic excellence, discipline, and character development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '1000+', label: 'Students Enrolled' },
            { number: '50+', label: 'Dedicated Teachers' },
            { number: '34+', label: 'Years of Excellence' },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center rounded-2xl p-8"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(26,58,92,0.07)',
                boxShadow: '0 16px 40px rgba(26,58,92,0.08)',
              }}
            >
              <p className="text-4xl font-bold mb-2" style={{ color: '#e67e22' }}>{stat.number}</p>
              <p className="font-medium" style={{ color: '#7a6a55' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}







// Location Section
function LocationSection() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: '#f0ebe0' }}>
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-160px',
          right: '-160px',
          width: 420,
          height: 420,
          borderRadius: '50%',
          border: '1.5px solid rgba(243,156,18,0.14)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-120px',
          left: '-120px',
          width: 320,
          height: 320,
          borderRadius: '50%',
          border: '1.5px solid rgba(26,58,92,0.08)',
        }}
      />
      <div className="container-safe relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Map Placeholder */}
          {/* Google Map */}
<div className="rounded-2xl overflow-hidden h-96 lg:h-full min-h-96 border border-[rgba(26,58,92,0.07)] shadow-[0_16px_40px_rgba(26,58,92,0.08)]">
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
            <div>
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
                Find Us
              </span>
              <h2 className="text-heading-lg mb-3" style={{ color: '#1a3a5c' }}>Visit Us</h2>
              <p className="text-sm leading-relaxed max-w-md" style={{ color: '#7a6a55' }}>
                Visit our campus and experience the environment where learning, care, and discipline come together every day.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #fff8ee 0%, #fdebd0 100%)',
                    border: '1.5px solid rgba(243,156,18,0.25)',
                  }}
                >
                  <MapPin size={24} style={{ color: '#e67e22' }} />
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#1a3a5c' }}>Address</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#7a6a55' }}>{SCHOOL.address.fullAddress}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #fff8ee 0%, #fdebd0 100%)',
                    border: '1.5px solid rgba(243,156,18,0.25)',
                  }}
                >
                  <Phone size={24} style={{ color: '#e67e22' }} />
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#1a3a5c' }}>Phone</p>
                  <a href={`tel:${SCHOOL.phone}`} className="font-semibold hover:underline" style={{ color: '#e67e22' }}>
                    {SCHOOL.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #fff8ee 0%, #fdebd0 100%)',
                    border: '1.5px solid rgba(243,156,18,0.25)',
                  }}
                >
                  <Award size={24} style={{ color: '#e67e22' }} />
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#1a3a5c' }}>Working Hours</p>
                  <p className="text-sm" style={{ color: '#7a6a55' }}>{SCHOOL.hours}</p>
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
      <HeroSlider />
      <StatsSection />
      <LeadershipSection preview />
      <ClassXResultsSection />
      <ProgramsSection />
      <FacilitiesSection />
      <WhyChooseSection />
      <GallerySection />
      <TestimonialsSection />
      <FeaturesSection />
      <LocationSection />
      <CTASection />
      
    </>
  );
}

