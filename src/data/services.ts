export interface Service {
  slug: string;
  key: string; // translation key base under services namespace
  titleKey: string;
  descriptionKey: string;
  price?: { from: number; currency: string };
}

const services: Service[] = [
  {
    slug: "dermatology-beauty",
    key: "dermatologyBeauty",
    titleKey: "dermatologyBeauty.title",
    descriptionKey: "dermatologyBeauty.description",
  },
  {
    slug: "laser-hair-removal",
    key: "laserHairRemoval",
    titleKey: "laserHairRemoval.title",
    descriptionKey: "laserHairRemoval.description",
    price: { from: 149, currency: "SAR" },
  },
  {
    slug: "cupping-hijama",
    key: "cuppingHijama",
    titleKey: "cuppingHijama.title",
    descriptionKey: "cuppingHijama.description",
  },
  {
    slug: "skin-cleansing",
    key: "skinCleansing",
    titleKey: "skinCleansing.title",
    descriptionKey: "skinCleansing.description",
  },
];

export function getServices() {
  return services;
}

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
