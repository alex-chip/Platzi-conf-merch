const doCache = false
const CACHE_PLATZI_CONF_MERCH = 'pwa-cache'

self.addEventListener('activate', e => {
  const cacheWhiteList = [CACHE_PLATZI_CONF_MERCH]
  e.waitUntil(
    caches.keys()
      .then(keyList =>
        Promise.all(keyList.map(key => {
          if(!cacheWhiteList.includes(key))
            console.log(`Deleting cache: ${key}`)
            return caches.delete(key)
        }))
      )
  )
})

self.addEventListener('install', (e) => {
  if(doCache) {
    e.waitUntil(
      caches.open(CACHE_PLATZI_CONF_MERCH)
        .then((cache) => {
          fetch('manifest.json')
            .then(response => {
              response.json()
            })
            .then(assets => {
              const urlsToCache = [
                '/',
                assets['bundle.js']
              ]
              cache.addAll(urlsToCache)
              console.log('cached')
            })
        })
    )
  }
})

self.addEventListener('fetch', (e) => {
  if(doCache) {
    e.respondWith(
      caches.match(e.request)
        .then((response) => response || fetch(e.resquest))
    )
  }
})