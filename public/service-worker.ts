/// <reference lib="webworker" />

const CACHE_NAME = 'your-app-cache-v1'
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  // Add other assets you want to cache
]

self.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache)
    }),
  )
})

self.addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request)
    }),
  )
})

export {}
