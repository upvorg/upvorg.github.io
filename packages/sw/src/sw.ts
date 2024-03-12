// import { handlePush, handleNotificationClick, handleClientMessage } from './push-notification'
import { respondWithCache, pause, clearAssetCache, ASSET_CACHE_NAME } from './asset-cache'

declare const self: ServiceWorkerGlobalScope

const ACTIVATE_TIMEOUT = 3000

const ASSET_CACHE_PATTERN = /.+\.[0-9a-f]{8}\..*(js|css|woff2?|svg|png|jpg|jpeg|json|wasm)$/
const CDN_CACHE_PATTERN = /(.*cdnjs.cloudflare.com.*)|(.*fonts.googleapis.com.*)|(.*cdn-us.imgs.moe.*)/
// |(.*sinaimg.cn.*)|(.*alicdn.com.*)|(.*loli.net.*)|(.*pic.url.cn.*)|(.*tupianla.cc.*)

const STATIC_ASSETS = ['https://lib.baomitu.com/fonts/nanum-pen-script/nanum-pen-script-regular.woff2']

self.addEventListener('install', (e) => {
  // Activate worker immediately
  e.waitUntil(
    caches
      .open(ASSET_CACHE_NAME)
      .then(function (e) {
        return e.addAll(STATIC_ASSETS)
      })
      .then(function () {
        return self.skipWaiting()
      })
  )
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

self.addEventListener('fetch', (e: FetchEvent) => {
  const { url } = e.request

  if (
    url.startsWith('http') &&
    (STATIC_ASSETS.includes(url) || url.match(ASSET_CACHE_PATTERN) || url.match(CDN_CACHE_PATTERN))
  ) {
    e.respondWith(respondWithCache(e))
    // ...and `waitUntil()` to prevent the worker from being killed until the
    // cache is updated.
    // e.waitUntil(update(e.request))
    return true
  }

  return false
})

// self.addEventListener('push', handlePush)
// self.addEventListener('notificationclick', handleNotificationClick)
// self.addEventListener('message', handleClientMessage)
