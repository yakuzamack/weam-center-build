'use client';

import { Service } from '@/data/services';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface FixedServiceCardProps {
  service: Service;
}

// Service content with proper Arabic content
const SERVICE_CONTENT: Record<string, { title: string; description: string; category: string }> = {
  'general-medicine': {
    title: 'طب عام',
    description: 'خدمات رعاية صحية أولية شاملة للبالغين والعائلات مع أطباء ذوي خبرة.',
    category: 'التخصصات الطبية',
  },
  pediatrics: {
    title: 'طب الأطفال',
    description: 'رعاية طبية متخصصة للرضع والأطفال والمراهقين بنهج ودود للأطفال.',
    category: 'التخصصات الطبية',
  },
  dermatology: {
    title: 'الأمراض الجلدية',
    description: 'علاج متخصص لجميع مشاكل البشرة والأمراض الجلدية بأحدث التقنيات.',
    category: 'التخصصات الطبية',
  },
  orthopedics: {
    title: 'جراحة العظام',
    description: 'علاج متخصص للعظام والمفاصل والعضلات بأحدث الطرق العلاجية.',
    category: 'التخصصات الطبية',
  },
  'dental-care': {
    title: 'طب الأسنان',
    description: 'خدمات رعاية الأسنان الشاملة تشمل العلاج الوقائي والتجميلي والترميمي.',
    category: 'التخصصات الطبية',
  },
  physiotherapy: {
    title: 'العلاج الطبيعي',
    description: 'خدمات العلاج الطبيعي المهنية لإعادة التأهيل وإدارة الألم وتحسين الحركة.',
    category: 'العلاج والتأهيل',
  },
  'laser-hair-removal': {
    title: 'إزالة الشعر بالليزر',
    description: 'إزالة دائمة للشعر غير المرغوب فيه باستخدام أحدث تقنيات الليزر.',
    category: 'العلاجات التجميلية',
  },
  'cupping-therapy': {
    title: 'العلاج بالحجامة',
    description: 'علاج الحجامة التقليدي للتخلص من السموم وتخفيف الألم وتحسين الدورة الدموية.',
    category: 'الطب البديل',
  },
  'skin-care': {
    title: 'العناية بالبشرة',
    description: 'علاجات جلدية شاملة لمختلف حالات البشرة والاهتمامات التجميلية.',
    category: 'العلاجات التجميلية',
  },
};

export function FixedServiceCard({ service }: FixedServiceCardProps) {
  const content = SERVICE_CONTENT[service.slug] || {
    title: service.title,
    description: service.description,
    category: 'خدمة طبية',
  };

  return (
    <div className="w-full h-full">
      <article 
        className="w-full h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        style={{ 
          display: 'flex', 
          flexDirection: 'column',
          minHeight: '500px'
        }}
      >
        {/* Service Image */}
        <div 
          className="relative w-full overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-800"
          style={{ height: '192px' }}
        >
          {service.image ? (
            <Image
              src={service.image}
              alt={content.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div 
              className="w-full h-full items-center justify-center"
              style={{ display: 'flex' }}
            >
              <div className="rounded-full bg-blue-500 p-4 text-white shadow-lg">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          )}
          
          {/* Category Badge */}
          <div className="absolute right-3 top-3">
            <span className="rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-800 backdrop-blur-sm">
              {content.category}
            </span>
          </div>

          {/* Price Badge */}
          {service.price && (
            <div className="absolute left-3 top-3">
              <span className="rounded-full bg-green-500 px-2 py-1 text-xs font-bold text-white">
                من {service.price.from} {service.price.currency}
              </span>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div 
          className="w-full p-6"
          style={{ 
            display: 'flex',
            flexDirection: 'column',
            flex: '1'
          }}
        >
          {/* Service Title */}
          <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
            {content.title}
          </h3>

          {/* Service Description */}
          <p 
            className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300"
            style={{ flex: '1' }}
          >
            {content.description}
          </p>

          {/* Features */}
          <div className="mb-4 gap-2" style={{ display: 'flex', flexWrap: 'wrap' }}>
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              عالي الجودة
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              متخصص
            </span>
          </div>

          {/* Action Buttons */}
          <div className="gap-3" style={{ display: 'flex' }}>
            <Link
              href={`/services/${service.slug}`}
              className="rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              style={{ flex: '1' }}
            >
              اعرف المزيد
            </Link>
            <a
              href={`https://wa.me/971555373443?text=مرحبا، أرغب في الاستفسار عن خدمة: ${content.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-green-600 px-3 py-2 text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              title="تواصل عبر الواتساب"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}