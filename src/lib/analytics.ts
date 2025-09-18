// Analytics and performance monitoring utilities

// Type definition for PerformanceEventTiming
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  cancelable: boolean;
}

interface AnalyticsEvent {
  name: string;
  properties?: Record<string, unknown>;
  timestamp?: number;
}

class Analytics {
  private isEnabled: boolean;
  private events: AnalyticsEvent[] = [];

  constructor() {
    this.isEnabled = process.env.NODE_ENV === 'production';
  }

  // Track custom events
  track(eventName: string, properties?: Record<string, unknown>) {
    if (!this.isEnabled) {
      // Analytics disabled in development
      return;
    }

    const event: AnalyticsEvent = {
      name: eventName,
      properties,
      timestamp: Date.now(),
    };

    this.events.push(event);

    // In production, you would send this to your analytics service
    // Example: gtag('event', eventName, properties);
  }

  // Track page views
  trackPageView(path: string, title?: string) {
    this.track('page_view', {
      path,
      title: title || document.title,
    });
  }

  // Track user interactions
  trackClick(element: string, location?: string) {
    this.track('click', {
      element,
      location,
    });
  }

  // Track form submissions
  trackFormSubmit(formName: string, success: boolean) {
    this.track('form_submit', {
      form_name: formName,
      success,
    });
  }

  // Track performance metrics
  trackPerformance(metric: string, value: number, unit: string = 'ms') {
    this.track('performance', {
      metric,
      value,
      unit,
    });
  }

  // Get all events (for debugging)
  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  // Clear events
  clearEvents() {
    this.events = [];
  }
}

export const analytics = new Analytics();

// Performance monitoring utilities
export function measurePerformance(name: string, fn: () => void) {
  const start = performance.now();
  fn();
  const end = performance.now();
  const duration = end - start;

  analytics.trackPerformance(name, duration);

  if (process.env.NODE_ENV === 'development') {
    // Performance logging disabled in production
  }
}

// Web Vitals tracking
export function trackWebVitals() {
  if (typeof window === 'undefined') {
    return;
  }

  // Track Largest Contentful Paint
  new PerformanceObserver(list => {
    for (const entry of list.getEntries()) {
      analytics.trackPerformance('lcp', entry.startTime);
    }
  }).observe({ entryTypes: ['largest-contentful-paint'] });

  // Track First Input Delay
  new PerformanceObserver(list => {
    for (const entry of list.getEntries()) {
      const fidEntry = entry as PerformanceEventTiming;
      const fid = fidEntry.processingStart - fidEntry.startTime;
      analytics.trackPerformance('fid', fid);
    }
  }).observe({ entryTypes: ['first-input'] });

  // Track Cumulative Layout Shift
  let clsValue = 0;
  new PerformanceObserver(list => {
    for (const entry of list.getEntries()) {
      const clsEntry = entry as PerformanceEntry & {
        value: number;
        hadRecentInput: boolean;
      };
      if (!clsEntry.hadRecentInput) {
        clsValue += clsEntry.value;
      }
    }
    analytics.trackPerformance('cls', clsValue);
  }).observe({ entryTypes: ['layout-shift'] });
}
