/* Contest dos Capitães — service worker (PWA)
 * Guarda a casca do app (HTML/ícones) para abrir offline.
 * Os dados da planilha (JSONP no Apps Script) são sempre buscados na rede;
 * quando não há internet, o app mostra o último estado salvo no aparelho (localStorage).
 * IMPORTANTE: a cada release do app, mude o CACHE abaixo (ex.: contest-v2.5)
 * para forçar a reinstalação do SW em todos os aparelhos.
 */
const CACHE = 'contest-v2.5';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './og-image.jpg',
  './favicon.svg',
  './versao.txt'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (e) => { if (e.data === 'SKIP_WAITING') self.skipWaiting(); });

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // JSONP da planilha: sempre rede
  e.respondWith(
    fetch(req)
      .then((res) => {
        const copia = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copia)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req).then((r) => r || caches.match('./index.html')))
  );
});
