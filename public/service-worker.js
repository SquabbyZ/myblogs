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
    "revision": "279392af6e5630e404f97a15c420418c"
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
    "url": "assets/js/14.991da59f.js",
    "revision": "2fcad45bfc06c01e7ade6db794a75af7"
  },
  {
    "url": "assets/js/15.a622af2c.js",
    "revision": "435103c8971726034c38200d5e18c65c"
  },
  {
    "url": "assets/js/16.1bf42f46.js",
    "revision": "c33b0041e30a03a1d9ca57c848be346c"
  },
  {
    "url": "assets/js/17.ba9098ba.js",
    "revision": "db70f5be149846835f45dff924b52a77"
  },
  {
    "url": "assets/js/18.37ff6857.js",
    "revision": "310117f5a2d1ff99b38ecae6ed52ba54"
  },
  {
    "url": "assets/js/19.f357ee03.js",
    "revision": "caee7d8fa8b8957ab5ae08daac20cfc1"
  },
  {
    "url": "assets/js/20.117315c0.js",
    "revision": "76e00918f1d651eb3c64811f15464793"
  },
  {
    "url": "assets/js/21.e0060bc6.js",
    "revision": "e09c03bdbfd80942c99cf5b49323604c"
  },
  {
    "url": "assets/js/22.041174e3.js",
    "revision": "abce0a1af86a4955b392b001a88c800d"
  },
  {
    "url": "assets/js/23.edf3b6a0.js",
    "revision": "a8fb8ddc46d46bb98503cef1df0af9b1"
  },
  {
    "url": "assets/js/24.f6ec0b25.js",
    "revision": "88055fb2f6a2de7c5788abbf5ec96d93"
  },
  {
    "url": "assets/js/25.c57ee62a.js",
    "revision": "03af1a72935018f0603894d9dec64c7b"
  },
  {
    "url": "assets/js/26.95926b89.js",
    "revision": "af34b3cae67cc7e8edb7cbe2aaa637ce"
  },
  {
    "url": "assets/js/27.ceedb9ba.js",
    "revision": "cf6dd2b888c392eb7167105fac5f3786"
  },
  {
    "url": "assets/js/28.eeec256f.js",
    "revision": "8a87140b96c93e6277fb89cfcdac6e52"
  },
  {
    "url": "assets/js/29.e43f35bd.js",
    "revision": "47ea32985e334a337e1884901e3a1fe2"
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
    "url": "assets/js/35.8cdf57af.js",
    "revision": "c65fca1de257e0bb91e6af170abb38ed"
  },
  {
    "url": "assets/js/36.0a33dd53.js",
    "revision": "e592f9784e8187cde594a7fee75c8740"
  },
  {
    "url": "assets/js/37.46a2b485.js",
    "revision": "f7c3d238862d983630664c916d6448c6"
  },
  {
    "url": "assets/js/38.879827e7.js",
    "revision": "dbe6954e8c9e63e0690e409fe80a7db1"
  },
  {
    "url": "assets/js/39.080c4b52.js",
    "revision": "b74846a07bea709dd507f33224278aa5"
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
    "url": "assets/js/41.00ded28a.js",
    "revision": "dcda3e1b129dd2da6d547915c8143360"
  },
  {
    "url": "assets/js/42.165f70b7.js",
    "revision": "d82475b49def0e06dbe0a3084695a48b"
  },
  {
    "url": "assets/js/43.5bdffb99.js",
    "revision": "3e4b3f3a86f79f14543129567683a3b4"
  },
  {
    "url": "assets/js/44.68519f13.js",
    "revision": "9b118ae00cb3094e51a68a035ec1a637"
  },
  {
    "url": "assets/js/45.2b0c6bba.js",
    "revision": "5c3e23253692a64f3b8c992f520759f4"
  },
  {
    "url": "assets/js/46.f7ed8afe.js",
    "revision": "2ff15ca2cd0fa402dd7da8023a52127a"
  },
  {
    "url": "assets/js/47.33e115ab.js",
    "revision": "d9af6af3a3f9a17a17523a2b2f6c712e"
  },
  {
    "url": "assets/js/48.7e34d3f0.js",
    "revision": "5a0e6f21378fa77560791a123a7ef29d"
  },
  {
    "url": "assets/js/49.1c4686fe.js",
    "revision": "67506431ba728f5dad64f1349b4e152c"
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
    "url": "assets/js/51.bec10f3b.js",
    "revision": "4267dbcab7fe8633405314ae2566a6f9"
  },
  {
    "url": "assets/js/52.df1c8621.js",
    "revision": "d0cd0e4f34c03929343c53cf548a18e9"
  },
  {
    "url": "assets/js/53.2c702b87.js",
    "revision": "2be6c2fe2127ac3eca7bf1995c71f414"
  },
  {
    "url": "assets/js/54.ef0a04ad.js",
    "revision": "176fccfe2f4107a8cab4fed5c7cb665e"
  },
  {
    "url": "assets/js/55.f1e8ec54.js",
    "revision": "5cb3ff81eacf2054979a25247e8ba313"
  },
  {
    "url": "assets/js/56.f8d0ed60.js",
    "revision": "07b614f69b1d281ed914f284ebee3d58"
  },
  {
    "url": "assets/js/57.88e61bae.js",
    "revision": "93b73f2612e19bf664fcdd1283302c00"
  },
  {
    "url": "assets/js/58.a80d2a09.js",
    "revision": "d189648ed61c567acc511b6bb2dd8bc9"
  },
  {
    "url": "assets/js/59.28a2feb8.js",
    "revision": "f61a246f99098978ee4177850a4ab834"
  },
  {
    "url": "assets/js/6.4e56c717.js",
    "revision": "833953714b0ebfd111e86c7605a65eb0"
  },
  {
    "url": "assets/js/60.08821c2c.js",
    "revision": "90a9b18e7fb3c751b3652aa27a824550"
  },
  {
    "url": "assets/js/61.9abc5003.js",
    "revision": "fbd25101b4a73ac1cc1e55df2893da74"
  },
  {
    "url": "assets/js/62.6e6b080d.js",
    "revision": "ec2070990783aa04cd0e153906a01e4b"
  },
  {
    "url": "assets/js/63.956eb0a8.js",
    "revision": "f02dfe2a8dea2acecef5b82fd8b8b78d"
  },
  {
    "url": "assets/js/64.3cca7466.js",
    "revision": "e9a8ab3d93c0442830a178dc4f1b2aaf"
  },
  {
    "url": "assets/js/65.85e89342.js",
    "revision": "8d8958377ddf15b13e58c8414987d7ca"
  },
  {
    "url": "assets/js/66.b4de5b6d.js",
    "revision": "737d4e150e6fdda31dc9eacd8bc11afa"
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
    "url": "assets/js/app.510a96db.js",
    "revision": "6657295c78607da0de3cd42502a563be"
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
    "revision": "2328ded5a7b0d92e2426e6d6e7b3bf74"
  },
  {
    "url": "categories/Docker/index.html",
    "revision": "77a6c1802df973f2a0345ed75653d3cc"
  },
  {
    "url": "categories/Echarts/index.html",
    "revision": "fa2161182072eff7cb36ca6ef9876b21"
  },
  {
    "url": "categories/elasticsearch/index.html",
    "revision": "7ab7469643e3421776bab63c1dcb7639"
  },
  {
    "url": "categories/Html5/index.html",
    "revision": "7dceebbe769dfb8beddfe80fc123295e"
  },
  {
    "url": "categories/index.html",
    "revision": "f226a69b32e83a4f4fff78ebf9ab296e"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "e916c43f24f4ecbad0ea0a98a37427cf"
  },
  {
    "url": "categories/Jenkins/index.html",
    "revision": "f3e34fd9ff6736658a6106e5b5c3b1d2"
  },
  {
    "url": "categories/JQuery/index.html",
    "revision": "c27989200fe8b30542113e8194cfdb44"
  },
  {
    "url": "categories/Kylin/index.html",
    "revision": "c2d0e3b5173cd0bf44326b0dcbbe3b78"
  },
  {
    "url": "categories/Leaflet/index.html",
    "revision": "c6ffd0dd536e8ce027987e3c8cd2c325"
  },
  {
    "url": "categories/MongonDB/index.html",
    "revision": "28df508b28fa6d231faf9770e5e2afee"
  },
  {
    "url": "categories/MySql/index.html",
    "revision": "28bcca0070dfe3c199ba946976cb1f17"
  },
  {
    "url": "categories/Nginx/index.html",
    "revision": "163ca3e10a50015d8b7ecf4d50f3bfaf"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "ba7110ce164656b55c2345ac622195ca"
  },
  {
    "url": "categories/Nuxt/index.html",
    "revision": "13514bf486e622ca67eaf4ba587fe4b3"
  },
  {
    "url": "categories/React/index.html",
    "revision": "48d04ca92bb0ba5a916076f594e8f3ca"
  },
  {
    "url": "categories/Sass/index.html",
    "revision": "583dbd3d17e8ae4ee34b028733d9aa8a"
  },
  {
    "url": "categories/Typescript/index.html",
    "revision": "7b2d8c237459ac67f7f8bc9feaa6fbbe"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "00b6617925d258a369d921990ccab284"
  },
  {
    "url": "categories/Wechatapplet/index.html",
    "revision": "a40370bdecb3cf0b0324cbaee94ad9c0"
  },
  {
    "url": "categories/win7/index.html",
    "revision": "ff4ca55b065df69c61e1304a87f7a395"
  },
  {
    "url": "index.html",
    "revision": "3b42c78ec4cd24301e15c1f625048ce6"
  },
  {
    "url": "library/index.html",
    "revision": "04c0abd3f7cbcacce211567147a8665d"
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
    "revision": "8277433df9876e6f1cb4d6cd6410443a"
  },
  {
    "url": "tags/Centos/index.html",
    "revision": "fdae40920c6e4ad2232ea8cced9f48e7"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "7757992af1ce93df88432c3590b97ea0"
  },
  {
    "url": "tags/Echarts/index.html",
    "revision": "8b6decacfc1639c3d74c8e4cc1479c6b"
  },
  {
    "url": "tags/elasticsearch/index.html",
    "revision": "683ff04435637d6f7cc7040b40c46e64"
  },
  {
    "url": "tags/Html5/index.html",
    "revision": "3b9e0686a3b6ea7931406e7aed190ad0"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "714d00d3462e7a301f35dd7a36b64897"
  },
  {
    "url": "tags/Jenkins/index.html",
    "revision": "eeb53888a4287eef9ccb14a74a8f794f"
  },
  {
    "url": "tags/JQuery/index.html",
    "revision": "d13655182d500a47ae4a93b544c03908"
  },
  {
    "url": "tags/Kylin/index.html",
    "revision": "33c56d43f71bb7e6a4983925c8691df3"
  },
  {
    "url": "tags/Leaflet/index.html",
    "revision": "6f8a1b890d803e150aa3d903b8160232"
  },
  {
    "url": "tags/MongonDB/index.html",
    "revision": "d1b57a0dcb61014280737e0686443281"
  },
  {
    "url": "tags/MySql/index.html",
    "revision": "a065dd7cd2f6b1c063afb65333a42c43"
  },
  {
    "url": "tags/Nginx/index.html",
    "revision": "78d6abcdc9a540e80eba0d2661b026c1"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "2f0154369febd0f35ee261005750fbbb"
  },
  {
    "url": "tags/Nuxt/index.html",
    "revision": "32a4bc265b2c79d0ec7b802d1f173c3e"
  },
  {
    "url": "tags/React/index.html",
    "revision": "24377762f13eb69a7a338dca4b1aac9c"
  },
  {
    "url": "tags/Sass/index.html",
    "revision": "c5e1d1671cafe2e80616017f7fa83e2d"
  },
  {
    "url": "tags/Typescript/index.html",
    "revision": "faf6da48670be2ee8ad841687f93e46c"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "163c921d90911bb03435165134a6d2c5"
  },
  {
    "url": "tags/Wechatapplet/index.html",
    "revision": "f3bfc2bc4a201d228d5d6323041fb007"
  },
  {
    "url": "tags/win7/index.html",
    "revision": "a44b4e7b434ce59f82170d1c20b15e0e"
  },
  {
    "url": "timeline/index.html",
    "revision": "2014ad841a09622c07692a4c4a065711"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "677ee334a1bb70834de430d7c4fe04d0"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "a4a5b2e70702d4012667c1cf432623fb"
  },
  {
    "url": "views/Centos/3.html",
    "revision": "5b2dad6d8792a4f56d6b2a2119dded51"
  },
  {
    "url": "views/Docker/Docker使用过程中遇到的问题.html",
    "revision": "e0c8f8db29e9aa3b8e13309980b65100"
  },
  {
    "url": "views/Docker/Docker命令.html",
    "revision": "587f279f4a8006679281ccdf78d31264"
  },
  {
    "url": "views/Docker/Docker容器挂载.html",
    "revision": "c30c103d5a28e975bfd0d3d7c17d10b5"
  },
  {
    "url": "views/Docker/Docker迁移与备份.html",
    "revision": "10655c5e52f84c0bebc19abe30bde33a"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "212e58a4ee8601527ae686c7fe13389a"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "5773d8a02d50965b0357e6cac448fd8d"
  },
  {
    "url": "views/elasticSearch/2.html",
    "revision": "e23e64b8f5c6a3c52479760df605e54a"
  },
  {
    "url": "views/elasticSearch/3.html",
    "revision": "e74cbedeefbc37300053823e4e9e471e"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "808218ab255e28c089a2b7f833f945b1"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "827a1157a1252482f01abe011a7b660f"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "2963ca04f354e70c3e92f228aeeaabf7"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "970c51557c1cfa0b6590396114f54a3c"
  },
  {
    "url": "views/JavaScript/3.html",
    "revision": "e49a5c36362f40a7ac4faff9eaec6ee0"
  },
  {
    "url": "views/JavaScript/4.html",
    "revision": "645ed38d80ef9233e340bef2f1000af8"
  },
  {
    "url": "views/JavaScript/5.html",
    "revision": "4e579cbeaac2d4ed8b8ea6b616993589"
  },
  {
    "url": "views/Jenkins/1.html",
    "revision": "1b54225a87ef2968eadca402fa31475c"
  },
  {
    "url": "views/Jenkins/2.html",
    "revision": "68b33bdaf7d49ca134e3fb736bc964aa"
  },
  {
    "url": "views/Jenkins/3.html",
    "revision": "07057ea78e2178b8dd80361f78239abc"
  },
  {
    "url": "views/Jenkins/4.html",
    "revision": "3689c3161cfbbed8169754f413a7ca15"
  },
  {
    "url": "views/Jenkins/5.html",
    "revision": "6b1236d7118b7d85554e3d007dba3344"
  },
  {
    "url": "views/Jenkins/6.html",
    "revision": "185e4f56d6bbeac8163a00571dc06ca9"
  },
  {
    "url": "views/Jenkins/jenkins+gitblit.html",
    "revision": "f87cb96fb510030883b30551a433c355"
  },
  {
    "url": "views/Jenkins/jenkins+svn.html",
    "revision": "d893aec641b84234f16e7d75cff526fd"
  },
  {
    "url": "views/JQuery/1.html",
    "revision": "dc8612e8850824001b9ae19e1fea0fc7"
  },
  {
    "url": "views/Kylin/1.html",
    "revision": "aafdc017dae24f78f11cdbbd615aed1b"
  },
  {
    "url": "views/Leaflet/1.html",
    "revision": "438293f73f946e7095ef9018f0f1a91c"
  },
  {
    "url": "views/mondonDB/1.html",
    "revision": "75933cd0ecb1e718db2e9399f5b6db4e"
  },
  {
    "url": "views/mondonDB/2.html",
    "revision": "1274ba8f9dcbd2c20c76d200deca6548"
  },
  {
    "url": "views/mondonDB/3.html",
    "revision": "e20864c31e5919035201f09bf4d2dbf7"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "3eb6c4d7208e0c76365df1134de65845"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "fbb365108f7157fe3020a59aa9b11a96"
  },
  {
    "url": "views/nginx/2.html",
    "revision": "dbdfb0a49bb26b13ba9cdbeb2e0f35f5"
  },
  {
    "url": "views/nginx/3.html",
    "revision": "1fcc48ada3701312ad404509ff2c444c"
  },
  {
    "url": "views/nginx/4.html",
    "revision": "6225fda7b46d6dc2c624e613f0fd25d8"
  },
  {
    "url": "views/nginx/5.html",
    "revision": "f6cf45ae08f3ef76b763848e9cd829e2"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "a40d8bac908b0cfe8008fc48cbed2d6d"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "e10e7c948a04eff66601902362f9bf31"
  },
  {
    "url": "views/nodejs/3.html",
    "revision": "50492ece4dbc41b03bae041e5c694055"
  },
  {
    "url": "views/nodejs/4.html",
    "revision": "bc7c8e34aa2da064fcc669fbfcfc3dbd"
  },
  {
    "url": "views/nodejs/express.html",
    "revision": "5262ab6db223656c3738dffa0f9c7406"
  },
  {
    "url": "views/nuxt/lesson1.html",
    "revision": "22f92db36aade97cda2707fc7bca664d"
  },
  {
    "url": "views/nuxt/lesson2.html",
    "revision": "0b6c82ea8f8a7859913f98fc58b10f88"
  },
  {
    "url": "views/other/guide.html",
    "revision": "5ae3f40a4136cc763029d866845f1ed0"
  },
  {
    "url": "views/react/1.html",
    "revision": "fe431242cbc04960dcf14897eaa33e1e"
  },
  {
    "url": "views/Sass/1.html",
    "revision": "88e1fbbaf6c308378d096c2dbf94724a"
  },
  {
    "url": "views/Typescript/1.html",
    "revision": "0289857e4903c46b0c3fc300143e0650"
  },
  {
    "url": "views/vue/1.html",
    "revision": "0ff77da21756b79484d01be5fa50837a"
  },
  {
    "url": "views/vue/2.html",
    "revision": "2a1da712d9abaec978ff4746f289677c"
  },
  {
    "url": "views/vue/3.html",
    "revision": "0abd3d451a18ca0e3b01022baa8600ae"
  },
  {
    "url": "views/vue/4.html",
    "revision": "d81b9beacd35001f32f192f4be339999"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "8c9e3e0003db20b6d7d8a61ab5d68938"
  },
  {
    "url": "views/win7/1.html",
    "revision": "ae148ce6b842dd49668dabcf5e67f674"
  },
  {
    "url": "views/win7/2.html",
    "revision": "d1a8319060897c1dc515184db7abc22a"
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
