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
    "revision": "0d5b24dcf0e81036f742e1f838cffe05"
  },
  {
    "url": "assets/css/0.styles.6224b5c9.css",
    "revision": "316f73eaed03c65341cdf6f402f1d508"
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
    "url": "assets/js/1.d0243e6b.js",
    "revision": "9ea9ee65521d101ec80904cbe75a7835"
  },
  {
    "url": "assets/js/10.6f954bd6.js",
    "revision": "30c3945417f18ba13253b7dbda85536f"
  },
  {
    "url": "assets/js/11.947df6aa.js",
    "revision": "da76611c92607494f5b4b103eecc1735"
  },
  {
    "url": "assets/js/12.b5f56a23.js",
    "revision": "bf4aaef23be007ca76de5e2489f1818a"
  },
  {
    "url": "assets/js/13.93f2dbba.js",
    "revision": "83a275b97fc8c81185b70eb0b990dc98"
  },
  {
    "url": "assets/js/14.be8bb3cc.js",
    "revision": "650204d1e45bd112579e6b1354c1ac73"
  },
  {
    "url": "assets/js/15.e61dfed3.js",
    "revision": "5901b98550e36dd73370da0e26c02bcc"
  },
  {
    "url": "assets/js/16.8df82b6d.js",
    "revision": "222c310733f30778dc58af96e6bef10c"
  },
  {
    "url": "assets/js/17.0e27808f.js",
    "revision": "292522e8a4d83b2153fb539c56289aa8"
  },
  {
    "url": "assets/js/18.72365e12.js",
    "revision": "49f3f9888b6009b0ad2233c60ee12e8f"
  },
  {
    "url": "assets/js/19.82f6b5c4.js",
    "revision": "b632a675da1d0b030773b44c9c1f8aed"
  },
  {
    "url": "assets/js/20.129c0e5f.js",
    "revision": "813bb6d2f421aa93ad8ee89b66265464"
  },
  {
    "url": "assets/js/21.3948c90e.js",
    "revision": "c1375183b7686d4908f64e44560992a0"
  },
  {
    "url": "assets/js/22.76eb3844.js",
    "revision": "8bf464eda0e82252ba8239bc7c5a880e"
  },
  {
    "url": "assets/js/4.17c4bdb0.js",
    "revision": "4ee762849fc12058007533babc47c4aa"
  },
  {
    "url": "assets/js/5.6ebf5443.js",
    "revision": "e37a2a7d418260bb5caff7f7000b822a"
  },
  {
    "url": "assets/js/6.4c053fb7.js",
    "revision": "af0127bbaa9f13baf9838022df22c8f4"
  },
  {
    "url": "assets/js/7.0ce827fd.js",
    "revision": "6f0ebbf0509ac81db50e832828ea9e9d"
  },
  {
    "url": "assets/js/8.449f596b.js",
    "revision": "8806e8e7f90887407104a22d91c3c298"
  },
  {
    "url": "assets/js/9.464f77f0.js",
    "revision": "24b0562729bdc0c81b328a205ed16e0a"
  },
  {
    "url": "assets/js/app.5557a3c7.js",
    "revision": "1255e8f781e8194edf9406668213d0fe"
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
    "revision": "039b3c818d3c2f3cebb0d014e0e8ebcb"
  },
  {
    "url": "category/index.html",
    "revision": "dca202445cd295e9d652cfa8ef4d97d8"
  },
  {
    "url": "category/MySql.html",
    "revision": "9c3abae4c9d7c7ecb16a1a1bfef64ba9"
  },
  {
    "url": "category/Nginx.html",
    "revision": "74ef680f1d81a243b89c9edcadc5857f"
  },
  {
    "url": "category/Node.js.html",
    "revision": "83dec1eb061325ed1c8b083f74c73ca6"
  },
  {
    "url": "category/React.html",
    "revision": "77e9e8af3c38396fc42931e12171dc1e"
  },
  {
    "url": "category/Vue.html",
    "revision": "6d534da1461e6b4c610e00f20f17a69e"
  },
  {
    "url": "category/Wechatapplet.html",
    "revision": "72c115be2a8d9734c0fc9cbc9d842dc7"
  },
  {
    "url": "index.html",
    "revision": "88697e82bcd11805698a61f710744706"
  },
  {
    "url": "library/library.html",
    "revision": "f6f4d98361062a449932a934f52edef7"
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
    "revision": "5bf8a89d18f85da29ecb4d471c759b77"
  },
  {
    "url": "tag/index.html",
    "revision": "7b4f74afc7c8b978ecafc95abaf088e8"
  },
  {
    "url": "tag/MySql.html",
    "revision": "67e92222e2bc27d0273bfa4fcf2d56c4"
  },
  {
    "url": "tag/Nginx.html",
    "revision": "4278b7faf1ce2a4db9f1efe5e1a412b5"
  },
  {
    "url": "tag/Node.js.html",
    "revision": "78d2fc5f553aa5e9ca083dd9d2ff84d7"
  },
  {
    "url": "tag/React.html",
    "revision": "7e33a70f4ae57153fccdbce0593d9b6d"
  },
  {
    "url": "tag/Vue.html",
    "revision": "f4080a755a1b69abd08e24c04c25de79"
  },
  {
    "url": "tag/Wechatapplet.html",
    "revision": "b1eb7feec4f947c57a3419846e73146c"
  },
  {
    "url": "timeLine/index.html",
    "revision": "fc9caac79ed742fd2f97aeefff5af581"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "ea8826c3740bcf19cfb741521ef76088"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "dd407a2d10e9fd7b4ce41cfd4c57f4eb"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "0988125cad1660d9be2ddb22d9c8e456"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "d7ec74175e477183faf1fba2cd114bf1"
  },
  {
    "url": "views/other/guide.html",
    "revision": "a10a9717aa78c2eeeb2bea2975a4ac38"
  },
  {
    "url": "views/react/1.html",
    "revision": "3578f7b8a3c3578329bcc3f87b117776"
  },
  {
    "url": "views/vue/1.html",
    "revision": "88c91dff44025de3c8e20de0ff0ef106"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "e208bf144d7f12d6cd8e056c35adffac"
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
