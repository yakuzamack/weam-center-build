'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  locale: string;
  labels: { brand: string; home: string; services: string; appointment: string; contact: string };
}

export function Header({ locale, labels }: HeaderProps) {
  const L = labels;
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 dark:border-gray-800/70 backdrop-blur-md bg-white/75 dark:bg-gray-950/70 supports-[backdrop-filter]:bg-white/55">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/logo-circular.svg"
              alt="Al Weam Centre Logo"
              width={40}
              height={40}
              className="w-10 h-10"
              unoptimized
            />
            <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-brand-600 to-brand-400 text-transparent bg-clip-text">
              {L.brand}
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href={`/${locale}`} className="hover:text-brand-600 transition-colors">
            {L.home}
          </Link>
          <Link href={`/${locale}/services`} className="hover:text-brand-600 transition-colors">
            {L.services}
          </Link>
          <Link href={`/${locale}/contact`} className="hover:text-brand-600 transition-colors">
            {L.contact}
          </Link>
        </nav>
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />
          <Link href={`/${locale}/services`} className="btn-ghost text-xs md:text-sm">
            {L.services}
          </Link>
          <Link href={`/${locale}/contact`} className="btn-primary text-xs md:text-sm shadow-glow">
            {L.appointment}
          </Link>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 rounded bg-current transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`}
            ></span>
            <span
              className={`h-0.5 w-5 rounded bg-current transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`}
            ></span>
            <span
              className={`h-0.5 w-5 rounded bg-current transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`}
            ></span>
          </div>
        </button>
      </div>
      {open && (
        <div className="sm:hidden border-t border-gray-200 dark:border-gray-800 px-4 pb-6 animate-scale-in origin-top">
          <nav className="flex flex-col gap-2 pt-4 text-sm">
            <Link
              href={`/${locale}`}
              className="px-3 py-2 rounded-lg hover:bg-brand-50 dark:hover:bg-brand-500/10"
              onClick={() => setOpen(false)}
            >
              {L.home}
            </Link>
            <Link
              href={`/${locale}/services`}
              className="px-3 py-2 rounded-lg hover:bg-brand-50 dark:hover:bg-brand-500/10"
              onClick={() => setOpen(false)}
            >
              {L.services}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="px-3 py-2 rounded-lg hover:bg-brand-50 dark:hover:bg-brand-500/10"
              onClick={() => setOpen(false)}
            >
              {L.contact}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="btn-primary mt-2 text-sm"
              onClick={() => setOpen(false)}
            >
              {L.appointment}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
