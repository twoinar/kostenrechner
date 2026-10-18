// Hält den Rechner offline verfügbar. Bei jeder Änderung VERSION erhöhen,
// damit die Geräte die neue Fassung laden.
const VERSION = "kostenrechner-18";
const DATEIEN = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "symbol-192.png",
  "symbol-512.png",
  "schriften/schriften.css",
  "schriften/source-serif-4-latin-500-normal.woff2",
  "schriften/source-serif-4-latin-600-normal.woff2",
  "schriften/source-sans-3-latin-400-normal.woff2",
  "schriften/source-sans-3-latin-500-normal.woff2",
  "schriften/source-sans-3-latin-600-normal.woff2",
  "schriften/ibm-plex-mono-latin-400-normal.woff2",
  "schriften/ibm-plex-mono-latin-500-normal.woff2",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((namen) => Promise.all(namen.filter((n) => n !== VERSION).map((n) => caches.delete(n))))
      .then(() => self.clients.claim()),
  );
});

// Erst das Netz fragen (immer aktuelle Fassung, am Browser-Zwischenspeicher vorbei),
// ohne Netz aus dem Speicher
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || !e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(
    fetch(e.request.url, { cache: "no-cache" })
      .then((antwort) => {
        const kopie = antwort.clone();
        caches.open(VERSION).then((c) => c.put(e.request, kopie));
        return antwort;
      })
      .catch(() => caches.match(e.request).then((t) => t || caches.match("index.html"))),
  );
});
