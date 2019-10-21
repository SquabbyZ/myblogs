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
    "revision": "8e6033196948492088f488e4a35388e5"
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
    "url": "assets/js/1.a604803d.js",
    "revision": "7bdfc96a27859f8c75cf07e7315d774a"
  },
  {
    "url": "assets/js/10.278ff5bf.js",
    "revision": "33638b4a140f16fd442801cf1432bbe6"
  },
  {
    "url": "assets/js/11.ea52ce41.js",
    "revision": "c13bec455efc4fdbc59b755a3b6265cb"
  },
  {
    "url": "assets/js/12.ca16fdcf.js",
    "revision": "4312f5ee6d855373a5847bf0acda6664"
  },
  {
    "url": "assets/js/13.8454fc0a.js",
    "revision": "e55c7f6762a0ccfbb5c443586d58271c"
  },
  {
    "url": "assets/js/14.4384dc21.js",
    "revision": "f33089bc9ec436199faf988aeae42d98"
  },
  {
    "url": "assets/js/15.5793867f.js",
    "revision": "249153bd99c269ce67f10155a2d7bf87"
  },
  {
    "url": "assets/js/16.df420a1f.js",
    "revision": "ab3f7c7171152b748367608684da8ab7"
  },
  {
    "url": "assets/js/17.8b859634.js",
    "revision": "945e112ea679ee88f90869de7175c042"
  },
  {
    "url": "assets/js/18.acb81c26.js",
    "revision": "e1dbf973a6490b1c73ba3681506227d5"
  },
  {
    "url": "assets/js/19.d09b62d8.js",
    "revision": "c0f15042e8b4d2194b1ae40338ea7a50"
  },
  {
    "url": "assets/js/20.63de4eec.js",
    "revision": "af7033d1936612b6b748f07a770e7269"
  },
  {
    "url": "assets/js/21.6907682b.js",
    "revision": "865384937db4778b806e6f661bf71728"
  },
  {
    "url": "assets/js/22.c4077a93.js",
    "revision": "60845a06cb3fbed1927fc53082c0a8cb"
  },
  {
    "url": "assets/js/23.94d513ce.js",
    "revision": "022fbd6598e8cdf6bb6826a30b27ce02"
  },
  {
    "url": "assets/js/24.20786084.js",
    "revision": "07c8cbb5b4654ba9227df717694a3674"
  },
  {
    "url": "assets/js/25.b3854c2d.js",
    "revision": "da5d1e46e618c6be90590ffd39fbb61c"
  },
  {
    "url": "assets/js/26.2f6a41fb.js",
    "revision": "0121096733b959d1483e7b6b776169c4"
  },
  {
    "url": "assets/js/27.001b1c9b.js",
    "revision": "c4432d59af595707cea382f8e789a8fb"
  },
  {
    "url": "assets/js/28.be6c3e79.js",
    "revision": "735c7754702f03ba22e13ef671656280"
  },
  {
    "url": "assets/js/29.c43daed9.js",
    "revision": "3dc34123d9f33a9fbff4aecd85ed8e06"
  },
  {
    "url": "assets/js/30.92582ca3.js",
    "revision": "7919cde9b7a22be3a881d00754bd680d"
  },
  {
    "url": "assets/js/31.9396a4a5.js",
    "revision": "3e442a42473fa4bc2a1809199e15d358"
  },
  {
    "url": "assets/js/32.392f6c8e.js",
    "revision": "5d34ec5d977b15f0243a5c1b472c7766"
  },
  {
    "url": "assets/js/33.8b1d20a0.js",
    "revision": "1f04ff9c34d6f341ace4ddf792d13579"
  },
  {
    "url": "assets/js/34.b114e8c7.js",
    "revision": "7ad84fba3974266afd7b487f3768a425"
  },
  {
    "url": "assets/js/35.3ad2c7f2.js",
    "revision": "c074b35118aa76114e0c56e98be8b875"
  },
  {
    "url": "assets/js/36.2483d507.js",
    "revision": "ad0b8515d16d8d759c032df6c3b6cff2"
  },
  {
    "url": "assets/js/37.9ddab391.js",
    "revision": "2bf8b8d95e34d5dedc2dbd7baf7711ed"
  },
  {
    "url": "assets/js/38.964b4c41.js",
    "revision": "0104f323424cf0ea27721a582e8a681d"
  },
  {
    "url": "assets/js/4.65138b6c.js",
    "revision": "39c5e29bfec2ce1f588fd56b1fcaacb1"
  },
  {
    "url": "assets/js/5.f55c285b.js",
    "revision": "67ffe8b132170c78d34435bf1fab2a1a"
  },
  {
    "url": "assets/js/6.c07e20e0.js",
    "revision": "af0127bbaa9f13baf9838022df22c8f4"
  },
  {
    "url": "assets/js/7.b91b821e.js",
    "revision": "9db3930e63741ed899e8855a283ba30e"
  },
  {
    "url": "assets/js/8.449f596b.js",
    "revision": "8806e8e7f90887407104a22d91c3c298"
  },
  {
    "url": "assets/js/9.d44100f6.js",
    "revision": "9b8a37744058e7b0a5d4b5d2e493f044"
  },
  {
    "url": "assets/js/app.c28d5359.js",
    "revision": "518de0d24f1536c938cbd2093e3a72c3"
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
    "revision": "4def9be385bfa3996553c2750d20fd6e"
  },
  {
    "url": "category/Echarts.html",
    "revision": "1dbe96bc43963d1e893e8a8fedfc3b17"
  },
  {
    "url": "category/Html5.html",
    "revision": "8785b7e3585bfd5337bb102d94bc8880"
  },
  {
    "url": "category/index.html",
    "revision": "8e88baacb28303c5adb51ac14d773628"
  },
  {
    "url": "category/JavaScript.html",
    "revision": "f8d98e1606523235d086b57ab51e839f"
  },
  {
    "url": "category/JQuery.html",
    "revision": "bcb3dc2fcacc92544e2e5ee07bc54318"
  },
  {
    "url": "category/MongonDB.html",
    "revision": "88de3cdb8b9ad4ce5d201a5eaeaf898a"
  },
  {
    "url": "category/MySql.html",
    "revision": "9a44edabd3f532dc37cf1075b72a9131"
  },
  {
    "url": "category/Nginx.html",
    "revision": "6decb8720dff0998e1240b78014eba30"
  },
  {
    "url": "category/Node.js.html",
    "revision": "5b021a5e60d37474f42a30d4dde7531a"
  },
  {
    "url": "category/React.html",
    "revision": "0549ed6e59f8cecea48d0cba6dc3de61"
  },
  {
    "url": "category/Vue.html",
    "revision": "54928253bdd922e075c9a7be335ec72a"
  },
  {
    "url": "category/Wechatapplet.html",
    "revision": "b652ac882d792461663d5821a8c8c27f"
  },
  {
    "url": "category/win7.html",
    "revision": "4f9283fb054eb785ff5bca884e4e51e3"
  },
  {
    "url": "index.html",
    "revision": "7df94c73e795cc631cf4d54435956247"
  },
  {
    "url": "library/index.html",
    "revision": "741a63e27b2b296c52c2c62a9779f13c"
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
    "revision": "bb1339ba924be23e08abbe2d3a776615"
  },
  {
    "url": "tag/Echarts.html",
    "revision": "f1f43841543a3444ea67d873708cdbc5"
  },
  {
    "url": "tag/Html5.html",
    "revision": "109d5a66c31c90c24e33a188f1680b88"
  },
  {
    "url": "tag/index.html",
    "revision": "8e3c445aae66517c4d932669dd26dc33"
  },
  {
    "url": "tag/JavaScript.html",
    "revision": "e87d02d261ca49bcd1248aa5c2cfae55"
  },
  {
    "url": "tag/JQuery.html",
    "revision": "6536e1661364414779906d51d025c1d7"
  },
  {
    "url": "tag/MongonDB.html",
    "revision": "554c8561592ee63ab8fbc6411424c358"
  },
  {
    "url": "tag/MySql.html",
    "revision": "aad469350eafaeb5e12b2b3deb61fc43"
  },
  {
    "url": "tag/Nginx.html",
    "revision": "dfd0d39ba0f10bc2b086d8d00bf9a1ed"
  },
  {
    "url": "tag/Node.js.html",
    "revision": "e56ffb54f283c84eb23153d7e014c949"
  },
  {
    "url": "tag/React.html",
    "revision": "4bc6a8a6662b4110352ef98bf7aa6857"
  },
  {
    "url": "tag/Vue.html",
    "revision": "c36283c1bd0cb9793d6b75d50a7259e7"
  },
  {
    "url": "tag/Wechatapplet.html",
    "revision": "74bbd81e32068d0a9affacf000e656a8"
  },
  {
    "url": "tag/win7.html",
    "revision": "28627add4406038d91c07a01d93c23ef"
  },
  {
    "url": "timeLine/index.html",
    "revision": "dcafde0ac0e5cc96ce928030aee58140"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "7d0faf2c98877daa1d921f35e40ed1e3"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "c7ef65a64951e2ae770de658b277d8cb"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "8b583522cc6452f94a981f2ae1b3b0cf"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "38405d530d31befa1b8331fbe8231e96"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "a8ed77b13b1cc646b2f5899212d67e22"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "512f643ff257cc903d217966ed649754"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "c75632532794be094a1695401d8e2226"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "4cfca1b9576b9e9ad143b508a5185019"
  },
  {
    "url": "views/JavaScript/3.html",
    "revision": "b06d39b4e105ffac39afea8b379115d3"
  },
  {
    "url": "views/JQuery/1.html",
    "revision": "f2fa6ac8b3d59f1bfd542b249ebecba2"
  },
  {
    "url": "views/mondonDB/1.html",
    "revision": "c51a60d6ac973943609db258daaadc65"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "d7ad02de9e83cd75233f7bac50fc544b"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "82831338b359faa4cc7d55bd0b113056"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "9a0e556907a201b18b6e7927cb7619c6"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "75e3c2e8de85081ee228b868328e27c2"
  },
  {
    "url": "views/nodejs/express.html",
    "revision": "aa4c2013fe842d14e73e7ca51e870733"
  },
  {
    "url": "views/other/guide.html",
    "revision": "8fd37e2ea2649ee8c8d1f0c2c87aa632"
  },
  {
    "url": "views/react/1.html",
    "revision": "1dd2b31bc83484297c673773e2700557"
  },
  {
    "url": "views/vue/1.html",
    "revision": "2c36b36c0a06b5598a28d00ee9a40e7b"
  },
  {
    "url": "views/vue/2.html",
    "revision": "342e6e7095963bf28db99e2ef40083cf"
  },
  {
    "url": "views/vue/3.html",
    "revision": "5b8c4ee8e4858b352bcbdb126522ddde"
  },
  {
    "url": "views/vue/4.html",
    "revision": "965d0eab4bc61f037a70f88679d6ab00"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "87588b42e2981dff00e46c7126bb633d"
  },
  {
    "url": "views/win7/1.html",
    "revision": "270193d55d921912d9cec8f6557245ad"
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
