import { NavLink } from "react-router-dom";
import allverzeLogo from "../imports/logo.webp";
import { WHATSAPP_URL, PUBLIC_EMAIL } from "../config";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#071526", borderTop: "1px solid rgba(0,85,229,0.12)" }}>
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-12">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="flex flex-col gap-4 md:col-span-5">
            <NavLink to="/" className="self-start focus-visible:outline-none" aria-label="Allverze Corporation home">
              <img
                src={allverzeLogo}
                alt="Allverze Corporation"
                style={{ height: 48, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
            </NavLink>
            <p style={{ fontSize: "0.875rem", color: "rgba(248,250,252,0.42)", lineHeight: 1.7, maxWidth: 320 }}>
              Connecting possibilities through technology, ideas, and dependable execution. We solve, not just sell.
            </p>
            <div className="flex items-center gap-2">
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E" }} />
              <span style={{ fontSize: "0.75rem", color: "rgba(248,250,252,0.34)" }}>
                Currently accepting new engagements
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:col-span-3">
            <div style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(56,189,248,0.7)", marginBottom: 4 }}>
              Navigation
            </div>
            {navLinks.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                className="text-left text-sm transition-colors hover:text-white"
                style={{ color: "rgba(248,250,252,0.42)", textDecoration: "none" }}
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="flex flex-col gap-3 md:col-span-4">
            <div style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(56,189,248,0.7)", marginBottom: 4 }}>
              Get in Touch
            </div>
            <a href={`mailto:${PUBLIC_EMAIL}`} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(248,250,252,0.42)", textDecoration: "none" }}>
              {PUBLIC_EMAIL}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-2 flex items-center gap-3 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                maxWidth: 232,
                borderRadius: 10,
                padding: "10px 14px",
                background: "rgba(37,211,102,0.12)",
                border: "1px solid rgba(37,211,102,0.28)",
                color: "#D9FBE5",
                textDecoration: "none",
                boxShadow: "0 6px 18px rgba(37,211,102,0.10)",
              }}
              aria-label="Chat with Allverze on WhatsApp"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full" style={{ background: "#25D366", color: "#062B17" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold">Chat on WhatsApp</span>
                <span className="text-xs" style={{ color: "rgba(217,251,229,0.66)" }}>Typically replies in minutes</span>
              </span>
              <svg className="ml-auto opacity-60 transition-transform duration-200 group-hover:translate-x-0.5" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <div className="mt-1 flex gap-2">
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-[0.6875rem] transition-colors hover:bg-white/10 hover:text-white"
                  style={{ width: 72, height: 30, borderRadius: 7, background: "rgba(255,255,255,0.04)", color: "rgba(248,250,252,0.38)", textDecoration: "none" }}
                  aria-label={label}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 sm:flex-row sm:items-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p style={{ fontSize: "0.78rem", color: "rgba(248,250,252,0.26)" }}>
            © 2026 Allverze Corporation. All rights reserved.
          </p>
          <div className="flex items-center gap-2" style={{ fontSize: "0.75rem", color: "rgba(248,250,252,0.26)" }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            NDA Available · 100% Confidential
          </div>
        </div>
      </div>
    </footer>
  );
}
