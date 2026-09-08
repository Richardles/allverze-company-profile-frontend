import { useState } from "react";
import Header from "./components/Header";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import allverzeLogo from "./assets/Allverze Logo.png";

export type Page = "home" | "about" | "services" | "contact";

const navLinks: { label: string; page: Page }[] = [
  { label: "Home",     page: "home"     },
  { label: "About Us", page: "about"    },
  { label: "Services", page: "services" },
  { label: "Contact",  page: "contact"  },
];

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", minHeight: "100%" }}>
      <Header current={page} navigate={navigate} />

      {page === "home"     && <Home     navigate={navigate} />}
      {page === "about"    && <About    navigate={navigate} />}
      {page === "services" && <Services navigate={navigate} />}
      {page === "contact"  && <Contact  navigate={navigate} />}

      {/* Footer */}
      <footer style={{ background: "#071526", borderTop: "1px solid rgba(0,85,229,0.12)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <img
                src={allverzeLogo}
                alt="Allverze Corporation"
                className="h-8 w-auto object-contain object-left"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(248,250,252,0.38)",
                  lineHeight: 1.7,
                  maxWidth: 320,
                }}
              >
                Connecting Technology, Ideas, and Innovation from A to Z. A universe of solutions delivered with precision and integrity.
              </p>
              <div className="flex items-center gap-2">
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E" }} />
                <span style={{ fontSize: "0.75rem", color: "rgba(248,250,252,0.32)" }}>
                  Currently accepting new engagements
                </span>
              </div>
            </div>

            <div className="md:col-span-3 flex flex-col gap-3">
              <div
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(56,189,248,0.7)",
                  marginBottom: 4,
                }}
              >
                Navigation
              </div>
              {navLinks.map(({ label, page: p }) => (
                <button
                  key={p}
                  onClick={() => navigate(p)}
                  className="text-sm text-left transition-colors hover:text-white"
                  style={{ color: "rgba(248,250,252,0.40)" }}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="md:col-span-4 flex flex-col gap-3">
              <div
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(56,189,248,0.7)",
                  marginBottom: 4,
                }}
              >
                Get in Touch
              </div>
              <a
                href="mailto:allverze.corporation@gmail.com"
                className="text-sm transition-colors hover:text-white"
                style={{ color: "rgba(248,250,252,0.40)", textDecoration: "none" }}
              >
                allverze.corporation@gmail.com
              </a>
              <div className="flex gap-2 mt-2">
                {[
                  {
                    label: "LinkedIn",
                    href: "https://linkedin.com",
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    ),
                  },
                  {
                    label: "GitHub",
                    href: "https://github.com",
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    ),
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center transition-colors hover:text-white"
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 7,
                      background: "rgba(255,255,255,0.06)",
                      color: "rgba(248,250,252,0.40)",
                    }}
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p style={{ fontSize: "0.78rem", color: "rgba(248,250,252,0.24)" }}>
              © 2024 Allverze Corporation. All rights reserved.
            </p>
            <div
              style={{
                fontSize: "0.75rem",
                color: "rgba(248,250,252,0.24)",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              NDA Available · 100% Confidential
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppWidget />
    </div>
  );
}
