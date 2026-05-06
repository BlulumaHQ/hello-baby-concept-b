import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-home.webp";
import serviceHome from "@/assets/service-home-care.webp";
import serviceNight from "@/assets/service-overnight.webp";
import serviceMeal from "@/assets/service-meal.webp";
import serviceCoaching from "@/assets/service-coaching.webp";
import caregivingTeam from "@/assets/caregiving-team.webp";
import CareIcon from "@/components/CareIcon";
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
  { name: "Michelle Baybe", date: "2025年9月", text: "As a first-time mother, I was always worried about doing things wrong and was easily nervous. But with Heather, I felt completely at ease." },
  { name: "Karen Poon", date: "2025年8月", text: "With zero experience raising babies, I was fortunate to have confinement nanny Heather by my side. Heather is a walking encyclopedia of parenting." },
  { name: "zq ding", date: "2026年1月", text: "Meya was professional and patient. Our nanny, Emmy, was extremely gentle, patient, and professional with both mother and baby." },
];

const supportPillars = [
  { icon: "shield" as const, title: "安全託付", text: "合法註冊、背景查核與專業篩選，讓照護從第一天就有標準。" },
  { icon: "recovery" as const, title: "媽媽恢復", text: "讓媽媽能真正休息、進食、睡眠，從疲憊中慢慢恢復身心。" },
  { icon: "sleep" as const, title: "寶寶安睡", text: "熟悉新生兒需求、夜間節奏與安撫方式，降低家庭焦慮。" },
  { icon: "home" as const, title: "居家陪伴", text: "在熟悉的家中建立安心感，讓華人家庭在溫哥華也有娘家支持。" },
];

const serviceMoments = [
  { img: serviceHome, icon: "home" as const, label: "01 / HOME", title: "月嫂到府服務", text: "照護人員進入家庭的方式，不是打擾，而是讓家重新恢復秩序。新生兒用品、媽媽休息、日常節奏，都有人細心接住。" },
  { img: serviceNight, icon: "night" as const, label: "02 / NIGHT", title: "夜間新生兒照護", text: "深夜是新手父母最需要支援的時刻。夜奶、換尿布、哄睡與觀察，交給專業人員，媽媽才有機會真正睡一覺。" },
  { img: serviceMeal, icon: "meal" as const, label: "03 / NOURISH", title: "產後膳食調理", text: "以華人坐月子的飲食智慧結合現代營養，讓每一餐都服務於恢復、泌乳與情緒穩定。" },
  { img: serviceCoaching, icon: "feeding" as const, label: "04 / LEARN", title: "育兒指導與情緒支持", text: "從餵養、拍嗝到日常觀察，月嫂不只是代勞，更陪伴父母建立照護信心。" },
];

