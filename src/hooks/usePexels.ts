'use client';

import { useEffect, useState } from 'react';

export function usePexelsBackground(imageUrl: string) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!imageUrl) {
      return;
    }

    const img = new Image();
    img.onload = () => {
      setIsLoaded(true);
      // Apply background image via CSS custom property
      document.documentElement.style.setProperty(
        '--pexels-bg-image',
        `url(${imageUrl})`
      );
    };
    img.onerror = () => {
      setIsLoaded(false);
    };
    img.src = imageUrl;

    return () => {
      document.documentElement.style.removeProperty('--pexels-bg-image');
    };
  }, [imageUrl]);

  return isLoaded;
}

export function useParallax(enableParallax: boolean = true) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!enableParallax) {
      return;
    }

    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
      document.documentElement.style.setProperty(
        '--parallax-y',
        `${newScrollY * 0.5}px`
      );
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.removeProperty('--parallax-y');
    };
  }, [enableParallax]);

  return scrollY;
}

export function useServiceImage(serviceSlug: string) {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!serviceSlug) {
      return;
    }

    setIsLoading(true);
    setHasError(false);

    // Import the function dynamically to avoid SSR issues
    import('../lib/pexels.js')
      .then(({ generateImageSetForService }) => {
        const url = generateImageSetForService(serviceSlug);
        setImageUrl(url);

        // Test if image loads
        const img = new Image();
        img.onload = () => {
          setIsLoading(false);
        };
        img.onerror = () => {
          setHasError(true);
          setIsLoading(false);
        };
        img.src = url;
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
      });
  }, [serviceSlug]);

  return { imageUrl, isLoading, hasError };
}
