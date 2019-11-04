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
    "revision": "73291e5da8f91754853ca9a1408caa7b"
  },
  {
    "url": "assets/css/0.styles.19b8e404.css",
    "revision": "dc48dd354ff9f6d7d3b1b69f9fc837c2"
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
    "url": "assets/js/10.664de4ce.js",
    "revision": "d663a898e7fe7d06808f37b2b1e16283"
  },
  {
    "url": "assets/js/11.53ea6390.js",
    "revision": "64a1d9ae56c8a0ab501b2dddb60f4266"
  },
  {
    "url": "assets/js/12.ecf65c3c.js",
    "revision": "46725c2a145f1d28039c8ecc7b279de0"
  },
  {
    "url": "assets/js/13.b34fa4b9.js",
    "revision": "a7eee1d83769c694947ebbe3623fb63a"
  },
  {
    "url": "assets/js/14.e7b977a6.js",
    "revision": "78023e49edc447bfb04b56ba94b5b11c"
  },
  {
    "url": "assets/js/15.930957b8.js",
    "revision": "513625c63760b769525f7d72a128b3c1"
  },
  {
    "url": "assets/js/16.1ef8edb5.js",
    "revision": "10d07d2225949c1b27ea9a11b501d03f"
  },
  {
    "url": "assets/js/17.8c166218.js",
    "revision": "1bb7485784ad3aab0c081a27da7b36a6"
  },
  {
    "url": "assets/js/18.6d13c2dd.js",
    "revision": "f712b09edfc1da191d52ea1835274109"
  },
  {
    "url": "assets/js/19.7e0cb815.js",
    "revision": "e63794266d85a6ec89b7c5cb7b11673f"
  },
  {
    "url": "assets/js/20.78771e0b.js",
    "revision": "f202b7f650dac4fe4e131e2efbf05b25"
  },
  {
    "url": "assets/js/21.45558623.js",
    "revision": "de69f4c9757ae7e845f8d6ea0bb4f11e"
  },
  {
    "url": "assets/js/22.484e4bfd.js",
    "revision": "a55669e3c8b52610b1ee3641b8f85001"
  },
  {
    "url": "assets/js/23.7de5e92a.js",
    "revision": "5ec8d4688bbad62bd11b4734303eb71b"
  },
  {
    "url": "assets/js/24.0f219ce8.js",
    "revision": "e9cf129a71644e0923e4cd4eb36cda39"
  },
  {
    "url": "assets/js/25.edd0531a.js",
    "revision": "cf2dc237e888254bb08ce9236c7f2705"
  },
  {
    "url": "assets/js/26.6db6ba0b.js",
    "revision": "ab168a2d1006530bf22e89f028852712"
  },
  {
    "url": "assets/js/27.4fd01116.js",
    "revision": "bcbaf6ec266f7cfc985bdaa5615272fd"
  },
  {
    "url": "assets/js/28.3b291947.js",
    "revision": "e9f25c4040c44158e75ae11884db5567"
  },
  {
    "url": "assets/js/29.b187f742.js",
    "revision": "3e6541b41c9884162d012ea6bff48617"
  },
  {
    "url": "assets/js/30.93af41f1.js",
    "revision": "d6661c1b56e7e584591d215b57689ca7"
  },
  {
    "url": "assets/js/31.05e9a9af.js",
    "revision": "8a0524fc4efca4c2bfad8927058e5c57"
  },
  {
    "url": "assets/js/32.2d36ac26.js",
    "revision": "aec880a5ccb5698d5b021d8a56660121"
  },
  {
    "url": "assets/js/33.002244e0.js",
    "revision": "8570001eda96e2113d38fc04aea3892b"
  },
  {
    "url": "assets/js/34.0afac727.js",
    "revision": "f93df97707ae2a0463f3f5706439795f"
  },
  {
    "url": "assets/js/35.bb6fcd9a.js",
    "revision": "ea02bac4d0b11c7663bd5a6ae2f7f5fd"
  },
  {
    "url": "assets/js/36.e9607856.js",
    "revision": "f5cf88fa105363ebd600ae2fd984d611"
  },
  {
    "url": "assets/js/37.5ed74feb.js",
    "revision": "9f18d7179bd310049b60d214ab2b42ad"
  },
  {
    "url": "assets/js/38.952337df.js",
    "revision": "e60c2b63cc663f058004ff51472b4dc6"
  },
  {
    "url": "assets/js/39.ca0eb322.js",
    "revision": "dea8207ee59b7254f06bc55e5a8e885a"
  },
  {
    "url": "assets/js/4.ea26f337.js",
    "revision": "66adda9c486c89437355e91421c39c1f"
  },
  {
    "url": "assets/js/40.da095d7e.js",
    "revision": "c4e502373e52e0bfc59acbcea4ceedd3"
  },
  {
    "url": "assets/js/41.1836150f.js",
    "revision": "2218e96e4493eac1b99d43ba5ba12b86"
  },
  {
    "url": "assets/js/42.9d4132be.js",
    "revision": "d97b1cdf459a9a23ca0e7b8037022839"
  },
  {
    "url": "assets/js/43.ab1c2e25.js",
    "revision": "fa214eb9e8f84162f28c43bdc53ab420"
  },
  {
    "url": "assets/js/44.bd0ec4d4.js",
    "revision": "cb53fe73dc95a32c3de0c6f9852d2587"
  },
  {
    "url": "assets/js/45.c8391bb8.js",
    "revision": "19e6a80cb1d75814dcb13af0f1e0a38d"
  },
  {
    "url": "assets/js/46.16d75507.js",
    "revision": "055eb308c65e2d194f412db42e4c1190"
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
    "url": "assets/js/8.449f596b.js",
    "revision": "8806e8e7f90887407104a22d91c3c298"
  },
  {
    "url": "assets/js/9.d44100f6.js",
    "revision": "9b8a37744058e7b0a5d4b5d2e493f044"
  },
  {
    "url": "assets/js/app.a358dde3.js",
    "revision": "95d77f0813c5da2bda0516bf3c98801f"
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
    "revision": "df922b16445a3dddf28de5642b13b0f0"
  },
  {
    "url": "category/Echarts.html",
    "revision": "b3b6c4469cb19b5ea2b4b84c8d2eea96"
  },
  {
    "url": "category/Html5.html",
    "revision": "001c5706a7e645690e71125714c330b5"
  },
  {
    "url": "category/index.html",
    "revision": "93895db0af28b48a11feaa80c3bc28d7"
  },
  {
    "url": "category/JavaScript.html",
    "revision": "42189d0d166b18712c47d5ac3b1aab2b"
  },
  {
    "url": "category/Jenkins.html",
    "revision": "f4067d6705f511b4cb300aab2496d181"
  },
  {
    "url": "category/JQuery.html",
    "revision": "040523d226dbae2bb480d8a00f7fd996"
  },
  {
    "url": "category/MongonDB.html",
    "revision": "f0a54f91476a7df944937624e9c41436"
  },
  {
    "url": "category/MySql.html",
    "revision": "6e12fd5343be3e27395e16fa96092dfd"
  },
  {
    "url": "category/Nginx.html",
    "revision": "4b472005426196e6cfd12af53766d1c8"
  },
  {
    "url": "category/Node.js.html",
    "revision": "cd3aa93ec6f060ed91030a08b39aa026"
  },
  {
    "url": "category/Nuxt.html",
    "revision": "c80a02e9cd578c8affcb514351843811"
  },
  {
    "url": "category/React.html",
    "revision": "6b4162225ef439e5c3e9ecfc14093390"
  },
  {
    "url": "category/Vue.html",
    "revision": "b470b3aadf9591d72e55b94a859bee20"
  },
  {
    "url": "category/Wechatapplet.html",
    "revision": "202554373438f9f474157abb8fe8d531"
  },
  {
    "url": "category/win7.html",
    "revision": "556b2ab7d25cab8ce720b2a7cee3452c"
  },
  {
    "url": "index.html",
    "revision": "ae57901dab09701ec1f562ed99397990"
  },
  {
    "url": "library/index.html",
    "revision": "8250529597911fe494d3158303a82d0b"
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
    "revision": "e1749ed2b425518048ac862c225f70a7"
  },
  {
    "url": "tag/Echarts.html",
    "revision": "f3c29fb9838d14548d318ac0d2ac3a6d"
  },
  {
    "url": "tag/Html5.html",
    "revision": "b0b3c02b5f9cc61ee06881d31eb32a84"
  },
  {
    "url": "tag/index.html",
    "revision": "29228d194416e9b90e0d1a5658ca7de4"
  },
  {
    "url": "tag/JavaScript.html",
    "revision": "894f35b9709bc859d9a5a9a4302a0ecd"
  },
  {
    "url": "tag/Jenkins.html",
    "revision": "70df737cccc40b8381b58b4053ab6c38"
  },
  {
    "url": "tag/JQuery.html",
    "revision": "c5bc4e4e4c33b5af12fe9436925df2d8"
  },
  {
    "url": "tag/MongonDB.html",
    "revision": "edfe96e4f3b64e00d3fc53954418d6ff"
  },
  {
    "url": "tag/MySql.html",
    "revision": "75c5bf72221337335b40f766f7767792"
  },
  {
    "url": "tag/Nginx.html",
    "revision": "e85f0752e3847f464a23eabc860d5c31"
  },
  {
    "url": "tag/Node.js.html",
    "revision": "a981fbeeb6cdfbb6d12d7e4217c5412b"
  },
  {
    "url": "tag/Nuxt.html",
    "revision": "3ce62e2b88c9b8cf34a235feea97e9a3"
  },
  {
    "url": "tag/React.html",
    "revision": "4f613c969014b02971e7108362f693be"
  },
  {
    "url": "tag/Vue.html",
    "revision": "66b0b31ae546bf4765fbb0716a3f6d2f"
  },
  {
    "url": "tag/Wechatapplet.html",
    "revision": "330715615c107f185c9fe7baeee729d4"
  },
  {
    "url": "tag/win7.html",
    "revision": "97a26b6203fec1887cbe8be6f3c7d2ed"
  },
  {
    "url": "timeLine/index.html",
    "revision": "bc1dca587ff09a52d063b79e18418851"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "e89724225a8cd99b3d4167d1fd42b739"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "eb81760841806667f1fa44802f46098d"
  },
  {
    "url": "views/Centos/3.html",
    "revision": "5442cbe424a1ee89981cd1841ef2bd08"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "f3df3fc778843501fc487f83eb2276e1"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "9b42b133ca9b41f0ffa1de2f22016633"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "1e2ed7befc44b7bd2e8e4ce9bb99b698"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "411562736e51a24596048cb0be958b64"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "56a9c64c6f04077fb489e350738e549e"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "18575b9dbe448983e89b96b3d79d0c91"
  },
  {
    "url": "views/JavaScript/3.html",
    "revision": "0955f4c10e5e3f69a1f5018471ae2725"
  },
  {
    "url": "views/Jenkins/1.html",
    "revision": "7650c3e05113922e185f7e3e227f82fa"
  },
  {
    "url": "views/Jenkins/2.html",
    "revision": "bffc6b7cbb620fd50d6cd9fa4fcea5ae"
  },
  {
    "url": "views/Jenkins/3.html",
    "revision": "03a4ab03fa245fd8dacb06efab095f2e"
  },
  {
    "url": "views/Jenkins/4.html",
    "revision": "634efcb173688eef1f4709c8c552eb24"
  },
  {
    "url": "views/Jenkins/5.html",
    "revision": "9fc5ec3414ff43dd036e4d8e4d68b378"
  },
  {
    "url": "views/JQuery/1.html",
    "revision": "2535b84ab27dfd731c99f282b634cd7e"
  },
  {
    "url": "views/mondonDB/1.html",
    "revision": "306072317fbb69ba6ef162541b219a9b"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "6c11da6fcb40920ac1821af7cbac8711"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "aef2bbfb34945ac1a280c321cb0ac6cb"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "d9da5a602c4335e05894bd30fe1f646f"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "321e73d08b983a5006ebf7bd1b77d1e8"
  },
  {
    "url": "views/nodejs/express.html",
    "revision": "8defe8d8d4f52b22e97137363845ec39"
  },
  {
    "url": "views/nuxt/lesson1.html",
    "revision": "6bfc3ff8f41095d465a3aa025a0dfb57"
  },
  {
    "url": "views/nuxt/lesson2.html",
    "revision": "8dcfeeac23eecbc6bdfa913c00008ada"
  },
  {
    "url": "views/other/guide.html",
    "revision": "425f5a9e71a35db27fd160f1a3854ecc"
  },
  {
    "url": "views/react/1.html",
    "revision": "e756c5979c6fa4f626296dcce4770163"
  },
  {
    "url": "views/vue/1.html",
    "revision": "83569d23e140e09b60cbf138b85dda8b"
  },
  {
    "url": "views/vue/2.html",
    "revision": "dea90a2b085a59f972838124e222b90c"
  },
  {
    "url": "views/vue/3.html",
    "revision": "e5be299aba9fdfaff205a1e0a3fea96a"
  },
  {
    "url": "views/vue/4.html",
    "revision": "1648ffb93a96e122434459beb91b158a"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "a39d88838df8ababe69258ea1d5dd087"
  },
  {
    "url": "views/win7/1.html",
    "revision": "506b75d885c805ac7657e4c82798e7d4"
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
