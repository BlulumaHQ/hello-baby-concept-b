import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/" as const, label: "首頁" },
  { to: "/brand-story" as const, label: "品牌故事" },
  { to: "/our-team" as const, label: "團隊介紹" },
  { to: "/our-services" as const, label: "服務項目" },
  { to: "/faq" as const, label: "常見問題" },
  { to: "/contact-us" as const, label: "聯繫我們" },
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
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between h-[72px]">
        <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <img
            src="https://www.careforhealth.life/wp-content/uploads/2021/02/Final-HELLO-BABYLOGO-300x126.png"
            alt="安馨寶貝 Hello Baby"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary-dark" }}
              inactiveProps={{ className: "text-foreground/80 hover:text-primary-dark" }}
              activeOptions={{ exact: true }}
              className="px-3 py-2 text-[13px] font-medium tracking-wide transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact-us"
            className="ml-4 inline-flex items-center justify-center px-5 py-2.5 bg-primary-dark text-primary-foreground text-[13px] font-medium rounded-full hover:bg-primary transition-all duration-300"
          >
            預約諮詢
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden bg-card/98 backdrop-blur-md border-t border-border px-5 py-5 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              activeProps={{ className: "text-primary-dark bg-accent" }}
              inactiveProps={{ className: "text-foreground/80" }}
              activeOptions={{ exact: true }}
              className="block px-4 py-3.5 text-sm font-medium rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact-us"
            onClick={() => setMobileOpen(false)}
            className="block mt-3 text-center px-4 py-3.5 bg-primary-dark text-primary-foreground text-sm font-medium rounded-full"
          >
            預約諮詢
          </Link>
        </nav>
      )}
    </header>
  );
}
