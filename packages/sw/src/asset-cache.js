export const ASSET_CACHE_NAME = 'asset-cache'

// declare const self: ServiceWorkerGlobalScope

export const pause = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms)
  })

// An attempt to fix freezing UI on iOS
const CACHE_TIMEOUT = 3000

export async function respondWithCache(e /*: FetchEvent*/) {
  const cacheResult = await withTimeout(async () => {
    const cache = await self.caches.open(ASSET_CACHE_NAME)
    const cached = await cache.match(e.request)

    return { cache, cached }
  }, CACHE_TIMEOUT)

  const { cache, cached } = cacheResult || {}

  if (cache && cached) {
    if (cached.ok) {
      return cached
    } else {
      await cache.delete(e.request)
    }
  }

  const remote = await fetch(e.request)

  if (remote.ok && cache) {
    cache.put(e.request, remote.clone())
  }

  return remote
}

async function withTimeout(cb /*: () => Promise<T>*/, timeout /*: number*/) {
  try {
    return await Promise.race([pause(timeout).then(() => Promise.reject(new Error('TIMEOUT'))), cb()])
  } catch (err) {
    console.error(err)
    return undefined
  }
}

export function clearAssetCache() {
  return self.caches.delete(ASSET_CACHE_NAME)
}
