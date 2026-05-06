import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, Moon, Clock, Baby, Heart, Users, ArrowRight, ShieldCheck } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

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
      icon: Home,
      title: "月嫂到府服務",
      desc: "專業月嫂直接到您的家中，在您最熟悉舒適的環境中提供全方位的產後照護。從新生兒餵養、沐浴到媽媽的營養調理，讓您安心坐月子。",
    },
    {
      icon: Moon,
      title: "夜間專業新生兒照護",
      desc: "夜間月嫂專注於夜奶、換尿布、哄睡等不間斷的夜間照護，充分回應新生兒的需求，建立寶寶安全感，同時幫助父母獲得完整睡眠。",
    },
    {
      icon: Clock,
      title: "日間多時段月嫂服務",
      desc: "提供日間6小時／9小時多時段選擇，主要協助白天的新生兒照護與媽媽休息、備餐及簡易家事。",
    },
    {
      icon: Baby,
      title: "專業育兒保姆",
      desc: "手把手指導新手父母學習照顧寶寶的日常，為接下來的育兒旅程做好準備，是一項非常實用的產後支援選擇。",
    },
    {
      icon: Heart,
      title: "量身製訂月子餐 / 產後膳食調理送餐",
      desc: "根據中華傳統坐月子智慧，結合現代營養學知識，為您量身打造最適合的產後膳食調理方案。",
    },
    {
      icon: Users,
      title: "DIY 海外生子支援",
      desc: "為海外來加生子的家庭提供全面支援，從抵達溫哥華到產後恢復的全程支持與服務。",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-[88px] min-h-[320px] md:min-h-[380px] flex items-center bg-surface">
        <div className="container-site py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">服務項目</p>
            <h1 className="text-3xl md:text-5xl font-semibold text-foreground tracking-tight leading-tight">
              The New Mother<br />Postpartum Care
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">新媽媽 · 產後護理</p>
            <p className="mt-6 text-muted-foreground leading-[1.8] max-w-lg">
              生活不僅是一份禮物，也是一場實現我們夢想的旅程。產後護理是這個旅程的重要環節，它從分娩後開始，直到媽媽身體調養到懷孕前的狀態。這個期間通常持續6-8周。
            </p>
            <p className="mt-4 text-muted-foreground leading-[1.8] max-w-lg">
              安馨寶貝致力為新媽媽在產後恢復期間提供所需的支援和護理。我們以幫助媽媽們度過這個重要階段而感到自豪。
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">我們的服務</h2>
            <p className="mt-3 text-muted-foreground">全方位的母嬰產後護理服務，滿足每個家庭的需求</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-card rounded-2xl p-7 border border-border hover:shadow-md transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-muted mb-5 group-hover:bg-accent transition-colors">
                  <s.icon size={20} className="text-brand-jade" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="section-padding bg-surface">
        <div className="container-site max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Our Commitment | 承諾</h2>
              <p className="mt-4 text-muted-foreground leading-[1.8]">
                高質月嫂 — 搜尋 · 招聘 · 管理 · 培訓 · 服務
              </p>
              <p className="mt-2 text-muted-foreground leading-[1.8]">
                Individual Consultation | Planning | Placement
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Our Standard | 服務標準</h2>
              <p className="mt-4 text-muted-foreground leading-[1.8]">
                專業服務 · 護理知識 · 育兒觀念 · 客戶需求
              </p>
              <p className="mt-2 text-muted-foreground leading-[1.8]">
                Personal Touch of Care | Services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Video */}
      <section className="section-padding bg-background">
        <div className="container-site max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-6">Training | 培訓影片</h2>
          <div className="rounded-2xl overflow-hidden border border-border">
            <video
              controls
              preload="none"
              poster="https://www.careforhealth.life/wp-content/uploads/2022/02/WeChat-Image_20220203220802-1024x1024.jpg"
              className="w-full h-auto"
            >
              <source src="https://www.careforhealth.life/wp-content/uploads/2022/03/hellobabytraining2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <SectionCTA
        title="找到適合您的服務方案"
        subtitle="聯繫我們，讓專業團隊為您規劃最佳護理方案"
        buttonText="預約諮詢"
      />

      {/* Service Areas */}
      <section className="section-padding bg-surface">
        <div className="container-site text-center">
          <h2 className="text-2xl font-semibold text-foreground tracking-tight">服務區域</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            我們服務大溫哥華地區 Greater Vancouver Area，包含以下城市及周邊地區
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Vancouver", "Richmond", "Burnaby", "Coquitlam", "周邊城市", "海外來加生子家庭"].map((c) => (
              <span key={c} className="px-5 py-2.5 bg-card border border-border rounded-full text-sm font-medium text-foreground">{c}</span>
            ))}
          </div>
          <Link
            to="/contact-us"
            className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-brand-jade text-primary-foreground font-medium rounded-full hover:bg-brand-teal transition-all duration-300 text-sm"
          >
            確認您的服務區域
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
