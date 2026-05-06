import { Link, useLocation } from "@tanstack/react-router";
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
  const location = useLocation();
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-card/96 backdrop-blur-2xl border-b border-border/80 shadow-[0_16px_50px_rgba(20,40,32,0.08)]"
      }`}
    >
      <div className="container-site flex items-center justify-between h-[96px] md:h-[104px]">
        <Link to="/" className="flex items-center gap-4 shrink-0" onClick={() => setMobileOpen(false)}>
          <span className={`grid place-items-center rounded-full transition-all duration-500 ${transparent ? "bg-white/92 px-5 py-4" : "bg-background px-4 py-3 shadow-sm"}`}>
            <img
              src="https://www.careforhealth.life/wp-content/uploads/2021/02/Final-HELLO-BABYLOGO-300x126.png"
              alt="安馨寶貝 Hello Baby"
              className="h-[52px] md:h-[58px] w-auto"
            />
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-border/70 bg-card/82 px-2 py-2 shadow-sm backdrop-blur-xl">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary bg-accent" }}
              inactiveProps={{ className: "text-foreground/76 hover:text-primary hover:bg-muted/70" }}
              activeOptions={{ exact: true }}
              className="rounded-full px-4 py-2.5 text-[13px] font-semibold transition-all duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[13px] font-semibold text-primary-foreground shadow-[0_18px_42px_rgba(24,54,44,0.18)] transition-all duration-300 hover:bg-brand-jade hover:text-primary-dark"
          >
            <Phone size={15} />
            預約諮詢
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden rounded-full border p-3 transition-colors ${transparent ? "border-white/40 bg-white/12 text-primary-foreground" : "border-border bg-card text-foreground"}`}
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-card/98 px-5 py-6 shadow-xl backdrop-blur-2xl">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-primary bg-accent" }}
                inactiveProps={{ className: "text-foreground/82" }}
                activeOptions={{ exact: true }}
                className="block rounded-2xl px-4 py-4 text-[16px] font-semibold transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact-us"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-4 text-[16px] font-semibold text-primary-foreground"
            >
              <Phone size={17} />
              預約諮詢
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
