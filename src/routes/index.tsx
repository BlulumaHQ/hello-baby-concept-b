import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Home, Baby, Heart, Star, Clock, Moon, Users, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import serviceNewborn from "@/assets/service-newborn-care.jpg";
import serviceMeal from "@/assets/service-meal.jpg";
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

const reviews = [
  {
    name: "Patrick",
    date: "2026年2月",
    text: "It is such a pleasure to have Iris helping us with looking after our son. She is responsible and compassionate in providing exceptional care. She is good in interacting with infant and guiding infant in reaching developmental milestones.",
  },
  {
    name: "Michelle Baybe",
    date: "2025年9月",
    text: "I feel so lucky to have Heather as my postpartum nanny! As a first-time mother, I was always worried about doing things wrong and was easily nervous. But with Heather, I felt completely at ease. She was so patient with my baby.",
  },
  {
    name: "Luis Francisco",
    date: "2025年8月",
    text: "Hello Baby was such a huge help during the first month of our baby's life. As a first time dad, I had no clue how to give our baby a bath, when was the right time to feed, or even how to keep track of everything.",
  },
  {
    name: "Karen Poon",
    date: "2025年8月",
    text: "With zero experience raising babies, I was fortunate to have confinement nanny Heather by my side. Heather is a walking encyclopedia of parenting. And she's such a great cook!",
  },
  {
    name: "zq ding",
    date: "2026年1月",
    text: "Their customer service representative, Meya, was professional and patient. Our nanny, Emmy, was extremely gentle, patient, and professional with both mother and baby.",
  },
  {
    name: "T T",
    date: "2025年8月",
    text: "Highly recommended! Meya is very professional and willing to communicate with you for your needs then find the best match of postpartum doula for your most important life period.",
  },
];

