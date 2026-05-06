import { Link } from "@tanstack/react-router";
import { useState } from "react";

const navItems = [
  { to: "/" as const, label: "HOME" },
  { to: "/brand-story" as const, label: "STORY" },
  { to: "/our-team" as const, label: "TEAM" },
  { to: "/our-services" as const, label: "SERVICES" },
  { to: "/social-media" as const, label: "SOCIAL" },
  { to: "/faq" as const, label: "FAQ" },
  { to: "/contact-us" as const, label: "CONTACT" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-site flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <span className="text-2xl font-bold text-primary-dark tracking-tight">安馨寶貝</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary-dark bg-accent" }}
              inactiveProps={{ className: "text-foreground hover:text-primary-dark hover:bg-accent" }}
              activeOptions={{ exact: true }}
              className="px-3 py-2 text-sm font-medium rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact-us"
            className="ml-3 inline-flex items-center justify-center px-5 py-2.5 bg-primary-dark text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary transition-colors"
          >
            聯繫我們
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle Navigation"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-background px-5 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              activeProps={{ className: "text-primary-dark bg-accent" }}
              inactiveProps={{ className: "text-foreground" }}
              activeOptions={{ exact: true }}
              className="block px-4 py-3 text-sm font-medium rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact-us"
            onClick={() => setMobileOpen(false)}
            className="block mt-3 text-center px-4 py-3 bg-primary-dark text-primary-foreground text-sm font-semibold rounded-lg"
          >
            聯繫我們
          </Link>
        </nav>
      )}
    </header>
  );
}
