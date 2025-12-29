import FooterBrand from "@/components/footer/FooterBrand";
import FooterNav from "@/components/footer/FooterNav";
import FooterContact from "@/components/footer/FooterContact";
import FooterBottom from "@/components/footer/FooterBottom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-14">
          <FooterBrand />
          <FooterNav />
          <FooterContact />
        </div>

        <FooterBottom year={currentYear} />
      </div>
    </footer>
  );
};

export default Footer;
