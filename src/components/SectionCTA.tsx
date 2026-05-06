import { Link } from "@tanstack/react-router";

interface SectionCTAProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  variant?: "primary" | "secondary";
}

export default function SectionCTA({ title, subtitle, buttonText = "立即諮詢", variant = "primary" }: SectionCTAProps) {
  const bg = variant === "primary" ? "bg-primary-dark" : "bg-secondary-dark";
  return (
    <section className={`${bg} section-padding`}>
      <div className="container-site text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">{title}</h2>
        {subtitle && <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">{subtitle}</p>}
        <Link
          to="/contact-us"
          className="mt-6 inline-flex items-center px-8 py-3.5 bg-background text-foreground font-semibold rounded-lg hover:bg-accent transition-colors text-sm"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
