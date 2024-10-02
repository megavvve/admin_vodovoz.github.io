'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "893fb8766814ac0de7a929cdc943eec4",
".git/config": "6ea0d1fd7ae367131af1c1cc9276eae2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "79dfa3a24a8e6ffed74e25f23e1d0b81",
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
".git/index": "a5d2eb751351bd3b2b5729eef83e81fe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "08a3f2cb21c6537dd872119654e62b5c",
".git/logs/refs/heads/main": "08a3f2cb21c6537dd872119654e62b5c",
".git/logs/refs/remotes/origin/HEAD": "43cb0dc87f0664dd7d0f42460e7d1c74",
".git/logs/refs/remotes/origin/main": "a53abb3ab8bbd25d25e056ab5cbc3440",
".git/objects/03/828ae58990c473b40ea6eddb656cab280ad2ff": "5782a74832758101804fb671770549db",
".git/objects/12/91208ce56c9899773267ac96a2b049812d27b2": "1187d4715eba9833745d13916b07f392",
".git/objects/15/2206e7342e5f27daa0163fc4f91834f1b52638": "43c4ba161562d1517f00ab2f5831ebb7",
".git/objects/2d/987fa11af4e0cc1cff26a9f3aabd27e3182afa": "18a4389cf5d6bcf23aa36edd2230b17f",
".git/objects/42/a66dd2d03fd914625da5575bfa1906b2dd72ec": "ec4e72b8608712dccfd8acc176ada1c8",
".git/objects/5b/264c37af107f98cd925a720c1e54774ed30367": "2f9a31574abfde624f0c2f57b1ab4aa7",
".git/objects/64/9495487e8148bc5d982b9cce622a2ad6896d06": "bae62b33ef66a98da98b52d778816ae9",
".git/objects/69/601ae7e1b1de52f1142b6eb2bde79555305339": "a0f2b09c0ef6bbd891f83d7545db9a7c",
".git/objects/c4/c452b11afbb3cc930c7b493a55c9368bd264fe": "687c2711a136b5011d29a6cd61623fc3",
".git/objects/ce/505a14a4a58d7e7ffffc5dbc75c9e6b208cd02": "142cbd4a0502db3cd0078dcab280a3da",
".git/objects/df/45ce0ac3e5bc8f9e73204d2ecb388b618a2952": "9506fbdf76bf7287be190fab6a101560",
".git/objects/e2/72bc5a2f5d9d2521d253ccda99dcf705335d0b": "de0d820a65dfc7c704d0a8e438d587fe",
".git/objects/ef/aaa272c3e9e3c2f9dc836c3a96be51e51549ce": "5915d0d148cbb280ebf4f9e8c1a6a86f",
".git/objects/f8/a29aa1d3bf39c10515aababb84bcf7b9d06876": "4be5be4af1a02cd3b38d254e505113af",
".git/objects/pack/pack-1d0b53a5350006222e8d62506af388a681e7e58d.idx": "da7d42fcb6c686b5007ca38dac0ed60a",
".git/objects/pack/pack-1d0b53a5350006222e8d62506af388a681e7e58d.pack": "b078ba049ee14621d65d6aad2f2d2fa7",
".git/objects/pack/pack-1d0b53a5350006222e8d62506af388a681e7e58d.rev": "68e8b4dc1c9502fecb64fa820469378e",
".git/packed-refs": "95c9706220c9a6c0509e58e802a9b12b",
".git/refs/heads/main": "ea45873373638aac0526176107cb1b28",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "ea45873373638aac0526176107cb1b28",
"assets/AssetManifest.bin": "6fe3cd812e583472d7188ccaf1f64876",
"assets/AssetManifest.bin.json": "d933abfa644a4e4d5872a4588e097e8b",
"assets/AssetManifest.json": "c83b0fcec5e1e47936abd6369f4307fa",
"assets/assets/images/Icon512.png": "aa2d69c50b2d65ab0d401939506e7a91",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "368f52e4fbc9b181a6ca3c967018580a",
"assets/NOTICES": "22728b33adb7fa7976ca795d2ce59de8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "32cc31c7f950543ad75e035fcaeb2892",
"canvaskit/canvaskit.js.symbols": "bb7854ddbcaa2e58e5bdef66b58d4b47",
"canvaskit/canvaskit.wasm": "6134e7617dab3bf54500b0a2d94fe17a",
"canvaskit/chromium/canvaskit.js": "6a5bd08897043608cb8858ce71bcdd8a",
"canvaskit/chromium/canvaskit.js.symbols": "f23279209989f44e047062055effde63",
"canvaskit/chromium/canvaskit.wasm": "ad6f889daae572b3fd08afc483572ecd",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "dc16cade950cfed532b8c29e0044fe42",
"canvaskit/skwasm.wasm": "aff2178f40209a9841d8d1b47a6e6ec7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "5de281a37b2308e43846d3a0b545c921",
"flutter_bootstrap.js": "73d2980231709e57527ddb864da8ce9d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c0422aad73c9452e4e0af2d9846a185a",
"/": "c0422aad73c9452e4e0af2d9846a185a",
"main.dart.js": "b49cd0718f21cdd47156e7747032c681",
"manifest.json": "aa20a2d91578764a7fa309061b4412b8",
"version.json": "96d82a4dadd6749d0467cb1af211a7df"};
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
