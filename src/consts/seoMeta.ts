export const SITE_NAME = "Norica Spa";
export const SITE_URL = "https://noricaspa.com";
export const SITE_LOGO_URL = `${SITE_URL}/logo.png`;

export const DEFAULT_KEYWORDS = [
  "laser hair removal Montreal",
  "épilation laser Montréal",
  "aesthetic clinic Montreal",
  "clinique esthétique Montréal",
  "GentleMax Pro",
  "Dermalogica facials",
  "soins du visage Dermalogica",
  "laser memberships",
  "laser technician training",
  "formation technicien laser",
  "laser training academy Montreal",
  "formation laser Montréal",
  "medical aesthetics Montreal",
  "laser rental program",
  "location GentleMax Pro",
];

export const PAGE_META = {
  home: {
    title: "Norica Spa | Laser Hair Removal & Aesthetic Clinic in Montreal",
    description:
      "Advanced laser treatments, Dermalogica facials, and accredited training programs in Montreal. Discover GentleMax Pro technology and personalized care at Norica Spa.",
    path: "/",
    keywords: DEFAULT_KEYWORDS,
    lang: "en-CA",
    alternates: [
      { hrefLang: "en-CA", href: `${SITE_URL}/` },
      { hrefLang: "fr-CA", href: `${SITE_URL}/fr` },
    ],
  },
  services: {
    title: "Aesthetic Services | Laser Hair Removal & Facials in Montreal",
    description:
      "Medical-grade laser hair removal and professional facials in Montreal. GentleMax Pro technology, Dermalogica skincare, and expert-led treatments.",
    path: "/services",
    keywords: [
      "laser hair removal Montreal",
      "épilation laser Montréal",
      "Dermalogica facials",
      "soins du visage Dermalogica",
      "skin treatments Montreal",
      "soins de la peau Montréal",
      "GentleMax Pro laser",
      "laser GentleMax Pro",
      "permanent hair reduction",
      "réduction permanente des poils",
      "medical aesthetics services",
    ],
    lang: "en-CA",
    alternates: [
      { hrefLang: "en-CA", href: `${SITE_URL}/services` },
      { hrefLang: "fr-CA", href: `${SITE_URL}/fr/services` },
    ],
  },
  training: {
    title: "Laser Training Academy | Certification Program in Montreal",
    description:
      "Professional laser technician training in Montreal. Comprehensive curriculum, hands-on practice, and industry-recognized certification at Norica Spa.",
    path: "/training",
    keywords: [
      "laser training academy Montreal",
      "formation laser Montréal",
      "laser technician certification",
      "certification technicien laser",
      "aesthetic training program",
      "programme de formation esthétique",
      "GentleMax Pro training",
      "formation GentleMax Pro",
      "laser safety education",
      "sécurité laser",
    ],
    lang: "en-CA",
    alternates: [
      { hrefLang: "en-CA", href: `${SITE_URL}/training` },
      { hrefLang: "fr-CA", href: `${SITE_URL}/fr/training` },
    ],
  },
  rental: {
    title: "GentleMax Pro Rental | Laser Equipment Program in Montreal",
    description:
      "Flexible GentleMax Pro rental program with training and support. Grow your practice with premium laser equipment in Montreal.",
    path: "/rental",
    keywords: [
      "GentleMax Pro rental",
      "location GentleMax Pro",
      "laser equipment rental Montreal",
      "location équipement laser Montréal",
      "laser practice support",
      "soutien pratique laser",
      "aesthetic equipment rental",
    ],
    lang: "en-CA",
    alternates: [
      { hrefLang: "en-CA", href: `${SITE_URL}/rental` },
      { hrefLang: "fr-CA", href: `${SITE_URL}/fr/rental` },
    ],
  },
};
