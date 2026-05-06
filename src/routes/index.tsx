import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import servicesHero from "@/assets/services-hero.jpg";
import aboutHero from "@/assets/about-hero.jpg";
import SectionCTA from "@/components/SectionCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "溫哥華月嫂推薦｜大溫合法註冊月嫂到府與產後護理｜安馨寶貝" },
      { name: "description", content: "安馨寶貝是溫哥華合法註冊的專業母嬰護理機構，提供大溫地區月嫂到府、產後護理與坐月子規劃服務，服務大溫哥華地區Greater Vancouver Area。" },
      { property: "og:title", content: "溫哥華月嫂推薦｜安馨寶貝" },
      { property: "og:description", content: "安馨寶貝是溫哥華合法註冊的專業母嬰護理機構，提供大溫地區月嫂到府、產後護理與坐月子規劃服務。" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 min-h-[90vh] flex items-center bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 container-site py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">溫哥華合法註冊 · 專業母嬰護理</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.05]">
              Hello Baby
            </h1>
            <p className="mt-2 text-2xl md:text-4xl font-bold text-primary">
              安馨寶貝
            </p>
            <p className="mt-6 text-lg text-primary-foreground/85 leading-relaxed max-w-lg">
              月嫂到府服務 | 母嬰產後護理<br />
              客製化溫哥華產後護理方案 — Your Partner In Postnatal Care
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-dark text-primary-foreground font-bold rounded-lg hover:bg-secondary-dark transition-colors text-base"
              >
                旅程即將開始 →
              </Link>
              <Link
                to="/our-services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors text-base"
              >
                了解服務方案
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="section-padding bg-surface">
        <div className="container-site">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              產後恢復，讓專業的來
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              新生命的到來令人喜悅，但產後的身心挑戰也不容忽視。安馨寶貝提供全方位的專業月嫂到府服務，讓每位新手媽媽在最需要的時刻得到最溫暖的照護。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🏠", title: "月嫂到府服務", desc: "專業月嫂直接到府照護，提供最貼心舒適的居家產後護理體驗。" },
              { icon: "👶", title: "母嬰產後護理", desc: "從新生兒照護到媽媽產後恢復，全面呵護母嬰健康。" },
              { icon: "📋", title: "客製化護理方案", desc: "根據每位媽媽的需求量身打造專屬的坐月子規劃服務。" },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <SectionCTA
        title="準備好迎接新生命了嗎？"
        subtitle="讓安馨寶貝成為您產後護理的最佳夥伴"
        buttonText="預約免費諮詢"
      />

      {/* Trust Signals */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">為什麼選擇安馨寶貝？</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "✅", title: "合法註冊", desc: "溫哥華合法註冊的專業母嬰護理機構" },
              { icon: "🌟", title: "專業團隊", desc: "經驗豐富的月嫂團隊，用心呵護每個家庭" },
              { icon: "🏡", title: "到府服務", desc: "舒適的居家環境中享受專業護理" },
              { icon: "🎯", title: "客製方案", desc: "根據個人需求量身打造護理計畫" },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-3 font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-surface">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                The New Mother<br />Postpartum Care
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                安馨寶貝提供大溫地區月嫂到府、產後護理與坐月子規劃服務，服務大溫哥華地區Greater Vancouver Area 包含 Vancouver, Richmond, Burnaby, Coquitlam 及周邊城市與海外來加生子家庭，幫你安心迎接新生命。
              </p>
              <Link
                to="/our-services"
                className="mt-6 inline-flex items-center px-6 py-3 bg-primary-dark text-primary-foreground font-semibold rounded-lg hover:bg-primary transition-colors text-sm"
              >
                查看完整服務 →
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={servicesHero} alt="月嫂到府服務" width={1280} height={720} className="w-full h-auto object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-lg">
              <img src={aboutHero} alt="母嬰護理" width={1280} height={720} className="w-full h-auto object-cover" loading="lazy" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                用愛守護每一個新生命
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                我們深信，每位媽媽和寶寶都值得最好的照護。安馨寶貝以專業、溫馨、貼心的服務理念，陪伴每個家庭度過最珍貴的產後時光。
              </p>
              <Link
                to="/brand-story"
                className="mt-6 inline-flex items-center px-6 py-3 bg-secondary-dark text-secondary-foreground font-semibold rounded-lg hover:bg-secondary transition-colors text-sm"
              >
                了解我們的故事 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-surface">
        <div className="container-site text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">服務區域</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            我們服務大溫哥華地區 Greater Vancouver Area 的每一個角落
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {["Vancouver", "Richmond", "Burnaby", "Coquitlam", "周邊城市"].map((city) => (
              <span key={city} className="px-6 py-3 bg-card border border-border rounded-full text-sm font-medium text-foreground">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <SectionCTA
        title="旅程即將開始"
        subtitle="讓安馨寶貝陪伴您安心迎接新生命"
        buttonText="立即聯繫我們"
        variant="secondary"
      />
    </>
  );
}
