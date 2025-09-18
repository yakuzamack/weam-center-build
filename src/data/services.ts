export interface Service {
  key: string;
  slug: string;
  titleKey: string;
  descriptionKey: string;
  price?: {
    from: string;
    currency: string;
  };
}

export const services: Service[] = [
  {
    key: 'generalMedicine',
    slug: 'general-medicine',
    titleKey: 'generalMedicine.title',
    descriptionKey: 'generalMedicine.description',
    price: {
      from: '150',
      currency: 'AED',
    },
  },
  {
    key: 'pediatrics',
    slug: 'pediatrics',
    titleKey: 'pediatrics.title',
    descriptionKey: 'pediatrics.description',
    price: {
      from: '200',
      currency: 'AED',
    },
  },
  {
    key: 'dermatology',
    slug: 'dermatology',
    titleKey: 'dermatology.title',
    descriptionKey: 'dermatology.description',
    price: {
      from: '300',
      currency: 'AED',
    },
  },
  {
    key: 'orthopedics',
    slug: 'orthopedics',
    titleKey: 'orthopedics.title',
    descriptionKey: 'orthopedics.description',
    price: {
      from: '250',
      currency: 'AED',
    },
  },
  {
    key: 'dentalCare',
    slug: 'dental-care',
    titleKey: 'dentalCare.title',
    descriptionKey: 'dentalCare.description',
    price: {
      from: '200',
      currency: 'AED',
    },
  },
  {
    key: 'physiotherapy',
    slug: 'physiotherapy',
    titleKey: 'physiotherapy.title',
    descriptionKey: 'physiotherapy.description',
    price: {
      from: '180',
      currency: 'AED',
    },
  },
  {
    key: 'laserHairRemoval',
    slug: 'laser-hair-removal',
    titleKey: 'laserHairRemoval.title',
    descriptionKey: 'laserHairRemoval.description',
    price: {
      from: '400',
      currency: 'AED',
    },
  },
  {
    key: 'cuppingTherapy',
    slug: 'cupping-therapy',
    titleKey: 'cuppingTherapy.title',
    descriptionKey: 'cuppingTherapy.description',
    price: {
      from: '150',
      currency: 'AED',
    },
  },
  {
    key: 'skinCare',
    slug: 'skin-care',
    titleKey: 'skinCare.title',
    descriptionKey: 'skinCare.description',
    price: {
      from: '250',
      currency: 'AED',
    },
  },
];

export function getServices(): Service[] {
  return services;
}

export function getServiceBySlug(
  slug: string | undefined
): Service | undefined {
  if (!slug) {
    return undefined;
  }
  return services.find(service => service.slug === slug);
}
