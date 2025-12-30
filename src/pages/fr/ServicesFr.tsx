import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import FacialsSection from "@/components/services/FacialsSection";
import LaserSection from "@/components/services/LaserSection";
import ServicesFaq from "@/components/services/ServicesFaq";
import ServicesFinalCta from "@/components/services/ServicesFinalCta";
import Seo from "@/components/Seo";
import { PAGE_META_FR } from "@/consts/seoMetaFr";
import { PAGE_JSONLD_FR } from "@/consts/seoJsonldFr";
import {
  SERVICES_HERO_FR,
  FACIALS_INTRO_FR,
  FACIAL_SERVICES_FR,
  DERMALOGICA_COPY_FR,
  FACIALS_CTA_FR,
  LASER_SECTION_FR,
  LASER_BENEFITS_FR,
  FINAL_CTA_FR,
} from "@/consts/fr/servicesFr";
import { FAQ_ITEMS_FR } from "@/consts/fr/servicesFrFaq";
import InternalLinks from "@/components/seo/InternalLinks";

const ServicesFr = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo {...PAGE_META_FR.services} jsonLd={PAGE_JSONLD_FR.services} />
      <Navigation />
      <ServicesHero title={SERVICES_HERO_FR.title} description={SERVICES_HERO_FR.description} />
      <FacialsSection
        heading={FACIALS_INTRO_FR.heading}
        intro={FACIALS_INTRO_FR.description}
        services={FACIAL_SERVICES_FR}
        productsLabel={DERMALOGICA_COPY_FR.label}
        productsTitle={DERMALOGICA_COPY_FR.title}
        productsDescription={DERMALOGICA_COPY_FR.description}
        ctaLabel={FACIALS_CTA_FR.label}
        ctaDescription={FACIALS_CTA_FR.description}
      />
      <div className="h-px bg-border/50" />
      <LaserSection
        heading={LASER_SECTION_FR.heading}
        kicker={LASER_SECTION_FR.kicker}
        description={LASER_SECTION_FR.description}
        benefitsTitle={LASER_SECTION_FR.benefitsTitle}
        benefits={LASER_BENEFITS_FR}
        ctaLabel={LASER_SECTION_FR.ctaLabel}
        ctaDescription={LASER_SECTION_FR.ctaDescription}
      />
      <div className="h-px bg-border/50" />
      <ServicesFaq
        heading="Questions fréquentes"
        subheading="Épilation laser — GentleMax Pro"
        items={FAQ_ITEMS_FR}
      />
      <InternalLinks basePath="/fr" language="fr" />
      <ServicesFinalCta
        heading={FINAL_CTA_FR.heading}
        description={FINAL_CTA_FR.description}
        buttonLabel={FINAL_CTA_FR.button}
      />
      <Footer />
    </div>
  );
};

export default ServicesFr;
