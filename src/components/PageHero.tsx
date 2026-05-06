interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section
      className="relative pt-20 flex items-center justify-center min-h-[340px] bg-cover bg-center"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {backgroundImage && <div className="absolute inset-0 bg-hero-overlay" />}
      <div className="relative z-10 container-site text-center py-16">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground drop-shadow-md">{title}</h1>
        {subtitle && <p className="mt-4 text-lg text-primary-foreground/85 max-w-2xl mx-auto drop-shadow-sm">{subtitle}</p>}
      </div>
    </section>
  );
}
