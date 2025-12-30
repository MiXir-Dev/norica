import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomeHero from "@/components/home/HomeHero";
import HomeTrust from "@/components/home/HomeTrust";
import HomeServicesPreview from "@/components/home/HomeServicesPreview";
import HomeTrainingCta from "@/components/home/HomeTrainingCta";
import HomeContact from "@/components/home/HomeContact";
import Seo from "@/components/Seo";
import { PAGE_META_FR } from "@/consts/seoMetaFr";
import { PAGE_JSONLD_FR } from "@/consts/seoJsonldFr";
import {
  HOME_CONTACT_ITEMS_FR,
  HOME_CONTACT_TITLE_FR,
  HOME_HERO_FR,
  HOME_SERVICES_CTA_FR,
  HOME_SERVICES_FR,
  HOME_TRAINING_CTA_FR,
  HOME_TRUST_POINTS_FR,
  HOME_TRUST_TITLE_FR,
} from "@/consts/homeFr";
import InternalLinks from "@/components/seo/InternalLinks";

const HomeFr = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen">
      <Seo {...PAGE_META_FR.home} jsonLd={PAGE_JSONLD_FR.home} />
      <Navigation />
      <HomeHero
        kicker={HOME_HERO_FR.kicker}
        title={HOME_HERO_FR.title}
        description={HOME_HERO_FR.description}
        primaryCtaLabel={HOME_HERO_FR.primaryCta}
        secondaryCtaLabel={HOME_HERO_FR.secondaryCta}
        secondaryCtaHref="/fr/training"
      />
      <HomeTrust title={HOME_TRUST_TITLE_FR} points={HOME_TRUST_POINTS_FR} />
      <HomeServicesPreview services={HOME_SERVICES_FR} ctaLabel={HOME_SERVICES_CTA_FR} />
      <HomeTrainingCta
        title={HOME_TRAINING_CTA_FR.title}
        description={HOME_TRAINING_CTA_FR.description}
        buttonLabel={HOME_TRAINING_CTA_FR.button}
        href="/fr/training"
      />
      <HomeContact title={HOME_CONTACT_TITLE_FR} items={HOME_CONTACT_ITEMS_FR} />
      <InternalLinks basePath="/fr" language="fr" />
      <Footer />
    </div>
  );
};

export default HomeFr;
