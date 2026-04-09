'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '@/lib/constants';

export default function FAQPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-purple-100 to-white pt-24">
        <div className="container-safe text-center">
          <h1 className="text-heading-lg mb-4">Frequently Asked Questions</h1>
          <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about admissions, fees, and school life
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-safe max-w-3xl">
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div
                key={faq.id}
                className="border border-purple-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`text-primary-purple flex-shrink-0 transition-transform ${
                      expandedId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedId === faq.id && (
                  <div className="px-6 py-4 bg-purple-50 border-t border-purple-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact for More */}
          <div className="card-premium bg-gradient-to-r from-purple-50 to-purple-100 text-center mt-12 border-2 border-primary-purple">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Didn't find your answer?
            </h3>
            <p className="text-gray-600 mb-4">
              Our admission team is ready to help you with any questions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-primary-purple text-white hover:bg-purple-800 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
