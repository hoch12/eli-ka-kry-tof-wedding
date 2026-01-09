import { MapPin, Car, Building2, ExternalLink } from "lucide-react";
import venueImage from "@/assets/venue-castle.jpg";

const VenueSection = () => {
  const venueCards = [
    {
      icon: MapPin,
      title: "Místo konání",
      description: "Zámeček Ostrov u Zbraslavic",
      details: "Ostrov 1, 285 21 Zbraslavice",
      link: {
        url: "https://zamecekostrov.cz",
        label: "Navštívit stránky zámečku"
      }
    },
    {
      icon: Car,
      title: "Parkování",
      description: "Muzeum Ostrov lidových krojů",
      details: "Parkování je zajištěno na parkovišti u muzea, odkud je krátká procházka k zámečku.",
      link: {
        url: "https://maps.google.com",
        label: "Zobrazit na mapě"
      }
    },
    {
      icon: Building2,
      title: "Ubytování",
      description: "Zámeček & Hotel Agnes",
      details: "Ubytování je k dispozici přímo na zámečku a v blízkém Hotelu Agnes. Zajistíme shuttle bus mezi oběma místy.",
      link: null
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-warm-white">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Kde nás najdete
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Místo a logistika
          </h2>
          <div className="section-divider mt-8" />
        </div>

        {/* Venue Image */}
        <div className="mb-16 rounded-lg overflow-hidden shadow-lg">
          <img
            src={venueImage}
            alt="Zámeček Ostrov u Zbraslavic"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {venueCards.map((card, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border border-border/50 hover:border-gold/30 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <card.icon className="w-6 h-6 text-gold" />
              </div>
              
              <h3 className="font-heading text-xl md:text-2xl text-foreground mb-3">
                {card.title}
              </h3>
              
              <p className="font-heading text-lg text-foreground/80 mb-2">
                {card.description}
              </p>
              
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                {card.details}
              </p>
              
              {card.link && (
                <a
                  href={card.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-gold hover:text-gold-light transition-colors duration-300"
                >
                  <span>{card.link.label}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
