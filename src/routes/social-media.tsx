import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
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
      <section className="relative pt-[72px] flex items-center justify-center min-h-[280px] bg-surface">
        <div className="container-site text-center py-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">社群媒體</p>
          <h1 className="text-3xl md:text-5xl font-semibold text-foreground tracking-tight">與我們保持聯繫</h1>
          <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
            關注安馨寶貝，獲取最新母嬰護理資訊與產後照護知識
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-site max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground leading-[1.8]">
            安馨寶貝定期分享專業的母嬰護理知識、產後恢復建議，以及溫馨的服務故事。關注我們的社群媒體，與更多新手媽媽一起交流成長。
          </p>
          <div className="mt-10 bg-muted rounded-2xl p-10 border border-border">
            <p className="text-muted-foreground">
              我們正在建設社群媒體頻道，敬請期待更多精彩內容。如需了解最新資訊，歡迎直接聯繫我們。
            </p>
            <Link
              to="/contact-us"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-primary-dark text-primary-foreground font-medium rounded-full hover:bg-primary transition-all duration-300 text-sm"
            >
              聯繫我們
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <SectionCTA title="想了解更多？" buttonText="直接聯繫我們" variant="warm" />
    </>
  );
}
