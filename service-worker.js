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
    "revision": "b076b48ca72eea13edd905b6c62a06a3"
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
    "url": "assets/js/8.f37578a6.js",
    "revision": "645143402e5ac4926068bd0b70360c49"
  },
  {
    "url": "assets/js/9.3977e358.js",
    "revision": "051a2b71d661900672ef94808e85afb2"
  },
  {
    "url": "assets/js/app.57b556d5.js",
    "revision": "d85c91bcf7db1c2df08f01e0f93fd3f1"
  },
  {
    "url": "assets/js/vuejs-paginate.a140baa0.js",
    "revision": "73da905924b1dd143000c03ebc560bf7"
  },
  {
    "url": "blogs/2019/11/27/build-personal-blog/index.html",
    "revision": "acd97c8bc58bb9c7961db514144827e2"
  },
  {
    "url": "blogs/2020/09/11/use-tensorflow-in-jupyter-notebook/index.html",
    "revision": "4e8f2d7faafd750a74c7abed92308b40"
  },
  {
    "url": "blogs/index.html",
    "revision": "951e9678e55e35e1f143417a37e4f59b"
  },
  {
    "url": "index.html",
    "revision": "fc6f86affca1f73a70b0ea8c5d25d45c"
  },
  {
    "url": "logo.png",
    "revision": "d219fc61b81b9b01b33c2f84d9f52d58"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "c4db480a8cb2eb05e666186f1c6cbdb2"
  },
  {
    "url": "tag/index.html",
    "revision": "6e6ef6cbba7ee6923244504085afbbe3"
  },
  {
    "url": "tag/Jupyter Notebook/index.html",
    "revision": "a8d708a5f83ab800b6d972bfbda6c173"
  },
  {
    "url": "tag/TensorFlow/index.html",
    "revision": "61b31f242dfd994958a0ff199b44a502"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "3bbe7a6ddf45cffb268a65aa7f35b355"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "f325e7c0e6ed9a657f219bbfade13c0c"
  },
  {
    "url": "timeline/index.html",
    "revision": "00ecdae3e769f9d5a51c402e7fb6a77b"
  },
  {
    "url": "tools/2020/10/13/customize-folder-tool/index.html",
    "revision": "f5ee31406a30bb9abd9aa78ec70fd945"
  },
  {
    "url": "tools/index.html",
    "revision": "915d492a32fba0bb975de1c1516612b2"
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
