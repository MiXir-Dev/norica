import {
  ADDRESS_LINES,
  EMAIL_ADDRESS,
  INSTAGRAM_URL,
  PHONE_E164,
} from "@/consts/links";
import { FACIAL_SERVICES } from "@/consts/services";
import { FAQ_ITEMS } from "@/consts/servicesFaq";
import { TRAINING_CURRICULUM } from "@/consts/training";
import { RENTAL_FEATURES } from "@/consts/rental";
import { SITE_LOGO_URL, SITE_NAME, SITE_URL } from "@/consts/seoMeta";

const address = {
  "@type": "PostalAddress",
  streetAddress: ADDRESS_LINES[0],
  addressLocality: "Montreal",
  addressRegion: "QC",
  postalCode: "H2N 2G9",
  addressCountry: "CA",
};

export const LOCAL_BUSINESS_JSONLD = {
  "@type": "HealthAndBeautyBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  image: SITE_LOGO_URL,
  logo: SITE_LOGO_URL,
  telephone: PHONE_E164,
  email: EMAIL_ADDRESS,
  address,
  areaServed: "Montreal, QC",
  priceRange: "$$",
  sameAs: [INSTAGRAM_URL],
};

export const WEBSITE_JSONLD = {
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

const serviceOffers = [
  { name: "Laser Hair Removal", description: "GentleMax Pro laser hair removal for long-term reduction." },
  { name: "Laser Memberships", description: "Structured plans for consistent laser results and maintenance." },
  ...FACIAL_SERVICES.map((service) => ({
    name: service.title,
    description: service.description,
  })),
];

export const SERVICES_JSONLD = {
  "@type": "OfferCatalog",
  name: "Aesthetic Services",
  itemListElement: serviceOffers.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.name,
      description: service.description,
    },
  })),
};

export const FAQ_JSONLD = {
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const TRAINING_JSONLD = {
  "@type": "Course",
  name: "Laser Training Academy",
  description:
    "Professional laser certification program with a comprehensive curriculum and hands-on practice.",
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  educationalCredentialAwarded: "Laser Technician Certification",
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "InPerson",
    location: {
      "@type": "Place",
      address,
    },
    courseWorkload: TRAINING_CURRICULUM.join(", "),
  },
};

export const RENTAL_JSONLD = {
  "@type": "Service",
  name: "GentleMax Pro Rental Program",
  description:
    "Premium laser equipment rental with training, technical support, and flexible terms.",
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  areaServed: "Montreal, QC",
  serviceType: "Laser Equipment Rental",
  termsOfService: RENTAL_FEATURES.join(", "),
};

export const PAGE_JSONLD = {
  home: [WEBSITE_JSONLD, LOCAL_BUSINESS_JSONLD],
  services: [WEBSITE_JSONLD, LOCAL_BUSINESS_JSONLD, SERVICES_JSONLD, FAQ_JSONLD],
  training: [WEBSITE_JSONLD, LOCAL_BUSINESS_JSONLD, TRAINING_JSONLD],
  rental: [WEBSITE_JSONLD, LOCAL_BUSINESS_JSONLD, RENTAL_JSONLD],
};
