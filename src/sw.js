importScripts('workbox-sw.prod.js')

const workboxSW = new WorkboxSW({ clientsClaim: true })

workboxSW.precache([])

workboxSW.router.registerRoute(
  'https://minnerwa.github.io/reddit-vuetifyjs/(.*)',
  workboxSW.strategies.networkFirst({networkTimeoutSeconds: 3})
)
