'use client';


import React, { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SCHOOL } from '@/lib/constants';


interface FormData {
  name: string;
  place: string;
  phone: string;
  message: string;
}


export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    place: '',
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
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfzHo2kvUCq600HcnvqdeG8RttuokvSpwDDwMODtWRoCDIyyg/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            "entry.324039919": formData.name,
            "entry.1425696747": formData.place,
            "entry.813299521": formData.phone,
            "entry.1168776430": formData.message,
          }),
        }
      );


      setSubmitted(true);
      setFormData({ name: '', place: '', phone: '', message: '' });


      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
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


        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            placeholder="Your name"
          />
        </div>


        {/* Place */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Place *
          </label>
          <input
            type="text"
            name="place"
            value={formData.place}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            placeholder="Your place"
          />
        </div>


        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            placeholder="+91 XXXXXXXXXX"
          />
        </div>


        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
            placeholder="Tell us how we can help..."
          />
        </div>


        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>


      {/* Contact Info (unchanged) */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Get In Touch</h2>


        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
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
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <Mail className="text-primary-purple" size={24} />
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Email</p>
              <a href={`mailto:${SCHOOL.email}`} className="text-primary-purple font-semibold hover:underline">
                {SCHOOL.email}
              </a>
            </div>
          </div>


          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <MapPin className="text-primary-purple" size={24} />
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Address</p>
              <p className="text-gray-700 text-sm">{SCHOOL.address.fullAddress}</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

