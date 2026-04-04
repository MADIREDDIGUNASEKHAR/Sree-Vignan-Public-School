import React from "react";

const FacilitiesSection: React.FC = () => {
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

        .facilities-title span {
          color: #6c5a00;
        }

        /* Grid Layout */
        .facilities-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 2rem;
          align-items: start;
        }

        /* Featured Card */
        .card-featured {
          grid-column: span 8;
          position: relative;
          overflow: hidden;
          border-radius: 0.75rem;
          background-color: #ffffff;
          transition: box-shadow 0.3s ease;
        }

        .card-featured:hover {
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }

        .card-featured:hover img.facility-img {
          filter: grayscale(0);
        }

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
          background: rgba(255, 255, 255, 0.95);
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

        .icon-secondary {
          color: #6c5a00;
          font-size: 2.25rem;
        }

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
          background: rgba(255, 215, 9, 0.7);
          backdrop-filter: blur(20px);
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          font-family: 'Lexend', sans-serif;
          font-weight: 700;
          color: #5b4b00;
          font-size: 0.875rem;
        }

        /* Side Column */
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

        .card-library:hover .card-library-bg-icon {
          opacity: 0.1;
        }

        .card-library-bg-icon {
          position: absolute;
          bottom: -1rem;
          right: -1rem;
          opacity: 0.05;
          font-size: 7.5rem;
          transition: opacity 0.3s;
          color: #2c2f30;
        }

        .icon-primary {
          color: #375c91;
          font-size: 3rem;
          margin-bottom: 1.5rem;
          display: block;
        }

        .card-library-title {
          font-family: 'Lexend', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #2c2f30;
        }

        .card-library-desc {
          color: #595c5d;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .card-auditorium {
          background-color: #375c91;
          color: #eff2ff;
          padding: 2rem;
          border-radius: 0.75rem;
          position: relative;
          overflow: hidden;
        }

        .card-auditorium-title {
          font-family: 'Lexend', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .card-auditorium-desc {
          color: rgba(239, 242, 255, 0.8);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .card-auditorium-img {
          width: 100%;
          height: 8rem;
          object-fit: cover;
          border-radius: 0.5rem;
          opacity: 0.4;
        }

        /* Bottom Row */
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

        .card-sports:hover {
          transform: translateY(-8px);
        }

        .card-sports-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

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

        .card-sports-title {
          font-family: 'Lexend', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #2c2f30;
        }

        .card-sports-desc {
          color: #595c5d;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .card-arts {
          background-color: #e0e3e4;
          padding: 2rem;
          border-radius: 0.75rem;
          overflow: hidden;
          transform: translateY(3rem);
        }

        .card-arts-title {
          font-family: 'Lexend', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #2c2f30;
        }

        .card-arts-desc {
          color: #595c5d;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .avatar-stack {
          display: flex;
        }

        .avatar-stack > div {
          width: 4rem;
          height: 4rem;
          border-radius: 9999px;
          border: 4px solid #e0e3e4;
          overflow: hidden;
          margin-right: -1rem;
          background-color: #d1d5d7;
        }

        .avatar-stack > div img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

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

        .card-smart:hover {
          transform: translateY(-8px);
        }

        .card-smart-title {
          font-family: 'Lexend', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #2c2f30;
        }

        .card-smart-desc {
          color: #595c5d;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .card-smart-footer {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(117, 119, 120, 0.2);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .tag-next-gen {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          color: #375c91;
        }

        .icon-bolt {
          font-size: 1rem;
          color: #375c91;
        }

        @media (max-width: 768px) {
          .facilities-grid {
            grid-template-columns: 1fr;
          }
          .card-featured {
            grid-column: span 1;
          }
          .card-featured-body {
            width: 100%;
            position: static;
          }
          .col-side {
            grid-column: span 1;
          }
          .row-bottom {
            grid-column: span 1;
            grid-template-columns: 1fr;
          }
          .card-arts {
            transform: none;
          }
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

          {/* Main Grid */}
          <div className="facilities-grid">

            {/* Featured: Science Labs */}
            <div className="card-featured">
              <div className="card-featured-img-wrapper">
                <img
                  className="facility-img"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiiIzaGUTx6HPdKzeGLbK1x6j92dhJxWZtUG3MZQ8b6aVn9kS7VoKXTV8NmmPzrl20ehaY2ePZlz6ADSjILGPoUUJoL0LfT8nQUlRc8_oPm10ZKHpu6TT8TCD5TjJhtmHfcPxG8T75rqHG_jCfuxsem-s_IBC1aZbjyqrcywh-igEIeASxKf_Mhak1ixLoeO3MlTa6n3HO8_6O1DTzVDN-IvMskKNYUB_38RF1OjPQxlxL4bkuh9mRg0hS2F4szH8HrzGHWJGN1M8"
                  alt="Modern high-tech science laboratory"
                />
              </div>
              <div className="card-featured-body">
                <div className="card-featured-icon-row">
                  <span className="material-symbols-outlined icon-secondary">biotech</span>
                  <h2 className="card-featured-title">Science Labs</h2>
                </div>
                <p className="card-featured-desc">
                  Advanced research environments equipped with precision instruments, fostering a
                  culture of empirical inquiry and breakthrough discovery.
                </p>
              </div>
              <div className="glass-badge">Featured Space</div>
            </div>

            {/* Side Column */}
            <div className="col-side">
              {/* Digital Library */}
              <div className="card-library">
                <div style={{ position: "relative", zIndex: 1 }}>
                  <span className="material-symbols-outlined icon-primary">local_library</span>
                  <h3 className="card-library-title">Digital Library</h3>
                  <p className="card-library-desc">
                    Access over 50,000 global journals and interactive e-media in our silent,
                    high-speed knowledge hub.
                  </p>
                </div>
                <span className="material-symbols-outlined card-library-bg-icon">auto_stories</span>
              </div>

              {/* Modern Auditorium */}
              <div className="card-auditorium">
                <h3 className="card-auditorium-title">Modern Auditorium</h3>
                <p className="card-auditorium-desc">
                  A 1,200-seat theatrical venue with professional acoustics and 4K projection for
                  global symposiums.
                </p>
                <img
                  className="card-auditorium-img"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdhY8QJyqFVMYKiW_NVpmi78oKzQQH-GNhy8OLj1fhlF1PkB0Tuyhg_U7KGrEdEDomVgbGmsP6HF4bZHcBHk3xxYe875NTwmWQ-Zt0Na51BDKaOvg5q1tPeveYzRyfUjJhRZCA-wOXWzCEDudz_ngT-tP02ogs_s754VFx-Vof9GsP-F-fTU2iSYTi_uc0Kee0WjqqAxZZqmhwICOTWxYREQF_91hfW8hN7fvnWLZ-s3nyryP0Km5w_Pngf1koB3CONpbjQfZd5MU"
                  alt="Grand modern auditorium"
                />
              </div>
            </div>

            {/* Bottom Row */}
            <div className="row-bottom">
              {/* Sports Arena */}
              <div className="card-sports">
                <div className="card-sports-top">
                  <span className="material-symbols-outlined icon-secondary">sports_soccer</span>
                  <span className="tag-badge">Olympic Spec</span>
                </div>
                <h3 className="card-sports-title">Sports Arena</h3>
                <p className="card-sports-desc">
                  Multi-disciplinary athletic complex featuring an indoor heated pool and
                  FIFA-approved turf.
                </p>
              </div>

              {/* Arts & Design Studio */}
              <div className="card-arts">
                <h3 className="card-arts-title">Arts &amp; Design Studio</h3>
                <p className="card-arts-desc">
                  A light-drenched atelier for traditional fine arts and industrial 3D prototyping.
                </p>
                <div className="avatar-stack">
                  <div>
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh31W2d-UWopfusxSZF7qRmD7AXswdm99k-LI57SsGLMC6S-RQaL6jiLmuPYWf9Xg7MNKe3s0KjPbFExGEdumVVg7J9v_mlbCSc9uXNQ6JRhlqOtnNXQVgi3Cr4_xtrMkmOUaY-g5eqMzcCXfDQMIi1uXNTflgO9kdDu7it1rg4jtFW0YP_EZanX_3wGF9oiAv0XPHKyH2ao6sdHwxm0f2DDy1nzOztZZzBqjOBuzukL8Q1GpnXDpl2ZYWiGlapDbwhvSPzmpqMaU"
                      alt="Art palette"
                    />
                  </div>
                  <div>
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3tL1y6aypPxjZuRgeKmZ5rAivV1aWARBohqtA46tk1EY4kPi3FCRashsok4q1msuI06bCEVfB74bdK3RBw6SwKLJ4CdwxDTA9Ts4f_U2TnPwL9ofJSxaXs9i1F4f5XDoCGKQhHjRAbNW2rdzBscz4MrT5eVpz7e3LFta1oX4CJTEZumJ_Sf-V7OJpWMhVfhyXZtGTcp7s1nV6oK5P0BvshWyozngJgq3IxK3kW3__c379SjLRF4BSjNmrWvj63FRmQ0i-P3ecl1E"
                      alt="Digital design"
                    />
                  </div>
                </div>
              </div>

              {/* Smart Classrooms */}
              <div className="card-smart">
                <div>
                  <span className="material-symbols-outlined icon-primary">settings_input_component</span>
                  <h3 className="card-smart-title">Smart Classrooms</h3>
                  <p className="card-smart-desc">
                    Collaborative spaces featuring AI-integrated interactive boards and ergonomic
                    modular seating.
                  </p>
                </div>
                <div className="card-smart-footer">
                  <span className="tag-next-gen">Next-Gen Tech</span>
                  <span className="material-symbols-outlined icon-bolt">bolt</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default FacilitiesSection;