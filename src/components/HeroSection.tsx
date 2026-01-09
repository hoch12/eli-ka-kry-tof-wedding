import heroImage from "@/assets/hero-couple.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Eliška a Kryštof"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-white/70 via-warm-white/30 to-cream/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20">
        <div className="animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <p className="font-heading text-lg md:text-xl tracking-[0.3em] uppercase text-foreground/70 mb-4">
            Budeme svoji
          </p>
        </div>
        
        <h1 
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-foreground mb-6 animate-fade-in"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          Eliška <span className="text-gold italic">&</span> Kryštof
        </h1>

        <div 
          className="animate-fade-in"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          <div className="section-divider my-8" />
        </div>

        <p 
          className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-foreground/80 tracking-wider animate-fade-in"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          1. července 2026
        </p>

        <div 
          className="mt-12 animate-fade-in"
          style={{ animationDelay: "1s", opacity: 0 }}
        >
          <a
            href="#info"
            className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase text-foreground/60 hover:text-gold transition-colors duration-300"
          >
            <span>Více informací</span>
            <svg
              className="w-4 h-4 animate-float"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
