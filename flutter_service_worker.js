'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "810d0e82bf75e5451d064efec01f8bf1",
".git/config": "71336c9f3f3de3f42978ea1d2585acec",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "16449e50ad91bcf6c134ca71bc44fc6f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cd8236ff5e9502ab625cf7b7f9a094d7",
".git/logs/refs/heads/main": "cd8236ff5e9502ab625cf7b7f9a094d7",
".git/logs/refs/remotes/origin/HEAD": "98560f8133df4352b96b6eb4b4036a42",
".git/logs/refs/remotes/origin/main": "9e33b597c722b4620aff487f09538820",
".git/objects/1d/5d1fb833ee6c82adc5c6f1b354978198b51d8b": "c2ff87802c41678c3cb0435e526b0a2c",
".git/objects/24/a15699e0115c154d43a7a4c1a47d5395bdde3f": "9e571ffb496bf12cf0b03b8038454ef9",
".git/objects/3a/8fd01aa96bbbac8a2720c8a78fb5df59eb3aba": "11cd49468d48fd28bfc7bcfa92bcea88",
".git/objects/64/d62198b7dccbfdb8e89c7072029d69b41d0f0e": "857258d0c57826dfed8d7e46f36a24c7",
".git/objects/70/a43842c73a165d1a7916f5d296f55e6584796d": "f9974193897bfb2d8d13aa5a12eef706",
".git/objects/76/03a66a10560c43ce2da79c30953d82578de948": "4c005fd09b8e73128c0cf06fe8bb248d",
".git/objects/9c/d9e8d56c1cdaf4c7150e3a81040cb6895ebc19": "247d7fcdbe8dbfc37df4f0c23592c10f",
".git/objects/be/a14382248cf279425e73e42a2d1c185c5d06b4": "8b43ea542409a33cec4307954d080eef",
".git/objects/e9/6470047a46ecd2e0b70a382f4ef60605274f47": "4acea4ca2bb74ab8a7edf8dda575b69b",
".git/objects/f9/b46a35a4d836027ba61376ee377615dd6891e1": "4f37750528148ace3282a32d762032b9",
".git/objects/pack/pack-680fc2234ecdf71a4c3a1358ef0d7558bc06e421.idx": "d5ed53624e9b211442c6643f3be30957",
".git/objects/pack/pack-680fc2234ecdf71a4c3a1358ef0d7558bc06e421.pack": "79c9625418ee39cfdcb386b0a13cda22",
".git/objects/pack/pack-680fc2234ecdf71a4c3a1358ef0d7558bc06e421.rev": "2a0dc37958e70c343444bcbc0e547587",
".git/packed-refs": "2aaa37162499a8daddef3c87e21f3a67",
".git/refs/heads/main": "e171a7c48a59ca49f155cfa14c38e04b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "e171a7c48a59ca49f155cfa14c38e04b",
"assets/AssetManifest.bin": "b53535683d292535e1db00be7c94a905",
"assets/AssetManifest.bin.json": "c09d1e040a80bd0fbe0257375fbb2653",
"assets/AssetManifest.json": "f9b9d376c1bb494e1182d4e5c0a5af0d",
"assets/assets/canada_flag.json": "a03ba2cab5daf068bf5c62d3395fd524",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d75044d923bacce3e92c755954748a06",
"assets/NOTICES": "6d1ea18539a521510de690301bb31411",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "769d37cc249835974d8c05f1c61a46a7",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "ffe7b8adc5979c3e92644320796eed09",
"icons/Icon-192.png": "7f9d9dbaf60a1c35461fb81f6c341b1f",
"icons/Icon-512.png": "5b76d8aa8977d6f9efb9080209c76cfd",
"icons/Icon-maskable-192.png": "7f9d9dbaf60a1c35461fb81f6c341b1f",
"icons/Icon-maskable-512.png": "5b76d8aa8977d6f9efb9080209c76cfd",
"index.html": "91be1af5fb59153d18114d02ae88da6b",
"/": "91be1af5fb59153d18114d02ae88da6b",
"main.dart.js": "c1f9d187465804adc9420df24551c931",
"manifest.json": "64c2d3403f428f244c78ae235c443826",
"version.json": "3689dd86f56bef225e02aff83b518b89"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
