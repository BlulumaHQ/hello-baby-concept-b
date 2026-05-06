import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";
import appCss from "../styles.css?url";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StickyCTA from "../components/StickyCTA";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">找不到頁面</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          您訪問的頁面不存在或已被移動。
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary-dark px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary"
          >
            返回首頁
          </Link>
        </div>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const router = useRouter();
  useEffect(() => {
    const unsub = router.subscribe("onResolved", () => {
      window.scrollTo(0, 0);
    });
    return unsub;
  }, [router]);
  return null;
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "溫哥華月嫂推薦｜大溫合法註冊月嫂到府與產後護理｜安馨寶貝" },
      { name: "description", content: "安馨寶貝是溫哥華合法註冊的專業母嬰護理機構，提供大溫地區月嫂到府、產後護理與坐月子規劃服務，服務大溫哥華地區Greater Vancouver Area 包含 Vancouver, Richmond Burnaby, Coquitlam 及周邊城市與海外來加生子家庭，幫你安心迎接新生命." },
      { name: "author", content: "安馨寶貝" },
      { property: "og:title", content: "溫哥華月嫂推薦｜安馨寶貝" },
      { property: "og:description", content: "安馨寶貝是溫哥華合法註冊的專業母嬰護理機構，提供大溫地區月嫂到府、產後護理與坐月子規劃服務。" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <StickyCTA />
      {/* Mobile bottom bar spacing */}
      <div className="md:hidden h-16" />
    </>
  );
}
