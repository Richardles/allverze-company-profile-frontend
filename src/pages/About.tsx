import { useNavigate } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import OrbitalRing from "../components/OrbitalRing";

const coreValues = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Customer Centricity",
    quote: "We Solve, Not Just Sell",
    desc: "Every recommendation starts with your outcome, not our portfolio. We never prescribe technology for technology's sake.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Trust & Respect",
    quote: "Partnerships built on integrity",
    desc: "We treat every client, partner, and colleague as a long-term relationship worth protecting — not a contract to fulfill.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Integrity",
    quote: "Honest, always",
    desc: "No unnecessary tech inflation. Honest recommendations, transparent pricing, and rigorous data protection at every layer.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Excellence",
    quote: "Better Every Day",
    desc: "We hold ourselves to a single, uncompromising standard across every engagement, regardless of project size.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: "Innovation",
    quote: "A to Z problem-solving",
    desc: "We draw on our full universe of expertise to design solutions that are practical, fresh, and future-ready.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Reliability",
    quote: "99.9% SLA commitment",
    desc: "When we commit to uptime, performance, or delivery timelines, those commitments are backed by engineering discipline.",
  },
];

const team = [
  {
    name: "Sarah Chen",
    title: "Chief Executive Officer",
    domain: "Corporate Strategy & Growth",
    photo: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=480&h=480&fit=crop&auto=format&q=80",
  },
  {
    name: "Marcus Wei",
    title: "Chief Technology Officer",
    domain: "Engineering & Architecture",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=480&h=480&fit=crop&auto=format&q=80",
  },
  {
    name: "Priya Anand",
    title: "Chief Operating Officer",
    domain: "Operations & Client Delivery",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=480&h=480&fit=crop&auto=format&q=80",
  },
];

const pillars = ["Best Service", "Best Quality", "Integrity", "Reliability", "Professionalism"];

