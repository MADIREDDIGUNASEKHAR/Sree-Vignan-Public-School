"use client";

import React, { useState, useEffect, useRef } from "react";

// ─── types ────────────────────────────────────────────────────────────────────

interface Founder {
  name: string;
  role: string;
  qualification: string;
  bio: string[];
  imgSrc: string;
  imgAlt: string;
}

interface Leader {
  name: string;
  title: string;
  imgSrc: string;
  imgAlt: string;
}

// ─── data ─────────────────────────────────────────────────────────────────────

const founders: Founder[] = [
  {
    name: "Mr.M.Murali krishnam Raju",
    role: "Director",
    qualification: "AMIE",
    imgSrc: "/gallery/faculty/Director.jpg",
    imgAlt: "Director Image Loading",
    bio: [
      "Sree Vignan stands as a result of years of unwavering dedication, perseverance, and a deep belief in the power of education. Every step of its growth reflects hard work, sacrifice, and a commitment to excellence. We continue to move forward with the same vision—to provide quality education and shape responsible, successful individuals.",
    ],
  },
  {
    name: "Mrs. Jnaneswari",
    role: "Principal",
    qualification: "B.A., B.Ed.",
    imgSrc: "/gallery/faculty/Principal.jpg",
    imgAlt: "Professional woman with dark hair wearing a tailored ivory blazer",
    bio: [
      "Sree Vignan is not just a place of learning, but a space built with dedication, care, and purpose. Every child we guide is a step towards building a better future, and that responsibility continues to inspire us every day.",
    ],
  },
];

const leaders: Leader[] = [
  {
    name: "ATKINSON SIR",
    title: "Academic Dean",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuChWnTvZsaKHWAQo8xLmPhm13jTBHR_rJToECjBOX6HjIJrRzd-PnG19KGcicxZdsl7P0GnXK33MLQy23V0MA2nHwdb-uOyPIvIYARXgtvuzUR1778-guou24k1AwDliO2x5sIeaUMrQQGMzkpAGbXb06dOq2lJ_O0XbW5lFusXLN1x_mGZQGNFOUByVyGj7CFBgksZizCvgS2B1bJq3vQgP6hgKJN_iE7RaLG-48zzCjW1P8Ed3PuT7NBqeu5efb3Py9CLl8DM9L8",
    imgAlt: "Portrait of a man in professional attire against a neutral architectural background",
  },
  {
    name: "FRANCIS D'COSTA SIR",
    title: "Director of Admissions",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvpoFVmg8Pmz8K8oUuyTEWuJIAk26KV23VMOymuXYNiNufwszJN_V8WUnszRx9RfEJA0OmzKUYPUAfucBWbw09rw-UrW3ZXK6vkxEX8ozMC2UOSqR4YiWdZNK4z-IH_tmwe5_fSdPbCkmL4fBDzLVs-3iNTdbBr-TYvjdrhgArX7UGVr5AVa_J8PosrFlqw1eYzvebSB-Ptq5q14ayjIFmAGpRIKdebgyc3C6C0L-vWVDLPAcR_kne9rxA2gB_pZfqDjon4Kng_zc",
    imgAlt: "Portrait of a confident woman in a business casual outfit, smiling warmly",
  },
  {
    name: "D SATYA PRASAD SIR",
    title: "Head of Research",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDy5-ZTHJ3IA57RNDk684Bfwl54gA1G4rZJQUJSrJ6tbSjoQHCzCDNNHMzGtuRPmU4YOFbg-SmmofuoV5kEijQutX42wnES4IjS4rdmG76cZfTvEFhNk_6dyo4rNN8zaYCAqnAZMprzlvR688Cxzn95M8kGgnsJcxVm9m94Se4Oh1VNInwqUEPXU4lTPk1-falTiCyUGInUv20Z6MUW9S_sCAceK9Br1GunV24MDPtOD4S41Z-WPErgJybe2SB1mrfkbSX1XlMs-FQ",
    imgAlt: "Close-up headshot of a middle-aged man with glasses, looking thoughtful",
  },
  {
    name: "KRISHNA MASTER SIR",
    title: "Dean of Students",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXBaHb2hdC9hd-r-_9LACS0lrd-3z850ARZIr9Xj5EupDuBHHXsNRqExj_Ry6UTemeWr-COJcy7P_0VJ5ZJc5zyWuxPrT5jy6BVOBAQUiZ-KrJjIO-z4OqSvNZB3a41V_8IR1p6AirkLmSPGhdgnInKyL2nS3qtmL5DEpKb1H-sZ2dT-Ppx4eExIwJfITR50-qn90uepbwxM_ZSr03ZIY8xqxEk_-5wEUstH0o0Pe55cqLOWdAtgzwffjSRsX8P9_nLTKVd0kX5TQ",
    imgAlt: "Smiling woman with glasses and short hair, wearing a navy sweater",
  },
];

