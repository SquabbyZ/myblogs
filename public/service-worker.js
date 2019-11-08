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
    "revision": "59b00c92418270fd621259e4a31406a9"
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
    "url": "assets/js/10.19a98f03.js",
    "revision": "8efa952274c053a538a16c3fdc04c20c"
  },
  {
    "url": "assets/js/11.53ea6390.js",
    "revision": "64a1d9ae56c8a0ab501b2dddb60f4266"
  },
  {
    "url": "assets/js/12.77b9c422.js",
    "revision": "8d55d3d392d582d48ee9bb1fa08ef266"
  },
  {
    "url": "assets/js/13.cbb2a428.js",
    "revision": "7412fda23fbc913f161ac8046d0ae270"
  },
  {
    "url": "assets/js/14.8fd435ab.js",
    "revision": "28e37b7c63ab5ec5f13385eeaad2a9a2"
  },
  {
    "url": "assets/js/15.8e064a59.js",
    "revision": "7b3538f0ec55d8978723a48408bb380d"
  },
  {
    "url": "assets/js/16.3d8bb140.js",
    "revision": "b8717f67a76501d3f6d35f7163e0181f"
  },
  {
    "url": "assets/js/17.3d9c14f6.js",
    "revision": "69e11377f7ea87183f7a95eaf6d797c5"
  },
  {
    "url": "assets/js/18.ecb1020c.js",
    "revision": "0f468938e2c8a00eb643a2cd80d2a1ba"
  },
  {
    "url": "assets/js/19.4d287c46.js",
    "revision": "50ba33819976f1aba741455fccfc001e"
  },
  {
    "url": "assets/js/20.e9bef936.js",
    "revision": "103f32f25a643692aa03c440980e3a58"
  },
  {
    "url": "assets/js/21.267d50e6.js",
    "revision": "5432f42838833c980c8423e6852d59da"
  },
  {
    "url": "assets/js/22.7851f49c.js",
    "revision": "ad724f5a77bc6c2cc91909ae4cbaa761"
  },
  {
    "url": "assets/js/23.25fabf0b.js",
    "revision": "447f8d9a3eeaba585d4adb13be564657"
  },
  {
    "url": "assets/js/24.5bd43fae.js",
    "revision": "d9e752935c1f47540f083a7ae1b060e5"
  },
  {
    "url": "assets/js/25.5f820fef.js",
    "revision": "adb998369069a3ca0e5c159345cfd1d1"
  },
  {
    "url": "assets/js/26.1da801f8.js",
    "revision": "b9973430bce02af7ee3094c5201ae21d"
  },
  {
    "url": "assets/js/27.4fd01116.js",
    "revision": "bcbaf6ec266f7cfc985bdaa5615272fd"
  },
  {
    "url": "assets/js/28.ed9781ce.js",
    "revision": "34f261f1e30532ab731360d831ad74b1"
  },
  {
    "url": "assets/js/29.784335cb.js",
    "revision": "daa738a7f6e3cc5ac60057b8d13c49d9"
  },
  {
    "url": "assets/js/30.1e5a3daf.js",
    "revision": "e8e3f77f560fec37f50acd1aeabbf746"
  },
  {
    "url": "assets/js/31.7ad2f1f7.js",
    "revision": "553653d7fc014a9fc9c3932a5b301be6"
  },
  {
    "url": "assets/js/32.7b950bd5.js",
    "revision": "795e10136dc5286c9c0c379b953e4e05"
  },
  {
    "url": "assets/js/33.7efafe2b.js",
    "revision": "3f0c05ce2c9b22709d1ad28ebaa1275f"
  },
  {
    "url": "assets/js/34.9d899129.js",
    "revision": "ba9569c4d8ad9b58578c5cda319bd2e5"
  },
  {
    "url": "assets/js/35.4c536f27.js",
    "revision": "bdf378d2bd2a14892e3ae906fcf55225"
  },
  {
    "url": "assets/js/36.09f3224a.js",
    "revision": "172cde44ee0643fbc8ad8b8c85a44e7d"
  },
  {
    "url": "assets/js/37.03cc649d.js",
    "revision": "6770cfe34d592f073876ae639eaa7990"
  },
  {
    "url": "assets/js/38.a83e15d0.js",
    "revision": "4b10ea678b6471103287df787cb529f6"
  },
  {
    "url": "assets/js/39.7264aaac.js",
    "revision": "09f98b2c61c154b43ef00ce8172010a7"
  },
  {
    "url": "assets/js/4.ea26f337.js",
    "revision": "66adda9c486c89437355e91421c39c1f"
  },
  {
    "url": "assets/js/40.c7c60ca6.js",
    "revision": "c4e29d0ba11c9cc2997c7d2ac07aa100"
  },
  {
    "url": "assets/js/41.ad753d61.js",
    "revision": "8574aec476b06bb6fbb83daa0c05ce55"
  },
  {
    "url": "assets/js/42.44b29605.js",
    "revision": "7123837f75260c81598965f1a1344e21"
  },
  {
    "url": "assets/js/43.d62fe558.js",
    "revision": "b3ddd74bf06f3aea48fcc2b1a78e908a"
  },
  {
    "url": "assets/js/44.1f931d84.js",
    "revision": "9eb71876bfcc5d3ffd965cf9c128b499"
  },
  {
    "url": "assets/js/45.3d6f73c8.js",
    "revision": "3b0375e3465e86b40af0b41f37088d0f"
  },
  {
    "url": "assets/js/46.d723d672.js",
    "revision": "4c49755accfc37183715ec25a5a2531b"
  },
  {
    "url": "assets/js/47.aee343fd.js",
    "revision": "1d41c0a1fbc5c0cacc3a3902e751723a"
  },
  {
    "url": "assets/js/48.4c5f62c7.js",
    "revision": "e1086cde4fc8af773465674358befbf5"
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
    "url": "assets/js/app.ea1012f6.js",
    "revision": "5437bdc9782105dc5f0f3169ea2979cc"
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
    "revision": "647ace558227a0b864792a30f1b709f3"
  },
  {
    "url": "category/Echarts.html",
    "revision": "ce69096b7130e94b96217e2e991c8610"
  },
  {
    "url": "category/Html5.html",
    "revision": "0a9b388bc6eaf448292d6ea4e855d5d3"
  },
  {
    "url": "category/index.html",
    "revision": "fe741c0247b9f6d3ff06476b93defb75"
  },
  {
    "url": "category/JavaScript.html",
    "revision": "8cd0eb1afb77eaf8c0a3d5ce9fd260f9"
  },
  {
    "url": "category/Jenkins.html",
    "revision": "cc48216eb2de6368ef4d9e4155b5a364"
  },
  {
    "url": "category/JQuery.html",
    "revision": "f89b2a606e3bd4dc5eb41a343ab5b89a"
  },
  {
    "url": "category/MongonDB.html",
    "revision": "2dbc83b00e9a658bf17053c8504bf70e"
  },
  {
    "url": "category/MySql.html",
    "revision": "7d8326aab1c24449c0a96019c9063dc8"
  },
  {
    "url": "category/Nginx.html",
    "revision": "b3d5ce80a225b020d316c6457729d958"
  },
  {
    "url": "category/Node.js.html",
    "revision": "0f4348d9a7ba98af9312249ec05d214a"
  },
  {
    "url": "category/Nuxt.html",
    "revision": "0dc0289e935ac6a0e5baa9c5fd59e775"
  },
  {
    "url": "category/React.html",
    "revision": "f2de6c4d1bc1901b276d1b10f2ea7d9e"
  },
  {
    "url": "category/Vue.html",
    "revision": "337c08463e612d0e83175d9eef5aa3ce"
  },
  {
    "url": "category/Wechatapplet.html",
    "revision": "4cd10d2be282de8c162c9107c9e13eda"
  },
  {
    "url": "category/win7.html",
    "revision": "659ef8d54de8ae5c81d29dd511b37f1a"
  },
  {
    "url": "index.html",
    "revision": "ae106d7a4fc16d592328c5f1b50978f5"
  },
  {
    "url": "library/index.html",
    "revision": "53a2db03729e24ad30f5b60cf5f54b78"
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
    "revision": "0e8f980ef060101d59a4e14371020b00"
  },
  {
    "url": "tag/Echarts.html",
    "revision": "a090526625263687453d7a8714476bc3"
  },
  {
    "url": "tag/Html5.html",
    "revision": "4f8f167964ccb20327864debc05bf019"
  },
  {
    "url": "tag/index.html",
    "revision": "a2b0f8f74e3ce49b7cf6fc25b5fcd033"
  },
  {
    "url": "tag/JavaScript.html",
    "revision": "877f135c84b4a1da3c28f446bbf47184"
  },
  {
    "url": "tag/Jenkins.html",
    "revision": "2a0fe034afab9b974d60eaba54135490"
  },
  {
    "url": "tag/JQuery.html",
    "revision": "94e440f67fd53bc5d5d0834ebb49bccd"
  },
  {
    "url": "tag/MongonDB.html",
    "revision": "b2591a580682e1fe2bfea5b5b32633e0"
  },
  {
    "url": "tag/MySql.html",
    "revision": "594f1ded32549cb2990ce993c65e5b06"
  },
  {
    "url": "tag/Nginx.html",
    "revision": "38f02c8f5c902d39aeec7bc72ca3a8eb"
  },
  {
    "url": "tag/Node.js.html",
    "revision": "408ccc492c22d97058bf5dce29b4f0cb"
  },
  {
    "url": "tag/Nuxt.html",
    "revision": "09a71f2a56e718dfcf606e76e14754cf"
  },
  {
    "url": "tag/React.html",
    "revision": "ca2948129d83e5c369692d860582ed71"
  },
  {
    "url": "tag/Vue.html",
    "revision": "2ad9b6d063857fcf6fa3aee8a1c3da86"
  },
  {
    "url": "tag/Wechatapplet.html",
    "revision": "cd688fe71dee454397717b6b0da0f683"
  },
  {
    "url": "tag/win7.html",
    "revision": "f8bc08d8ff104a8a1d36c447921fbb7b"
  },
  {
    "url": "timeLine/index.html",
    "revision": "d87ff4f2ea1b4f4b612d5b234c7af144"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "6ef4447a8879c6c81ce6d7a2c1b79dc0"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "3287af36d3d66f30a3a54010e0cc5b59"
  },
  {
    "url": "views/Centos/3.html",
    "revision": "ca83ae92bce97f410ed31f3e00b41389"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "e8c32e749a6b830698050d4935816c8b"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "f0ede583fe419ba7ecbfe5201251e9e9"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "b6f98b4ba6757d80e1ba28c47e4894e9"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "ba46e66218c919f3ea0b700903976498"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "8cd629bfe0fc093512faa301cf62fcf8"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "d1d24e5acf1ed5ac8d257651202eef18"
  },
  {
    "url": "views/JavaScript/3.html",
    "revision": "2629507fdc3096930805146d689425e6"
  },
  {
    "url": "views/Jenkins/1.html",
    "revision": "5620162eba412448c0cb9eb4eafa5676"
  },
  {
    "url": "views/Jenkins/2.html",
    "revision": "9e3f80de440c4a66e03f266f5f2c710d"
  },
  {
    "url": "views/Jenkins/3.html",
    "revision": "de4d6f296203004a3c6700376be362a6"
  },
  {
    "url": "views/Jenkins/4.html",
    "revision": "d372e91188688e02ab76384574f9865e"
  },
  {
    "url": "views/Jenkins/5.html",
    "revision": "24fd2a517d09e203473ea2f724f86c47"
  },
  {
    "url": "views/Jenkins/jenkins+gitblit.html",
    "revision": "dbe9090f3a64daf726c23844b72ac283"
  },
  {
    "url": "views/JQuery/1.html",
    "revision": "2ff1c6f1d897bb935ec8c9ae2abf2d70"
  },
  {
    "url": "views/mondonDB/1.html",
    "revision": "e6d57e9ea9808e630d0d86428cb2d0f7"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "20fb40477ad00c42841d692fdda28140"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "4bd4814de1472e3569cefe58c1b76d64"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "00ec760fc64175ed8d3b1ff8d699abad"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "2b2049f1896bc650f3b33c3f2dbf7777"
  },
  {
    "url": "views/nodejs/express.html",
    "revision": "c8d78dff2dcb1c5c2d4902910e1a7752"
  },
  {
    "url": "views/nuxt/lesson1.html",
    "revision": "b33ac94518968e384a835a8280cadf6b"
  },
  {
    "url": "views/nuxt/lesson2.html",
    "revision": "6459c7b51a15a829b66f561ce24eb4b9"
  },
  {
    "url": "views/other/guide.html",
    "revision": "663402ca90f3239a78e4f69bf92ba233"
  },
  {
    "url": "views/react/1.html",
    "revision": "43115f81ef6d10154f08c796f8ac2ed3"
  },
  {
    "url": "views/vue/1.html",
    "revision": "484287eba34606c5bed356f5c34cbcd0"
  },
  {
    "url": "views/vue/2.html",
    "revision": "b4714e4b706464d1cccdc1d2081b3a4a"
  },
  {
    "url": "views/vue/3.html",
    "revision": "14a021e92115c60658191a8468f1b6df"
  },
  {
    "url": "views/vue/4.html",
    "revision": "a11a112e968ef74950d15077de9c35af"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "dc054a9b54eb5e4cc8320dcf0c5b42c4"
  },
  {
    "url": "views/win7/1.html",
    "revision": "5b3401e9cf3074a4d37c0578c54758b3"
  },
  {
    "url": "views/win7/2.html",
    "revision": "74a72ba2d4dcaf0e7e2d6cb0836f1198"
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
