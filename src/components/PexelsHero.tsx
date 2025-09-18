'use client';

import { useParallax, usePexelsBackground } from '@/hooks/usePexels';
import { MEDICAL_THEMED_IMAGES, getOptimizedImageUrl } from '@/lib/pexels';
import React from 'react';
import { HeroImage } from './OptimizedImage';

interface PexelsHeroProps {
  children: React.ReactNode;
  imageType?: 'medical' | 'wellness' | 'healthcare';
  className?: string;
  enableParallax?: boolean;
}

export function PexelsHero({
  children,
  imageType = 'medical',
  className = '',
  enableParallax = true,
}: PexelsHeroProps) {
  // Get optimized hero image
  const heroImage = getOptimizedImageUrl(
    MEDICAL_THEMED_IMAGES.hero[imageType],
    'large'
  );

  // Use custom hooks
  const imageLoaded = usePexelsBackground(heroImage);
  useParallax(enableParallax);

  return (
    <section
      className={`pexels-hero ${enableParallax ? 'parallax' : ''} ${className}`}
    >
      {/* Background Image */}
      <div className='absolute inset-0'>
        <HeroImage
          src={heroImage}
          alt='Medical and wellness services background'
          className='h-full w-full object-cover'
        />
      </div>

      {/* Enhanced overlay with gradient and patterns */}
      <div className='absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent' />
      <div className='absolute inset-0 bg-gradient-to-t from-brand-900/90 via-transparent to-transparent' />

      {/* Animated pattern overlay */}
      <div className='pattern-dots absolute inset-0 animate-pulse opacity-20' />
      <div className='pattern-waves absolute inset-0 opacity-10' />

      {/* Content with enhanced styling */}
      <div className='relative z-10'>{children}</div>

      {/* Loading placeholder */}
      {!imageLoaded && <div className='pexels-loading absolute inset-0' />}
    </section>
  );
}
