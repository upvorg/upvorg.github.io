// import { handlePush, handleNotificationClick, handleClientMessage } from './push-notification'
import { respondWithCache, pause, clearAssetCache } from './asset-cache.js'

declare const self: ServiceWorkerGlobalScope

const ASSET_CACHE_PATTERN = /.+\.[0-9a-f]{8}\..*(js|css|woff2?|svg|png|jpg|jpeg|json|wasm)$/
const CDN_CACHE_PATTERN = /(.*cdnjs.cloudflare.com.*)|(.*fonts.googleapis.com.*)/
// |(.*sinaimg.cn.*)|(.*alicdn.com.*)|(.*loli.net.*)|(.*pic.url.cn.*)|(.*tupianla.cc.*)
const ACTIVATE_TIMEOUT = 3000

self.addEventListener('install', (e) => {
  // Activate worker immediately
  e.waitUntil(self.skipWaiting())
})

self.addEventListener('activate', (e) => {
  e.waitUntil(
    Promise.race([
      // An attempt to fix freezing UI on iOS
      pause(ACTIVATE_TIMEOUT),
      Promise.all([
        clearAssetCache(),
        // Become available to all pages
        self.clients.claim(),
      ]),
    ])
  )
})

self.addEventListener('fetch', (e /*: FetchEvent*/) => {
  const { url } = e.request

  if ((url.startsWith('http') && url.match(ASSET_CACHE_PATTERN)) || url.match(CDN_CACHE_PATTERN)) {
    e.respondWith(respondWithCache(e))
    return true
  }

  return false
})

// self.addEventListener('push', handlePush)
// self.addEventListener('notificationclick', handleNotificationClick)
// self.addEventListener('message', handleClientMessage)
