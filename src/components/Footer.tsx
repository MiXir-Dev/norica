import { useLocation } from "react-router-dom";
import FooterBrand from "@/components/footer/FooterBrand";
import FooterNav from "@/components/footer/FooterNav";
import FooterContact from "@/components/footer/FooterContact";
import FooterBottom from "@/components/footer/FooterBottom";
import { FOOTER_NAV_LINKS_FR } from "@/consts/navigation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isFrench = location.pathname.startsWith("/fr");

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-14">
          <FooterBrand language={isFrench ? "fr" : "en"} />
          <FooterNav
            links={isFrench ? FOOTER_NAV_LINKS_FR : undefined}
            language={isFrench ? "fr" : "en"}
          />
          <FooterContact language={isFrench ? "fr" : "en"} />
        </div>

        <FooterBottom year={currentYear} />
      </div>
    </footer>
  );
};

export default Footer;
