const staticFomeCerta = 'site-static-v2';
const dynamicFomeCerta = 'site-dynamic-v2';
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/css/contrast.css",
  "/css/materialize.css",
  "/css/materialize.min.css",
  "/js/app.js",
  "/js/init.js",
  "/js/materialize.js",
  "/js/materialize.min.js",
  "/js/acessibilidade.js",
  "/img/fomecerta.png",
  "/img/comidas.png",
  "/img/icons/icon-72x72.png",
  "/img/icons/icon-96x96.png",
  "/img/",
  "/img/hamb.png",
  "/img/mesacomida.jpg",
  "/fallback.html"
 
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticFomeCerta).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })

