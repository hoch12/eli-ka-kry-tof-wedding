import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import VenueSection from "@/components/VenueSection";
import TimelineSection from "@/components/TimelineSection";
import DetailsSection from "@/components/DetailsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <VenueSection />
      <TimelineSection />
      <DetailsSection />
      <FooterSection />
    </main>
  );
};

export default Index;
