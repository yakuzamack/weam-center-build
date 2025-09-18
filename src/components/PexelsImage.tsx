'use client';

import { getOptimizedImageUrl } from '@/lib/pexels';
import Image from 'next/image';
import { useState } from 'react';

interface PexelsImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

export function PexelsImage({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  sizes,
  priority = false,
  quality = 85,
  fill = false,
  objectFit = 'cover',
}: PexelsImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Get optimized image URL from Pexels
  const optimizedSrc = getOptimizedImageUrl(src, 'large');
  const fallbackSrc = '/images/service-placeholder.jpg';

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  if (fill) {
    return (
      <div className={`relative ${className}`}>
        {isLoading && (
          <div className='pexels-loading absolute inset-0 animate-pulse' />
        )}
        <Image
          src={imageError ? fallbackSrc : optimizedSrc}
          alt={alt}
          fill
          style={{ objectFit }}
          sizes={sizes}
          priority={priority}
          quality={quality}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div
          className={`pexels-loading absolute inset-0 animate-pulse rounded-lg w-[${width}px] h-[${height}px]`}
        />
      )}
      <Image
        src={imageError ? fallbackSrc : optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        quality={quality}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className} object-${objectFit}`}
      />
    </div>
  );
}
