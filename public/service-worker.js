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
    "revision": "b2699debd99f1e007819d0fbee1754e8"
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
    "url": "assets/js/1.d8833eab.js",
    "revision": "1e8a59ced5c3f4b3cc0d9e2f7f9cad69"
  },
  {
    "url": "assets/js/10.83876ac0.js",
    "revision": "1873287ff6efa1cb1f326b0f4619c66e"
  },
  {
    "url": "assets/js/11.ea52ce41.js",
    "revision": "c13bec455efc4fdbc59b755a3b6265cb"
  },
  {
    "url": "assets/js/12.2c355f9b.js",
    "revision": "674e37c20e4d0a2a9706d5b5c87f00fd"
  },
  {
    "url": "assets/js/13.feebfc36.js",
    "revision": "87e6e13f1cd3d8ac1eea178f1b99b663"
  },
  {
    "url": "assets/js/14.0373f070.js",
    "revision": "0dc1f013ca2f8c896090ef0152bdb6c9"
  },
  {
    "url": "assets/js/15.3b674e7a.js",
    "revision": "177096f9561a0afe8adda4ac9862829b"
  },
  {
    "url": "assets/js/16.df420a1f.js",
    "revision": "ab3f7c7171152b748367608684da8ab7"
  },
  {
    "url": "assets/js/17.53781369.js",
    "revision": "cec3807864aecd3a277e7f7015a000a3"
  },
  {
    "url": "assets/js/18.72def86a.js",
    "revision": "96a50649bdcb66ce3e948b00fc56779d"
  },
  {
    "url": "assets/js/19.98c81915.js",
    "revision": "1e0f61735fc690cfb0aaaa6ca60ffb88"
  },
  {
    "url": "assets/js/20.1b502f92.js",
    "revision": "f92a380cd5b9c83505a305c754d07e24"
  },
  {
    "url": "assets/js/21.eb8c8bdf.js",
    "revision": "b6f8daff898e240a72d2de9b71ff7140"
  },
  {
    "url": "assets/js/22.ad35d632.js",
    "revision": "d272bd6e283e7a41313834aabe01a839"
  },
  {
    "url": "assets/js/23.12e751a6.js",
    "revision": "de2ae13be80697c67ff8405338dddee9"
  },
  {
    "url": "assets/js/24.3c9053f1.js",
    "revision": "79176e97d2d41da7dfe750166a5c3055"
  },
  {
    "url": "assets/js/25.4f3c1087.js",
    "revision": "233fabdd982bbca7550687757d5a1f08"
  },
  {
    "url": "assets/js/26.763249f5.js",
    "revision": "c860cdb3a31b3c4e5aea7d90eaa44c24"
  },
  {
    "url": "assets/js/27.5dcd767b.js",
    "revision": "44fe63ee2f0c4fbc6cd08110d60b03ab"
  },
  {
    "url": "assets/js/28.b1cd36fb.js",
    "revision": "33bdb0c052f67a208ab6162d991ec4da"
  },
  {
    "url": "assets/js/29.834cb08b.js",
    "revision": "2d7840034b9084e3be563dd0ca7e3473"
  },
  {
    "url": "assets/js/30.3f8aaa9e.js",
    "revision": "9b0b215cfc8ef8e06c31258bc611620d"
  },
  {
    "url": "assets/js/31.b6522ea5.js",
    "revision": "37b2faf57317a1533c80347674295c45"
  },
  {
    "url": "assets/js/4.3fc247c1.js",
    "revision": "cb4b12d36d2280fa12ae0eb4f39ab364"
  },
  {
    "url": "assets/js/5.95ddbaf6.js",
    "revision": "253de68d061f0e8303d7040284b2ddb5"
  },
  {
    "url": "assets/js/6.c07e20e0.js",
    "revision": "af0127bbaa9f13baf9838022df22c8f4"
  },
  {
    "url": "assets/js/7.2fdc628b.js",
    "revision": "6e4d51cf32ca99ef394c321d6a1a8240"
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
    "url": "assets/js/app.258dd9c2.js",
    "revision": "e79a79870f6d99057765e5380e77d1b5"
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
    "revision": "335b896c35b347140c826852be02d88c"
  },
  {
    "url": "category/Echarts.html",
    "revision": "d11f8628c8d7dfd01098113f64e229da"
  },
  {
    "url": "category/Html5.html",
    "revision": "1ad19617f10fea95bd127a44035dccde"
  },
  {
    "url": "category/index.html",
    "revision": "953f23d8d918e0080847399600ebb3ed"
  },
  {
    "url": "category/JavaScript.html",
    "revision": "4a661cd5741adac809e5e36969083e1a"
  },
  {
    "url": "category/MySql.html",
    "revision": "497a2dc6727c21041c2b702a231a9497"
  },
  {
    "url": "category/Nginx.html",
    "revision": "ed7d6cc90801b7326a5d96fe7e91c4f2"
  },
  {
    "url": "category/Node.js.html",
    "revision": "397f1d2d86d9050cc365e8cd8878aedf"
  },
  {
    "url": "category/React.html",
    "revision": "05b9072e5c93843774072034e683b843"
  },
  {
    "url": "category/Vue.html",
    "revision": "454ce7a6900cefbb537145ec66e6397c"
  },
  {
    "url": "category/Wechatapplet.html",
    "revision": "2c27965397dfd8c22d3c6baa4afc9ec7"
  },
  {
    "url": "category/win7.html",
    "revision": "bb70911ad8096185a1613dd7f641466e"
  },
  {
    "url": "index.html",
    "revision": "9c2aaa4a97dad1edbb9dcb21c49fe3fc"
  },
  {
    "url": "library/index.html",
    "revision": "7b0d7db99374559ad55fb77a502adfa3"
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
    "revision": "97ee7f6ef917af01ed2911c74e99bc60"
  },
  {
    "url": "tag/Echarts.html",
    "revision": "2ef27505c573d651181f18d03dbdcfc3"
  },
  {
    "url": "tag/Html5.html",
    "revision": "2339b917ff1dafac56cf9b673903152b"
  },
  {
    "url": "tag/index.html",
    "revision": "c3107f3194ddf102d7de7f7fed75b809"
  },
  {
    "url": "tag/JavaScript.html",
    "revision": "555279f99fed4a538ed7c248b0a70377"
  },
  {
    "url": "tag/MySql.html",
    "revision": "4cb95ffba1a52a8cc86962f0a29a2653"
  },
  {
    "url": "tag/Nginx.html",
    "revision": "ddf9318673dbaef7fed0ada127756a31"
  },
  {
    "url": "tag/Node.js.html",
    "revision": "fcc47a3f68c029fd8d3cb727528196f3"
  },
  {
    "url": "tag/React.html",
    "revision": "7848261afe8df41bbbad3e668380981d"
  },
  {
    "url": "tag/Vue.html",
    "revision": "71ccb70cbaf4fff418ff7d97261d93eb"
  },
  {
    "url": "tag/Wechatapplet.html",
    "revision": "ab81c2031c6d9a50076fb186c3a627fb"
  },
  {
    "url": "tag/win7.html",
    "revision": "7908f5ca1f4c6690ae88bf4b0931f9b6"
  },
  {
    "url": "timeLine/index.html",
    "revision": "6eff680b9a7169ddf1734e5193850c60"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "ab6e1cc70086a914eb16b784288762a5"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "4188e0b52c5af084f6d58c13361dfd12"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "7d72045b9eb5d4906e353dce7fbbaab6"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "c356a642580cd3279985a638a8f3c21a"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "52636187443d186f47bac12c13602dee"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "45817d845260c5e0f0d0580f5bccb746"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "d6bd47313982ff7f0e1f45877e0213be"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "a06753d208b86964cbafde500be45547"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "57619dc87d2ed3f97d6c76d0a9698834"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "9102e6f5156c30c599c9f45d63fa4fbd"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "d776a2b4db236a1179007547f48a49f3"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "94292a926e71e7c1427f67a726afca1e"
  },
  {
    "url": "views/other/guide.html",
    "revision": "b80067474ef9abecd0a15fffe7fc4422"
  },
  {
    "url": "views/react/1.html",
    "revision": "eae47047f16171001899728ff83929c8"
  },
  {
    "url": "views/vue/1.html",
    "revision": "d4997376080dc59860141cfb83b40a6a"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "2029467b40f11adb5d1e20469a558ef6"
  },
  {
    "url": "views/win7/1.html",
    "revision": "d2c9bd4251d2564742898523361060d0"
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
