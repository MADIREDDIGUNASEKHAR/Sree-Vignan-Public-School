"use client";


import React from "react";


// ─── DATA ─────────────────────────────────────────────────────────────────────


const TOP_THREE = [
 { rank: 3,  name: "Ravi Kumar Sharma",  score: "500/500", tag: "SCHOOL TOPPER", percentile: "100 Percentile", course: "Classroom Course" },
 { rank: 4,  name: "Priya Venkatesh",    score: "499/500", tag: "GIRL TOPPER",   percentile: "100 Percentile", course: "Classroom Course" },
 { rank: 5,  name: "Arjun Reddy",        score: "498/500", tag: "STATE RANK 5",  percentile: "100 Percentile", course: "Classroom Course" },
];


const RANKERS = [
 { rank: 11, name: "Sai Teja M.",   score: "497" },
 { rank: 12, name: "Lakshmi N.",    score: "496" },
 { rank: 17, name: "Vikram S.",     score: "495" },
 { rank: 18, name: "Meena R.",      score: "495" },
 { rank: 20, name: "Aditya K.",     score: "494" },
 { rank: 22, name: "Pooja V.",      score: "493" },
 { rank: 23, name: "Rahul M.",      score: "492" },
 { rank: 26, name: "Divya T.",      score: "491" },
 { rank: 31, name: "Kiran B.",      score: "490" },
 { rank: 32, name: "Sneha G.",      score: "490" },
 { rank: 33, name: "Nikhil P.",     score: "489" },
 { rank: 34, name: "Anjali C.",     score: "488" },
 { rank: 35, name: "Rohit V.",      score: "487" },
 { rank: 36, name: "Deepa S.",      score: "486" },
 { rank: 45, name: "Suresh N.",     score: "485" },
 { rank: 52, name: "Tanisha K.",    score: "484" },
 { rank: 54, name: "Manoj R.",      score: "483" },
 { rank: 56, name: "Geeta P.",      score: "482" },
 { rank: 60, name: "Harish D.",     score: "481" },
 { rank: 61, name: "Kavya S.",      score: "480" },
 { rank: 64, name: "Aryan C.",      score: "479" },
 { rank: 65, name: "Samanth P.",    score: "478" },
 { rank: 75, name: "Prabhav K.",    score: "477" },
 { rank: 81, name: "Aakash R.",     score: "476" },
 { rank: 82, name: "Nagireddy B.",  score: "475" },
 { rank: 87, name: "Moulik J.",     score: "474" },
 { rank: 91, name: "Airin J.",      score: "473" },
 { rank: 92, name: "Kartik G.",     score: "472" },
 { rank: 93, name: "Eiman S.",      score: "471" },
 { rank: 96, name: "Suyash K.",     score: "470" },
 { rank: 100,name: "Surbhit T.",    score: "469" },
];


// ─── AVATAR HELPERS ───────────────────────────────────────────────────────────


const PHOTO_COLORS = [
 "#1565C0","#283593","#6A1B9A","#00695C","#AD1457",
 "#E65100","#558B2F","#4527A0","#00838F","#C62828",
];


function getColor(name: string) {
 let h = 0;
 for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) & 0xffff;
 return PHOTO_COLORS[h % PHOTO_COLORS.length];
}


function initials(name: string) {
 return name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
}


// ─── HERO PHOTO (large circle with photo-like styling) ────────────────────────


function HeroPhoto({ name, size = 130 }: { name: string; size?: number }) {
 const bg = getColor(name);
 const ini = initials(name);
 return (
   <div style={{
     width: size, height: size, borderRadius: "50%",
     background: `radial-gradient(circle at 35% 35%, ${bg}cc, ${bg})`,
     border: "4px solid #fff",
     boxShadow: "0 6px 24px rgba(0,0,0,0.35)",
     display: "flex", alignItems: "center", justifyContent: "center",
     fontSize: size * 0.28, fontWeight: 900, color: "#fff",
     userSelect: "none", flexShrink: 0,
     position: "relative",
   }}>
     {ini}
     {/* simulated hair/head shadow */}
     <div style={{
       position: "absolute", bottom: 0, left: 0, right: 0, height: "30%",
       borderRadius: "0 0 50% 50%",
       background: "rgba(0,0,0,0.18)",
     }}/>
   </div>
 );
}


// ─── SMALL RANKER AVATAR ──────────────────────────────────────────────────────


function RankerPhoto({ name, size = 64 }: { name: string; size?: number }) {
 const bg = getColor(name);
 const ini = initials(name);
 return (
   <div style={{
     width: size, height: size, borderRadius: "50%",
     background: `radial-gradient(circle at 35% 30%, ${bg}bb, ${bg}ff)`,
     border: "3px solid #fff",
     boxShadow: "0 3px 10px rgba(0,0,0,0.30)",
     display: "flex", alignItems: "center", justifyContent: "center",
     fontSize: size * 0.28, fontWeight: 900, color: "#fff",
     userSelect: "none", position: "relative", flexShrink: 0,
   }}>
     {ini}
     <div style={{
       position: "absolute", bottom: 0, left: 0, right: 0, height: "25%",
       borderRadius: "0 0 50% 50%",
       background: "rgba(0,0,0,0.15)",
     }}/>
   </div>
 );
}


// ─── HERO TOP CARD ────────────────────────────────────────────────────────────


function HeroCard({ r }: { r: typeof TOP_THREE[0] }) {
 return (
   <div style={{
     display: "flex", flexDirection: "column", alignItems: "center",
     gap: 6, width: 180, flexShrink: 0,
   }}>
     {/* tag */}
     {r.tag && (
       <div style={{
         background: "#1a237e", color: "#F7C948",
         fontSize: 9, fontWeight: 900, letterSpacing: "0.13em",
         padding: "3px 10px", borderRadius: 99,
         textTransform: "uppercase",
       }}>
         {r.tag}
       </div>
     )}


     {/* big AIR number + photo stacked */}
     <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
       {/* AIR label */}
       <div style={{
         background: "#1a237e", color: "#F7C948",
         fontFamily: "'Arial Black', sans-serif",
         fontSize: 11, fontWeight: 900, letterSpacing: "0.14em",
         padding: "2px 14px 0",
         borderRadius: "8px 8px 0 0",
       }}>
         AIR
       </div>
       {/* Giant rank number */}
       <div style={{
         fontSize: 100, fontWeight: 900, lineHeight: 0.82,
         color: "#1a237e",
         fontFamily: "'Arial Black', Impact, sans-serif",
         letterSpacing: "-0.04em",
         textShadow: "4px 4px 0 rgba(26,35,126,0.15)",
         userSelect: "none",
       }}>
         {r.rank}
       </div>


       {/* Photo overlapping the number bottom */}
       <div style={{
         marginTop: -10, zIndex: 2, position: "relative",
         filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.28))",
       }}>
         <HeroPhoto name={r.name} size={130}/>
       </div>


       {/* Score badge on photo */}
       <div style={{
         position: "absolute", bottom: 4, left: "50%", transform: "translateX(-50%)",
         background: "#1a237e", color: "#F7C948",
         fontWeight: 900, fontSize: 12, padding: "3px 14px",
         borderRadius: 99, border: "2.5px solid #F7C948",
         whiteSpace: "nowrap", zIndex: 3,
         boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
       }}>
         {r.score}
       </div>
     </div>


     {/* Name & details */}
     <div style={{ textAlign: "center", marginTop: 4 }}>
       <p style={{ fontWeight: 900, fontSize: 13, color: "#1a237e", margin: "0 0 2px", lineHeight: 1.2 }}>
         {r.name}
       </p>
       <p style={{ fontSize: 10, color: "#1a237e", margin: "0 0 1px", opacity: 0.8 }}>{r.course}</p>
       <p style={{ fontSize: 11, fontWeight: 800, color: "#1a237e", margin: 0 }}>{r.percentile}</p>
     </div>
   </div>
 );
}


// ─── RANKER CARD ─────────────────────────────────────────────────────────────


function RankerCard({ r }: { r: typeof RANKERS[0] }) {
 return (
   <div style={{
     display: "flex", flexDirection: "column", alignItems: "center",
     gap: 3, padding: "8px 4px 6px",
     background: "rgba(255,255,255,0.12)",
     borderRadius: 10,
     border: "1px solid rgba(255,255,255,0.25)",
   }}>
     {/* AIR badge */}
     <div style={{
       background: "#1a237e", color: "#F7C948",
       fontSize: 7.5, fontWeight: 900, letterSpacing: "0.1em",
       padding: "2px 8px", borderRadius: 99,
       textTransform: "uppercase",
     }}>
       AIR {r.rank}
     </div>
     <RankerPhoto name={r.name} size={64}/>
     <p style={{
       fontSize: 9.5, fontWeight: 800, color: "#1a237e",
       margin: "2px 0 0", textAlign: "center", lineHeight: 1.25,
       maxWidth: 80,
     }}>
       {r.name}
     </p>
     <div style={{
       background: "#1a237e", color: "#F7C948",
       fontSize: 8, fontWeight: 700,
       padding: "1px 8px", borderRadius: 99,
     }}>
       {r.score}/500
     </div>
     <p style={{ fontSize: 7.5, color: "#1a237e", margin: 0, opacity: 0.75, fontWeight: 600 }}>
       Classroom
     </p>
     <p style={{ fontSize: 7, color: "#1a237e", margin: 0, opacity: 0.65 }}>
       Overall 100 Percentile
     </p>
   </div>
 );
}


// ─── MAIN SECTION ─────────────────────────────────────────────────────────────


