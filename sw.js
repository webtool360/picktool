self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('picktool-store').then((cache) => {
      return cache.addAll([
        '/', 
        '/index.html', 
        '/manifest.json', 
        '/IMG_20260710_150257.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

