console.log('aaa');

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/index3.css',
        '/sw-test/todolist.js',
        '/sw-test/todolistitem.js',
        '/sw-test/builditem.js',
        '/sw-test/gallery/all2.png',
        '/sw-test/gallery/del2.png',
        '/sw-test/gallery/cross.png',
        '/sw-test/gallery/index.js'
      ]);
    })
  );
});