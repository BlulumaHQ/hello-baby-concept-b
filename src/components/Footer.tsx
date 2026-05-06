import { Link } from "@tanstack/react-router";

const navLinks = [
  { to: "/" as const, label: "首頁" },
  { to: "/brand-story" as const, label: "品牌故事" },
  { to: "/our-team" as const, label: "團隊" },
  { to: "/our-services" as const, label: "服務" },
];

const secondaryLinks = [
  { to: "/faq" as const, label: "常見問題" },
  { to: "/social-media" as const, label: "社群媒體" },
  { to: "/contact-us" as const, label: "聯繫我們" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-site section-padding">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Col 1: Brand */}
          <div className="md:col-span-1">
            <span className="text-xl font-bold tracking-tight">安馨寶貝</span>
            <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
              溫哥華合法註冊的專業母嬰護理機構，服務大溫哥華地區及海外來加生子家庭。
            </p>
          </div>

          {/* Col 2: Spacer */}
          <div className="hidden md:block" />

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-primary-foreground/50">導航</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Secondary */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-primary-foreground/50">更多</h4>
            <ul className="space-y-2">
              {secondaryLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-primary-foreground/50">服務區域</h4>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              大溫哥華地區<br />
              Vancouver · Richmond<br />
              Burnaby · Coquitlam<br />
              及周邊城市
            </p>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-center gap-1 text-xs text-primary-foreground/50">
          <span>© {year} 安馨寶貝. All rights reserved.</span>
          <span className="hidden sm:inline">|</span>
          <span>
            Web Design by{" "}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-colors">
              Bluluma
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
