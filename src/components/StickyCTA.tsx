import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

export default function StickyCTA() {
  return (
    <>
      {/* Desktop: subtle floating button */}
      <div className="hidden md:block fixed right-6 bottom-8 z-40">
        <Link
          to="/contact-us"
          className="flex items-center gap-2 bg-primary-dark text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-primary transition-all duration-300 text-sm font-medium"
        >
          <MessageCircle size={18} />
          預約諮詢
        </Link>
      </div>

      {/* Mobile: sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md p-3 border-t border-border">
        <Link
          to="/contact-us"
          className="flex items-center justify-center gap-2 w-full bg-primary-dark text-primary-foreground py-3.5 rounded-full font-medium text-sm transition-colors"
        >
          <MessageCircle size={16} />
          預約諮詢 — 開始您的產後護理旅程
        </Link>
      </div>
    </>
  );
}
