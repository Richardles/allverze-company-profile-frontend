import type { Page } from "../App";
import OrbitalRing from "../components/OrbitalRing";

const capabilities = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    tag: "Engineering",
    title: "Custom Enterprise Software",
    desc: "Bespoke React, TypeScript, and microservices solutions engineered for scale, resilience, and long-term business value.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    tag: "Infrastructure",
    title: "Cloud & DevOps",
    desc: "Multi-cloud architecture, serverless pipelines, and zero-downtime migrations designed for peak reliability.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    tag: "Security",
    title: "Cybersecurity & Hardening",
    desc: "Zero-trust frameworks, threat intelligence, spam prevention, and system hardening that protect what matters most.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><polyline points="8 21 12 17 16 21" />
      </svg>
    ),
    tag: "Strategy",
    title: "Digital Product Advisory",
    desc: "Architecture audits, system modernization roadmaps, and technology counsel grounded in real-world execution.",
  },
];

const trustItems = [
  "99.9% Platform Reliability",
  "Multi-Cloud Architecture",
  "Zero-Downtime Migration",
  "Enterprise-Grade Security",
  "NDA Available On Request",
  "Zero-Trust Frameworks",
  "End-to-End Encryption",
  "24 / 7 Engineering Support",
];

interface HomeProps {
  navigate: (page: Page) => void;
}

