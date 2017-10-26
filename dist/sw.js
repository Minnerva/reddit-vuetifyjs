importScripts('workbox-sw.prod.js')

const workboxSW = new WorkboxSW({ clientsClaim: true })

workboxSW.precache([
  {
    "url": "https://minnerwa.github.io/reddit-vuetifyjs/0f964a72f8fbdf9c8d4e0122b8effb40.woff",
    "revision": "0f964a72f8fbdf9c8d4e0122b8effb40"
  },
  {
    "url": "https://minnerwa.github.io/reddit-vuetifyjs/29f80b00a7b4641183f96f08be374697.ttf",
    "revision": "29f80b00a7b4641183f96f08be374697"
  },
  {
    "url": "https://minnerwa.github.io/reddit-vuetifyjs/681fa39a79c22f0035a0720e2b2bda3b.eot",
    "revision": "681fa39a79c22f0035a0720e2b2bda3b"
  },
  {
    "url": "https://minnerwa.github.io/reddit-vuetifyjs/74e6e6c3dcfca56767adabe83a510f2e.svg",
    "revision": "74e6e6c3dcfca56767adabe83a510f2e"
  },
  {
    "url": "https://minnerwa.github.io/reddit-vuetifyjs/app.73185903b2e0f80d5c4b.js",
    "revision": "f45cf14cf8d7580dad79b1170a59b53f"
  },
  {
    "url": "https://minnerwa.github.io/reddit-vuetifyjs/index.html",
    "revision": "d543a34f783835c5b93225668b5854ed"
  },
  {
    "url": "https://minnerwa.github.io/reddit-vuetifyjs/style.css",
    "revision": "2ea5f4721d7bab5e1c17d9e6b3d0e2b9"
  },
  {
    "url": "https://minnerwa.github.io/reddit-vuetifyjs/vendor.711626db86f7f4e18553.js",
    "revision": "92a209c79bc92ad03d5ce1b7178091e6"
  },
  {
    "url": "https://minnerwa.github.io/reddit-vuetifyjs/workbox-sw.prod.js",
    "revision": "e5f207838d7fd9c81835d5705a73cfa2"
  }
])

workboxSW.router.registerRoute(
  'https://minnerwa.github.io/reddit-vuetifyjs/(.*)',
  workboxSW.strategies.networkFirst({networkTimeoutSeconds: 3})
)

workboxSW.router.registerNavigationRoute('index.html', {
  whitelist: [/./]
})

importScripts('https://unpkg.com/workbox-routing@0.0.2/build/importScripts/workbox-routing.dev.v0.0.2.js');

const router = new workbox.routing.Router()
const crossOriginExpressRoute = new workbox.routing.ExpressRoute({
  path: 'https://www.reddit.com/r/(.*)',
  handler: ({ event }) => {
    return fetch(event.request)
  }
})

router.registerRoutes({
  routes: [crossOriginExpressRoute],
})

self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', () => self.clients.claim())
