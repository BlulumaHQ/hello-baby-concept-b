import { Link } from "@tanstack/react-router";
import { MapPin, Mail } from "lucide-react";

const navLinks = [
  { to: "/" as const, label: "首頁" },
  { to: "/brand-story" as const, label: "品牌故事" },
  { to: "/our-team" as const, label: "團隊介紹" },
  { to: "/our-services" as const, label: "服務項目" },
];

const secondaryLinks = [
  { to: "/wellness-journal" as const, label: "護理專欄" },
  { to: "/faq" as const, label: "常見問題" },
  { to: "/contact-us" as const, label: "聯繫我們" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      {/* Brand accent line */}
      <div className="h-[3px] bg-gradient-to-r from-brand-jade via-brand-teal to-brand-gold" />

      <div className="container-site pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-5">
            <img
              src="https://www.careforhealth.life/wp-content/uploads/2021/02/Final-HELLO-BABYLOGO-300x126.png"
              alt="安馨寶貝"
              className="h-14 w-auto"
            />
            <p className="mt-5 text-sm text-primary-foreground/55 leading-[1.8] max-w-sm">
              溫哥華合法註冊的專業母嬰護理機構，致力於為大溫哥華地區及海外來加生子的家庭提供最專業、最溫馨的產後護理服務。
            </p>
            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/50 hover:text-brand-teal hover:border-brand-teal transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/50 hover:text-brand-teal hover:border-brand-teal transition-all duration-300"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/50 hover:text-brand-teal hover:border-brand-teal transition-all duration-300"
                aria-label="YouTube"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/50 hover:text-brand-teal hover:border-brand-teal transition-all duration-300"
                aria-label="WeChat"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05a6.06 6.06 0 0 1-.253-1.726c0-3.573 3.31-6.472 7.392-6.472.267 0 .527.022.789.044C16.71 4.861 13.075 2.188 8.691 2.188zm6.573 16.238a8.397 8.397 0 0 1-2.416.357c-4.068 0-7.37-2.862-7.37-6.39s3.302-6.39 7.37-6.39c4.07 0 7.372 2.862 7.372 6.39 0 1.86-.985 3.539-2.527 4.67a.496.496 0 0 0-.178.557l.308 1.17-.019.002a.252.252 0 0 1-.137.04.266.266 0 0 1-.144-.05l-1.515-.886a.72.72 0 0 0-.6-.082 .34.34 0 0 0-.144.012z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold mb-5 uppercase tracking-[0.15em] text-brand-teal/80">導航</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-primary-foreground/55 hover:text-primary-foreground transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold mb-5 uppercase tracking-[0.15em] text-brand-teal/80">更多</h4>
            <ul className="space-y-3">
              {secondaryLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-primary-foreground/55 hover:text-primary-foreground transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Service Areas */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold mb-5 uppercase tracking-[0.15em] text-brand-teal/80">聯繫方式</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-sm text-primary-foreground/55">
                <MapPin size={15} className="shrink-0 mt-0.5 text-brand-teal/60" />
                <span className="leading-relaxed">
                  大溫哥華地區<br />
                  Vancouver · Richmond<br />
                  Burnaby · Coquitlam 及周邊城市
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-primary-foreground/55">
                <Mail size={15} className="shrink-0 text-brand-teal/60" />
                <span>info@careforhealth.life</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/8">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-center gap-1 text-xs text-primary-foreground/30">
          <span>© {year} 安馨寶貝 Hello Baby Postpartum Services LTD. All rights reserved.</span>
          <span className="hidden sm:inline">|</span>
          <span>
            Web Design by{" "}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/50 transition-colors">
              Bluluma
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
