import { useTheme } from "../ThemeContext";
import type { Page } from "../App";

const modules = [
  {
    tag: "01 — Engineering",
    title: "Custom Software Engineering",
    sub: "Web Applications · APIs · Enterprise Systems",
    desc: "We design and build production-grade software systems tailored to your exact business requirements. From complex workflow automation to multi-tenant SaaS platforms, our engineering practice is grounded in clean architecture, rigorous testing, and long-term maintainability.",
    bullets: [
      "Scalable web applications built with React and TypeScript",
      "RESTful and GraphQL API development with OpenAPI standards",
      "Microservices architecture on Kubernetes and serverless platforms",
      "CI/CD pipelines with automated quality gates and zero-downtime deployment",
    ],
    dark: false,
  },
  {
    tag: "02 — Mobile",
    title: "Mobile Application Development",
    sub: "iOS · Android · Cross-Platform",
    desc: "We craft high-performance, pixel-perfect mobile applications that deliver exceptional user experiences across iOS and Android. From MVP to enterprise-scale, we ensure speed, reliability, and native-feel on every device your customers carry.",
    bullets: [
      "Native iOS (Swift) and Android (Kotlin) development",
      "Cross-platform builds with React Native and Expo",
      "Seamless API integration with offline-first architecture",
      "App Store and Google Play submission and full lifecycle management",
    ],
    dark: true,
  },
  {
    tag: "03 — Observability",
    title: "Application Performance Monitoring",
    sub: "Real-Time Metrics · Distributed Tracing · Alerting",
    desc: "Gain complete visibility into your application's health, performance, and user experience. We implement end-to-end observability stacks that surface issues before they affect customers — with intelligent alerting and root-cause analysis built in.",
    bullets: [
      "Full-stack observability: metrics, logs, and distributed tracing",
      "Custom real-time dashboards with performance KPIs",
      "Intelligent alerting with escalation policies and on-call integration",
      "Proactive anomaly detection and incident response playbooks",
    ],
    dark: false,
  },
  {
    tag: "04 — Quality Assurance",
    title: "Performance & Automation Testing",
    sub: "Load Testing · Test Automation · CI Integration",
    desc: "Deliver software that performs under pressure. We design comprehensive test automation frameworks and load testing strategies that catch regressions early, validate performance benchmarks, and integrate seamlessly into your delivery pipeline.",
    bullets: [
      "End-to-end test automation with Playwright and Cypress",
      "Load and stress testing with k6, JMeter, and Gatling",
      "Performance benchmarking and regression tracking over releases",
      "CI/CD integrated quality gates with automated reporting",
    ],
    dark: true,
  },
];

const steps = [
  { num: "01", label: "Discovery & Audit",       desc: "We map your current state — systems, gaps, risks, and opportunities — with precision before a single line of code is written." },
  { num: "02", label: "Solution Architecture",    desc: "We design the right solution, not the most expensive one. Every blueprint is tied directly to your desired outcomes." },
  { num: "03", label: "Execution & Hardening",    desc: "We build, test, and secure with rigorous engineering discipline and zero-downtime deployment practices." },
  { num: "04", label: "Continuous Optimization",  desc: "Post-launch, we monitor, iterate, and improve — because Better Every Day doesn't stop at go-live." },
];

interface ServicesProps {
  navigate: (page: Page) => void;
}

