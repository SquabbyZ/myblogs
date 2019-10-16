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
    "revision": "cddf36af1fe27e3e4ccf187482c492f4"
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
    "url": "assets/js/12.81bda42d.js",
    "revision": "f2f3f2887c81fecd0577da4e875ad6fb"
  },
  {
    "url": "assets/js/13.6a3f2304.js",
    "revision": "80d63bc9116ef4c85abdd1aac0df4175"
  },
  {
    "url": "assets/js/14.4384dc21.js",
    "revision": "f33089bc9ec436199faf988aeae42d98"
  },
  {
    "url": "assets/js/15.41c8f45b.js",
    "revision": "bf3d0ad749866b94367bf02311e18fe9"
  },
  {
    "url": "assets/js/16.df420a1f.js",
    "revision": "ab3f7c7171152b748367608684da8ab7"
  },
  {
    "url": "assets/js/17.6c39360c.js",
    "revision": "e429f4cad6dea003e6853445eb420823"
  },
  {
    "url": "assets/js/18.eb3a6174.js",
    "revision": "431b75509c8eb72b256e1032f3b6078d"
  },
  {
    "url": "assets/js/19.d09b62d8.js",
    "revision": "c0f15042e8b4d2194b1ae40338ea7a50"
  },
  {
    "url": "assets/js/20.362e4bc0.js",
    "revision": "c78e147f24185934f239d07e576617b0"
  },
  {
    "url": "assets/js/21.ef31745c.js",
    "revision": "81e7aadc600b36066cc09aa606df0bfc"
  },
  {
    "url": "assets/js/22.0c7fd68a.js",
    "revision": "11b0c38516182166b7841919321fd43a"
  },
  {
    "url": "assets/js/23.8d364255.js",
    "revision": "ee40ed58afdd671f9a41a73adfac069f"
  },
  {
    "url": "assets/js/24.20786084.js",
    "revision": "07c8cbb5b4654ba9227df717694a3674"
  },
  {
    "url": "assets/js/25.ce47faa2.js",
    "revision": "bacbaaf1c647a6a1efe7c4aa9e7db67f"
  },
  {
    "url": "assets/js/26.c446d8bd.js",
    "revision": "1c0088d9e69a0039773d25a6181bcded"
  },
  {
    "url": "assets/js/27.001b1c9b.js",
    "revision": "c4432d59af595707cea382f8e789a8fb"
  },
  {
    "url": "assets/js/28.5703c26d.js",
    "revision": "1152a3bf5d6cb043b98ce573cb42e2a6"
  },
  {
    "url": "assets/js/29.82d3fbc7.js",
    "revision": "f7b46e74039df54600a25d366b283e5d"
  },
  {
    "url": "assets/js/30.99c10c04.js",
    "revision": "8322b3945668eda4a470d4545bfacca3"
  },
  {
    "url": "assets/js/31.a5fe8e1a.js",
    "revision": "bc463b8f1a52fad2f9c263b1d159249d"
  },
  {
    "url": "assets/js/32.23a0e5dd.js",
    "revision": "85accadbc7493405b3039ab052781f54"
  },
  {
    "url": "assets/js/33.d41046e9.js",
    "revision": "9ccb79be3b8928ed2622ea50ba7791c3"
  },
  {
    "url": "assets/js/34.b114e8c7.js",
    "revision": "7ad84fba3974266afd7b487f3768a425"
  },
  {
    "url": "assets/js/35.9041e9aa.js",
    "revision": "26f5909b2863f9c760431b1463a4441a"
  },
  {
    "url": "assets/js/36.73e278e4.js",
    "revision": "1b0200c0d2b909b44b379c7f02c8c4ff"
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
    "url": "assets/js/4.7929d29c.js",
    "revision": "deeeb56772c3c37b3bc910a4dd7329e9"
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
    "url": "assets/js/app.e8f0e92a.js",
    "revision": "4632cfa779b56d23b745051e5addad15"
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
    "revision": "574383b2aee298a4eb20db33b2870d1f"
  },
  {
    "url": "category/Echarts.html",
    "revision": "9d6911d6570d8e59609454faacc3a246"
  },
  {
    "url": "category/Html5.html",
    "revision": "e23737c3a5014c63ce1b87598fc4e02b"
  },
  {
    "url": "category/index.html",
    "revision": "b0dfc11bac7c49dee2f5657ddd8e21bc"
  },
  {
    "url": "category/JavaScript.html",
    "revision": "fc07b061f8944304edf3e37e30990069"
  },
  {
    "url": "category/JQuery.html",
    "revision": "70a2714aa586e1c7f3d8f096c8cf4b30"
  },
  {
    "url": "category/MongonDB.html",
    "revision": "8bd21cdc49a70a4783e7089321fdb8e1"
  },
  {
    "url": "category/MySql.html",
    "revision": "2bc09458ca3396e5549640adfd9b60f0"
  },
  {
    "url": "category/Nginx.html",
    "revision": "59065aa9ceeafb3e221170307628df5a"
  },
  {
    "url": "category/Node.js.html",
    "revision": "4740abc8241ced515f3e8977ad745724"
  },
  {
    "url": "category/React.html",
    "revision": "3e79ffc9da3b0912b963398d927885ab"
  },
  {
    "url": "category/Vue.html",
    "revision": "49fe85c83370319a659494db4893502b"
  },
  {
    "url": "category/Wechatapplet.html",
    "revision": "c0ad63acbc47e0aa3de0e32a39714960"
  },
  {
    "url": "category/win7.html",
    "revision": "d981a53969b11e0994662edcb2abd23a"
  },
  {
    "url": "index.html",
    "revision": "eaf3b44fe8654be7e1be2fa3975e9fd1"
  },
  {
    "url": "library/index.html",
    "revision": "1ef9296a776621f0f0a2891a219d5d2a"
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
    "revision": "04838f7cc0e2695876cbfce7ae94cb69"
  },
  {
    "url": "tag/Echarts.html",
    "revision": "e60fd154903d73d9665679467be2ab5b"
  },
  {
    "url": "tag/Html5.html",
    "revision": "191f5a86b445fd64e0aa318797c85165"
  },
  {
    "url": "tag/index.html",
    "revision": "4b0c86d290fde6207ee178ec8554cf9d"
  },
  {
    "url": "tag/JavaScript.html",
    "revision": "15313842d793c6db2e0818d6f006335c"
  },
  {
    "url": "tag/JQuery.html",
    "revision": "7030955cc0e89aad8d6558306b8c9a17"
  },
  {
    "url": "tag/MongonDB.html",
    "revision": "c84698499397115821e8b67f9adb97a9"
  },
  {
    "url": "tag/MySql.html",
    "revision": "862fd26ba6ed6d4cd176b2bfb8db5528"
  },
  {
    "url": "tag/Nginx.html",
    "revision": "273aa51a44be1a78f3a19d2d4a4aad12"
  },
  {
    "url": "tag/Node.js.html",
    "revision": "e588bcea9bfacef3783899ab9b58f218"
  },
  {
    "url": "tag/React.html",
    "revision": "74bdbc4b5c40e839f19c7b8919e5c24b"
  },
  {
    "url": "tag/Vue.html",
    "revision": "3fc2e544f7a4e2b8f1aa47747c2a7af5"
  },
  {
    "url": "tag/Wechatapplet.html",
    "revision": "b22478334a19f41244975ad5fbc44639"
  },
  {
    "url": "tag/win7.html",
    "revision": "8ad04a1fe609c214137e20c56e328c44"
  },
  {
    "url": "timeLine/index.html",
    "revision": "70875e52448a294b3cee990aa7aefc26"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "12bee942c0b8c290660ef21eff06c9d5"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "99398b1a50733dc74f4f7556e61a7292"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "ae735c0316f5764cdd28a23b16f4978b"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "38e4f1e024c55e497cf44abee94e6f81"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "29f1a454942e05ad7c4aa9098590c681"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "827b34ca1e1fd95ff0dc86157eaf190e"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "14496112b54f3c42e523e9e1f5886f5c"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "b89f4421460b7a8ae75a7db0290fc928"
  },
  {
    "url": "views/JavaScript/3.html",
    "revision": "0f3fb6011b7387e3ed9c02ef9c90a133"
  },
  {
    "url": "views/JQuery/1.html",
    "revision": "cfeb630b5e8d20fd293a316ade162b3a"
  },
  {
    "url": "views/mondonDB/1.html",
    "revision": "68828e4e4aa3b79d6c64d93e8ba776a1"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "78a82f5607041fa273fd474781d354fe"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "59b3c81054ab19bb6f7bbe15a8e446ff"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "6cefcdf1c41f6428dfa0f3faf42c10a8"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "30aef8119ab0ec9b9b6589556f3f4a5e"
  },
  {
    "url": "views/nodejs/express.html",
    "revision": "b2b485af8d167c1d736b0982b2517d9e"
  },
  {
    "url": "views/other/guide.html",
    "revision": "aba21e47a684834a500a7286e5d8e8cb"
  },
  {
    "url": "views/react/1.html",
    "revision": "70b8e230279152ad8464a559aa7eac21"
  },
  {
    "url": "views/vue/1.html",
    "revision": "adc5a1660d5667bd03cda4bd95c7ccc8"
  },
  {
    "url": "views/vue/2.html",
    "revision": "e453d9ed4ea62e6cd6f6feadb904cdec"
  },
  {
    "url": "views/vue/3.html",
    "revision": "969beb6e095f6001b7aa913d2e006f9e"
  },
  {
    "url": "views/vue/4.html",
    "revision": "c7c2c24459c56db0363da38a930c4d82"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "7b085fb0a709c3a1ff74b6055d0de51d"
  },
  {
    "url": "views/win7/1.html",
    "revision": "253ef2857b4b799a8f3815de530fa244"
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
