import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import SectionCTA from "@/components/SectionCTA";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "常見問題 | 安馨寶貝" },
      { name: "description", content: "安馨寶貝常見問題解答，了解月嫂到府服務、產後護理方案等相關資訊。" },
      { property: "og:title", content: "常見問題 | 安馨寶貝" },
      { property: "og:description", content: "安馨寶貝常見問題解答。" },
    ],
  }),
  component: FAQ,
});

const faqs = [
  {
    q: "安馨寶貝提供哪些服務？",
    a: "我們提供月嫂到府服務、母嬰產後護理、坐月子規劃服務及客製化產後護理方案，全面涵蓋產後媽媽和新生兒的照護需求。",
  },
  {
    q: "服務範圍包括哪些地區？",
    a: "我們服務大溫哥華地區 Greater Vancouver Area，包含 Vancouver、Richmond、Burnaby、Coquitlam 及周邊城市。同時也為海外來加生子的家庭提供服務。",
  },
  {
    q: "安馨寶貝是合法註冊的嗎？",
    a: "是的，安馨寶貝是溫哥華合法註冊的專業母嬰護理機構，所有月嫂均經過嚴格的專業訓練。",
  },
  {
    q: "如何預約月嫂服務？",
    a: "您可以透過我們的聯繫頁面提交諮詢表單，我們的團隊會盡快與您聯繫，了解您的需求並安排最適合的月嫂。",
  },
  {
    q: "服務可以客製化嗎？",
    a: "當然可以。我們理解每個家庭的需求都是獨特的，會根據您的具體情況量身打造專屬的護理計畫。",
  },
  {
    q: "海外來加生子的家庭也可以預約嗎？",
    a: "是的，我們歡迎海外來加生子的家庭。我們有豐富的服務經驗，能為您提供從抵達溫哥華到產後恢復的全程支持。",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <PageHero title="常見問題" subtitle="解答您關於產後護理的疑問" />

      <section className="section-padding bg-background">
        <div className="container-site max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-card hover:bg-accent transition-colors"
                >
                  <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {open === i && (
                  <div className="px-6 py-5 bg-card border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA title="還有其他問題嗎？" subtitle="我們很樂意為您解答" buttonText="聯繫我們" />
    </>
  );
}
