/* Service worker mínimo para que Roomly se pueda instalar como app.
   No guarda nada en caché: siempre carga la versión más reciente desde internet. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
