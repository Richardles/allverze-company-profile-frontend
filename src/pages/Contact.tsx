import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { API_BASE_URL, WHATSAPP_URL } from "../config";

const faqs = [
  {
    q: "How quickly can Allverze onboard a new project?",
    a: "Most engagements begin within 5 to 10 business days of a signed agreement. For urgent timelines, expedited onboarding is available. Our first milestone is always a Discovery & Audit session — no assumptions, just facts.",
  },
  {
    q: "Does Allverze comply with security and data protection standards?",
    a: "Yes. We operate in accordance with ISO 27001 principles, GDPR-aligned data handling practices, and industry-specific compliance frameworks. All client data is processed under strict confidentiality protocols from day one.",
  },
  {
    q: "What are typical project timelines for enterprise engagements?",
    a: "Advisory audits typically run 2 to 4 weeks. Custom software builds range from 8 to 24 weeks depending on complexity. We publish milestone-based delivery schedules during Solution Architecture so expectations are always aligned.",
  },
  {
    q: "Can we establish an NDA before discussing our project details?",
    a: "Absolutely — and we encourage it. A mutual NDA can be executed before any technical or business details are shared. Simply request one in your inquiry and we'll have a signed agreement in place within 24 hours.",
  },
];

const intents = [
  "Custom Software Engineering",
  "Mobile Application Development",
  "Application Performance Monitoring",
  "Performance & Automation Testing",
  "Discovery & Advisory",
  "Other",
];

