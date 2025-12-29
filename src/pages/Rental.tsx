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

const Rental = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
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
