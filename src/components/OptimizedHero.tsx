'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface OptimizedHeroProps {
  children: React.ReactNode;
  imageType?:
    | 'medical'
    | 'wellness'
    | 'healthcare'
    | 'dental'
    | 'massage'
    | 'physio';
  className?: string;
  enableParallax?: boolean;
}

const HERO_IMAGES = {
  medical: '/images/hero-bg.jpg',
  wellness: '/images/hero-bg23.jpg',
  healthcare: '/images/hero-bg.jpg',
  dental: '/images/dental-services-bg.jpg',
  massage: '/images/massage-services-bg.jpg',
  physio: '/images/physio-services-bg.jpg',
};

export function OptimizedHero({
  children,
  imageType = 'medical',
  className = '',
  enableParallax = true,
}: OptimizedHeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroImage = HERO_IMAGES[imageType];

  return (
    <section
      className={`relative min-h-[60vh] overflow-hidden ${enableParallax ? 'parallax' : ''} ${className}`}
    >
      {/* Background Image with Next.js Image optimization */}
      <div className='absolute inset-0'>
        <Image
          src={heroImage}
          alt='Medical and wellness services background'
          fill
          priority
          quality={85}
          sizes='100vw'
          className={`object-cover transition-opacity duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className='absolute inset-0 animate-pulse bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900' />
        )}
      </div>

      {/* Enhanced overlay with gradient and patterns */}
      <div className='absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent' />
      <div className='absolute inset-0 bg-gradient-to-t from-brand-900/90 via-transparent to-transparent' />

      {/* Animated pattern overlay */}
      <div className='pattern-dots absolute inset-0 animate-pulse opacity-20' />
      <div className='pattern-waves absolute inset-0 opacity-10' />

      {/* Content with enhanced styling */}
      <div className='relative z-10 flex min-h-[60vh] items-center'>
        {children}
      </div>
    </section>
  );
}
