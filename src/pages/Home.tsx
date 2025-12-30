import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomeHero from "@/components/home/HomeHero";
import HomeTrust from "@/components/home/HomeTrust";
import HomeServicesPreview from "@/components/home/HomeServicesPreview";
import HomeTrainingCta from "@/components/home/HomeTrainingCta";
import HomeContact from "@/components/home/HomeContact";
import Seo from "@/components/Seo";
import { PAGE_JSONLD, PAGE_META } from "@/consts/seo";

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
      <Footer />
    </div>
  );
};

export default Home;
