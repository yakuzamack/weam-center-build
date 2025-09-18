'use client';

import { Service } from '@/data/services';
import { useServiceImage } from '@/hooks/useServiceImage';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ImprovedServiceCardProps {
  service: Service;
}

// Arabic service content
const SERVICE_CONTENT: Record<
  string,
  { title: string; description: string; category: string }
> = {
  'general-medicine': {
    title: 'طب عام',
    description:
      'خدمات رعاية صحية أولية شاملة للبالغين والعائلات مع أطباء ذوي خبرة.',
    category: 'طب عام',
  },
  pediatrics: {
    title: 'طب الأطفال',
    description:
      'رعاية طبية متخصصة للرضع والأطفال والمراهقين بنهج ودود للأطفال.',
    category: 'طب الأطفال',
  },
  dermatology: {
    title: 'الأمراض الجلدية',
    description:
      'علاج متخصص لجميع مشاكل البشرة والأمراض الجلدية بأحدث التقنيات.',
    category: 'الأمراض الجلدية',
  },
  orthopedics: {
    title: 'جراحة العظام',
    description: 'علاج متخصص للعظام والمفاصل والعضلات بأحدث الطرق العلاجية.',
    category: 'جراحة العظام',
  },
  'dental-care': {
    title: 'طب الأسنان',
    description:
      'خدمات رعاية الأسنان الشاملة تشمل العلاج الوقائي والتجميلي والترميمي.',
    category: 'طب الأسنان',
  },
  physiotherapy: {
    title: 'العلاج الطبيعي',
    description:
      'خدمات العلاج الطبيعي المهنية لإعادة التأهيل وإدارة الألم وتحسين الحركة.',
    category: 'العلاج الطبيعي',
  },
  'laser-hair-removal': {
    title: 'إزالة الشعر بالليزر',
    description:
      'إزالة دائمة للشعر غير المرغوب فيه باستخدام أحدث تقنيات الليزر.',
    category: 'علاجات الليزر',
  },
  'cupping-therapy': {
    title: 'العلاج بالحجامة',
    description:
      'علاج الحجامة التقليدي للتخلص من السموم وتخفيف الألم وتحسين الدورة الدموية.',
    category: 'الطب البديل',
  },
  'skin-care': {
    title: 'العناية بالبشرة',
    description:
      'علاجات جلدية شاملة لمختلف حالات البشرة والاهتمامات التجميلية.',
    category: 'العناية بالبشرة',
  },
};

// Service icons mapping
const SERVICE_ICONS: Record<string, React.JSX.Element> = {
  'general-medicine': (
    <svg
      className='h-8 w-8'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
      />
    </svg>
  ),
  pediatrics: (
    <svg
      className='h-8 w-8'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'
      />
    </svg>
  ),
  dermatology: (
    <svg
      className='h-8 w-8'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
      />
    </svg>
  ),
  orthopedics: (
    <svg
      className='h-8 w-8'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
      />
    </svg>
  ),
  'dental-care': (
    <svg
      className='h-8 w-8'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
      />
    </svg>
  ),
  physiotherapy: (
    <svg
      className='h-8 w-8'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M13 10V3L4 14h7v7l9-11h-7z'
      />
    </svg>
  ),
  'laser-hair-removal': (
    <svg
      className='h-8 w-8'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
      />
    </svg>
  ),
  'cupping-therapy': (
    <svg
      className='h-8 w-8'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
      />
    </svg>
  ),
  'skin-care': (
    <svg
      className='h-8 w-8'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
      />
    </svg>
  ),
};

export function ImprovedServiceCard({ service }: ImprovedServiceCardProps) {
  const { imageUrl, isLoading, error } = useServiceImage(service.slug);
  const content =
    SERVICE_CONTENT[service.slug] || SERVICE_CONTENT['general-medicine'];
  const serviceIcon =
    SERVICE_ICONS[service.slug] || SERVICE_ICONS['general-medicine'];

  return (
    <article className='service-card group'>
      {/* Image Section */}
      <div className='relative h-48 overflow-hidden rounded-t-xl'>
        {!error && imageUrl ? (
          <Image
            src={imageUrl}
            alt={content.title}
            fill
            className={`object-cover transition-transform duration-700 group-hover:scale-110 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        ) : (
          <div className='service-card-icon flex h-full w-full items-center justify-center'>
            <div className='text-white'>{serviceIcon}</div>
          </div>
        )}

        {/* Loading placeholder */}
        {isLoading && !error && (
          <div className='absolute inset-0 animate-pulse bg-gray-200' />
        )}

        {/* Overlay with icon */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
          <div className='absolute bottom-4 right-4 text-white'>
            <div className='rounded-full bg-white/20 p-2 backdrop-blur-sm'>
              {serviceIcon}
            </div>
          </div>
        </div>

        {/* Price Badge */}
        {service.price && (
          <div className='absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-blue-600 backdrop-blur-sm'>
            {service.price.from} {service.price.currency}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className='flex h-64 flex-col p-6'>
        {/* Title */}
        <h3 className='service-card-title mb-3 line-clamp-2'>
          {content.title}
        </h3>

        {/* Category */}
        <p className='mb-2 text-sm font-medium text-teal-600'>
          {content.category}
        </p>

        {/* Description */}
        <p className='service-card-description mb-4 line-clamp-3 flex-grow'>
          {content.description}
        </p>

        {/* Features */}
        <div className='mb-4 flex flex-wrap gap-2'>
          <span className='inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700'>
            <svg className='h-3 w-3' fill='currentColor' viewBox='0 0 20 20'>
              <path
                fillRule='evenodd'
                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
            عالي الجودة
          </span>
          <span className='inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700'>
            <svg className='h-3 w-3' fill='currentColor' viewBox='0 0 20 20'>
              <path
                fillRule='evenodd'
                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
            متخصص
          </span>
        </div>

        {/* Action Buttons */}
        <div className='mt-auto flex gap-2'>
          <Link
            href={`/services/${service.slug}`}
            className='medical-button-primary flex-1 text-center'
          >
            التفاصيل
          </Link>
          <a
            href='https://wa.me/971555373443'
            target='_blank'
            rel='noopener noreferrer'
            className='medical-button-secondary px-4'
          >
            <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488' />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
