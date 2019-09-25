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
    "revision": "fc28666ced0d8640e09b1cd792fca457"
  },
  {
    "url": "assets/css/0.styles.d4a2a69f.css",
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
    "url": "assets/js/1.f56f6d7f.js",
    "revision": "896f529c876aa5a507a7e72860c01242"
  },
  {
    "url": "assets/js/10.c1ce2b21.js",
    "revision": "16cc9fc5dc2b6a3f80a107668c0a6ce9"
  },
  {
    "url": "assets/js/11.e424716b.js",
    "revision": "d71decde8da49fa44b2fb6857ee498b1"
  },
  {
    "url": "assets/js/12.7bcc0a37.js",
    "revision": "88c9bfaa8a974095bbcdd56d15683700"
  },
  {
    "url": "assets/js/13.a2bd4ffb.js",
    "revision": "2e374400baf4a90e1d12b143bfede7c0"
  },
  {
    "url": "assets/js/14.0a017ebd.js",
    "revision": "63f59a97e7ed362c05c21f62826094a6"
  },
  {
    "url": "assets/js/15.8edd723a.js",
    "revision": "e41432ac2ab431a552f7b386e79b77fa"
  },
  {
    "url": "assets/js/16.6d6726f0.js",
    "revision": "e42e2f592eb38a17c1b0ce799561021b"
  },
  {
    "url": "assets/js/17.2e5eb18e.js",
    "revision": "cc17a3d891e10fae709788eda17ac35e"
  },
  {
    "url": "assets/js/18.5436bcde.js",
    "revision": "b3c53c0ae350c4195c27493011fa5db8"
  },
  {
    "url": "assets/js/19.a05ab4cf.js",
    "revision": "cda72f03e7fc7d8b17c65d609e7740a3"
  },
  {
    "url": "assets/js/20.f740e3a7.js",
    "revision": "68d29f8e1f0b9bd8e71bcb3ab729ebb8"
  },
  {
    "url": "assets/js/21.b166db46.js",
    "revision": "462abaa05a6a63e3b74fc55e9f6b1176"
  },
  {
    "url": "assets/js/22.29480931.js",
    "revision": "682193efc4214169753e229e9a238777"
  },
  {
    "url": "assets/js/23.8d752bf0.js",
    "revision": "836021b7aabb3e8117ab4037f374d0f6"
  },
  {
    "url": "assets/js/24.e6dfbe1c.js",
    "revision": "bc3f1b1f640f0df07d1d4ba42cd3435a"
  },
  {
    "url": "assets/js/25.c5f4e323.js",
    "revision": "1f2a1c511c2db84d7aa90e4331a532db"
  },
  {
    "url": "assets/js/26.31d3160b.js",
    "revision": "f2addd54cfc29a84fc2333e081b19633"
  },
  {
    "url": "assets/js/27.19f9157f.js",
    "revision": "16b482da789e697d5b14fe95055daa45"
  },
  {
    "url": "assets/js/28.dcdd95af.js",
    "revision": "2933d802667fc530a88e0d61aa66902d"
  },
  {
    "url": "assets/js/29.0741fe03.js",
    "revision": "e9aac25dedfb046b17d1c2885042c3e4"
  },
  {
    "url": "assets/js/30.3457a56f.js",
    "revision": "0428d56b0e9c6098aeb32a9a1675fc9d"
  },
  {
    "url": "assets/js/4.8ef348f7.js",
    "revision": "3a35682906fb2525b0968886cc413c8d"
  },
  {
    "url": "assets/js/5.db82b4dd.js",
    "revision": "2a34d8378ce402eb16bd409d76e50855"
  },
  {
    "url": "assets/js/6.dc925f8c.js",
    "revision": "ad8e8a95c88b62721407c59b959bccb9"
  },
  {
    "url": "assets/js/7.be6a2085.js",
    "revision": "231bde50fc9d667cbf9fa97258bf7a94"
  },
  {
    "url": "assets/js/8.ba5de10a.js",
    "revision": "004090f49c5ffc17cf28d906ac327787"
  },
  {
    "url": "assets/js/9.f03c4643.js",
    "revision": "3dc0327a66c46c3435b9a13351c2d63c"
  },
  {
    "url": "assets/js/app.2222dcd8.js",
    "revision": "24028d8a0b15edd374b24255359f795c"
  },
  {
    "url": "assets/js/vendors~flowchart.4bf25d85.js",
    "revision": "f68f85c788ad998ac0130fa6e857a938"
  },
  {
    "url": "brand.jpg",
    "revision": "6285e20c35c902b4514f80134ecec543"
  },
  {
    "url": "category/Centos.html",
    "revision": "5ee7b53f072620dc984dc528b2fd3aae"
  },
  {
    "url": "category/Echarts.html",
    "revision": "57228a984c0a5a48de88bd67f959fb53"
  },
  {
    "url": "category/Html5.html",
    "revision": "3e3bbc43d8bff9cb4f3b95d84a84f279"
  },
  {
    "url": "category/index.html",
    "revision": "f6bb57dbd570a226d97306b99cc0da8e"
  },
  {
    "url": "category/JavaScript.html",
    "revision": "022144d5ec6b61db6ce47635d32a1f55"
  },
  {
    "url": "category/MySql.html",
    "revision": "b0c8125bf47682599f5d35a793f3c861"
  },
  {
    "url": "category/Nginx.html",
    "revision": "abb702e63921e06bf7831bc6059342fc"
  },
  {
    "url": "category/Node.js.html",
    "revision": "b80f7d5fb984cebd1817dde53993fdad"
  },
  {
    "url": "category/React.html",
    "revision": "f626a2d2edd84515ee688c381200eef8"
  },
  {
    "url": "category/Vue.html",
    "revision": "356e74324c0072a97fcf5c77c7e41cdf"
  },
  {
    "url": "category/Wechatapplet.html",
    "revision": "047f105aef6490a050c7ee0261c8e684"
  },
  {
    "url": "category/win7.html",
    "revision": "559224cf9b962ed814991a4fe816fa39"
  },
  {
    "url": "index.html",
    "revision": "70546864cd3c34af9472f2d7b9d0663d"
  },
  {
    "url": "library/library.html",
    "revision": "cddd24db8d7b7d148a4ea8e01c992c7d"
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
    "revision": "df712d9b6a743e6cd82cac79d7a3d6df"
  },
  {
    "url": "tag/Echarts.html",
    "revision": "6f8b68c0446a96f3157582f52e862c76"
  },
  {
    "url": "tag/Html5.html",
    "revision": "6f4c6daf9531221af55bef25c58ab3ac"
  },
  {
    "url": "tag/index.html",
    "revision": "87e2ee60ee47c8bf22d0e80832543e87"
  },
  {
    "url": "tag/JavaScript.html",
    "revision": "377a5e6cbbe24e33fe22a5af9d225579"
  },
  {
    "url": "tag/MySql.html",
    "revision": "3c431c9ce5c863f685b5d84a7d77fb34"
  },
  {
    "url": "tag/Nginx.html",
    "revision": "575a9f8c1d8a5c65cab25a6f5a19a284"
  },
  {
    "url": "tag/Node.js.html",
    "revision": "85e0c6144a0bb6ba42163ea8938a3d0c"
  },
  {
    "url": "tag/React.html",
    "revision": "d9e744842a47480c0d82cd0ca51919e9"
  },
  {
    "url": "tag/Vue.html",
    "revision": "b331370e2cc89fa236edc862395f9381"
  },
  {
    "url": "tag/Wechatapplet.html",
    "revision": "6f5b8f406ea35e43b7e2c418d3a097a0"
  },
  {
    "url": "tag/win7.html",
    "revision": "f75912c14ad43fc12b09c3c1a0161d5e"
  },
  {
    "url": "timeLine/index.html",
    "revision": "57a5f7364201b767db6588c9f8d56055"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "c98bbaaf9b996fde1326316d49cb1cae"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "0bb717cad1a6c2d0f7d0f9f13fd0e921"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "b621c071df9469aa0538f57ff77ac68e"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "2f8fefff87f819f7f89d86a19d271271"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "77efab4f7e8a7f5c576bcad040e732ea"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "eda7480df60f8efd6095b2785a1f5f02"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "2dd1319efc6146a8cd83919353f4444c"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "398419b6d385df52bd482f2a4636057d"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "3b73616a6c10a4664f2fac71fcf6083d"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "218b4d6bf624a3cc8690e602b83116e1"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "0ea91a3f505500234f959174ddd4d16f"
  },
  {
    "url": "views/other/guide.html",
    "revision": "dcaeb8299958062e1bd860c181998a59"
  },
  {
    "url": "views/react/1.html",
    "revision": "7606c17014f4275f196670b2a6343e3f"
  },
  {
    "url": "views/vue/1.html",
    "revision": "9c1f92076f95ee3e241d2b975ae51bb6"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "657da2cbf49cc49aa04e53b2ba15433d"
  },
  {
    "url": "views/win7/1.html",
    "revision": "d17084f37390f144929637b4ecb0153e"
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
