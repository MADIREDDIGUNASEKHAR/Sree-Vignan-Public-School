"use client";

import React from "react";

// ─── types ────────────────────────────────────────────────────────────────────

interface Founder {
  name: string;
  role: string;
  badge: string;
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
    name: "Dr. Alistair Vance",
    role: "Co-Founder & Director",
    badge: "Visionary",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDc1mMIUxlWuwh3ScPCF3vccFT7NZtkXTYYoY-HBL2xNhDxP95-Adhbmb5gbOF97B4CvNxT17TfQjJCtymeIZtMUTBlH4x0stKj4yoANQGAJRwI_jfBFo3nb7W5fEW0QRIRnAT8y8egFCjxAIY50y1iNVPC437JGUj81KO02fNxIXPBSB07cxERd4T2nUCafJVRxbXzXAtyaXiiU7rBSfEQNXqMX8CUAdq00UXlk7t3ui3jcTyjk8nNQ_fC7v-uGo6Es8NKTOYT64k",
    imgAlt:
      "Distinguished older man in a navy blue suit with silver hair, looking confidently into the camera",
    bio: [
      "With over 30 years in international education, Dr. Vance founded Academic Vanguard to bridge the gap between traditional theory and practical global leadership.",
      "His research in cognitive learning pathways remains the foundation of our unique curriculum.",
    ],
  },
  {
    name: "Elena Moretti",
    role: "Co-Founder & Director",
    badge: "Strategist",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCxwLE3KvLUPoM3ASnoiJCJvS1MU89I8A2UopRlYLqr7cCyjE5QC0ciDVzsxJWDZKw2ucpG6viPX2uePH39KX9BJux_ZePUkmO4oTC9XjQM0ynla3ndAzfYTDhgKxt3Xw0dGdc8buIT5XFo1E6_GPxv4rhcz65jZURrJ9CBBOZud53g6qAJASjC2cMEytw6a5AJwojP1yd2Y4YJfFBcM-nc38a95N0w0sBMM7vMLpiqv-aVpWtss4Px0whwVK9HYyhff5eUZsW2yD4",
    imgAlt:
      "Professional woman with dark hair wearing a tailored ivory blazer, sitting in a glass-walled conference room",
    bio: [
      "Elena oversees the institute's strategic growth and industry partnerships, ensuring every student has access to top-tier mentorship.",
      "She previously served as a senior advisor for global educational standard boards across Europe and Asia.",
    ],
  },
];

const leaders: Leader[] = [
  {
    name: "Julian Thorne",
    title: "Academic Dean",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChWnTvZsaKHWAQo8xLmPhm13jTBHR_rJToECjBOX6HjIJrRzd-PnG19KGcicxZdsl7P0GnXK33MLQy23V0MA2nHwdb-uOyPIvIYARXgtvuzUR1778-guou24k1AwDliO2x5sIeaUMrQQGMzkpAGbXb06dOq2lJ_O0XbW5lFusXLN1x_mGZQGNFOUByVyGj7CFBgksZizCvgS2B1bJq3vQgP6hgKJN_iE7RaLG-48zzCjW1P8Ed3PuT7NBqeu5efb3Py9CLl8DM9L8",
    imgAlt: "Portrait of a man in professional attire against a neutral architectural background",
  },
  {
    name: "Sarah Jenkins",
    title: "Director of Admissions",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvpoFVmg8Pmz8K8oUuyTEWuJIAk26KV23VMOymuXYNiNufwszJN_V8WUnszRx9RfEJA0OmzKUYPUAfucBWbw09rw-UrW3ZXK6vkxEX8ozMC2UOSqR4YiWdZNK4z-IH_tmwe5_fSdPbCkmL4fBDzLVs-3iNTdbBr-TYvjdrhgArX7UGVr5AVa_J8PosrFlqw1eYzvebSB-Ptq5q14ayjIFmAGpRIKdebgyc3C6C0L-vWVDLPAcR_kne9rxA2gB_pZfqDjon4Kng_zc",
    imgAlt: "Portrait of a confident woman in a business casual outfit, smiling warmly",
  },
  {
    name: "Marcus Reed",
    title: "Head of Research",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDy5-ZTHJ3IA57RNDk684Bfwl54gA1G4rZJQUJSrJ6tbSjoQHCzCDNNHMzGtuRPmU4YOFbg-SmmofuoV5kEijQutX42wnES4IjS4rdmG76cZfTvEFhNk_6dyo4rNN8zaYCAqnAZMprzlvR688Cxzn95M8kGgnsJcxVm9m94Se4Oh1VNInwqUEPXU4lTPk1-falTiCyUGInUv20Z6MUW9S_sCAceK9Br1GunV24MDPtOD4S41Z-WPErgJybe2SB1mrfkbSX1XlMs-FQ",
    imgAlt: "Close-up headshot of a middle-aged man with glasses, looking thoughtful",
  },
  {
    name: "Dr. Linda Chen",
    title: "Dean of Students",
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXBaHb2hdC9hd-r-_9LACS0lrd-3z850ARZIr9Xj5EupDuBHHXsNRqExj_Ry6UTemeWr-COJcy7P_0VJ5ZJc5zyWuxPrT5jy6BVOBAQUiZ-KrJjIO-z4OqSvNZB3a41V_8IR1p6AirkLmSPGhdgnInKyL2nS3qtmL5DEpKb1H-sZ2dT-Ppx4eExIwJfITR50-qn90uepbwxM_ZSr03ZIY8xqxEk_-5wEUstH0o0Pe55cqLOWdAtgzwffjSRsX8P9_nLTKVd0kX5TQ",
    imgAlt: "Smiling woman with glasses and short hair, wearing a navy sweater",
  },
];