export default function Home({ navigate }: HomeProps) {
  return (
    <main>
      {/* ── HERO ────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          paddingTop: 70,
          background: "#0B1D35",
        }}
        className="relative overflow-hidden flex items-center"
      >
        {/* Subtle diagonal stripe — single, low-key texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(160deg, rgba(0,85,229,0.07) 0%, transparent 55%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div className="flex flex-col gap-6">
            <span
              className="inline-flex items-center gap-2 self-start text-xs font-bold tracking-[0.14em] uppercase"
              style={{
                color: "#38BDF8",
                background: "rgba(56,189,248,0.10)",
                border: "1px solid rgba(56,189,248,0.22)",
                borderRadius: 6,
                padding: "5px 12px",
              }}
            >
              Connecting Possibilities
            </span>

            <h1
              style={{
                fontSize: "clamp(2.6rem, 5vw, 3.9rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "#F8FAFC",
              }}
            >
              Connecting Technology,{" "}
              <span style={{ color: "#38BDF8" }}>Ideas, and Innovation</span>{" "}
              from A to Z.
            </h1>

            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: "rgba(248,250,252,0.62)",
                maxWidth: 520,
              }}
            >
              Allverze represents a universe of solutions. We bring diverse
              expertise, modern technologies, and practical ideas together to
              solve real-world business challenges.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-2">
              <button
                onClick={() => navigate("services")}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
                style={{
                  background: "#0055E5",
                  borderRadius: 8,
                  padding: "11px 24px",
                  boxShadow: "0 2px 12px rgba(0,85,229,0.30)",
                }}
              >
                Explore Capabilities
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={() => navigate("about")}
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-150 hover:bg-white/8"
                style={{
                  color: "rgba(248,250,252,0.80)",
                  border: "1px solid rgba(248,250,252,0.22)",
                  borderRadius: 8,
                  padding: "11px 24px",
                }}
              >
                Our Philosophy
              </button>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <div className="h-px flex-1" style={{ background: "rgba(248,250,252,0.08)", maxWidth: 40 }} />
              <span
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(248,250,252,0.40)",
                  fontStyle: "italic",
                }}
              >
                "We Solve, Not Just Sell" &nbsp;·&nbsp; 🔒 100% Confidential. NDA available.
              </span>
            </div>
          </div>

          {/* Orbital Ring */}
          <div className="flex justify-center lg:justify-end">
            <div className="orbital-float">
              <OrbitalRing size={400} />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST TICKER ────────────────────────────────────── */}
      <div
        className="overflow-hidden py-4 select-none"
        style={{
          background: "#071526",
          borderTop: "1px solid rgba(0,85,229,0.14)",
          borderBottom: "1px solid rgba(0,85,229,0.14)",
        }}
      >
        <div className="ticker-track">
          {[...trustItems, ...trustItems].map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-8">
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "#38BDF8",
                  flexShrink: 0,
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "rgba(248,250,252,0.55)",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.02em",
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── CORE CAPABILITIES ───────────────────────────────── */}
      <section
        style={{ background: "#F8FAFC", paddingTop: 96, paddingBottom: 96 }}
        className="px-6 lg:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 max-w-xl">
            <p
              className="font-bold tracking-[0.14em] uppercase mb-3"
              style={{ fontSize: "0.6875rem", color: "#0055E5" }}
            >
              What We Do
            </p>
            <h2
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)",
                fontWeight: 700,
                color: "#0B1D35",
                letterSpacing: "-0.02em",
                lineHeight: 1.18,
              }}
            >
              Core Capabilities
            </h2>
            <p style={{ marginTop: 12, fontSize: "0.9375rem", color: "#4A6080", lineHeight: 1.7 }}>
              End-to-end technology solutions built on precision engineering, not promises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="group flex flex-col gap-5 transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: 12,
                  padding: "32px 32px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)",
                  cursor: "default",
                }}
              >
                <div className="flex items-start justify-between">
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 10,
                      background: "rgba(0,85,229,0.08)",
                      color: "#0055E5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {cap.icon}
                  </div>
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#6B8CAE",
                      background: "#EFF4FF",
                      borderRadius: 4,
                      padding: "3px 10px",
                    }}
                  >
                    {cap.tag}
                  </span>
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "1.075rem",
                      fontWeight: 700,
                      color: "#0B1D35",
                      marginBottom: 8,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {cap.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#4A6080", lineHeight: 1.7 }}>
                    {cap.desc}
                  </p>
                </div>

                <button
                  onClick={() => navigate("services")}
                  className="self-start flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200"
                  style={{ color: "#0055E5" }}
                >
                  Learn more
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY BANNER ───────────────────────────────── */}
      <section
        style={{
          background: "#0B1D35",
          borderTop: "1px solid rgba(0,85,229,0.12)",
          paddingTop: 100,
          paddingBottom: 100,
        }}
        className="px-6 lg:px-12"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div className="flex flex-col gap-6">
            <p
              className="font-bold tracking-[0.14em] uppercase"
              style={{ fontSize: "0.6875rem", color: "#38BDF8" }}
            >
              Our Philosophy
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.1rem)",
                fontWeight: 800,
                color: "#F8FAFC",
                letterSpacing: "-0.025em",
                lineHeight: 1.12,
              }}
            >
              Better Every Day.
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(248,250,252,0.58)", lineHeight: 1.78, maxWidth: 480 }}>
              At Allverze, continuous improvement is the engine behind every decision, every delivery, and every relationship. We measure success by the compounding value we create for clients over time.
            </p>
            <button
              onClick={() => navigate("contact")}
              className="self-start text-sm font-semibold text-white transition-all duration-150 hover:opacity-90"
              style={{
                background: "#0055E5",
                borderRadius: 8,
                padding: "11px 24px",
                boxShadow: "0 2px 12px rgba(0,85,229,0.28)",
              }}
            >
              Start the Conversation
            </button>
          </div>

          {/* Right stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px" style={{ background: "rgba(248,250,252,0.08)", borderRadius: 12, overflow: "hidden" }}>
            {[
              { stat: "A to Z",  label: "Full-Spectrum Coverage"  },
              { stat: "99.9%",   label: "Platform Reliability SLA" },
              { stat: "Zero",    label: "Unnecessary Tech Inflation" },
            ].map((s) => (
              <div
                key={s.stat}
                className="flex flex-col gap-1.5 p-8"
                style={{ background: "#0B1D35" }}
              >
                <span
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#F8FAFC",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {s.stat}
                </span>
                <span style={{ fontSize: "0.8125rem", color: "rgba(248,250,252,0.42)", lineHeight: 1.5 }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
