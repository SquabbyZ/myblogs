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
    "revision": "330c9b46f5780ccc6a714a3a56b70052"
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
    "url": "assets/js/14.ad8a9e4d.js",
    "revision": "bd062e72e541d79c50e21bb4746fe7eb"
  },
  {
    "url": "assets/js/15.a622af2c.js",
    "revision": "435103c8971726034c38200d5e18c65c"
  },
  {
    "url": "assets/js/16.2e26a357.js",
    "revision": "fa469348669019251df6c5f3ed6ca6ed"
  },
  {
    "url": "assets/js/17.9544a53f.js",
    "revision": "b28e2dd31dfc6cd8fe4e286d2c48ec7c"
  },
  {
    "url": "assets/js/18.ba1f8ade.js",
    "revision": "4ab8125ea9ed3da15bca5ff04109722c"
  },
  {
    "url": "assets/js/19.05e88417.js",
    "revision": "5cc7a027ad7b90e71e60e5a65ffcdd22"
  },
  {
    "url": "assets/js/20.d7316967.js",
    "revision": "2111859dbbb9d67a047841b39dbc964e"
  },
  {
    "url": "assets/js/21.e0060bc6.js",
    "revision": "e09c03bdbfd80942c99cf5b49323604c"
  },
  {
    "url": "assets/js/22.ff27fa5c.js",
    "revision": "136c9836867c61c5bec989e5f5e987c9"
  },
  {
    "url": "assets/js/23.edf3b6a0.js",
    "revision": "a8fb8ddc46d46bb98503cef1df0af9b1"
  },
  {
    "url": "assets/js/24.c84afe86.js",
    "revision": "1873a3320ce844acd25f6834c36558b3"
  },
  {
    "url": "assets/js/25.630f168f.js",
    "revision": "f293b927278c196b2e17048dfbdea717"
  },
  {
    "url": "assets/js/26.2bdec9c4.js",
    "revision": "e059c8c29a04a646b09cd290fb07f4fc"
  },
  {
    "url": "assets/js/27.ceedb9ba.js",
    "revision": "cf6dd2b888c392eb7167105fac5f3786"
  },
  {
    "url": "assets/js/28.2a9a753b.js",
    "revision": "1be2017bc0e63400b767054c0097175a"
  },
  {
    "url": "assets/js/29.c78c6ecf.js",
    "revision": "e29c4b0caa795a4d30eafa7143f9bf5d"
  },
  {
    "url": "assets/js/30.8cffc3ba.js",
    "revision": "48fc2f17d9b7e22f9fb13a99b3bca74e"
  },
  {
    "url": "assets/js/31.d684be3e.js",
    "revision": "46c589e21a56a0c056734032f86641f3"
  },
  {
    "url": "assets/js/32.e2d47b5d.js",
    "revision": "12261dec20565682dccc91248e34ad92"
  },
  {
    "url": "assets/js/33.bc94f5e3.js",
    "revision": "fd007dcf79478b81d0056ae1f8e6a65f"
  },
  {
    "url": "assets/js/34.6de951e0.js",
    "revision": "79501610914b4e2132422e8a6ef1838b"
  },
  {
    "url": "assets/js/35.281ab467.js",
    "revision": "e7f29f62352c1a0ffa775d9e109da3d6"
  },
  {
    "url": "assets/js/36.f30daf2b.js",
    "revision": "b321c8ab9d95d5a12844a5076dcd18a0"
  },
  {
    "url": "assets/js/37.46a2b485.js",
    "revision": "f7c3d238862d983630664c916d6448c6"
  },
  {
    "url": "assets/js/38.dccb39d7.js",
    "revision": "c8dd64b45121b18b341b5360f5af90c5"
  },
  {
    "url": "assets/js/39.ec92e542.js",
    "revision": "8a473c17f770454c2593327e2d87c456"
  },
  {
    "url": "assets/js/4.6167913b.js",
    "revision": "74c9f0f173b32aa4d702b4d4c9a8ab13"
  },
  {
    "url": "assets/js/40.6c924c64.js",
    "revision": "838b34742aea601a22915a04095eeb05"
  },
  {
    "url": "assets/js/41.4186bead.js",
    "revision": "a6895edc0bd11c0ba5064e16dbf353a1"
  },
  {
    "url": "assets/js/42.f1861cd7.js",
    "revision": "60929facdcc803ce41c632e7d838837c"
  },
  {
    "url": "assets/js/43.625ee693.js",
    "revision": "ff3e53eec5409c6f42d6adbc73183eee"
  },
  {
    "url": "assets/js/44.68519f13.js",
    "revision": "9b118ae00cb3094e51a68a035ec1a637"
  },
  {
    "url": "assets/js/45.3b247a7f.js",
    "revision": "0c3dc1c6d152ef323a7e3ee8a63f024c"
  },
  {
    "url": "assets/js/46.39776437.js",
    "revision": "8dbe464126a9d4998af6129a56c8b6db"
  },
  {
    "url": "assets/js/47.39f1a479.js",
    "revision": "4f83a5b44143c42e81f3682dd877e6f1"
  },
  {
    "url": "assets/js/48.7e34d3f0.js",
    "revision": "5a0e6f21378fa77560791a123a7ef29d"
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
    "url": "assets/js/50.0e8b8c02.js",
    "revision": "1341ffc7004b283c0430d8b035a85546"
  },
  {
    "url": "assets/js/51.e9c3572e.js",
    "revision": "d2a016f5e008355eeb12f0165cffc48d"
  },
  {
    "url": "assets/js/52.b94ced52.js",
    "revision": "b01a14c15487a62f12c690f28b7414d2"
  },
  {
    "url": "assets/js/53.07f259e9.js",
    "revision": "0ed5bbef5c8ff211b24d79e09c6f4ce4"
  },
  {
    "url": "assets/js/54.f6df76f5.js",
    "revision": "6f7ff70f49f0dfa24fe56299778ed499"
  },
  {
    "url": "assets/js/55.19c8b7ff.js",
    "revision": "94364a4259ed03369f572a0f2717a86d"
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
    "url": "assets/js/58.02c49fdd.js",
    "revision": "da071acee7ed74c0c39bdbd0ed4fb7aa"
  },
  {
    "url": "assets/js/59.bd28b16e.js",
    "revision": "700f048fc53671000ea268b082fad266"
  },
  {
    "url": "assets/js/6.4e56c717.js",
    "revision": "833953714b0ebfd111e86c7605a65eb0"
  },
  {
    "url": "assets/js/60.2b17fe2e.js",
    "revision": "cd603b74e48d36980a88a13a7a7d0131"
  },
  {
    "url": "assets/js/61.537c4128.js",
    "revision": "25bdcc2d6389fec678680ad33c0e6545"
  },
  {
    "url": "assets/js/62.844a9832.js",
    "revision": "6673227313d56404f9fbce899c022d19"
  },
  {
    "url": "assets/js/63.0d23acf4.js",
    "revision": "0abe3e175ba118fb59dfe5089cd2ebd8"
  },
  {
    "url": "assets/js/64.c0893c40.js",
    "revision": "d4322034258eef332c7d3bae12d125e3"
  },
  {
    "url": "assets/js/65.01fcd59d.js",
    "revision": "497a33873a68bfdf839f6ea09b7df5f4"
  },
  {
    "url": "assets/js/66.876fc558.js",
    "revision": "bd823190551d476e203d290e0204eef5"
  },
  {
    "url": "assets/js/67.939efe45.js",
    "revision": "43bfa1dc1cc1a1b2c8a449bc3653731e"
  },
  {
    "url": "assets/js/68.94915869.js",
    "revision": "574210d4d172df15e58adf5d7eb5b3bf"
  },
  {
    "url": "assets/js/69.760575e1.js",
    "revision": "ddf93ba3fc8f073ae82e4d3c5972a9da"
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
    "url": "assets/js/app.068c3faf.js",
    "revision": "506ba77067a89bae75bdf3f227f6fa8b"
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
    "revision": "a1042fb58677264062d60d2d9ed67dd6"
  },
  {
    "url": "categories/Docker/index.html",
    "revision": "6135bf5e1c340efb052ac108038ae8a1"
  },
  {
    "url": "categories/Echarts/index.html",
    "revision": "651b331cba5e3aef9706bac42f98962a"
  },
  {
    "url": "categories/elasticsearch/index.html",
    "revision": "33f41223a61a61f20339e898429f7560"
  },
  {
    "url": "categories/Html5/index.html",
    "revision": "d5c75bb645b4fe61253124fe78c9a7c3"
  },
  {
    "url": "categories/index.html",
    "revision": "eb73842c648fc7af6564f0a60e5533fe"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "aa5daffa8d73c4a656e6a6219896b630"
  },
  {
    "url": "categories/Jenkins/index.html",
    "revision": "815e606b219b082474818e7eb3c22a0e"
  },
  {
    "url": "categories/JQuery/index.html",
    "revision": "8e38935f8429026533857e4e454d1cb6"
  },
  {
    "url": "categories/Kylin/index.html",
    "revision": "e6815a04a0bde6875b28d6275047371a"
  },
  {
    "url": "categories/Leaflet/index.html",
    "revision": "9dbbb8556826fc477473e9ad25b46140"
  },
  {
    "url": "categories/MongonDB/index.html",
    "revision": "a36da0f339e11ef83e827b3b1c18f4c6"
  },
  {
    "url": "categories/MySql/index.html",
    "revision": "65fe28d6f4e0a64e61407fc8374cae3d"
  },
  {
    "url": "categories/Nginx/index.html",
    "revision": "0d64f51719dca818a2b6df6ed8df8a06"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "4362834d0556eba2f7bd131ac7fba469"
  },
  {
    "url": "categories/Nuxt/index.html",
    "revision": "0743ef2295dd8a7fbf60933cce68f39b"
  },
  {
    "url": "categories/React/index.html",
    "revision": "4049cecacb75ae3c68a84ff0c4d55067"
  },
  {
    "url": "categories/Sass/index.html",
    "revision": "c477332c8d4a3d8df73a7cd09f626231"
  },
  {
    "url": "categories/Typescript/index.html",
    "revision": "85685c4f9e3510b9adebffb700f299ff"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "bb22a00e36c454a892b6ee220d75261f"
  },
  {
    "url": "categories/Wechatapplet/index.html",
    "revision": "996c96efe9334033af830b6b4a445d7f"
  },
  {
    "url": "categories/win7/index.html",
    "revision": "053f016362665490bdd2873728fb02aa"
  },
  {
    "url": "index.html",
    "revision": "6fba7581908e05fc23938295f8163cc4"
  },
  {
    "url": "library/index.html",
    "revision": "c6de10ee8322ccf5c55578ededd1ea15"
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
    "revision": "9604427a821b5d837ccb54ed51913043"
  },
  {
    "url": "tags/Centos/index.html",
    "revision": "2bf6629607a408633817225c02b7b9aa"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "94a01bb4188aa110a3b78c5fee797322"
  },
  {
    "url": "tags/Echarts/index.html",
    "revision": "1f6a672715eb758ed14d234bc0cbe2f1"
  },
  {
    "url": "tags/elasticsearch/index.html",
    "revision": "be7fdf28b1f1d9f44dc9f0207e1887d9"
  },
  {
    "url": "tags/Html5/index.html",
    "revision": "1f0e83eb8794ddfffc7c5b98f9f0fd82"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "679121adc5ff0042ae47fc7a9cf833c0"
  },
  {
    "url": "tags/Jenkins/index.html",
    "revision": "9a3246bbc7d07feac325862d08a5991d"
  },
  {
    "url": "tags/JQuery/index.html",
    "revision": "0bf6a07b12a49b69722259f0c5188c7d"
  },
  {
    "url": "tags/Kylin/index.html",
    "revision": "eed88f318b77722fb12442d39b9eb624"
  },
  {
    "url": "tags/Leaflet/index.html",
    "revision": "e9e62a11dfdb725e5e87c5c7f11f70fc"
  },
  {
    "url": "tags/MongonDB/index.html",
    "revision": "39f47559f73e66f491aa102caa57506e"
  },
  {
    "url": "tags/MySql/index.html",
    "revision": "7efb0e73ce7cb3a7fac86b2ebe8edc64"
  },
  {
    "url": "tags/Nginx/index.html",
    "revision": "211edf7060c9c7aa98d61a37d895f76f"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "b643b8a7a442a5d75f3d547cb415fbe0"
  },
  {
    "url": "tags/Nuxt/index.html",
    "revision": "492fa0dc13c76c7dd1f4746b0188319e"
  },
  {
    "url": "tags/React/index.html",
    "revision": "7a79570bf52904f167f47343447f07e8"
  },
  {
    "url": "tags/Sass/index.html",
    "revision": "46884a8b48980a926c8e9d9a37f3f8b0"
  },
  {
    "url": "tags/Typescript/index.html",
    "revision": "7a3ce9a6355b1967945b8e430d7f6a0b"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "7b30f9fa7946be4aad86d080051f835e"
  },
  {
    "url": "tags/Wechatapplet/index.html",
    "revision": "7313445b36d5993c5cba1a288c14f685"
  },
  {
    "url": "tags/win7/index.html",
    "revision": "382e676cd0839905badb1b42a1389b96"
  },
  {
    "url": "timeline/index.html",
    "revision": "3bcc4e511f494c4695839678f4765dd0"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "1b95828a12ef818988ee065d348d6051"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "4546027e3a79c9cc2012000c8a542549"
  },
  {
    "url": "views/Centos/3.html",
    "revision": "29249cf31b1c751e1eea06bd7de3b3c8"
  },
  {
    "url": "views/Docker/Docker使用过程中遇到的问题.html",
    "revision": "b5284cc1a108b7ac177f9fb3deb4a42b"
  },
  {
    "url": "views/Docker/Docker命令.html",
    "revision": "9a585c2872615fe140412718e6bb61cf"
  },
  {
    "url": "views/Docker/Docker容器挂载.html",
    "revision": "704e8f1acef9dfe5e4c6238cd8eeece2"
  },
  {
    "url": "views/Docker/Docker迁移与备份.html",
    "revision": "2af853a0d5ac1c0d6b6e7d83932adffc"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "ecfd45d2702a260366cc0687b5975b63"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "80cd381e8166497be6e0ec9418f868a6"
  },
  {
    "url": "views/elasticSearch/2.html",
    "revision": "24aacc88f021f84d9df92cd3cd3ea6eb"
  },
  {
    "url": "views/elasticSearch/3.html",
    "revision": "7c7029ba9698111aab7802f10ea43b2e"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "55e72bde8b59af7cf74da2db20f25e00"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "d803ff3882e10c9c29a51ffe58500a8f"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "6188bf25156f9120cea0b898a5b4d40d"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "062b86423f9700b8e4814c13cb5a4c1b"
  },
  {
    "url": "views/JavaScript/3.html",
    "revision": "43a33fd3c9c7cf20aebd7886dbe2dd56"
  },
  {
    "url": "views/JavaScript/4.html",
    "revision": "2efff3554b8ceaa1031e99d494194396"
  },
  {
    "url": "views/JavaScript/5.html",
    "revision": "a0589d90f21ee1609e420d949a082fdf"
  },
  {
    "url": "views/Jenkins/1.html",
    "revision": "b6c24af35ea17c973ac1d4f61f1a8bdc"
  },
  {
    "url": "views/Jenkins/2.html",
    "revision": "784b3ef1307cb17061320cc1456c7bea"
  },
  {
    "url": "views/Jenkins/3.html",
    "revision": "8071fd1d8986877946c97cf79e3bd1a2"
  },
  {
    "url": "views/Jenkins/4.html",
    "revision": "18b3ad7cda2dce19993750d2296e3be3"
  },
  {
    "url": "views/Jenkins/5.html",
    "revision": "e55ca96f14b6de6a7284880f2f9881fb"
  },
  {
    "url": "views/Jenkins/6.html",
    "revision": "3bf50cae3a72e3fb1f8c351073a10efe"
  },
  {
    "url": "views/Jenkins/jenkins+gitblit.html",
    "revision": "443df910ed02c1390f5cc93527384f8f"
  },
  {
    "url": "views/Jenkins/jenkins+svn.html",
    "revision": "dd52bfb248911e01b4b3cd78f9421f7c"
  },
  {
    "url": "views/JQuery/1.html",
    "revision": "372acbab0b1ed369fd00ccfa7d3b9dde"
  },
  {
    "url": "views/Kylin/1.html",
    "revision": "f5ba14841b8ddfeb5eeaa3cab7c235df"
  },
  {
    "url": "views/Leaflet/1.html",
    "revision": "cc33cb240d24742464183baa58b24ae4"
  },
  {
    "url": "views/mondonDB/1.html",
    "revision": "c8b6cd8e8cd29219dcb140f58aeece68"
  },
  {
    "url": "views/mondonDB/2.html",
    "revision": "0df64d1c78eac2f92e7dcbd32e6baa79"
  },
  {
    "url": "views/mondonDB/3.html",
    "revision": "5ade540f247782c7afaa3e958ab85568"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "b73775fd6318da5dffc66d3ff61993ac"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "a83cc2f9866df4f80c805661f8a270e4"
  },
  {
    "url": "views/nginx/2.html",
    "revision": "00413c1707f25936e6a953c910cb2c84"
  },
  {
    "url": "views/nginx/3.html",
    "revision": "de380a01849c74314dc3aa822befd2f0"
  },
  {
    "url": "views/nginx/4.html",
    "revision": "ae0caaa4d4b7d29821835b77e4573f99"
  },
  {
    "url": "views/nginx/5.html",
    "revision": "991de70e28ce460d53328113e321ce4d"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "eaa33159f5fa2649a67edcce1faaf245"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "40887dbd7a9392fd6fe2c70d4d403f06"
  },
  {
    "url": "views/nodejs/3.html",
    "revision": "e1e6fecfa16ee165cd8523a67bb509c6"
  },
  {
    "url": "views/nodejs/4.html",
    "revision": "0027157b3394474aaba0353042e7a4af"
  },
  {
    "url": "views/nodejs/express.html",
    "revision": "815991edbf39cab9a1123e90e1322246"
  },
  {
    "url": "views/nuxt/lesson1.html",
    "revision": "46669847f68ec0943fcd63f7cffe33d3"
  },
  {
    "url": "views/nuxt/lesson2.html",
    "revision": "4bebac4a54dceec6a2e2eb212099a075"
  },
  {
    "url": "views/other/guide.html",
    "revision": "5d6587073f687cb7ba3f3824a9b6efe7"
  },
  {
    "url": "views/react/1.html",
    "revision": "654199a9cb49629abd6c60e3b844b796"
  },
  {
    "url": "views/Sass/1.html",
    "revision": "7a45290e267b96b54507b0565411f65e"
  },
  {
    "url": "views/Typescript/1.html",
    "revision": "a75c048b3db2b639e799eeea26146189"
  },
  {
    "url": "views/vue/1.html",
    "revision": "ffcfdb68f6b76edc4e2eea53d4f17243"
  },
  {
    "url": "views/vue/2.html",
    "revision": "252ab1eac162b8b2983efadec6fb44a8"
  },
  {
    "url": "views/vue/3.html",
    "revision": "363b6f5d3bc44008ed5b032617b0997b"
  },
  {
    "url": "views/vue/4.html",
    "revision": "1da666d7618a50bfb97fbc596da7f8ac"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "3bdaaad36d98e4ecdc6469043ccd54ad"
  },
  {
    "url": "views/win7/1.html",
    "revision": "c9b3ee74805ace58147de80d8dcc17f3"
  },
  {
    "url": "views/win7/2.html",
    "revision": "56724856b929c4e784ebdc2ac7fb0b61"
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
