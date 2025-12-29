import {
  Sparkles,
  Award,
  Users,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Clock,
} from "lucide-react";
import gentlemaxImage from "@/assets/gentlemax-pro.png";
import dermalogicaImage from "@/assets/dermalogica.png";
import treatmentImage from "@/assets/treatment-room.png";
import {
  ADDRESS_SINGLE_LINE,
  EMAIL_ADDRESS,
  OPERATING_HOURS,
  PHONE_DISPLAY,
} from "@/consts/links";

export const HOME_TRUST_POINTS = [
  {
    icon: Sparkles,
    text: "Laser technology trusted by dermatologists worldwide.",
  },
  {
    icon: Award,
    text: "Professional facials powered by Dermalogica expertise.",
  },
  {
    icon: Users,
    text: "Personalized treatments for every skin type.",
  },
];

export const HOME_SERVICES = [
  { title: "Laser Hair Removal", image: treatmentImage, href: "/services" },
  { title: "Facials & Skin Treatments", image: dermalogicaImage, href: "/services" },
  { title: "Laser Memberships", image: gentlemaxImage, href: "/services" },
];

export const HOME_CONTACT_ITEMS = [
  { icon: MapPin, text: ADDRESS_SINGLE_LINE },
  { icon: Phone, text: PHONE_DISPLAY },
  { icon: Mail, text: EMAIL_ADDRESS },
  { icon: Instagram, text: "@noricaspa" },
  { icon: Clock, text: OPERATING_HOURS },
];
