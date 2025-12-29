import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import FacialsSection from "@/components/services/FacialsSection";
import LaserSection from "@/components/services/LaserSection";
import ServicesFaq from "@/components/services/ServicesFaq";
import ServicesFinalCta from "@/components/services/ServicesFinalCta";

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ServicesHero />
      <FacialsSection />
      <div className="h-px bg-border/50" />
      <LaserSection />
      <div className="h-px bg-border/50" />
      <ServicesFaq />
      <ServicesFinalCta />
      <Footer />
    </div>
  );
};

export default Services;