function Index() {
  return (
    <>
      {/* Hero — cinematic editorial */}
      <section className="relative min-h-screen flex items-end md:items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
        <div className="relative z-10 container-site pb-24 pt-40 md:py-40">
          <div className="max-w-xl">
            <div className="brand-line mb-6 opacity-80" />
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/60 mb-4">
              溫哥華合法註冊 · 專業母嬰護理
            </p>
            <h1 className="text-[44px] md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
              安馨寶貝
            </h1>
            <p className="mt-2 text-xl md:text-2xl font-light text-white/80 tracking-[0.08em]">
              Hello Baby
            </p>
            <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed max-w-md">
              月嫂到府服務 · 母嬰產後護理<br />
              讓您安心享受成為母親的喜悅
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-jade text-white font-medium rounded-full hover:bg-brand-teal transition-all duration-300 text-sm shadow-lg"
              >
                預約免費諮詢
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/our-services"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/25 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 text-sm backdrop-blur-sm"
              >
                了解服務方案
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Trust Intro */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <div className="brand-line-center mb-6" />
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground leading-snug tracking-tight">
              從「擔憂」到「安馨」<br className="hidden md:block" />重新定義月子服務
            </h2>
            <p className="mt-8 text-muted-foreground leading-[1.9] text-[15px]">
              坐月子，您最擔心的不只是身體的累，而是「託付錯人」的不安。尋找月嫂往往像是一場賭注——擔心人員素質參差不齊？擔憂非正規機構缺乏保障？初為人母的焦慮，加上異鄉的無助感，讓原本該是休養的月子時光，充滿了不確定性。
            </p>
            <p className="mt-4 text-muted-foreground leading-[1.9] text-[15px]">
              我們懂這種心情，因為我們深知：<strong className="text-foreground font-semibold">「安全感」，才是產後媽媽最奢侈的需求。</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Why Trust Us — refined cards with jade accents */}
      <section className="section-padding bg-card">
        <div className="container-site">
          <div className="text-center mb-16">
            <div className="brand-line-center mb-5" />
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">為什麼家庭選擇安馨寶貝？</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "合法註冊", desc: "溫哥華合法註冊的專業母嬰護理機構，所有人員通過背景查核" },
              { icon: Users, title: "專業團隊", desc: "嚴格篩選具備醫護背景、早教經驗的專業照護人員" },
              { icon: Home, title: "到府服務", desc: "在您最熟悉舒適的居家環境中享受專業護理照護" },
              { icon: Heart, title: "用心陪伴", desc: "不僅照顧寶寶，更懂得細膩呵護媽媽的心理變化" },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-teal/8 mb-5 group-hover:bg-brand-teal/14 transition-colors duration-300">
                  <item.icon size={24} className="text-brand-jade" strokeWidth={1.4} />
                </div>
                <h3 className="font-semibold text-foreground text-[15px]">{item.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — editorial layout with images */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="text-center mb-16">
            <div className="brand-line-center mb-5" />
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">全方位母嬰護理服務</h2>
            <p className="mt-3 text-muted-foreground text-[15px]">專業、溫暖、全面的產後照護方案</p>
          </div>

          {/* Featured services with images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="group rounded-2xl overflow-hidden border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={serviceNewborn} alt="新生兒照護" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="p-7">
                <h3 className="font-semibold text-foreground text-lg">月嫂到府 & 新生兒照護</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-[1.7]">
                  專業月嫂直接到府照護，提供日間與夜間新生兒護理，手把手指導新手父母學習照顧寶寶的日常護理技巧。
                </p>
              </div>
            </div>
            <div className="group rounded-2xl overflow-hidden border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={serviceMeal} alt="產後膳食調理" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="p-7">
                <h3 className="font-semibold text-foreground text-lg">產後膳食調理</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-[1.7]">
                  量身訂製月子餐，結合中華傳統智慧與現代營養學，為產後媽媽提供最適合的營養補給方案。
                </p>
              </div>
            </div>
          </div>

          {/* Secondary services */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: Moon, title: "夜間照護", desc: "充分回應新生兒需求，幫助父母獲得完整睡眠" },
              { icon: Baby, title: "專業育兒指導", desc: "科學化育兒方法，建立寶寶良好作息習慣" },
              { icon: Users, title: "DIY 海外生子支援", desc: "為海外來加生子家庭提供全程支持" },
            ].map((s) => (
              <div key={s.title} className="bg-card rounded-xl p-6 border border-border group hover:border-brand-teal/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-teal/8 mb-4 group-hover:bg-brand-teal/14 transition-colors">
                  <s.icon size={18} className="text-brand-jade" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/our-services"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-jade hover:text-brand-teal transition-colors"
            >
              查看完整服務方案
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Google Reviews — single refined section */}
      <section className="section-padding bg-surface">
        <div className="container-site">
          <div className="text-center mb-14">
            <div className="brand-line-center mb-5" />
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">家庭們怎麼說</h2>
            <div className="mt-5 flex items-center justify-center gap-3">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={18} className="text-brand-gold fill-brand-gold" />
                ))}
              </div>
              <span className="text-lg font-semibold text-foreground">5.0</span>
              <span className="text-sm text-muted-foreground">· Google 評價</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-card rounded-xl p-7 border border-border hover:border-brand-teal/15 hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300">
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} size={13} className="text-brand-gold fill-brand-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-[1.75] line-clamp-4">
                  "{review.text}"
                </p>
                <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{review.name}</span>
                  <span className="text-xs text-muted-foreground/70">{review.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJkRKIJAB1hlQR6h8qVkqhLBo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-brand-jade hover:text-brand-teal font-medium transition-colors"
            >
              在 Google 上查看所有評論 →
            </a>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="brand-line mb-5" />
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight leading-snug">
                不只是月嫂<br />更是您最專業的產後守護隊
              </h2>
              <p className="mt-6 text-muted-foreground leading-[1.8] text-[15px]">
                每一位成員不僅擁有豐富的實務經驗，更通過了我們嚴格的專業篩選與培訓機制。我們是溫哥華合法註冊的正規軍，以醫療級的嚴謹態度，結合對母嬰的深切關懷。
              </p>
              <Link
                to="/our-team"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-jade hover:text-brand-teal transition-colors"
              >
                認識我們的團隊
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
              <img
                src="https://www.careforhealth.life/wp-content/uploads/2025/12/hellobabycare-team-scaled.png"
                alt="安馨寶貝團隊"
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Preview */}
      <section className="section-padding bg-surface">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
              <img
                src="https://www.careforhealth.life/wp-content/uploads/2025/12/hellobabycare-scaled.png"
                alt="安馨寶貝品牌故事"
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="brand-line mb-5" />
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight leading-snug">
                用愛守護每一個新生命
              </h2>
              <p className="mt-6 text-muted-foreground leading-[1.8] text-[15px]">
                安馨寶貝存在的意義，就是為了消除產後媽媽心中的不安。不同於一般的仲介或個人接案，我們是當地合法正規註冊的專業母嬰護理機構，以醫療級的嚴謹標準篩選每一位護理人員。
              </p>
              <p className="mt-3 text-muted-foreground leading-[1.8] text-[15px]">
                從孕期的密切諮詢、分娩時的時刻守候，到產後的身心療癒，我們不僅是月嫂，更是您在加拿大最堅實的娘家。
              </p>
              <Link
                to="/brand-story"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-jade hover:text-brand-teal transition-colors"
              >
                了解我們的故事
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="brand-line-center mb-5" />
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">準媽媽常見疑問</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "什麼時候需要開始預約月嫂？", a: "我們建議在懷孕中期之前開始諮詢與預約，熱門檔期特別是住家月嫂通常會提前數月就滿檔。" },
                { q: "安馨寶貝和其他溫哥華月嫂公司有什麼不同？", a: "安馨寶貝專注於科學化坐月子及專業照護導向，重視人員背景、系統化培訓與家庭需求匹配，並特別理解華人家庭在海外產後的實際需要。" },
                { q: "照護人員是否有背景審查？", a: "所有照護人員皆需通過履歷審核、面試、專業能力評估、健康檢查與背景查核，確保安全與服務品質。" },
              ].map((faq, i) => (
                <div key={i} className="bg-card rounded-xl p-6 border border-border hover:border-brand-teal/15 transition-colors duration-300">
                  <h3 className="font-semibold text-foreground text-[15px]">{faq.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-[1.7]">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-jade hover:text-brand-teal transition-colors"
              >
                查看所有常見問題
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-surface">
        <div className="container-site text-center">
          <div className="brand-line-center mb-5" />
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">服務區域</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-[15px]">
            我們服務大溫哥華地區 Greater Vancouver Area 的每一個角落
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Vancouver", "Richmond", "Burnaby", "Coquitlam", "周邊城市"].map((city) => (
              <span key={city} className="px-6 py-2.5 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-brand-teal/20 transition-colors duration-300">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <SectionCTA
        title="讓安馨寶貝陪伴您安心迎接新生命"
        subtitle="我們承諾的不僅是「幫忙帶孩子」，而是通過科學的調理與專業的陪伴，讓您吃好、睡好、身心愉悅。"
        buttonText="預約免費諮詢"
      />
    </>
  );
}
