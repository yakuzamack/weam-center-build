'use client';

import { Service } from '@/data/services';
import { tn } from '@/lib/i18n';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ServiceCardProps {
  service: Service;
  locale: string;
  imageUrl?: string;
}

export function ServiceCard({ service, locale, imageUrl }: ServiceCardProps) {
  const t = tn(locale, 'services');
  const [imageError, setImageError] = useState(false);

  // Use a default medical/service placeholder image
  const defaultImage = `/images/service-placeholder.jpg`;
  const imageSrc = imageUrl || defaultImage;

  // Generate a unique gradient based on service name for better visual variety
  const getServiceGradient = (slug: string) => {
    const gradients = {
      'dermatology-beauty': 'from-pink-400 via-rose-400 to-red-400',
      'laser-hair-removal': 'from-purple-400 via-violet-400 to-indigo-400',
      'cupping-hijama': 'from-emerald-400 via-teal-400 to-cyan-400',
      'skin-cleansing': 'from-blue-400 via-sky-400 to-indigo-400',
    };
    return gradients[slug as keyof typeof gradients] || 'from-gray-400 via-gray-500 to-gray-600';
  };

  // Get service icon based on the service type
  const getServiceIcon = (slug: string) => {
    const icons = {
      'dermatology-beauty': (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      'laser-hair-removal': (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      'cupping-hijama': (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      'skin-cleansing': (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    };
    return (
      icons[slug as keyof typeof icons] || (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      )
    );
  };

  return (
    <div className="service-card group">
      <div className="service-card-pattern"></div>

      <div className="service-image-container">
        {!imageError ? (
          <Image
            src={imageSrc}
            alt={t(service.titleKey)}
            width={400}
            height={300}
            className="service-image"
            unoptimized
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            className={`service-image-placeholder bg-gradient-to-br ${getServiceGradient(service.slug)} flex items-center justify-center`}
          >
            <div className="text-white opacity-80">{getServiceIcon(service.slug)}</div>
          </div>
        )}
        <div className="service-overlay">
          <div className="service-overlay-content">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="service-content">
        <div className="service-header">
          <h3 className="service-title">{t(service.titleKey)}</h3>
          {service.price && (
            <div className="service-price">
              <span className="price-label">من</span>
              <span className="price-value">{service.price.from}</span>
              <span className="price-currency">{service.price.currency}</span>
            </div>
          )}
        </div>

        <p className="service-description">{t(service.descriptionKey)}</p>

        <div className="service-features">
          <div className="feature-badge">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>عالي الجودة</span>
          </div>
          <div className="feature-badge">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>متخصص</span>
          </div>
        </div>

        <div className="service-actions">
          <Link href={`/${locale}/services/${service.slug}`} className="service-btn-primary">
            <span>عرض التفاصيل</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <a
            href="https://wa.me/971555373443"
            target="_blank"
            rel="noopener noreferrer"
            className="service-btn-secondary"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            <span>واتساب</span>
          </a>
        </div>
      </div>
    </div>
  );
}
