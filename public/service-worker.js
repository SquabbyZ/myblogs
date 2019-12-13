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
    "revision": "c3e5b32c025f57ef859db73d2bb4f8f9"
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
    "url": "assets/js/1.d8833eab.js",
    "revision": "1e8a59ced5c3f4b3cc0d9e2f7f9cad69"
  },
  {
    "url": "assets/js/10.6f337ad7.js",
    "revision": "85e4b71349e180ebf4d10636caff0bb9"
  },
  {
    "url": "assets/js/11.1f9c0432.js",
    "revision": "ed8b9bd49008ba5c22ad0d2b03d272b0"
  },
  {
    "url": "assets/js/12.6275ea63.js",
    "revision": "b93fc50428b5fe6a7ca1aecf076cfaee"
  },
  {
    "url": "assets/js/13.8648807c.js",
    "revision": "74e7af049a08b0599c2a24f6e6c19d09"
  },
  {
    "url": "assets/js/14.d3f27a96.js",
    "revision": "8a4e310da18ff54aea5fdfc6159895be"
  },
  {
    "url": "assets/js/15.ea204af7.js",
    "revision": "1eee83f41ecec02ddd8787fe36c0a7a0"
  },
  {
    "url": "assets/js/16.7367b523.js",
    "revision": "b02840347133becc34b132a7654e674e"
  },
  {
    "url": "assets/js/17.2b5adb71.js",
    "revision": "edb9c771c670fe44693609e8417ac81a"
  },
  {
    "url": "assets/js/18.f9704852.js",
    "revision": "f8da185b094d3bffaaee01bfc1e9db42"
  },
  {
    "url": "assets/js/19.b6ca52b9.js",
    "revision": "1b18ca5bbb6ac96455c4788cc575cacd"
  },
  {
    "url": "assets/js/20.d728aa68.js",
    "revision": "7ba495c225af0fed281664ece932a503"
  },
  {
    "url": "assets/js/21.28442c4b.js",
    "revision": "c3d7db30dabf0ed160fc781ece939aa3"
  },
  {
    "url": "assets/js/22.7ea2f851.js",
    "revision": "06f7c31331fa3a09eb4b5c22885103d6"
  },
  {
    "url": "assets/js/23.42c3040b.js",
    "revision": "49ff033b8148515c7cb325b785d944be"
  },
  {
    "url": "assets/js/24.546b0b0b.js",
    "revision": "c3ce5aa730296bc4e49461eb1d06b970"
  },
  {
    "url": "assets/js/25.5bed4b8c.js",
    "revision": "bc7d5e6d01d88134362b1df365c48fbc"
  },
  {
    "url": "assets/js/26.9e34eec0.js",
    "revision": "66456e4664560c284d5532e834e1cbe2"
  },
  {
    "url": "assets/js/27.0fe54803.js",
    "revision": "e419b56b294180a70d8ede8dea6f77a1"
  },
  {
    "url": "assets/js/28.4ce9e9b0.js",
    "revision": "47e2d6e6fc042ed9f24bfc3918904676"
  },
  {
    "url": "assets/js/29.eeed837d.js",
    "revision": "9f9f0c08c68a93baddc7f2137da07a5e"
  },
  {
    "url": "assets/js/30.f07359e7.js",
    "revision": "1fef02535f59be4e18c07a4512095dc4"
  },
  {
    "url": "assets/js/31.8d26224a.js",
    "revision": "6d34807df51ad0e2bdc958fbbdb80758"
  },
  {
    "url": "assets/js/32.42491c16.js",
    "revision": "7bbd12176ceb0ba9c5e65a01ed747e9c"
  },
  {
    "url": "assets/js/33.7a1b0938.js",
    "revision": "02c78e34e673b16fc7a3dd4cc617c584"
  },
  {
    "url": "assets/js/34.ec2e53cf.js",
    "revision": "16b9b9405347a528397c66eb094b43ef"
  },
  {
    "url": "assets/js/35.3ad8f78e.js",
    "revision": "37c837f68d06b421b1176192425af44e"
  },
  {
    "url": "assets/js/36.28daea32.js",
    "revision": "8ef8ec51d6830a158b227f5ec91e1798"
  },
  {
    "url": "assets/js/37.f713d290.js",
    "revision": "3f905d64c8a5966752be3fc48ddccaf9"
  },
  {
    "url": "assets/js/38.6f5884cd.js",
    "revision": "7df20de70ee30cdc798188ca6d935458"
  },
  {
    "url": "assets/js/39.cf0fb65e.js",
    "revision": "1f337dc2556ca3538eba1858950f2f6a"
  },
  {
    "url": "assets/js/4.41bed2ca.js",
    "revision": "e1af1547f251f4f344f1bfd9814c3cc0"
  },
  {
    "url": "assets/js/40.ba590a1f.js",
    "revision": "ae424e4e88f1573c4b4b14f2d50cece3"
  },
  {
    "url": "assets/js/41.2b5d8cf7.js",
    "revision": "3182de22dd4ea600ee1cc7f47e2e9e92"
  },
  {
    "url": "assets/js/42.a854b16d.js",
    "revision": "7efa982782d42281ad6cf3482f9c0769"
  },
  {
    "url": "assets/js/43.32ad6138.js",
    "revision": "d7220de60829ab518ff2f94a3fe18f66"
  },
  {
    "url": "assets/js/44.feef1bf2.js",
    "revision": "84403b30628d3850c27a8e7de8cc5004"
  },
  {
    "url": "assets/js/45.da324d2c.js",
    "revision": "3db902e32ce0d9d5feee3f6a0e97ac4b"
  },
  {
    "url": "assets/js/46.8f541bee.js",
    "revision": "849e3bd09752b6dcc7ce114c27344002"
  },
  {
    "url": "assets/js/47.c156416b.js",
    "revision": "f0ed927d7147a2ea2132cce1c71a19f9"
  },
  {
    "url": "assets/js/48.04037c97.js",
    "revision": "d9d6e4d1293290eeb348f35b3569f4ca"
  },
  {
    "url": "assets/js/49.0df06baf.js",
    "revision": "649a4ef250e22f3e524fa5bb1b8ccf1c"
  },
  {
    "url": "assets/js/5.95ddbaf6.js",
    "revision": "253de68d061f0e8303d7040284b2ddb5"
  },
  {
    "url": "assets/js/50.33d5a5fe.js",
    "revision": "1d0ac77dd04a65a3dfaa5578e07a7cbf"
  },
  {
    "url": "assets/js/51.dcee6dd8.js",
    "revision": "aa00fd362a1ee16cad0c3be03d50f938"
  },
  {
    "url": "assets/js/52.b85ebcb3.js",
    "revision": "a45d828d2b81433a5b3c8e19dbc5dd03"
  },
  {
    "url": "assets/js/53.7e10c174.js",
    "revision": "bdc0a0c5a9e29c753ce43d6c75670826"
  },
  {
    "url": "assets/js/54.81fe8e4f.js",
    "revision": "712c85098fd902aedfbb07c14e8a1741"
  },
  {
    "url": "assets/js/55.86275bfa.js",
    "revision": "1ee49b484a7aaf69d0a806ff6bb413f6"
  },
  {
    "url": "assets/js/56.afea45d6.js",
    "revision": "47ac8b51e53cc3a6d506035157c7a9c2"
  },
  {
    "url": "assets/js/57.9933c2d9.js",
    "revision": "83b0b27d0a43b8f3a64b916385b9d9f2"
  },
  {
    "url": "assets/js/58.69897f78.js",
    "revision": "3fe99463edc7827c3eb542ff4eb01b2c"
  },
  {
    "url": "assets/js/59.efdc021a.js",
    "revision": "2c0eedc1750d19873d12c84229ffca8a"
  },
  {
    "url": "assets/js/6.c07e20e0.js",
    "revision": "af0127bbaa9f13baf9838022df22c8f4"
  },
  {
    "url": "assets/js/60.70169cd7.js",
    "revision": "cd7943c84324ee1bc0f585abba160ba1"
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
    "url": "assets/js/app.346bca82.js",
    "revision": "26533cd6633dda490863e9bf20a867d4"
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
    "revision": "ebc5d5ec45e0b08a7be5b95af7bc0187"
  },
  {
    "url": "category/Docker.html",
    "revision": "2bd0fcaa8871c5b89989a5d8b90e3b8e"
  },
  {
    "url": "category/Echarts.html",
    "revision": "41dbb0334ac825e479278a82c5117306"
  },
  {
    "url": "category/elasticsearch.html",
    "revision": "5d3abcfa09698f7be8e6a7936ebb8ca3"
  },
  {
    "url": "category/Html5.html",
    "revision": "c6ef96b4807c41f8877b8f44004c0cd2"
  },
  {
    "url": "category/index.html",
    "revision": "918083ba2e4ecb551eed0f904df40181"
  },
  {
    "url": "category/JavaScript.html",
    "revision": "86c5b94345cee9b6d349e777096370f8"
  },
  {
    "url": "category/Jenkins.html",
    "revision": "76fedaa929190bea5b8d81aec97dd6ec"
  },
  {
    "url": "category/JQuery.html",
    "revision": "1886013093b53954aa0b30b9921bd0a1"
  },
  {
    "url": "category/Kylin.html",
    "revision": "882cda3ee58f3f7dc8664944c3317d98"
  },
  {
    "url": "category/Leaflet.html",
    "revision": "55ecaa8b1e67cef740cddf19fa79661e"
  },
  {
    "url": "category/MongonDB.html",
    "revision": "2701f6dfb8f3f17e7b8817f42a2068d1"
  },
  {
    "url": "category/MySql.html",
    "revision": "64afc76ff4ed37305d7d7c850621e60f"
  },
  {
    "url": "category/Nginx.html",
    "revision": "450bd78efb95adb84985a6c9cb3de4de"
  },
  {
    "url": "category/Node.js.html",
    "revision": "fda7f2d72e3445d3c8005144f1d846bc"
  },
  {
    "url": "category/Nuxt.html",
    "revision": "cc0cb96384a2caa11b0c7734b54466a4"
  },
  {
    "url": "category/React.html",
    "revision": "6b3f5f3a427d621debc106d398dfa2da"
  },
  {
    "url": "category/Vue.html",
    "revision": "0c7bf66a8215e951c67a808046f9a025"
  },
  {
    "url": "category/Wechatapplet.html",
    "revision": "588efb6e840d007584a11c30924b54d9"
  },
  {
    "url": "category/win7.html",
    "revision": "b3c8ccf124c851c56ba498ef5ce15d04"
  },
  {
    "url": "index.html",
    "revision": "49e0dc49dedc17b28ec7e3ec5894af11"
  },
  {
    "url": "library/index.html",
    "revision": "202f201eab0fa9a44fdf05fe658dbd70"
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
    "revision": "38b01205780657c6497b6c92dbcb2f92"
  },
  {
    "url": "tag/Docker.html",
    "revision": "53db7a0bcecf5743890426cea38f5c1e"
  },
  {
    "url": "tag/Echarts.html",
    "revision": "1cb173e90837ea3275fd80d271e544f1"
  },
  {
    "url": "tag/elasticsearch.html",
    "revision": "5ed66b627d21a2fbf63f54001830ba8d"
  },
  {
    "url": "tag/Html5.html",
    "revision": "b93471a5bc1c4424d71b8593acbeed06"
  },
  {
    "url": "tag/index.html",
    "revision": "a2df75b1e890e8b21baac06fe7b2264f"
  },
  {
    "url": "tag/JavaScript.html",
    "revision": "51e3bc46652be58203c39c12d2451719"
  },
  {
    "url": "tag/Jenkins.html",
    "revision": "a133f879da03ae6aac72e5ed80145a4c"
  },
  {
    "url": "tag/JQuery.html",
    "revision": "761b2fe23652afe14fc52f1e05e4f62d"
  },
  {
    "url": "tag/Kylin.html",
    "revision": "ed31d88178de55920aa27b2afffa7fc7"
  },
  {
    "url": "tag/Leaflet.html",
    "revision": "df9c2c95becbd904332e4df3df195891"
  },
  {
    "url": "tag/MongonDB.html",
    "revision": "a66d9a7169a46647296af35442c291ca"
  },
  {
    "url": "tag/MySql.html",
    "revision": "e8b14c60f05fda9e91ce30b17af95d8e"
  },
  {
    "url": "tag/Nginx.html",
    "revision": "6479e753df5a471603b2f7d26ee843aa"
  },
  {
    "url": "tag/Node.js.html",
    "revision": "e7b21aecef41cf5d2c57828cd4f87d25"
  },
  {
    "url": "tag/Nuxt.html",
    "revision": "150a1214c116cc30f8a2076dbcf790a9"
  },
  {
    "url": "tag/React.html",
    "revision": "4a44e7d1f3c8816e8c03705eb485efac"
  },
  {
    "url": "tag/Vue.html",
    "revision": "8dace47356ef03f2f864ce1ff6d56b1d"
  },
  {
    "url": "tag/Wechatapplet.html",
    "revision": "1e49b95203d66e0594868e6210afc284"
  },
  {
    "url": "tag/win7.html",
    "revision": "c64a6641a656c9f61f5b9c5a854a9146"
  },
  {
    "url": "timeLine/index.html",
    "revision": "bd97110c806188e58fd84fe934f1ad60"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "99d665cf827f64742e8c5d965c0c8a94"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "8700456aaba8ab643aa0c6e7b9baa9e3"
  },
  {
    "url": "views/Centos/3.html",
    "revision": "5603beaeb9282c800b230b5f96513901"
  },
  {
    "url": "views/Docker/Docker使用过程中遇到的问题.html",
    "revision": "f5022b8b44a59d613839da74f7000021"
  },
  {
    "url": "views/Docker/Docker命令.html",
    "revision": "c0ce3595c6231ea55ab32cb04bffd87f"
  },
  {
    "url": "views/Docker/Docker容器挂载.html",
    "revision": "607d9d3a139eacf7708c896303885cd9"
  },
  {
    "url": "views/Docker/Docker迁移与备份.html",
    "revision": "0b70674012814ce7487190fe61bf296f"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "61ecd66495edf6f1c67a2e65fa9d6eef"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "8ac98183e51b3ce49bf7b62b32cfbf97"
  },
  {
    "url": "views/elasticSearch/2.html",
    "revision": "90b81c6992a145f8bc7ff2317cf4489e"
  },
  {
    "url": "views/elasticSearch/3.html",
    "revision": "f6e71ec303732cb7bec0a6d34f69e2d9"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "dbe2d5af41a23008db5f1f217fb31574"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "edb1c58bb2b71c6b38b4d917df7a4477"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "4f5b416b4b0e045126b31901b8af4cf3"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "bc0e5aef5f9a5ba2640c76323e35d7f8"
  },
  {
    "url": "views/JavaScript/3.html",
    "revision": "e627f86016c789114673bd0f1c86db1c"
  },
  {
    "url": "views/Jenkins/1.html",
    "revision": "45a33673b3fa0d8219126e61e8f2e9a6"
  },
  {
    "url": "views/Jenkins/2.html",
    "revision": "de15a7bf4df8d3938626fef5c1ff34bb"
  },
  {
    "url": "views/Jenkins/3.html",
    "revision": "e692065dd02d2c6882e469f325c14708"
  },
  {
    "url": "views/Jenkins/4.html",
    "revision": "254587aad8ae958d87cb4e203801f73e"
  },
  {
    "url": "views/Jenkins/5.html",
    "revision": "96ce33b6a8c77960a0298ef4d9e82dbb"
  },
  {
    "url": "views/Jenkins/jenkins+gitblit.html",
    "revision": "c1b641380951c511dedf054c18631d2e"
  },
  {
    "url": "views/JQuery/1.html",
    "revision": "9482eb565827324350ff3b1c2e36818c"
  },
  {
    "url": "views/Kylin/1.html",
    "revision": "11dbc998a1ccd93ca8b4649ea717ef0a"
  },
  {
    "url": "views/Leaflet/1.html",
    "revision": "68d91654579b99bfee5c571432e2539d"
  },
  {
    "url": "views/mondonDB/1.html",
    "revision": "3557e7e09243b7a6ce82a73d55f8b4ac"
  },
  {
    "url": "views/mondonDB/2.html",
    "revision": "131e01812452842b8d9bef3228e3399c"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "91edc8e196285beeeca15774273820e0"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "fc84115cc382f8bf5757aac309877137"
  },
  {
    "url": "views/nginx/2.html",
    "revision": "1980848ce02790952bdee693e7d7861b"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "7e2c5b968f3757567096b9d68aeb92b2"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "5291b90c74607d74c5f0bcc83d7bb721"
  },
  {
    "url": "views/nodejs/3.html",
    "revision": "a0998a36f9256e6504203a1f8b81308b"
  },
  {
    "url": "views/nodejs/4.html",
    "revision": "92200698d4e1529fabbc55545f030131"
  },
  {
    "url": "views/nodejs/express.html",
    "revision": "28fd82dbcec4e38b83535869d70ebafd"
  },
  {
    "url": "views/nuxt/lesson1.html",
    "revision": "6eb8953459c9aac9e8d22600707a9d88"
  },
  {
    "url": "views/nuxt/lesson2.html",
    "revision": "3643ffe50fcb86c9b3de23557960094b"
  },
  {
    "url": "views/other/guide.html",
    "revision": "bc0f39d92b9c4465460d17c343c858ff"
  },
  {
    "url": "views/react/1.html",
    "revision": "281e37ced8942fecbe38aa835fbc5a1a"
  },
  {
    "url": "views/vue/1.html",
    "revision": "d1ba2d741c1c37b859d4201c3f1e103b"
  },
  {
    "url": "views/vue/2.html",
    "revision": "65666560a8388ffe2cabe41fc6d4d29d"
  },
  {
    "url": "views/vue/3.html",
    "revision": "9881493901ca5651f64ed8bc99009c43"
  },
  {
    "url": "views/vue/4.html",
    "revision": "363c2f723d10f9486def4d4e05af939a"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "c3fefc317b906be45714f816261e2034"
  },
  {
    "url": "views/win7/1.html",
    "revision": "944e9c30d93938146cf02e4d33cff532"
  },
  {
    "url": "views/win7/2.html",
    "revision": "ae7cf9009bca5d51d6074541353b45ea"
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