export default function Services({ navigate }: ServicesProps) {
  const { isDark } = useTheme();

  const pageBg     = isDark ? "#060E1A" : "#F8FAFC";
  const cardBg     = isDark ? "#0B1D35" : "#FFFFFF";
  const cardBorder = isDark ? "rgba(255,255,255,0.07)" : "#E2E8F0";
  const textPrimary = isDark ? "#F8FAFC" : "#0B1D35";
  const textSub    = isDark ? "rgba(248,250,252,0.60)" : "#4A6080";
  const stepNumBg  = isDark ? "rgba(0,85,229,0.14)" : "rgba(0,85,229,0.08)";

  return (
    <main style={{ paddingTop: 72 }}>
      {/* ── HEADER BANNER ─────────────────────────────────────── */}
      <section style={{ background: "#0B1D35", paddingTop: 88, paddingBottom: 88 }} className="px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-bold tracking-[0.14em] uppercase mb-5" style={{ fontSize: "0.6875rem", color: "#38BDF8" }}>
            Enterprise Solutions
          </p>
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              fontWeight: 800,
              color: "#F8FAFC",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              maxWidth: 660,
            }}
          >
            Practical Solutions.{" "}
            <span style={{ color: "#38BDF8" }}>Uncompromising Performance.</span>
          </h1>
          <p style={{ marginTop: 20, fontSize: "1.0625rem", color: "rgba(248,250,252,0.58)", lineHeight: 1.75, maxWidth: 520 }}>
            Four deep-expertise capability domains. One integrated partner. Delivered with the integrity and precision Allverze is built on.
          </p>
        </div>
      </section>

      {/* ── ALTERNATING MODULES ───────────────────────────────── */}
      {modules.map((mod, i) => {
        const sectionBg = mod.dark
          ? "#0B1D35"
          : pageBg;
        const modText   = mod.dark ? "#F8FAFC" : textPrimary;
        const modSub    = mod.dark ? "rgba(248,250,252,0.55)" : textSub;
        const modAccent = mod.dark ? "#38BDF8" : "#0055E5";
        const modTagSub = mod.dark ? "rgba(248,250,252,0.38)" : "#8AA0BD";
        const panelBg   = mod.dark ? "#0E2344" : (isDark ? "#0B1D35" : "#EFF4FF");
        const panelBorder = mod.dark
          ? "1px solid rgba(56,189,248,0.14)"
          : `1px solid ${isDark ? "rgba(0,85,229,0.18)" : "rgba(0,85,229,0.12)"}`;

        return (
          <section
            key={mod.tag}
            style={{
              background: sectionBg,
              paddingTop: 88,
              paddingBottom: 88,
              borderTop: mod.dark
                ? "1px solid rgba(0,85,229,0.12)"
                : `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "#E9EEF5"}`,
            }}
            className="px-6 lg:px-12"
          >
            <div className="max-w-7xl mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                {/* Visual pane */}
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div
                    style={{
                      borderRadius: 18,
                      overflow: "hidden",
                      background: panelBg,
                      border: panelBorder,
                      height: 300,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "6.5rem",
                        fontWeight: 800,
                        letterSpacing: "-0.06em",
                        color: mod.dark
                          ? "rgba(56,189,248,0.08)"
                          : (isDark ? "rgba(0,85,229,0.10)" : "rgba(0,85,229,0.07)"),
                        userSelect: "none",
                        lineHeight: 1,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div style={{ position: "absolute", top: 20, left: 20, width: 32, height: 3, borderRadius: 2, background: modAccent, opacity: 0.6 }} />
                    <div style={{ position: "absolute", top: 20, left: 20, width: 3, height: 32, borderRadius: 2, background: modAccent, opacity: 0.6 }} />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex flex-col gap-5 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div>
                    <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: modAccent, marginBottom: 4 }}>
                      {mod.tag}
                    </p>
                    <p style={{ fontSize: "0.8rem", color: modTagSub }}>
                      {mod.sub}
                    </p>
                  </div>

                  <h2 style={{ fontSize: "clamp(1.65rem, 2.8vw, 2.15rem)", fontWeight: 700, color: modText, letterSpacing: "-0.02em", lineHeight: 1.22 }}>
                    {mod.title}
                  </h2>

                  <p style={{ fontSize: "0.9375rem", color: modSub, lineHeight: 1.75 }}>
                    {mod.desc}
                  </p>

                  <ul className="flex flex-col gap-2.5 mt-1">
                    {mod.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={modAccent} strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 3 }}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span style={{ fontSize: "0.875rem", color: mod.dark ? "rgba(248,250,252,0.62)" : (isDark ? "rgba(248,250,252,0.70)" : "#334155"), lineHeight: 1.65 }}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => navigate("contact")}
                    className="self-start text-sm font-semibold text-white transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
                    style={{ background: "#0055E5", borderRadius: 9, padding: "10px 22px", marginTop: 4, boxShadow: "0 2px 10px rgba(0,85,229,0.22)" }}
                  >
                    Discuss This Capability
                  </button>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── A TO Z WORKFLOW ───────────────────────────────────── */}
      <section
        style={{
          background: pageBg,
          paddingTop: 96,
          paddingBottom: 96,
          borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "#E9EEF5"}`,
        }}
        className="px-6 lg:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-xl">
            <p className="font-bold tracking-[0.14em] uppercase mb-3" style={{ fontSize: "0.6875rem", color: "#0055E5" }}>
              How We Work
            </p>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.5rem)", fontWeight: 700, color: textPrimary, letterSpacing: "-0.02em" }}>
              The A to Z Workflow
            </h2>
            <p style={{ marginTop: 10, fontSize: "0.9375rem", color: textSub, lineHeight: 1.7 }}>
              Four phases, zero guesswork. Every engagement follows the same disciplined process.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex flex-col gap-4"
                style={{
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: 14,
                  padding: "28px 24px",
                  boxShadow: isDark ? "0 1px 4px rgba(0,0,0,0.25)" : "0 1px 4px rgba(0,0,0,0.04)",
                  position: "relative",
                }}
              >
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute" style={{ top: 36, right: -26, width: 20, zIndex: 2 }}>
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                      <path d="M0 6h16M12 1l5 5-5 5" stroke={isDark ? "rgba(255,255,255,0.18)" : "#CBD5E1"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
                <div style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.06em", color: "#0055E5", background: stepNumBg, borderRadius: 6, padding: "4px 10px", alignSelf: "flex-start" }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: textPrimary, letterSpacing: "-0.01em" }}>
                  {step.label}
                </h3>
                <p style={{ fontSize: "0.855rem", color: textSub, lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA CLOSING BANNER ────────────────────────────────── */}
      <section
        style={{ background: "#0B1D35", borderTop: "1px solid rgba(0,85,229,0.14)", paddingTop: 88, paddingBottom: 88 }}
        className="px-6 lg:px-12"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#F8FAFC", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Ready to Solve Your Next Challenge?
            </h2>
            <p style={{ marginTop: 10, fontSize: "0.9375rem", color: "rgba(248,250,252,0.50)", lineHeight: 1.7 }}>
              A direct conversation with engineers who understand your problem — no pitch decks, no generic proposals.
            </p>
            <p style={{ marginTop: 8, fontSize: "0.78rem", color: "rgba(248,250,252,0.30)" }}>
              100% Confidential. NDA Available Upon Request.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <button
              onClick={() => navigate("contact")}
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white transition-all duration-150 hover:opacity-90"
              style={{ background: "#0055E5", borderRadius: 9, padding: "12px 24px", boxShadow: "0 2px 12px rgba(0,85,229,0.30)", whiteSpace: "nowrap" }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email Inquiry
            </button>
            <button
              onClick={() => window.open("https://wa.me/6281283812336?text=Hello%20Allverze%20team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services%20and%20learn%20more%20about%20how%20your%20solutions%20can%20support%20my%20business.", "_blank", "noopener")}
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-150"
              style={{ border: "1px solid rgba(248,250,252,0.20)", borderRadius: 9, padding: "12px 24px", color: "rgba(248,250,252,0.80)", whiteSpace: "nowrap" }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Chat
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
