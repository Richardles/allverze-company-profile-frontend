import { useState, useEffect } from "react";
import type { Page } from "../App";
import allverzeLogo from "../assets/Allverze Logo.png";

interface HeaderProps {
  current: Page;
  navigate: (page: Page) => void;
}

const navLinks: { label: string; page: Page }[] = [
  { label: "Home",     page: "home"     },
  { label: "About Us", page: "about"    },
  { label: "Services", page: "services" },
  { label: "Contact",  page: "contact"  },
];

export default function Header({ current, navigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(255,255,255,0.94)"
          : "rgba(255,255,255,0.88)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: scrolled
          ? "1px solid rgba(14,30,54,0.10)"
          : "1px solid rgba(14,30,54,0.06)",
        boxShadow: scrolled
          ? "0 2px 20px rgba(0,0,0,0.08)"
          : "none",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between"
        style={{ height: 70 }}
      >
        {/* Logo */}
        <button
          onClick={() => navigate("home")}
          className="flex items-center focus-visible:outline-none"
          aria-label="Allverze Corporation — home"
        >
          <img
            src={allverzeLogo}
            alt="Allverze Corporation"
            className="h-9 w-auto object-contain"
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => navigate(page)}
              className="relative px-4 py-2 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none"
              style={{
                color: current === page ? "#0055E5" : "#1E3A5F",
                borderRadius: 6,
              }}
            >
              {label}
              {current === page && (
                <span
                  className="absolute bottom-0.5 left-4 right-4 h-0.5"
                  style={{
                    background: "#0055E5",
                    borderRadius: 2,
                  }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => navigate("contact")}
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
          style={{
            background: "#0055E5",
            borderRadius: 8,
            padding: "9px 22px",
            boxShadow: "0 2px 8px rgba(0,85,229,0.28)",
          }}
        >
          Connect With Us
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 focus-visible:outline-none"
          style={{ color: "#0B1D35", borderRadius: 6 }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden flex flex-col px-6 py-5 gap-1"
          style={{ borderTop: "1px solid rgba(14,30,54,0.08)", background: "rgba(255,255,255,0.97)" }}
        >
          {navLinks.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => { navigate(page); setMenuOpen(false); }}
              className="text-sm font-semibold text-left px-3 py-2.5 transition-colors"
              style={{
                color: current === page ? "#0055E5" : "#1E3A5F",
                borderRadius: 6,
                background: current === page ? "rgba(0,85,229,0.06)" : "transparent",
              }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => { navigate("contact"); setMenuOpen(false); }}
            className="mt-3 self-start text-sm font-semibold text-white"
            style={{ background: "#0055E5", borderRadius: 8, padding: "9px 22px" }}
          >
            Connect With Us
          </button>
        </div>
      )}
    </header>
  );
}
