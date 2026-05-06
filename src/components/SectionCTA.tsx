import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

interface SectionCTAProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  variant?: "primary" | "warm";
}

export default function SectionCTA({ title, subtitle, buttonText = "預約諮詢", variant = "primary" }: SectionCTAProps) {
  const warm = variant === "warm";

  return (
    <section className={`relative overflow-hidden py-20 md:py-28 ${warm ? "bg-surface" : "bg-primary-dark"}`}>
      <div className="absolute inset-x-0 top-0 editorial-hairline" />
      <div className="container-site">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <p className="editorial-label">Consultation</p>
            <h2 className={`mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl ${warm ? "text-foreground" : "text-primary-foreground"}`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`mt-6 max-w-2xl text-[16px] leading-[1.9] ${warm ? "text-muted-foreground" : "text-primary-foreground/68"}`}>
                {subtitle}
              </p>
            )}
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/contact-us"
              className={`inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-8 text-sm font-bold transition-all duration-300 ${
                warm
                  ? "bg-primary text-primary-foreground hover:bg-brand-jade hover:text-primary-dark"
                  : "bg-brand-jade text-primary-dark hover:bg-brand-teal"
              }`}
            >
              {buttonText}
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
