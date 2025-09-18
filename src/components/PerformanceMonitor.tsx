'use client';

import { useEffect } from 'react';

// Type definition for PerformanceEventTiming (commented out as not currently used)
// interface PerformanceEventTiming extends PerformanceEntry {
//   processingStart: number;
//   processingEnd: number;
//   cancelable: boolean;
// }

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          // LCP monitoring - uncomment for debugging
          // console.log('LCP:', entry.startTime);
        }
        if (entry.entryType === 'first-input') {
          // FID monitoring - uncomment for debugging
          // const fidEntry = entry as PerformanceEventTiming;
          // console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
        }
        if (entry.entryType === 'layout-shift') {
          // CLS monitoring - uncomment for debugging
          // const clsEntry = entry as PerformanceEntry & { value: number };
          // console.log('CLS:', clsEntry.value);
        }
      }
    });

    observer.observe({
      entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'],
    });

    // Monitor resource loading
    const resourceObserver = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resource = entry as PerformanceResourceTiming;
          if (resource.duration > 1000) {
            // Only log in development
            if (process.env.NODE_ENV === 'development') {
              console.warn(
                'Slow resource:',
                resource.name,
                resource.duration + 'ms'
              );
            }
          }
        }
      }
    });

    resourceObserver.observe({ entryTypes: ['resource'] });

    return () => {
      observer.disconnect();
      resourceObserver.disconnect();
    };
  }, []);

  return null;
}

// Preload critical resources
export function ResourcePreloader() {
  useEffect(() => {
    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href =
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    fontPreload.as = 'style';
    document.head.appendChild(fontPreload);

    // Preload critical images
    const criticalImages = ['/images/logo-circular.svg', '/images/hero-bg.jpg'];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      document.head.appendChild(link);
    });

    return () => {
      // Cleanup is handled by browser
    };
  }, []);

  return null;
}
