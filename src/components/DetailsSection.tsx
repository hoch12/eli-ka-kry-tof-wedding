import { Gift, Shirt } from "lucide-react";

const DetailsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-warm-white">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Důležité informace
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Detaily
          </h2>
          <div className="section-divider mt-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Gifts */}
          <div className="bg-card p-8 md:p-10 rounded-lg border border-border/50 text-center">
            <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center mx-auto mb-6">
              <Gift className="w-8 h-8 text-gold" />
            </div>
            
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
              Dary
            </h3>
            
            <p className="font-body text-muted-foreground leading-relaxed">
              Vaše přítomnost je pro nás tím nejcennějším darem. Pokud nás přesto chcete 
              obdarovat, budeme vděční za finanční příspěvek na naše společné cestování 
              a budování nového domova.
            </p>
          </div>

          {/* Dress Code */}
          <div className="bg-card p-8 md:p-10 rounded-lg border border-border/50 text-center">
            <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center mx-auto mb-6">
              <Shirt className="w-8 h-8 text-gold" />
            </div>
            
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
              Dress Code
            </h3>
            
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              <span className="font-medium text-foreground">Elegantní</span>
            </p>
            
            <p className="font-body text-muted-foreground leading-relaxed">
              Nemáme žádné požadavky na konkrétní barvy oblečení. Oblékte se elegantně 
              a pohodlně, abyste si mohli užít celý den i večer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
