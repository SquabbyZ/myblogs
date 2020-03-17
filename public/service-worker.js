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
    "revision": "6ffb15584f5a44db29ca200e27501d4f"
  },
  {
    "url": "assets/css/0.styles.16939c81.css",
    "revision": "fc58766cf405153a8c99282ac2caca9a"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.418978c9.js",
    "revision": "56f98a21ca5e31a5c4a9505e5f3834eb"
  },
  {
    "url": "assets/js/10.07b160bd.js",
    "revision": "426b34cb2496be4d73edc0d441fef090"
  },
  {
    "url": "assets/js/11.e797bea4.js",
    "revision": "d9d2d58e5c5340f3c70ca0f2f10f25aa"
  },
  {
    "url": "assets/js/12.d9b17ccd.js",
    "revision": "c12c49d2c4b7faf7a5835dca1db851c1"
  },
  {
    "url": "assets/js/13.33faea5e.js",
    "revision": "e26ea87dd43798904df9c51b0a7c36c1"
  },
  {
    "url": "assets/js/14.1a8d4758.js",
    "revision": "5a61e972316fc69ce00ab9c4dbc9cc53"
  },
  {
    "url": "assets/js/15.6ceabbcb.js",
    "revision": "923b40d0031d9be9660d59803ba68f4e"
  },
  {
    "url": "assets/js/16.2e26a357.js",
    "revision": "fa469348669019251df6c5f3ed6ca6ed"
  },
  {
    "url": "assets/js/17.25036052.js",
    "revision": "2cccb772bad543a7e589c3418ded7f31"
  },
  {
    "url": "assets/js/18.3b13689b.js",
    "revision": "630cd6ca3acbe9fe8309e909c6160aac"
  },
  {
    "url": "assets/js/19.e255a337.js",
    "revision": "900d35cb0048ac02a16c414fcd59f682"
  },
  {
    "url": "assets/js/20.27502c3b.js",
    "revision": "37a31cc80124d59e7a79bb133d6239bc"
  },
  {
    "url": "assets/js/21.f8b09fb3.js",
    "revision": "e937d7885c2c2ef05495adddd5e0aeb5"
  },
  {
    "url": "assets/js/22.e1a1b465.js",
    "revision": "63f03cc9cbbe39411b11e74fd5611bea"
  },
  {
    "url": "assets/js/23.847970ee.js",
    "revision": "ec872735511ae02dc8f2585745820d73"
  },
  {
    "url": "assets/js/24.1d59c053.js",
    "revision": "4d85f2968cd4836bbf9fdb7316d06421"
  },
  {
    "url": "assets/js/25.cece8960.js",
    "revision": "a236483bd0409c772119e4bc4ec14677"
  },
  {
    "url": "assets/js/26.64a16d45.js",
    "revision": "7931bfb461dba7a2734a56ec60b63f6a"
  },
  {
    "url": "assets/js/27.e2ba3ef8.js",
    "revision": "670bfec8cb466a08a74a19a8a50946cf"
  },
  {
    "url": "assets/js/28.2a9a753b.js",
    "revision": "1be2017bc0e63400b767054c0097175a"
  },
  {
    "url": "assets/js/29.c092f59c.js",
    "revision": "9577cfe44aa82259bf6f10eb58760849"
  },
  {
    "url": "assets/js/30.e44819ec.js",
    "revision": "7e032599980316f8de3c52ddec452dfa"
  },
  {
    "url": "assets/js/31.03d23565.js",
    "revision": "935cd6802125f8316d7e13800dc1ecb6"
  },
  {
    "url": "assets/js/32.2badcaec.js",
    "revision": "ad30b58c7e0768d8f0806b41fc513bbb"
  },
  {
    "url": "assets/js/33.dedd0fa9.js",
    "revision": "64cdffe3155f6b4a05fed57b3cf404f1"
  },
  {
    "url": "assets/js/34.0fe34ed6.js",
    "revision": "cb1e7483767218f759c659c56778c52f"
  },
  {
    "url": "assets/js/35.4c3f488a.js",
    "revision": "a604a5afc29855a298c7b687aac8235f"
  },
  {
    "url": "assets/js/36.f30daf2b.js",
    "revision": "b321c8ab9d95d5a12844a5076dcd18a0"
  },
  {
    "url": "assets/js/37.bf1c5548.js",
    "revision": "f92f585f211ae03240499bdaeffca6c8"
  },
  {
    "url": "assets/js/38.38829384.js",
    "revision": "5fe1a0805c92f5adcb171e04b7464f4e"
  },
  {
    "url": "assets/js/39.e271886a.js",
    "revision": "f8b3e56446173f2929b94de71d6a7f7e"
  },
  {
    "url": "assets/js/4.6167913b.js",
    "revision": "74c9f0f173b32aa4d702b4d4c9a8ab13"
  },
  {
    "url": "assets/js/40.903fc170.js",
    "revision": "9e3b833ea7ffc405548f2bd0db018e9c"
  },
  {
    "url": "assets/js/41.00ded28a.js",
    "revision": "dcda3e1b129dd2da6d547915c8143360"
  },
  {
    "url": "assets/js/42.65ee8cd7.js",
    "revision": "585384148433836cae2c860070d1c689"
  },
  {
    "url": "assets/js/43.5460dcca.js",
    "revision": "0ec8511b964a234ec45b1ded59687c3c"
  },
  {
    "url": "assets/js/44.b6d19af7.js",
    "revision": "73de2d313dc94ac4a35fb2e52badf980"
  },
  {
    "url": "assets/js/45.3b247a7f.js",
    "revision": "0c3dc1c6d152ef323a7e3ee8a63f024c"
  },
  {
    "url": "assets/js/46.fba714e5.js",
    "revision": "eb1cd824cdfc3dc21dd1592f66298a44"
  },
  {
    "url": "assets/js/47.5dc75b10.js",
    "revision": "bef1444d2db69d834a35ab506ecaf37b"
  },
  {
    "url": "assets/js/48.eaa2aec9.js",
    "revision": "6a2bf2dcbe057445108fe0ef666bb555"
  },
  {
    "url": "assets/js/49.c757838f.js",
    "revision": "97f76dca4033bfc0f189bc01d1ff851e"
  },
  {
    "url": "assets/js/5.06054d4d.js",
    "revision": "579464cb8d969d8de5642c3b8743b148"
  },
  {
    "url": "assets/js/50.bff125d2.js",
    "revision": "ceeaedfb85182590304e447684838196"
  },
  {
    "url": "assets/js/51.59dec55c.js",
    "revision": "3543c8703b208ae7598dedcdc728e07c"
  },
  {
    "url": "assets/js/52.df1c8621.js",
    "revision": "d0cd0e4f34c03929343c53cf548a18e9"
  },
  {
    "url": "assets/js/53.f04b9dea.js",
    "revision": "aa063d4dc2b4f5b1b024a9dcaefa72d1"
  },
  {
    "url": "assets/js/54.ed0158d1.js",
    "revision": "9a65fbec740664606ba391aee1c910c3"
  },
  {
    "url": "assets/js/55.f2c1ba82.js",
    "revision": "6de56a610d7c5fbf316e43115d37205b"
  },
  {
    "url": "assets/js/56.ace0628e.js",
    "revision": "8bf6120844f79c962fce61a0bce188b3"
  },
  {
    "url": "assets/js/57.0f32d744.js",
    "revision": "416a18d42ec5536bc317e4f47704e1e2"
  },
  {
    "url": "assets/js/58.964d894b.js",
    "revision": "9a8b028ae41e744eb9dec8eb76b564f8"
  },
  {
    "url": "assets/js/59.8ce242c8.js",
    "revision": "a053a8c78f469ebe1a3763cc68e07965"
  },
  {
    "url": "assets/js/6.4e56c717.js",
    "revision": "833953714b0ebfd111e86c7605a65eb0"
  },
  {
    "url": "assets/js/60.4ec91509.js",
    "revision": "6b83ad53762d5227736a491f23430faa"
  },
  {
    "url": "assets/js/61.9abc5003.js",
    "revision": "fbd25101b4a73ac1cc1e55df2893da74"
  },
  {
    "url": "assets/js/62.b4400c5c.js",
    "revision": "2e2653201067a3a05cfeac2b3123a5cd"
  },
  {
    "url": "assets/js/63.c705d3ac.js",
    "revision": "7e2b07d54120ed949e42cad651060e4d"
  },
  {
    "url": "assets/js/64.3d0d4769.js",
    "revision": "959701c49f538a90768d257dd8854062"
  },
  {
    "url": "assets/js/65.80261eb2.js",
    "revision": "e9ef62c5f90396cde5a4e30b2783e759"
  },
  {
    "url": "assets/js/66.876fc558.js",
    "revision": "bd823190551d476e203d290e0204eef5"
  },
  {
    "url": "assets/js/67.5ce66b02.js",
    "revision": "ce6f91dfd5a10d9eac4a4922cee0bc60"
  },
  {
    "url": "assets/js/68.e994e203.js",
    "revision": "79b0a008565dd7220c057d80fd149a7d"
  },
  {
    "url": "assets/js/69.68262215.js",
    "revision": "729572d42f769b21a25d88641dd59399"
  },
  {
    "url": "assets/js/7.39c73921.js",
    "revision": "1fe155138ee2cfd8aae98809b5ea750e"
  },
  {
    "url": "assets/js/70.7d68e33e.js",
    "revision": "c7addf9522cccc9c969cc057a1a1d193"
  },
  {
    "url": "assets/js/71.d8f0ba35.js",
    "revision": "fae5d7e7c9c89d5a50e45bed06aa7627"
  },
  {
    "url": "assets/js/8.82f7e2b9.js",
    "revision": "3d0cf853c3af6211263925e920220b6e"
  },
  {
    "url": "assets/js/9.68efe387.js",
    "revision": "b30ccd70cde801802d28373f5c9ef006"
  },
  {
    "url": "assets/js/app.d14a70f4.js",
    "revision": "b2c254f5b4e0296728aeded3e8119ebc"
  },
  {
    "url": "assets/js/vendors~flowchart.da1827e6.js",
    "revision": "ea0d7e787252c1abae582e5c4e288261"
  },
  {
    "url": "brand.jpg",
    "revision": "6285e20c35c902b4514f80134ecec543"
  },
  {
    "url": "categories/Centos/index.html",
    "revision": "b01889454aed23c6a3be09afd4743899"
  },
  {
    "url": "categories/Docker/index.html",
    "revision": "8260dafee82fc65caa66424aa358859c"
  },
  {
    "url": "categories/Echarts/index.html",
    "revision": "092d2f329c9a02fe8159063e102ad7d5"
  },
  {
    "url": "categories/elasticsearch/index.html",
    "revision": "e7c2159969854729b922e410706af73a"
  },
  {
    "url": "categories/Html5/index.html",
    "revision": "db95ea67fa25c0ed8d764c1d5abf3884"
  },
  {
    "url": "categories/index.html",
    "revision": "42cdceff10759be577be871429cd6b44"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "90885a2abbd1bd673b1bf165c9c22dfb"
  },
  {
    "url": "categories/Jenkins/index.html",
    "revision": "000d8adecf238914ce78fdff080c2991"
  },
  {
    "url": "categories/JQuery/index.html",
    "revision": "0595b57a6a7b696ce9ac94ee98ced89b"
  },
  {
    "url": "categories/Kylin/index.html",
    "revision": "5b5e75f25da9ef97fb0c19cd3b9df59e"
  },
  {
    "url": "categories/Leaflet/index.html",
    "revision": "2c0a3cc0f0e6ee1e4214ad761b400747"
  },
  {
    "url": "categories/MongonDB/index.html",
    "revision": "5d857c5299188a39f1440fdb6a501b90"
  },
  {
    "url": "categories/MySql/index.html",
    "revision": "a3cb2f5e566cb11f71e7eb83be1876a8"
  },
  {
    "url": "categories/Nginx/index.html",
    "revision": "950ff8f2646402e47aab797b8488e1e5"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "1a56f61b6a652b19e084388c54c7e962"
  },
  {
    "url": "categories/Nuxt/index.html",
    "revision": "871d1448622f0177059ef3399893f53f"
  },
  {
    "url": "categories/React/index.html",
    "revision": "51235370345b065b622bd331d023af92"
  },
  {
    "url": "categories/Sass/index.html",
    "revision": "5c29decdddcd04b08ba7261916342a68"
  },
  {
    "url": "categories/Typescript/index.html",
    "revision": "2992da476fb0b6c65ccae1165ad98e5b"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "01b4c7bc50f7a9205d1839dbdeabfdb6"
  },
  {
    "url": "categories/Wechatapplet/index.html",
    "revision": "1900449b72cc557371af7b57267e5243"
  },
  {
    "url": "categories/win7/index.html",
    "revision": "aa73a46799f8225326d4bb4d95c3a1bb"
  },
  {
    "url": "index.html",
    "revision": "ae901fb157dcce4d8b7a7f04255c9f67"
  },
  {
    "url": "library/index.html",
    "revision": "c8de3ee139922c073fc9b53acdcc603c"
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
    "url": "tag/index.html",
    "revision": "5938ea449306d49d723ec9ff35dc6ad0"
  },
  {
    "url": "tags/Centos/index.html",
    "revision": "9525532ceef892eacf4507814f2ee419"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "c6a4db5d574fd575039253bf16cc77c8"
  },
  {
    "url": "tags/Echarts/index.html",
    "revision": "8d55359f7c596d2e4267bcc45ed9c3af"
  },
  {
    "url": "tags/elasticsearch/index.html",
    "revision": "5c8f6b05f9d2f43580e28a2c3b491ad6"
  },
  {
    "url": "tags/Html5/index.html",
    "revision": "809d259a93cf9477e4b9b21323416022"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "8446d9aa116af042decf41b303441ae7"
  },
  {
    "url": "tags/Jenkins/index.html",
    "revision": "e6eb965c8f8f309397a4a8d2276bbac0"
  },
  {
    "url": "tags/JQuery/index.html",
    "revision": "f14a88bd78c63c4500a4d60d7058bfdf"
  },
  {
    "url": "tags/Kylin/index.html",
    "revision": "683cdd8df06507b9f3174bd3541866c5"
  },
  {
    "url": "tags/Leaflet/index.html",
    "revision": "131261520cc451ccaedf472080cdfb8a"
  },
  {
    "url": "tags/MongonDB/index.html",
    "revision": "410df40dc1d0edeee25174d802f8257f"
  },
  {
    "url": "tags/MySql/index.html",
    "revision": "701588422dfcae339d7b73deb8a555a9"
  },
  {
    "url": "tags/Nginx/index.html",
    "revision": "cf31ad87c9485702847209eaa8651cd7"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "68cb7fbe9e32a45ecf23e863ce17c327"
  },
  {
    "url": "tags/Nuxt/index.html",
    "revision": "850dbc58bd8a383e6be3e0b8073db810"
  },
  {
    "url": "tags/React/index.html",
    "revision": "1871de16414fefc218fb53b88dc893a0"
  },
  {
    "url": "tags/Sass/index.html",
    "revision": "531deb9c58b22be0c5d06ee643306677"
  },
  {
    "url": "tags/Typescript/index.html",
    "revision": "aa0091891868c930f11e19057b7c40cd"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "6adecacd5366393fae399771dd8ca645"
  },
  {
    "url": "tags/Wechatapplet/index.html",
    "revision": "6c98dd3061fe9621752b985e71002530"
  },
  {
    "url": "tags/win7/index.html",
    "revision": "7df76878a699fb4e046543e9ad10fbcc"
  },
  {
    "url": "timeline/index.html",
    "revision": "4a69ac889b289adb223e1217ee72514d"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "5ddbf5511cbc12ab7ab9afae1d9abafa"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "9cc20192567c79d08d67dbc4482d9b0c"
  },
  {
    "url": "views/Centos/3.html",
    "revision": "01917cc766c42cb2161f847a9b661744"
  },
  {
    "url": "views/Docker/Docker使用过程中遇到的问题.html",
    "revision": "ce319bcb482f00dbfa2e9ae0ff632daa"
  },
  {
    "url": "views/Docker/Docker命令.html",
    "revision": "ec0e2f39655747133e4e20c3f9749712"
  },
  {
    "url": "views/Docker/Docker容器挂载.html",
    "revision": "e3c9646aa20e0b3c682a74445f7dc4b7"
  },
  {
    "url": "views/Docker/Docker迁移与备份.html",
    "revision": "e7dacac3b275b6ba3dd093d834dfe04e"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "7f89dfe49a8c7cc259ac35517c1052ef"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "488a3a7f7ba9751021348ee603635894"
  },
  {
    "url": "views/elasticSearch/2.html",
    "revision": "c6213648e38f653ce0b78780a6633b56"
  },
  {
    "url": "views/elasticSearch/3.html",
    "revision": "fe3c45f5293be35540292e74bbbfab82"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "cc0de7bcc6763166ab89feb0380720b8"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "513029311af560252025adee97974dc0"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "e0c0f33c1f58d0f6886b20cceb6b0076"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "ad1386c39420cd8b5a9a7604ec0f70da"
  },
  {
    "url": "views/JavaScript/3.html",
    "revision": "76579208a7d7969d668a3728f5adc838"
  },
  {
    "url": "views/JavaScript/4.html",
    "revision": "6545a6d3115d4c4d256f1b01310ab880"
  },
  {
    "url": "views/JavaScript/5.html",
    "revision": "d5fb43d3ceccb808f34958cd6c2fd23a"
  },
  {
    "url": "views/Jenkins/1.html",
    "revision": "03488d2e01d3466fdea8acaed6207222"
  },
  {
    "url": "views/Jenkins/2.html",
    "revision": "6493fd86d92a9c3b7a5dd6e4009e850c"
  },
  {
    "url": "views/Jenkins/3.html",
    "revision": "65d758631eef8a468a11b769eaef8b1b"
  },
  {
    "url": "views/Jenkins/4.html",
    "revision": "07e885bd5aa12739d21443fbc926f5ea"
  },
  {
    "url": "views/Jenkins/5.html",
    "revision": "4ec48b9180dd655e28b11a2d51c49c40"
  },
  {
    "url": "views/Jenkins/6.html",
    "revision": "e5ef3aed0a00b51cbe3347cc0aea69a4"
  },
  {
    "url": "views/Jenkins/jenkins+gitblit.html",
    "revision": "90c0c0322a1d8671da01fb849da13dbf"
  },
  {
    "url": "views/Jenkins/jenkins+svn.html",
    "revision": "51cc796a53fc5ddf707af23707571ecc"
  },
  {
    "url": "views/JQuery/1.html",
    "revision": "f4228f6635925f13afc790180dbeb387"
  },
  {
    "url": "views/Kylin/1.html",
    "revision": "f07f4d6666100685d3880a28bec2af80"
  },
  {
    "url": "views/Leaflet/1.html",
    "revision": "069daaf233f27f546cd5431c6757d6df"
  },
  {
    "url": "views/mondonDB/1.html",
    "revision": "2dbf336f5158ca28605de0d2d15b6f6f"
  },
  {
    "url": "views/mondonDB/2.html",
    "revision": "e4f4c5c2270fcb91986c54ed11280993"
  },
  {
    "url": "views/mondonDB/3.html",
    "revision": "2d058381cae2c5bf7e4acb67088b6529"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "65bd28ee63568c006654f20dfc1a9749"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "cafc68130618c2e607237b540526e6a6"
  },
  {
    "url": "views/nginx/2.html",
    "revision": "ea43e2b88ff1aa47111ca7e32476c602"
  },
  {
    "url": "views/nginx/3.html",
    "revision": "f3800481891a8ca9a0d92401784004b2"
  },
  {
    "url": "views/nginx/4.html",
    "revision": "e76bcb7908e470375fcc114d5844c19a"
  },
  {
    "url": "views/nginx/5.html",
    "revision": "d2a87f36eb2f4f30958ef319ab5a54e6"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "394d63955d1bce023e46e49914abea43"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "bb90e3c75319ba05a56dc7f326dfe903"
  },
  {
    "url": "views/nodejs/3.html",
    "revision": "51a5f62b2e827e26f0e2457eb6f0c810"
  },
  {
    "url": "views/nodejs/4.html",
    "revision": "08c89b83725f39a54357dfae0b4b21d0"
  },
  {
    "url": "views/nodejs/express.html",
    "revision": "4ca589a1268bb534e8d2726dd4f5d0d8"
  },
  {
    "url": "views/nuxt/lesson1.html",
    "revision": "ab1c926195aad4ad3a06e8a6dd619da7"
  },
  {
    "url": "views/nuxt/lesson2.html",
    "revision": "7781b2c1582465b5b7880b7b633f4376"
  },
  {
    "url": "views/other/guide.html",
    "revision": "fd795a4a08af154a43782d4f527ee6a1"
  },
  {
    "url": "views/react/1.html",
    "revision": "6c2627abb115d8141245f37d22da1897"
  },
  {
    "url": "views/Sass/1.html",
    "revision": "40f641948c6d39b1e2f3f6b0e8e22752"
  },
  {
    "url": "views/Typescript/1.html",
    "revision": "fec04a1bc4cd8939f45aa7315186338c"
  },
  {
    "url": "views/vue/1.html",
    "revision": "3b46e50b1a4478cf2c2594fa98d61848"
  },
  {
    "url": "views/vue/2.html",
    "revision": "3d2f97f74a3d164d32f4a6bca1dfc51a"
  },
  {
    "url": "views/vue/3.html",
    "revision": "6c27df24ca08c5575d551b2977240cef"
  },
  {
    "url": "views/vue/4.html",
    "revision": "c7701536ef1544b48c87170b28aa3d9b"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "56c54c3e02d9443a1aff8eb5d4746bc1"
  },
  {
    "url": "views/win7/1.html",
    "revision": "d63efebeff2f028db89c9e1415010f74"
  },
  {
    "url": "views/win7/2.html",
    "revision": "37d7fee9e623c681b3fb760b2a4ec78f"
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
