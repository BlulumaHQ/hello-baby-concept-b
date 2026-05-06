import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "常見問題 | 安馨寶貝" },
      { name: "description", content: "安馨寶貝常見問題解答，了解月嫂到府服務、產後護理方案、預約流程等相關資訊。" },
      { property: "og:title", content: "常見問題 | 安馨寶貝" },
      { property: "og:description", content: "安馨寶貝常見問題解答。" },
    ],
  }),
  component: FAQ,
});

interface FAQCategory {
  category: string;
  items: { q: string; a: string }[];
}

const faqCategories: FAQCategory[] = [
  {
    category: "關於服務",
    items: [
      {
        q: "什麼是住家月嫂？適合哪些家庭？",
        a: "住家月嫂會24小時與家庭同住，協助新生兒照護、產後媽媽支持與生活照顧。特別適合產後需要密集照護、雙胞胎、剖腹產或無其他後援的家庭。",
      },
      {
        q: "安馨寶貝提供哪些產後照護服務？",
        a: "安馨寶貝提供大溫哥華地區的專業產後與嬰幼兒照護服務，包含住家月嫂、日間6小時／9小時多時段月嫂、夜間專業新生兒照護，以及專業育兒保姆服務，協助家庭在產後與育兒初期獲得安心支持。",
      },
      {
        q: "日間月嫂與夜間月嫂有什麼不同？",
        a: "日間月嫂主要協助白天的新生兒照護與媽媽休息、備餐及簡易家事。夜間月嫂則專注於夜奶、換尿布、哄睡等不間斷的夜間照護，充分回應新生兒的需求、建立寶寶安全感，同時幫助父母獲得完整睡眠。",
      },
    ],
  },
  {
    category: "預約與流程",
    items: [
      {
        q: "什麼時候需要開始預約月嫂？",
        a: "我們建議在懷孕中期之前開始諮詢與預約，熱門檔期特別是住家月嫂通常會提前數月就滿檔。",
      },
      {
        q: "可以先諮詢再決定嗎？",
        a: "當然可以。我們的諮詢服務會先了解您的需求與期待，再提供合適的建議與人選，進行面試，協助您安心做決定。",
      },
      {
        q: "月嫂服務預約流程？",
        a: "填寫聯繫表格留言告知想諮詢的服務內容，公司客服人員收到聯繫內容後將於七天內與您連絡，進一步了解您的需求。\n\n溝通服務需求後，客服會協助規劃推薦合適您的月子方案，並將提供現有檔期的合適月嫂基本檔案供您參考確認。\n\n了解服務內容及配對月嫂後，安排與月嫂視訊，進一步了解並溝通需求，會陪同進行三方視訊面試。\n\n面談後確認聘雇，月嫂客服提供正式合約供審閱、簽約合同、繳交訂金後建立專屬服務群組，隨時溝通並跟蹤產婦狀況。孕期提供準媽媽待產推薦清單、食材採購建議明細，迎接新生，月嫂準時上線服務。",
      },
      {
        q: "如果預產期提前或延後怎麼辦？",
        a: "安馨寶貝會根據實際生產狀況協助調整服務時間，並由客服團隊與家庭保持溝通，盡力安排最合適的支援。",
      },
    ],
  },
  {
    category: "專業與安全",
    items: [
      {
        q: "在溫哥華需要請月嫂嗎？",
        a: "對於許多在溫哥華生產的華人家庭來說，專業的月嫂不僅能在產後初期提供新生兒照護、媽媽休息與情緒支持，更能手把手指導新手父母學習照顧寶寶的日常，為接下來的育兒旅程做好準備，是一項非常實用的產後支援選擇。",
      },
      {
        q: "安馨寶貝和其他溫哥華月嫂公司有什麼不同？",
        a: "安馨寶貝專注於科學化坐月子及專業照護導向，重視人員背景、系統化培訓與家庭需求匹配，並特別理解華人家庭在海外產後的實際需要。",
      },
      {
        q: "安馨寶貝的月嫂與保姆有什麼專業背景？",
        a: "安馨寶貝團隊成員優先挑選具備醫護背景、早教或幼教相關經驗的人員，並透過系統化培訓與篩選，讓每位團隊成員都能在照顧媽媽與寶寶時提供更專業、安心的支持。",
      },
      {
        q: "照護人員是否有背景審查？",
        a: "所有照護人員皆需通過履歷審核、面試、專業能力評估、健康檢查與背景查核，確保安全與服務品質。",
      },
    ],
  },
  {
    category: "服務範圍",
    items: [
      {
        q: "安馨寶貝的服務範圍在哪裡？",
        a: "我們主要服務大溫哥華地區 Greater Vancouver Area，包含 Vancouver、Richmond、Burnaby、Coquitlam 及周邊城市。",
      },
    ],
  },
];

function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-[88px] flex items-center justify-center min-h-[280px] md:min-h-[320px] bg-surface">
        <div className="container-site text-center py-16 md:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">常見問題</p>
          <h1 className="text-3xl md:text-5xl font-semibold text-foreground tracking-tight">
            解答您的疑問
          </h1>
          <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            我們整理了準媽媽們最常詢問的問題，幫助您更了解安馨寶貝的服務
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-background">
        <div className="container-site max-w-3xl mx-auto">
          <div className="space-y-10">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-lg font-semibold text-foreground mb-5 pb-3 border-b border-border">
                  {cat.category}
                </h2>
                <div className="space-y-3">
                  {cat.items.map((faq, i) => {
                    const key = `${cat.category}-${i}`;
                    const isOpen = openItems[key];
                    return (
                      <div key={key} className="rounded-2xl border border-border overflow-hidden">
                        <button
                          onClick={() => toggleItem(key)}
                          className="w-full flex items-center justify-between px-6 py-5 text-left bg-card hover:bg-accent/50 transition-colors"
                        >
                          <span className="font-medium text-foreground pr-4 text-sm leading-relaxed">{faq.q}</span>
                          <ChevronDown
                            size={18}
                            className={`shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 py-5 bg-card border-t border-border">
                            <p className="text-sm text-muted-foreground leading-[1.8] whitespace-pre-line">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA title="還有其他問題嗎？" subtitle="我們很樂意為您解答任何關於產後護理的疑問" buttonText="聯繫我們" />
    </>
  );
}
