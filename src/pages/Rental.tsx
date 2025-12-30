import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RentalHero from "@/components/rental/RentalHero";
import RentalOverview from "@/components/rental/RentalOverview";
import RentalIncluded from "@/components/rental/RentalIncluded";
import RentalBenefits from "@/components/rental/RentalBenefits";
import RentalIdealFor from "@/components/rental/RentalIdealFor";
import RentalRequirements from "@/components/rental/RentalRequirements";
import RentalCta from "@/components/rental/RentalCta";
import Seo from "@/components/Seo";
import { PAGE_JSONLD, PAGE_META } from "@/consts/seo";

const Rental = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Seo {...PAGE_META.rental} jsonLd={PAGE_JSONLD.rental} />
      <Navigation />
      <RentalHero />
      <RentalOverview />
      <RentalIncluded />
      <RentalBenefits />
      <RentalIdealFor />
      <RentalRequirements />
      <RentalCta />
      <Footer />
    </div>
  );
};

export default Rental;
