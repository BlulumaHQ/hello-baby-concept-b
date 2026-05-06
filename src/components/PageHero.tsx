interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section
      className="relative pt-[72px] flex items-center justify-center min-h-[320px] md:min-h-[380px] bg-cover bg-center"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : { background: "var(--surface)" }}
    >
      {backgroundImage && <div className="absolute inset-0 bg-hero-overlay" />}
      <div className="relative z-10 container-site text-center py-16 md:py-20">
        <h1 className={`text-3xl md:text-5xl font-semibold tracking-tight leading-tight ${backgroundImage ? "text-primary-foreground drop-shadow-md" : "text-foreground"}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${backgroundImage ? "text-primary-foreground/85 drop-shadow-sm" : "text-muted-foreground"}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
