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
    "revision": "7aac78cf596b8bb1195eacb9e11be813"
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
    "url": "assets/js/app.99eadec3.js",
    "revision": "166e8309e7b6eaed8933f6163df4ef5c"
  },
  {
    "url": "assets/js/vuejs-paginate.d961af2d.js",
    "revision": "67e2ad8ef3eaf4058c03564511cffd70"
  },
  {
    "url": "blogs/2019/11/27/build-personal-blog/index.html",
    "revision": "5a8075ac78056750fd45e09fbb0bed08"
  },
  {
    "url": "blogs/index.html",
    "revision": "cff9aa8366bf108d3326e8f17a9b4508"
  },
  {
    "url": "index.html",
    "revision": "baf7a7ee581fbde1326c6f3c9ecdb37c"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "ae20a30683780be4953fb2fe354ad423"
  },
  {
    "url": "tag/index.html",
    "revision": "86954e23034599ba5e207d0b5570a1c5"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "8edf9dcc537b48b247b075fcf76e0ccc"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "1679a123d2365b07f4481d2d21fc1b21"
  },
  {
    "url": "tools/2020/10/13/customize-folder-tool/index.html",
    "revision": "44a918a0028436382917f8aacfba41ce"
  },
  {
    "url": "tools/index.html",
    "revision": "68f6ae893ac726ee7b2d64aa26efa670"
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
