"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

const facilities = [
  {
    id: "labs",
    type: "featured",
    badge: "Featured Space",
    icon: "biotech",
    title: "Science Labs",
    desc: "Advanced research environments equipped with precision instruments, fostering a culture of empirical inquiry and breakthrough discovery.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiiIzaGUTx6HPdKzeGLbK1x6j92dhJxWZtUG3MZQ8b6aVn9kS7VoKXTV8NmmPzrl20ehaY2ePZlz6ADSjILGPoUUJoL0LfT8nQUlRc8_oPm10ZKHpu6TT8TCD5TjJhtmHfcPxG8T75rqHG_jCfuxsem-s_IBC1aZbjyqrcywh-igEIeASxKf_Mhak1ixLoeO3MlTa6n3HO8_6O1DTzVDN-IvMskKNYUB_38RF1OjPQxlxL4bkuh9mRg0hS2F4szH8HrzGHWJGN1M8",
    accentColor: "#375c91",
  },
  {
    id: "library",
    type: "library",
    icon: "local_library",
    title: "Digital Library",
    desc: "Access over 50,000 global journals and interactive e-media in our silent, high-speed knowledge hub.",
    accentColor: "#375c91",
  },
  {
    id: "auditorium",
    type: "auditorium",
    title: "Modern Auditorium",
    desc: "A 1,200-seat theatrical venue with professional acoustics and 4K projection for global symposiums.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdhY8QJyqFVMYKiW_NVpmi78oKzQQH-GNhy8OLj1fhlF1PkB0Tuyhg_U7KGrEdEDomVgbGmsP6HF4bZHcBHk3xxYe875NTwmWQ-Zt0Na51BDKaOvg5q1tPeveYzRyfUjJhRZCA-wOXWzCEDudz_ngT-tP02ogs_s754VFx-Vof9GsP-F-fTU2iSYTi_uc0Kee0WjqqAxZZqmhwICOTWxYREQF_91hfW8hN7fvnWLZ-s3nyryP0Km5w_Pngf1koB3CONpbjQfZd5MU",
    accentColor: "#375c91",
  },
  {
    id: "sports",
    type: "sports",
    icon: "sports_soccer",
    tag: "Olympic Spec",
    title: "Sports Arena",
    desc: "Multi-disciplinary athletic complex featuring an indoor heated pool and FIFA-approved turf.",
    accentColor: "#ffd709",
  },
  {
    id: "arts",
    type: "arts",
    title: "Arts & Design Studio",
    desc: "A light-drenched atelier for traditional fine arts and industrial 3D prototyping.",
    accentColor: "#e0e3e4",
  },
  {
    id: "smart",
    type: "smart",
    icon: "settings_input_component",
    title: "Smart Classrooms",
    desc: "Collaborative spaces featuring AI-integrated interactive boards and ergonomic modular seating.",
    accentColor: "#375c91",
  },
];

const FacilitiesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const goTo = useCallback((idx: number) => {
    setActiveIndex((idx + facilities.length) % facilities.length);
  }, []);

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  // Auto-scroll timer
  useEffect(() => {
    if (!isMobile || isPaused) return;
    timerRef.current = setInterval(next, 2000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isMobile, isPaused, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
    setTimeout(() => setIsPaused(false), 3000);
  };

  const f = facilities[activeIndex];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Work+Sans:wght@100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');

        .facilities-section {
          position: relative;
          padding-top: 8rem;
          padding-bottom: 6rem;
          overflow: hidden;
          background-color: #f5f6f7;
          font-family: 'Work Sans', sans-serif;
          color: #2c2f30;
        }

        .asymmetric-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(#375c91 0.5px, transparent 0.5px);
          background-size: 24px 24px;
          opacity: 0.05;
          pointer-events: none;
        }

        .facilities-inner {
          max-width: 1536px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
        }

        .facilities-header {
          margin-bottom: 5rem;
        }

        .facilities-eyebrow {
          font-family: 'Work Sans', sans-serif;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #6c5a00;
          font-weight: 700;
          margin-bottom: 1rem;
          display: block;
        }

        .facilities-title {
          font-family: 'Lexend', sans-serif;
          font-size: clamp(3.5rem, 8vw, 6rem);
          font-weight: 900;
          color: #2a5084;
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .facilities-title span { color: #6c5a00; }

        /* ── Desktop Grid ── */
        .facilities-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 2rem;
          align-items: start;
        }

        .card-featured {
          grid-column: span 8;
          position: relative;
          overflow: hidden;
          border-radius: 0.75rem;
          background-color: #ffffff;
          transition: box-shadow 0.3s ease;
        }
        .card-featured:hover { box-shadow: 0 25px 50px rgba(0,0,0,0.15); }
        .card-featured:hover img.facility-img { filter: grayscale(0); }

        .facility-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          transition: filter 0.7s ease;
        }

        .card-featured-img-wrapper {
          aspect-ratio: 16/9;
          overflow: hidden;
        }

        .card-featured-body {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 75%;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(4px);
          padding: 2rem 3rem;
        }

        .card-featured-icon-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          font-size: inherit;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
          -webkit-font-smoothing: antialiased;
        }

        .icon-secondary { color: #6c5a00; font-size: 2.25rem; }

        .card-featured-title {
          font-family: 'Lexend', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: #2c2f30;
        }

        .card-featured-desc {
          color: #595c5d;
          font-size: 1.1rem;
          line-height: 1.7;
          max-width: 36rem;
          margin-top: 0.5rem;
        }

        .glass-badge {
          position: absolute;
          top: 2rem;
          right: 2rem;
          background: rgba(255,215,9,0.7);
          backdrop-filter: blur(20px);
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          font-family: 'Lexend', sans-serif;
          font-weight: 700;
          color: #5b4b00;
          font-size: 0.875rem;
        }

        .col-side {
          grid-column: span 4;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .card-library {
          background-color: #eff1f2;
          padding: 2rem;
          border-radius: 0.75rem;
          position: relative;
          overflow: hidden;
        }
        .card-library:hover .card-library-bg-icon { opacity: 0.1; }

        .card-library-bg-icon {
          position: absolute;
          bottom: -1rem;
          right: -1rem;
          opacity: 0.05;
          font-size: 7.5rem;
          transition: opacity 0.3s;
          color: #2c2f30;
        }

        .icon-primary { color: #375c91; font-size: 3rem; margin-bottom: 1.5rem; display: block; }

        .card-library-title {
          font-family: 'Lexend', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #2c2f30;
        }
        .card-library-desc { color: #595c5d; font-size: 0.95rem; line-height: 1.6; }

        .card-auditorium {
          background-color: #375c91;
          color: #eff2ff;
          padding: 2rem;
          border-radius: 0.75rem;
          position: relative;
          overflow: hidden;
        }
        .card-auditorium-title { font-family: 'Lexend', sans-serif; font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; }
        .card-auditorium-desc { color: rgba(239,242,255,0.8); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem; }
        .card-auditorium-img { width: 100%; height: 8rem; object-fit: cover; border-radius: 0.5rem; opacity: 0.4; }

        .row-bottom {
          grid-column: span 12;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 1rem;
        }

        .card-sports {
          background-color: #ffffff;
          padding: 2rem;
          border-radius: 0.75rem;
          border-left: 4px solid #ffd709;
          box-shadow: 0 1px 3px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
        }
        .card-sports:hover { transform: translateY(-8px); }

        .card-sports-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; }

        .tag-badge {
          font-family: 'Work Sans', sans-serif;
          font-size: 0.625rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          background-color: #ffd709;
          color: #5b4b00;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-weight: 700;
        }

        .card-sports-title { font-family: 'Lexend', sans-serif; font-size: 1.5rem; font-weight: 700; margin-bottom: 0.75rem; color: #2c2f30; }
        .card-sports-desc { color: #595c5d; font-size: 0.95rem; line-height: 1.6; }

        .card-arts { background-color: #e0e3e4; padding: 2rem; border-radius: 0.75rem; overflow: hidden; transform: translateY(3rem); }
        .card-arts-title { font-family: 'Lexend', sans-serif; font-size: 1.5rem; font-weight: 700; margin-bottom: 0.75rem; color: #2c2f30; }
        .card-arts-desc { color: #595c5d; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem; }

        .avatar-stack { display: flex; }
        .avatar-stack > div { width: 4rem; height: 4rem; border-radius: 9999px; border: 4px solid #e0e3e4; overflow: hidden; margin-right: -1rem; background-color: #d1d5d7; }
        .avatar-stack > div img { width: 100%; height: 100%; object-fit: cover; }

        .card-smart {
          background-color: #ffffff;
          padding: 2rem;
          border-radius: 0.75rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .card-smart:hover { transform: translateY(-8px); }
        .card-smart-title { font-family: 'Lexend', sans-serif; font-size: 1.5rem; font-weight: 700; margin-bottom: 0.75rem; color: #2c2f30; }
        .card-smart-desc { color: #595c5d; font-size: 0.95rem; line-height: 1.6; }

        .card-smart-footer {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(117,119,120,0.2);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .tag-next-gen { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: -0.02em; color: #375c91; }
        .icon-bolt { font-size: 1rem; color: #375c91; }

        /* ── Mobile Carousel ── */
        .mobile-carousel-wrap {
          display: none;
        }

        .mobile-card {
          border-radius: 1rem;
          overflow: hidden;
          width: 100%;
          min-height: 340px;
          position: relative;
          user-select: none;
        }

        /* card type: featured */
        .mc-featured { background: #ffffff; }
        .mc-featured-img { width: 100%; height: 180px; object-fit: cover; filter: grayscale(30%); display: block; }
        .mc-featured-body { padding: 1.25rem 1.5rem 1.5rem; }
        .mc-featured-icon-row { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem; }
        .mc-featured-title { font-family: 'Lexend', sans-serif; font-size: 1.4rem; font-weight: 700; color: #2c2f30; }
        .mc-featured-desc { color: #595c5d; font-size: 0.9rem; line-height: 1.65; margin-top: 0.4rem; }
        .mc-glass-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255,215,9,0.82);
          backdrop-filter: blur(12px);
          padding: 0.3rem 1rem;
          border-radius: 9999px;
          font-family: 'Lexend', sans-serif;
          font-weight: 700;
          color: #5b4b00;
          font-size: 0.75rem;
        }

        /* card type: library */
        .mc-library { background: #eff1f2; padding: 1.75rem 1.5rem; position: relative; overflow: hidden; }
        .mc-library-bg-icon { position: absolute; bottom: -1.5rem; right: -1rem; font-size: 8rem; opacity: 0.06; color: #2c2f30; }
        .mc-lib-title { font-family: 'Lexend', sans-serif; font-size: 1.4rem; font-weight: 700; color: #2c2f30; margin-bottom: 0.75rem; }
        .mc-lib-desc { color: #595c5d; font-size: 0.9rem; line-height: 1.65; }

        /* card type: auditorium */
        .mc-auditorium { background: #375c91; color: #eff2ff; padding: 1.75rem 1.5rem; }
        .mc-aud-title { font-family: 'Lexend', sans-serif; font-size: 1.4rem; font-weight: 700; margin-bottom: 0.75rem; }
        .mc-aud-desc { color: rgba(239,242,255,0.8); font-size: 0.9rem; line-height: 1.65; margin-bottom: 1.25rem; }
        .mc-aud-img { width: 100%; height: 7rem; object-fit: cover; border-radius: 0.5rem; opacity: 0.45; }

        /* card type: sports */
        .mc-sports { background: #ffffff; padding: 1.75rem 1.5rem; border-left: 5px solid #ffd709; }
        .mc-sports-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.25rem; }
        .mc-sports-title { font-family: 'Lexend', sans-serif; font-size: 1.4rem; font-weight: 700; margin-bottom: 0.6rem; color: #2c2f30; }
        .mc-sports-desc { color: #595c5d; font-size: 0.9rem; line-height: 1.65; }

        /* card type: arts */
        .mc-arts { background: #e0e3e4; padding: 1.75rem 1.5rem; }
        .mc-arts-title { font-family: 'Lexend', sans-serif; font-size: 1.4rem; font-weight: 700; margin-bottom: 0.6rem; color: #2c2f30; }
        .mc-arts-desc { color: #595c5d; font-size: 0.9rem; line-height: 1.65; margin-bottom: 1.25rem; }

        /* card type: smart */
        .mc-smart { background: #ffffff; padding: 1.75rem 1.5rem; display: flex; flex-direction: column; justify-content: space-between; }
        .mc-smart-title { font-family: 'Lexend', sans-serif; font-size: 1.4rem; font-weight: 700; margin-bottom: 0.6rem; color: #2c2f30; }
        .mc-smart-desc { color: #595c5d; font-size: 0.9rem; line-height: 1.65; }
        .mc-smart-footer { margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid rgba(117,119,120,0.2); display: flex; align-items: center; justify-content: space-between; }

        /* Arrow buttons */
        .carousel-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1.25rem;
        }

        .carousel-arrow {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 9999px;
          border: 2px solid #375c91;
          background: transparent;
          color: #375c91;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, transform 0.15s;
          flex-shrink: 0;
        }
        .carousel-arrow:active { transform: scale(0.92); }
        .carousel-arrow:hover { background: #375c91; color: #fff; }
        .carousel-arrow svg { width: 1.1rem; height: 1.1rem; }

        /* Dot indicators */
        .carousel-dots {
          display: flex;
          gap: 0.45rem;
          align-items: center;
        }
        .carousel-dot {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: #b0b4b6;
          transition: background 0.25s, width 0.25s;
          cursor: pointer;
        }
        .carousel-dot.active {
          background: #375c91;
          width: 20px;
        }

        /* Progress bar */
        .carousel-progress-bar {
          height: 2px;
          background: rgba(55,92,145,0.15);
          border-radius: 9999px;
          margin-top: 0.9rem;
          overflow: hidden;
        }
        .carousel-progress-fill {
          height: 100%;
          background: linear-gradient(to right, #375c91, #6c5a00);
          border-radius: 9999px;
          transition: width 0.1s linear;
        }

        /* Slide transition */
        .mobile-card-transition {
          animation: slideInCard 0.38s cubic-bezier(0.22,1,0.36,1);
        }
        @keyframes slideInCard {
          from { opacity: 0; transform: translateX(28px) scale(0.97); }
          to   { opacity: 1; transform: translateX(0)  scale(1); }
        }

        @media (max-width: 767px) {
          .facilities-section { padding-top: 4rem; padding-bottom: 3rem; }
          .facilities-header  { margin-bottom: 2rem; }
          .facilities-inner   { padding: 0 1.25rem; }
          .facilities-grid    { display: none !important; }
          .mobile-carousel-wrap { display: block; }
          .facilities-title   { font-size: clamp(2.6rem, 12vw, 4rem); }
        }
      `}</style>

      <section className="facilities-section">
        <div className="asymmetric-pattern" />

        <div className="facilities-inner">
          {/* Header */}
          <header className="facilities-header">
            <span className="facilities-eyebrow">World-Class Infrastructure</span>
            <h1 className="facilities-title">
              Built for <br />
              <span>Excellence.</span>
            </h1>
          </header>

          {/* ── Desktop Grid (unchanged) ── */}
          <div className="facilities-grid">
            <div className="card-featured">
              <div className="card-featured-img-wrapper">
                <img className="facility-img" src={facilities[0].img} alt="Modern high-tech science laboratory" />
              </div>
              <div className="card-featured-body">
                <div className="card-featured-icon-row">
                  <span className="material-symbols-outlined icon-secondary">biotech</span>
                  <h2 className="card-featured-title">Science Labs</h2>
                </div>
                <p className="card-featured-desc">Advanced research environments equipped with precision instruments, fostering a culture of empirical inquiry and breakthrough discovery.</p>
              </div>
              <div className="glass-badge">Featured Space</div>
            </div>

            <div className="col-side">
              <div className="card-library">
                <div style={{ position: "relative", zIndex: 1 }}>
                  <span className="material-symbols-outlined icon-primary">local_library</span>
                  <h3 className="card-library-title">Digital Library</h3>
                  <p className="card-library-desc">Access over 50,000 global journals and interactive e-media in our silent, high-speed knowledge hub.</p>
                </div>
                <span className="material-symbols-outlined card-library-bg-icon">auto_stories</span>
              </div>
              <div className="card-auditorium">
                <h3 className="card-auditorium-title">Modern Auditorium</h3>
                <p className="card-auditorium-desc">A 1,200-seat theatrical venue with professional acoustics and 4K projection for global symposiums.</p>
                <img className="card-auditorium-img" src={facilities[2].img} alt="Grand modern auditorium" />
              </div>
            </div>

            <div className="row-bottom">
              <div className="card-sports">
                <div className="card-sports-top">
                  <span className="material-symbols-outlined icon-secondary">sports_soccer</span>
                  <span className="tag-badge">Olympic Spec</span>
                </div>
                <h3 className="card-sports-title">Sports Arena</h3>
                <p className="card-sports-desc">Multi-disciplinary athletic complex featuring an indoor heated pool and FIFA-approved turf.</p>
              </div>
              <div className="card-arts">
                <h3 className="card-arts-title">Arts &amp; Design Studio</h3>
                <p className="card-arts-desc">A light-drenched atelier for traditional fine arts and industrial 3D prototyping.</p>
                <div className="avatar-stack">
                  <div><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh31W2d-UWopfusxSZF7qRmD7AXswdm99k-LI57SsGLMC6S-RQaL6jiLmuPYWf9Xg7MNKe3s0KjPbFExGEdumVVg7J9v_mlbCSc9uXNQ6JRhlqOtnNXQVgi3Cr4_xtrMkmOUaY-g5eqMzcCXfDQMIi1uXNTflgO9kdDu7it1rg4jtFW0YP_EZanX_3wGF9oiAv0XPHKyH2ao6sdHwxm0f2DDy1nzOztZZzBqjOBuzukL8Q1GpnXDpl2ZYWiGlapDbwhvSPzmpqMaU" alt="Art palette" /></div>
                  <div><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3tL1y6aypPxjZuRgeKmZ5rAivV1aWARBohqtA46tk1EY4kPi3FCRashsok4q1msuI06bCEVfB74bdK3RBw6SwKLJ4CdwxDTA9Ts4f_U2TnPwL9ofJSxaXs9i1F4f5XDoCGKQhHjRAbNW2rdzBscz4MrT5eVpz7e3LFta1oX4CJTEZumJ_Sf-V7OJpWMhVfhyXZtGTcp7s1nV6oK5P0BvshWyozngJgq3IxK3kW3__c379SjLRF4BSjNmrWvj63FRmQ0i-P3ecl1E" alt="Digital design" /></div>
                </div>
              </div>
              <div className="card-smart">
                <div>
                  <span className="material-symbols-outlined icon-primary">settings_input_component</span>
                  <h3 className="card-smart-title">Smart Classrooms</h3>
                  <p className="card-smart-desc">Collaborative spaces featuring AI-integrated interactive boards and ergonomic modular seating.</p>
                </div>
                <div className="card-smart-footer">
                  <span className="tag-next-gen">Next-Gen Tech</span>
                  <span className="material-symbols-outlined icon-bolt">bolt</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Mobile Carousel ── */}
          <MobileCarousel
            activeIndex={activeIndex}
            isPaused={isPaused}
            onPause={() => setIsPaused(true)}
            onResume={() => setTimeout(() => setIsPaused(false), 3000)}
            onNext={next}
            onPrev={prev}
            onGoTo={goTo}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          />
        </div>
      </section>
    </>
  );
};

/* ── Mobile Carousel Sub-component ── */
interface CarouselProps {
  activeIndex: number;
  isPaused: boolean;
  onPause: () => void;
  onResume: () => void;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (i: number) => void;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchEnd: (e: React.TouchEvent) => void;
}

const MobileCarousel: React.FC<CarouselProps> = ({
  activeIndex, isPaused, onPause, onResume,
  onNext, onPrev, onGoTo, onTouchStart, onTouchEnd,
}) => {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const INTERVAL = 2000;

  useEffect(() => {
    if (isPaused) {
      setProgress(0);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }
    startTimeRef.current = null;
    const tick = (ts: number) => {
      if (!startTimeRef.current) startTimeRef.current = ts;
      const elapsed = ts - startTimeRef.current;
      setProgress(Math.min((elapsed / INTERVAL) * 100, 100));
      if (elapsed < INTERVAL) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setProgress(0);
        startTimeRef.current = null;
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [activeIndex, isPaused]);

  const f = facilities[activeIndex];

  return (
    <div className="mobile-carousel-wrap">
      {/* Card */}
      <div
        key={activeIndex}
        className="mobile-card mobile-card-transition"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {f.type === "featured" && (
          <div className="mc-featured">
            <img className="mc-featured-img" src={f.img} alt={f.title} />
            <div className="mc-glass-badge">Featured Space</div>
            <div className="mc-featured-body">
              <div className="mc-featured-icon-row">
                <span className="material-symbols-outlined icon-secondary" style={{ fontSize: "1.75rem" }}>{f.icon}</span>
                <h2 className="mc-featured-title">{f.title}</h2>
              </div>
              <p className="mc-featured-desc">{f.desc}</p>
            </div>
          </div>
        )}

        {f.type === "library" && (
          <div className="mc-library">
            <span className="material-symbols-outlined icon-primary" style={{ fontSize: "2.5rem" }}>{f.icon}</span>
            <h3 className="mc-lib-title">{f.title}</h3>
            <p className="mc-lib-desc">{f.desc}</p>
            <span className="material-symbols-outlined mc-library-bg-icon">auto_stories</span>
          </div>
        )}

        {f.type === "auditorium" && (
          <div className="mc-auditorium">
            <h3 className="mc-aud-title">{f.title}</h3>
            <p className="mc-aud-desc">{f.desc}</p>
            <img className="mc-aud-img" src={f.img} alt={f.title} />
          </div>
        )}

        {f.type === "sports" && (
          <div className="mc-sports">
            <div className="mc-sports-top">
              <span className="material-symbols-outlined icon-secondary" style={{ fontSize: "2rem" }}>{f.icon}</span>
              <span className="tag-badge">{f.tag}</span>
            </div>
            <h3 className="mc-sports-title">{f.title}</h3>
            <p className="mc-sports-desc">{f.desc}</p>
          </div>
        )}

        {f.type === "arts" && (
          <div className="mc-arts">
            <h3 className="mc-arts-title">{f.title}</h3>
            <p className="mc-arts-desc">{f.desc}</p>
            <div className="avatar-stack">
              <div><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh31W2d-UWopfusxSZF7qRmD7AXswdm99k-LI57SsGLMC6S-RQaL6jiLmuPYWf9Xg7MNKe3s0KjPbFExGEdumVVg7J9v_mlbCSc9uXNQ6JRhlqOtnNXQVgi3Cr4_xtrMkmOUaY-g5eqMzcCXfDQMIi1uXNTflgO9kdDu7it1rg4jtFW0YP_EZanX_3wGF9oiAv0XPHKyH2ao6sdHwxm0f2DDy1nzOztZZzBqjOBuzukL8Q1GpnXDpl2ZYWiGlapDbwhvSPzmpqMaU" alt="" /></div>
              <div><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3tL1y6aypPxjZuRgeKmZ5rAivV1aWARBohqtA46tk1EY4kPi3FCRashsok4q1msuI06bCEVfB74bdK3RBw6SwKLJ4CdwxDTA9Ts4f_U2TnPwL9ofJSxaXs9i1F4f5XDoCGKQhHjRAbNW2rdzBscz4MrT5eVpz7e3LFta1oX4CJTEZumJ_Sf-V7OJpWMhVfhyXZtGTcp7s1nV6oK5P0BvshWyozngJgq3IxK3kW3__c379SjLRF4BSjNmrWvj63FRmQ0i-P3ecl1E" alt="" /></div>
            </div>
          </div>
        )}

        {f.type === "smart" && (
          <div className="mc-smart">
            <div>
              <span className="material-symbols-outlined icon-primary" style={{ fontSize: "2.5rem" }}>{f.icon}</span>
              <h3 className="mc-smart-title">{f.title}</h3>
              <p className="mc-smart-desc">{f.desc}</p>
            </div>
            <div className="mc-smart-footer">
              <span className="tag-next-gen">Next-Gen Tech</span>
              <span className="material-symbols-outlined icon-bolt">bolt</span>
            </div>
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div className="carousel-progress-bar">
        <div className="carousel-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Controls row: arrow · dots · arrow */}
      <div className="carousel-controls">
        <button
          className="carousel-arrow"
          onClick={() => { onPause(); onPrev(); onResume(); }}
          aria-label="Previous"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="carousel-dots">
          {facilities.map((_, i) => (
            <div
              key={i}
              className={`carousel-dot${i === activeIndex ? " active" : ""}`}
              onClick={() => { onPause(); onGoTo(i); onResume(); }}
              role="button"
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          className="carousel-arrow"
          onClick={() => { onPause(); onNext(); onResume(); }}
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FacilitiesSection;