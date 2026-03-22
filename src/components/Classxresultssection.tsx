"use client";

import React from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const TOP_THREE = [
  { rank: "1", name: "Ravi Kumar Sharma", score: "500/500", tag: "SCHOOL TOPPER", percentile: "100 Percentile", course: "Regular Batch" },
  { rank: "2", name: "Priya Venkatesh",   score: "499/500", tag: "GIRL TOPPER",   percentile: "100 Percentile", course: "Regular Batch" },
  { rank: "3", name: "Arjun Reddy",       score: "498/500", tag: "STATE RANK 12", percentile: "99.9 Percentile",course: "Regular Batch" },
];

const RANKERS = [
  { rank: 4,  name: "Sai Teja M.",  score: "497" },
  { rank: 5,  name: "Lakshmi N.",   score: "496" },
  { rank: 6,  name: "Vikram S.",    score: "495" },
  { rank: 7,  name: "Meena R.",     score: "495" },
  { rank: 8,  name: "Aditya K.",    score: "494" },
  { rank: 9,  name: "Pooja V.",     score: "493" },
  { rank: 10, name: "Rahul M.",     score: "492" },
  { rank: 11, name: "Divya T.",     score: "491" },
  { rank: 12, name: "Kiran B.",     score: "490" },
  { rank: 13, name: "Sneha G.",     score: "490" },
  { rank: 14, name: "Nikhil P.",    score: "489" },
  { rank: 15, name: "Anjali C.",    score: "488" },
  { rank: 17, name: "Rohit V.",     score: "487" },
  { rank: 18, name: "Deepa S.",     score: "486" },
  { rank: 20, name: "Suresh N.",    score: "485" },
  { rank: 22, name: "Tanisha K.",   score: "484" },
  { rank: 23, name: "Manoj R.",     score: "483" },
  { rank: 26, name: "Geeta P.",     score: "482" },
  { rank: 31, name: "Harish D.",    score: "481" },
  { rank: 33, name: "Kavya S.",     score: "480" },
  { rank: 23, name: "Manoj R.",     score: "483" },
  { rank: 26, name: "Geeta P.",     score: "482" },
  { rank: 31, name: "Harish D.",    score: "481" },
  { rank: 33, name: "Kavya S.",     score: "480" },
];

const LEFT_STATS  = [
  { num: "18",  label: "Students Scored 100%" },
  { num: "47",  label: "Students in Top 500" },
  { num: "112", label: "Students in Top 1000" },
];

