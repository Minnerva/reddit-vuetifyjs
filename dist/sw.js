importScripts('workbox-sw.prod.js')

const workboxSW = new WorkboxSW({ clientsClaim: true })

workboxSW.precache([
  {
    "url": "https://minnerwa.github.io/reddit-vuetifyjs/app.6892ba7d963e10a7b83d.js",
    "revision": "972c070d7448ae66ff78f0b833f4f0c8"
  },
  {
    "url": "https://minnerwa.github.io/reddit-vuetifyjs/index.html",
    "revision": "0daa3059540c6cfd56ede85c13ee02b9"
  },
  {
    "url": "https://minnerwa.github.io/reddit-vuetifyjs/style.css",
    "revision": "2ea5f4721d7bab5e1c17d9e6b3d0e2b9"
  },
  {
    "url": "https://minnerwa.github.io/reddit-vuetifyjs/vendor.a8d44633f5d38dcb3f3d.js",
    "revision": "53ec90615fecb20ccc933dba169c8647"
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

// workboxSW.router.registerNavigationRoute('index.html', {
//   whitelist: [/./]
// })

// workboxSW.router.registerRoute(
//   /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
//   workboxSW.strategies.networkFirst()
// )

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
