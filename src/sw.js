importScripts('workbox-sw.prod.js')

const workboxSW = new WorkboxSW({ clientsClaim: true })

workboxSW.precache([])

workboxSW.router.registerRoute(
  'https://minnerwa.github.io/reddit-vuetifyjs/(.*)',
  workboxSW.strategies.networkFirst({networkTimeoutSeconds: 3})
)

workboxSW.router.registerNavigationRoute('index.html', {
  whitelist: [/./]
})

importScripts('https://unpkg.com/workbox-routing@0.0.2/build/importScripts/workbox-routing.dev.v0.0.2.js')

const router = new workbox.routing.Router()
const crossOriginRedditAPI = new workbox.routing.ExpressRoute({
  path: 'https://www.reddit.com/r/(.*)',
  handler: ({ event }) => {
    return fetch(event.request)
  }
})

router.registerRoutes({
  routes: [crossOriginRedditAPI]
})

self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', () => self.clients.claim())
