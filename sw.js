self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        'index.html',
        'index3.css',
        'src/todolist.js',
        'src/todolistitem.js',
        'src/builditem.js',
        'src/gallery/all2.png',
        'src/gallery/del2.png',
        'src/gallery/cross.png',
        'src/index.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request);
  );
});