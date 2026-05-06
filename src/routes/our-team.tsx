import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Award, GraduationCap, Heart, ArrowRight } from "lucide-react";
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
      {/* Hero with team photo */}
      <section className="relative pt-[72px] min-h-[420px] md:min-h-[500px] flex items-center bg-cover bg-center bg-surface">
        <div className="container-site py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">專業團隊</p>
              <h1 className="text-3xl md:text-5xl font-semibold text-foreground tracking-tight leading-tight">
                不只是月嫂<br />更是您最專業的<br />產後守護隊
              </h1>
              <p className="mt-6 text-muted-foreground leading-[1.8] max-w-md">
                我們深知，將新生兒與產後脆弱的自己交給陌生人，需要多大的勇氣。
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://www.careforhealth.life/wp-content/uploads/2025/12/hellobabycare-team-scaled.png"
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
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">以嚴苛標準，定義極致安心</h2>
          <p className="mt-6 text-muted-foreground leading-[1.8]">
            在尋找月嫂的過程中，您是否擔心人員的專業度不足？害怕遇到溝通不良、甚至缺乏責任感的照護者？這種對「未知」的焦慮，往往比身體的疲憊更讓人心力交瘁。您需要的，不僅是一雙幫忙的手，更是一份能讓您完全卸下心防的「安全感」。
          </p>
          <p className="mt-4 text-muted-foreground leading-[1.8]">
            為了消除您的擔憂，我們建立了一支與眾不同的護理團隊。每一位成員不僅擁有豐富的實務經驗，更通過了我們嚴格的專業篩選與培訓機制。我們是溫哥華合法註冊的正規軍，以醫療級的嚴謹態度，結合對母嬰的深切關懷，確保每一次的服務都達到最高標準。我們不只照顧寶寶的生理需求，更懂得細膩呵護媽媽的心理變化。
          </p>
          <p className="mt-4 text-foreground font-medium leading-[1.8]">
            專業是我們的底氣，溫暖是我們的承諾。
          </p>
        </div>
      </section>

      {/* Team Standards */}
      <section className="section-padding bg-surface">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "嚴格篩選", desc: "所有照護人員通過履歷審核、面試、專業能力評估、健康檢查與背景查核" },
              { icon: GraduationCap, title: "系統化培訓", desc: "優先挑選具備醫護背景、早教或幼教相關經驗的人員" },
              { icon: Award, title: "專業認證", desc: "定期參加專業培訓，掌握最新護理知識與技術" },
              { icon: Heart, title: "溫暖陪伴", desc: "以家人般的溫暖提供服務，呵護媽媽身心健康" },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-7 border border-border text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-5">
                  <item.icon size={22} className="text-primary-dark" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="text-center mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">認識我們</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">安馨寶貝護理團隊</h2>
            <p className="mt-3 text-muted-foreground">選擇安馨寶貝，就是選擇了一個經過層層把關、值得信賴的專業後盾</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="rounded-2xl overflow-hidden bg-muted aspect-[3/4]">
                  <img
                    src={member.photo}
                    alt={`${member.name} - 安馨寶貝月嫂`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-foreground">{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team */}
      <section className="section-padding bg-surface">
        <div className="container-site text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">加入我們的團隊</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            如果您對母嬰護理充滿熱忱，歡迎聯繫我們了解加入安馨寶貝團隊的機會。
          </p>
          <p className="mt-6 text-muted-foreground leading-[1.8]">
            現在就將這份重責大任交給我們，安心享受與寶寶的幸福起點。
          </p>
        </div>
      </section>

      <SectionCTA title="讓我們用專業守護您的產後時光" buttonText="預約諮詢" />
    </>
  );
}
