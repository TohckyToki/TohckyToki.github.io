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
    "revision": "91f4648d51990bf8497a9ab79592b898"
  },
  {
    "url": "assets/css/0.styles.e6b1d192.css",
    "revision": "ab14910653eca1450d8acbd280acd6ee"
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
    "url": "assets/js/10.fce4abac.js",
    "revision": "e2a478bba9056b88ed7af8acc72e8e1f"
  },
  {
    "url": "assets/js/11.345467d0.js",
    "revision": "548b5cec123a2962bafb127793f5fc52"
  },
  {
    "url": "assets/js/12.0b169c7a.js",
    "revision": "47520c496bda3d9de96d2a4b719a4e11"
  },
  {
    "url": "assets/js/13.ead5552f.js",
    "revision": "b31028bbb496ec892799248bd5fbfa7e"
  },
  {
    "url": "assets/js/14.a07c0372.js",
    "revision": "5e0972dc804f92e211803cee1753a1ed"
  },
  {
    "url": "assets/js/15.23cde53c.js",
    "revision": "01715d9f545b0ab05fa8ae0ed611e1b6"
  },
  {
    "url": "assets/js/16.053108dd.js",
    "revision": "ff35753f2c3c37ac7cac035f512b79de"
  },
  {
    "url": "assets/js/17.51893907.js",
    "revision": "a2b9d0d71f5f8147a07476908ec822e9"
  },
  {
    "url": "assets/js/18.2284c599.js",
    "revision": "73ff69f5e556a8a50e54d3f05bcb531f"
  },
  {
    "url": "assets/js/3.9e59a3fa.js",
    "revision": "7f29136ff5afa2d3b30cd32a931f8a6a"
  },
  {
    "url": "assets/js/4.7553cdbf.js",
    "revision": "18df63c7f1de285f494514609310548f"
  },
  {
    "url": "assets/js/5.7d5d45fb.js",
    "revision": "55aaf859deb8631b0583a33ecaf5d5f3"
  },
  {
    "url": "assets/js/6.36f3119e.js",
    "revision": "f70153f540ce3c60ed005bc9eb684bd0"
  },
  {
    "url": "assets/js/7.ce49a900.js",
    "revision": "7b0e70f47ea83464cd40a62facc100ee"
  },
  {
    "url": "assets/js/8.c28f9e9e.js",
    "revision": "c44ad03aec7390b40e211d835203ca07"
  },
  {
    "url": "assets/js/9.e80ca03a.js",
    "revision": "7171a0a82c726a3ee1a32bc2b1979244"
  },
  {
    "url": "assets/js/app.466be782.js",
    "revision": "8540b1fc32d55ab5d1a9e986a56f7236"
  },
  {
    "url": "assets/js/vuejs-paginate.d961af2d.js",
    "revision": "67e2ad8ef3eaf4058c03564511cffd70"
  },
  {
    "url": "blogs/2019/11/27/build-personal-blog/index.html",
    "revision": "b0ad1b1d4efa2d7fda48e95afbb92da6"
  },
  {
    "url": "blogs/index.html",
    "revision": "ba4c99d0c268736479c2c414e25e3019"
  },
  {
    "url": "index.html",
    "revision": "2da7495d5f14903f592cffb8478784b7"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "22269b644ce84ce1ea947e9eb0a1cdca"
  },
  {
    "url": "tag/index.html",
    "revision": "18b289cfb2d845b55c459a35231cd272"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "375facf8173d381dfc2ac183e57b525b"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "95f2ecd78d002c662655dafd19ae726a"
  },
  {
    "url": "tools/2020/10/13/customize-folder-tool/index.html",
    "revision": "2e6198722b80c980df7c522fbb02b450"
  },
  {
    "url": "tools/index.html",
    "revision": "2a8f9d9dd58b998119369de937a91618"
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
