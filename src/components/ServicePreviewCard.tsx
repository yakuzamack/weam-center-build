'use client';

import { Service } from '@/data/services';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ServicePreviewCardProps {
  service: Service;
}

// Featured service content for homepage previews (different from full descriptions)
const SERVICE_PREVIEWS: Record<
  string,
  { title: string; shortDescription: string; category: string; highlight: string }
> = {
  'laser-hair-removal': {
    title: 'إزالة الشعر بالليزر',
    shortDescription: 'تقنية متقدمة لإزالة الشعر نهائياً',
    category: 'علاجات الليزر',
    highlight: 'الأكثر طلباً',
  },
  dermatology: {
    title: 'الأمراض الجلدية',
    shortDescription: 'علاج شامل لجميع مشاكل البشرة',
    category: 'التخصصات الطبية',
    highlight: 'خبرة 15 سنة',
  },
  'cupping-therapy': {
    title: 'العلاج بالحجامة',
    shortDescription: 'طب بديل تقليدي للصحة العامة',
    category: 'الطب البديل',
    highlight: 'طبيعي 100%',
  },
  physiotherapy: {
    title: 'العلاج الطبيعي',
    shortDescription: 'إعادة تأهيل وعلاج متخصص',
    category: 'العلاج الطبيعي',
    highlight: 'نتائج سريعة',
  },
};

export function ServicePreviewCard({ service }: ServicePreviewCardProps) {
  const preview = SERVICE_PREVIEWS[service.slug] || {
    title: service.title,
    shortDescription: 'خدمة طبية متخصصة',
    category: 'خدمة طبية',
    highlight: 'متاح الآن',
  };

  return (
    <article className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 dark:from-gray-800 dark:to-gray-900'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5 bg-gradient-to-br from-blue-500 to-teal-500'></div>
      
      {/* Content */}
      <div className='relative z-10'>
        {/* Header */}
        <div className='mb-4 flex items-start justify-between'>
          <div>
            <span className='inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'>
              {preview.category}
            </span>
          </div>
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-teal-500 text-white shadow-lg'>
            <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3 className='mb-3 text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
          {preview.title}
        </h3>

        {/* Short Description */}
        <p className='mb-4 text-gray-600 dark:text-gray-300 leading-relaxed'>
          {preview.shortDescription}
        </p>

        {/* Highlight Badge */}
        <div className='mb-6'>
          <span className='inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'>
            <svg className='h-3 w-3' fill='currentColor' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
            </svg>
            {preview.highlight}
          </span>
        </div>

        {/* Action */}
        <Link
          href={`/services/${service.slug}`}
          className='inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors'
        >
          اعرف المزيد
          <svg className='h-4 w-4 transition-transform group-hover:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </Link>
      </div>

      {/* Hover Effect */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
    </article>
  );
}