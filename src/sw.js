importScripts('workbox-sw.prod.js')

const workboxSW = new WorkboxSW({ clientsClaim: true })

workboxSW.precache([])

workboxSW.router.registerRoute(
  'https://minnerwa.github.io/reddit-vuetifyjs/(.*)',
  workboxSW.strategies.networkFirst({networkTimeoutSeconds: 3})
)

importScripts('https://unpkg.com/workbox-routing@0.0.2/build/importScripts/workbox-routing.dev.v0.0.2.js');

const router = new workbox.routing.Router()
const crossOriginExpressRoute = new workboxSW.routing.ExpressRoute({
  path: 'https://www.reddit.com/r/(.*)',
  handler: ({ event }) => {
    return fetch(event.request)
  }
})
