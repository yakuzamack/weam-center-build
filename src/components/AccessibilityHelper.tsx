'use client';

import React, { useEffect } from 'react';

export function AccessibilityHelper() {
  useEffect(() => {
    // Skip to main content functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className =
      'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-600 text-white px-4 py-2 rounded-lg z-50';
    skipLink.style.position = 'absolute';
    skipLink.style.left = '-9999px';
    skipLink.style.top = 'auto';
    skipLink.style.width = '1px';
    skipLink.style.height = '1px';
    skipLink.style.overflow = 'hidden';

    document.body.insertBefore(skipLink, document.body.firstChild);

    // Focus management for modals and dropdowns
    const handleKeyDown = (event: KeyboardEvent) => {
      // Escape key handling
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }

      // Tab trapping for modals (if any)
      if (event.key === 'Tab') {
        const modal = document.querySelector('[role="dialog"]');
        if (modal) {
          const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[
            focusableElements.length - 1
          ] as HTMLElement;

          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement?.focus();
          } else if (
            !event.shiftKey &&
            document.activeElement === lastElement
          ) {
            event.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Announce page changes for screen readers
    const announcePageChange = (title: string) => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = `Page loaded: ${title}`;
      document.body.appendChild(announcement);

      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    // Announce when page title changes
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (
          mutation.type === 'childList' &&
          mutation.target === document.head
        ) {
          const titleElement = document.querySelector('title');
          if (titleElement) {
            announcePageChange(titleElement.textContent || '');
          }
        }
      });
    });

    observer.observe(document.head, { childList: true, subtree: true });

    // High contrast mode detection
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    const handleContrastChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    prefersHighContrast.addEventListener('change', handleContrastChange);
    if (prefersHighContrast.matches) {
      document.documentElement.classList.add('high-contrast');
    }

    // Reduced motion detection
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('reduce-motion');
      } else {
        document.documentElement.classList.remove('reduce-motion');
      }
    };

    prefersReducedMotion.addEventListener('change', handleMotionChange);
    if (prefersReducedMotion.matches) {
      document.documentElement.classList.add('reduce-motion');
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      observer.disconnect();
      prefersHighContrast.removeEventListener('change', handleContrastChange);
      prefersReducedMotion.removeEventListener('change', handleMotionChange);

      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);

  return null;
}

// Component for better focus management
export function FocusTrap({
  children,
  active,
}: {
  children: React.ReactNode;
  active: boolean;
}) {
  useEffect(() => {
    if (!active) {
      return;
    }

    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [active]);

  return <>{children}</>;
}

// Screen reader only text component
export function ScreenReaderOnly({ children }: { children: React.ReactNode }) {
  return <span className='sr-only'>{children}</span>;
}
