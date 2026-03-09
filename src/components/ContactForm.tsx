'use client';

import React, { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SCHOOL } from '@/lib/constants';
import { Button } from './Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
      {/* Form */}
      <form onSubmit={handleSubmit} className="card-premium-lg space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

        {submitted && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-700 font-semibold">✓ Thank you! We'll contact you soon.</p>
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            placeholder="Your name"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="+91 XXXXXXXXXX"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
            placeholder="Tell us how we can help..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* Contact Info */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Get In Touch</h2>

        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
              <Phone className="text-primary-purple" size={24} />
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Phone</p>
              <a href={`tel:${SCHOOL.phone}`} className="text-primary-purple font-semibold hover:underline">
                {SCHOOL.phone}
              </a>
              <p className="text-sm text-gray-600 mt-1">Available during working hours</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
              <Mail className="text-primary-purple" size={24} />
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Email</p>
              <a href={`mailto:${SCHOOL.email}`} className="text-primary-purple font-semibold hover:underline">
                {SCHOOL.email}
              </a>
              <p className="text-sm text-gray-600 mt-1">We respond within 24 hours</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
              <MapPin className="text-primary-purple" size={24} />
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Address</p>
              <p className="text-gray-700 text-sm leading-relaxed">{SCHOOL.address.fullAddress}</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="border-t border-gray-200 pt-6 space-y-3">
          <p className="text-sm font-semibold text-gray-900">Quick Actions:</p>
          <a href={`tel:${SCHOOL.phone}`} className="btn-primary block text-center w-full">
            Call Now
          </a>
          <a
            href={`https://wa.me/${SCHOOL.whatsapp}?text=${encodeURIComponent('Hello Sree Vignan Public School, I would like to inquire about admissions.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary block text-center w-full"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
