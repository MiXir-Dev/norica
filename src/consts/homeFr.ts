import { Sparkles, Award, Users, MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";
import gentlemaxImage from "@/assets/gentlemax-pro.png";
import dermalogicaImage from "@/assets/dermalogica.png";
import treatmentImage from "@/assets/treatment-room.png";
import {
  ADDRESS_SINGLE_LINE,
  EMAIL_ADDRESS,
  OPERATING_HOURS_FR,
  PHONE_DISPLAY,
} from "@/consts/links";

export const HOME_HERO_FR = {
  kicker: "Laser · Soins · Abonnements",
  title: "Clinique esthétique et académie à Montréal",
  description:
    "Traitements laser avancés, soins de la peau professionnels et programmes de formation accrédités.",
  primaryCta: "Réserver",
  secondaryCta: "Formation",
};

export const HOME_TRUST_TITLE_FR = "Faites confiance à la technologie. Aimez les résultats.";

export const HOME_TRUST_POINTS_FR = [
  {
    icon: Sparkles,
    text: "Technologie laser reconnue par les dermatologues du monde entier.",
  },
  {
    icon: Award,
    text: "Soins professionnels appuyés par l'expertise Dermalogica.",
  },
  {
    icon: Users,
    text: "Traitements personnalisés pour chaque type de peau.",
  },
];

export const HOME_SERVICES_FR = [
  { title: "Épilation laser", image: treatmentImage, href: "/fr/services" },
  { title: "Soins du visage et peau", image: dermalogicaImage, href: "/fr/services" },
  { title: "Abonnements laser", image: gentlemaxImage, href: "/fr/services" },
];

export const HOME_SERVICES_CTA_FR = "Voir les services";

export const HOME_TRAINING_CTA_FR = {
  title: "Devenez technicien laser certifié",
  description: "Formation complète axée sur la technologie GentleMax Pro.",
  button: "Demander la formation",
};

export const HOME_CONTACT_TITLE_FR = "Nous visiter";

export const HOME_CONTACT_ITEMS_FR = [
  { icon: MapPin, text: ADDRESS_SINGLE_LINE },
  { icon: Phone, text: PHONE_DISPLAY },
  { icon: Mail, text: EMAIL_ADDRESS },
  { icon: Instagram, text: "@noricaspa" },
  { icon: Clock, text: OPERATING_HOURS_FR },
];
