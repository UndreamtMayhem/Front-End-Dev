// TODO 
// WORK OUT WHAts to be cached
// WHAT NEEDS SERVING

//   this._cleanImageCache();
// serve fotos

//https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage
//- [ ] Cache CSS



meetupApp.caching = {};

// add these to the object
var staticCacheName = 'meetup-static-v1';
var contentImgsCache = 'meetup-content-imgs';
var allCaches = [
    staticCacheName,
    contentImgsCache
];

cacheDomains = [
    '/skeleton',
    'js/geo.js',
    'bootstrap-4.6Alpha/dist/css/bootstrap.css',
    'https://fonts.googleapis.com/css?family=Allerta|Trocchi'
];

// uses service worker install
function addToSiteCache(event, cacheDomains) {
    event.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            return cache.addAll(cacheDomains);
        })
    );
}
// pass function in as param
self.addEventListener('install', function (event) {
    addToSiteCache(event, cacheDomains);
});


// delete all the old  
self.addEventListener('activate', function (event) {
    event.waitUntil(
      caches.keys().then(function (cacheNames) {
        return Promise.all(
          cacheNames.filter(function (cacheName) {
            return cacheName.startsWith('wittr-') &&
              !allCaches.includes(cacheName);
          }).map(function (cacheName) {
            return caches.delete(cacheName);
          })
        );
      })
    );
  });

// fetch from cache
self.addEventListener('fetch', function (event) {
    console.log("fetch");
    /*
    var requestUrl = new URL(event.request.url);
  
    if (requestUrl.origin === location.origin) {
      if (requestUrl.pathname === '/') {
        event.respondWith(caches.match('/skeleton'));
        return;
      }
      if (requestUrl.pathname.startsWith('/photos/')) {
        event.respondWith(servePhoto(event.request));
        return;
      }
      // TODO: respond to avatar urls by responding with
      // the return value of serveAvatar(event.request)
      if (requestUrl.pathname.startsWith('/avatars')) {
        event.respondWith(serveAvatar(event.request));
        return;
  
      }
    }
  
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      })
    );
    */
  });