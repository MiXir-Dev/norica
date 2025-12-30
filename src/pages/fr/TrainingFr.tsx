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
import { PAGE_META_FR } from "@/consts/seoMetaFr";
import { PAGE_JSONLD_FR } from "@/consts/seoJsonldFr";
import {
  TRAINING_HERO_FR,
  TRAINING_OVERVIEW_FR,
  TRAINING_OVERVIEW_CARDS_FR,
  TRAINING_CURRICULUM_FR,
  TRAINING_BENEFITS_FR,
  TRAINING_CERTIFICATION_FR,
  TRAINING_PREREQUISITES_FR,
  TRAINING_CTA_FR,
} from "@/consts/fr/trainingFr";
import InternalLinks from "@/components/seo/InternalLinks";

const TrainingFr = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Seo {...PAGE_META_FR.training} jsonLd={PAGE_JSONLD_FR.training} />
      <Navigation />
      <TrainingHero
        title={TRAINING_HERO_FR.title}
        description={TRAINING_HERO_FR.description}
        ctaLabel={TRAINING_HERO_FR.cta}
      />
      <TrainingOverview
        title={TRAINING_OVERVIEW_FR.title}
        description={TRAINING_OVERVIEW_FR.description}
        cards={TRAINING_OVERVIEW_CARDS_FR}
        curriculum={TRAINING_CURRICULUM_FR}
        curriculumTitle="Programme"
      />
      <TrainingBenefits
        heading="Pourquoi se former avec nous"
        benefits={TRAINING_BENEFITS_FR}
      />
      <TrainingCertification
        title={TRAINING_CERTIFICATION_FR.title}
        description={TRAINING_CERTIFICATION_FR.description}
        ctaLabel={TRAINING_CERTIFICATION_FR.cta}
      />
      <TrainingPrerequisites
        heading={TRAINING_PREREQUISITES_FR.title}
        items={TRAINING_PREREQUISITES_FR.items}
      />
      <InternalLinks basePath="/fr" language="fr" />
      <TrainingCta
        title={TRAINING_CTA_FR.title}
        description={TRAINING_CTA_FR.description}
        buttonLabel={TRAINING_CTA_FR.button}
      />
      <Footer />
    </div>
  );
};

export default TrainingFr;
