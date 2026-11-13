/* Retired service worker. The previous site used a cache-first worker that
   fell back to a stale /index.html. This file exists only to clean up clients
   that still have it registered: it clears every old cache, unregisters
   itself, and stops intercepting requests. The new hub never registers a
   service worker and needs no offline cache. */
self.addEventListener('install', function () { self.skipWaiting(); });

self.addEventListener('activate', function (event) {
  event.waitUntil((async function () {
    const keys = await caches.keys();
    await Promise.all(keys.map(function (key) { return caches.delete(key); }));
    await self.registration.unregister();
  })());
});
