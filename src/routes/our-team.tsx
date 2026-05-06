import { createFileRoute, Link } from "@tanstack/react-router";
import caregivingTeam from "@/assets/caregiving-team.webp";
import { ShieldCheck, Award, GraduationCap, Heart, ArrowRight, Send } from "lucide-react";
import { useState } from "react";
import SectionCTA from "@/components/SectionCTA";

export const Route = createFileRoute("/our-team")({
  head: () => ({
    meta: [
      { title: "團隊介紹 | 安馨寶貝" },
      { name: "description", content: "認識安馨寶貝的專業月嫂團隊，每位成員都經過嚴格篩選與培訓，致力於提供最優質的母嬰護理服務。" },
      { property: "og:title", content: "團隊介紹 | 安馨寶貝" },
      { property: "og:description", content: "認識安馨寶貝的專業月嫂團隊。" },
    ],
  }),
  component: OurTeam,
});

const teamMembers = [
  { name: "Meya", photo: "https://www.careforhealth.life/wp-content/uploads/2025/08/15-Meya.png" },
  { name: "Heather", photo: "https://www.careforhealth.life/wp-content/uploads/2025/08/1-Heather.png" },
  { name: "Belle", photo: "https://www.careforhealth.life/wp-content/uploads/2025/08/2-Belle.png" },
  { name: "Emmy", photo: "https://www.careforhealth.life/wp-content/uploads/2025/08/3-Emmy-NEW.png" },
  { name: "Athena", photo: "https://www.careforhealth.life/wp-content/uploads/2025/08/4-Athena.png" },
  { name: "Sharon", photo: "https://www.careforhealth.life/wp-content/uploads/2025/08/5-Sharon.png" },
  { name: "Elaine", photo: "https://www.careforhealth.life/wp-content/uploads/2025/08/6-Elaine.png" },
  { name: "Peggy", photo: "https://www.careforhealth.life/wp-content/uploads/2025/08/7-Peggy.png" },
  { name: "June", photo: "https://www.careforhealth.life/wp-content/uploads/2025/08/8-June-NEW.png" },
  { name: "Iris", photo: "https://www.careforhealth.life/wp-content/uploads/2025/08/9-Iris.png" },
  { name: "Regina", photo: "https://www.careforhealth.life/wp-content/uploads/2025/08/10-Regina.png" },
  { name: "Linda", photo: "https://www.careforhealth.life/wp-content/uploads/2025/08/11-Linda-NEW.png" },
  { name: "Meggie", photo: "https://www.careforhealth.life/wp-content/uploads/2025/08/12-Meggie.png" },
  { name: "Joyce", photo: "https://www.careforhealth.life/wp-content/uploads/2025/08/13-Joyce.png" },
  { name: "Tiffany", photo: "https://www.careforhealth.life/wp-content/uploads/2025/08/14-Tiffany.png" },
];

