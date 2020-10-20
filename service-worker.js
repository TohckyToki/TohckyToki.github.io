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
    "revision": "a6efd6c8e1cfa70d8640d7e6134d9dab"
  },
  {
    "url": "assets/css/0.styles.896d8fbc.css",
    "revision": "14e0b71c338a8cc0581674bba5b1e532"
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
    "url": "assets/js/10.cb52e6ea.js",
    "revision": "c6675d92d54e45d43c1a8c5f1d72e9da"
  },
  {
    "url": "assets/js/11.4d3f85ff.js",
    "revision": "71bb9378cf2878ebce06390409d97295"
  },
  {
    "url": "assets/js/12.ac465458.js",
    "revision": "ed0ec9a0c935117ac95359c9d1983f5f"
  },
  {
    "url": "assets/js/13.fffd98f9.js",
    "revision": "83f0108e8e9aaaa0371f658e1e196cfa"
  },
  {
    "url": "assets/js/14.9398b07f.js",
    "revision": "b48f1e6f0065973dd9b2cbfa2b174586"
  },
  {
    "url": "assets/js/15.21b5d077.js",
    "revision": "2d0a0b2054949ef3bb088cfc52ce6a8b"
  },
  {
    "url": "assets/js/16.39b6cc72.js",
    "revision": "4cb7acb7b5ae2876a9b2689b97a58068"
  },
  {
    "url": "assets/js/17.ae46c3cc.js",
    "revision": "675f1797ee7c4d4231fbd5f8382fa1fc"
  },
  {
    "url": "assets/js/18.43cc7b0d.js",
    "revision": "7c2f9c9177482775702bd4e3dea86a9f"
  },
  {
    "url": "assets/js/19.b1e3e0c2.js",
    "revision": "f29e38371aeecc418c4b8f1201520aae"
  },
  {
    "url": "assets/js/3.e57f4713.js",
    "revision": "d253d8135901bc79ccfcbc4dd4941eb3"
  },
  {
    "url": "assets/js/4.2f02993b.js",
    "revision": "0917b87cf977a270ecb85a9d68946d42"
  },
  {
    "url": "assets/js/5.e64ee912.js",
    "revision": "bff4e2ba55fc144f83de38d35e0107fc"
  },
  {
    "url": "assets/js/6.84a5402e.js",
    "revision": "2b340148550dd7b9feb29f0405ed9e50"
  },
  {
    "url": "assets/js/7.2126f9be.js",
    "revision": "4a5a50bda9046b62348dde20b86899b7"
  },
  {
    "url": "assets/js/8.aaa671cf.js",
    "revision": "c9e86705d8d71cf7f2b705afee25e9ca"
  },
  {
    "url": "assets/js/9.3d35e9d4.js",
    "revision": "c123c004f677cd5b80bc8e4b27d425a4"
  },
  {
    "url": "assets/js/app.a003b6ed.js",
    "revision": "0714e893c2dc59062588a0457e0787f1"
  },
  {
    "url": "assets/js/vuejs-paginate.9d500996.js",
    "revision": "b224022c796eed718130a44802fef11d"
  },
  {
    "url": "blogs/2019/11/27/build-personal-blog/index.html",
    "revision": "210a97eb1123dac16b87e43976601ae3"
  },
  {
    "url": "blogs/2020/09/11/use-tensorflow-in-jupyter-notebook/index.html",
    "revision": "c5bcbfebe65683dc73ffb40616f39e34"
  },
  {
    "url": "blogs/index.html",
    "revision": "7f605e3ce16838207507e628af231073"
  },
  {
    "url": "index.html",
    "revision": "c5fb5a945a9f369723ac0d07d90394d1"
  },
  {
    "url": "logo.png",
    "revision": "d219fc61b81b9b01b33c2f84d9f52d58"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "6a063b943f809a05dea5968b9cda19fd"
  },
  {
    "url": "tag/index.html",
    "revision": "56097049bc42f026fe0327a7dfa47843"
  },
  {
    "url": "tag/Jupyter Notebook/index.html",
    "revision": "527d9fa64079ceddc05378298304099c"
  },
  {
    "url": "tag/TensorFlow/index.html",
    "revision": "7650f70190cd00754bb2f7ae453b31d4"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "14544574a1a8d5b2654141372c1ca421"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "8eb11c9fbba76d2718990374834bc9fd"
  },
  {
    "url": "tools/2020/10/13/customize-folder-tool/index.html",
    "revision": "b703d7dba4c59bb4b95ee7c22f5ebff3"
  },
  {
    "url": "tools/index.html",
    "revision": "9fdbda739c4875ad30b1fa08307cd13b"
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
