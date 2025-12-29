import { Link } from "react-router-dom";
import { FOOTER_NAV_LINKS } from "@/consts/navigation";

const FooterNav = () => (
  <div className="space-y-6">
    <h4 className="text-sm uppercase tracking-widest text-primary-foreground/70">
      Navigation
    </h4>

    <nav className="flex flex-col gap-3 text-primary-foreground/80">
      {FOOTER_NAV_LINKS.map((link) => (
        <Link key={link.to} to={link.to} className="hover:text-accent transition">
          {link.label}
        </Link>
      ))}
    </nav>
  </div>
);

export default FooterNav;
