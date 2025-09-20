export interface Service {
  key: string;
  slug: string;
  titleKey: string;
  descriptionKey: string;
  title: string;
  description: string;
  image: string;
  price?: {
    from: number;
    currency: string;
  };
}

export const services: Service[] = [
  {
    key: 'dermatologyBeauty',
    slug: 'dermatology-beauty',
    titleKey: 'dermatologyBeauty.title',
    descriptionKey: 'dermatologyBeauty.description',
    title: 'طب الجلدية والتجميل',
    description:
      'علاج شامل لجميع مشاكل البشرة والأمراض الجلدية باستخدام أحدث التقنيات الطبية',
    image: '/images/services/facial-treatments.jpg',
    price: {
      from: 300,
      currency: 'AED',
    },
  },
  {
    key: 'laserHairRemoval',
    slug: 'laser-hair-removal',
    titleKey: 'laserHairRemoval.title',
    descriptionKey: 'laserHairRemoval.description',
    title: 'إزالة الشعر بالليزر',
    description:
      'إزالة الشعر الآمنة والفعالة باستخدام أحدث تقنيات الليزر الطبي',
    image: '/images/services/laser-hair-removal.jpg',
    price: {
      from: 149,
      currency: 'SAR',
    },
  },
  {
    key: 'cuppingHijama',
    slug: 'cupping-hijama',
    titleKey: 'cuppingHijama.title',
    descriptionKey: 'cuppingHijama.description',
    title: 'الحجامة الطبية',
    description: 'علاج تقليدي فعال لتحسين الدورة الدموية وتخفيف الألم',
    image: '/images/services/massage.jpg',
    price: {
      from: 150,
      currency: 'AED',
    },
  },
  {
    key: 'skinCleansing',
    slug: 'skin-cleansing',
    titleKey: 'skinCleansing.title',
    descriptionKey: 'skinCleansing.description',
    title: 'تنظيف البشرة العميق',
    description: 'جلسات تنظيف عميق للبشرة لإزالة الشوائب وتجديد خلايا الجلد',
    image: '/images/services/facial-treatments.jpg',
    price: {
      from: 200,
      currency: 'AED',
    },
  },
  {
    key: 'physiotherapy',
    slug: 'physiotherapy',
    titleKey: 'physiotherapy.title',
    descriptionKey: 'physiotherapy.description',
    title: 'العلاج الطبيعي',
    description: 'برامج علاج طبيعي متخصصة لتحسين الحركة وتخفيف الألم',
    image: '/images/services/physio.jpg',
    price: {
      from: 180,
      currency: 'AED',
    },
  },
  {
    key: 'massage',
    slug: 'massage-therapy',
    titleKey: 'massage.title',
    descriptionKey: 'massage.description',
    title: 'العلاج بالتدليك',
    description: 'جلسات تدليك علاجي واسترخائي لتخفيف التوتر والألم',
    image: '/images/services/massage.jpg',
    price: {
      from: 200,
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
