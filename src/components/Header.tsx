'use client';
import Link from 'next/link';
import { useState } from 'react';
import { LogoImage } from './OptimizedImage';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  labels: {
    brand: string;
    home: string;
    services: string;
    appointment: string;
    contact: string;
  };
}

export function Header({ labels }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className='medical-header sticky top-0 z-50'>
      <div className='mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8' dir='rtl'>
        {/* Logo on the right side for Arabic */}
        <div className='flex min-w-0 flex-shrink-0 items-center gap-3'>
          <Link
            href='/'
            className='flex min-w-0 items-center gap-3 transition-opacity hover:opacity-80'
          >
            <LogoImage
              src='/images/logo-circular.svg'
              alt={labels.brand}
              className='h-12 w-12 flex-shrink-0 rounded-lg object-contain'
            />
            <div className='hidden min-w-0 flex-col sm:flex'>
              <span className='truncate bg-gradient-to-l from-blue-600 to-blue-400 bg-clip-text text-lg font-bold leading-tight tracking-tight text-transparent dark:from-blue-400 dark:to-blue-300'>
                {labels.brand}
              </span>
              <span className='truncate text-xs font-medium text-gray-600 dark:text-gray-400'>
                مركز طبي
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation in center - hidden on mobile */}
        <nav
          className='hidden flex-1 items-center justify-center gap-8 text-sm font-medium lg:flex'
          role='navigation'
          aria-label='التنقل الرئيسي'
        >
          <Link
            className='whitespace-nowrap text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
            href='/'
          >
            {labels.home}
          </Link>
          <Link
            className='whitespace-nowrap text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
            href='/services'
          >
            {labels.services}
          </Link>
          <Link
            className='whitespace-nowrap text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
            href='/contact'
          >
            {labels.contact}
          </Link>
        </nav>

        {/* Actions on the left side for Arabic */}
        <div className='hidden flex-shrink-0 items-center gap-3 sm:flex'>
          <ThemeToggle />
          <Link
            className='medical-button-primary whitespace-nowrap px-4 py-2 text-xs md:px-6 md:py-3 md:text-sm'
            href='/contact'
          >
            {labels.appointment}
          </Link>
        </div>

        {/* Mobile menu button - on the left for Arabic */}
        <button
          className='inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-gray-300 text-gray-700 transition-all duration-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-700 dark:text-gray-200 dark:hover:border-blue-400 dark:hover:bg-blue-900/20 dark:hover:text-blue-400 sm:hidden'
          aria-label='فتح القائمة'
          aria-expanded={open}
          aria-controls='mobile-menu'
          onClick={() => setOpen(!open)}
        >
          <span className='sr-only'>القائمة</span>
          <div className='flex flex-col gap-1.5'>
            <span
              className={`h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu - RTL optimized */}
      {open && (
        <div
          id='mobile-menu'
          className='border-t border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-950 sm:hidden'
        >
          <div className='space-y-2 px-4 py-6' dir='rtl'>
            <Link
              href='/'
              className='block rounded-lg px-4 py-3 text-right text-base font-medium text-gray-700 transition-all hover:bg-blue-50 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-blue-900/20 dark:hover:text-blue-400'
              onClick={() => setOpen(false)}
            >
              {labels.home}
            </Link>
            <Link
              href='/services'
              className='block rounded-lg px-4 py-3 text-right text-base font-medium text-gray-700 transition-all hover:bg-blue-50 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-blue-900/20 dark:hover:text-blue-400'
              onClick={() => setOpen(false)}
            >
              {labels.services}
            </Link>
            <Link
              href='/contact'
              className='block rounded-lg px-4 py-3 text-right text-base font-medium text-gray-700 transition-all hover:bg-blue-50 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-blue-900/20 dark:hover:text-blue-400'
              onClick={() => setOpen(false)}
            >
              {labels.contact}
            </Link>
            
            {/* Theme toggle in mobile menu */}
            <div className='flex items-center justify-between rounded-lg px-4 py-3'>
              <span className='text-base font-medium text-gray-700 dark:text-gray-200'>الوضع المظلم</span>
              <ThemeToggle />
            </div>
            
            <div className='border-t border-gray-200 pt-4 dark:border-gray-700'>
              <Link
                href='/contact'
                className='medical-button-primary block w-full text-center py-3'
                onClick={() => setOpen(false)}
              >
                {labels.appointment}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
