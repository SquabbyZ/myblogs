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
    "revision": "223479d0c1f90d627505451d09c305f1"
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
    "url": "assets/js/11.432dfa9f.js",
    "revision": "a11ab47da8f9856bada27cdf9247b232"
  },
  {
    "url": "assets/js/12.f1cdbe0f.js",
    "revision": "9fb604de3b5cbeff1caaf4b6d51fb7dc"
  },
  {
    "url": "assets/js/13.469a725a.js",
    "revision": "f20c46eabb87d9574506f4a286591b9e"
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
    "url": "assets/js/17.03169d38.js",
    "revision": "834b69d18eae9a6e47b5039989a74283"
  },
  {
    "url": "assets/js/18.5d73a34b.js",
    "revision": "3341d034cb8c0ef04a177588b7c158ed"
  },
  {
    "url": "assets/js/19.c384a4d7.js",
    "revision": "7cc5afacae16230c93c4bbfcb4fcfc23"
  },
  {
    "url": "assets/js/20.bc6dba35.js",
    "revision": "455ad08bc407a00dc9c6d9d7d817e77f"
  },
  {
    "url": "assets/js/21.192e2888.js",
    "revision": "563d19a3f35193eb31fead56f9b05a42"
  },
  {
    "url": "assets/js/22.388002b1.js",
    "revision": "669786c975d9f1dfd60211d9194c852f"
  },
  {
    "url": "assets/js/23.110077c1.js",
    "revision": "795313effb80eb7bf0d629df4126b1d9"
  },
  {
    "url": "assets/js/24.731911f7.js",
    "revision": "595ab24276e77541330333ad83bb4299"
  },
  {
    "url": "assets/js/25.bb6f9802.js",
    "revision": "88659eea57cbe0211ac6a39dd3e6126e"
  },
  {
    "url": "assets/js/26.e656e416.js",
    "revision": "83a45538881c0e5aeaca89c9183a28a3"
  },
  {
    "url": "assets/js/27.660b1a66.js",
    "revision": "b6ef7c360fb15fc387776fbc7c14ab70"
  },
  {
    "url": "assets/js/28.3159af37.js",
    "revision": "5af34347e95fcc6c2b5f2c098b01834b"
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
    "url": "assets/js/app.3a95dbfa.js",
    "revision": "9a9042b34d01a2b0bd0bb160d89e27fc"
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
    "revision": "d1331a98c5326a1e7fea19d5b3aa7c52"
  },
  {
    "url": "category/Echarts.html",
    "revision": "968333c37704cb660f080afc45489e41"
  },
  {
    "url": "category/Html5.html",
    "revision": "29308c1f0b9c338281d8810a327e95fc"
  },
  {
    "url": "category/index.html",
    "revision": "98f93b4d2c46eedaa9fbedddfe3ea1e5"
  },
  {
    "url": "category/JavaScript.html",
    "revision": "52e910395aa24a15803be86d17624713"
  },
  {
    "url": "category/MySql.html",
    "revision": "51a52d289756518759acbe646d9ca5be"
  },
  {
    "url": "category/Nginx.html",
    "revision": "b36041e3df3506bb0011307de765e189"
  },
  {
    "url": "category/Node.js.html",
    "revision": "b32f99b311ba59aee94caf63d3c01d41"
  },
  {
    "url": "category/React.html",
    "revision": "e78a32d007e31a42864e6bf306ca05d4"
  },
  {
    "url": "category/Vue.html",
    "revision": "eb886c9b4e20df1b098c3a23e413188a"
  },
  {
    "url": "category/Wechatapplet.html",
    "revision": "9bbb157cb2f9a8c5f60571043089fe2a"
  },
  {
    "url": "category/win7.html",
    "revision": "1dc93e25bc097eed7c2fc140c0ef70fe"
  },
  {
    "url": "index.html",
    "revision": "e5c0f4d2733d3bb87e050b497ff0ef93"
  },
  {
    "url": "library/index.html",
    "revision": "07a7e8ef9e78aae294f19ffb292db80a"
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
    "revision": "4d17efc5d033658144adc1009b02e4ff"
  },
  {
    "url": "tag/Echarts.html",
    "revision": "6bc210338caaa707bcaf9746f51a8b4b"
  },
  {
    "url": "tag/Html5.html",
    "revision": "5287981c0e58c31fa0d4267ce0cda961"
  },
  {
    "url": "tag/index.html",
    "revision": "b8e47e458e84ca131fc8014971155394"
  },
  {
    "url": "tag/JavaScript.html",
    "revision": "b74db179f6df9403d6422d986d61e3f0"
  },
  {
    "url": "tag/MySql.html",
    "revision": "16e0030586278e8d0de7320d1089711d"
  },
  {
    "url": "tag/Nginx.html",
    "revision": "d982071b282c5896f9563e8b6d81c603"
  },
  {
    "url": "tag/Node.js.html",
    "revision": "9a60903767b4d936dcd7457108114a8f"
  },
  {
    "url": "tag/React.html",
    "revision": "9f5a2847c13957914b107a979b192778"
  },
  {
    "url": "tag/Vue.html",
    "revision": "633e2ba0131617e6ed0d4c4b5e28c3a6"
  },
  {
    "url": "tag/Wechatapplet.html",
    "revision": "f0e03cf3dccd12520f0d282a456fdf02"
  },
  {
    "url": "tag/win7.html",
    "revision": "108e52e00b6ba922ac5b16278a8080c1"
  },
  {
    "url": "timeLine/index.html",
    "revision": "6dafff538dc8d4994e9b6a93d47c8636"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "fbffb811bba5fada6234e3bfb907544a"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "b139400754ccdb540e592618faf72b97"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "49c6f1ed9dd39d0f47f82dbfdb6d79dc"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "b85fdb53b29a5680ebf2451f472a8b8f"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "2cc30c3c7d559ca176778ca1bdeea68b"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "97d6e9e7f10ce09df3cfda068209085d"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "db44c1458457c4befca86c15bb5cfc09"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "38b6612cd000fb469cb6284d8fb93c67"
  },
  {
    "url": "views/JavaScript/3.html",
    "revision": "f13a220d150360eb7adac0f7da11484d"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "159e642b66b50632a43f22c2152f5682"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "46859f251566c8cf3a8f742e8b6bf8c7"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "7c50cf6fb303ae18f1d0118ad1af0ed0"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "1a577b7928ffc56ade95f25f03d142c1"
  },
  {
    "url": "views/other/guide.html",
    "revision": "89b82ad3bae281bef057a1ef45cf4206"
  },
  {
    "url": "views/react/1.html",
    "revision": "8e9062624849cf81e93c8e86e117c83c"
  },
  {
    "url": "views/vue/1.html",
    "revision": "4fabf479416c3a64bec3a8c993f4318e"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "98a6e9c6b2aeb004858d0c114630efba"
  },
  {
    "url": "views/win7/1.html",
    "revision": "4ca61cea231a98040205c8e6e0d411b4"
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
