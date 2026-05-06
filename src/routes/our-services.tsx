import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import serviceHome from "@/assets/service-in-home.webp";
import serviceNight from "@/assets/service-night-care.webp";
import serviceDay from "@/assets/service-day-care.webp";
import serviceMeal from "@/assets/service-nourishment.webp";
import serviceCoaching from "@/assets/service-parent-coaching.webp";
import serviceOverseas from "@/assets/service-overseas-support.webp";
import CareIcon from "@/components/CareIcon";
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

const services = [
  {
    icon: "home" as const,
    image: serviceHome,
    eyebrow: "01 / IN-HOME",
    title: "月嫂到府服務",
    desc: "專業月嫂直接到您的家中，在熟悉舒適的環境中提供全方位產後照護。從新生兒餵養、沐浴到媽媽的營養調理，讓家重新變得有秩序。",
    details: ["居家新生兒照護", "媽媽休息與日常支援", "家庭節奏建立"],
  },
  {
    icon: "night" as const,
    image: serviceNight,
    eyebrow: "02 / OVERNIGHT",
    title: "夜間專業新生兒照護",
    desc: "夜間月嫂專注於夜奶、換尿布、哄睡與觀察，充分回應新生兒需求，同時幫助父母獲得完整睡眠。",
    details: ["夜奶與拍嗝", "哄睡與作息觀察", "讓媽媽連續休息"],
  },
  {
    icon: "sleep" as const,
    image: serviceDay,
    eyebrow: "03 / DAYTIME",
    title: "日間多時段月嫂服務",
    desc: "提供日間6小時／9小時多時段選擇，協助白天的新生兒照護、媽媽休息、備餐及簡易家事。",
    details: ["6小時／9小時選擇", "白天照護銜接", "日常家務支援"],
  },
  {
    icon: "feeding" as const,
    image: serviceCoaching,
    eyebrow: "04 / COACHING",
    title: "專業育兒保姆",
    desc: "手把手指導新手父母學習照顧寶寶的日常，包含餵養、拍嗝、沐浴、換尿布與安撫方式。",
    details: ["新手父母指導", "餵養與安撫", "育兒信心建立"],
  },
  {
    icon: "meal" as const,
    image: serviceMeal,
    eyebrow: "05 / NOURISHMENT",
    title: "月子餐與產後膳食調理",
    desc: "根據中華傳統坐月子智慧，結合現代營養學知識，量身打造產後膳食調理方案。",
    details: ["傳統月子智慧", "現代營養搭配", "恢復與泌乳支持"],
  },
  {
    icon: "arrival" as const,
    image: serviceOverseas,
    eyebrow: "06 / VANCOUVER",
    title: "DIY 海外生子支援",
    desc: "為海外來加生子的家庭提供全面支援，從抵達溫哥華到產後恢復，讓陌生城市也能有熟悉的照護感。",
    details: ["抵達後生活支援", "產後照護安排", "大溫華人家庭熟悉流程"],
  },
];

function OurServices() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] text-primary-foreground md:pt-[148px]">
        <div className="container-site pb-20 pt-10 md:pb-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="editorial-label">Services / 母嬰產後護理</p>
              <h1 className="mt-6 text-[42px] font-black leading-[1.05] md:text-[76px] lg:text-[92px]">
                不是服務清單，<br />是產後家庭的恢復系統。
              </h1>
            </div>
            <div className="lg:col-span-5 lg:border-l lg:border-primary-foreground/18 lg:pl-10">
              <p className="text-[16px] leading-[1.95] text-primary-foreground/72">
                產後護理從分娩後開始，通常持續6–8周。安馨寶貝為新媽媽在恢復期間提供所需的支援和護理，讓每個照護場景都能被專業承接。
              </p>
            </div>
          </div>
        </div>
        <div className="editorial-hairline" />
      </section>

      <section className="bg-background py-20 md:py-32">
        <div className="container-site">
          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => (
              <article key={service.title} className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                <div className={`lg:col-span-7 ${index % 2 ? "lg:order-2" : ""}`}>
                <div className="relative">
                    <div className={`absolute top-8 h-full w-full rounded-2xl border border-brand-jade/25 ${index % 2 ? "-left-8" : "left-8"}`} />
                    <img
                      src={service.image}
                      alt={service.title}
                      width={1280}
                      height={1536}
                      loading="lazy"
                      className="relative aspect-[4/3] w-full rounded-2xl object-cover image-lift"
                    />
                    <div className={`absolute bottom-6 ${index % 2 ? "left-6" : "right-6"} hidden rounded-xl bg-primary px-5 py-4 text-primary-foreground shadow-xl md:block`}>
                      <CareIcon name={service.icon} className="h-10 w-10 text-brand-jade" />
                    </div>
                  </div>
                </div>
                <div className={`lg:col-span-5 ${index % 2 ? "lg:order-1" : ""}`}>
                  <div className={`max-w-lg ${index % 2 ? "lg:pr-12" : "lg:pl-12"}`}>
                    <p className="editorial-label">{service.eyebrow}</p>
                    <CareIcon name={service.icon} className="mt-8 h-14 w-14 text-brand-jade md:hidden" />
                    <h2 className="mt-7 text-3xl font-bold leading-tight text-foreground md:text-5xl">{service.title}</h2>
                    <p className="mt-6 text-[15px] leading-[1.95] text-muted-foreground">{service.desc}</p>
                    <div className="mt-8 grid gap-3 border-t border-border pt-6">
                      {service.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-3 text-sm font-semibold text-foreground">
                          <CheckCircle2 size={18} className="text-brand-jade" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="editorial-label">Our standard</p>
              <h2 className="mt-5 text-4xl font-bold leading-tight text-foreground md:text-5xl">承諾不是口號，而是篩選、培訓、管理與回應。</h2>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
                {[
                  ["高質月嫂", "搜尋 · 招聘 · 管理 · 培訓 · 服務"],
                  ["個別諮詢", "Individual Consultation · Planning · Placement"],
                  ["服務標準", "專業服務 · 護理知識 · 育兒觀念"],
                  ["Personal Touch", "以家庭需求為核心的細膩照護"],
                ].map(([title, text]) => (
                  <div key={title} className="bg-card p-8 md:p-10 flex flex-col justify-center min-h-[160px]">
                    <h3 className="text-xl font-bold text-foreground">{title}</h3>
                    <p className="mt-4 text-[15px] leading-[1.85] text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
              <Link to="/contact-us" className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-brand-jade hover:text-primary-dark">
                確認適合您的服務方案
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <video
                controls
                preload="none"
                poster="https://www.careforhealth.life/wp-content/uploads/2022/02/WeChat-Image_20220203220802-1024x1024.jpg"
                className="aspect-video w-full rounded-2xl object-cover image-lift"
              >
                <source src="https://www.careforhealth.life/wp-content/uploads/2022/03/hellobabytraining2.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="lg:col-span-5">
              <p className="editorial-label">Training</p>
              <h2 className="mt-5 text-4xl font-bold leading-tight text-foreground">培訓讓溫柔有標準。</h2>
              <p className="mt-6 text-[15px] leading-[1.9] text-muted-foreground">專業照護不是單靠經驗，而是透過持續訓練、觀念更新與服務管理，讓每一次到府都更穩定可靠。</p>
            </div>
          </div>
        </div>
      </section>

      <SectionCTA
        title="找到適合您家庭節奏的照護方式"
        subtitle="聯繫我們，讓專業團隊為您規劃最佳護理方案。"
        buttonText="預約諮詢"
      />
    </>
  );
}
