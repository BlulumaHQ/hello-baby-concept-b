import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Heart, Baby, Utensils } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

export const Route = createFileRoute("/wellness-journal")({
  head: () => ({
    meta: [
      { title: "護理專欄 | 安馨寶貝" },
      { name: "description", content: "安馨寶貝護理專欄，分享專業母嬰護理知識、產後恢復建議與坐月子智慧。" },
      { property: "og:title", content: "護理專欄 | 安馨寶貝" },
      { property: "og:description", content: "專業母嬰護理知識與產後照護資訊。" },
    ],
  }),
  component: WellnessJournal,
});

const articles = [
  {
    icon: Baby,
    category: "新生兒照護",
    title: "新生兒黃疸：新手父母需要知道的一切",
    excerpt: "了解新生兒黃疸的成因、觀察要點與何時需要就醫，讓您在面對寶寶的第一個健康挑戰時不再焦慮。",
  },
  {
    icon: Utensils,
    category: "產後營養",
    title: "科學坐月子：現代營養學與傳統智慧的結合",
    excerpt: "拋開「大補」迷思，用科學的方式規劃月子餐，讓產後恢復更高效、更健康。",
  },
  {
    icon: Heart,
    category: "產後身心",
    title: "產後情緒波動是正常的：認識與應對產後憂鬱",
    excerpt: "產後情緒變化並非軟弱的表現。了解產後憂鬱的徵兆，以及如何尋求支持與幫助。",
  },
  {
    icon: Baby,
    category: "育兒技巧",
    title: "建立新生兒睡眠規律的實用指南",
    excerpt: "從了解新生兒的睡眠週期開始，循序漸進地幫助寶寶建立健康的作息習慣。",
  },
  {
    icon: Utensils,
    category: "產後營養",
    title: "哺乳期媽媽的飲食指南",
    excerpt: "母乳餵養期間的營養需求、忌口迷思破解，以及如何透過飲食增加奶量。",
  },
  {
    icon: Heart,
    category: "產後恢復",
    title: "產後身體恢復時間表：每個階段的變化",
    excerpt: "從產後第一天到產後半年，了解身體恢復的自然過程與每個階段的注意事項。",
  },
];

function WellnessJournal() {
  return (
    <>
      <section className="relative pt-[88px] flex items-center justify-center min-h-[300px] bg-surface">
        <div className="container-site text-center py-16 md:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">護理專欄</p>
          <h1 className="text-3xl md:text-5xl font-semibold text-foreground tracking-tight">護理專欄</h1>
          <p className="mt-4 text-[15px] text-muted-foreground max-w-xl mx-auto leading-relaxed">
            專業母嬰護理知識、產後恢復建議與科學坐月子智慧
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {articles.map((article, i) => (
              <article key={i} className="bg-card rounded-xl border border-border p-7 group hover:border-brand-teal/15 hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-teal/8 flex items-center justify-center">
                    <article.icon size={16} className="text-brand-jade" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-medium text-brand-jade tracking-wide uppercase">{article.category}</span>
                </div>
                <h3 className="font-semibold text-foreground text-[15px] leading-snug">{article.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-[1.7]">{article.excerpt}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center bg-surface rounded-2xl p-10 border border-border">
            <BookOpen size={32} className="text-brand-jade/40 mx-auto mb-4" strokeWidth={1.2} />
            <p className="text-muted-foreground text-[15px]">
              更多護理文章正在準備中，敬請期待。如需了解更多資訊，歡迎直接聯繫我們。
            </p>
            <Link
              to="/contact-us"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-brand-jade text-white font-medium rounded-full hover:bg-brand-teal transition-all duration-300 text-sm"
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