const RIGHT_STATS = [
  { num: "89", label: "Scored 100% in Individual Subjects" },
  { num: "8",  label: "Students are State Toppers" },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────

const PALETTE = [
  ["#1a237e","#e8eaf6"],["#4a148c","#f3e5f5"],["#006064","#e0f7fa"],
  ["#1b5e20","#e8f5e9"],["#bf360c","#fbe9e7"],["#0d47a1","#e3f2fd"],
  ["#880e4f","#fce4ec"],["#e65100","#fff3e0"],
] as const;

function avatarColors(name: string): [string, string] {
  const idx = ((name.charCodeAt(0) ?? 0) + (name.charCodeAt(1) ?? 0)) % PALETTE.length;
  return PALETTE[idx];
}

function AvatarLg({ name }: { name: string }) {
  const initials = name.split(" ").map(n => n[0]).join("").slice(0,2).toUpperCase();
  const [bg, fg] = avatarColors(name);
  return (
    <div style={{
      width:96,height:96,borderRadius:"50%",background:bg,color:fg,
      display:"flex",alignItems:"center",justifyContent:"center",
      fontSize:26,fontWeight:900,border:"4px solid #fff",
      boxShadow:"0 4px 14px rgba(0,0,0,0.20)",margin:"0 auto",userSelect:"none"
    }}>
      {initials}
    </div>
  );
}

function AvatarSm({ name }: { name: string }) {
  const initials = name.split(" ").map(n => n[0]).join("").slice(0,2).toUpperCase();
  const [bg, fg] = avatarColors(name);
  return (
    <div style={{
      width:50,height:50,borderRadius:"50%",background:bg,color:fg,
      display:"flex",alignItems:"center",justifyContent:"center",
      fontSize:12,fontWeight:900,border:"3px solid #fff",
      boxShadow:"0 2px 6px rgba(0,0,0,0.15)",margin:"0 auto",userSelect:"none"
    }}>
      {initials}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" style={{flexShrink:0,marginTop:2}}>
      <circle cx="10" cy="10" r="10" fill="#1a237e"/>
      <path d="M5 10.5l3.5 3.5L15 7" stroke="#F7C948" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

// ─── TOP CARD ─────────────────────────────────────────────────────────────────

function TopCard({ r, center }: { r: typeof TOP_THREE[0]; center: boolean }) {
  const medalColor: Record<string,string> = { "1":"#F7C948","2":"#c8c8c8","3":"#cd7f32" };
  const medalText:  Record<string,string> = { "1":"#1a237e", "2":"#444",   "3":"#fff"   };
  return (
    <div style={{
      background:"#fff",borderRadius:18,padding:center?"26px 16px 18px":"18px 12px 14px",
      textAlign:"center",
      boxShadow: center
        ? "0 8px 36px rgba(26,35,126,0.25),0 2px 8px rgba(0,0,0,0.08)"
        : "0 4px 14px rgba(26,35,126,0.12)",
      border: center ? "2.5px solid #1a237e" : "1.5px solid rgba(26,35,126,0.15)",
      transform: center ? "translateY(-8px) scale(1.04)" : "scale(1)",
      position:"relative",zIndex:center?2:1,flex:1,minWidth:0,
    }}>
      {r.tag && (
        <div style={{
          background:"#1a237e",color:"#F7C948",fontSize:8,fontWeight:900,
          letterSpacing:"0.12em",padding:"3px 8px",borderRadius:99,
          display:"inline-block",marginBottom:10,textTransform:"uppercase",
        }}>
          {r.tag}
        </div>
      )}
      <div style={{position:"relative",marginBottom:14}}>
        <AvatarLg name={r.name}/>
        <div style={{
          position:"absolute",bottom:-8,left:"50%",transform:"translateX(-50%)",
          background:"#F7C948",color:"#1a237e",fontWeight:900,fontSize:10,
          padding:"2px 9px",borderRadius:99,border:"2px solid #fff",whiteSpace:"nowrap",
        }}>
          {r.score}
        </div>
      </div>
      <div style={{
        width:center?60:48,height:center?60:48,borderRadius:"50%",
        background:medalColor[r.rank]??"#1a237e",margin:"10px auto 7px",
        display:"flex",alignItems:"center",justifyContent:"center",
        fontSize:center?28:22,fontWeight:900,
        color:medalText[r.rank]??"#fff",
        border:"3px solid #fff",boxShadow:"0 2px 8px rgba(0,0,0,0.15)",
      }}>
        {r.rank}
      </div>
      <p style={{fontWeight:800,fontSize:center?14:12,color:"#1a237e",margin:"0 0 2px",lineHeight:1.3}}>
        {r.name}
      </p>
      <p style={{fontSize:10,color:"#666",margin:"0 0 2px"}}>{r.course}</p>
      <p style={{fontSize:10,fontWeight:700,color:"#4a148c",margin:0}}>{r.percentile}</p>
    </div>
  );
}

// ─── SMALL CARD ───────────────────────────────────────────────────────────────

function SmallCard({ r }: { r: typeof RANKERS[0] }) {
  return (
    <div style={{
      background:"#fff",borderRadius:11,padding:"9px 7px",textAlign:"center",
      boxShadow:"0 2px 8px rgba(26,35,126,0.09)",border:"1px solid rgba(26,35,126,0.10)",
    }}>
      <p style={{fontSize:8,fontWeight:900,color:"#4a148c",letterSpacing:"0.1em",
        textTransform:"uppercase",margin:"0 0 5px"}}>
        RANK {r.rank}
      </p>
      <AvatarSm name={r.name}/>
      <p style={{fontSize:10,fontWeight:700,color:"#1a237e",margin:"5px 0 1px",lineHeight:1.3}}>
        {r.name}
      </p>
      <p style={{fontSize:9,color:"#888",margin:0}}>{r.score}/500</p>
    </div>
  );
}

// ─── SECTION ──────────────────────────────────────────────────────────────────

export default function ClassXResultsSection() {
  return (
    <section style={{
      background:"linear-gradient(160deg,#F7C948 0%,#f4be20 60%,#e8ab00 100%)",
      padding:"56px 0 48px",
      position:"relative",overflow:"hidden",
    }}>
      {/* Watermark */}
      <div aria-hidden style={{
        position:"absolute",top:"50%",left:"50%",
        transform:"translate(-50%,-50%)",
        fontSize:300,fontWeight:900,color:"rgba(26,35,126,0.05)",
        whiteSpace:"nowrap",pointerEvents:"none",userSelect:"none",
        letterSpacing:"-0.04em",
      }}>SVPS</div>

      <div style={{maxWidth:1200,margin:"0 auto",padding:"0 24px",position:"relative"}}>

          {/* ── HEADER ── */}
          <div style={{
            display:"flex",justifyContent:"space-between",alignItems:"flex-start",
            marginBottom:28,gap:16,flexWrap:"wrap",position:"relative",
          }}>
            <div style={{flex:1,minWidth:220}}>
              <p style={{fontSize:13,fontWeight:600,color:"#1a237e",margin:"0 0 4px",letterSpacing:"0.03em"}}>
                Making every student a Success story
              </p>
              <h2 style={{
                fontSize:"clamp(24px,3.8vw,44px)",fontWeight:900,color:"#1a237e",
                margin:"0 0 4px",lineHeight:0.95,letterSpacing:"-0.025em",textTransform:"uppercase",
              }}>
                UNMATCHED RESULTS
              </h2>
              <p style={{fontSize:"clamp(13px,1.8vw,20px)",fontWeight:700,color:"#1a237e",margin:0,opacity:.85}}>
                by Our Students in <strong>10th Board Exams 2025</strong>
              </p>
            </div>
            {/* Badge */}
            <div style={{
              width:96,height:96,borderRadius:"50%",background:"#1a237e",
              display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
              textAlign:"center",flexShrink:0,
              boxShadow:"0 4px 24px rgba(26,35,126,0.40)",border:"4px solid rgba(255,255,255,0.28)",
            }}>
              <p style={{fontSize:30,fontWeight:900,color:"#F7C948",margin:0,lineHeight:1}}>25</p>
              <p style={{fontSize:8,fontWeight:800,color:"#fff",margin:"2px 0 0",
                textTransform:"uppercase",letterSpacing:"0.07em",lineHeight:1.35}}>
                Years of<br/>Excellence
              </p>
            </div>
          </div>

          {/* ── HERO ROW ── */}
          <div style={{display:"flex",gap:14,marginBottom:20,alignItems:"flex-end",position:"relative"}}>
            {/* Top 3: 2-1-3 order */}
            <div style={{flex:1,display:"flex",gap:10,alignItems:"flex-end"}}>
              {[TOP_THREE[1],TOP_THREE[0],TOP_THREE[2]].map((r,i) => (
                <TopCard key={r.rank} r={r} center={i===1}/>
              ))}
            </div>
            {/* Highlight stat */}
            <div style={{
              background:"#1a237e",borderRadius:18,padding:"22px 16px",textAlign:"center",
              minWidth:140,maxWidth:168,display:"flex",flexDirection:"column",
              alignItems:"center",justifyContent:"center",flexShrink:0,
              boxShadow:"0 8px 32px rgba(26,35,126,0.38)",
            }}>
              <p style={{fontSize:60,fontWeight:900,color:"#F7C948",margin:0,lineHeight:1}}>
                50<span style={{fontSize:30}}>+</span>
              </p>
              <p style={{fontSize:10,fontWeight:800,color:"#fff",margin:"6px 0 3px",
                textTransform:"uppercase",letterSpacing:"0.08em",lineHeight:1.45}}>
                Students in Top 100
              </p>
              <p style={{fontSize:9,color:"rgba(247,201,72,0.85)",fontStyle:"italic",margin:0}}>
                Highest among all schools
              </p>
            </div>
          </div>

          {/* ── RANKERS GRID ── */}
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fill,minmax(88px,1fr))",
            gap:7,marginBottom:20,
          }}>
            {RANKERS.map(r => <SmallCard key={r.rank} r={r}/>)}
          </div>

          {/* ── STATS BAR ── */}
          <div style={{
            background:"rgba(255,255,255,0.82)",borderRadius:14,
            padding:"18px 24px",
            display:"grid",gridTemplateColumns:"1fr auto 1fr",
            gap:16,alignItems:"center",
          }}>
            {/* Left */}
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {LEFT_STATS.map(s => (
                <div key={s.label} style={{display:"flex",alignItems:"flex-start",gap:7}}>
                  <CheckIcon/>
                  <span>
                    <strong style={{fontSize:17,fontWeight:900,color:"#1a237e",marginRight:5}}>
                      {s.num}
                    </strong>
                    <span style={{fontSize:11,color:"#444",fontWeight:600}}>{s.label}</span>
                  </span>
                </div>
              ))}
            </div>

            {/* Center */}
            <div style={{
              textAlign:"center",
              borderLeft:"1.5px solid rgba(26,35,126,0.15)",
              borderRight:"1.5px solid rgba(26,35,126,0.15)",
              padding:"0 22px",
            }}>
              <p style={{fontSize:9,color:"#555",fontWeight:700,margin:"0 0 1px",
                letterSpacing:"0.06em",textTransform:"uppercase"}}>
                Students Eligible for Higher Studies
              </p>
              <p style={{fontSize:50,fontWeight:900,color:"#1a237e",margin:"0 0 2px",lineHeight:1}}>
                5000
              </p>
              <div style={{display:"flex",justifyContent:"center",gap:12}}>
                <span style={{fontSize:10,color:"#444",fontWeight:700}}>Science: 2800</span>
                <span style={{fontSize:10,color:"#aaa"}}>|</span>
                <span style={{fontSize:10,color:"#444",fontWeight:700}}>Commerce: 2200</span>
              </div>
            </div>

            {/* Right */}
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {RIGHT_STATS.map(s => (
                <div key={s.label} style={{display:"flex",alignItems:"flex-start",gap:7}}>
                  <CheckIcon/>
                  <span>
                    <strong style={{fontSize:17,fontWeight:900,color:"#1a237e",marginRight:5}}>
                      {s.num}
                    </strong>
                    <span style={{fontSize:11,color:"#444",fontWeight:600}}>{s.label}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── FOOTER ── */}
          <div style={{
            display:"flex",justifyContent:"space-between",alignItems:"center",
            marginTop:18,paddingTop:16,
            borderTop:"1.5px solid rgba(26,35,126,0.25)",
            flexWrap:"wrap",gap:12,position:"relative",
          }}>
            <div>
              <p style={{fontSize:10,fontWeight:600,color:"#1a237e",margin:0,opacity:.75}}>Heartiest</p>
              <p style={{fontSize:17,fontWeight:900,color:"#1a237e",margin:0}}>Congratulations!</p>
            </div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:5}}>
              <div style={{
                width:46,height:46,borderRadius:"50%",background:"#1a237e",
                display:"flex",alignItems:"center",justifyContent:"center",
                fontWeight:900,fontSize:10,color:"#F7C948",letterSpacing:"-0.03em",
              }}>
                SVPS
              </div>
              <p style={{fontSize:10,fontWeight:700,color:"#1a237e",margin:0,textAlign:"center",lineHeight:1.35}}>
                Sree Vignan Public School<br/>
                <span style={{fontWeight:600,opacity:.7}}>Chodavaram</span>
              </p>
            </div>
            <div style={{textAlign:"right"}}>
              <p style={{fontSize:11,fontWeight:700,color:"#1a237e",margin:0}}>
                Authenticity of Results
              </p>
              <p style={{fontSize:11,fontWeight:600,color:"#1a237e",margin:"2px 0 0",opacity:.75}}>
                Excellence in Education
              </p>
            </div>
          </div>

      </div>
    </section>
  );
}