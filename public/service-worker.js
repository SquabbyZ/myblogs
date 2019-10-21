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
    "revision": "73027c03c70f4fc535b66f688ade6787"
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
    "url": "assets/js/36.26ca0104.js",
    "revision": "6db8570e02682ca1fce175a01e6f107b"
  },
  {
    "url": "assets/js/37.7641b159.js",
    "revision": "f89b0e61ace09a21472727b66e67ceeb"
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
    "url": "assets/js/app.da66d7dc.js",
    "revision": "1a48e61d201d3206723bdfb8941c4dc7"
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
    "revision": "b4bd489e1791631c64d7d010d7afa3d7"
  },
  {
    "url": "category/Echarts.html",
    "revision": "d7916e12152c1e1bc8045750ce46dc85"
  },
  {
    "url": "category/Html5.html",
    "revision": "6b6197539216236e4b087e57ad9119df"
  },
  {
    "url": "category/index.html",
    "revision": "fdfa2f3d6cda8338994a49c5353a3627"
  },
  {
    "url": "category/JavaScript.html",
    "revision": "ecdef25da6cd3971809df2f9b27e2f04"
  },
  {
    "url": "category/JQuery.html",
    "revision": "fc787a25932316156ce9fe3758d19e11"
  },
  {
    "url": "category/MongonDB.html",
    "revision": "1dc49459a0fce882421379991cf08470"
  },
  {
    "url": "category/MySql.html",
    "revision": "14a8be101c48831fe16dbd381a67b605"
  },
  {
    "url": "category/Nginx.html",
    "revision": "7a588c88980f6ba215e3c04b3043b669"
  },
  {
    "url": "category/Node.js.html",
    "revision": "b6f3bba96549445950ee8592f3a56c35"
  },
  {
    "url": "category/React.html",
    "revision": "b367f3410f3527edba723aa9201985e3"
  },
  {
    "url": "category/Vue.html",
    "revision": "542ad6693e5eefcb541e315474bb3f08"
  },
  {
    "url": "category/Wechatapplet.html",
    "revision": "1801024193eccbfa3a0e39607c6caffa"
  },
  {
    "url": "category/win7.html",
    "revision": "dba0dcd26053fd003c4dbc1c79f2e7a8"
  },
  {
    "url": "index.html",
    "revision": "52c58845b265edd1aa9b453f8ebe858d"
  },
  {
    "url": "library/index.html",
    "revision": "44bfe8312e4d5756edaa6e1cff4e05c2"
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
    "revision": "8ade3d93e8b0da8ea467da51208e9542"
  },
  {
    "url": "tag/Echarts.html",
    "revision": "af919a3c5c676dad00b45b8c82da081c"
  },
  {
    "url": "tag/Html5.html",
    "revision": "6ba5f648edfce019ff1b9103bebe2627"
  },
  {
    "url": "tag/index.html",
    "revision": "a297e1aac08645e1511c563e9e84de9f"
  },
  {
    "url": "tag/JavaScript.html",
    "revision": "304332fa72119697fb7009336d3d3ad9"
  },
  {
    "url": "tag/JQuery.html",
    "revision": "3d98307c6b83b9b96e90503caf17aad1"
  },
  {
    "url": "tag/MongonDB.html",
    "revision": "8e147bfaab2adde5bf5752d0801fafaf"
  },
  {
    "url": "tag/MySql.html",
    "revision": "c8b5accc81af748f1d199a2530129d9a"
  },
  {
    "url": "tag/Nginx.html",
    "revision": "0dd0decf904b60f10de12963e94cff6d"
  },
  {
    "url": "tag/Node.js.html",
    "revision": "0e9b969696739c1f7d53af5a1fe0010c"
  },
  {
    "url": "tag/React.html",
    "revision": "5eec42a15fdb17184d6e2ef5efc29bbb"
  },
  {
    "url": "tag/Vue.html",
    "revision": "edec93d9bc6f213495a9ecf49b9c1d76"
  },
  {
    "url": "tag/Wechatapplet.html",
    "revision": "16c4ea610e74e9fad5ec0a1dab6c49ba"
  },
  {
    "url": "tag/win7.html",
    "revision": "da9015a9b1e144896835864328d130a6"
  },
  {
    "url": "timeLine/index.html",
    "revision": "a5642c7b0159c335f5609e8a951eea91"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "82f72452d098d7f540a5a8cc64dd78b0"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "033770fa1c6e5282b56d6048510db65f"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "0bd065ea1ef0f3122afde5eda0b4a542"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "eb0f892001e83a5a4258b8d7ec2cd064"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "a60e203ba78d4811cfbd4c7d67629f63"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "eb20a30e5022d8ce8014e4d62adc0488"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "a61cccac841fa83762e2f37864044514"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "d99d41925fb90941a6f9aa0248767f4c"
  },
  {
    "url": "views/JavaScript/3.html",
    "revision": "ee135835c5898228e28f82afab881b21"
  },
  {
    "url": "views/JQuery/1.html",
    "revision": "7606f08f24366a862ece8a4b8063ff7e"
  },
  {
    "url": "views/mondonDB/1.html",
    "revision": "b8e0bb33a569cf18b5fa5fe23e3aeb37"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "9c5dbda1cc097e92c8dad47b960e4948"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "ed6cb70d0804f014970cde2a0e4b786c"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "a0e023f15777b6fe8820f4bc2cbd392d"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "4496fd5d69628288c261ce189035cd1f"
  },
  {
    "url": "views/nodejs/express.html",
    "revision": "8995c78d627b3b62c6c775bac681937d"
  },
  {
    "url": "views/other/guide.html",
    "revision": "a475bc4a298b1ffe9a7c00b85fc91b71"
  },
  {
    "url": "views/react/1.html",
    "revision": "b845456abc58d85883955202c506f71e"
  },
  {
    "url": "views/vue/1.html",
    "revision": "34f2ccec002e6b72a3c81c138b2a5c6c"
  },
  {
    "url": "views/vue/2.html",
    "revision": "e23299335c94b5a208c5a7cf0439431d"
  },
  {
    "url": "views/vue/3.html",
    "revision": "6193e410c3e41d4dad3e4841468c9f03"
  },
  {
    "url": "views/vue/4.html",
    "revision": "c7fc5ca7472578f8b0ce075bc1007332"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "85208f1b87b3f24bc1b4a6f999cf5be9"
  },
  {
    "url": "views/win7/1.html",
    "revision": "cdc72ed249458a645aed918698a9dc31"
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