export default function About() {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const pageBg      = isDark ? "#060E1A" : "#F8FAFC";
  const cardBg      = isDark ? "#0B1D35" : "#FFFFFF";
  const cardBorder  = isDark ? "rgba(255,255,255,0.07)" : "#E2E8F0";
  const textPrimary = isDark ? "#F8FAFC" : "#0B1D35";
  const textSub     = isDark ? "rgba(248,250,252,0.60)" : "#4A6080";
  const textMuted   = isDark ? "rgba(248,250,252,0.38)" : "#8AA0BD";
  const pillabBg    = isDark ? "#0B1D35" : "#FFFFFF";
  const pillBorder  = isDark ? "rgba(255,255,255,0.07)" : "#E2E8F0";
  const missionBg   = isDark ? "#0E2344" : "#FFFFFF";

  return (
    <main style={{ paddingTop: 72 }}>
      {/* ── HEADER BANNER ─────────────────────────────────────── */}
      <section style={{ background: "#0B1D35", paddingTop: 88, paddingBottom: 88 }} className="px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-bold tracking-[0.14em] uppercase mb-5" style={{ fontSize: "0.6875rem", color: "#38BDF8" }}>
            About Allverze
          </p>
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              fontWeight: 800,
              color: "#F8FAFC",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              maxWidth: 700,
            }}
          >
            Connecting{" "}
            <span style={{ color: "#38BDF8" }}>Possibilities</span>
          </h1>
          <p style={{ marginTop: 20, fontSize: "1.0625rem", color: "rgba(248,250,252,0.58)", lineHeight: 1.75, maxWidth: 560 }}>
            We connect business ambition with practical technology, turning complex challenges into clear progress. The result is a partnership that is built on trust, technical clarity, and measurable momentum.
          </p>
        </div>
      </section>

      {/* ── ORBITAL RING STORY ────────────────────────────────── */}
      <section style={{ background: pageBg, paddingTop: 96, paddingBottom: 96 }} className="px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="flex justify-center">
            <div className="orbital-float">
              <OrbitalRing size={320} />
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <div>
              <p className="font-bold tracking-[0.14em] uppercase mb-3" style={{ fontSize: "0.6875rem", color: "#0055E5" }}>
                The Orbital Ring
              </p>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.3rem)", fontWeight: 700, color: textPrimary, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                A Symbol of the Connected Ecosystem
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { label: "Continuous Connection", desc: "The infinite loop represents our commitment to unbroken partnership — no hand-offs, no gaps, no disappearing acts post-launch." },
                { label: "Navy → Blue → Cyan",    desc: "The gradient reflects our journey: from the depth of foundational expertise to the clarity of innovative breakthrough." },
                { label: "Technology & Collaboration", desc: "Two interlocking arcs reflect the union of technical mastery and human-centred advisory — always in motion, always together." },
                { label: "Better Every Day",       desc: "The ring never ends, just as our pursuit of continuous improvement never stops. Every orbit brings new insight." },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div
                    style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: "#0055E5", flexShrink: 0, marginTop: 8,
                    }}
                  />
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 700, color: textPrimary, marginBottom: 4 }}>{item.label}</div>
                    <p style={{ fontSize: "0.875rem", color: textSub, lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ──────────────────────────────────── */}
      <section style={{ background: "#0B1D35", paddingTop: 96, paddingBottom: 96 }} className="px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="font-bold tracking-[0.14em] uppercase mb-3" style={{ fontSize: "0.6875rem", color: "#38BDF8" }}>
              Purpose & Direction
            </p>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#F8FAFC", letterSpacing: "-0.02em" }}>
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Vision */}
            <div
              style={{ background: "#0E2344", border: "1px solid rgba(56,189,248,0.20)", borderRadius: 16, padding: "40px" }}
              className="flex flex-col gap-5"
            >
              <div className="flex items-center gap-3">
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(56,189,248,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#38BDF8" }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#38BDF8" }}>Vision</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#F8FAFC", lineHeight: 1.45, letterSpacing: "-0.01em" }}>
                To be the most trusted technology partner connecting innovation, expertise, and integrity — worldwide.
              </h3>
              <p style={{ fontSize: "0.875rem", color: "rgba(248,250,252,0.50)", lineHeight: 1.75 }}>
                Every business, regardless of size, deserves enterprise-grade technology delivered with honesty, precision, and genuine care for outcomes.
              </p>
            </div>

            {/* Mission */}
            <div
              style={{ background: missionBg, border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "#E2E8F0"}`, borderRadius: 16, padding: "40px" }}
              className="flex flex-col gap-5"
            >
              <div className="flex items-center gap-3">
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(0,85,229,0.09)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0055E5" }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0055E5" }}>Mission</span>
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: isDark ? "#F8FAFC" : "#0B1D35", lineHeight: 1.45, letterSpacing: "-0.01em" }}>
                Four pillars that define how we show up for every client, every day.
              </h3>
              <ol className="flex flex-col gap-3.5">
                {[
                  "Deliver reliable, production-grade technology that performs when it matters most.",
                  "Connect diverse expertise from A to Z — no challenge too broad or too specialized.",
                  "Build long-term relationships anchored in integrity, transparency, and mutual respect.",
                  "Pursue continuous improvement — \"Better Every Day\" is our operating discipline.",
                ].map((pillar, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span
                      style={{
                        width: 22, height: 22, borderRadius: 6,
                        background: "rgba(0,85,229,0.09)", color: "#0055E5",
                        fontSize: "0.7rem", fontWeight: 700,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, marginTop: 1,
                      }}
                    >
                      {i + 1}
                    </span>
                    <p style={{ fontSize: "0.875rem", color: isDark ? "rgba(248,250,252,0.62)" : "#475569", lineHeight: 1.65 }}>{pillar}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── ONE STANDARD OF EXCELLENCE ────────────────────────── */}
      <section style={{ background: pageBg, paddingTop: 72, paddingBottom: 72 }} className="px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)", fontWeight: 700, color: textPrimary, letterSpacing: "-0.02em" }}>
              One Standard of Excellence
            </h2>
            <p style={{ marginTop: 8, fontSize: "0.875rem", color: textMuted }}>Five pillars. Indivisible.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {pillars.map((pillar, i) => (
              <div key={pillar} className="flex items-center gap-3">
                <div
                  style={{
                    background: pillabBg,
                    border: `1px solid ${pillBorder}`,
                    borderRadius: 10,
                    padding: "14px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    boxShadow: isDark ? "0 1px 4px rgba(0,0,0,0.20)" : "0 1px 4px rgba(0,0,0,0.05)",
                  }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "linear-gradient(135deg, #0055E5, #38BDF8)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.875rem", fontWeight: 600, color: textPrimary }}>{pillar}</span>
                </div>
                {i < pillars.length - 1 && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isDark ? "rgba(255,255,255,0.20)" : "#CBD5E1"} strokeWidth="2.5" strokeLinecap="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ───────────────────────────────────────── */}
      <section style={{ background: "#0B1D35", paddingTop: 96, paddingBottom: 96 }} className="px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="font-bold tracking-[0.14em] uppercase mb-3" style={{ fontSize: "0.6875rem", color: "#38BDF8" }}>
              What We Stand For
            </p>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#F8FAFC", letterSpacing: "-0.02em" }}>
              6 Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreValues.map((v) => (
              <div
                key={v.title}
                className="flex flex-col gap-4"
                style={{ background: "#0E2344", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "28px" }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(0,85,229,0.18)", color: "#38BDF8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {v.icon}
                </div>
                <div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "#F8FAFC", marginBottom: 2 }}>{v.title}</div>
                  <div style={{ fontSize: "0.75rem", color: "#38BDF8", fontStyle: "italic", marginBottom: 10 }}>&quot;{v.quote}&quot;</div>
                  <p style={{ fontSize: "0.855rem", color: "rgba(248,250,252,0.48)", lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────────── */}
      <section style={{ background: pageBg, paddingTop: 96, paddingBottom: 96 }} className="px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="font-bold tracking-[0.14em] uppercase mb-3" style={{ fontSize: "0.6875rem", color: "#0055E5" }}>
              Leadership & Governance
            </p>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.5rem)", fontWeight: 700, color: textPrimary, letterSpacing: "-0.02em" }}>
              Our Team
            </h2>
            <p style={{ marginTop: 10, fontSize: "0.9375rem", color: textSub }}>
              Seasoned leaders with the depth to solve, not just advise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
            {team.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: 16,
                  boxShadow: isDark
                    ? "0 2px 12px rgba(0,0,0,0.30)"
                    : "0 1px 4px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ height: 220, background: isDark ? "#0E2344" : "#DBEAFE", overflow: "hidden" }}>
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-2 p-5 flex-1">
                  <div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: textPrimary }}>{member.name}</div>
                    <div style={{ fontSize: "0.775rem", fontWeight: 600, color: "#0055E5", marginTop: 1 }}>{member.title}</div>
                  </div>
                  <div style={{ fontSize: "0.75rem", color: isDark ? "#7AABFF" : "#6B8CAE", background: isDark ? "rgba(0,85,229,0.14)" : "#EFF4FF", borderRadius: 4, padding: "2px 8px", alignSelf: "flex-start" }}>
                    {member.domain}
                  </div>
                  <button
                    className="mt-auto flex items-center gap-1.5 text-xs font-semibold hover:underline focus-visible:outline-none transition-colors"
                    style={{ color: "#0055E5" }}
                    onClick={() => window.open("https://linkedin.com", "_blank", "noopener")}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    LinkedIn Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────────────── */}
      <section
        style={{ background: "#0B1D35", borderTop: "1px solid rgba(0,85,229,0.14)", paddingTop: 72, paddingBottom: 72 }}
        className="px-6 lg:px-12"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)", fontWeight: 700, color: "#F8FAFC", letterSpacing: "-0.02em" }}>
            Ready to work with a team that solves, not just sells?
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="flex-shrink-0 text-sm font-semibold text-white transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
            style={{ background: "#0055E5", borderRadius: 9, padding: "12px 28px", boxShadow: "0 2px 12px rgba(0,85,229,0.28)", whiteSpace: "nowrap" }}
          >
            Start the Conversation →
          </button>
        </div>
      </section>
    </main>
  );
}
