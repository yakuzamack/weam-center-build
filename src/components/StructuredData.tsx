import { Service } from '@/data/services';

interface StructuredDataProps {
  type: 'organization' | 'services' | 'service';
  services?: Service[];
  service?: Service;
}

export function StructuredData({ type, services, service }: StructuredDataProps) {
  const getOrganizationData = () => ({
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'مركز الوئام للخدمات الطبية والتجميلية',
    alternateName: 'Al Weam Medical Center',
    description: 'مركز طبي متخصص في الخدمات الطبية والتجميلية في الإمارات العربية المتحدة',
    url: 'https://alweamcentre.com',
    logo: 'https://alweamcentre.com/images/logo-circular.svg',
    image: 'https://alweamcentre.com/images/hero-bg.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'الإمارات العربية المتحدة',
      addressCountry: 'AE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+971555373443',
      contactType: 'customer service',
      availableLanguage: ['ar', 'en'],
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '20:00',
    },
    medicalSpecialty: [
      'Dermatology',
      'Laser Therapy',
      'Cupping Therapy',
      'Physiotherapy',
      'Cosmetic Medicine'
    ],
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Credit Card', 'Insurance'],
    currenciesAccepted: 'AED',
  });

  const getServicesData = () => ({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'خدمات مركز الوئام الطبية والتجميلية',
    description: 'قائمة شاملة بالخدمات الطبية والتجميلية المتوفرة في مركز الوئام',
    numberOfItems: services?.length || 0,
    itemListElement: services?.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.title,
      description: service.description,
      url: `https://alweamcentre.com/services/${service.slug}`,
    })) || [],
  });

  const getServiceData = (service: Service) => ({
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: service.title,
    description: service.description,
    url: `https://alweamcentre.com/services/${service.slug}`,
    image: service.image ? `https://alweamcentre.com${service.image}` : 'https://alweamcentre.com/images/hero-bg.jpg',
    provider: {
      '@type': 'MedicalBusiness',
      name: 'مركز الوئام للخدمات الطبية والتجميلية',
      url: 'https://alweamcentre.com',
      telephone: '+971555373443',
    },
    ...(service.price && {
      priceRange: `من ${service.price.from} ${service.price.currency}`,
      priceCurrency: service.price.currency === 'درهم' ? 'AED' : 'AED',
    }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://alweamcentre.com/services/${service.slug}`,
    },
  });

  let structuredData;
  
  switch (type) {
    case 'organization':
      structuredData = getOrganizationData();
      break;
    case 'services':
      structuredData = getServicesData();
      break;
    case 'service':
      if (service) {
        structuredData = getServiceData(service);
      }
      break;
    default:
      return null;
  }

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}