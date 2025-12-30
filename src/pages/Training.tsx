import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TrainingHero from "@/components/training/TrainingHero";
import TrainingOverview from "@/components/training/TrainingOverview";
import TrainingBenefits from "@/components/training/TrainingBenefits";
import TrainingCertification from "@/components/training/TrainingCertification";
import TrainingPrerequisites from "@/components/training/TrainingPrerequisites";
import TrainingCta from "@/components/training/TrainingCta";
import Seo from "@/components/Seo";
import { PAGE_META } from "@/consts/seoMeta";
import { PAGE_JSONLD } from "@/consts/seoJsonld";
import LocalizedSummary from "@/components/seo/LocalizedSummary";
import InternalLinks from "@/components/seo/InternalLinks";

const Training = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Seo {...PAGE_META.training} jsonLd={PAGE_JSONLD.training} />
      <Navigation />
      <TrainingHero />
      <TrainingOverview />
      <TrainingBenefits />
      <TrainingCertification />
      <TrainingPrerequisites />
      <LocalizedSummary summaryKey="training" />
      <InternalLinks />
      <TrainingCta />
      <Footer />
    </div>
  );
};

export default Training;
