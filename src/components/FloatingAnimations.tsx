'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  intensity?: number;
  className?: string;
}

export function FloatingElement({
  children,
  delay = 0,
  intensity = 10,
  className = '',
}: FloatingElementProps) {
  // Disable floating animation for service cards to prevent layout issues
  return <div className={className} style={{ animationDelay: `${delay}s` }}>{children}</div>;
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  speed?: number;
}

export function ParallaxImage({
  src,
  alt,
  width,
  height,
  className = '',
  speed = 0.5,
}: ParallaxImageProps) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty(
        '--parallax-offset',
        `${scrollY * speed}px`
      );
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.removeProperty('--parallax-offset');
    };
  }, [speed]);

  return (
    <div className={`parallax-image ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className='h-full w-full object-cover'
      />
    </div>
  );
}
