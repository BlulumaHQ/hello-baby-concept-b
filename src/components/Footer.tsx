import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";

const navLinks = [
  { to: "/" as const, label: "首頁" },
  { to: "/brand-story" as const, label: "品牌故事" },
  { to: "/our-team" as const, label: "團隊介紹" },
  { to: "/our-services" as const, label: "服務項目" },
];

const secondaryLinks = [
  { to: "/faq" as const, label: "常見問題" },
  { to: "/contact-us" as const, label: "聯繫我們" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container-site section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="https://www.careforhealth.life/wp-content/uploads/2021/02/Final-HELLO-BABYLOGO-300x126.png"
              alt="安馨寶貝"
              className="h-10 w-auto brightness-0 invert opacity-90"
            />
            <p className="mt-4 text-sm text-primary-foreground/65 leading-relaxed">
              溫哥華合法註冊的專業母嬰護理機構，致力於為大溫哥華地區及海外來加生子的家庭提供最專業、最溫馨的產後護理服務。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold mb-5 uppercase tracking-[0.15em] text-primary-foreground/45">導航</h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-primary-foreground/65 hover:text-primary-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="text-xs font-semibold mb-5 uppercase tracking-[0.15em] text-primary-foreground/45">更多</h4>
            <ul className="space-y-2.5">
              {secondaryLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-primary-foreground/65 hover:text-primary-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xs font-semibold mb-5 uppercase tracking-[0.15em] text-primary-foreground/45">服務區域</h4>
            <div className="flex items-start gap-2 text-sm text-primary-foreground/65 leading-relaxed">
              <MapPin size={16} className="shrink-0 mt-0.5" />
              <span>
                大溫哥華地區<br />
                Vancouver · Richmond<br />
                Burnaby · Coquitlam<br />
                及周邊城市
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-center gap-1 text-xs text-primary-foreground/40">
          <span>© {year} 安馨寶貝 Hello Baby Postpartum Services LTD. All rights reserved.</span>
          <span className="hidden sm:inline">|</span>
          <span>
            Web Design by{" "}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/70 transition-colors">
              Bluluma
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
