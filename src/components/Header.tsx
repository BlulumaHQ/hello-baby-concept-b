import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { to: "/" as const, label: "首頁" },
  { to: "/brand-story" as const, label: "品牌故事" },
  { to: "/our-team" as const, label: "團隊介紹" },
  { to: "/our-services" as const, label: "服務項目" },
  { to: "/wellness-journal" as const, label: "護理專欄" },
  { to: "/faq" as const, label: "常見問題" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/98 backdrop-blur-xl border-b border-border shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between h-[88px]">
        {/* Logo — larger */}
        <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setMobileOpen(false)}>
          <img
            src="https://www.careforhealth.life/wp-content/uploads/2021/02/Final-HELLO-BABYLOGO-300x126.png"
            alt="安馨寶貝 Hello Baby"
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop nav — refined typography */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-brand-jade" }}
              inactiveProps={{ className: scrolled ? "text-foreground/75 hover:text-brand-jade" : "text-primary-foreground/80 hover:text-primary-foreground" }}
              activeOptions={{ exact: true }}
              className="px-4 py-2 text-[13px] font-medium tracking-[0.02em] transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact-us"
            className="ml-5 inline-flex items-center gap-2 px-6 py-2.5 bg-brand-jade text-white text-[13px] font-medium rounded-full hover:bg-brand-teal transition-all duration-300 shadow-sm"
          >
            <Phone size={14} />
            預約諮詢
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2.5 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden bg-card/99 backdrop-blur-xl border-t border-border px-5 py-6 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              activeProps={{ className: "text-brand-jade bg-accent" }}
              inactiveProps={{ className: "text-foreground/80" }}
              activeOptions={{ exact: true }}
              className="block px-4 py-3.5 text-[15px] font-medium rounded-xl transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact-us"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 text-center px-4 py-3.5 bg-brand-jade text-white text-[15px] font-medium rounded-full"
          >
            預約諮詢
          </Link>
        </nav>
      )}
    </header>
  );
}
