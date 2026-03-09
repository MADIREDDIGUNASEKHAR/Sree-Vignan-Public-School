'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SCHOOL } from '@/lib/constants';

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${SCHOOL.whatsapp}?text=${encodeURIComponent(
    'Hello Sree Vignan Public School, I would like to inquire about admissions.'
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
