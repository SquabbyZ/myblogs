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
    "revision": "ba1eb30a1fc09f23b37811b627f20e51"
  },
  {
    "url": "assets/css/0.styles.8d0ef34b.css",
    "revision": "d90a64c029c6c2ef07f34dfe206588e3"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.0a9eb53e.js",
    "revision": "e1eacfaf1ae1ba5d9d10c897d1332646"
  },
  {
    "url": "assets/js/10.1ff7a736.js",
    "revision": "8f016d187e085f5cd8be9a69c114fa14"
  },
  {
    "url": "assets/js/11.bbab5902.js",
    "revision": "1d2053c6f839e166db958745daf71697"
  },
  {
    "url": "assets/js/12.bcee234b.js",
    "revision": "c1923a351852d322e75c1714bbdd5fca"
  },
  {
    "url": "assets/js/13.eb8e4fb7.js",
    "revision": "c9a76da3a77397398af04061ddee1623"
  },
  {
    "url": "assets/js/14.0e76990a.js",
    "revision": "d7487270f5c09d0d5297a85b694ba5c5"
  },
  {
    "url": "assets/js/15.9dfdf3fe.js",
    "revision": "f34382302d5b73e460109f46aa9c8501"
  },
  {
    "url": "assets/js/16.0eed5aba.js",
    "revision": "d91f2143cc36882a3b347540010c8107"
  },
  {
    "url": "assets/js/17.f999c2c2.js",
    "revision": "783b0c3c795ebebdd0d70fda18e93ebb"
  },
  {
    "url": "assets/js/18.5d73a34b.js",
    "revision": "3341d034cb8c0ef04a177588b7c158ed"
  },
  {
    "url": "assets/js/19.f279e581.js",
    "revision": "5abb2e2d61deeb1632836974fa92b1a3"
  },
  {
    "url": "assets/js/20.bd8223c0.js",
    "revision": "16d75f6118df7177b378582f6f22a877"
  },
  {
    "url": "assets/js/21.e5feff96.js",
    "revision": "ca8b9756e275f28d9a0144c409cad547"
  },
  {
    "url": "assets/js/22.19b280bf.js",
    "revision": "d9603f8ba9089650a16bf1a59d2fda90"
  },
  {
    "url": "assets/js/23.110077c1.js",
    "revision": "795313effb80eb7bf0d629df4126b1d9"
  },
  {
    "url": "assets/js/24.a593e533.js",
    "revision": "cf7897032df55dfd53477ca3397b0b51"
  },
  {
    "url": "assets/js/25.a6fc4af7.js",
    "revision": "d5d32147041ecdf0616fe5c654f93fbe"
  },
  {
    "url": "assets/js/26.32ed3169.js",
    "revision": "431d37ba48c0c16ff1653389d9c4ec69"
  },
  {
    "url": "assets/js/27.660b1a66.js",
    "revision": "b6ef7c360fb15fc387776fbc7c14ab70"
  },
  {
    "url": "assets/js/28.08be4477.js",
    "revision": "f2d0ec00c246ad81af9773af9d714ff5"
  },
  {
    "url": "assets/js/29.464c545f.js",
    "revision": "a2c59147139cc33eb9693dbe8099e14d"
  },
  {
    "url": "assets/js/30.0339d2fe.js",
    "revision": "5bd6c3b11d4808b67e13b204d8f8ce31"
  },
  {
    "url": "assets/js/31.37167c0f.js",
    "revision": "860765c636e6ffcea33d500e9b3757b0"
  },
  {
    "url": "assets/js/32.ededf4fa.js",
    "revision": "d6ff761e05e8ed95db233f8bdb24dd18"
  },
  {
    "url": "assets/js/4.668e08f8.js",
    "revision": "e45c0bc29f0c6647c9f9ab98dd623f26"
  },
  {
    "url": "assets/js/5.06f8b89a.js",
    "revision": "f5888775cc24652f5b4924836600bd62"
  },
  {
    "url": "assets/js/6.c07e20e0.js",
    "revision": "af0127bbaa9f13baf9838022df22c8f4"
  },
  {
    "url": "assets/js/7.03fb1353.js",
    "revision": "eb217473fb1b6a674a49bb57fbc56dc7"
  },
  {
    "url": "assets/js/8.04eb6bd3.js",
    "revision": "404f105d73575bf2a39efb03b1d2e2db"
  },
  {
    "url": "assets/js/9.841437ca.js",
    "revision": "68bffbd481c90f3ffb634296d8226ac7"
  },
  {
    "url": "assets/js/app.c955756f.js",
    "revision": "2eb86f21c185773db9509cec993fb6de"
  },
  {
    "url": "assets/js/vendors~flowchart.cb9b614f.js",
    "revision": "db09d3bc364e1e977005591dae28d72e"
  },
  {
    "url": "brand.jpg",
    "revision": "6285e20c35c902b4514f80134ecec543"
  },
  {
    "url": "category/Centos.html",
    "revision": "5121964e52f338d90e9ac83b3952d525"
  },
  {
    "url": "category/Echarts.html",
    "revision": "21fa5600bbd57203a89aa1f2e84dcd7e"
  },
  {
    "url": "category/Html5.html",
    "revision": "fe4f21ffc204030e4afa79a265d53f74"
  },
  {
    "url": "category/index.html",
    "revision": "dc665e591a90c7561e4fea83eb70e978"
  },
  {
    "url": "category/JavaScript.html",
    "revision": "90b8e2dba394c323b44627355adba5cb"
  },
  {
    "url": "category/MySql.html",
    "revision": "7f17d8da7fb7290072de130c0cccbdb0"
  },
  {
    "url": "category/Nginx.html",
    "revision": "96e6996846f6ca7c63cdecb5c471bdb8"
  },
  {
    "url": "category/Node.js.html",
    "revision": "2d8d3a6606bf27a51f0b41ec06194ee5"
  },
  {
    "url": "category/React.html",
    "revision": "354e502f5f060c9cff5e28ad247568d7"
  },
  {
    "url": "category/Vue.html",
    "revision": "1cb4f2843832ef2451b72a29bac574b2"
  },
  {
    "url": "category/Wechatapplet.html",
    "revision": "0b46cf947289923435f6ecdd01fc43f6"
  },
  {
    "url": "category/win7.html",
    "revision": "135ef4af930174a22860683b038f3164"
  },
  {
    "url": "index.html",
    "revision": "18652d93c48376b03a7aad43d84e8bf0"
  },
  {
    "url": "library/index.html",
    "revision": "dce24003a51c3e28209c0ab149c7fc82"
  },
  {
    "url": "live2d/hibiki/assets/moc/hibiki.2048/texture_00.png",
    "revision": "730252369524e7a1c21308cb84acd465"
  },
  {
    "url": "live2d/hijiki/assets/moc/hijiki.2048/texture_00.png",
    "revision": "817ca52e35fef3ef3a452127d1c88f43"
  },
  {
    "url": "logo.png",
    "revision": "2d9fab83b5e66034b543302e4ea504d5"
  },
  {
    "url": "stars.jpg",
    "revision": "f2b9102a94f0911f866fda0e18f85597"
  },
  {
    "url": "tag/Centos.html",
    "revision": "189715ab9e8368ed6e15e3cc8f3e2941"
  },
  {
    "url": "tag/Echarts.html",
    "revision": "8e999fe31579457364532fee2b7baa23"
  },
  {
    "url": "tag/Html5.html",
    "revision": "12300d1e7fd17ef67297538903dad518"
  },
  {
    "url": "tag/index.html",
    "revision": "beb8b385baf8da81caab10e3665861d3"
  },
  {
    "url": "tag/JavaScript.html",
    "revision": "a29b3b1a2dcdadf6225bac02fc79b500"
  },
  {
    "url": "tag/MySql.html",
    "revision": "9f139d5e8f0bec0d1a5c5f24e5c66f4b"
  },
  {
    "url": "tag/Nginx.html",
    "revision": "d4edca03980f2c6632bcb691c6fcd699"
  },
  {
    "url": "tag/Node.js.html",
    "revision": "a02b7f2b53a189cfcad1be47d74763ef"
  },
  {
    "url": "tag/React.html",
    "revision": "6767524c3c5dd2549a360036ec71ba6e"
  },
  {
    "url": "tag/Vue.html",
    "revision": "30d2d6ef382a5cc4c0fd4c84a51e862c"
  },
  {
    "url": "tag/Wechatapplet.html",
    "revision": "7b5c5357339f1b4b5477889609c47603"
  },
  {
    "url": "tag/win7.html",
    "revision": "53ad73460a3766d8345d91d4bfc8c627"
  },
  {
    "url": "timeLine/index.html",
    "revision": "2eb3434131b98d2e8a313e2e3fb4ae76"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "2c8496ceb0a86e27dc805042392439a2"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "43b826353c8bd26bb03781d7bcf8ddff"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "dd1a0855dfe2b19c4be4f2db092c492e"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "558499d3530721524dcb60f063395057"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "13cdd8220e98b049fb51144c2adfd9dd"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "d621b2e6d7011fc328a25bcf94b77c05"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "d10cb82f105e3c8e742a9e86ba6eb102"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "b6cebd64e59a037785f62cec3e815e69"
  },
  {
    "url": "views/JavaScript/3.html",
    "revision": "8c0b756f5edc68c2f30664a55c2c45ea"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "513185e11b17c1b88fa879f49eda3920"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "d0a2b697ec00bcfd280667c492e8fbfa"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "c0b10eed5742e14c2c576d9787437f26"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "12d4fdd7610d967d60a1246181ceb181"
  },
  {
    "url": "views/other/guide.html",
    "revision": "3ef0c9b9435ffbf15a51302b43e1cdd5"
  },
  {
    "url": "views/react/1.html",
    "revision": "e00989bc29182b823fc6bd0ba64dfdec"
  },
  {
    "url": "views/vue/1.html",
    "revision": "9bb17ac72afac7a1fdfaac4b18aa98ef"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "b005e2aa9068bc08b357597949ee5cd2"
  },
  {
    "url": "views/win7/1.html",
    "revision": "35575e84ef7a3a95e088822505a508e0"
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
