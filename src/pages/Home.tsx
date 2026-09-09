import { useTheme } from "../ThemeContext";
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
    title: "Custom Software Engineering",
    desc: "Production-grade web applications and enterprise systems built on clean architecture, rigorous testing, and long-term maintainability.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" />
      </svg>
    ),
    tag: "Mobile",
    title: "Mobile Application Development",
    desc: "High-performance iOS and Android applications with pixel-perfect UX, offline-first architecture, and seamless API integration.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    tag: "Observability",
    title: "Application Performance Monitoring",
    desc: "End-to-end visibility into application health with real-time metrics, distributed tracing, and intelligent alerting before issues reach your users.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    tag: "Quality Assurance",
    title: "Performance & Automation Testing",
    desc: "Comprehensive test automation frameworks and load testing strategies that validate benchmarks and integrate into your CI/CD pipeline.",
  },
];

const trustItems = [
  "99.9% Platform Reliability",
  "Cross-Platform Mobile Apps",
  "Real-Time APM Dashboards",
  "Automated QA Pipelines",
  "Enterprise-Grade Security",
  "NDA Available On Request",
  "End-to-End Test Automation",
  "24 / 7 Engineering Support",
];

interface HomeProps {
  navigate: (page: Page) => void;
}

export default function Home({ navigate }: HomeProps) {
  const { isDark } = useTheme();

  const pageBg   = isDark ? "#060E1A" : "#F8FAFC";
  const cardBg   = isDark ? "#0B1D35" : "#FFFFFF";
  const cardBorder = isDark ? "rgba(255,255,255,0.07)" : "#E2E8F0";
  const textPrimary = isDark ? "#F8FAFC" : "#0B1D35";
  const textSub  = isDark ? "rgba(248,250,252,0.60)" : "#4A6080";
  const tagBg    = isDark ? "rgba(0,85,229,0.15)" : "#EFF4FF";
  const tagColor = isDark ? "#7AABFF" : "#6B8CAE";

  return (
    <main>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        style={{ minHeight: "100vh", paddingTop: 72, background: "#0B1D35" }}
        className="relative overflow-hidden flex items-center"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(160deg, rgba(0,85,229,0.09) 0%, transparent 55%)" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(56,189,248,0.05) 0%, transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                color: "#F8FAFC",
              }}
            >
              Connecting Technology,{" "}
              <span style={{ color: "#38BDF8" }}>Ideas, and Innovation</span>{" "}
              from A to Z.
            </h1>

            <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "rgba(248,250,252,0.62)", maxWidth: 520 }}>
              Allverze represents a universe of solutions. We bring diverse expertise, modern technologies,
              and practical ideas together to solve real-world business challenges.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-2">
              <button
                onClick={() => navigate("services")}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
                style={{
                  background: "#0055E5",
                  borderRadius: 9,
                  padding: "12px 24px",
                  boxShadow: "0 2px 14px rgba(0,85,229,0.35)",
                }}
              >
                Explore Services
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={() => navigate("about")}
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-150"
                style={{
                  color: "rgba(248,250,252,0.80)",
                  border: "1px solid rgba(248,250,252,0.20)",
                  borderRadius: 9,
                  padding: "12px 24px",
                }}
              >
                Our Philosophy
              </button>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <div className="h-px flex-1" style={{ background: "rgba(248,250,252,0.08)", maxWidth: 40 }} />
              <span style={{ fontSize: "0.78rem", color: "rgba(248,250,252,0.38)", fontStyle: "italic" }}>
                &quot;We Solve, Not Just Sell&quot; &nbsp;&middot;&nbsp; 100% Confidential. NDA available.
              </span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="orbital-float">
              <OrbitalRing size={400} />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST TICKER ──────────────────────────────────────── */}
      <div
        className="overflow-hidden py-4 select-none"
        style={{
          background: "#071526",
          borderTop: "1px solid rgba(0,85,229,0.16)",
          borderBottom: "1px solid rgba(0,85,229,0.16)",
        }}
      >
        <div className="ticker-track">
          {[...trustItems, ...trustItems].map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-8">
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#38BDF8", flexShrink: 0, display: "inline-block" }} />
              <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "rgba(248,250,252,0.55)", whiteSpace: "nowrap", letterSpacing: "0.02em" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── CORE CAPABILITIES ─────────────────────────────────── */}
      <section style={{ background: pageBg, paddingTop: 96, paddingBottom: 96 }} className="px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 max-w-xl">
            <p className="font-bold tracking-[0.14em] uppercase mb-3" style={{ fontSize: "0.6875rem", color: "#0055E5" }}>
              What We Do
            </p>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", fontWeight: 700, color: textPrimary, letterSpacing: "-0.02em", lineHeight: 1.18 }}>
              Core Capabilities
            </h2>
            <p style={{ marginTop: 12, fontSize: "0.9375rem", color: textSub, lineHeight: 1.7 }}>
              End-to-end technology solutions built on precision engineering, not promises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="group flex flex-col gap-5 transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: 14,
                  padding: "32px 32px",
                  boxShadow: isDark
                    ? "0 1px 4px rgba(0,0,0,0.30), 0 4px 20px rgba(0,0,0,0.20)"
                    : "0 1px 4px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)",
                  cursor: "default",
                }}
              >
                <div className="flex items-start justify-between">
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 11,
                      background: "rgba(0,85,229,0.10)",
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
                      color: tagColor,
                      background: tagBg,
                      borderRadius: 5,
                      padding: "3px 10px",
                    }}
                  >
                    {cap.tag}
                  </span>
                </div>

                <div>
                  <h3 style={{ fontSize: "1.075rem", fontWeight: 700, color: textPrimary, marginBottom: 8, letterSpacing: "-0.01em" }}>
                    {cap.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: textSub, lineHeight: 1.7 }}>
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

      {/* ── PHILOSOPHY BANNER ─────────────────────────────────── */}
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
          <div className="flex flex-col gap-6">
            <p className="font-bold tracking-[0.14em] uppercase" style={{ fontSize: "0.6875rem", color: "#38BDF8" }}>
              Our Philosophy
            </p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.1rem)", fontWeight: 800, color: "#F8FAFC", letterSpacing: "-0.025em", lineHeight: 1.12 }}>
              Better Every Day.
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(248,250,252,0.58)", lineHeight: 1.78, maxWidth: 480 }}>
              At Allverze, continuous improvement is the engine behind every decision, every delivery, and every
              relationship. We measure success by the compounding value we create for clients over time.
            </p>
            <button
              onClick={() => navigate("contact")}
              className="self-start text-sm font-semibold text-white transition-all duration-150 hover:opacity-90"
              style={{ background: "#0055E5", borderRadius: 9, padding: "11px 24px", boxShadow: "0 2px 12px rgba(0,85,229,0.28)" }}
            >
              Start the Conversation
            </button>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-px"
            style={{ background: "rgba(248,250,252,0.08)", borderRadius: 14, overflow: "hidden" }}
          >
            {[
              { stat: "A to Z",  label: "Full-Spectrum Coverage"   },
              { stat: "99.9%",   label: "Platform Reliability SLA"  },
              { stat: "Zero",    label: "Unnecessary Tech Inflation" },
            ].map((s) => (
              <div key={s.stat} className="flex flex-col gap-1.5 p-8" style={{ background: "#0B1D35" }}>
                <span style={{ fontSize: "2rem", fontWeight: 800, color: "#F8FAFC", letterSpacing: "-0.03em" }}>
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
