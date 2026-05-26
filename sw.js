const NAME = 'a1s-v1';
const FILES = [
  '/index.html',
  '/manifest.json',
  '/icon.svg',
  '/favicon.svg',
  '/apple-touch-icon.svg',
  '/og.svg',
  '/robots.txt',
  '/sitemap.xml'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(NAME).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== NAME).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.url.includes('api.github.com')) return;
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      if (res.ok && res.type === 'basic') {
        const clone = res.clone();
        caches.open(NAME).then(c => c.put(e.request, clone));
      }
      return res;
    }).catch(() => caches.match('/index.html')))
  );
});
