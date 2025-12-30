import { Link } from "react-router-dom";
import { FOOTER_NAV_LINKS } from "@/consts/navigation";
import { FOOTER_NAV_HEADING } from "@/consts/footerCopy";

type FooterNavProps = {
  links?: typeof FOOTER_NAV_LINKS;
  language?: "en" | "fr";
};

const FooterNav = ({ links = FOOTER_NAV_LINKS, language = "en" }: FooterNavProps) => (
  <div className="space-y-6">
    <h4 className="text-sm uppercase tracking-widest text-primary-foreground/70">
      {FOOTER_NAV_HEADING[language]}
    </h4>

    <nav className="flex flex-col gap-3 text-primary-foreground/80">
      {links.map((link) => (
        <Link key={link.to} to={link.to} className="hover:text-accent transition">
          {link.label}
        </Link>
      ))}
    </nav>
  </div>
);

export default FooterNav;
