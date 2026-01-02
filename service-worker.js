self.addEventListener("install", e=>{
 e.waitUntil(
  caches.open("skillam-ai").then(cache=>{
   return cache.addAll(["index.html","manifest.json"]);
  })
 );
});

self.addEventListener("fetch", e=>{
 e.respondWith(
  caches.match(e.request).then(res=>{
   return res || fetch(e.request);
  })
 );
});
