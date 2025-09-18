'use client';

import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  duration?: number;
}

export function LoadingScreen({
  onLoadingComplete,
  duration = 1500,
}: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev >= 100 ? 100 : prev + 2;
        // Update CSS custom property for progress width
        document.documentElement.style.setProperty(
          '--progress-width',
          `${newProgress}%`
        );
        if (newProgress >= 100) {
          clearInterval(progressInterval);
        }
        return newProgress;
      });
    }, 50);

    // Hide loading screen after duration
    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete?.();
    }, duration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
      document.documentElement.style.removeProperty('--progress-width');
    };
  }, [duration, onLoadingComplete]);

  useEffect(() => {
    // Simulate logo loading
    const logoTimer = setTimeout(() => {
      setLogoLoaded(true);
    }, 500);

    return () => clearTimeout(logoTimer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-brand-50 dark:from-gray-900 dark:via-gray-800 dark:to-brand-900'>
      {/* Background Pattern */}
      <div className='pattern-dots absolute inset-0 opacity-10' />
      <div className='pattern-medical absolute inset-0 opacity-5' />

      {/* Loading Content */}
      <div className='relative z-10 text-center'>
        {/* Logo Container */}
        <div
          className={`mb-8 transform transition-all duration-1000 ${logoLoaded ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
        >
          <div className='relative mx-auto mb-6 h-32 w-32'>
            {/* Logo Background Circle */}
            <div className='absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-brand-500 to-brand-600 shadow-2xl' />

            {/* Al Weam Logo Representation */}
            <div className='absolute inset-0 flex items-center justify-center rounded-full border-4 border-white dark:border-gray-700'>
              <div className='text-center'>
                {/* Medical Symbol */}
                <div className='mx-auto mb-2 flex h-16 w-16 items-center justify-center'>
                  <svg
                    className='h-12 w-12 text-white'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h3l-4 4-4-4h3V7z' />
                  </svg>
                </div>

                {/* Brand Text */}
                <div className='text-xs font-bold tracking-wide text-white'>
                  AL WEAM
                </div>
              </div>
            </div>

            {/* Rotating Ring */}
            <div className='absolute inset-0 animate-spin rounded-full border-2 border-b-yellow-400 border-l-transparent border-r-transparent border-t-yellow-400' />
          </div>

          {/* Brand Name */}
          <h1 className='mb-2 bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-2xl font-bold text-transparent md:text-3xl'>
            مركز الوئام الطبي للصحة الشاملة
          </h1>
          <h2 className='mb-1 text-xl font-semibold text-brand-600 dark:text-brand-400 md:text-2xl'>
            Al Weam Well-Being Medical Centre
          </h2>
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            Specialized Medical Excellence
          </p>
        </div>

        {/* Loading Progress */}
        <div className='mx-auto w-64'>
          <div className='mb-2 flex items-center justify-between'>
            <span className='text-sm text-gray-600 dark:text-gray-400'>
              Loading
            </span>
            <span className='text-sm font-medium text-brand-600 dark:text-brand-400'>
              {progress}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className='h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700'>
            <div className='loading-progress h-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600' />
          </div>

          {/* Loading Dots */}
          <div className='mt-4 flex items-center justify-center space-x-2'>
            <div className='h-2 w-2 animate-bounce rounded-full bg-brand-500 [animation-delay:-0.3s]' />
            <div className='h-2 w-2 animate-bounce rounded-full bg-brand-500 [animation-delay:-0.15s]' />
            <div className='h-2 w-2 animate-bounce rounded-full bg-brand-500' />
          </div>
        </div>

        {/* Professional Badges */}
        <div className='mt-8 flex justify-center gap-6'>
          <div className='flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 backdrop-blur-sm dark:bg-gray-800/70'>
            <div className='h-2 w-2 rounded-full bg-emerald-500' />
            <span className='text-xs font-medium text-gray-700 dark:text-gray-300'>
              Licensed
            </span>
          </div>
          <div className='flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 backdrop-blur-sm dark:bg-gray-800/70'>
            <div className='h-2 w-2 rounded-full bg-blue-500' />
            <span className='text-xs font-medium text-gray-700 dark:text-gray-300'>
              Certified
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