function Index() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-primary-dark">
        <img
          src={heroBg}
          alt="中國月嫂照護新生兒，媽媽安心休息"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover object-[80%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,22,18,0.94)_0%,rgba(10,22,18,0.85)_30%,rgba(10,22,18,0.3)_55%,rgba(10,22,18,0.0)_70%)]" />
        

        <div className="relative z-10 container-site flex min-h-[100svh] items-center pb-20 pt-36 md:pt-40">
          <div className="grid w-full grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6 xl:col-span-5">
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-12 bg-brand-jade" />
                <p className="editorial-label text-brand-jade">Vancouver Postpartum Care</p>
              </div>
              <h1 className="max-w-[760px] text-[46px] font-black leading-[1.05] text-primary-foreground md:text-[76px] lg:text-[88px]">
                把寶寶交給專業，讓媽媽安心恢復。
              </h1>
              <p className="mt-8 max-w-lg text-[17px] leading-[1.9] text-primary-foreground/74 md:text-[19px]">
                安馨寶貝以華人家庭熟悉的照護方式，讓專業月嫂承接新生兒護理、夜間照護與產後支持，媽媽終於能放心休息。
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact-us" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-brand-jade px-8 text-sm font-bold text-primary-dark shadow-[0_24px_54px_rgba(114,205,89,0.28)] transition-all hover:bg-brand-teal">
                  預約免費諮詢
                  <ArrowRight size={17} />
                </Link>
                <Link to="/our-services" className="inline-flex min-h-14 items-center justify-center rounded-full border border-primary-foreground/24 px-8 text-sm font-bold text-primary-foreground backdrop-blur-md transition-all hover:bg-primary-foreground/10">
                  了解照護方案
                </Link>
              </div>
            </div>
            <div className="hidden lg:col-span-6 lg:block">
              <div className="ml-auto max-w-sm border-l border-primary-foreground/20 pl-8 text-primary-foreground/70">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-jade">The emotional core</p>
                <p className="mt-4 text-2xl font-semibold leading-snug text-primary-foreground">母親休息，是因為有人正在守護。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-20 md:py-28">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <p className="editorial-label">Not an agency list</p>
              <h2 className="mt-5 text-4xl font-bold leading-tight text-foreground md:text-5xl">不是找人代班，<br />是把最脆弱的時刻交給一個系統。</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
                {supportPillars.map((item) => (
                  <div key={item.title} className="group bg-card p-8 md:p-10">
                    <CareIcon name={item.icon} className="h-12 w-12 text-brand-jade transition-transform duration-500 group-hover:scale-110" />
                    <h3 className="mt-8 text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="mt-4 text-[15px] leading-[1.85] text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="editorial-label">Care as choreography</p>
              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">一天之中，每一個焦慮點都有人接住。</h2>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-px rounded-2xl border border-primary-foreground/14 bg-primary-foreground/14 overflow-hidden md:grid-cols-4">
                {["夜奶", "哄睡", "備餐", "沐浴", "拍嗝", "觀察", "清潔", "陪伴"].map((item) => (
                  <div key={item} className="bg-primary px-5 py-8 text-center text-lg font-semibold text-primary-foreground/88 md:py-10">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-8 max-w-2xl text-[15px] leading-[1.9] text-primary-foreground/66">
                產後照護不是一張服務清單，而是把媽媽與新生兒一天中最容易失控的片刻，重新整理成可以呼吸的節奏。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-20 md:py-32">
        <div className="container-site">
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="editorial-label">Signature services</p>
              <h2 className="mt-5 text-4xl font-bold leading-tight text-foreground md:text-6xl">服務不再像卡片，<br />而像真實家庭裡的照護片段。</h2>
            </div>
            <div className="md:col-span-5 md:border-l md:border-border md:pl-10">
              <p className="text-[15px] leading-[1.9] text-muted-foreground">每個服務都以畫面、場景與情緒建立信任：誰在照顧、媽媽如何休息、寶寶如何被保護。</p>
            </div>
          </div>

          <div className="space-y-20 md:space-y-28">
            {serviceMoments.map((service, index) => (
              <article key={service.title} className={`grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center ${index % 2 ? "" : ""}`}>
                <div className={`lg:col-span-7 ${index % 2 ? "lg:order-2" : ""}`}>
                   <div className="relative image-lift">
                    <div className={`absolute -inset-4 rounded-2xl border border-brand-jade/25 ${index % 2 ? "translate-x-5 translate-y-5" : "-translate-x-5 translate-y-5"}`} />
                    <img src={service.img} alt={service.title} width={1280} height={1536} loading="lazy" className="relative aspect-[5/4] w-full rounded-2xl object-cover" />
                  </div>
                </div>
                <div className={`lg:col-span-5 ${index % 2 ? "lg:order-1" : ""}`}>
                  <div className="max-w-md bg-background/92 py-4 lg:px-8">
                    <p className="editorial-label">{service.label}</p>
                    <CareIcon name={service.icon} className="mt-8 h-16 w-16 text-brand-jade" />
                    <h3 className="mt-8 text-3xl font-bold leading-tight text-foreground md:text-4xl">{service.title}</h3>
                    <p className="mt-6 text-[15px] leading-[1.9] text-muted-foreground">{service.text}</p>
                    <Link to="/our-services" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-brand-jade">
                      查看完整服務
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="editorial-label">Verified voices</p>
              <h2 className="mt-5 text-4xl font-bold leading-tight text-foreground md:text-5xl">信任來自被照顧過的家庭。</h2>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={18} className="fill-brand-gold text-brand-gold" />)}
                </div>
                <span className="font-bold text-foreground">5.0 Google 評價</span>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {reviews.map((review) => (
                  <figure key={review.name} className="rounded-2xl border-l-2 border-brand-jade bg-card px-7 py-8">
                    <blockquote className="text-[15px] leading-[1.85] text-muted-foreground">“{review.text}”</blockquote>
                    <figcaption className="mt-8 flex items-center justify-between border-t border-border pt-4 text-sm">
                      <span className="font-bold text-foreground">{review.name}</span>
                      <span className="text-muted-foreground/70">{review.date}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <img
                src={caregivingTeam}
                alt="安馨寶貝專業華人月嫂團隊"
                width={1280}
                height={720}
                loading="lazy"
                className="aspect-[16/10] w-full rounded-2xl object-cover image-lift"
              />
            </div>
            <div className="lg:col-span-5 lg:-ml-20">
              <div className="bg-card rounded-2xl p-8 shadow-[0_30px_80px_rgba(21,45,35,0.1)] md:p-12">
                <p className="editorial-label">Chinese caregiving team</p>
                <h2 className="mt-5 text-3xl font-bold leading-tight text-foreground md:text-5xl">文化理解，也是照護能力的一部分。</h2>
                <p className="mt-6 text-[15px] leading-[1.9] text-muted-foreground">我們理解華人家庭對月子、飲食、作息與家中長輩溝通的期待。這份理解，讓照護更自然，也更安心。</p>
                <div className="mt-8 grid gap-3">
                  {["合法註冊母嬰護理機構", "專業篩選與背景查核", "服務大溫哥華華人家庭"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-semibold text-foreground">
                      <CheckCircle2 size={18} className="text-brand-jade" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link to="/our-team" className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-brand-jade">
                  認識照護團隊
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionCTA
        title="讓安馨寶貝陪您度過最需要被照顧的月份"
        subtitle="不是把媽媽變得更堅強，而是讓她不用獨自堅強。"
        buttonText="預約免費諮詢"
      />
    </>
  );
}
