import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomeHero from "@/components/home/HomeHero";
import HomeTrust from "@/components/home/HomeTrust";
import HomeServicesPreview from "@/components/home/HomeServicesPreview";
import HomeTrainingCta from "@/components/home/HomeTrainingCta";
import HomeContact from "@/components/home/HomeContact";
import Seo from "@/components/Seo";
import { PAGE_META } from "@/consts/seoMeta";
import { PAGE_JSONLD } from "@/consts/seoJsonld";
import InternalLinks from "@/components/seo/InternalLinks";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen">
      <Seo {...PAGE_META.home} jsonLd={PAGE_JSONLD.home} />
      <Navigation />
      <HomeHero />
      <HomeTrust />
      <HomeServicesPreview />
      <HomeTrainingCta />
      <HomeContact />
      <InternalLinks />
      <Footer />
    </div>
  );
};

export default Home;
