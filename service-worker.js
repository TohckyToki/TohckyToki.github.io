/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9f7902535cb25abc4bd35b09174c308b"
  },
  {
    "url": "assets/css/0.styles.25b6214f.css",
    "revision": "75ad64264cc23eb9881232ff28b20a1f"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/59rLer6rqS.b6c0a960.gif",
    "revision": "b6c0a960898133975f77cb84d293b7fc"
  },
  {
    "url": "assets/img/9vmFdeAAGz.9e235bb4.png",
    "revision": "9e235bb411bd1c717d0ee7968a15ba56"
  },
  {
    "url": "assets/img/BEXljOWFOW.9f21643f.gif",
    "revision": "9f21643f924cabdf80481834194106c9"
  },
  {
    "url": "assets/img/LUmL6UNOkD.75ea6ca1.png",
    "revision": "75ea6ca10a5683a32d1cc90a876bafd4"
  },
  {
    "url": "assets/img/ogSxO2Einw.93d7237b.gif",
    "revision": "93d7237bff0eb44b1fbdd19c97616a8f"
  },
  {
    "url": "assets/img/Os572slhV7.626b3995.gif",
    "revision": "626b39954350ac30ce317c2d5598256c"
  },
  {
    "url": "assets/img/PYmeTYk7xV.f7c9b66d.gif",
    "revision": "f7c9b66dfb6e06af07c06e43ca89b12e"
  },
  {
    "url": "assets/img/qUQPSkVonu.e17cd81e.gif",
    "revision": "e17cd81e22f84f8862cbac6eac024e25"
  },
  {
    "url": "assets/img/rCTxtpwPd0.d649340d.gif",
    "revision": "d649340dd7a64c3ba03227ea3797ac81"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/WRq4rqowP7.01a93448.gif",
    "revision": "01a93448e6bf7b678770191faa5f5b09"
  },
  {
    "url": "assets/js/10.0357cbdf.js",
    "revision": "63ee45fd4baf3f17b9347c4afec5365d"
  },
  {
    "url": "assets/js/11.386799f8.js",
    "revision": "3163464f989390d9de75c00519d328e2"
  },
  {
    "url": "assets/js/12.5719c9f1.js",
    "revision": "7495380923e13a18070642a73b5fd072"
  },
  {
    "url": "assets/js/13.96771ca0.js",
    "revision": "cd4dcf993ad317e83655494cc3b30d0e"
  },
  {
    "url": "assets/js/14.471b2f74.js",
    "revision": "71a382a12e9348725a16ad292fab610b"
  },
  {
    "url": "assets/js/15.b7cf7a9f.js",
    "revision": "df1abf4149a2dd8ddcea568199fa92f6"
  },
  {
    "url": "assets/js/16.d132fd70.js",
    "revision": "6107e23fafb91d95796fbb92a36724fa"
  },
  {
    "url": "assets/js/17.36ae7156.js",
    "revision": "7ddec197ded1b7b628156dea1e7f98c5"
  },
  {
    "url": "assets/js/18.91d5400a.js",
    "revision": "b3739f007261560cf2991b2c39ec1bff"
  },
  {
    "url": "assets/js/3.83bc293b.js",
    "revision": "a97c07a5b84ec22d7e40b31a5da12436"
  },
  {
    "url": "assets/js/4.f77abc39.js",
    "revision": "bf093ba993cf94249a5f4d1bfdf6c1ec"
  },
  {
    "url": "assets/js/5.8a11fea5.js",
    "revision": "454c9e72a303f3efe9000362cd811fbe"
  },
  {
    "url": "assets/js/6.ee214829.js",
    "revision": "4158c8c9ec839b33960eebe9ece1ad31"
  },
  {
    "url": "assets/js/7.f4f8006c.js",
    "revision": "869a9e1b3f8c415b9e332fcc86940ad0"
  },
  {
    "url": "assets/js/8.bfcffa64.js",
    "revision": "465fb000fd7244f2173ccdb2035d0ebd"
  },
  {
    "url": "assets/js/9.1ccc1ec8.js",
    "revision": "5a998ee39ee4303c57c2ee40f5383352"
  },
  {
    "url": "assets/js/app.a7096e65.js",
    "revision": "af4352c6be0c8dc96c33c90945ca5861"
  },
  {
    "url": "assets/js/vuejs-paginate.5c71a65d.js",
    "revision": "615dde459c9b060b605128d50b1322c2"
  },
  {
    "url": "blogs/2019/11/27/build-personal-blog/index.html",
    "revision": "4461ef8ab4e697dc3f814cffbcdad6d7"
  },
  {
    "url": "blogs/index.html",
    "revision": "d8596fea87a33feee5b59c2b6bbf45fd"
  },
  {
    "url": "index.html",
    "revision": "615a8a0fa985519ec0f56f94e20b2dae"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "830caa75a37528a0b4c6cd11d3165751"
  },
  {
    "url": "tag/index.html",
    "revision": "280d19262ea46d006b86e7e274d468e1"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "bd932a5b1e389050db6de3b06e1aa654"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "def96a30e29473eb07ad7e07a5166c80"
  },
  {
    "url": "tools/2020/10/13/customize-folder-tool/index.html",
    "revision": "913354a270dd113b625f3aed79183a59"
  },
  {
    "url": "tools/index.html",
    "revision": "9de3871b95971618b84c8c0e64302644"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
