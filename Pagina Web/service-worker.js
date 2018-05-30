var cacheName = 'weatherPWA-step-6-1';
var filesToCache = [];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});
var filesToCache = [
  '/',
  '/index.html',
  '/app.js',
  '/Diseño.html',
  '/Fotografia.html',
  '/Marketing.html',
  '/Web.html',
  '/img/1.png',
  '/img/2.png',
  '/img/4.png',
  '/img/5.png',
  '/img/B.png',
  '/img/BB.png',
  '/img/logo.png',
  '/img/team-1.png',
  '/img/team-2.png',
  '/img/team-3.png',
  '/img/tupro.png',
  '/css/estilo.css',
  '/lib/font-awesome/css/fontawesome-all.css',
  '/lib/bootstrap/css/bootstrap.min.css',
  '/css/estilo.css',
  '/lib/animate/animate.min.css',
  '/lib/owlcarousel/assets/owl.carousel.min.css',
  '/lib/lightbox/css/lightbox.min.css',
  '/img/intro-carousel/1.png',
  '/img/intro-carousel/2.png',
  '/img/intro-carousel/3.png',
  '/img/intro-carousel/4.png',
  '/img/intro-carousel/5.png',


];
self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});