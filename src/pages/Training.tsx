import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TrainingHero from "@/components/training/TrainingHero";
import TrainingOverview from "@/components/training/TrainingOverview";
import TrainingBenefits from "@/components/training/TrainingBenefits";
import TrainingCertification from "@/components/training/TrainingCertification";
import TrainingPrerequisites from "@/components/training/TrainingPrerequisites";
import TrainingCta from "@/components/training/TrainingCta";

const Training = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <TrainingHero />
      <TrainingOverview />
      <TrainingBenefits />
      <TrainingCertification />
      <TrainingPrerequisites />
      <TrainingCta />
      <Footer />
    </div>
  );
};

export default Training;
