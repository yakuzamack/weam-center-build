'use client';

import { AccessibilityHelper } from '@/components/AccessibilityHelper';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { LoadingScreen } from '@/components/LoadingScreen';
import { PerformanceMonitor } from '@/components/PerformanceMonitor';
import React from 'react';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const navLabels = {
    brand: 'مركز الوئام',
    home: 'الرئيسية',
    services: 'الخدمات',
    appointment: 'احجز موعد',
    contact: 'تواصل معنا',
  };

  return (
    <>
      <AccessibilityHelper />
      <PerformanceMonitor />
      <ErrorBoundary>
        <LoadingScreen />
        <Header labels={navLabels} />
        <main id='main-content' className='min-h-[calc(100dvh-160px)]'>
          {children}
        </main>
        <Footer brand={navLabels.brand} />
      </ErrorBoundary>
    </>
  );
}