export default function Contact() {
  const { isDark } = useTheme();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [intent, setIntent] = useState(intents[0]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState<"sent" | "failed" | null>(null);
  const [leadRef, setLeadRef] = useState<string | null>(null);

  const pageBg      = isDark ? "#060E1A" : "#F8FAFC";
  const cardBg      = isDark ? "#0B1D35" : "#FFFFFF";
  const cardBorder  = isDark ? "rgba(255,255,255,0.08)" : "#E2E8F0";
  const textPrimary = isDark ? "#F8FAFC" : "#0B1D35";
  const textSub     = isDark ? "rgba(248,250,252,0.55)" : "#4A6080";
  const textMuted   = isDark ? "rgba(248,250,252,0.35)" : "#8AA0BD";

  const inputBase: React.CSSProperties = {
    width: "100%",
    background: isDark ? "rgba(255,255,255,0.04)" : "#F8FAFC",
    border: `1px solid ${isDark ? "rgba(255,255,255,0.10)" : "#DDE4EE"}`,
    borderRadius: 9,
    padding: "11px 14px",
    fontSize: "0.9rem",
    color: textPrimary,
    outline: "none",
    transition: "border-color 150ms",
    fontFamily: "inherit",
  };

  return (
    <main style={{ paddingTop: 72 }}>
      {/* ── HEADER BANNER ─────────────────────────────────────── */}
      <section style={{ background: "#0B1D35", paddingTop: 88, paddingBottom: 88 }} className="px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-bold tracking-[0.14em] uppercase mb-5" style={{ fontSize: "0.6875rem", color: "#38BDF8" }}>
            Partnership Hub
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
            {"Build What Moves Your "}
            <span style={{ color: "#38BDF8" }}>Business Forward.</span>
          </h1>
          <p style={{ marginTop: 18, fontSize: "1.0625rem", color: "rgba(248,250,252,0.55)", lineHeight: 1.75, maxWidth: 520 }}>
            Tell us what you need, where the friction is, and what success looks like. We'll help map the right technical path with the clarity and discipline your team expects.
          </p>
        </div>
      </section>

      {/* ── ENGAGEMENT HUB ────────────────────────────────────── */}
      <section style={{ background: pageBg, paddingTop: 80, paddingBottom: 80 }} className="px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left: channels */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="mb-2">
              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: textPrimary, letterSpacing: "-0.01em" }}>
                Direct Channels
              </h2>
              <p style={{ marginTop: 4, fontSize: "0.875rem", color: textMuted }}>
                Choose the contact method that fits your current decision stage.
              </p>
            </div>

            {/* Email */}
            <a
              href="mailto:allverze.corporation@gmail.com"
              className="flex items-center gap-4 transition-all duration-150 hover:-translate-y-0.5"
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: 12,
                padding: "18px 20px",
                textDecoration: "none",
                boxShadow: isDark ? "0 1px 4px rgba(0,0,0,0.25)" : "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 9, background: "rgba(0,85,229,0.09)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0055E5", flexShrink: 0 }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: textMuted, marginBottom: 2 }}>Email</div>
                <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#0055E5" }}>allverze.corporation@gmail.com</div>
              </div>
            </a>

            {/* WhatsApp */}
            <div
              style={{
                background: "#0B1D35",
                border: "1px solid rgba(56,189,248,0.18)",
                borderRadius: 12,
                padding: "22px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div style={{ width: 38, height: 38, borderRadius: 9, background: "rgba(37,211,102,0.14)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "#F8FAFC" }}>WhatsApp Business</div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(248,250,252,0.40)" }}>Solutions Engineer</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E" }} />
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#22C55E" }}>Online</span>
                </div>
              </div>
              <button
                onClick={() => window.open(WHATSAPP_URL, "_blank", "noopener")}
                className="w-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "#25D366", borderRadius: 9, padding: "11px" }}
              >
                Start WhatsApp Conversation
              </button>
              <p style={{ fontSize: "0.75rem", textAlign: "center", color: "rgba(248,250,252,0.30)" }}>
                Typically responds within minutes
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com",
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="#0055E5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>,
                },
                {
                  label: "GitHub",
                  href: "https://github.com",
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill={isDark ? "#F8FAFC" : "#0B1D35"}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>,
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold transition-all hover:-translate-y-0.5"
                  style={{
                    background: cardBg,
                    border: `1px solid ${cardBorder}`,
                    borderRadius: 9,
                    padding: "10px 16px",
                    color: textPrimary,
                    textDecoration: "none",
                    boxShadow: isDark ? "0 1px 4px rgba(0,0,0,0.20)" : "0 1px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="lg:col-span-3"
            style={{
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: 16,
              padding: "40px",
              boxShadow: isDark ? "0 2px 24px rgba(0,0,0,0.30)" : "0 2px 20px rgba(0,0,0,0.06)",
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center gap-5 py-14 text-center">
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#0055E5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: textPrimary }}>Inquiry Received</h3>
                  <p style={{ marginTop: 6, fontSize: "0.875rem", color: textSub, maxWidth: 320 }}>
                    A solutions specialist will review your inquiry and respond within one business day.
                  </p>
                  {leadRef && (
                    <div
                      style={{
                        width: "100%",
                        maxWidth: 320,
                        marginTop: 16,
                        border: `1px dashed ${isDark ? "rgba(56,189,248,0.35)" : "rgba(0,85,229,0.35)"}`,
                        background: isDark ? "rgba(56,189,248,0.06)" : "rgba(0,85,229,0.05)",
                        borderRadius: 12,
                        padding: "12px 20px",
                        textAlign: "center",
                      }}
                    >
                      <div style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: textMuted }}>
                        Your Reference Number
                      </div>
                      <div
                        style={{
                          marginTop: 4,
                          fontSize: "0.9375rem",
                          fontWeight: 700,
                          letterSpacing: "0.02em",
                          fontFamily: "'SF Mono', SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace",
                          color: isDark ? "#38BDF8" : "#0055E5",
                        }}
                      >
                        {leadRef}
                      </div>
                    </div>
                  )}
                  {confirmation === "sent" && (
                    <p style={{ fontSize: "0.8125rem", color: textMuted, maxWidth: 300 }}>
                      A confirmation email has been sent to {form.email}.
                    </p>
                  )}
                  {confirmation === "failed" && (
                    <p style={{ fontSize: "0.8125rem", color: textMuted, maxWidth: 300 }}>
                      Your message was received, but our confirmation email could not be delivered.
                    </p>
                  )}
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setConfirmation(null);
                    setLeadRef(null);
                  }}
                  className="text-sm font-semibold hover:underline"
                  style={{ color: "#0055E5" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={async (e) => {
                e.preventDefault();
                setSending(true);
                setError("");
                try {
                  const body = JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    message: `[Intent: ${intent}]\n\n${form.message}`,
                    botcheck: "",
                  });
                  const res = await fetch(`${API_BASE_URL}/api/contact`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body,
                  });
                  const data = await res.json();
                  if (data.success) {
                    setConfirmation(data.confirmation === "failed" ? "failed" : "sent");
                    setLeadRef(data.leadRef ?? null);
                    setSubmitted(true);
                  } else {
                    setError(data.message || "Something went wrong. Please try again.");
                  }
                } catch {
                  setError("Unable to reach the server. Please try again later.");
                } finally {
                  setSending(false);
                }
              }} className="flex flex-col gap-6">
                <div>
                  <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: textPrimary, letterSpacing: "-0.01em" }}>
                    Request a Strategy Call
                  </h2>
                  <p style={{ marginTop: 4, fontSize: "0.875rem", color: textSub }}>
                    Share your business context, technical goals, and timeline. We'll define the right next step.
                  </p>
                </div>

                {/* Intent */}
                <div className="flex flex-col gap-2">
                  <label style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: textMuted }}>
                    Primary service need
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {intents.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setIntent(opt)}
                        className="text-xs font-semibold transition-all duration-150"
                        style={
                          intent === opt
                            ? { background: "#0055E5", color: "#FFFFFF", borderRadius: 7, padding: "7px 14px", border: "1px solid #0055E5" }
                            : { background: "transparent", color: isDark ? "rgba(248,250,252,0.55)" : "#4A6080", borderRadius: 7, padding: "7px 14px", border: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "#DDE4EE"}` }
                        }
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: textMuted }}>Full Name</label>
                  <input
                    type="text" required placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputBase}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "#0055E5")}
                    onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = isDark ? "rgba(255,255,255,0.10)" : "#DDE4EE")}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: textMuted }}>Email</label>
                  <input
                    type="email" required placeholder="jane@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputBase}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "#0055E5")}
                    onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = isDark ? "rgba(255,255,255,0.10)" : "#DDE4EE")}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: textMuted }}>Phone Number</label>
                  <input
                    type="tel" required placeholder="+62 812 345 6789"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={inputBase}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "#0055E5")}
                    onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = isDark ? "rgba(255,255,255,0.10)" : "#DDE4EE")}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: textMuted }}>Message</label>
                  <textarea
                    required rows={4}
                    placeholder="Tell us about your challenge, goals, timeline, and the outcome you want..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputBase, resize: "none" }}
                    onFocus={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = "#0055E5")}
                    onBlur={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = isDark ? "rgba(255,255,255,0.10)" : "#DDE4EE")}
                  />
                </div>

                <div className="flex flex-col gap-2 mt-1">
                  {error && (
                    <p style={{ fontSize: "0.85rem", color: "#EF4444", textAlign: "center" }}>
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                    style={{ background: "#0055E5", borderRadius: 9, padding: "13px", boxShadow: "0 2px 12px rgba(0,85,229,0.28)" }}
                  >
                    {sending ? "Sending..." : "Send Inquiry →"}
                  </button>
                  <p style={{ fontSize: "0.75rem", textAlign: "center", color: textMuted }}>
                    Confidential by default · NDA available before discovery
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section style={{ background: "#0B1D35", borderTop: "1px solid rgba(0,85,229,0.12)", paddingTop: 80, paddingBottom: 80 }} className="px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="font-bold tracking-[0.14em] uppercase mb-3" style={{ fontSize: "0.6875rem", color: "#38BDF8" }}>
              Common Questions
            </p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.3rem)", fontWeight: 700, color: "#F8FAFC", letterSpacing: "-0.02em" }}>
              Frequently Asked
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: "#0E2344",
                  border: openFaq === i ? "1px solid rgba(56,189,248,0.28)" : "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 12,
                  overflow: "hidden",
                  transition: "border-color 200ms",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  style={{ background: "transparent" }}
                >
                  <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#F8FAFC", lineHeight: 1.5, paddingRight: 24 }}>
                    {faq.q}
                  </span>
                  <span
                    style={{
                      width: 28, height: 28, borderRadius: 6,
                      background: openFaq === i ? "rgba(56,189,248,0.15)" : "rgba(255,255,255,0.06)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                      transition: "background 200ms, transform 200ms",
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? "#38BDF8" : "rgba(248,250,252,0.5)"} strokeWidth="2.5" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 22px" }}>
                    <p style={{ fontSize: "0.875rem", color: "rgba(248,250,252,0.55)", lineHeight: 1.75 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
