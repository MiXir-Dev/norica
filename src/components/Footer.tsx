import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16 md:py-20">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-14">

          {/* BRAND */}
          <div className="space-y-6">
            <Logo variant="light" size="md" />

            <p className="text-primary-foreground/80 leading-relaxed max-w-sm">
              Luxury laser clinic and academy in Montreal, offering advanced aesthetic
              treatments and professional training.
            </p>

            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com/noricaspa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href="mailto:noricaspa@gmail.com"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>

              <a
                href="tel:+15145504633"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-widest text-primary-foreground/70">
              Navigation
            </h4>

            <nav className="flex flex-col gap-3 text-primary-foreground/80">
              <Link to="/" className="hover:text-accent transition">
                Home
              </Link>
              <Link to="/services" className="hover:text-accent transition">
                Services
              </Link>
              <Link to="/training" className="hover:text-accent transition">
                Training
              </Link>
              <Link to="/rental" className="hover:text-accent transition">
                Laser Rental
              </Link>
            </nav>
          </div>

          {/* CONTACT */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-widest text-primary-foreground/70">
              Contact
            </h4>

            <div className="space-y-4 text-primary-foreground/80 text-sm">

              <a
                href="https://maps.google.com/?q=105+Rue+Chabanel+Ouest+Montreal+QC+H2N+2G9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-accent transition"
              >
                <MapPin size={16} className="mt-[2px]" />
                <span>
                  105 rue Chabanel Ouest<br />
                  Montreal, QC H2N 2G9
                </span>
              </a>

              <a
                href="tel:+15145504633"
                className="flex items-center gap-3 hover:text-accent transition"
              >
                <Phone size={16} />
                (514) 550-4633
              </a>

              <a
                href="mailto:noricaspa@gmail.com"
                className="flex items-center gap-3 hover:text-accent transition"
              >
                <Mail size={16} />
                noricaspa@gmail.com
              </a>

              <div className="pt-2 text-primary-foreground/60 leading-relaxed">
                Monday – Saturday: 9:00 AM – 6:00 PM<br />
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-xs">
          © {currentYear} Norica Spa. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
