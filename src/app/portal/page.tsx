'use client';

import { useState } from 'react';
import { Eye, EyeOff, BarChart3, CheckCircle, AlertCircle } from 'lucide-react';

export default function ParentPortalPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Sample student data
  const studentData = {
    name: 'Arjun Kumar',
    class: 'Class 10 - A',
    rollNumber: '25',
    admissionNumber: 'SV2020001',
    performance: {
      percentage: 88,
      grade: 'A',
      status: 'Excellent',
    },
    attendance: {
      present: 162,
      absent: 8,
      percentage: 95.3,
    },
    recentGrades: [
      { subject: 'Mathematics', score: 92, grade: 'A+' },
      { subject: 'English', score: 88, grade: 'A' },
      { subject: 'Science', score: 90, grade: 'A+' },
      { subject: 'Social Studies', score: 85, grade: 'A' },
    ],
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <>
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-purple-100 to-white pt-24">
        <div className="container-safe text-center">
          <h1 className="text-heading-lg mb-4">Parent Portal</h1>
          <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
            Monitor your child's academic progress and school activities
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-safe max-w-4xl">
          {!isLoggedIn ? (
            // Login Form
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Login Card */}
              <div className="card-premium-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Parent Login
                </h2>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple"
                      placeholder="parent@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple"
                        placeholder="••••••••"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-3 text-gray-600"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg font-semibold bg-primary-purple text-white hover:bg-purple-800 transition-all duration-200"
                  >
                    Login to Portal
                  </button>

                  <a
                    href="#"
                    className="block text-center text-primary-purple text-sm hover:underline"
                  >
                    Forgot Password?
                  </a>
                </form>

                <div className="mt-6 pt-6 border-t border-purple-100">
                  <p className="text-sm text-gray-600 mb-3">Demo Credentials:</p>
                  <p className="text-xs text-gray-500">
                    Email: parent@sree.com<br />
                    Password: demo123
                  </p>
                </div>
              </div>

              {/* Features Card */}
              <div className="space-y-6">
                <div className="card-premium">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    📊 Academic Progress
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Monitor your child's marks, grades, and overall academic performance in real-time.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    📅 Attendance Tracking
                  </h3>
                  <p className="text-gray-600 text-sm">
                    View daily attendance records and absence notifications automatically.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    💬 Communication
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Direct messaging with teachers and instant notifications about school events.
                  </p>
                </div>

                <div className="card-premium">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    💳 Fee Payment
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Check fee status and make online payments securely through the portal.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Dashboard
            <div>
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Welcome back!
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {studentData.name} - {studentData.class}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    setEmail('');
                    setPassword('');
                  }}
                  className="px-6 py-2 rounded-lg font-semibold border-2 border-primary-purple text-primary-purple hover:bg-purple-50 transition-all"
                >
                  Logout
                </button>
              </div>

              {/* Student Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="card-premium">
                  <p className="text-gray-600 text-sm mb-1">Admission Number</p>
                  <p className="text-xl font-bold text-primary-purple">
                    {studentData.admissionNumber}
                  </p>
                </div>

                <div className="card-premium">
                  <p className="text-gray-600 text-sm mb-1">Roll Number</p>
                  <p className="text-xl font-bold text-primary-purple">
                    {studentData.rollNumber}
                  </p>
                </div>

                <div className="card-premium">
                  <p className="text-gray-600 text-sm mb-1">Class</p>
                  <p className="text-xl font-bold text-primary-purple">
                    {studentData.class}
                  </p>
                </div>

                <div className="card-premium">
                  <p className="text-gray-600 text-sm mb-1">Status</p>
                  <p className="text-xl font-bold text-green-600 flex items-center gap-2">
                    <CheckCircle size={20} />
                    Active
                  </p>
                </div>
              </div>

              {/* Performance Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Academic Performance */}
                <div className="card-premium-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <BarChart3 size={28} className="text-primary-purple" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Academic Performance
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-900">
                          Overall Percentage
                        </span>
                        <span className="text-2xl font-bold text-accent-gold">
                          {studentData.performance.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-primary-purple to-accent-gold h-3 rounded-full"
                          style={{
                            width: `${studentData.performance.percentage}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-4">
                        <p className="text-gray-600 text-sm">Grade</p>
                        <p className="text-3xl font-bold text-green-600">
                          {studentData.performance.grade}
                        </p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-gray-600 text-sm">Status</p>
                        <p className="text-lg font-bold text-blue-600">
                          {studentData.performance.status}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Attendance */}
                <div className="card-premium-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Attendance
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-900">
                          Attendance Rate
                        </span>
                        <span className="text-2xl font-bold text-primary-purple">
                          {studentData.attendance.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-primary-purple h-3 rounded-full"
                          style={{
                            width: `${studentData.attendance.percentage}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-4">
                        <p className="text-gray-600 text-sm">Days Present</p>
                        <p className="text-3xl font-bold text-green-600">
                          {studentData.attendance.present}
                        </p>
                      </div>
                      <div className="bg-red-50 rounded-lg p-4">
                        <p className="text-gray-600 text-sm">Days Absent</p>
                        <p className="text-3xl font-bold text-red-600">
                          {studentData.attendance.absent}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Grades */}
              <div className="card-premium-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Recent Grades
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {studentData.recentGrades.map((subject) => (
                    <div
                      key={subject.subject}
                      className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200"
                    >
                      <p className="text-gray-700 font-semibold mb-3">
                        {subject.subject}
                      </p>
                      <div className="flex items-end gap-4">
                        <div>
                          <p className="text-3xl font-bold text-primary-purple">
                            {subject.score}
                          </p>
                          <p className="text-xs text-gray-600">out of 100</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-accent-gold">
                            {subject.grade}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notice */}
              <div className="mt-8 card-premium border-l-4 border-accent-gold bg-yellow-50">
                <div className="flex gap-4">
                  <AlertCircle size={24} className="text-accent-gold flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Parent-Teacher Meet
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Scheduled for April 20, 2026 at 3:00 PM. Please confirm your
                      attendance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
