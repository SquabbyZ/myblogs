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
    "revision": "7279cbf2b6d428c95990d679d3a19479"
  },
  {
    "url": "assets/css/0.styles.502cee66.css",
    "revision": "24000a880d1fc6b7fe10c55c792e877c"
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
    "url": "assets/js/1.e9d73dc4.js",
    "revision": "f8ecb4f25c279ad6403032a8e12a7b09"
  },
  {
    "url": "assets/js/10.278ff5bf.js",
    "revision": "33638b4a140f16fd442801cf1432bbe6"
  },
  {
    "url": "assets/js/11.842b0e15.js",
    "revision": "76193880440c0f3618047624d6af2898"
  },
  {
    "url": "assets/js/12.d0a9946e.js",
    "revision": "402e0b4548fdc9f97560aedbe11dbf87"
  },
  {
    "url": "assets/js/13.cbb2a428.js",
    "revision": "7412fda23fbc913f161ac8046d0ae270"
  },
  {
    "url": "assets/js/14.0e76990a.js",
    "revision": "d7487270f5c09d0d5297a85b694ba5c5"
  },
  {
    "url": "assets/js/15.1e2243c2.js",
    "revision": "3136fea34a089de27f2522f74c0d70bb"
  },
  {
    "url": "assets/js/16.6d4b01a5.js",
    "revision": "2efab71564fc4b9bdbf7e2845209f1d0"
  },
  {
    "url": "assets/js/17.d418e3f1.js",
    "revision": "10ec109c219ca3ce581449d5e29e06c5"
  },
  {
    "url": "assets/js/18.e52a5d35.js",
    "revision": "5cbe57fda35faf8ce5f9e558480d5514"
  },
  {
    "url": "assets/js/19.d6d97196.js",
    "revision": "9d155d93323358ce3aec2efa693bf511"
  },
  {
    "url": "assets/js/20.eed7206c.js",
    "revision": "b32daaf71cecba897946eece97e27e7b"
  },
  {
    "url": "assets/js/21.e56f7a3d.js",
    "revision": "9e5f915ca4c0cbc2d32d67827eeca41b"
  },
  {
    "url": "assets/js/22.d9022e35.js",
    "revision": "c6742afa1164477c85a01793ac31e114"
  },
  {
    "url": "assets/js/23.6738c919.js",
    "revision": "b2e0fe16eefec0cac09c7cb12810de9f"
  },
  {
    "url": "assets/js/24.9594fb12.js",
    "revision": "4b5650b81097167621cf3b130ba149e6"
  },
  {
    "url": "assets/js/25.dd69bd3e.js",
    "revision": "e329760618830f8f31dfbe2e5abdeba5"
  },
  {
    "url": "assets/js/26.52746975.js",
    "revision": "5f2666e9d69d644b4290d5590cd07f97"
  },
  {
    "url": "assets/js/27.e7ca48c4.js",
    "revision": "e07bf68eee2e87619eba11c8c03a6568"
  },
  {
    "url": "assets/js/28.3f8facf4.js",
    "revision": "cffae4c7493ee13794bf8e40178cf3e7"
  },
  {
    "url": "assets/js/29.cedc30a9.js",
    "revision": "5ef8d77e8fa67471f7fe8f94bf39a2e8"
  },
  {
    "url": "assets/js/30.fd9c7b15.js",
    "revision": "0058e152d21dc7b649fcac2734de3dcc"
  },
  {
    "url": "assets/js/31.6b2dd053.js",
    "revision": "13cf307eb4baa638818fbefae65d82c8"
  },
  {
    "url": "assets/js/32.b01d4d0a.js",
    "revision": "d9b8c1519743889cc277a54bab849863"
  },
  {
    "url": "assets/js/33.e781d61c.js",
    "revision": "b861dfc6a36999186f6065fffbb90b11"
  },
  {
    "url": "assets/js/34.e5e60479.js",
    "revision": "d03b90e92b07c37fb94b2593266e80ac"
  },
  {
    "url": "assets/js/35.dee554d4.js",
    "revision": "163a3d5bb4b852304821c2dd8ba16358"
  },
  {
    "url": "assets/js/36.4a2d4da4.js",
    "revision": "4b658de1d5845f6b3813c5ed42fb01d2"
  },
  {
    "url": "assets/js/37.ee30868f.js",
    "revision": "e0f8c9414f63dae20b40d13f4b3d4cd9"
  },
  {
    "url": "assets/js/38.13db4030.js",
    "revision": "cc8ebc46b4484c6a6d3d2e2c510ebd8a"
  },
  {
    "url": "assets/js/39.21b92899.js",
    "revision": "a81b3a34ee905eb954d2d76993aa819d"
  },
  {
    "url": "assets/js/4.aa6aa63d.js",
    "revision": "715d909f2d4c1f4ea2923eaea9b19075"
  },
  {
    "url": "assets/js/5.0a147d1d.js",
    "revision": "00eb323fecc82daf520ccc1234238b72"
  },
  {
    "url": "assets/js/6.c07e20e0.js",
    "revision": "af0127bbaa9f13baf9838022df22c8f4"
  },
  {
    "url": "assets/js/7.b24b0cd5.js",
    "revision": "bdc77318d6ec444ce5375ed69d4d227a"
  },
  {
    "url": "assets/js/8.5a14bc4b.js",
    "revision": "278aab27d3c69510089414a24f811d89"
  },
  {
    "url": "assets/js/9.d44100f6.js",
    "revision": "9b8a37744058e7b0a5d4b5d2e493f044"
  },
  {
    "url": "assets/js/app.64f21e03.js",
    "revision": "7b3c8577a4d48ff93dd4bb60e0e4e4f4"
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
    "revision": "b5ded6447cfdd74ad161d22721ad3686"
  },
  {
    "url": "category/Echarts.html",
    "revision": "fb80ac332ad49a8d80597341653cb089"
  },
  {
    "url": "category/Html5.html",
    "revision": "fe76313873fecd56f99fddcd5b2fc087"
  },
  {
    "url": "category/index.html",
    "revision": "2cb6180eb7e1c6a4773a86a29f8a7e31"
  },
  {
    "url": "category/JavaScript.html",
    "revision": "a1f8440735acb5341ba195df81cd92fc"
  },
  {
    "url": "category/JQuery.html",
    "revision": "69fe016b008d97c9e047808271b830cc"
  },
  {
    "url": "category/MongonDB.html",
    "revision": "8a1ac2761866216d2a4e1f5b37064fc6"
  },
  {
    "url": "category/MySql.html",
    "revision": "a1f5a7c34e8b9f6052d1ab82b4cce36f"
  },
  {
    "url": "category/Nginx.html",
    "revision": "d7ef695aeac26aad9c7263145f564686"
  },
  {
    "url": "category/Node.js.html",
    "revision": "f36e4fffb186c26b36f79efc9a4bb53e"
  },
  {
    "url": "category/React.html",
    "revision": "f56e55d19395fcea07233426ba67ccc7"
  },
  {
    "url": "category/Vue.html",
    "revision": "b53fd3be0a1c8017215fd6d46785209f"
  },
  {
    "url": "category/Wechatapplet.html",
    "revision": "8a2db414f8e236b6b3791ba8bb429bf9"
  },
  {
    "url": "category/win7.html",
    "revision": "70b6253cbd0b9da1d1ea6104bd9f851c"
  },
  {
    "url": "index.html",
    "revision": "b12e36737fb835ca5ec4b8ce44da9989"
  },
  {
    "url": "library/index.html",
    "revision": "e753c89f55057751daf1095cb3e5bba0"
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
    "revision": "e43aa94b359724758226266b858a8af6"
  },
  {
    "url": "tag/Echarts.html",
    "revision": "dca36fafa80ded994433d8b1956624f2"
  },
  {
    "url": "tag/Html5.html",
    "revision": "847db0c39ebe4cb8cae4dafb91569669"
  },
  {
    "url": "tag/index.html",
    "revision": "fd0d736c91728cf1b5a60ec968b3ed79"
  },
  {
    "url": "tag/JavaScript.html",
    "revision": "0d1c2c40835cd1372c297dc6316f7910"
  },
  {
    "url": "tag/JQuery.html",
    "revision": "5a1650ca0c442937a824e48a3c7d4384"
  },
  {
    "url": "tag/MongonDB.html",
    "revision": "aa7657f773ea7472c9aece99ec7f3778"
  },
  {
    "url": "tag/MySql.html",
    "revision": "4988096e4bd94121f4a6de58bfbb05cf"
  },
  {
    "url": "tag/Nginx.html",
    "revision": "d8e96fb6ac50de92429bdd7ab196ba37"
  },
  {
    "url": "tag/Node.js.html",
    "revision": "5320e8b1bab3620b8eda58e75cfca77f"
  },
  {
    "url": "tag/React.html",
    "revision": "8b32fb698f2fe2b973b650d0e4b26179"
  },
  {
    "url": "tag/Vue.html",
    "revision": "585edf7591a3f05c2e7d4caff4e01ecf"
  },
  {
    "url": "tag/Wechatapplet.html",
    "revision": "82857a956e64751ef4628038cf9f2ea5"
  },
  {
    "url": "tag/win7.html",
    "revision": "4d60ea9a3738214f2a782c9002b5c864"
  },
  {
    "url": "timeLine/index.html",
    "revision": "8e8a45b8f6d84fde2a9be88919a5870d"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "4219ebcd9227a910cb4d899f4c453ad7"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "6a34b6c0c1e8ffc53d3e6b46fe57d122"
  },
  {
    "url": "views/Centos/3.html",
    "revision": "d6517be47204ddf48f003766751b20aa"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "f61e718c89c6d92faf9fa91222b00c23"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "030264285a545f628cad5fef045ead67"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "62722feb1c00e125af33dea4a1cc52ce"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "20d09d0fada1340ac8c8bffeea0c7d22"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "11d0b23821d0ac3302ba57be0de5b721"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "cfeb7abe43f44bc2cf499705ed98fc54"
  },
  {
    "url": "views/JavaScript/3.html",
    "revision": "7c895216b7416a2d81b282644a251441"
  },
  {
    "url": "views/JQuery/1.html",
    "revision": "cee19809f40e195f4986329b3767d448"
  },
  {
    "url": "views/mondonDB/1.html",
    "revision": "609aa4446207ae0f162cf1859d8319ea"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "5d9e776357fe3272159c59d8406b67fd"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "2a66d8ea16f2e076121f2d305b377516"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "58d08e80270525d7c65589a87ddbf714"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "aed65e35d3a9eb606fd6a3a7b1c08b0d"
  },
  {
    "url": "views/nodejs/express.html",
    "revision": "9861e0149f7186665b1fd40bb32f4e3f"
  },
  {
    "url": "views/other/guide.html",
    "revision": "750f9f636cfdd0e4c3fd36fa139b8bde"
  },
  {
    "url": "views/react/1.html",
    "revision": "42ef390a33a4f455b51a162952fe97cf"
  },
  {
    "url": "views/vue/1.html",
    "revision": "520bb8529dcf07197f8f9ee1bcd8f401"
  },
  {
    "url": "views/vue/2.html",
    "revision": "4d9a4a503cc6468b0d238f2272c6a476"
  },
  {
    "url": "views/vue/3.html",
    "revision": "62cb8980e78e586863725ad66a26bdb0"
  },
  {
    "url": "views/vue/4.html",
    "revision": "8b8efd323e3591d3c448a98195c1e7fa"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "9d40be9024aac1e9cb252ec89015b1b0"
  },
  {
    "url": "views/win7/1.html",
    "revision": "557ec7c7db4cfaaab2bf779a9ae27644"
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
