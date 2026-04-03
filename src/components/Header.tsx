'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const exploreItems = [
    { label: 'News & Updates', href: '/news' },
    { label: 'Events', href: '/events' },
    { label: 'Faculty', href: '/faculty' },
    { label: 'FAQ', href: '/faq' },
  ];

  const navItems = [
    { label: 'HOME', href: '/#home' },
    { label: 'ABOUT', href: '/#why-choose' },
    { label: 'ACADEMICS', href: '/#academics' },
    { label: 'GALLERY', href: '/#gallery' },
    { label: 'CONTACT', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fffbcc]/90 backdrop-blur-md shadow-md">

      {/* TOP STRIP */}
      <div className="h-[4px] w-full bg-gradient-to-r from-red-700 via-yellow-500 to-green-600" />

      {/* NAVBAR */}
      <nav className="relative h-[72px] flex items-center justify-between px-4 sm:px-6 lg:px-10">

        {/* LOGO */}
        <Link href="/#home" className="flex items-center gap-3">
          <img
            src="/gallery/LOGO.png"
            alt="logo"
            className={`transition-all ${scrolled ? 'w-14 h-14' : 'w-16 h-16'}`}
          />
          <div className="flex flex-col leading-tight">
            <h1 className="text-[#9c0b0b] font-bold text-2xl sm:text-3xl whitespace-nowrap">Sree Vignan School</h1>
            <p className="pl-5 sm:pl-7 text-[11px] sm:text-xs text-[#9c0b0b]/80 font-medium">
              Where Legacy meets Excellence Est.1992
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-sm font-semibold">

          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="relative group cursor-pointer">
              {item.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#9c0b0b] transition-all group-hover:w-full"></span>
            </Link>
          ))}

          {/* EXPLORE DROPDOWN */}
          <div className="relative group">
            <span className="flex items-center gap-1 cursor-pointer">
              EXPLORE <ChevronDown size={14} />
            </span>

            <div className="absolute top-8 left-0 w-52 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
              {exploreItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-sm hover:bg-[#fffbcc] hover:text-[#9c0b0b]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* APPLY BUTTON */}
        <div className="hidden md:flex gap-3">
          <Link href="/contact" className="bg-[#9c0b0b] text-white px-4 py-2 rounded-md hover:scale-105 transition">
            APPLY NOW
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* 🔥 MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#fffbcc] px-4 pb-4 space-y-3 border-t">

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-gray-800 font-medium cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* EXPLORE MOBILE */}
          <div className="border-t pt-3 mt-3">
            <p className="text-sm font-semibold text-gray-600 mb-2">
              Explore
            </p>

            {exploreItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-sm text-gray-700 py-1"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link href="/contact" className="block w-full mt-3 bg-[#9c0b0b] text-white py-2 rounded text-center" onClick={() => setMenuOpen(false)}>
            APPLY NOW
          </Link>
        </div>
      )}
    </header>
  );
}