// ─── sub-components ───────────────────────────────────────────────────────────

function FounderCard({ founder }: { founder: Founder }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden flex flex-col md:flex-row shadow-xl">
      {/* Image */}
      <div className="md:w-1/2 relative h-[400px] md:h-auto">
        <img
          src={founder.imgSrc}
          alt={founder.imgAlt}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 left-4 bg-[#ffd709]/90 backdrop-blur-md px-4 py-1 rounded-full text-[#5b4b00] font-bold text-xs tracking-widest uppercase">
          {founder.badge}
        </span>
      </div>

      {/* Content */}
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <h3 className="font-headline text-3xl font-bold text-[#375c91] mb-1">
          {founder.name}
        </h3>
        <p className="text-[#6c5a00] font-semibold tracking-wide uppercase text-sm mb-6">
          {founder.role}
        </p>
        {founder.bio.map((paragraph, i) => (
          <p
            key={i}
            className={`text-[#595c5d] leading-relaxed ${
              i === 0 ? "text-lg mb-4" : ""
            }`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

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

// ─── main component ───────────────────────────────────────────────────────────

export default function FoundersPage() {
  return (
    <main className="bg-[#f5f6f7] text-[#2c2f30] font-sans selection:bg-[#ffd709]">
      {/* ── Hero ── */}
      <section className="relative h-[614px] flex items-center justify-center overflow-hidden bg-[#2a5084]">
        {/* Background overlay image */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv8hZ_e_DVL3DZtOjqjD7sSRLx6JRwU8VhE-fGdV7f-uTGL9wOraVze4TlZKClLcbT8HK1SgIv3rFJvWOKbedUreHWiEknCQAU23U7rhSda6uSG6M3tz5ZCxRCzJw-O7ZgO6a5goSuGd1hWZ4X7cBBi9KHuUMODXgjhBhNmabLvf1_UD8EMHFMxQ0olKMhCLjOah3eVJd88qTeAqvRskTol7RAj_DvUitetb68o5895edr58F9Le7Prbsl9_C7RjUzY5SZ-rURc1w"
            alt="Classic mahogany paneled library"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4 uppercase leading-tight">
            The Visionaries{" "}
            <span className="text-[#ffd709]">Behind Our Legacy</span>
          </h1>
          <p className="text-xl text-[#eff2ff] max-w-2xl mx-auto opacity-90 leading-relaxed">
            Merging decades of pedagogical expertise with a forward-thinking
            approach to student excellence and global leadership.
          </p>
        </div>
      </section>

      {/* ── Founders ── */}
      <section className="max-w-7xl mx-auto px-6 -mt-32 relative z-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {founders.map((founder) => (
            <FounderCard key={founder.name} founder={founder} />
          ))}
        </div>
      </section>

      {/* ── Leadership Team ── */}
      <section className="bg-[#eff1f2] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#6c5a00] font-bold tracking-[0.2em] uppercase text-sm">
              Our Backbone
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#375c91] mt-2">
              The Leadership Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader) => (
              <LeaderCard key={leader.name} leader={leader} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="bg-[#1e2a6e] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white uppercase mb-6">
              OUR <span className="text-[#f97316]">MISSION</span>
            </h2>
            <p className="text-white/90 text-lg leading-relaxed max-w-lg mx-auto">
              We will inspire and challenge every student to flourish and achieve
              their full potential, both now and in the future, and instill a
              passion for lifelong learning.
            </p>
          </div>

          {/* Vision */}
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white uppercase mb-6">
              OUR <span className="text-[#f97316]">VISION</span>
            </h2>
            <p className="text-white/90 text-lg leading-relaxed max-w-lg mx-auto">
              TISB strives to be a globally leading innovative international
              school that fosters a culture of aspiration, empowerment and strong
              community values - making it the first school of choice.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="bg-[#1e2a6e] pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-white uppercase text-center mb-12">
            OUR <span className="text-[#f97316]">VALUES</span>
          </h2>

          {/* Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Respect */}
            <div className="bg-white rounded-2xl p-6 flex items-start gap-5">
              <div className="shrink-0 w-14 h-14 rounded-full bg-[#1e2a6e] flex items-center justify-center">
                {/* Handshake icon */}
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 6.5A2.5 2.5 0 0 1 13.5 4H16l3 3-1.5 1.5L16 7h-2.5A.5.5 0 0 0 13 7.5V9h-2V7.5A2.5 2.5 0 0 1 11 6.5zM4 10l1.5-1.5 3 3L10 10l1 1-1.5 1.5 1 1L12 12l1 1-4 4-5-5 1-1-1-1zM17 10l1 1-4 4-1-1 4-4z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1e2a6e] mb-2">Respect</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  TISB believes in respect towards students, staff and the
                  school, and fosters relationships based on fun and friendship.
                </p>
              </div>
            </div>

            {/* Acceptance & Equality */}
            <div className="bg-white rounded-2xl p-6 flex items-start gap-5">
              <div className="shrink-0 w-14 h-14 rounded-full bg-[#1e2a6e] flex items-center justify-center">
                {/* Thumbs up icon */}
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 20h2a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H2v9zm18.83-7.12A2 2 0 0 0 19 10h-5V7a3 3 0 0 0-3-3l-1 6-2 2v8h10.28a2 2 0 0 0 1.98-1.69l1-7a2 2 0 0 0-.43-1.43z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1e2a6e] mb-2">Acceptance &amp; Equality</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  TISB prides itself on student equality and fairness regardless
                  of age, background or ability. Diversity is accepted and valued
                  so no one feels excluded or less important.
                </p>
              </div>
            </div>

            {/* Collaboration & Camaraderie */}
            <div className="bg-white rounded-2xl p-6 flex items-start gap-5">
              <div className="shrink-0 w-14 h-14 rounded-full bg-[#1e2a6e] flex items-center justify-center">
                {/* People/team icon */}
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1e2a6e] mb-2">Collaboration &amp; Camaraderie</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  TISB&apos;s community spirit and friendly atmosphere allow
                  individual personalities to develop, and our student-led
                  events and activities foster a supportive, nurturing and caring
                  community.
                </p>
              </div>
            </div>

            {/* Honesty */}
            <div className="bg-white rounded-2xl p-6 flex items-start gap-5">
              <div className="shrink-0 w-14 h-14 rounded-full bg-[#1e2a6e] flex items-center justify-center">
                {/* Heart/integrity icon */}
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1e2a6e] mb-2">Honesty</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We feel proud to be part of our school community with a desire
                  to excel and to do the best we can with integrity and honesty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}