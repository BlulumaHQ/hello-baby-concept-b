import { createFileRoute, Link } from "@tanstack/react-router";
import { Radio, Video, Newspaper, ArrowRight, Play } from "lucide-react";
import brandStoryImg from "@/assets/brand-story.webp";
import SectionCTA from "@/components/SectionCTA";

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
      {/* Hero */}
      <section className="relative pt-[88px] min-h-[420px] md:min-h-[500px] flex items-center bg-surface">
        <div className="container-site py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">品牌故事</p>
              <h1 className="text-3xl md:text-5xl font-semibold text-foreground tracking-tight leading-tight">
                從「擔憂」到「安馨」<br />重新定義月子服務
              </h1>
              <p className="mt-6 text-muted-foreground leading-[1.8]">
                安馨寶貝，讓您的育兒旅程，從最安心的選擇開始。
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={brandStoryImg}
                alt="安馨寶貝"
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="section-padding bg-background">
        <div className="container-site max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">我們的使命</h2>
          <p className="mt-6 text-muted-foreground leading-[1.8]">
            坐月子，您最擔心的不只是身體的累，而是「託付錯人」的不安。
          </p>
          <p className="mt-4 text-muted-foreground leading-[1.8]">
            尋找月嫂往往像是一場賭注——擔心人員素質參差不齊？擔憂非正規機構缺乏保障？初為人母的焦慮，加上異鄉的無助感，讓原本該是休養的月子時光，充滿了不確定性。我們懂這種心情，因為我們深知：「安全感」，才是產後媽媽最奢侈的需求。
          </p>

          <h3 className="mt-10 text-xl font-semibold text-foreground">安馨寶貝 — 溫哥華合法註冊的守護者</h3>
          <p className="mt-4 text-muted-foreground leading-[1.8]">
            我們存在的意義，就是為了消除這份不安。不同於一般的仲介或個人接案，安馨寶貝是當地合法正規註冊的專業母嬰護理機構。我們以醫療級的嚴謹標準篩選每一位護理人員，以家人般的溫暖提供到府服務。從孕期的密切諮詢、分娩時的時刻守候，到產後的身心療癒，我們不僅是月嫂，更是您在加拿大最堅實的娘家。
          </p>

          <h3 className="mt-10 text-xl font-semibold text-foreground">懂妳的辛苦，更要成就妳的幸福</h3>
          <p className="mt-4 text-muted-foreground leading-[1.8]">
            我們承諾的不僅是「幫忙帶孩子」，而是通過科學的調理與專業的陪伴，讓您吃好、睡好、身心愉悅。把繁瑣與疲憊交給我們，您只需專注於享受成為母親的喜悅。
          </p>
          <p className="mt-4 text-foreground font-medium leading-[1.8]">
            安馨寶貝，讓您的育兒旅程，從最安心的選擇開始。
          </p>
        </div>
      </section>

      {/* Media Features */}
      <section className="section-padding bg-surface">
        <div className="container-site">
          <div className="text-center mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">AS SEEN ON</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">媒體資訊</h2>
          </div>

          {/* 96.1 FM */}
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted">
                  <Radio size={20} className="text-brand-jade" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">96.1 FM 廣播專訪</h3>
                  <p className="text-xs text-muted-foreground">Image/Audio courtesy of @96.1 FM</p>
                </div>
              </div>
              <audio controls className="w-full" preload="none">
                <source src="https://www.careforhealth.life/wp-content/uploads/2025/05/961-interview-final-1.mp3" type="audio/mpeg" />
              </audio>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <img
                  src="https://www.careforhealth.life/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-02-at-10.09.14_24de8746.jpg"
                  alt="96.1 FM 訪談照片"
                  className="rounded-xl w-full h-auto object-cover"
                  loading="lazy"
                />
                <img
                  src="https://www.careforhealth.life/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-02-at-10.09.14_044e7032.jpg"
                  alt="96.1 FM 訪談照片"
                  className="rounded-xl w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* SayMyPiece */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted">
                  <Video size={20} className="text-brand-jade" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">SayMyPiece 職人說專訪</h3>
                  <p className="text-xs text-muted-foreground">溫哥華也有月嫂？！好的月嫂怎麼挑？</p>
                </div>
              </div>
              <a
                href="https://www.youtube.com/watch?v=0gfKvQCfoSQ&t=34s"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-xl overflow-hidden group"
              >
                <img
                  src="https://www.careforhealth.life/wp-content/uploads/2023/06/hqdefault-2.jpg"
                  alt="SayMyPiece 職人說訪談"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center group-hover:bg-foreground/30 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-primary-foreground/90 flex items-center justify-center">
                    <Play size={24} className="text-foreground ml-1" />
                  </div>
                </div>
              </a>
            </div>

            {/* SingTao */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted">
                  <Newspaper size={20} className="text-brand-jade" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">星島日報報導</h3>
                  <p className="text-xs text-muted-foreground">Image courtesy of @SingTao</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img
                  src="https://www.careforhealth.life/wp-content/uploads/2023/10/STHV20231028A22_001.png"
                  alt="星島日報報導"
                  className="rounded-xl w-full h-auto object-cover"
                  loading="lazy"
                />
                <img
                  src="https://www.careforhealth.life/wp-content/uploads/2023/10/STHV20231028A22_002.png"
                  alt="星島日報報導"
                  className="rounded-xl w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-site max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">我們的理念</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "專業", desc: "每位月嫂都經過嚴格的專業訓練，確保提供最高品質的母嬰護理。" },
              { title: "溫馨", desc: "以家人般的溫暖態度，讓每位媽媽感受到被呵護的幸福。" },
              { title: "客製化", desc: "理解每個家庭的獨特需求，量身打造最適合的護理方案。" },
              { title: "信賴", desc: "溫哥華合法註冊，值得每個家庭信賴的專業機構。" },
            ].map((v) => (
              <div key={v.title} className="bg-card rounded-2xl p-7 border border-border">
                <h3 className="font-semibold text-foreground">{v.title}</h3>
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
