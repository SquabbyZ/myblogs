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
    "revision": "4b5d23e1d4349d6f273f06519869bbeb"
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
    "url": "assets/js/11.edbf4408.js",
    "revision": "b32bf4192025dd0fcc1062e7cdac0b9c"
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
    "url": "assets/js/16.93bf959e.js",
    "revision": "a1d31c9c3b67572591455508ec67ebe3"
  },
  {
    "url": "assets/js/17.ba9098ba.js",
    "revision": "db70f5be149846835f45dff924b52a77"
  },
  {
    "url": "assets/js/18.a906cb07.js",
    "revision": "1bc59847a6a870a14ca36f291823d662"
  },
  {
    "url": "assets/js/19.05e88417.js",
    "revision": "5cc7a027ad7b90e71e60e5a65ffcdd22"
  },
  {
    "url": "assets/js/20.93b8a445.js",
    "revision": "dcad8973ee4b3fc6fea04ede9f658704"
  },
  {
    "url": "assets/js/21.1c959c9c.js",
    "revision": "2740676a625f95c15ee88838ee0cc3d8"
  },
  {
    "url": "assets/js/22.13ffdd45.js",
    "revision": "6fe5a20f7fad87800d6270fed1ce482d"
  },
  {
    "url": "assets/js/23.edf3b6a0.js",
    "revision": "a8fb8ddc46d46bb98503cef1df0af9b1"
  },
  {
    "url": "assets/js/24.190db9cf.js",
    "revision": "f90ec6e978d04fc444adbf181180803d"
  },
  {
    "url": "assets/js/25.dbcf6502.js",
    "revision": "c8646e24fa88dfd579062d52ff18ae01"
  },
  {
    "url": "assets/js/26.f4b5e264.js",
    "revision": "480fe3a3f3f3dce7eb3c6f72f7dcae4b"
  },
  {
    "url": "assets/js/27.2c67936b.js",
    "revision": "a21dd11b392eb3651c745d59984d0ac1"
  },
  {
    "url": "assets/js/28.a581b626.js",
    "revision": "d0336706ab30f79ab4dc05d97a5d32d5"
  },
  {
    "url": "assets/js/29.8b2f493a.js",
    "revision": "d32f95d4334a00bc2332719792b655e5"
  },
  {
    "url": "assets/js/30.d8fe6e5b.js",
    "revision": "c64a832937510c120ce77cebbc345ac5"
  },
  {
    "url": "assets/js/31.9e16f8c8.js",
    "revision": "a8e459fa0ec72b7e2fdb9fa19e612a11"
  },
  {
    "url": "assets/js/32.76108f2c.js",
    "revision": "d03d9bcf64ed25f6c28060dd3f7c2f91"
  },
  {
    "url": "assets/js/33.62c6e6d6.js",
    "revision": "e0da42e3278b153dd133026a4fe9c020"
  },
  {
    "url": "assets/js/34.9c9c1023.js",
    "revision": "17597fb8f60562bf6087454b37a02091"
  },
  {
    "url": "assets/js/35.d6b7e6fe.js",
    "revision": "32028e53cb2298fd05fe25c542ca69bd"
  },
  {
    "url": "assets/js/36.5ae94840.js",
    "revision": "b7a9979b20ff5d4f13bd1c0a1d535993"
  },
  {
    "url": "assets/js/37.91a60ace.js",
    "revision": "ca14fc165d7514538ddf0ad6b999ae23"
  },
  {
    "url": "assets/js/38.369c2479.js",
    "revision": "6c43421fd35cbb252cdff86b21f3bdd5"
  },
  {
    "url": "assets/js/39.289f64dd.js",
    "revision": "b1f334dc2f09c7582f893ff92012659c"
  },
  {
    "url": "assets/js/4.6167913b.js",
    "revision": "74c9f0f173b32aa4d702b4d4c9a8ab13"
  },
  {
    "url": "assets/js/40.ab04e55e.js",
    "revision": "721d8eb40c58d3f01d12642fc8e8d6b5"
  },
  {
    "url": "assets/js/41.5b82612f.js",
    "revision": "489370c433f82f96c030edabbeac743e"
  },
  {
    "url": "assets/js/42.4c520342.js",
    "revision": "1f3fb6d05c92f228ecc7bfda8908cab6"
  },
  {
    "url": "assets/js/43.77432ecd.js",
    "revision": "6e0e562064ed9315c3124efe18e14cf6"
  },
  {
    "url": "assets/js/44.b8e94a95.js",
    "revision": "261af124c7fbb0ef45c3bfe7ffb2a849"
  },
  {
    "url": "assets/js/45.a2c6c809.js",
    "revision": "3b42286c6c3034eb088af4661bfaad4d"
  },
  {
    "url": "assets/js/46.308bd62b.js",
    "revision": "b0574a7cc3c5baf4e9e8c8047bdcf0c9"
  },
  {
    "url": "assets/js/47.e9b42412.js",
    "revision": "133bb96f8b0fdc86e764e2584ec48223"
  },
  {
    "url": "assets/js/48.9b2b33c5.js",
    "revision": "e8567e85b6b4538635e7f020e313e938"
  },
  {
    "url": "assets/js/49.4e175f44.js",
    "revision": "aec99e34607d6b71f36891bb1db5127c"
  },
  {
    "url": "assets/js/5.06054d4d.js",
    "revision": "579464cb8d969d8de5642c3b8743b148"
  },
  {
    "url": "assets/js/50.9607b091.js",
    "revision": "64bab0478da0621346c464fc582ac71f"
  },
  {
    "url": "assets/js/51.1a89b5a9.js",
    "revision": "f94210642730d37fa149bb23112c096b"
  },
  {
    "url": "assets/js/52.862495dd.js",
    "revision": "44a19ea4e2faccb1c78f94289c415204"
  },
  {
    "url": "assets/js/53.a9fd30a7.js",
    "revision": "ee4e236d786c6d394df15264981bbca2"
  },
  {
    "url": "assets/js/54.104f2844.js",
    "revision": "a1625c1d5c5a40e890e4e1b073f8241a"
  },
  {
    "url": "assets/js/55.f70d2556.js",
    "revision": "44e48ce4347c74cf7a3595c131334531"
  },
  {
    "url": "assets/js/56.7dc6314f.js",
    "revision": "02c8499076ab83ca601d277725d1a00f"
  },
  {
    "url": "assets/js/57.8da5ccc2.js",
    "revision": "34817615c26ed03dc7dde693850c6312"
  },
  {
    "url": "assets/js/58.0426c513.js",
    "revision": "f3f402c8dd23fbcd2e9bb6dcf1384bca"
  },
  {
    "url": "assets/js/59.417045a2.js",
    "revision": "b29311fc7924251d688eb075523119b0"
  },
  {
    "url": "assets/js/6.4e56c717.js",
    "revision": "833953714b0ebfd111e86c7605a65eb0"
  },
  {
    "url": "assets/js/60.712b30bd.js",
    "revision": "cc41fde858e7275ba53dc94dc2f6bc8e"
  },
  {
    "url": "assets/js/61.da1d919b.js",
    "revision": "7502cd39f5c87f2ff7fe7486e9a3c735"
  },
  {
    "url": "assets/js/62.0225791e.js",
    "revision": "d4921c0e751bc5fc7238099e0f373cd8"
  },
  {
    "url": "assets/js/63.20379955.js",
    "revision": "c8227998a7f8277a40d2348ec89d0253"
  },
  {
    "url": "assets/js/64.caec4190.js",
    "revision": "d5975bf5633aaea7a8c06088b9c72804"
  },
  {
    "url": "assets/js/65.be373485.js",
    "revision": "7ebd30e63791cfe748fd206b04e01ea4"
  },
  {
    "url": "assets/js/66.1150e56e.js",
    "revision": "1a4fb1a8cc34bb007f5e82870b56d729"
  },
  {
    "url": "assets/js/67.e182278d.js",
    "revision": "536dc995881cc65653534c4ca109c295"
  },
  {
    "url": "assets/js/68.de63e136.js",
    "revision": "512d64a58445a780db2c0fe7faa75d04"
  },
  {
    "url": "assets/js/69.5bd4528e.js",
    "revision": "64ddf099753a5b15f2fa8e12b5d6ec73"
  },
  {
    "url": "assets/js/7.39c73921.js",
    "revision": "1fe155138ee2cfd8aae98809b5ea750e"
  },
  {
    "url": "assets/js/70.6c429556.js",
    "revision": "21d7b7f24aaa9a3ecb3a01dae0428c35"
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
    "url": "assets/js/app.c1b42f01.js",
    "revision": "a18d2323a2d8ec020efc3a3a28219ecf"
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
    "revision": "974575a44f1df876afdded135f5de1d2"
  },
  {
    "url": "categories/Docker/index.html",
    "revision": "3bac2bb722d0dbb6c05285d23e1c24e4"
  },
  {
    "url": "categories/Echarts/index.html",
    "revision": "e2a6cf0f62252445df4427f7f721bdf1"
  },
  {
    "url": "categories/elasticsearch/index.html",
    "revision": "bd3a7621a18fb720677c7bc419a98647"
  },
  {
    "url": "categories/Html5/index.html",
    "revision": "087ec15748eacdd3718274b137add705"
  },
  {
    "url": "categories/index.html",
    "revision": "c1e0c63f2fb59ed969b12d4069edda5c"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "f44b20ad8c7ab31a1610c7dfa53e0a23"
  },
  {
    "url": "categories/Jenkins/index.html",
    "revision": "5c7d71ada1e0fdddd1c0b0f474f76716"
  },
  {
    "url": "categories/JQuery/index.html",
    "revision": "571b82d519237c8bbf038e8997a4b1a5"
  },
  {
    "url": "categories/Kylin/index.html",
    "revision": "161fce4db264a8880429d0d94d861936"
  },
  {
    "url": "categories/Leaflet/index.html",
    "revision": "e2b9b239cf035edd51ce965c8602868a"
  },
  {
    "url": "categories/MongonDB/index.html",
    "revision": "371d43fee6b64eb5fee82ea37aeec3ac"
  },
  {
    "url": "categories/MySql/index.html",
    "revision": "aabc9a2144d135362b0fb8e1ec899518"
  },
  {
    "url": "categories/Nginx/index.html",
    "revision": "6cab1806a9bc89d852390b924ff710ba"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "d505683fc39a86bbb6f9206f191ad3c7"
  },
  {
    "url": "categories/Nuxt/index.html",
    "revision": "1ee55bda7712bffc3a8e2b5609105b2a"
  },
  {
    "url": "categories/React/index.html",
    "revision": "95d3cc78a6d3bc2b2e2b6dad82f9534b"
  },
  {
    "url": "categories/Sass/index.html",
    "revision": "da8d4f1ad3f7a5ccf28f48826f6d5d83"
  },
  {
    "url": "categories/Typescript/index.html",
    "revision": "e17f95a40bd34ac4b06a9cb2589ce102"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "39ccbce4a4cc91c2641f186a5c980f35"
  },
  {
    "url": "categories/Wechatapplet/index.html",
    "revision": "2be83390b23376b8132e866b37ebb109"
  },
  {
    "url": "categories/win7/index.html",
    "revision": "c06ab1155dfee296b34aaa2dfa6af3ca"
  },
  {
    "url": "index.html",
    "revision": "760290ceddd6465c062fa228208c58e4"
  },
  {
    "url": "library/index.html",
    "revision": "d029fa649c505f7870dff27f0fd2c972"
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
    "revision": "07b1e2987bee88b94db9be2265b3af5f"
  },
  {
    "url": "tags/Centos/index.html",
    "revision": "8a22787d154e2d59c17c41757c255b5c"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "eb402ada202e84d18081a5fcbfe1b8ac"
  },
  {
    "url": "tags/Echarts/index.html",
    "revision": "334ac7a87ad35d15077ac8bbca5f64fc"
  },
  {
    "url": "tags/elasticsearch/index.html",
    "revision": "e01fd684ca90e618e9eab59cf182900c"
  },
  {
    "url": "tags/Html5/index.html",
    "revision": "d5ac5771f35b4df7e35b16e4ad73839f"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "83527e66a41ebe3054c60d91ff4e8f49"
  },
  {
    "url": "tags/Jenkins/index.html",
    "revision": "28073872c2f4568c647a5083896d8b15"
  },
  {
    "url": "tags/JQuery/index.html",
    "revision": "d80e4d28832806d9eadf2ea3fe897137"
  },
  {
    "url": "tags/Kylin/index.html",
    "revision": "c79e4e1cca9788fcfb2cb200cb067dd4"
  },
  {
    "url": "tags/Leaflet/index.html",
    "revision": "5839216e95c4b05e29007ca1b0b7fe16"
  },
  {
    "url": "tags/MongonDB/index.html",
    "revision": "9b8cd0d35f562b762f790aa91b3dfcaf"
  },
  {
    "url": "tags/MySql/index.html",
    "revision": "1ac1a6438fe01fd6d48543bcad12b036"
  },
  {
    "url": "tags/Nginx/index.html",
    "revision": "f6fa9af5660595243393261265de637a"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "95b4188d7255a8e0bcaca945d48d4fa5"
  },
  {
    "url": "tags/Nuxt/index.html",
    "revision": "0545144401cb2975b28d92d47fba3caa"
  },
  {
    "url": "tags/React/index.html",
    "revision": "83afb7e9dc2877b8b8be15be494b547b"
  },
  {
    "url": "tags/Sass/index.html",
    "revision": "7966d58913c9eb43f4c593d24a636467"
  },
  {
    "url": "tags/Typescript/index.html",
    "revision": "83801de99de9afadff08f9c9310f7a9d"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "9dfcab4f61e24048d0afa23c0751fb34"
  },
  {
    "url": "tags/Wechatapplet/index.html",
    "revision": "2ba9004af5b1043f154c44ac8dea3d2f"
  },
  {
    "url": "tags/win7/index.html",
    "revision": "30dd0fd5c12e8735840ae3d1a66273b2"
  },
  {
    "url": "timeline/index.html",
    "revision": "2981fdedb16e0497f4db8c8f4376f1c4"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "27ab2a6cf425c968f9b9ff5c610b1fbb"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "3f4d87f22b97ef928139730891663261"
  },
  {
    "url": "views/Centos/3.html",
    "revision": "1c11f2108d7ea7313b703daf42e76ebb"
  },
  {
    "url": "views/Docker/Docker使用过程中遇到的问题.html",
    "revision": "d96fee659142aaf8a6a88b1a81f91945"
  },
  {
    "url": "views/Docker/Docker命令.html",
    "revision": "1af8f0e3471bb0327019ab89db302728"
  },
  {
    "url": "views/Docker/Docker容器挂载.html",
    "revision": "c8bc83e3386f1ec95645dd9435d7559e"
  },
  {
    "url": "views/Docker/Docker迁移与备份.html",
    "revision": "b086e2449edebe689342c4060f38e665"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "1428a2a08cbd6663d82613e3f3e69870"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "f5ec181d7b21e7a929d11d9c3a8e0778"
  },
  {
    "url": "views/elasticSearch/2.html",
    "revision": "a5ab93a13ab6e45043f9a10fe0ab3462"
  },
  {
    "url": "views/elasticSearch/3.html",
    "revision": "6e35183b5740f7e0fcef1757e1983e54"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "823e752abab86a146e0ae96ef4000add"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "ad73c20aebacfe8bc72280aa9609db8a"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "4c8ff723ecc1850072fe26e4465992f2"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "b7774a4e0e00a4da0f87464efdb4aa7d"
  },
  {
    "url": "views/JavaScript/3.html",
    "revision": "ee513d246a182a14d6892472f991dfc5"
  },
  {
    "url": "views/JavaScript/4.html",
    "revision": "6ef1a5d64cd6c23873bdea837c6a9575"
  },
  {
    "url": "views/Jenkins/1.html",
    "revision": "aa4eff8d663ddb3fd96bdb5252ae2ac3"
  },
  {
    "url": "views/Jenkins/2.html",
    "revision": "ed8bbe9e1466bd66ba099042cc678be0"
  },
  {
    "url": "views/Jenkins/3.html",
    "revision": "0ae8c6ecde0f884c40d6e71cb0806d60"
  },
  {
    "url": "views/Jenkins/4.html",
    "revision": "c8d495a1e0899e6162ea7f075d205b32"
  },
  {
    "url": "views/Jenkins/5.html",
    "revision": "08a6517ab8aba14b08a160c315b81558"
  },
  {
    "url": "views/Jenkins/6.html",
    "revision": "040ebab65df656b415a7ec652584c0b3"
  },
  {
    "url": "views/Jenkins/jenkins+gitblit.html",
    "revision": "e40f5894c80841c5cfdf632f80b90fc7"
  },
  {
    "url": "views/Jenkins/jenkins+svn.html",
    "revision": "f8ff12c874e8162ae1414298cbf9547f"
  },
  {
    "url": "views/JQuery/1.html",
    "revision": "cc32ac73eb7c80bc81f2ba9c043deafe"
  },
  {
    "url": "views/Kylin/1.html",
    "revision": "5e7b410f2875313603375ab395f1f99f"
  },
  {
    "url": "views/Leaflet/1.html",
    "revision": "95d4db2819f9d973280784dbe600c2e2"
  },
  {
    "url": "views/mondonDB/1.html",
    "revision": "3b51e6e14ddaf03b49b2a1929d008b7b"
  },
  {
    "url": "views/mondonDB/2.html",
    "revision": "7fb4a49fe57406459c4e7286dd367cee"
  },
  {
    "url": "views/mondonDB/3.html",
    "revision": "b148d0c3cedeb8b0ea5c7d105e62c4d9"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "c1e4d2e5810296cfda9fc04338b9d124"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "c60c02b43e9a480b5d6816784daab4ce"
  },
  {
    "url": "views/nginx/2.html",
    "revision": "14e37698d300d5670039ec2aedca6f02"
  },
  {
    "url": "views/nginx/3.html",
    "revision": "bc677e8ad16817da3e0a7ce4b765dea0"
  },
  {
    "url": "views/nginx/4.html",
    "revision": "288c2e0aef48d80da33bf3d25facd401"
  },
  {
    "url": "views/nginx/5.html",
    "revision": "68e27611d578991124574067713f7ce1"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "6546f5f72c3b28d72529a23171035915"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "07b796f39448a70bf62d192d4e91ee5d"
  },
  {
    "url": "views/nodejs/3.html",
    "revision": "3111dce6db99adf7c8dbd02afd7e28f5"
  },
  {
    "url": "views/nodejs/4.html",
    "revision": "feb77c27a89c15de26f8fb255cda10bf"
  },
  {
    "url": "views/nodejs/express.html",
    "revision": "bfef4709c9bad37b7dbfb3d9ab95fac3"
  },
  {
    "url": "views/nuxt/lesson1.html",
    "revision": "bd18d0afdf70631188990e920115b345"
  },
  {
    "url": "views/nuxt/lesson2.html",
    "revision": "c37b065e0a98a9888060f621cb424cf4"
  },
  {
    "url": "views/other/guide.html",
    "revision": "26e851bdefc63c6a22df2c6916b1c595"
  },
  {
    "url": "views/react/1.html",
    "revision": "a7abc29ef1eacd79a4bbf040ff369e07"
  },
  {
    "url": "views/Sass/1.html",
    "revision": "6a1e17fa4b8e6d03facb57504d05e126"
  },
  {
    "url": "views/Typescript/1.html",
    "revision": "d0894e2e5773d3bc6df49bcd41a407d7"
  },
  {
    "url": "views/vue/1.html",
    "revision": "f6e6dce1a7d1718fdfdfccb94f5819a8"
  },
  {
    "url": "views/vue/2.html",
    "revision": "07a0ef529b61b4fc1ea19f1c5c72c8c2"
  },
  {
    "url": "views/vue/3.html",
    "revision": "6c63d00958d457fce8bb972801cc389f"
  },
  {
    "url": "views/vue/4.html",
    "revision": "cc9d19317188a4c9d9dcfba8c40a8bc0"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "0ded68a66b3ea7cda3130b1cace8b13b"
  },
  {
    "url": "views/win7/1.html",
    "revision": "e386965f08132615c4191f4677413c0e"
  },
  {
    "url": "views/win7/2.html",
    "revision": "6db8f7963f2c744f7a65a4a1a1b072dc"
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
