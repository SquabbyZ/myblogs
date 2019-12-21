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
    "revision": "226d5bd8355a90b3c2564fa124c7a7c7"
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
    "url": "assets/js/1.d0243e6b.js",
    "revision": "9ea9ee65521d101ec80904cbe75a7835"
  },
  {
    "url": "assets/js/10.aef71789.js",
    "revision": "b07e571806badf5d78fc13c635ddd6cc"
  },
  {
    "url": "assets/js/11.ea52ce41.js",
    "revision": "c13bec455efc4fdbc59b755a3b6265cb"
  },
  {
    "url": "assets/js/12.5f1aefa4.js",
    "revision": "b629cbb4003e8cbf5462f03eb4b75797"
  },
  {
    "url": "assets/js/13.72f7106f.js",
    "revision": "1e8bcb6f4ae073e67a23a3f7fd229f86"
  },
  {
    "url": "assets/js/14.0373f070.js",
    "revision": "0dc1f013ca2f8c896090ef0152bdb6c9"
  },
  {
    "url": "assets/js/15.84e552dd.js",
    "revision": "c695c1959e1a811f2af484bbd4584e46"
  },
  {
    "url": "assets/js/16.6507f84e.js",
    "revision": "c34ead48aedee59af67c2d1f09145460"
  },
  {
    "url": "assets/js/17.89bb7a19.js",
    "revision": "4e4a4f819a58afef98aba083d6ee42a5"
  },
  {
    "url": "assets/js/18.bffafcbe.js",
    "revision": "5223b10836a5a8ea8e0bfb14b53fe78b"
  },
  {
    "url": "assets/js/19.7fab6b31.js",
    "revision": "c095028bdf3146dbcfd45ac85f7feb3b"
  },
  {
    "url": "assets/js/20.45499633.js",
    "revision": "533ace895f3e6f6e220bf6a70dd76d3a"
  },
  {
    "url": "assets/js/21.17931ac6.js",
    "revision": "6711dcf65ce37410fbadad8a893d6267"
  },
  {
    "url": "assets/js/22.30371671.js",
    "revision": "3374186bce64a5e42bab5754b12c334f"
  },
  {
    "url": "assets/js/23.d80b44ec.js",
    "revision": "08d9eef63c8d1871e8e927675d4efab0"
  },
  {
    "url": "assets/js/24.7ef4010e.js",
    "revision": "496b42cf5f6fc9f0c5e01e598b11bcfb"
  },
  {
    "url": "assets/js/25.1ad2ed15.js",
    "revision": "db63f9e16df32b75dcfbd2fd391d0e22"
  },
  {
    "url": "assets/js/26.c87f616a.js",
    "revision": "8274183c4585d5a379f4cc200109f797"
  },
  {
    "url": "assets/js/27.0fe54803.js",
    "revision": "e419b56b294180a70d8ede8dea6f77a1"
  },
  {
    "url": "assets/js/28.9ed33255.js",
    "revision": "92d637bfe2f140bfc409e80af8481d18"
  },
  {
    "url": "assets/js/29.851e52c3.js",
    "revision": "8d1573232d8c10779b0a5208c5f067d0"
  },
  {
    "url": "assets/js/30.5ab8047a.js",
    "revision": "c5584651c68e79045109531ee1a46b4c"
  },
  {
    "url": "assets/js/31.c450d394.js",
    "revision": "88d9f9db081d7cfd901c7a2bccec80ca"
  },
  {
    "url": "assets/js/32.d8bc7a3d.js",
    "revision": "4e94c9dd7f94d008caca4bb0d578d2f7"
  },
  {
    "url": "assets/js/33.fd78fa60.js",
    "revision": "e891682dbd8aa5eddeaead416c634e9f"
  },
  {
    "url": "assets/js/34.fd90a1f3.js",
    "revision": "985ba4ca90dbcd64b8c9ddb2247b96a1"
  },
  {
    "url": "assets/js/35.5438e49f.js",
    "revision": "7f382227759e2ac12ceaeac388421c63"
  },
  {
    "url": "assets/js/36.28daea32.js",
    "revision": "8ef8ec51d6830a158b227f5ec91e1798"
  },
  {
    "url": "assets/js/37.8a325085.js",
    "revision": "1b52ec02911dba8ce4ca10328604f6b6"
  },
  {
    "url": "assets/js/38.3cbc05ff.js",
    "revision": "7e7e780b98fdcf89b82640f7702c3878"
  },
  {
    "url": "assets/js/39.bc7a6cef.js",
    "revision": "92f4267cd5a6228c8108ff262ce4f7dc"
  },
  {
    "url": "assets/js/4.186fceaf.js",
    "revision": "80e20acb9e5c1126dcd7736118e5782e"
  },
  {
    "url": "assets/js/40.efbf5815.js",
    "revision": "858715fe444fe7d1c656dcaf7285cec2"
  },
  {
    "url": "assets/js/41.2b5d8cf7.js",
    "revision": "3182de22dd4ea600ee1cc7f47e2e9e92"
  },
  {
    "url": "assets/js/42.dee6aac3.js",
    "revision": "90d350208ff3fbf586dbcc19c1c0fde8"
  },
  {
    "url": "assets/js/43.49ce43be.js",
    "revision": "6619b6044cde324abf93b80110c31d81"
  },
  {
    "url": "assets/js/44.14d8742b.js",
    "revision": "310d2a9c8db261f05f9d53b24a419a7d"
  },
  {
    "url": "assets/js/45.a7d9c7e7.js",
    "revision": "8f2661ff623c9e75b88da7236a49b31c"
  },
  {
    "url": "assets/js/46.4d8eab65.js",
    "revision": "0e3db0fe790642120a60f11cecdfcade"
  },
  {
    "url": "assets/js/47.bd212df8.js",
    "revision": "9444e247f9b7465aa924a62f73eee1cd"
  },
  {
    "url": "assets/js/48.19fb238f.js",
    "revision": "ad5dece7f677981330a08466d556fe5c"
  },
  {
    "url": "assets/js/49.c64e479f.js",
    "revision": "6d90546de187e832bc4c43a5dfedb7fe"
  },
  {
    "url": "assets/js/5.a904bb98.js",
    "revision": "2541b058a3a59f5bce95e16e45d768d8"
  },
  {
    "url": "assets/js/50.1f25a3ed.js",
    "revision": "9d5d4304818e7d28945314a1aedf7552"
  },
  {
    "url": "assets/js/51.d524f352.js",
    "revision": "0c308359be9af6f4f80eaf678147e656"
  },
  {
    "url": "assets/js/52.a9a16eb4.js",
    "revision": "e8a6d6752f03e74a096b932c74f211fe"
  },
  {
    "url": "assets/js/53.cb142285.js",
    "revision": "b4c84611522441785af4243bc8d8f386"
  },
  {
    "url": "assets/js/54.0f9f3aa2.js",
    "revision": "5b3648111fcd2581fbc9448bec1a437b"
  },
  {
    "url": "assets/js/55.93d21f5e.js",
    "revision": "617641f8c05977da68414103d336ff14"
  },
  {
    "url": "assets/js/56.a82f1b7f.js",
    "revision": "2a5316e5c7f3071fbebc53a41cbc0c82"
  },
  {
    "url": "assets/js/57.4c10b8ba.js",
    "revision": "792f0c11794be67c8d3bbe49109b3055"
  },
  {
    "url": "assets/js/58.fdbf7d46.js",
    "revision": "ff793169b3feb36177b553661f951910"
  },
  {
    "url": "assets/js/59.8eabb3a8.js",
    "revision": "bdf84eb1f13f751215e0242405d2897d"
  },
  {
    "url": "assets/js/6.c07e20e0.js",
    "revision": "af0127bbaa9f13baf9838022df22c8f4"
  },
  {
    "url": "assets/js/60.e3092b42.js",
    "revision": "246a3c163bfd344bd543aa57164bfe7e"
  },
  {
    "url": "assets/js/61.81577ee5.js",
    "revision": "bf40901ca66d5e62551a3af40a581410"
  },
  {
    "url": "assets/js/7.b24b0cd5.js",
    "revision": "bdc77318d6ec444ce5375ed69d4d227a"
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
    "url": "assets/js/app.ef00b0e0.js",
    "revision": "9070a45de05f2f5c714a883bf4d16cf2"
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
    "revision": "852cddd1035fd1a33e7cfeb58ad479f6"
  },
  {
    "url": "category/Docker.html",
    "revision": "db10ca0ddf97e99cd456506fb993576f"
  },
  {
    "url": "category/Echarts.html",
    "revision": "0a26fd62361853bb456feb2272ca4d64"
  },
  {
    "url": "category/elasticsearch.html",
    "revision": "2e58320f186a1b4b1bb74b478afcbd23"
  },
  {
    "url": "category/Html5.html",
    "revision": "5a6cda607f147ba8e207df380ef02953"
  },
  {
    "url": "category/index.html",
    "revision": "40a4a6f58040b0ee22c7ec2027a2b614"
  },
  {
    "url": "category/JavaScript.html",
    "revision": "d7fea29e906f16467780b3a5ae16f368"
  },
  {
    "url": "category/Jenkins.html",
    "revision": "4054467671bdf0cf2ecc985bb8357153"
  },
  {
    "url": "category/JQuery.html",
    "revision": "b4c1f50ad83b75e2589604511b79158d"
  },
  {
    "url": "category/Kylin.html",
    "revision": "2029e4a02d28b6fb2a761fae3c87eab7"
  },
  {
    "url": "category/Leaflet.html",
    "revision": "06912940c4db78b0d4b92ca504644eb3"
  },
  {
    "url": "category/MongonDB.html",
    "revision": "006901b75fc732041383ff89f8e0add5"
  },
  {
    "url": "category/MySql.html",
    "revision": "07a770662cb9b7308d7933d406ebbca1"
  },
  {
    "url": "category/Nginx.html",
    "revision": "f75082821af54886dd26b66b6c76b36e"
  },
  {
    "url": "category/Node.js.html",
    "revision": "53c2db21dab8efe8b3890abfb0759fd9"
  },
  {
    "url": "category/Nuxt.html",
    "revision": "d918574a87dd29adf9d48469e81e91ea"
  },
  {
    "url": "category/React.html",
    "revision": "993e0bad76f050d1050731405c148b16"
  },
  {
    "url": "category/Vue.html",
    "revision": "9afc6b53d866b910065da38fc44fae13"
  },
  {
    "url": "category/Wechatapplet.html",
    "revision": "82106a7896fd8134b2357958ee03c77a"
  },
  {
    "url": "category/win7.html",
    "revision": "fc12fb234f2aef4ccccb6fb142578001"
  },
  {
    "url": "index.html",
    "revision": "ff325c7c4963e4a87e43f790155a990c"
  },
  {
    "url": "library/index.html",
    "revision": "fe7412e4783c752b421f58e735b9b9b0"
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
    "revision": "bab3c0403b4d0c310b21b2cae78f9399"
  },
  {
    "url": "tag/Docker.html",
    "revision": "a8a0adff2e58a5864f3b4ac0e4a80e01"
  },
  {
    "url": "tag/Echarts.html",
    "revision": "b58476af5b29e7a9bc6a3778560bdd51"
  },
  {
    "url": "tag/elasticsearch.html",
    "revision": "41cf5324242fcb69bd4f56523d734f90"
  },
  {
    "url": "tag/Html5.html",
    "revision": "de8e0fa1f96b82bb0771e443c8cdfcb9"
  },
  {
    "url": "tag/index.html",
    "revision": "788975355d4e3e1bd3c9575ff2c2a67d"
  },
  {
    "url": "tag/JavaScript.html",
    "revision": "5abc45cdd620b5f2d40af508812637c5"
  },
  {
    "url": "tag/Jenkins.html",
    "revision": "32f31ccb10c2b5892d2c9a9cd8d890b6"
  },
  {
    "url": "tag/JQuery.html",
    "revision": "b88d9aa24c9f2a1788e4caa56d77eeeb"
  },
  {
    "url": "tag/Kylin.html",
    "revision": "8684f15450b14ec1bbaa7bb517d3a57a"
  },
  {
    "url": "tag/Leaflet.html",
    "revision": "38ba5ac27303d273982382f64babebe3"
  },
  {
    "url": "tag/MongonDB.html",
    "revision": "c3670b9bd909ce1fbbbe3371ec9c329f"
  },
  {
    "url": "tag/MySql.html",
    "revision": "9fd3cdaeeb9de0524751785ca455a594"
  },
  {
    "url": "tag/Nginx.html",
    "revision": "b4b6593bbf3af432ed5d5bc382a6d198"
  },
  {
    "url": "tag/Node.js.html",
    "revision": "42f2ba67edc13c06d5fdb43bcff57e71"
  },
  {
    "url": "tag/Nuxt.html",
    "revision": "e8259838aa7c6dc64fc99e2f4640c712"
  },
  {
    "url": "tag/React.html",
    "revision": "7cd839f15b940ec4a0f0f846677c0e8c"
  },
  {
    "url": "tag/Vue.html",
    "revision": "8be6839000aade6a903822f50abee328"
  },
  {
    "url": "tag/Wechatapplet.html",
    "revision": "4e9d11ed0274b4d8246547e68ddfe59f"
  },
  {
    "url": "tag/win7.html",
    "revision": "ce79f1f1788aec853f917e6f9b3b7f52"
  },
  {
    "url": "timeLine/index.html",
    "revision": "689dfd30946457b8f201e2a3604cda1d"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "6e35287bb6e3fa85a4cea74a168eaaf0"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "8367d8ed61948f4d3180a30fe43c51d9"
  },
  {
    "url": "views/Centos/3.html",
    "revision": "6457894189c1aebece6fb4209d4021c9"
  },
  {
    "url": "views/Docker/Docker使用过程中遇到的问题.html",
    "revision": "6851e85256f7840ee9758808e4a2d6a9"
  },
  {
    "url": "views/Docker/Docker命令.html",
    "revision": "147cf408198e4d13df3d1af8ccd95c81"
  },
  {
    "url": "views/Docker/Docker容器挂载.html",
    "revision": "ca945c095b6f909df709f67cbff77e7c"
  },
  {
    "url": "views/Docker/Docker迁移与备份.html",
    "revision": "bf0bb85cc8a70dcb7c41ea05a8d1c06b"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "f2cd690692108744130ae8aa5859254f"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "1ed282e2bd2ae1c76a9f38753a2a116f"
  },
  {
    "url": "views/elasticSearch/2.html",
    "revision": "4c76b9b5bfab425235e406d38d1cd779"
  },
  {
    "url": "views/elasticSearch/3.html",
    "revision": "88cc3b7da28ed69e8dc13207041b23da"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "a15c4657b067fb85f66d2b6ec164466c"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "a65c420dcd7506b3dc78468e26888e5b"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "ff46054784a129706e029f5a106501f6"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "bb1df862ed1282ab81331dec1898da93"
  },
  {
    "url": "views/JavaScript/3.html",
    "revision": "2602eb20f89ad638f005f7ac5fa4ec7f"
  },
  {
    "url": "views/Jenkins/1.html",
    "revision": "9c39e85b522cbcc653bea7d96978573f"
  },
  {
    "url": "views/Jenkins/2.html",
    "revision": "14cd5dc4deb7bd2da1cafaa01a30e0d2"
  },
  {
    "url": "views/Jenkins/3.html",
    "revision": "74235ec0d1dff0ec78e67c267a3a5a55"
  },
  {
    "url": "views/Jenkins/4.html",
    "revision": "1697b1827b836cb6dd4cdbced4368abe"
  },
  {
    "url": "views/Jenkins/5.html",
    "revision": "d2469ffd141cd3c8439efa6533c14a82"
  },
  {
    "url": "views/Jenkins/jenkins+gitblit.html",
    "revision": "38393b0964a959497ba27ac9e6850086"
  },
  {
    "url": "views/JQuery/1.html",
    "revision": "dec061234af6214f0eaba526f878d6af"
  },
  {
    "url": "views/Kylin/1.html",
    "revision": "2a063da5ba0bd418aa715793e3eebc3b"
  },
  {
    "url": "views/Leaflet/1.html",
    "revision": "192f760633a12cb65404afe8ff0f429b"
  },
  {
    "url": "views/mondonDB/1.html",
    "revision": "2c8516139347ec197e19a9df236d331d"
  },
  {
    "url": "views/mondonDB/2.html",
    "revision": "4bbacaeccc717edd36a1941e0ef7728f"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "e63a3f9e4f3ecc1cd420c89164535d8b"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "9364c5d3fb3748a967fd08a8d2a593c1"
  },
  {
    "url": "views/nginx/2.html",
    "revision": "4efc50292cc28e804220649eb0a01ef3"
  },
  {
    "url": "views/nginx/3.html",
    "revision": "ae065fbaa50b0adc7db34b089252cc77"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "42387b22ee95389dfaa69be4e2f32a91"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "fb32914ffd57dfaa38c9ccae48c25ae8"
  },
  {
    "url": "views/nodejs/3.html",
    "revision": "55b33e9d713c655cdf686bac6c12938e"
  },
  {
    "url": "views/nodejs/4.html",
    "revision": "decb665078fc2cf30d90e0d17d0b7256"
  },
  {
    "url": "views/nodejs/express.html",
    "revision": "f5a541cff459eda2b5958689f6934681"
  },
  {
    "url": "views/nuxt/lesson1.html",
    "revision": "9f7b3e0f16691288e1912160f562c355"
  },
  {
    "url": "views/nuxt/lesson2.html",
    "revision": "c05a029e293f359ed30aa5a02aa63186"
  },
  {
    "url": "views/other/guide.html",
    "revision": "3483a154577cec83bd3249e26ea6969c"
  },
  {
    "url": "views/react/1.html",
    "revision": "d7341197ded1771e38887f52d36424f8"
  },
  {
    "url": "views/vue/1.html",
    "revision": "4710cff83d007e09eafacd94c0f17f95"
  },
  {
    "url": "views/vue/2.html",
    "revision": "f5d5ccdba3805d6509d9b22470a8b189"
  },
  {
    "url": "views/vue/3.html",
    "revision": "c7f73b0239df69852aab6b1b1d9e0893"
  },
  {
    "url": "views/vue/4.html",
    "revision": "a41330c6dba4ddaa89f6ea959508e2c8"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "be9091799a8423e814eb9921b753f524"
  },
  {
    "url": "views/win7/1.html",
    "revision": "27879cf895c930a7542163848fbf7ae3"
  },
  {
    "url": "views/win7/2.html",
    "revision": "7d818cf62f8f75b72e1911bc199d73be"
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
