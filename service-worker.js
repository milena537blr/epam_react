importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.core.setCacheNameDetails({
  prefix: "app",
  suffix: "msiv1"
});

self.__precacheManifest = [
  "/main.js",
  {
    url: "/index.html"
  }
];

workbox.precaching.precacheAndRoute(self.__precacheManifest);

workbox.routing.registerRoute(
  new RegExp(/\w.+jpg/),
  new workbox.strategies.CacheFirst({
    cacheName: 'images-cache',
  })
);

workbox.routing.registerRoute(
  new RegExp('/search'),
  new workbox.strategies.CacheFirst({
    cacheName: 'search-cache',
  })
);

workbox.routing.registerRoute(
  new RegExp(/film\/\d+/),
  new workbox.strategies.CacheFirst({
    cacheName: 'film-cache',
  })
);