export default function ClassXResultsSection() {
 return (
   <section style={{
     background: "linear-gradient(160deg, #F7C948 0%, #f0b800 55%, #e8a800 100%)",
     padding: "48px 0 44px",
     position: "relative", overflow: "hidden",
     fontFamily: "'Segoe UI', Arial, sans-serif",
   }}>


     {/* Large bg text watermark */}
     <div aria-hidden style={{
       position: "absolute", top: "50%", left: "50%",
       transform: "translate(-50%,-50%) rotate(-8deg)",
       fontSize: 340, fontWeight: 900,
       color: "rgba(26,35,126,0.06)",
       whiteSpace: "nowrap", pointerEvents: "none", userSelect: "none",
       letterSpacing: "-0.05em",
       lineHeight: 1,
     }}>
       SVPS
     </div>


     {/* Decorative circles */}
     <div aria-hidden style={{
       position: "absolute", top: -60, right: -60,
       width: 260, height: 260, borderRadius: "50%",
       background: "rgba(26,35,126,0.08)", pointerEvents: "none",
     }}/>
     <div aria-hidden style={{
       position: "absolute", bottom: -40, left: -40,
       width: 180, height: 180, borderRadius: "50%",
       background: "rgba(26,35,126,0.07)", pointerEvents: "none",
     }}/>


     <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", position: "relative" }}>


       {/* ── HEADER ROW ── */}
       <div style={{
         display: "flex", justifyContent: "space-between", alignItems: "flex-start",
         marginBottom: 32, gap: 16, flexWrap: "wrap",
       }}>
         {/* Left: titles */}
         <div style={{ flex: 1, minWidth: 220 }}>
           <p style={{ fontSize: 13, fontWeight: 700, color: "#1a237e", margin: "0 0 4px", letterSpacing: "0.04em", opacity: 0.85 }}>
             Making every student a Success story
           </p>
           <h2 style={{
             fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, color: "#1a237e",
             margin: "0 0 4px", lineHeight: 0.9, letterSpacing: "-0.03em",
             textTransform: "uppercase",
             fontFamily: "'Arial Black', 'Impact', sans-serif",
           }}>
             UNMATCHED<br/>RESULTS
           </h2>
           <p style={{ fontSize: "clamp(13px,1.6vw,18px)", fontWeight: 700, color: "#1a237e", margin: "8px 0 0", opacity: 0.85 }}>
             by Our Students in <strong style={{ fontSize: "1.1em" }}>10th Board Exams 2025</strong>
           </p>
         </div>


         {/* Right: two stat badges */}
         <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
           {/* Main highlight */}
           <div style={{
             background: "#1a237e", borderRadius: 16,
             padding: "20px 24px", textAlign: "center",
             boxShadow: "0 8px 32px rgba(26,35,126,0.40)",
             border: "3px solid rgba(247,201,72,0.5)",
           }}>
             <p style={{
               fontSize: 72, fontWeight: 900, color: "#F7C948",
               margin: 0, lineHeight: 0.9,
               fontFamily: "'Arial Black', Impact, sans-serif",
               letterSpacing: "-0.03em",
             }}>
               50<span style={{ fontSize: 36 }}>+</span>
             </p>
             <p style={{ fontSize: 10, fontWeight: 900, color: "#fff", margin: "6px 0 2px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
               Students in
             </p>
             <p style={{ fontSize: 14, fontWeight: 900, color: "#F7C948", margin: 0, letterSpacing: "0.05em" }}>
               TOP 100
             </p>
             <p style={{ fontSize: 9, color: "rgba(255,255,255,0.75)", margin: "3px 0 0", fontStyle: "italic" }}>
               Highest among all Schools
             </p>
           </div>


           {/* Years badge */}
           <div style={{
             width: 86, height: 86, borderRadius: "50%",
             background: "#1a237e",
             display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
             boxShadow: "0 4px 20px rgba(26,35,126,0.40)",
             border: "3px solid rgba(247,201,72,0.5)",
             alignSelf: "center",
           }}>
             <p style={{ fontSize: 28, fontWeight: 900, color: "#F7C948", margin: 0, lineHeight: 1 }}>25</p>
             <p style={{ fontSize: 7.5, fontWeight: 800, color: "#fff", margin: "1px 0 0", textTransform: "uppercase", letterSpacing: "0.06em", textAlign: "center", lineHeight: 1.3 }}>
               Years of<br/>Excellence
             </p>
           </div>
         </div>
       </div>


       {/* ── TOP 3 HERO ROW ── */}
       <div style={{
         display: "flex",
         justifyContent: "center",
         gap: 32,
         marginBottom: 24,
         flexWrap: "wrap",
       }}>
         {TOP_THREE.map(r => <HeroCard key={r.rank} r={r}/>)}
       </div>


       {/* ── RANKERS GRID ── */}
       <div style={{
         display: "grid",
         gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
         gap: 8,
         marginBottom: 24,
       }}>
         {RANKERS.map((r, i) => <RankerCard key={`${r.rank}-${i}`} r={r}/>)}
       </div>


       {/* ── STATS BAR ── */}
       <div style={{
         background: "rgba(255,255,255,0.88)",
         borderRadius: 14,
         padding: "18px 24px",
         display: "grid",
         gridTemplateColumns: "1fr auto 1fr",
         gap: 16, alignItems: "center",
         boxShadow: "0 4px 20px rgba(26,35,126,0.12)",
       }}>
         {/* Left stats */}
         <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
           {[
             { num: "18",  label: "Students Scored 100%" },
             { num: "47",  label: "Students in Top 500" },
             { num: "112", label: "Students in Top 1000" },
           ].map(s => (
             <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
               <svg width="18" height="18" viewBox="0 0 20 20" style={{ flexShrink: 0 }}>
                 <circle cx="10" cy="10" r="10" fill="#1a237e"/>
                 <path d="M5 10.5l3.5 3.5L15 7" stroke="#F7C948" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
               </svg>
               <span>
                 <strong style={{ fontSize: 18, fontWeight: 900, color: "#1a237e", marginRight: 4 }}>{s.num}</strong>
                 <span style={{ fontSize: 11, color: "#333", fontWeight: 600 }}>{s.label}</span>
               </span>
             </div>
           ))}
         </div>


         {/* Center big stat */}
         <div style={{
           textAlign: "center",
           borderLeft: "1.5px solid rgba(26,35,126,0.18)",
           borderRight: "1.5px solid rgba(26,35,126,0.18)",
           padding: "0 28px",
         }}>
           <p style={{ fontSize: 9, color: "#666", fontWeight: 700, margin: "0 0 2px", letterSpacing: "0.07em", textTransform: "uppercase" }}>
             Students Eligible for Higher Studies
           </p>
           <p style={{
             fontSize: 56, fontWeight: 900, color: "#1a237e",
             margin: "0 0 4px", lineHeight: 1,
             fontFamily: "'Arial Black', Impact, sans-serif",
           }}>
             5000
           </p>
           <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
             <span style={{ fontSize: 10, color: "#333", fontWeight: 700 }}>Science: 2800</span>
             <span style={{ fontSize: 10, color: "#aaa" }}>|</span>
             <span style={{ fontSize: 10, color: "#333", fontWeight: 700 }}>Commerce: 2200</span>
           </div>
         </div>


         {/* Right stats */}
         <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
           {[
             { num: "89", label: "Scored 100% in Individual Subjects" },
             { num: "8",  label: "Students are State Toppers" },
           ].map(s => (
             <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
               <svg width="18" height="18" viewBox="0 0 20 20" style={{ flexShrink: 0 }}>
                 <circle cx="10" cy="10" r="10" fill="#1a237e"/>
                 <path d="M5 10.5l3.5 3.5L15 7" stroke="#F7C948" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
               </svg>
               <span>
                 <strong style={{ fontSize: 18, fontWeight: 900, color: "#1a237e", marginRight: 4 }}>{s.num}</strong>
                 <span style={{ fontSize: 11, color: "#333", fontWeight: 600 }}>{s.label}</span>
               </span>
             </div>
           ))}
         </div>
       </div>


       {/* ── FOOTER ── */}
       <div style={{
         display: "flex", justifyContent: "space-between", alignItems: "center",
         marginTop: 20, paddingTop: 16,
         borderTop: "1.5px solid rgba(26,35,126,0.28)",
         flexWrap: "wrap", gap: 12,
       }}>
         <div>
           <p style={{ fontSize: 10, fontWeight: 600, color: "#1a237e", margin: 0, opacity: 0.75 }}>Heartiest</p>
           <p style={{ fontSize: 20, fontWeight: 900, color: "#1a237e", margin: 0, fontFamily: "'Arial Black', sans-serif" }}>Congratulations!</p>
         </div>
         <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
           <div style={{
             width: 50, height: 50, borderRadius: "50%", background: "#1a237e",
             display: "flex", alignItems: "center", justifyContent: "center",
             fontWeight: 900, fontSize: 10, color: "#F7C948",
           }}>
             SVPS
           </div>
           <p style={{ fontSize: 11, fontWeight: 700, color: "#1a237e", margin: 0, textAlign: "center", lineHeight: 1.4 }}>
             Sree Vignan Public School<br/>
             <span style={{ fontWeight: 600, opacity: 0.75 }}>Chodavaram</span>
           </p>
         </div>
         <div style={{ textAlign: "right" }}>
           <p style={{ fontSize: 11, fontWeight: 700, color: "#1a237e", margin: 0 }}>Authenticity of Results</p>
           <p style={{ fontSize: 11, fontWeight: 600, color: "#1a237e", margin: "2px 0 0", opacity: 0.75 }}>Excellence in Education</p>
         </div>
       </div>


     </div>
   </section>
 );
}

