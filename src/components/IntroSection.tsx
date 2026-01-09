import { Heart } from "lucide-react";

const IntroSection = () => {
  return (
    <section id="info" className="py-20 md:py-32 bg-gradient-section">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <Heart className="w-8 h-8 mx-auto mb-8 text-gold animate-pulse-soft" />
        
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 leading-relaxed">
          Srdečně vás zveme na oslavu našeho svatebního dne
        </h2>
        
        <div className="section-divider my-10" />
        
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
          S radostí bychom s vámi chtěli sdílet jeden z nejkrásnějších dnů našeho života. 
          Budeme potěšeni, když tento výjimečný okamžik oslavíte společně s námi.
        </p>

        <div className="mt-12 p-8 bg-card/50 rounded-lg border border-border/50">
          <p className="font-heading text-xl md:text-2xl text-foreground mb-2">
            Zámeček Ostrov u Zbraslavic
          </p>
          <p className="font-body text-muted-foreground">
            Ostrov u Zbraslavic, Česká republika
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
