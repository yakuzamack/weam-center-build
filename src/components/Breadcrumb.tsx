'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  locale: string;
}

export function Breadcrumb({ items, locale: _locale }: BreadcrumbProps) {
  // Note: pathname could be used for dynamic breadcrumb generation in the future
  usePathname();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `https://alweamcentre.com${item.href}` : undefined,
    })),
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Visual Breadcrumb */}
      <nav
        className='mb-8 flex flex-wrap gap-2 text-sm text-gray-500'
        aria-label='Breadcrumb'
      >
        {items.map((item, index) => (
          <div key={index} className='flex items-center gap-2'>
            {index > 0 && (
              <span className='text-gray-400' aria-hidden='true'>
                /
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className='text-brand-600 transition-colors hover:text-brand-700 hover:underline'
              >
                {item.label}
              </Link>
            ) : (
              <span className='font-medium text-gray-700 dark:text-gray-300'>
                {item.label}
              </span>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
