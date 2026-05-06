import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

interface SectionCTAProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  variant?: "primary" | "warm";
}

export default function SectionCTA({ title, subtitle, buttonText = "預約諮詢", variant = "primary" }: SectionCTAProps) {
  return (
    <section className={`section-padding ${variant === "warm" ? "bg-muted" : "bg-primary-dark"}`}>
      <div className="container-site text-center">
        <h2 className={`text-2xl md:text-3xl font-semibold tracking-tight ${variant === "warm" ? "text-foreground" : "text-primary-foreground"}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-3 max-w-xl mx-auto leading-relaxed ${variant === "warm" ? "text-muted-foreground" : "text-primary-foreground/75"}`}>
            {subtitle}
          </p>
        )}
        <Link
          to="/contact-us"
          className={`mt-7 inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 ${
            variant === "warm"
              ? "bg-primary-dark text-primary-foreground hover:bg-primary"
              : "bg-card text-foreground hover:bg-accent"
          }`}
        >
          {buttonText}
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
