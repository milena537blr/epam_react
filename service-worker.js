importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

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

const networkFirstStrategy = workbox.strategies.networkFirst();

workbox.routing.registerRoute(
  new RegExp(/\w.+jpg/),
  networkFirstStrategy
);

workbox.routing.registerRoute(
  new RegExp("/search"),
  networkFirstStrategy
);

workbox.routing.registerRoute(
  new RegExp(/film\/\d+/),
  networkFirstStrategy
);
