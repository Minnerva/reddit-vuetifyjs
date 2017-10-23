importScripts('workbox-sw.prod.v2.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "https://minnerwa.github.io/reddit-vuetifyjs/app.1b5e6de3c252c65e1cd0.js",
    "revision": "7859152088c65ea48e4d39c3df66fbf5"
  },
  {
    "url": "https://minnerwa.github.io/reddit-vuetifyjs/index.html",
    "revision": "d6c66c60f897610e885386e85fb9f547"
  },
  {
    "url": "https://minnerwa.github.io/reddit-vuetifyjs/style.css",
    "revision": "2602f593162d8dac5388936a094ca7c8"
  },
  {
    "url": "https://minnerwa.github.io/reddit-vuetifyjs/vendor.1b5e6de3c252c65e1cd0.js",
    "revision": "9e881cd72e47760559fd9b123561e909"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
