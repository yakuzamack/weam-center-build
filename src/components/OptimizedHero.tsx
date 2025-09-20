import Image from 'next/image';
import React from 'react';

interface SimpleHeroProps {
  children: React.ReactNode;
  imageType?: string;
  className?: string;
  enableParallax?: boolean;
}

export function OptimizedHero({
  children,
  className = '',
}: SimpleHeroProps) {
  const heroImage = '/images/hero-bg.jpg';

  return (
    <section className={`relative min-h-[60vh] overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image
          src={heroImage}
          alt='مركز الوئام الطبي'
          fill
          className='object-cover'
          unoptimized
        />
      </div>

      {/* Overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent' />

      {/* Content */}
      <div className='relative z-10 flex min-h-[60vh] items-center'>
        {children}
      </div>
    </section>
  );
}