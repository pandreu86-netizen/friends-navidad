// Service worker mínimo para poder instalar la app. No guarda nada en caché.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>self.clients.claim());
self.addEventListener('fetch',()=>{});
