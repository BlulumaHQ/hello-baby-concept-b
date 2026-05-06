import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

export default function StickyCTA() {
  return (
    <>
      {/* Desktop: teal floating button */}
      <div className="hidden md:block fixed right-6 bottom-8 z-40">
        <Link
          to="/contact-us"
          className="flex items-center gap-2 bg-brand-jade text-white px-6 py-3.5 rounded-full shadow-[0_4px_20px_rgba(50,182,200,0.3)] hover:shadow-[0_6px_28px_rgba(50,182,200,0.4)] hover:bg-brand-teal transition-all duration-300 text-sm font-medium"
        >
          <MessageCircle size={18} />
          預約諮詢
        </Link>
      </div>

      {/* Mobile: sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-card/98 backdrop-blur-xl p-3 border-t border-border shadow-[0_-2px_20px_rgba(0,0,0,0.06)]">
        <Link
          to="/contact-us"
          className="flex items-center justify-center gap-2 w-full bg-brand-jade text-white py-3.5 rounded-full font-medium text-sm transition-all duration-300 shadow-sm"
        >
          <MessageCircle size={16} />
          預約諮詢 — 開始您的產後護理旅程
        </Link>
      </div>
    </>
  );
}
