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
    "revision": "2089453cd00cc6eb17579dd37f6a0a12"
  },
  {
    "url": "assets/css/0.styles.488669c1.css",
    "revision": "b844fd76daed37b50bd313ee3d9b1d6e"
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
    "url": "assets/img/menu.21781c91.svg",
    "revision": "21781c91684869ffe0c9dbff2d96b8e6"
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
    "url": "assets/js/10.c5578ee5.js",
    "revision": "7fea64e42253bf34bb8453840d679094"
  },
  {
    "url": "assets/js/11.f9bc4474.js",
    "revision": "ecda5f9f602d5287e5bcdd1ab1a5490a"
  },
  {
    "url": "assets/js/12.13901d76.js",
    "revision": "2f459bafd8218696b2fd31a281b0a59e"
  },
  {
    "url": "assets/js/13.71823b89.js",
    "revision": "810451e762a227cbacaae5f540ad3a69"
  },
  {
    "url": "assets/js/14.726ca56c.js",
    "revision": "380e62be7604f64cfdb9d009838af713"
  },
  {
    "url": "assets/js/15.a6d12727.js",
    "revision": "c889761f1dfeb32acdd0e9a1fa98dd7f"
  },
  {
    "url": "assets/js/16.256e1018.js",
    "revision": "4d2ae9407c8e98306bbc7b7898ced12d"
  },
  {
    "url": "assets/js/17.6ce04bfe.js",
    "revision": "8ea77ae3dd1dec5d3c93291187fb1417"
  },
  {
    "url": "assets/js/18.cb2dadb4.js",
    "revision": "204721b3f76de1bc517f69d62035c89b"
  },
  {
    "url": "assets/js/19.7b0079e1.js",
    "revision": "98117e3d16bba7d1c556c9854fcf6a52"
  },
  {
    "url": "assets/js/20.1a9745ba.js",
    "revision": "aca44d9d29ce9bd6802d5a618b19fbf8"
  },
  {
    "url": "assets/js/3.ca454383.js",
    "revision": "5e3ebd6b32aae272f45d4e716b6d9679"
  },
  {
    "url": "assets/js/4.17794028.js",
    "revision": "2c2e72af4f9e4ef140a37620b8425363"
  },
  {
    "url": "assets/js/5.0dc3b1be.js",
    "revision": "13432dc1166664d25e4c8dacbaae9a01"
  },
  {
    "url": "assets/js/6.05c5e9e5.js",
    "revision": "b5b2fcb6aa6c88a6b2645e88acec21fc"
  },
  {
    "url": "assets/js/7.09fddecd.js",
    "revision": "27581cc775179e9691d771e8d5b1bd27"
  },
  {
    "url": "assets/js/8.d33f1ff3.js",
    "revision": "7437227a1818407cb20a2a5d688b9ce3"
  },
  {
    "url": "assets/js/9.3977e358.js",
    "revision": "051a2b71d661900672ef94808e85afb2"
  },
  {
    "url": "assets/js/app.30dea530.js",
    "revision": "318d84a504c438bc85cfdf7c12eb408b"
  },
  {
    "url": "assets/js/vuejs-paginate.a140baa0.js",
    "revision": "73da905924b1dd143000c03ebc560bf7"
  },
  {
    "url": "blogs/2019/11/27/build-personal-blog/index.html",
    "revision": "4d08e04578f4a8b6900f741b9e60d723"
  },
  {
    "url": "blogs/2020/09/11/use-tensorflow-in-jupyter-notebook/index.html",
    "revision": "0e7157905393079526376a2bf27c8fd0"
  },
  {
    "url": "blogs/index.html",
    "revision": "c6d2f901be6db43a18d0412320907fcd"
  },
  {
    "url": "index.html",
    "revision": "d2fe76afaf2d83aa71f71d8d1a3cac23"
  },
  {
    "url": "logo.png",
    "revision": "d219fc61b81b9b01b33c2f84d9f52d58"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "a65db54439df6f74371dbeb7d50c96c7"
  },
  {
    "url": "tag/index.html",
    "revision": "7fabdcd6f28c162c75456ee1a4e3d052"
  },
  {
    "url": "tag/Jupyter Notebook/index.html",
    "revision": "45a77d1000d1aff8cf39fc97e33c0887"
  },
  {
    "url": "tag/TensorFlow/index.html",
    "revision": "1ad7dd8f5489921effe4b7950e413920"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "06d0e8aa5e22d15f0fd8d406a3be6661"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "4c786f876b14765a34a1b6ff8d5714ab"
  },
  {
    "url": "timeline/index.html",
    "revision": "68073c060639068cecb119cfbc12cb58"
  },
  {
    "url": "tools/2020/10/13/customize-folder-tool/index.html",
    "revision": "82380643086c5e1ec75d9b5e1338d9d9"
  },
  {
    "url": "tools/index.html",
    "revision": "275e14735a31cd1c9f7fbbd53eb356a7"
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
