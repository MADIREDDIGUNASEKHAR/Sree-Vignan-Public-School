'use client';

import { useState } from 'react';
import { SCHOOL } from '@/lib/constants';

export default function AdmissionPage() {
  const [formData, setFormData] = useState({
    studentName: '',
    className: '',
    fatherName: '',
    motherName: '',
    email: '',
    phone: '',
    address: '',
    pincode: '',
    previousSchool: '',
    marks: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        studentName: '',
        className: '',
        fatherName: '',
        motherName: '',
        email: '',
        phone: '',
        address: '',
        pincode: '',
        previousSchool: '',
        marks: '',
      });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <>
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-purple-100 to-white pt-24">
        <div className="container-safe text-center">
          <h1 className="text-heading-lg mb-4">Online Admission Form</h1>
          <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
            Apply for admission to Sree Vignan Public School for 2026-27
          </p>
        </div>
      </section>

      {/* Admission Form */}
      <section className="section-padding bg-white">
        <div className="container-safe max-w-2xl">
          {submitted ? (
            <div className="card-premium-lg bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 text-center">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Application Submitted!
              </h2>
              <p className="text-gray-600 mb-4">
                Thank you for applying to Sree Vignan Public School. Our admission team
                will contact you soon with the entrance test details.
              </p>
              <p className="text-sm text-gray-500">
                Expected contact within 24 hours
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-premium-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Student Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple"
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Class Applying For *
                  </label>
                  <select
                    name="className"
                    value={formData.className}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple"
                  >
                    <option value="">Select Class</option>
                    <option value="1">Class 1</option>
                    <option value="2">Class 2</option>
                    <option value="3">Class 3</option>
                    <option value="4">Class 4</option>
                    <option value="5">Class 5</option>
                    <option value="6">Class 6</option>
                    <option value="7">Class 7</option>
                    <option value="8">Class 8</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                  </select>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8 pt-8 border-t border-gray-200">
                Parent Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Father's Name *
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple"
                    placeholder="Father's name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Mother's Name *
                  </label>
                  <input
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple"
                    placeholder="Mother's name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple"
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple"
                  placeholder="Street address"
                  rows={3}
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Pincode *
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple"
                  placeholder="531036"
                />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8 pt-8 border-t border-gray-200">
                Academic Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Previous School
                  </label>
                  <input
                    type="text"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple"
                    placeholder="School name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Previous Year Marks (%)
                  </label>
                  <input
                    type="number"
                    name="marks"
                    value={formData.marks}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple"
                    placeholder="e.g., 85"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg font-semibold bg-primary-purple text-white hover:bg-purple-800 transition-all duration-200"
              >
                Submit Application
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to our terms and conditions
              </p>
            </form>
          )}

          {/* Info Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-premium">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                🎯 Entrance Test
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Qualified candidates will be invited for an entrance test in their chosen
                class.
              </p>
              <p className="text-xs text-gray-500">
                Test date will be communicated via email
              </p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                📋 Interview Round
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Successful candidates will be called for an interaction session with the
                principal.
              </p>
              <p className="text-xs text-gray-500">
                Followed by document verification
              </p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                ✅ Admission Confirmation
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Upon final selection, candidates can complete registration and admission
                process.
              </p>
              <p className="text-xs text-gray-500">
                Payment of registration fees required
              </p>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                📱 Questions?
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Contact our admission team for any queries about the admission process.
              </p>
              <a href={`tel:${SCHOOL.phone}`} className="text-primary-purple font-semibold hover:underline text-sm">
                {SCHOOL.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
