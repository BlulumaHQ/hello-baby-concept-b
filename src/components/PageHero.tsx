interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-primary pt-[120px] text-primary-foreground md:pt-[148px]"
      style={backgroundImage ? { backgroundImage: `linear-gradient(90deg, rgba(10,35,27,.9), rgba(10,35,27,.62), rgba(10,35,27,.28)), url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
    >
      <div className="container-site py-20 md:py-28">
        <div className="max-w-4xl">
          <p className="editorial-label">Hello Baby</p>
          <h1 className="mt-6 text-[42px] font-black leading-[1.05] md:text-[76px] lg:text-[88px]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-7 max-w-2xl text-[16px] leading-[1.9] text-primary-foreground/72 md:text-[18px]">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="editorial-hairline" />
    </section>
  );
}
