'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { SCHOOL } from '@/lib/constants';
import { Button } from './Button';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  const mainNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Academics', href: '/academics' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  const exploreLinks = [
    { label: 'News', href: '/news' },
    { label: 'Faculty', href: '/faculty' },
    { label: 'Events', href: '/events' },
    { label: 'Clubs', href: '/clubs' },
    { label: 'FAQ', href: '/faq' },
  ];

  const quickLinks = [
    { label: 'Admission', href: '/admission' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-soft">
      <nav className="container-safe flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-purple to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">SV</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-primary-purple">Sree Vignan</p>
            <p className="text-xs text-gray-500">School</p>
          </div>
        </Link>

        {/* Desktop Main Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {mainNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-700 font-medium hover:text-primary-purple transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}

          {/* Explore Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-primary-purple transition-colors text-sm">
              Explore <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute left-0 mt-0 w-40 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-2">
              {exploreLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-2 text-gray-700 hover:text-primary-purple hover:bg-purple-50 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop CTA Section */}
        <div className="hidden md:flex items-center gap-3">
          <Button href="/admission" size="sm">
            Apply Now
          </Button>
          
          {/* More Options Dropdown */}
          <div className="relative group">
            <button className="px-3 py-1.5 text-sm font-semibold text-primary-purple hover:bg-purple-100 rounded-lg transition-all">
              ⋮
            </button>
            <div className="absolute right-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-2">
              {quickLinks.slice(1).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-2 text-gray-700 hover:text-primary-purple hover:bg-purple-50 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${SCHOOL.phone}`}
                className="block px-4 py-2 text-gray-700 hover:text-primary-purple hover:bg-purple-50 transition-colors text-sm border-t border-gray-200 mt-2 pt-3"
              >
                📞 {SCHOOL.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 hover:bg-purple-100 rounded-lg transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="container-safe py-4 space-y-2">
            {mainNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-3 py-2 text-gray-700 font-medium hover:text-primary-purple hover:bg-purple-50 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Explore */}
            <button
              onClick={() => setExploreOpen(!exploreOpen)}
              className="w-full text-left px-3 py-2 text-gray-700 font-medium hover:text-primary-purple hover:bg-purple-50 rounded-lg transition-colors flex items-center justify-between"
            >
              Explore
              <ChevronDown
                size={16}
                className={`transition-transform ${exploreOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {exploreOpen && (
              <div className="space-y-1 ml-4">
                {exploreLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-primary-purple hover:bg-purple-50 rounded-lg transition-colors"
                    onClick={() => {
                      setMenuOpen(false);
                      setExploreOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Mobile CTA */}
            <div className="pt-4 space-y-3 border-t border-gray-200 mt-4">
              <Button href="/admission" className="w-full">
                Apply for Admission
              </Button>
              <a
                href={`tel:${SCHOOL.phone}`}
                className="block px-4 py-2 text-center text-sm font-semibold text-primary-purple bg-purple-100 hover:bg-primary-purple hover:text-white rounded-lg transition-all"
              >
                📞 Call Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
