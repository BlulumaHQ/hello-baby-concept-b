import { Link } from "@tanstack/react-router";

export default function StickyCTA() {
  return (
    <>
      {/* Desktop: fixed right-side button */}
      <div className="hidden md:block fixed right-6 top-1/2 -translate-y-1/2 z-40">
        <Link
          to="/contact-us"
          className="flex items-center gap-2 bg-primary-dark text-primary-foreground px-4 py-3 rounded-xl shadow-lg hover:bg-secondary-dark transition-colors text-sm font-semibold writing-vertical-rl"
          style={{ writingMode: "vertical-rl" }}
        >
          立即諮詢 →
        </Link>
      </div>

      {/* Mobile: sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-primary-dark/95 backdrop-blur-md p-3 border-t border-primary-dark">
        <Link
          to="/contact-us"
          className="block w-full text-center bg-secondary-dark text-secondary-foreground py-3 rounded-lg font-semibold text-sm hover:bg-secondary transition-colors"
        >
          立即預約諮詢 — 開始您的產後護理旅程
        </Link>
      </div>
    </>
  );
}
