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
    "revision": "24e951c19a8458f0bae53d06a757dce2"
  },
  {
    "url": "assets/css/0.styles.6ea7dd23.css",
    "revision": "8048e2f957419b044635ff266fcd5151"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7685a5cc.js",
    "revision": "0ab7af32bfca584cf2c83a133432333c"
  },
  {
    "url": "assets/js/11.d6c1c0c5.js",
    "revision": "9e4e37c68762e56d6fd4432cc6f2e6c0"
  },
  {
    "url": "assets/js/12.7b46c468.js",
    "revision": "ee39c2be2a936bda6031cc9ee938d00a"
  },
  {
    "url": "assets/js/13.030b2351.js",
    "revision": "7b7be8e7e9056b2891236d09838343d4"
  },
  {
    "url": "assets/js/14.cf2b193f.js",
    "revision": "95b4d140a2d6a05f78dcf019a7af1865"
  },
  {
    "url": "assets/js/15.4a0685ab.js",
    "revision": "1709249fbe6f58ae046d87c1fbb9059c"
  },
  {
    "url": "assets/js/16.58ed2158.js",
    "revision": "78ef67abea2702f32cca8514c8873f38"
  },
  {
    "url": "assets/js/3.5d3962fa.js",
    "revision": "5759602470982dc377834f97dd9ff5b2"
  },
  {
    "url": "assets/js/4.a3055746.js",
    "revision": "d849895b3173b1ea49ca88d06e6bc9ba"
  },
  {
    "url": "assets/js/5.3fdee170.js",
    "revision": "9348564a3b3a8ada0640eafd5cb3fbff"
  },
  {
    "url": "assets/js/6.44673a8a.js",
    "revision": "d91ab9d0c31dcc0883fbcd7a778df767"
  },
  {
    "url": "assets/js/7.8e3463b0.js",
    "revision": "46b4521b917e079662a443908df270e9"
  },
  {
    "url": "assets/js/8.b09b26e2.js",
    "revision": "bb323227fdc5e685670b067211a48e5e"
  },
  {
    "url": "assets/js/9.58a4b874.js",
    "revision": "f0b185af00f7f9cfe4ab621b2ebb25ae"
  },
  {
    "url": "assets/js/app.832019cc.js",
    "revision": "34535715cbb0cafcf497f121dc78d680"
  },
  {
    "url": "assets/js/vuejs-paginate.d1569ec8.js",
    "revision": "60baebd6e7e97b770ff17f56910a7e75"
  },
  {
    "url": "blog/2019/11/27/build-personal-blog/index.html",
    "revision": "ab87a789c24251c4b3e9154b25600a1c"
  },
  {
    "url": "blogs/index.html",
    "revision": "07322166d738077bac6f367448adc361"
  },
  {
    "url": "index.html",
    "revision": "39e673994a8473c507d9fbd70b691a0b"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "717fc7c77fc19d6892ecc86bec34b3e7"
  },
  {
    "url": "tag/index.html",
    "revision": "d548cc9a07601a91aacbedf4e3ecc157"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "a6d0cf25b6d2ccde3a01c97ee1634908"
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
