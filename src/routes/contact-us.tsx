import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import { useState } from "react";

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
      <PageHero title="聯繫我們" subtitle="開始您的產後護理旅程" />

      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">預約諮詢</h2>
              <p className="mt-2 text-muted-foreground">填寫以下表單，我們會盡快與您聯繫。</p>

              {submitted ? (
                <div className="mt-8 bg-accent rounded-xl p-8 text-center">
                  <span className="text-4xl">✅</span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">感謝您的諮詢！</h3>
                  <p className="mt-2 text-muted-foreground">我們會盡快與您聯繫。</p>
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
                      className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
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
                      className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">電話</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
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
                      className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="請描述您的需求，例如預產期、需要的服務類型等..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3.5 bg-primary-dark text-primary-foreground font-semibold rounded-lg hover:bg-secondary-dark transition-colors text-sm"
                  >
                    提交諮詢
                  </button>
                </form>
              )}
            </div>

            {/* Info side */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground">服務資訊</h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  安馨寶貝是溫哥華合法註冊的專業母嬰護理機構，提供大溫地區月嫂到府、產後護理與坐月子規劃服務。
                </p>
              </div>

              <div className="bg-surface rounded-xl p-6 border border-border">
                <h3 className="font-bold text-foreground">服務區域</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  大溫哥華地區 Greater Vancouver Area<br />
                  Vancouver · Richmond · Burnaby · Coquitlam 及周邊城市<br />
                  也服務海外來加生子家庭
                </p>
              </div>

              <div className="bg-surface rounded-xl p-6 border border-border">
                <h3 className="font-bold text-foreground">服務項目</h3>
                <ul className="mt-2 text-sm text-muted-foreground space-y-1.5">
                  <li>• 月嫂到府服務</li>
                  <li>• 母嬰產後護理</li>
                  <li>• 坐月子規劃服務</li>
                  <li>• 客製化產後護理方案</li>
                </ul>
              </div>

              <div className="bg-accent rounded-xl p-6 border border-border">
                <h3 className="font-bold text-foreground">為什麼選擇安馨寶貝？</h3>
                <ul className="mt-2 text-sm text-muted-foreground space-y-1.5">
                  <li>✅ 溫哥華合法註冊</li>
                  <li>✅ 專業母嬰護理機構</li>
                  <li>✅ 經驗豐富的月嫂團隊</li>
                  <li>✅ 客製化服務方案</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
