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
    "revision": "bf744be20d5530d75d4e3a4a7382336a"
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
    "url": "assets/js/1.0ee7398c.js",
    "revision": "8b201173137d9c5bf4260975c2413fb7"
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
    "url": "assets/js/14.ad8a9e4d.js",
    "revision": "bd062e72e541d79c50e21bb4746fe7eb"
  },
  {
    "url": "assets/js/15.66349e86.js",
    "revision": "4713dd8f964d7c511013ab70bf913e19"
  },
  {
    "url": "assets/js/16.eb25e6d1.js",
    "revision": "dff142bf5560c2dffb6aac3e47736871"
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
    "url": "assets/js/19.156486a6.js",
    "revision": "74b7a88d667ef5262d5eb2b87fb8e8ed"
  },
  {
    "url": "assets/js/20.3c5ece7e.js",
    "revision": "8389f2d8a7a5a0acfb5d180a972e9edc"
  },
  {
    "url": "assets/js/21.f8b09fb3.js",
    "revision": "e937d7885c2c2ef05495adddd5e0aeb5"
  },
  {
    "url": "assets/js/22.ff27fa5c.js",
    "revision": "136c9836867c61c5bec989e5f5e987c9"
  },
  {
    "url": "assets/js/23.b93bf41b.js",
    "revision": "d0922e24e2a9084d7dda4aa5299b2ba5"
  },
  {
    "url": "assets/js/24.c84afe86.js",
    "revision": "1873a3320ce844acd25f6834c36558b3"
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
    "url": "assets/js/27.72282bb0.js",
    "revision": "94a19f7ff6c8950189d9e352aafd29e1"
  },
  {
    "url": "assets/js/28.df0dd40a.js",
    "revision": "63dc034d06ae1743473bf08621c809e3"
  },
  {
    "url": "assets/js/29.0829b3cf.js",
    "revision": "791ba7cb9d940c2260273afe261204bc"
  },
  {
    "url": "assets/js/30.3332b0a0.js",
    "revision": "b30e6844a493be95221694b3453a783e"
  },
  {
    "url": "assets/js/31.f28c9866.js",
    "revision": "c24c9d816663a11abd703b0cc3da8ba3"
  },
  {
    "url": "assets/js/32.8be74f8a.js",
    "revision": "24bbf521848b27ff1fa1c0fcb80ddcbc"
  },
  {
    "url": "assets/js/33.32ccc402.js",
    "revision": "aa135a914f8847fa8c97c83b77baec5b"
  },
  {
    "url": "assets/js/34.974aa620.js",
    "revision": "a6ef0348130d30c4e912e6d75bf44838"
  },
  {
    "url": "assets/js/35.5f4a6f47.js",
    "revision": "fb45a0879a6b9cc5237ab4731cddd910"
  },
  {
    "url": "assets/js/36.2f3de40d.js",
    "revision": "c8ac6746e76a763832184b7d8b5cfb8b"
  },
  {
    "url": "assets/js/37.c9db2ddc.js",
    "revision": "5216be3f5e38a0c2153642483fd23531"
  },
  {
    "url": "assets/js/38.5e6dcd1f.js",
    "revision": "60142a8e3d5127531a649cd240b340ff"
  },
  {
    "url": "assets/js/39.1e0a481f.js",
    "revision": "dfbcb2e0103d196dcfdd49bc032f9ede"
  },
  {
    "url": "assets/js/4.63150b63.js",
    "revision": "1554baac3750c1beaf57fc43c6ff02a2"
  },
  {
    "url": "assets/js/40.ea262e0c.js",
    "revision": "3b9acd5fd77ae5f2b53480d0e0742453"
  },
  {
    "url": "assets/js/41.e69c3010.js",
    "revision": "845b1f8181ec410418d9b03e9192743f"
  },
  {
    "url": "assets/js/42.46b5b461.js",
    "revision": "f23cb98e2cc1a149351445055cb14ade"
  },
  {
    "url": "assets/js/43.2acf0008.js",
    "revision": "ec29d2bfb905aed38607c43f7d5e3faf"
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
    "url": "assets/js/46.f8989c35.js",
    "revision": "495acac86bc840c64a4303383727f23a"
  },
  {
    "url": "assets/js/47.c9229da1.js",
    "revision": "3529506246155fe829ade631da08a603"
  },
  {
    "url": "assets/js/48.cbe06144.js",
    "revision": "04aa04668763211054257fd9f7c4ec86"
  },
  {
    "url": "assets/js/49.536dabc6.js",
    "revision": "00d0540037ccca05eb96a74ef0acbd3f"
  },
  {
    "url": "assets/js/5.06054d4d.js",
    "revision": "579464cb8d969d8de5642c3b8743b148"
  },
  {
    "url": "assets/js/50.2da37c01.js",
    "revision": "6b46967a6376045890a456a8b4f17dec"
  },
  {
    "url": "assets/js/51.f91003c4.js",
    "revision": "bddbe968f577ea12ee9014aa34c10798"
  },
  {
    "url": "assets/js/52.862495dd.js",
    "revision": "44a19ea4e2faccb1c78f94289c415204"
  },
  {
    "url": "assets/js/53.2ff839c9.js",
    "revision": "e940427510c0abb4f84203ef8a83af11"
  },
  {
    "url": "assets/js/54.39f8b99b.js",
    "revision": "f4053f85ac0e3f47658f8f7b7cf8b6ab"
  },
  {
    "url": "assets/js/55.e60d36a0.js",
    "revision": "387cd0586aede41a1e16d5eb32d1fe7a"
  },
  {
    "url": "assets/js/56.a741ab4d.js",
    "revision": "a51a4b29115cc1ffbba2d4f58f678a35"
  },
  {
    "url": "assets/js/57.ec235740.js",
    "revision": "10a5dac705025ebb32495ce055ed785b"
  },
  {
    "url": "assets/js/58.0426c513.js",
    "revision": "f3f402c8dd23fbcd2e9bb6dcf1384bca"
  },
  {
    "url": "assets/js/59.56385700.js",
    "revision": "ba87089e62498985e884be2ac9e3e211"
  },
  {
    "url": "assets/js/6.4e56c717.js",
    "revision": "833953714b0ebfd111e86c7605a65eb0"
  },
  {
    "url": "assets/js/60.fa26834a.js",
    "revision": "49ebba20a5ecb6b3be3008ae46fefe99"
  },
  {
    "url": "assets/js/61.8b5f822c.js",
    "revision": "509154112455e4f4c3d90dd8ab2a4489"
  },
  {
    "url": "assets/js/62.41686883.js",
    "revision": "1333b3c9ee158c600fc44ed4d8556fd0"
  },
  {
    "url": "assets/js/63.0e77192d.js",
    "revision": "2537faff6bbc46b2789667ebd39d6468"
  },
  {
    "url": "assets/js/64.5077976c.js",
    "revision": "66fb4f327124e19fbc37701d1c9e0a3c"
  },
  {
    "url": "assets/js/65.857f50ac.js",
    "revision": "c20f7ca9a5333f31c3aae1ae896fa50e"
  },
  {
    "url": "assets/js/66.85eef958.js",
    "revision": "cdddccdecf82aa11938a1173f9eccce2"
  },
  {
    "url": "assets/js/67.fc46e15c.js",
    "revision": "4c959957688f4d23c8537d8d2e962157"
  },
  {
    "url": "assets/js/68.f763f848.js",
    "revision": "6450ea64e916d07c6daac41d508074bd"
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
    "url": "assets/js/9.9611e89f.js",
    "revision": "3fefc11e921c3e61526c37e53f12099e"
  },
  {
    "url": "assets/js/app.c5317ab3.js",
    "revision": "aadd5926b854923894577028149bc25d"
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
    "revision": "2b4104f43774fa0d9be898f1241a28a7"
  },
  {
    "url": "categories/Docker/index.html",
    "revision": "bcb19bfdbf8c1d6c11c6160ca236055b"
  },
  {
    "url": "categories/Echarts/index.html",
    "revision": "0e4d170c2cbe262d04af473a169da5ce"
  },
  {
    "url": "categories/elasticsearch/index.html",
    "revision": "a9515e17c0faec1e3aa75073ac17456c"
  },
  {
    "url": "categories/Html5/index.html",
    "revision": "4da331cb5513a500a56423f5c5358d5e"
  },
  {
    "url": "categories/index.html",
    "revision": "091f966c3566cfa4b50db734aaee920a"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "6fcf0f83a3d8dac913a6f838cf7c4946"
  },
  {
    "url": "categories/Jenkins/index.html",
    "revision": "79896c7e2ffcaffae06186cccf649d7e"
  },
  {
    "url": "categories/JQuery/index.html",
    "revision": "f336f572be961f3f58a2d251ce0d644c"
  },
  {
    "url": "categories/Kylin/index.html",
    "revision": "74d4de31f8cff5ebd2238c15401a53e7"
  },
  {
    "url": "categories/Leaflet/index.html",
    "revision": "742721205510597bdc0d7773012bd449"
  },
  {
    "url": "categories/MongonDB/index.html",
    "revision": "9076e9c00143e467a7f60c56d83f7666"
  },
  {
    "url": "categories/MySql/index.html",
    "revision": "f41f4a771ea47357c8b59b136670b2c6"
  },
  {
    "url": "categories/Nginx/index.html",
    "revision": "57b1207b1227a61a6c27564bff8597bf"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "62393cc20001c140ef827711e6342d1f"
  },
  {
    "url": "categories/Nuxt/index.html",
    "revision": "a29d73ee29774a9e18a67f90332b89f5"
  },
  {
    "url": "categories/React/index.html",
    "revision": "37350156ccae5b521fdd7705a4d27f7e"
  },
  {
    "url": "categories/Sass/index.html",
    "revision": "6ac43d0a4f25a1099b3dc18d9dacde53"
  },
  {
    "url": "categories/Typescript/index.html",
    "revision": "7f3cb2f45bc1e11f764934a66c10d5e8"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "53d58f26a9cfbb8766c52cc1bd3d3f09"
  },
  {
    "url": "categories/Wechatapplet/index.html",
    "revision": "01da64d2384538de07f17502cfa97f85"
  },
  {
    "url": "categories/win7/index.html",
    "revision": "f4591e0d3b432dfca6eebc90f4462870"
  },
  {
    "url": "index.html",
    "revision": "c291bf1fa2ba25a9cdd3504e708dac0e"
  },
  {
    "url": "library/index.html",
    "revision": "7ab8bb2a9f697b0db0f1ed06014f2943"
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
    "revision": "ddfce3725a5d76babda4aeb2ef8da06c"
  },
  {
    "url": "tags/Centos/index.html",
    "revision": "b06aaf0ff62536464e17cee1300b9ec8"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "ad672ec988519cd6c6860c1f44fb8922"
  },
  {
    "url": "tags/Echarts/index.html",
    "revision": "3e76825a584d90e65b74da37383ea1b3"
  },
  {
    "url": "tags/elasticsearch/index.html",
    "revision": "2880a2e9c98b4521149e0eb2417058b0"
  },
  {
    "url": "tags/Html5/index.html",
    "revision": "44aaecaccd9fc14e3ffe86847280039f"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "a5d86e728897af7dc41a1f292f61a1fd"
  },
  {
    "url": "tags/Jenkins/index.html",
    "revision": "80031bf56403cd64080069a45854098b"
  },
  {
    "url": "tags/JQuery/index.html",
    "revision": "2ce4c6d45b1874e1181deda742e85a45"
  },
  {
    "url": "tags/Kylin/index.html",
    "revision": "e465cd172676d1fbf987256aa79845bc"
  },
  {
    "url": "tags/Leaflet/index.html",
    "revision": "837fe8aaa81068e5705e21402aa32b21"
  },
  {
    "url": "tags/MongonDB/index.html",
    "revision": "8bd339566065b0a6a74c7487d0e70f50"
  },
  {
    "url": "tags/MySql/index.html",
    "revision": "2e1ab2101fa841450250aca6870904d8"
  },
  {
    "url": "tags/Nginx/index.html",
    "revision": "6fd42abc167ae16c2a286bd8f2aa93a0"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "7c07d7a82b0c9929cd50ea21d76a007e"
  },
  {
    "url": "tags/Nuxt/index.html",
    "revision": "9011c0039ea9cb4874f7244b76b1b01a"
  },
  {
    "url": "tags/React/index.html",
    "revision": "56e4eb39350056c21813effa1815d31b"
  },
  {
    "url": "tags/Sass/index.html",
    "revision": "e77e3d46b1ee96913131a9e5fe471aa0"
  },
  {
    "url": "tags/Typescript/index.html",
    "revision": "c5a861b1c964c69f15349a93e01ed4ac"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "bbbcb28fd26fb05e122d1d658083bee1"
  },
  {
    "url": "tags/Wechatapplet/index.html",
    "revision": "1eceed43be3133490e9648775cd3beaf"
  },
  {
    "url": "tags/win7/index.html",
    "revision": "375719ff0f6465e6e82c7765aefb54bf"
  },
  {
    "url": "timeline/index.html",
    "revision": "9ffe83588284948f88ef54c3ca4c50d5"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "4f7bdbda512885c8c91bdf3fccbd11ea"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "066e1449d2df0c443945d8665c29eb31"
  },
  {
    "url": "views/Centos/3.html",
    "revision": "51de829c607b6eb02dbb32f6777b8538"
  },
  {
    "url": "views/Docker/Docker使用过程中遇到的问题.html",
    "revision": "f38f8ef57a0cd1c493b224a4c96ce7de"
  },
  {
    "url": "views/Docker/Docker命令.html",
    "revision": "cc56880b9576a4c9348818a121d9dffa"
  },
  {
    "url": "views/Docker/Docker容器挂载.html",
    "revision": "8682fee91c86cb17e84694db71112bbf"
  },
  {
    "url": "views/Docker/Docker迁移与备份.html",
    "revision": "e6abf0744d5b5cdcd6fac59f7bb50dbb"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "651b862d45eef874880c94432bee92b2"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "d4e08641f2edf489b51f935dc7f82a7b"
  },
  {
    "url": "views/elasticSearch/2.html",
    "revision": "1b9ce49957d253190cdd57cc53afd63c"
  },
  {
    "url": "views/elasticSearch/3.html",
    "revision": "b40ae728979791501e3c42602cb7fe2c"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "1a3108455630278e848f9d7fbf5473e3"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "c82da976f1a463b2a96332a0110be33f"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "a6c742584f48433e938a732ec34287e5"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "c772d2e6e141043627a2657fb20194c1"
  },
  {
    "url": "views/JavaScript/3.html",
    "revision": "dc473f7a76d577935912d86303fda807"
  },
  {
    "url": "views/JavaScript/4.html",
    "revision": "7fee496fbf4c7c20c37ac4935e8a1c90"
  },
  {
    "url": "views/Jenkins/1.html",
    "revision": "724f591abe327502c8a83938e546be28"
  },
  {
    "url": "views/Jenkins/2.html",
    "revision": "d0dc3616a4d1978c7aa0014e59fccdc3"
  },
  {
    "url": "views/Jenkins/3.html",
    "revision": "8ae3e2b8101ce157d08b3ba4fe291bc4"
  },
  {
    "url": "views/Jenkins/4.html",
    "revision": "46f518b471b05d0c10afb2ea9b3fc53d"
  },
  {
    "url": "views/Jenkins/5.html",
    "revision": "13d3fd132feba1370bb9b369c0c448b7"
  },
  {
    "url": "views/Jenkins/6.html",
    "revision": "413b7724cfe098dc361e55fbac27bcd7"
  },
  {
    "url": "views/Jenkins/jenkins+gitblit.html",
    "revision": "5390ab90756d73d01aad13233c132c52"
  },
  {
    "url": "views/Jenkins/jenkins+svn.html",
    "revision": "744522080f19582af43e54004d8aa034"
  },
  {
    "url": "views/JQuery/1.html",
    "revision": "61e7c48a8434157d8f58f8ba113c84c6"
  },
  {
    "url": "views/Kylin/1.html",
    "revision": "4c5dc684ea6619fadf3d2753fb30b777"
  },
  {
    "url": "views/Leaflet/1.html",
    "revision": "9ead3b1a5349281bddbd38842c179a18"
  },
  {
    "url": "views/mondonDB/1.html",
    "revision": "e6de31200f13ca8dcbd9e846bef93e52"
  },
  {
    "url": "views/mondonDB/2.html",
    "revision": "bb4b7d814f08d8aa9a10e39234287637"
  },
  {
    "url": "views/mondonDB/3.html",
    "revision": "61a1123f0d1b9d5f42a9244125d9bcfe"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "3f3de8527a3dc9d1e6655d4ab56c1f2e"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "ae5980ed39491541ab2ad4a01d594a23"
  },
  {
    "url": "views/nginx/2.html",
    "revision": "064e46ed1fe15f7b9c0132da87a285e7"
  },
  {
    "url": "views/nginx/3.html",
    "revision": "740e66ede0a6eebc76a07458a7484c35"
  },
  {
    "url": "views/nginx/4.html",
    "revision": "6db6f3e6c78eccab7689c1d785d955e5"
  },
  {
    "url": "views/nginx/5.html",
    "revision": "66a2df6bd389819b9fab70a2f331a785"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "0696c2fa9f8cba2e82659f272e57db3d"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "75e0d9709a9886228aba76db084f8366"
  },
  {
    "url": "views/nodejs/3.html",
    "revision": "442fb342ae03d7fdd8a7dfb4d5f7802a"
  },
  {
    "url": "views/nodejs/4.html",
    "revision": "10da05ea5a3ac6d29865ef7ad40a61e4"
  },
  {
    "url": "views/nodejs/express.html",
    "revision": "27876cfbdcb626e2eac7b2e4e93128c3"
  },
  {
    "url": "views/nuxt/lesson1.html",
    "revision": "9830fe6301368d5e1d7d2e5a98b825b6"
  },
  {
    "url": "views/nuxt/lesson2.html",
    "revision": "0c331fa1a08141dac2aae524cd2639f4"
  },
  {
    "url": "views/other/guide.html",
    "revision": "a5dab2936e70933521c1246cbeb9daaa"
  },
  {
    "url": "views/react/1.html",
    "revision": "b6085a70daaf17765369218251c29aca"
  },
  {
    "url": "views/Sass/1.html",
    "revision": "d6b4eb3a52b64830d7b9a62d83f43252"
  },
  {
    "url": "views/Typescript/1.html",
    "revision": "0afbf6d0d16240f05a19aedf0293bf8b"
  },
  {
    "url": "views/vue/1.html",
    "revision": "71a0a71926e7a4ef5d321beb329653c5"
  },
  {
    "url": "views/vue/2.html",
    "revision": "b26edca8c27ba45a194adb1b234a47b4"
  },
  {
    "url": "views/vue/3.html",
    "revision": "1554b2ea747029c45b2f0cdf81ae5b89"
  },
  {
    "url": "views/vue/4.html",
    "revision": "f6726f528497f170be89dccbcb10200e"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "dfb0279908965aeca88317b127fff18f"
  },
  {
    "url": "views/win7/1.html",
    "revision": "8dd86b243467228151cae21c1f86ca81"
  },
  {
    "url": "views/win7/2.html",
    "revision": "2daf66aded5dce269fd8cd207e819f7b"
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
