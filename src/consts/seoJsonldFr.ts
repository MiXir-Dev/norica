import {
  ADDRESS_LINES,
  EMAIL_ADDRESS,
  INSTAGRAM_URL,
  PHONE_E164,
} from "@/consts/links";
import { SITE_LOGO_URL, SITE_NAME, SITE_URL } from "@/consts/seoMeta";
import { FACIAL_SERVICES_FR } from "@/consts/fr/servicesFr";
import { FAQ_ITEMS_FR } from "@/consts/fr/servicesFrFaq";
import { TRAINING_CURRICULUM_FR } from "@/consts/fr/trainingFr";
import { RENTAL_FEATURES_FR } from "@/consts/fr/rentalFr";

const address = {
  "@type": "PostalAddress",
  streetAddress: ADDRESS_LINES[0],
  addressLocality: "Montréal",
  addressRegion: "QC",
  postalCode: "H2N 2G9",
  addressCountry: "CA",
};

export const LOCAL_BUSINESS_JSONLD_FR = {
  "@type": "HealthAndBeautyBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  image: SITE_LOGO_URL,
  logo: SITE_LOGO_URL,
  telephone: PHONE_E164,
  email: EMAIL_ADDRESS,
  address,
  areaServed: "Montréal, QC",
  priceRange: "$$",
  sameAs: [INSTAGRAM_URL],
};

export const WEBSITE_JSONLD_FR = {
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

const serviceOffers = [
  {
    name: "Épilation laser",
    description: "Épilation laser GentleMax Pro pour une réduction durable.",
  },
  {
    name: "Abonnements laser",
    description: "Plans structurés pour des résultats constants et un entretien régulier.",
  },
  ...FACIAL_SERVICES_FR.map((service) => ({
    name: service.title,
    description: service.description,
  })),
];

export const SERVICES_JSONLD_FR = {
  "@type": "OfferCatalog",
  name: "Services esthétiques",
  itemListElement: serviceOffers.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.name,
      description: service.description,
    },
  })),
};

export const FAQ_JSONLD_FR = {
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS_FR.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const TRAINING_JSONLD_FR = {
  "@type": "Course",
  name: "Académie de formation laser",
  description:
    "Programme de certification laser avec formation théorique et pratique supervisée.",
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  educationalCredentialAwarded: "Certification technicien laser",
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "InPerson",
    location: {
      "@type": "Place",
      address,
    },
    courseWorkload: TRAINING_CURRICULUM_FR.join(", "),
  },
};

export const RENTAL_JSONLD_FR = {
  "@type": "Service",
  name: "Programme de location GentleMax Pro",
  description:
    "Location d'équipement laser avec formation, soutien technique et conditions flexibles.",
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  areaServed: "Montréal, QC",
  serviceType: "Location d'équipement laser",
  termsOfService: RENTAL_FEATURES_FR.join(", "),
};

export const PAGE_JSONLD_FR = {
  home: [WEBSITE_JSONLD_FR, LOCAL_BUSINESS_JSONLD_FR],
  services: [WEBSITE_JSONLD_FR, LOCAL_BUSINESS_JSONLD_FR, SERVICES_JSONLD_FR, FAQ_JSONLD_FR],
  training: [WEBSITE_JSONLD_FR, LOCAL_BUSINESS_JSONLD_FR, TRAINING_JSONLD_FR],
  rental: [WEBSITE_JSONLD_FR, LOCAL_BUSINESS_JSONLD_FR, RENTAL_JSONLD_FR],
};
