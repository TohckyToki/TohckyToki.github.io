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
    "revision": "4291b7f053a3db5cb176fabb87bc05cf"
  },
  {
    "url": "assets/css/0.styles.5e5a283e.css",
    "revision": "8deb60256af01742c7d882fb9693c947"
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
    "url": "assets/js/10.ccb1cf97.js",
    "revision": "9c9413ea195eba99518846e93a6fac62"
  },
  {
    "url": "assets/js/11.45ba0bfa.js",
    "revision": "2c7c62f64a3d6d38ff89a1c9f63a5841"
  },
  {
    "url": "assets/js/12.2c74281b.js",
    "revision": "e08bb50badb55b2e81db99b9ef732368"
  },
  {
    "url": "assets/js/13.edc872bc.js",
    "revision": "3591b6a4493642d75166926c7dc2c035"
  },
  {
    "url": "assets/js/14.9398b07f.js",
    "revision": "b48f1e6f0065973dd9b2cbfa2b174586"
  },
  {
    "url": "assets/js/15.35d519f9.js",
    "revision": "6d2cd34581275674fede2da054c30129"
  },
  {
    "url": "assets/js/16.222595fe.js",
    "revision": "f73ef9082dba8d564165139aa56ade40"
  },
  {
    "url": "assets/js/17.b803f3fc.js",
    "revision": "d29f0145f52b53ca9714a91bc938807c"
  },
  {
    "url": "assets/js/18.9f712d41.js",
    "revision": "bd07dc6b3d3800017490ce4f2a7a1d04"
  },
  {
    "url": "assets/js/19.b7a07b9e.js",
    "revision": "d311d20907f533e9f8828d0a7089bfe7"
  },
  {
    "url": "assets/js/20.a7d56fda.js",
    "revision": "610752d9ef17196a81635813dea20f13"
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
    "url": "assets/js/5.e54e7083.js",
    "revision": "8677dded0eb80f50ca24691715b423a9"
  },
  {
    "url": "assets/js/6.d7127475.js",
    "revision": "7402c28ef33eb64342902c4be8a311ba"
  },
  {
    "url": "assets/js/7.2126f9be.js",
    "revision": "4a5a50bda9046b62348dde20b86899b7"
  },
  {
    "url": "assets/js/8.b5283a66.js",
    "revision": "bf46675d7a944a60f0434a2cad042a76"
  },
  {
    "url": "assets/js/9.3d35e9d4.js",
    "revision": "c123c004f677cd5b80bc8e4b27d425a4"
  },
  {
    "url": "assets/js/app.370f2735.js",
    "revision": "ed69cad2f3ad50303349a62400d0542c"
  },
  {
    "url": "assets/js/vuejs-paginate.9d500996.js",
    "revision": "b224022c796eed718130a44802fef11d"
  },
  {
    "url": "blogs/2019/11/27/build-personal-blog/index.html",
    "revision": "a57b3e546a5401b05a3afe9c88e6047e"
  },
  {
    "url": "blogs/2020/09/11/use-tensorflow-in-jupyter-notebook/index.html",
    "revision": "1941735684d06b6d12b9bb4f7292284a"
  },
  {
    "url": "blogs/index.html",
    "revision": "3766b8be07e6efb63640921a14f0866e"
  },
  {
    "url": "index.html",
    "revision": "8c207e55e3fb4cc390c5feaa3b7de970"
  },
  {
    "url": "logo.png",
    "revision": "d219fc61b81b9b01b33c2f84d9f52d58"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "77869f2633ca2b61229700712e182348"
  },
  {
    "url": "tag/index.html",
    "revision": "beab4657cdbb560a27301aa81970a028"
  },
  {
    "url": "tag/Jupyter Notebook/index.html",
    "revision": "65e25aaf16db4c414700cd3dd2a1ee7c"
  },
  {
    "url": "tag/TensorFlow/index.html",
    "revision": "0b7a0c235c62706f482e6e39452faf11"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "736a6572d955117edfb698f35c614bfd"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "31dd90cf266af58070d25413158108cd"
  },
  {
    "url": "timeline/index.html",
    "revision": "c3f66dab3147886f92a29fcf3e1742bc"
  },
  {
    "url": "tools/2020/10/13/customize-folder-tool/index.html",
    "revision": "088563ee1d210fbf4a87d68d7a78e29d"
  },
  {
    "url": "tools/index.html",
    "revision": "b3278776c8a047b9ef0b5fb7de400f55"
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
