const CACHE_NAME = "redoy-portfolio-v4";
const PRECACHE = [
  "/",
  "/offline.html",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png",
  "/favicon.svg",
  "/logo.png",
  "/robots.txt",
  "/sitemap.xml",
];

// On install: precache core shell assets and activate immediately
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

// On activate: remove old caches and claim clients
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Decide strategy per request type
function strategyFor(request) {
  const url = new URL(request.url);
  if (!url.origin.startsWith(self.location.origin)) return "network";
  if (request.destination === "document") return "network-first";
  if (request.destination === "script" || request.destination === "style" || url.pathname.startsWith("/_next/static/")) return "cache-first";
  if (request.destination === "image" || url.pathname.match(/\.(png|jpg|jpeg|svg|gif|webp|ico)$/)) return "cache-first";
  if (request.destination === "font") return "cache-first";
  return "network-first";
}

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const strat = strategyFor(event.request);

  event.respondWith(
    (() => {
      if (strat === "cache-first") {
        return caches.match(event.request).then((hit) => hit || fetch(event.request).then((res) => {
          if (res.ok) caches.open(CACHE_NAME).then((c) => c.put(event.request, res.clone()));
          return res;
        })).catch(() => caches.match("/offline.html"));
      }
      if (strat === "network-first") {
        return fetch(event.request).then((res) => {
          if (res.ok && event.request.url.startsWith(self.location.origin)) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(event.request, clone));
          }
          return res;
        }).catch(() => caches.match(event.request).then((r) => r || caches.match("/offline.html")));
      }
      return fetch(event.request);
    })()
  );
});