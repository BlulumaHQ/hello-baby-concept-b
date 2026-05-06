import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import SectionCTA from "@/components/SectionCTA";
import aboutHero from "@/assets/about-hero.jpg";

export const Route = createFileRoute("/brand-story")({
  head: () => ({
    meta: [
      { title: "品牌故事 | 安馨寶貝" },
      { name: "description", content: "了解安馨寶貝的品牌故事，溫哥華合法註冊的專業母嬰護理機構如何用愛守護每一個新生命。" },
      { property: "og:title", content: "品牌故事 | 安馨寶貝" },
      { property: "og:description", content: "了解安馨寶貝的品牌故事，用愛守護每一個新生命。" },
    ],
  }),
  component: BrandStory,
});

function BrandStory() {
  return (
    <>
      <PageHero title="品牌故事" subtitle="安馨寶貝 — 用愛守護每一個新生命" backgroundImage={aboutHero} />

      <section className="section-padding bg-background">
        <div className="container-site max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground">我們的使命</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            安馨寶貝是溫哥華合法註冊的專業母嬰護理機構，致力於為大溫哥華地區及海外來加生子的家庭提供最專業、最溫馨的產後護理服務。
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            我們深信，每位新手媽媽在產後最需要的，不僅是身體上的照護，更是心靈上的支持與陪伴。安馨寶貝的團隊以專業的母嬰護理知識，結合溫暖貼心的服務態度，幫助每個家庭安心迎接新生命的到來。
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-site max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground">我們的理念</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "專業", desc: "每位月嫂都經過嚴格的專業訓練，確保提供最高品質的母嬰護理。" },
              { title: "溫馨", desc: "以家人般的溫暖態度，讓每位媽媽感受到被呵護的幸福。" },
              { title: "客製化", desc: "理解每個家庭的獨特需求，量身打造最適合的護理方案。" },
              { title: "信賴", desc: "溫哥華合法註冊，值得每個家庭信賴的專業機構。" },
            ].map((v) => (
              <div key={v.title} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-lg font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA title="想了解更多？" subtitle="聯繫我們，開始您的產後護理旅程" buttonText="聯繫我們" />
    </>
  );
}
