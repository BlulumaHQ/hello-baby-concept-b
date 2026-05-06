import { createFileRoute, Link } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import SectionCTA from "@/components/SectionCTA";
import servicesHero from "@/assets/services-hero.jpg";

export const Route = createFileRoute("/our-services")({
  head: () => ({
    meta: [
      { title: "服務項目 | 安馨寶貝" },
      { name: "description", content: "安馨寶貝提供月嫂到府服務、母嬰產後護理、坐月子規劃及客製化產後護理方案，服務大溫哥華地區。" },
      { property: "og:title", content: "服務項目 | 安馨寶貝" },
      { property: "og:description", content: "安馨寶貝提供月嫂到府服務、母嬰產後護理、坐月子規劃及客製化產後護理方案。" },
    ],
  }),
  component: OurServices,
});

function OurServices() {
  const services = [
    {
      icon: "🏠",
      title: "月嫂到府服務",
      desc: "專業月嫂直接到您的家中，在您最熟悉舒適的環境中提供全方位的產後照護。從新生兒餵養、沐浴到媽媽的營養調理，讓您安心坐月子。",
    },
    {
      icon: "👶",
      title: "母嬰產後護理",
      desc: "涵蓋新生兒護理與產婦恢復的完整護理方案。包括寶寶的日常照護指導、母乳餵養支持，以及媽媽的產後身體恢復計畫。",
    },
    {
      icon: "📋",
      title: "坐月子規劃服務",
      desc: "根據中華傳統坐月子智慧，結合現代醫學知識，為您規劃最適合的坐月子方案。從飲食調理到生活作息，面面俱到。",
    },
    {
      icon: "🎯",
      title: "客製化產後護理方案",
      desc: "每位媽媽和寶寶的需求都是獨特的。我們根據您的具體情況和需求，量身打造專屬的護理計畫，確保最貼心的照護體驗。",
    },
  ];

  return (
    <>
      <PageHero title="服務項目" subtitle="月嫂到府｜客製化溫哥華產後護理方案" backgroundImage={servicesHero} />

      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">我們的服務</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              安馨寶貝提供全方位的母嬰產後護理服務，從到府月嫂到客製化護理方案，滿足每個家庭的需求。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
                <span className="text-4xl">{s.icon}</span>
                <h3 className="mt-4 text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <SectionCTA
        title="找到適合您的服務方案"
        subtitle="聯繫我們，讓專業團隊為您規劃最佳護理方案"
        buttonText="預約諮詢"
      />

      <section className="section-padding bg-surface">
        <div className="container-site text-center">
          <h2 className="text-3xl font-bold text-foreground">服務區域</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            我們服務大溫哥華地區 Greater Vancouver Area，包含以下城市及周邊地區：
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {["Vancouver", "Richmond", "Burnaby", "Coquitlam", "周邊城市", "海外來加生子家庭"].map((c) => (
              <span key={c} className="px-5 py-2.5 bg-card border border-border rounded-full text-sm font-medium text-foreground">{c}</span>
            ))}
          </div>
          <Link
            to="/contact-us"
            className="mt-8 inline-flex items-center px-8 py-3.5 bg-primary-dark text-primary-foreground font-semibold rounded-lg hover:bg-primary transition-colors text-sm"
          >
            確認您的服務區域 →
          </Link>
        </div>
      </section>
    </>
  );
}
