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
import { PAGE_META_FR } from "@/consts/seoMetaFr";
import { PAGE_JSONLD_FR } from "@/consts/seoJsonldFr";
import {
  RENTAL_HERO_FR,
  RENTAL_OVERVIEW_FR,
  RENTAL_OVERVIEW_CARDS_FR,
  RENTAL_FEATURES_FR,
  RENTAL_BENEFITS_FR,
  RENTAL_IDEAL_FOR_FR,
  RENTAL_REQUIREMENTS_FR,
  RENTAL_CTA_FR,
} from "@/consts/fr/rentalFr";
import InternalLinks from "@/components/seo/InternalLinks";

const RentalFr = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Seo {...PAGE_META_FR.rental} jsonLd={PAGE_JSONLD_FR.rental} />
      <Navigation />
      <RentalHero
        title={RENTAL_HERO_FR.title}
        description={RENTAL_HERO_FR.description}
        ctaLabel={RENTAL_HERO_FR.cta}
      />
      <RentalOverview
        title={RENTAL_OVERVIEW_FR.title}
        description={RENTAL_OVERVIEW_FR.description}
        cards={RENTAL_OVERVIEW_CARDS_FR}
      />
      <RentalIncluded heading="Inclus" features={RENTAL_FEATURES_FR} />
      <RentalBenefits heading="Pourquoi louer avec nous" benefits={RENTAL_BENEFITS_FR} />
      <RentalIdealFor heading={RENTAL_IDEAL_FOR_FR.title} items={RENTAL_IDEAL_FOR_FR.items} />
      <RentalRequirements heading={RENTAL_REQUIREMENTS_FR.title} items={RENTAL_REQUIREMENTS_FR.items} />
      <InternalLinks basePath="/fr" language="fr" />
      <RentalCta
        title={RENTAL_CTA_FR.title}
        description={RENTAL_CTA_FR.description}
        buttonLabel={RENTAL_CTA_FR.button}
      />
      <Footer />
    </div>
  );
};

export default RentalFr;
