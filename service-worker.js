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
    "revision": "885a7701c8e1ad5a25d8f340a744b26b"
  },
  {
    "url": "assets/css/0.styles.c9357cef.css",
    "revision": "3797c876516133666aad2406fddb3b07"
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
    "url": "assets/js/10.be956f8d.js",
    "revision": "2fc545fda1397bb6c15d98f9d95b7942"
  },
  {
    "url": "assets/js/11.cd256f71.js",
    "revision": "ccc5214192b22a05813e8f0848b77514"
  },
  {
    "url": "assets/js/12.3c51cb73.js",
    "revision": "1ea18cc2198ec60a35fd38da513d53fe"
  },
  {
    "url": "assets/js/13.de0adaa4.js",
    "revision": "70590b01d4611e628168045831abc498"
  },
  {
    "url": "assets/js/14.65cde270.js",
    "revision": "d8a4aff9ae9fa1333f1dc39594ef080b"
  },
  {
    "url": "assets/js/15.7f93828c.js",
    "revision": "a77fe31747fe44bbbe02541166fe3073"
  },
  {
    "url": "assets/js/16.6b6b4148.js",
    "revision": "dd513efa1a011d6a50fb68e33abff535"
  },
  {
    "url": "assets/js/17.0fb999fd.js",
    "revision": "5e2c79b5347aa708dd05ab943edadce7"
  },
  {
    "url": "assets/js/3.7643c16a.js",
    "revision": "e0acabfa0563e7cae779babd827c8c6f"
  },
  {
    "url": "assets/js/4.856fb560.js",
    "revision": "cfe054a3afead8ba3edadc54c80d5b6f"
  },
  {
    "url": "assets/js/5.9fb40fca.js",
    "revision": "e0e5be47c04dd4d3f9291a912d1da4be"
  },
  {
    "url": "assets/js/6.b00c5733.js",
    "revision": "ce7da80054b7272787cccf26dd9714f3"
  },
  {
    "url": "assets/js/7.6f543927.js",
    "revision": "f245ea30c31443953255e07ed86f4af9"
  },
  {
    "url": "assets/js/8.8385e0c5.js",
    "revision": "757220d14bba295ee8ea582b52d341a9"
  },
  {
    "url": "assets/js/9.a4760df3.js",
    "revision": "4bb719ca22e398bf3870316fe0944c92"
  },
  {
    "url": "assets/js/app.2854573d.js",
    "revision": "0c0100226e277b6840d6aa25da248ce2"
  },
  {
    "url": "assets/js/vuejs-paginate.636421e2.js",
    "revision": "64d60e10bbe438928174fa4a0a42e51f"
  },
  {
    "url": "blog/2019/11/27/build-personal-blog/index.html",
    "revision": "4204d25fa6d1ed8c673eea14699695bb"
  },
  {
    "url": "blogs/index.html",
    "revision": "725582785b0b7f961222567a82dd29f3"
  },
  {
    "url": "index.html",
    "revision": "0efbb3287c41aa14829f839051f70972"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "a79e0e88757026af730751b159e1ba53"
  },
  {
    "url": "tag/index.html",
    "revision": "cfeedcef6f674567541ef86a0ae2e2d5"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "dc5613e55a585a1f58fd6859673bfd84"
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
