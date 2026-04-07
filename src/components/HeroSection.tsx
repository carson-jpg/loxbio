import professorImg from "@/assets/professor-edwin.jpeg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={professorImg} alt="Professor Edwin Wanjofu presenting research" className="w-full h-full object-cover object-top" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
    </div>

    <div className="container mx-auto relative z-10 px-4 py-32">
      <div className="max-w-3xl">
        <p className="animate-fade-up text-secondary font-semibold text-sm tracking-widest uppercase mb-4">
          Biotechnology &middot; Bioinformatics &middot; Data Science
        </p>
        <h1 className="animate-fade-up delay-100 font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
          Molecular Insight<br />
          <span className="text-secondary">through Data</span>
        </h1>
        <p className="animate-fade-up delay-200 text-primary-foreground/70 text-base mb-2 font-medium">
          Led by <span className="text-secondary font-bold">Prof. Edwin Wanjofu</span> — Researcher &amp; Biotechnologist
        </p>
        <p className="animate-fade-up delay-300 text-primary-foreground/80 text-lg max-w-xl mb-8 leading-relaxed">
          Advancing biological discovery through rigorous molecular biology,
          bioinformatics, and data-driven analysis for reproducible, impactful research.
        </p>
        <div className="animate-fade-up delay-400 flex flex-wrap gap-4">
          <a
            href="#services"
            className="px-7 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold transition-transform hover:scale-105"
          >
            Our Services
          </a>
          <a
            href="#about"
            className="px-7 py-3 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
          >
            Learn More
          </a>
          <a
            href="https://wa.me/27623171597"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-lg bg-[hsl(140,50%,40%)] text-primary-foreground font-semibold transition-transform hover:scale-105 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
      <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center pt-2">
        <div className="w-1.5 h-3 rounded-full bg-primary-foreground/60" />
      </div>
    </div>
  </section>
);

export default HeroSection;
