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
    "revision": "a42e465dfdb263a6db6897c60161e9e4"
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
    "url": "assets/js/12.27b2fbc3.js",
    "revision": "22bda270924eafb3faadb4d2c441205c"
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
    "url": "assets/js/18.5cce2714.js",
    "revision": "8a01b42ddfcee6f1319c38d0b77ba555"
  },
  {
    "url": "assets/js/19.914d1cff.js",
    "revision": "958b41b03543f5b6c1c10593e6f67466"
  },
  {
    "url": "assets/js/20.b2061dc8.js",
    "revision": "91d7b88ede5d12529272d5977ba31e38"
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
    "url": "assets/js/app.ff0b93cc.js",
    "revision": "15bba31d40765d4278a409013c81766e"
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
    "revision": "1de6a06bd7512b1aed3fe19e13cc17f7"
  },
  {
    "url": "category/Echarts.html",
    "revision": "e3b22d75bdb0f5eb9c58fee35009a5c1"
  },
  {
    "url": "category/Html5.html",
    "revision": "7afccb42edb17e96af902219cbd33cb1"
  },
  {
    "url": "category/index.html",
    "revision": "4e26fa85e9236858ff32890a3e8960a3"
  },
  {
    "url": "category/JavaScript.html",
    "revision": "e5324436e240deefecd7712bbd6abddb"
  },
  {
    "url": "category/MySql.html",
    "revision": "a0977f34bcb06e6908b6d5ca46caf8bf"
  },
  {
    "url": "category/Nginx.html",
    "revision": "cedd145d31097251a64c35e65ec5ee62"
  },
  {
    "url": "category/Node.js.html",
    "revision": "60f1fae90b50050aa4cfe4bf08b2c917"
  },
  {
    "url": "category/React.html",
    "revision": "e5a237b6e4106d474d7a36010823eedf"
  },
  {
    "url": "category/Vue.html",
    "revision": "dabea19034aadea86869eadf97e44e87"
  },
  {
    "url": "category/Wechatapplet.html",
    "revision": "17e35b4f360a5b1464e1361b6b1a0633"
  },
  {
    "url": "category/win7.html",
    "revision": "6a7505481c049f088885750a57a056b1"
  },
  {
    "url": "index.html",
    "revision": "57b6ce198cbcc1cfa365261db1f529b1"
  },
  {
    "url": "library/index.html",
    "revision": "1cfd4e1986319f42fb1716094c70f1e4"
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
    "revision": "a1340848eba93edeaca9e1218aba182d"
  },
  {
    "url": "tag/Echarts.html",
    "revision": "a180e17888a7cc6579caf489cb78eaec"
  },
  {
    "url": "tag/Html5.html",
    "revision": "4b3d592e612e5fe4ab5cb5e693ff8964"
  },
  {
    "url": "tag/index.html",
    "revision": "f38460d27f9d331a6cfaab5e9fc53b08"
  },
  {
    "url": "tag/JavaScript.html",
    "revision": "daabbf22d17755a0c81f28fa95e3ed43"
  },
  {
    "url": "tag/MySql.html",
    "revision": "212dbedcd4908f6cbcd82175dc999ddb"
  },
  {
    "url": "tag/Nginx.html",
    "revision": "2d64b70aa86dbfd2b713eeda1dc4466c"
  },
  {
    "url": "tag/Node.js.html",
    "revision": "fad5a87d703175240aa76833e7e7e0c3"
  },
  {
    "url": "tag/React.html",
    "revision": "6e277cca2c0876fc8c66becf041b2602"
  },
  {
    "url": "tag/Vue.html",
    "revision": "dd6f16b6e7b3507319040b321f56d055"
  },
  {
    "url": "tag/Wechatapplet.html",
    "revision": "2b986855e9f1aefb86da68281b4a5f8b"
  },
  {
    "url": "tag/win7.html",
    "revision": "55ef93d0e9f73f50beec3cffa7e8074c"
  },
  {
    "url": "timeLine/index.html",
    "revision": "97a485c63dbf7b1fa5ae9e77a5cbb9ad"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "397924707397091b8e3d8c60d6bf1ca1"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "b7447bc3b1e1e600096fe15a5265f184"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "6c538235d3aa24d9df0832c4477d0332"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "fa63dadf0f7076e920d8d0d97054743b"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "5d4dc59e9673c2444fb678c9b045ba77"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "8fbb842ad62bc8ab2d4567acbee93467"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "9f8adb2ebdd16751bd01d83bd0ddeb4f"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "9c063fcac3f408f92a6f4e21acd0edc7"
  },
  {
    "url": "views/JavaScript/3.html",
    "revision": "dae995fc58503e3dd6d57697fc8ab31b"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "1c93197eb1b4f019a767e577099d9ab5"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "18b740b58f31ff5702b7513bd2394b6a"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "b353d0dbba0efacd5b4f37021271e8d1"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "8f4f15ba8619cfe259ad564d2dd784f0"
  },
  {
    "url": "views/other/guide.html",
    "revision": "de474fd36aa86d0c71a92dcd874d5656"
  },
  {
    "url": "views/react/1.html",
    "revision": "fcdaea599508c43c30a4ab6412d1db78"
  },
  {
    "url": "views/vue/1.html",
    "revision": "d20a1ffa329ff8bb71b131772bf047fd"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "83bfc804be1573723cd57623179cd191"
  },
  {
    "url": "views/win7/1.html",
    "revision": "64f34206c67e5733ae166efbe004461e"
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
