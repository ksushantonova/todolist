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
        '/sw-test/all2.png',
        '/sw-test/del2.png',
        '/sw-test/cross.png',
        '/sw-test/index.js'
      ]);
    })
  );
});