function OurTeam() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-[88px] min-h-[420px] md:min-h-[500px] flex items-center bg-surface">
        <div className="container-site py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="brand-line mb-5" />
              <h1 className="text-3xl md:text-5xl font-semibold text-foreground tracking-tight leading-tight">
                不只是月嫂<br />更是您最專業的<br />產後守護隊
              </h1>
              <p className="mt-6 text-muted-foreground leading-[1.8] max-w-md text-[15px]">
                我們深知，將新生兒與產後脆弱的自己交給陌生人，需要多大的勇氣。
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
              <img
                src={caregivingTeam}
                alt="安馨寶貝團隊合照"
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="section-padding bg-background">
        <div className="container-site max-w-3xl mx-auto text-center">
          <div className="brand-line-center mb-5" />
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">以嚴苛標準，定義極致安心</h2>
          <p className="mt-6 text-muted-foreground leading-[1.8] text-[15px]">
            在尋找月嫂的過程中，您是否擔心人員的專業度不足？害怕遇到溝通不良、甚至缺乏責任感的照護者？這種對「未知」的焦慮，往往比身體的疲憊更讓人心力交瘁。您需要的，不僅是一雙幫忙的手，更是一份能讓您完全卸下心防的「安全感」。
          </p>
          <p className="mt-4 text-muted-foreground leading-[1.8] text-[15px]">
            為了消除您的擔憂，我們建立了一支與眾不同的護理團隊。每一位成員不僅擁有豐富的實務經驗，更通過了我們嚴格的專業篩選與培訓機制。我們是溫哥華合法註冊的正規軍，以醫療級的嚴謹態度，結合對母嬰的深切關懷，確保每一次的服務都達到最高標準。
          </p>
          <p className="mt-4 text-foreground font-medium leading-[1.8]">
            專業是我們的底氣，溫暖是我們的承諾。
          </p>
        </div>
      </section>

      {/* Team Standards */}
      <section className="section-padding bg-card">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "嚴格篩選", desc: "所有照護人員通過履歷審核、面試、專業能力評估、健康檢查與背景查核" },
              { icon: GraduationCap, title: "系統化培訓", desc: "優先挑選具備醫護背景、早教或幼教相關經驗的人員" },
              { icon: Award, title: "專業認證", desc: "定期參加專業培訓，掌握最新護理知識與技術" },
              { icon: Heart, title: "溫暖陪伴", desc: "以家人般的溫暖提供服務，呵護媽媽身心健康" },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-teal/8 mb-5">
                  <item.icon size={24} className="text-brand-jade" strokeWidth={1.4} />
                </div>
                <h3 className="font-semibold text-foreground text-[15px]">{item.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="text-center mb-14">
            <div className="brand-line-center mb-5" />
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">安馨寶貝護理團隊</h2>
            <p className="mt-3 text-muted-foreground text-[15px]">選擇安馨寶貝，就是選擇了一個經過層層把關、值得信賴的專業後盾</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-7">
            {teamMembers.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="rounded-2xl overflow-hidden bg-muted shadow-sm">
                  <img
                    src={member.photo}
                    alt={`${member.name} - 安馨寶貝月嫂`}
                    className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-foreground">{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team — Recruitment Form */}
      <section className="section-padding bg-surface">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <div className="brand-line mb-5" />
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">加入我們的團隊</h2>
              <p className="mt-5 text-muted-foreground leading-[1.8] text-[15px]">
                如果您對母嬰護理充滿熱忱，擁有專業的照護經驗，歡迎加入安馨寶貝的護理團隊。我們正在尋找有愛心、有耐心、專業負責的照護人員。
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "具備母嬰護理、醫護或早教相關經驗",
                  "持有合法工作身份",
                  "能流利使用中文與英文溝通",
                  "富有愛心與責任感",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-jade" />
                    </div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <RecruitmentForm />
          </div>
        </div>
      </section>

      <SectionCTA title="讓我們用專業守護您的產後時光" buttonText="預約諮詢" />
    </>
  );
}

function RecruitmentForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-card rounded-2xl border border-border p-8 flex flex-col items-center justify-center text-center">
        <div className="w-14 h-14 rounded-full bg-brand-teal/10 flex items-center justify-center mb-5">
          <Heart size={24} className="text-brand-jade" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">感謝您的申請！</h3>
        <p className="mt-2 text-sm text-muted-foreground">我們已收到您的資訊，將盡快與您聯繫。</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="bg-card rounded-2xl border border-border p-8 space-y-5"
    >
      <h3 className="font-semibold text-foreground text-lg mb-2">照護人員申請表</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">姓名 *</label>
          <input type="text" required className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal/40 transition" />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">電話 *</label>
          <input type="tel" required className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal/40 transition" />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-muted-foreground mb-1.5">電子郵件 *</label>
        <input type="email" required className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal/40 transition" />
      </div>

      <div>
        <label className="block text-xs font-medium text-muted-foreground mb-1.5">護理經驗 *</label>
        <select required className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal/40 transition">
          <option value="">請選擇</option>
          <option value="1-3">1-3 年</option>
          <option value="3-5">3-5 年</option>
          <option value="5-10">5-10 年</option>
          <option value="10+">10 年以上</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-muted-foreground mb-1.5">語言能力</label>
        <input type="text" placeholder="例：中文、英文、粵語" className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal/40 transition" />
      </div>

      <div>
        <label className="block text-xs font-medium text-muted-foreground mb-1.5">自我介紹</label>
        <textarea rows={3} placeholder="請簡述您的護理經驗與專業特長..." className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal/40 transition resize-none" />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-jade text-white font-medium rounded-full hover:bg-brand-teal transition-all duration-300 text-sm"
      >
        <Send size={15} />
        提交申請
      </button>
    </form>
  );
}
