import { Mail, Phone, MapPin } from "lucide-react";
import {
  ADDRESS_LINES,
  EMAIL_ADDRESS,
  EMAIL_URL,
  MAPS_URL,
  OPERATING_HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/consts/links";

const FooterContact = () => (
  <div className="space-y-6">
    <h4 className="text-sm uppercase tracking-widest text-primary-foreground/70">
      Contact
    </h4>

    <div className="space-y-4 text-primary-foreground/80 text-sm">
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-3 hover:text-accent transition"
      >
        <MapPin size={16} className="mt-[2px]" />
        <span>
          {ADDRESS_LINES[0]}
          <br />
          {ADDRESS_LINES[1]}
        </span>
      </a>

      <a href={PHONE_TEL} className="flex items-center gap-3 hover:text-accent transition">
        <Phone size={16} />
        {PHONE_DISPLAY}
      </a>

      <a href={EMAIL_URL} className="flex items-center gap-3 hover:text-accent transition">
        <Mail size={16} />
        {EMAIL_ADDRESS}
      </a>

      <div className="pt-2 text-primary-foreground/60 leading-relaxed">
        {OPERATING_HOURS}
        <br />
      </div>
    </div>
  </div>
);

export default FooterContact;
