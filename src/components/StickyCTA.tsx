import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

export default function StickyCTA() {
  return (
    <>
      <div className="hidden md:block fixed right-6 bottom-8 z-40">
        <Link
          to="/contact-us"
          className="flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_18px_46px_rgba(24,54,44,0.22)] transition-all duration-300 hover:bg-brand-jade hover:text-primary-dark"
        >
          <MessageCircle size={18} />
          預約諮詢
        </Link>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/98 p-3 shadow-[0_-16px_44px_rgba(20,40,32,0.08)] backdrop-blur-xl">
        <Link
          to="/contact-us"
          className="flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-primary text-[15px] font-bold text-primary-foreground transition-all duration-300"
        >
          <MessageCircle size={17} />
          預約諮詢 — 開始產後護理規劃
        </Link>
      </div>
    </>
  );
}