// ─── Calendar-flip Leader Carousel ───────────────────────────────────────────

type FlipDirection = "next" | "prev" | null;

const FLIP_MS = 480;

function LeaderCarousel() {
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [direction, setDirection] = useState<FlipDirection>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const t1 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t2 = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (next: number, dir: FlipDirection) => {
    if (flipping) return;
    setDirection(dir);
    setFlipping(true);
    t1.current = setTimeout(() => setDisplayed(next), FLIP_MS / 2);
    t2.current = setTimeout(() => {
      setCurrent(next);
      setFlipping(false);
      setDirection(null);
    }, FLIP_MS);
  };

  const handleNext = () => goTo((current + 1) % leaders.length, "next");
  const handlePrev = () => goTo((current - 1 + leaders.length) % leaders.length, "prev");

  useEffect(() => {
    autoRef.current = setInterval(() => {
      goTo((current + 1) % leaders.length, "next");
    }, 3500);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, flipping]);

  useEffect(() => {
    return () => {
      if (t1.current) clearTimeout(t1.current);
      if (t2.current) clearTimeout(t2.current);
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, []);

  const leader = leaders[displayed];

  const flipClass = flipping
    ? direction === "next"
      ? "leader-flip-next"
      : "leader-flip-prev"
    : "";

  return (
    <>
      <style>{`
        @keyframes flipNext {
          0%   { transform: translateY(0); opacity: 1; }
          49%  { transform: translateY(-12px); opacity: 0; }
          50%  { transform: translateY(12px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes flipPrev {
          0%   { transform: translateY(0); opacity: 1; }
          49%  { transform: translateY(12px); opacity: 0; }
          50%  { transform: translateY(-12px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .leader-flip-next {
          animation: flipNext ${FLIP_MS}ms cubic-bezier(0.4,0,0.2,1) forwards;
          will-change: transform, opacity;
        }
        .leader-flip-prev {
          animation: flipPrev ${FLIP_MS}ms cubic-bezier(0.4,0,0.2,1) forwards;
          will-change: transform, opacity;
        }
      `}</style>

      <div className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto select-none">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#6c5a00]">
          {current + 1} / {leaders.length}
        </p>

        <div
          key={current}
          className={`w-full bg-white rounded-2xl overflow-hidden ${flipClass}`}
          style={{ boxShadow: "0 -4px 16px rgba(0,0,0,0.18), 0 8px 32px rgba(0,0,0,0.12)" }}
        >
          <div className="w-full aspect-[4/3] overflow-hidden">
            <img
              src={leader.imgSrc}
              alt={leader.imgAlt}
              className="w-full h-full object-cover grayscale"
            />
          </div>

          <div className="px-6 py-5 border-t-4 border-[#ffd709]">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#375c91] mb-1">
              {leader.title}
            </p>
            <h4 className="text-xl font-extrabold text-[#2c2f30] tracking-tight">
              {leader.name}
            </h4>
          </div>

          <div className="bg-[#375c91] px-6 py-2 flex justify-between items-center">
            {leaders.map((_, i) => (
              <button
                key={i}
                onClick={() => { if (i !== current) goTo(i, i > current ? "next" : "prev"); }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-[#ffd709] w-5" : "bg-white/40 hover:bg-white/70 w-2"
                }`}
                aria-label={`Go to ${leaders[i].name}`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            disabled={flipping}
            className="w-11 h-11 rounded-full border-2 border-[#375c91] text-[#375c91] flex items-center justify-center hover:bg-[#375c91] hover:text-white active:scale-90 transition-all duration-200 disabled:opacity-40"
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <span className="text-[11px] text-[#9ca3af] tracking-wider uppercase font-semibold">flip page</span>
          <button
            onClick={handleNext}
            disabled={flipping}
            className="w-11 h-11 rounded-full border-2 border-[#375c91] text-[#375c91] flex items-center justify-center hover:bg-[#375c91] hover:text-white active:scale-90 transition-all duration-200 disabled:opacity-40"
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

// ─── Founder Card ─────────────────────────────────────────────────────────────

function FounderCard({ founder }: { founder: Founder }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-xl max-w-[600px] lg:max-w-[624px] mx-auto w-full">

      {/* ── Mobile layout ── */}
      <div className="flex flex-col md:hidden overflow-hidden">
        <img
          src={founder.imgSrc}
          alt={founder.imgAlt}
          className="w-full h-full object-cover"
          style={{
            maxHeight: 420,
            objectPosition: founder.role === "Principal" ? "center top" : "center",
          }}
        />
        <div className="px-5 pt-4 pb-1">
          <h3 className="font-headline text-[1.3rem] font-bold text-[#375c91] mb-0.5">
            {founder.name}
          </h3>
          <p className="text-[11px] text-[#6b7280] text-right pr-1 mb-1">
            — {founder.qualification}
          </p>
          <p className="text-[#6c5a00] font-semibold tracking-wide uppercase text-xs mb-3">
            {founder.role}
          </p>
        </div>
        <div className="px-5 pb-5">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1.5 text-xs font-bold text-[#375c91] uppercase tracking-wider mb-2 focus:outline-none"
          >
            <span>{expanded ? "Hide" : "Read more"}</span>
            <svg
              viewBox="0 0 24 24"
              className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight: expanded ? 300 : 0, opacity: expanded ? 1 : 0 }}
          >
            {founder.bio.map((p, i) => (
              <p key={i} className="text-[#595c5d] text-[13px] leading-relaxed mb-2">{p}</p>
            ))}
          </div>
        </div>
      </div>

      {/* ── Desktop layout ── */}
      <div className="hidden md:flex md:flex-col lg:flex-row items-stretch">
        <div className="w-full lg:w-[48%] relative min-h-[420px] lg:min-h-[460px] overflow-hidden bg-[#f9fafb]">
          <img
            src={founder.imgSrc}
            alt={founder.imgAlt}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full lg:w-[52%] p-5 lg:p-6 flex flex-col justify-center">
          <h3 className="font-headline text-[1.45rem] lg:text-[1.55rem] font-bold text-[#375c91] mb-1">
            {founder.name}
          </h3>
          <p className={`text-[11px] text-[#6b7280] mb-2 ${founder.role === "Director" ? "text-right pr-8" : "text-right"}`}>
            - {founder.qualification}
          </p>
          <p className="text-[#6c5a00] font-semibold tracking-wide uppercase text-xs mb-3">
            {founder.role}
          </p>
          {founder.bio.map((paragraph, i) => (
            <p key={i} className={`text-[#595c5d] leading-relaxed ${i === 0 ? "text-[13px] mb-2" : "text-[12px]"}`}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

    </div>
  );
}

// ─── Leader Card (desktop grid) ───────────────────────────────────────────────

function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <div className="group bg-white p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="aspect-square rounded-lg overflow-hidden mb-6">
        <img
          src={leader.imgSrc}
          alt={leader.imgAlt}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <h4 className="text-xl font-bold text-[#2c2f30] mb-1">{leader.name}</h4>
      <p className="text-[#595c5d] text-sm font-medium">{leader.title}</p>
    </div>
  );
}

// ─── Value Card ───────────────────────────────────────────────────────────────

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setExpanded((v) => !v)}
      className="w-full bg-white rounded-2xl p-6 flex items-start gap-5 text-left transition-shadow hover:shadow-lg focus:outline-none"
    >
      <div className="shrink-0 w-14 h-14 rounded-full bg-[#1e2a6e] flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-lg font-bold text-[#1e2a6e]">{title}</h3>
          <svg
            viewBox="0 0 24 24"
            className={`w-4 h-4 shrink-0 ml-2 text-[#1e2a6e] transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{ maxHeight: expanded ? 220 : 0, opacity: expanded ? 1 : 0 }}
        >
          <p className="text-gray-600 leading-relaxed text-sm mt-2">{description}</p>
        </div>
      </div>
    </button>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function FoundersPage() {
  return (
    <main className="bg-[#f5f6f7] text-[#2c2f30] font-sans selection:bg-[#ffd709]">

      {/* ── Hero ── */}
      <section className="relative h-[310px] md:h-[335px] flex items-center justify-center overflow-hidden bg-[#2a5084]">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv8hZ_e_DVL3DZtOjqjD7sSRLx6JRwU8VhE-fGdV7f-uTGL9wOraVze4TlZKClLcbT8HK1SgIv3rFJvWOKbedUreHWiEknCQAU23U7rhSda6uSG6M3tz5ZCxRCzJw-O7ZgO6a5goSuGd1hWZ4X7cBBi9KHuUMODXgjhBhNmabLvf1_UD8EMHFMxQ0olKMhCLjOah3eVJd88qTeAqvRskTol7RAj_DvUitetb68o5895edr58F9Le7Prbsl9_C7RjUzY5SZ-rURc1w"
            alt="Classic mahogany paneled library"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-[1.9rem] md:text-[2.8rem] font-extrabold text-white tracking-tight mb-2 uppercase leading-tight">
            The Visionaries{" "}
            <span className="text-[#ffd709]">Behind Our Legacy</span>
          </h1>
          <p className="text-xs md:text-[14px] text-[#eff2ff] max-w-lg mx-auto opacity-90 leading-relaxed">
            Merging decades of pedagogical expertise with a forward-thinking
            approach to student excellence and global leadership.
          </p>
        </div>
      </section>

      {/* ── Founders ── */}
      <section className="max-w-[78rem] mx-auto px-4 sm:px-6 -mt-8 md:-mt-10 relative z-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {founders.map((founder) => (
            <FounderCard key={founder.name} founder={founder} />
          ))}
        </div>
      </section>

      {/* ── Leadership Team ── */}
      <section className="bg-[#eff1f2] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
            <span className="text-[#6c5a00] font-bold tracking-[0.2em] uppercase text-sm">
              Our Backbone
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#375c91] mt-2">
              The Leadership Team
            </h2>
          </div>

          {/* Desktop: 4-column grid */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader) => (
              <LeaderCard key={leader.name} leader={leader} />
            ))}
          </div>

          {/* Mobile: calendar-flip carousel */}
          <div className="sm:hidden">
            <LeaderCarousel />
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="bg-[#1e2a6e] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white uppercase mb-6">
              OUR <span className="text-[#f97316]">MISSION</span>
            </h2>
            <p className="text-white/90 text-lg leading-relaxed max-w-lg mx-auto">
              TO PROVIDE A STRUCTURED AND SUPPORTIVE LEARNING ENVIRONMENT THAT ENABLES EVERY STUDENT TO ACHIEVE THEIR HIGHEST POTENTIAL....
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white uppercase mb-6">
              OUR <span className="text-[#f97316]">VISION</span>
            </h2>
            <p className="text-white/90 text-lg leading-relaxed max-w-lg mx-auto">
              THREE DECADES OF EXCELLENCE, SHAPING ACHIEVERS AND LEADING EVERY RESULT.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="bg-[#1e2a6e] -mt-px pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white uppercase text-center mb-12">
            OUR <span className="text-[#f97316]">VALUES</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <ValueCard
              title="Excellence"
              description="We strive for the highest standards in academics and overall development. We continuously encourage students to perform at their best and achieve outstanding results through dedication, focus, and consistent effort."
              icon={
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 6.5A2.5 2.5 0 0 1 13.5 4H16l3 3-1.5 1.5L16 7h-2.5A.5.5 0 0 0 13 7.5V9h-2V7.5A2.5 2.5 0 0 1 11 6.5zM4 10l1.5-1.5 3 3L10 10l1 1-1.5 1.5 1 1L12 12l1 1-4 4-5-5 1-1-1-1zM17 10l1 1-4 4-1-1 4-4z"/>
                </svg>
              }
            />

            <ValueCard
              title="Discipline"
              description="We believe discipline is the foundation of success. Our school fosters a structured environment where students develop self-control, responsibility, and respect for rules—essential qualities for lifelong achievement."
              icon={
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 20h2a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H2v9zm18.83-7.12A2 2 0 0 0 19 10h-5V7a3 3 0 0 0-3-3l-1 6-2 2v8h10.28a2 2 0 0 0 1.98-1.69l1-7a2 2 0 0 0-.43-1.43z"/>
                </svg>
              }
            />

            <ValueCard
              title="Commitment"
              description="We are dedicated to continuous growth and student success. Our teachers and students work together with determination and perseverance to achieve academic excellence and personal development."
              icon={
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              }
            />

            <ValueCard
              title="Student-Centered Learning"
              description="We focus on the unique potential of every student. We provide guidance and support to help each learner grow academically and personally."
              icon={
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              }
            />

          </div>
        </div>
      </section>

    </main>
  );
}
