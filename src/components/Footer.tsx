import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { SCHOOL } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-safe">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* School Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">About School</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Sree Vignan Public School provides quality education with focus on academic excellence and holistic development of students.
            </p>
            <p className="text-sm text-gray-400">Est. {SCHOOL.foundedYear}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Academics', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-accent-gold transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              {['Primary Education', 'Secondary Education', 'Co-curricular', 'Skill Development'].map((program) => (
                <li key={program}>
                  <a href="/academics" className="text-gray-300 hover:text-accent-gold transition-colors text-sm">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone size={18} className="mt-0.5 flex-shrink-0 text-accent-gold" />
                <a href={`tel:${SCHOOL.phone}`} className="text-gray-300 hover:text-accent-gold transition-colors text-sm">
                  {SCHOOL.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-accent-gold" />
                <a href={`mailto:${SCHOOL.email}`} className="text-gray-300 hover:text-accent-gold transition-colors text-sm">
                  {SCHOOL.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={18} className="mt-0.5 flex-shrink-0 text-accent-gold" />
                <span className="text-gray-300 text-sm">{SCHOOL.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">Follow us:</span>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-purple flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-purple flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-purple flex items-center justify-center transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center md:text-right">
            © {currentYear} {SCHOOL.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
