import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import SectionCTA from "@/components/SectionCTA";
import teamHero from "@/assets/team-hero.jpg";

export const Route = createFileRoute("/our-team")({
  head: () => ({
    meta: [
      { title: "我們的團隊 | 安馨寶貝" },
      { name: "description", content: "認識安馨寶貝的專業月嫂團隊，每位成員都經過嚴格訓練，致力於提供最優質的母嬰護理服務。" },
      { property: "og:title", content: "我們的團隊 | 安馨寶貝" },
      { property: "og:description", content: "認識安馨寶貝的專業月嫂團隊。" },
    ],
  }),
  component: OurTeam,
});

function OurTeam() {
  return (
    <>
      <PageHero title="我們的團隊" subtitle="專業、用心、值得信賴的月嫂團隊" backgroundImage={teamHero} />

      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground">專業護理團隊</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              安馨寶貝的每位月嫂都經過嚴格的專業訓練與考核，擁有豐富的母嬰護理經驗。我們的團隊以專業知識和溫暖的服務態度，為每個家庭帶來最安心的照護體驗。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "專業認證", desc: "所有月嫂均持有相關專業認證，確保服務品質。" },
              { title: "豐富經驗", desc: "團隊成員擁有多年母嬰護理實務經驗。" },
              { title: "持續進修", desc: "定期參加專業培訓，掌握最新護理知識。" },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-8 text-center">
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-site text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground">加入我們的團隊</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            如果您對母嬰護理充滿熱忱，歡迎聯繫我們了解加入安馨寶貝團隊的機會。
          </p>
        </div>
      </section>

      <SectionCTA title="想認識我們的團隊？" buttonText="立即諮詢" variant="secondary" />
    </>
  );
}
