import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, ArrowRight, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "聯繫我們 | 安馨寶貝" },
      { name: "description", content: "聯繫安馨寶貝，預約溫哥華專業月嫂到府服務與產後護理諮詢。" },
      { property: "og:title", content: "聯繫我們 | 安馨寶貝" },
      { property: "og:description", content: "聯繫安馨寶貝，預約專業月嫂到府服務與產後護理諮詢。" },
    ],
  }),
  component: ContactUs,
});

function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-[88px] flex items-center justify-center min-h-[280px] bg-surface">
        <div className="container-site text-center py-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">聯繫我們</p>
          <h1 className="text-3xl md:text-5xl font-semibold text-foreground tracking-tight">
            開始您的產後護理旅程
          </h1>
          <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
            填寫以下表單或直接與我們聯繫，讓我們為您安排最適合的護理方案
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div>
              <h2 className="text-xl font-semibold text-foreground">預約諮詢</h2>
              <p className="mt-2 text-sm text-muted-foreground">填寫以下表單，我們會盡快與您聯繫。</p>

              {submitted ? (
                <div className="mt-8 bg-muted rounded-2xl p-10 text-center">
                  <CheckCircle2 size={40} className="text-brand-jade mx-auto" strokeWidth={1.5} />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">感謝您的諮詢！</h3>
                  <p className="mt-2 text-sm text-muted-foreground">我們的團隊會在七天內與您聯繫。</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">姓名</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      placeholder="您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">電子信箱</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">電話</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                      placeholder="您的聯繫電話"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">留言</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-shadow"
                      placeholder="請描述您的需求，例如預產期、需要的服務類型等..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-jade text-primary-foreground font-medium rounded-full hover:bg-brand-teal transition-all duration-300 text-sm"
                  >
                    提交諮詢
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground">服務資訊</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  安馨寶貝是溫哥華合法註冊的專業母嬰護理機構，提供大溫地區月嫂到府、產後護理與坐月子規劃服務。
                </p>
              </div>

              <div className="bg-muted rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-jade shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">服務區域</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      大溫哥華地區 Greater Vancouver Area<br />
                      Vancouver · Richmond · Burnaby · Coquitlam 及周邊城市<br />
                      也服務海外來加生子家庭
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-2xl p-6">
                <h3 className="font-semibold text-foreground text-sm mb-3">服務項目</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {[
                    "月嫂到府服務",
                    "夜間專業新生兒照護",
                    "日間多時段月嫂服務",
                    "專業育兒保姆",
                    "量身製訂月子餐",
                    "產後膳食調理送餐",
                    "紮肚師到府服務",
                  ].map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-brand-jade shrink-0" strokeWidth={1.5} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-accent rounded-2xl p-6">
                <h3 className="font-semibold text-foreground text-sm mb-3">為什麼選擇安馨寶貝？</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {[
                    "溫哥華合法註冊",
                    "專業母嬰護理機構",
                    "嚴格背景審查與培訓",
                    "經驗豐富的月嫂團隊",
                    "客製化服務方案",
                  ].map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-brand-jade shrink-0" strokeWidth={1.5} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
