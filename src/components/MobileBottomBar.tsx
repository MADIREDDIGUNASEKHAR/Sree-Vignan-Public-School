'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { SCHOOL } from '@/lib/constants';

export function MobileBottomBar() {
  const [showBar, setShowBar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let heroBottom = 0;
    let frameId: number | null = null;

    const measureHeroBottom = () => {
      const homeSection = document.getElementById('home');

      if (!homeSection) {
        heroBottom = 0;
        return;
      }

      heroBottom = homeSection.offsetTop + homeSection.offsetHeight - 108;
    };

    const updateBarVisibility = () => {
      const scrollTop = window.scrollY;

      setShowBar((prev) => {
        if (heroBottom === 0) return true;
        if (scrollTop <= 12) return false;
        if (prev) return true;
        return scrollTop >= heroBottom;
      });
    };

    const requestVisibilityUpdate = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        updateBarVisibility();
        frameId = null;
      });
    };

    const handleResize = () => {
      measureHeroBottom();
      requestVisibilityUpdate();
    };

    measureHeroBottom();
    updateBarVisibility();
    window.addEventListener('scroll', requestVisibilityUpdate, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', requestVisibilityUpdate);
      window.removeEventListener('resize', handleResize);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const handleMenuToggle = (event: Event) => {
      const customEvent = event as CustomEvent<boolean>;
      setMenuOpen(Boolean(customEvent.detail));
    };

    window.addEventListener('mobile-menu-toggle', handleMenuToggle as EventListener);

    return () => {
      window.removeEventListener('mobile-menu-toggle', handleMenuToggle as EventListener);
    };
  }, []);

  const whatsappUrl = `https://wa.me/${SCHOOL.whatsapp}?text=${encodeURIComponent(
    'Hello Sree Vignan Public School, I would like to inquire about admissions.'
  )}`;

  return (
    <div
      className={`xl:hidden fixed left-0 right-0 bottom-0 z-[60] grid grid-cols-2 ${
        showBar && !menuOpen ? 'pointer-events-auto' : 'pointer-events-none hidden'
      }`}
      style={{
        transform: 'translate3d(0, 0, 0)',
        WebkitTransform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        willChange: 'transform',
        contain: 'layout paint style',
        isolation: 'isolate',
      }}
    >
      <Link
        href="/contact"
        className="block w-full bg-[#9c0b0b] px-5 py-4 text-center font-semibold text-white"
      >
        APPLY NOW
      </Link>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 bg-green-500 px-5 py-4 font-semibold text-white"
        aria-label="Chat on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={20} />
        <span>Chat now</span>
      </a>
    </div>
  );
}
