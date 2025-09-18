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
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8'>
        <div className='flex min-w-0 flex-1 items-center gap-3'>
          <Link
            href='/'
            className='flex min-w-0 items-center gap-3 transition-opacity hover:opacity-80'
          >
            <LogoImage
              src='/images/logo-circular.svg'
              alt={labels.brand}
              width={40}
              height={40}
              className='h-10 w-10 flex-shrink-0 rounded-lg object-contain'
            />
            <div className='flex min-w-0 flex-col'>
              <span className='truncate bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-lg font-bold leading-tight tracking-tight text-transparent'>
                {labels.brand}
              </span>
              <span className='truncate text-xs font-medium text-gray-600 dark:text-gray-400'>
                مركز طبي
              </span>
            </div>
          </Link>
        </div>

        <nav
          className='hidden items-center gap-6 text-sm font-medium lg:flex'
          role='navigation'
          aria-label='التنقل الرئيسي'
        >
          <Link
            className='whitespace-nowrap transition-colors hover:text-blue-600'
            href='/'
          >
            {labels.home}
          </Link>
          <Link
            className='whitespace-nowrap transition-colors hover:text-blue-600'
            href='/services'
          >
            {labels.services}
          </Link>
          <Link
            className='whitespace-nowrap transition-colors hover:text-blue-600'
            href='/contact'
          >
            {labels.contact}
          </Link>
        </nav>

        <div className='hidden flex-shrink-0 items-center gap-2 sm:flex'>
          <ThemeToggle />
          <Link
            className='medical-button-primary whitespace-nowrap text-xs md:text-sm'
            href='/contact'
          >
            {labels.appointment}
          </Link>
        </div>

        <button
          className='inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300 text-gray-700 transition-colors hover:border-blue-400 hover:text-blue-600 dark:border-gray-700 dark:text-gray-200 dark:hover:text-blue-400 sm:hidden'
          aria-label='فتح القائمة'
          aria-expanded={open}
          aria-controls='mobile-menu'
          onClick={() => setOpen(!open)}
        >
          <span className='sr-only'>القائمة</span>
          <div className='flex flex-col gap-1.5'>
            <span
              className={`h-0.5 w-5 rounded bg-current transition-all ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded bg-current transition-opacity ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded bg-current transition-all ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          id='mobile-menu'
          className='border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 sm:hidden'
        >
          <div className='space-y-1 px-4 py-4'>
            <Link
              href='/'
              className='block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-blue-400'
              onClick={() => setOpen(false)}
            >
              {labels.home}
            </Link>
            <Link
              href='/services'
              className='block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-blue-400'
              onClick={() => setOpen(false)}
            >
              {labels.services}
            </Link>
            <Link
              href='/contact'
              className='block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-blue-400'
              onClick={() => setOpen(false)}
            >
              {labels.contact}
            </Link>
            <div className='pt-4'>
              <Link
                href='/contact'
                className='medical-button-primary block w-full text-center'
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
