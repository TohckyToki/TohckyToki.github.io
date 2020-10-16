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
    "revision": "7fcdfce6705b55ec5491e4ec2ad6707f"
  },
  {
    "url": "assets/css/0.styles.45432bd5.css",
    "revision": "79516da00e0bfe2c8f825166ce6bdfe9"
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
    "url": "assets/js/12.a371e5b6.js",
    "revision": "90c67d7fe1690f7d9736112172306189"
  },
  {
    "url": "assets/js/13.ff58fba8.js",
    "revision": "93df2cc6916048d12e8edd198b51032b"
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
    "url": "assets/js/17.afa0ef53.js",
    "revision": "fb5821a42f505c33a72216e04612d07b"
  },
  {
    "url": "assets/js/18.073c8b2c.js",
    "revision": "9903740133ee40e17402593f63dda7d6"
  },
  {
    "url": "assets/js/19.af3e51b3.js",
    "revision": "fc241c55fce15cad037239c1fb6ed527"
  },
  {
    "url": "assets/js/3.83bc293b.js",
    "revision": "a97c07a5b84ec22d7e40b31a5da12436"
  },
  {
    "url": "assets/js/4.33718ce3.js",
    "revision": "6f07549e504404c88f42137c5028043b"
  },
  {
    "url": "assets/js/5.32716d48.js",
    "revision": "d520b8b3b8808526a38f6ffaf76d35dd"
  },
  {
    "url": "assets/js/6.6a7eca2d.js",
    "revision": "5ae1f4b05741aedf3bf359f1dea01e51"
  },
  {
    "url": "assets/js/7.46354c16.js",
    "revision": "7a9378b993911026eebdbdc955f7c4f4"
  },
  {
    "url": "assets/js/8.bfcffa64.js",
    "revision": "465fb000fd7244f2173ccdb2035d0ebd"
  },
  {
    "url": "assets/js/9.bbe1726b.js",
    "revision": "3fecd81d8552ca2c8865b9d5c79aa726"
  },
  {
    "url": "assets/js/app.9a0b93d8.js",
    "revision": "f74ad1139887f413d8c990cd84f0873b"
  },
  {
    "url": "assets/js/vuejs-paginate.5c71a65d.js",
    "revision": "615dde459c9b060b605128d50b1322c2"
  },
  {
    "url": "blogs/2019/11/27/build-personal-blog/index.html",
    "revision": "b9aaae61280e59c58262087f1170f348"
  },
  {
    "url": "blogs/2020/09/11/use-tensorflow-in-jupyter-notebook/index.html",
    "revision": "64b1c4df31e477370daa671f6808d6a7"
  },
  {
    "url": "blogs/index.html",
    "revision": "0639e519eb86eea00b224de1f49bdf85"
  },
  {
    "url": "index.html",
    "revision": "bc34855ea3450b417ffa14856ddb49fc"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "95a750419933b1221a1007c77848957f"
  },
  {
    "url": "tag/index.html",
    "revision": "03a953066f5c570bb0cc2996492b8ef6"
  },
  {
    "url": "tag/Jupyter Notebook/index.html",
    "revision": "8128f247216463ba69443248c68fa9cb"
  },
  {
    "url": "tag/TensorFlow/index.html",
    "revision": "6bcac9cadbbc739f75d3935f92cc72e5"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "1b6c3adc98d27d14c38c37627b727d76"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "76839219a4dbb5d1d866c6a8fd10c1bb"
  },
  {
    "url": "tools/2020/10/13/customize-folder-tool/index.html",
    "revision": "e5a9aa85c29906d3d02160a5e9bd22b8"
  },
  {
    "url": "tools/index.html",
    "revision": "d27a3dfd2d845cb9ce0e5673216fd22b"
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
