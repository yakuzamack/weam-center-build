import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';
import { LayoutWrapper } from './layout-wrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'مركز الوئام - خدمات طبية وتجميلية متميزة',
  description:
    'مركز الوئام للخدمات الطبية والتجميلية المتخصصة في الإمارات. نقدم علاجات الليزر والعناية بالبشرة والحجامة والعلاج الطبيعي بأحدث التقنيات.',
  keywords:
    'مركز طبي الإمارات, علاجات تجميلية, أمراض جلدية, إزالة الشعر بالليزر, حجامة, العناية بالبشرة, مركز الوئام',
  applicationName: 'مركز الوئام',
  authors: [{ name: 'مركز الوئام' }],
  creator: 'مركز الوئام',
  publisher: 'مركز الوئام',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.alweamenter.ae'),
  alternates: {
    canonical: 'https://www.alweamenter.ae/',
  },
  openGraph: {
    title: 'مركز الوئام - خدمات طبية وتجميلية متميزة في الإمارات',
    description:
      'مركز الوئام للخدمات الطبية والتجميلية المتخصصة في الإمارات. نقدم علاجات الليزر والعناية بالبشرة والحجامة والعلاج الطبيعي بأحدث التقنيات.',
    url: 'https://www.alweamenter.ae',
    siteName: 'مركز الوئام',
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'مركز الوئام للخدمات الطبية والتجميلية',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مركز الوئام - خدمات طبية وتجميلية متميزة في الإمارات',
    description:
      'مركز الوئام للخدمات الطبية والتجميلية المتخصصة في الإمارات. نقدم علاجات الليزر والعناية بالبشرة والحجامة والعلاج الطبيعي بأحدث التقنيات.',
    images: ['/images/hero-bg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ar' dir='rtl'>
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CYRXCZZFRK" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CYRXCZZFRK');
            `,
          }}
        />
        
        {/* Theme Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const shouldBeDark = theme === 'dark' || (!theme && prefersDark);
                if (shouldBeDark) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
