// Service Worker for Al Weam Centre
const CACHE_NAME = 'alweam-centre-v1';
const STATIC_CACHE = 'alweam-static-v1';
const DYNAMIC_CACHE = 'alweam-dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/en',
  '/ar',
  '/images/hero-bg.jpg',
  '/images/logo.jpg',
  '/images/logo-horizontal.svg',
  '/favicon.ico',
  '/favicon.svg',
  '/apple-touch-icon.png',
];

// Install event - cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then(cache => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }

  event.respondWith(
    caches.match(request).then(cachedResponse => {
      // Return cached version if available
      if (cachedResponse) {
        return cachedResponse;
      }

      // Otherwise, fetch from network
      return fetch(request)
        .then(response => {
          // Don't cache non-successful responses
          if (
            !response ||
            response.status !== 200 ||
            response.type !== 'basic'
          ) {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          // Cache dynamic content
          caches.open(DYNAMIC_CACHE).then(cache => {
            cache.put(request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // Return offline page for navigation requests
          if (request.destination === 'document') {
            return caches.match('/offline.html');
          }
        });
    })
  );
});

// Background sync for form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form') {
    event.waitUntil(
      // Handle form submission when connection is restored
      console.log('Background sync: contact form')
    );
  }
});

// Push notifications (for future use)
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'New update from Al Weam Centre',
    icon: '/images/logo-circular.svg',
    badge: '/images/logo-circular.svg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: 'explore',
        title: 'View Services',
        icon: '/images/logo-circular.svg',
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/images/logo-circular.svg',
      },
    ],
  };

  event.waitUntil(
    self.registration.showNotification('Al Weam Centre', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(clients.openWindow('/en/services'));
  }
});
