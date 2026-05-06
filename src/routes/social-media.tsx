import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import SectionCTA from "@/components/SectionCTA";

export const Route = createFileRoute("/social-media")({
  head: () => ({
    meta: [
      { title: "社群媒體 | 安馨寶貝" },
      { name: "description", content: "關注安馨寶貝的社群媒體，獲取最新的母嬰護理資訊與產後照護知識。" },
      { property: "og:title", content: "社群媒體 | 安馨寶貝" },
      { property: "og:description", content: "關注安馨寶貝的社群媒體，獲取最新母嬰護理資訊。" },
    ],
  }),
  component: SocialMedia,
});

function SocialMedia() {
  return (
    <>
      <PageHero title="社群媒體" subtitle="關注我們，獲取最新母嬰護理資訊" />

      <section className="section-padding bg-background">
        <div className="container-site max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground">與我們保持聯繫</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            安馨寶貝定期分享專業的母嬰護理知識、產後恢復建議，以及溫馨的服務故事。關注我們的社群媒體，與更多新手媽媽一起交流成長。
          </p>

          <div className="mt-12 bg-surface rounded-xl p-10 border border-border">
            <p className="text-muted-foreground">
              我們正在建設社群媒體頻道，敬請期待更多精彩內容。如需了解最新資訊，歡迎直接聯繫我們。
            </p>
          </div>
        </div>
      </section>

      <SectionCTA title="想了解更多？" buttonText="直接聯繫我們" variant="secondary" />
    </>
  );
}
