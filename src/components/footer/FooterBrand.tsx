import { Instagram, Mail, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { EMAIL_URL, INSTAGRAM_URL, PHONE_TEL } from "@/consts/links";
import { FOOTER_BRAND_TEXT } from "@/consts/footerCopy";

type FooterBrandProps = {
  language?: "en" | "fr";
};

const FooterBrand = ({ language = "en" }: FooterBrandProps) => (
  <div className="space-y-6">
    <Logo variant="light" size="md" />

    <p className="text-primary-foreground/80 leading-relaxed max-w-sm">
      {FOOTER_BRAND_TEXT[language]}
    </p>

    <div className="flex gap-4 pt-2">
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition"
        aria-label="Instagram"
      >
        <Instagram size={18} />
      </a>

      <a
        href={EMAIL_URL}
        className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition"
        aria-label="Email"
      >
        <Mail size={18} />
      </a>

      <a
        href={PHONE_TEL}
        className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition"
        aria-label="Phone"
      >
        <Phone size={18} />
      </a>
    </div>
  </div>
);

export default FooterBrand;
