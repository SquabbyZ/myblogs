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
    "revision": "63c35e27658938c280f24e35c79abf76"
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
    "url": "assets/js/1.e9d73dc4.js",
    "revision": "f8ecb4f25c279ad6403032a8e12a7b09"
  },
  {
    "url": "assets/js/10.14019361.js",
    "revision": "3c3839cc8c4d9b06a553bf34cd5e2ac9"
  },
  {
    "url": "assets/js/11.777054f6.js",
    "revision": "557c323c1da09a17a2bd01d640faabc2"
  },
  {
    "url": "assets/js/12.ca46294b.js",
    "revision": "a2379a76ed747b9f421cb8168541bba2"
  },
  {
    "url": "assets/js/13.83c3e7e6.js",
    "revision": "fbc3669c6f3b3a352c1cb6bfb5744713"
  },
  {
    "url": "assets/js/14.951ea189.js",
    "revision": "77e0f2b235a940c08725e4fb3ad1ff55"
  },
  {
    "url": "assets/js/15.b5cf31a3.js",
    "revision": "9c88283f6307496830ab6f5af8211c3d"
  },
  {
    "url": "assets/js/16.7367b523.js",
    "revision": "b02840347133becc34b132a7654e674e"
  },
  {
    "url": "assets/js/17.4422b722.js",
    "revision": "357d50995fed97fc8d4b456298b59433"
  },
  {
    "url": "assets/js/18.aef718c5.js",
    "revision": "24e868b061922273d5be37fab556aeeb"
  },
  {
    "url": "assets/js/19.0dc6bca6.js",
    "revision": "bf11baced6d7acee9f5a6f6b04fddf85"
  },
  {
    "url": "assets/js/20.d728aa68.js",
    "revision": "7ba495c225af0fed281664ece932a503"
  },
  {
    "url": "assets/js/21.17931ac6.js",
    "revision": "6711dcf65ce37410fbadad8a893d6267"
  },
  {
    "url": "assets/js/22.0159c609.js",
    "revision": "9cbc398bc9fd39bbc7fed19d54d568f6"
  },
  {
    "url": "assets/js/23.5131bc57.js",
    "revision": "7054336295088910f99b98e20ee440f1"
  },
  {
    "url": "assets/js/24.32f4fd64.js",
    "revision": "031e100626279fb0be0c0e539ec286e1"
  },
  {
    "url": "assets/js/25.cf5c5582.js",
    "revision": "340c8310f4f70f54b294087c9b0c2fba"
  },
  {
    "url": "assets/js/26.9e34eec0.js",
    "revision": "66456e4664560c284d5532e834e1cbe2"
  },
  {
    "url": "assets/js/27.5c641d2b.js",
    "revision": "86fdc4d3b6598922100d0a98a2f3e18e"
  },
  {
    "url": "assets/js/28.31add9c6.js",
    "revision": "1c540b9dea536a5df112b3151e6767f0"
  },
  {
    "url": "assets/js/29.d199cd9f.js",
    "revision": "ba6e9ae8bcdbf2a9fe89a74cbf6a34e6"
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
    "url": "assets/js/33.1dfb7eb1.js",
    "revision": "f72ca061bf0af492df8a12a457d9c945"
  },
  {
    "url": "assets/js/34.3237be11.js",
    "revision": "ba74c905433399e0b59118ca67aa056a"
  },
  {
    "url": "assets/js/35.8bd7c113.js",
    "revision": "cbb284c2dec4109bd646fa25be2afd9c"
  },
  {
    "url": "assets/js/36.38c82bf3.js",
    "revision": "e86274d3c16eb9332c980a30d3c756d6"
  },
  {
    "url": "assets/js/37.1e5199a9.js",
    "revision": "b29b94f49e08123b749e91648af2453e"
  },
  {
    "url": "assets/js/38.37951373.js",
    "revision": "84c6f2a77810bf3d5d98072dada9afc8"
  },
  {
    "url": "assets/js/39.e9263721.js",
    "revision": "8db3b92de3107780a6b997b854cf2704"
  },
  {
    "url": "assets/js/4.aa6aa63d.js",
    "revision": "715d909f2d4c1f4ea2923eaea9b19075"
  },
  {
    "url": "assets/js/40.f6bf08e5.js",
    "revision": "2a06062db6534b0068f11b16bbd9367b"
  },
  {
    "url": "assets/js/41.f9bad072.js",
    "revision": "3bfb1edd7ce60e72cf0cf8328d4cbd93"
  },
  {
    "url": "assets/js/42.a3c708fe.js",
    "revision": "0889e880beb96c771178ccac306ae393"
  },
  {
    "url": "assets/js/43.a04a0649.js",
    "revision": "7548a00750d107799bf5ec4f3e70cfd3"
  },
  {
    "url": "assets/js/44.12668874.js",
    "revision": "fbd99781a99d6a82d9dbcce4ec6b6838"
  },
  {
    "url": "assets/js/45.a6b425b5.js",
    "revision": "bb97964e5f07dc471fc6e76e9b100267"
  },
  {
    "url": "assets/js/46.d6982ede.js",
    "revision": "fd77e9dae4f2279982d30de6d346fdf5"
  },
  {
    "url": "assets/js/47.2ee59616.js",
    "revision": "060af57cbcf334a500edeab0ecf063ae"
  },
  {
    "url": "assets/js/48.dbbb7225.js",
    "revision": "fad4031dd688ca0799a93cdb0d6ef7a1"
  },
  {
    "url": "assets/js/49.96391a51.js",
    "revision": "035e33fa51c29275530fbfc3a9ff670c"
  },
  {
    "url": "assets/js/5.a904bb98.js",
    "revision": "2541b058a3a59f5bce95e16e45d768d8"
  },
  {
    "url": "assets/js/50.6b86741e.js",
    "revision": "2dd4da4c14e6ace57abf398b7f458a7d"
  },
  {
    "url": "assets/js/51.5f0d82d3.js",
    "revision": "219e123c66bb6004ff1b39ecd6822356"
  },
  {
    "url": "assets/js/52.a17ad435.js",
    "revision": "937633c4facfc53946af6deae606901e"
  },
  {
    "url": "assets/js/53.b1d3b3e9.js",
    "revision": "eccd8666fe9da6b821e6be116e273c23"
  },
  {
    "url": "assets/js/54.6cb2787a.js",
    "revision": "2ff8e0b34d8de657b59d6f9c749333a1"
  },
  {
    "url": "assets/js/55.570da8b8.js",
    "revision": "6245636c4b22959d448a0eacadfab46b"
  },
  {
    "url": "assets/js/56.761429fb.js",
    "revision": "b4d5feffd27c5a2d7e74ead50ec92a6d"
  },
  {
    "url": "assets/js/57.b9e5de40.js",
    "revision": "0e39e52bbdf5667277ff8d312432ce9d"
  },
  {
    "url": "assets/js/58.bf15976d.js",
    "revision": "51462fb2098f0ce26887019dafa3173c"
  },
  {
    "url": "assets/js/6.c07e20e0.js",
    "revision": "af0127bbaa9f13baf9838022df22c8f4"
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
    "url": "assets/js/app.54436ed1.js",
    "revision": "953ace901414e9687b456867c8c73e1a"
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
    "revision": "e70d59f0f38aa7cd94b3e89cf459ce76"
  },
  {
    "url": "category/Docker.html",
    "revision": "1cb187456ddd91c288ffa583f064836d"
  },
  {
    "url": "category/Echarts.html",
    "revision": "d7a20a1753214600417e8c1ddd0a52a4"
  },
  {
    "url": "category/elasticsearch.html",
    "revision": "e76152dd3dda95a3f85be4b42b94b7b1"
  },
  {
    "url": "category/Html5.html",
    "revision": "d97268ff15fc5ce79747a2fdabefde68"
  },
  {
    "url": "category/index.html",
    "revision": "fd2e51b6ac370e61a038712dfacd4baf"
  },
  {
    "url": "category/JavaScript.html",
    "revision": "268784948b8eb6777d99fbb558fa5a9d"
  },
  {
    "url": "category/Jenkins.html",
    "revision": "72030d527666eea0b12bfe33cfb620a4"
  },
  {
    "url": "category/JQuery.html",
    "revision": "612c6c7acdcb7e8e09cba3250a3c74c5"
  },
  {
    "url": "category/Leaflet.html",
    "revision": "d0165826fb866656f3a35eeee1d46320"
  },
  {
    "url": "category/MongonDB.html",
    "revision": "e1027b1c930ee966ebd2f53b9e96497c"
  },
  {
    "url": "category/MySql.html",
    "revision": "966b51093fdac604426e3bafc3a6c45a"
  },
  {
    "url": "category/Nginx.html",
    "revision": "8e5571037900106252b98f5ab8bd87fa"
  },
  {
    "url": "category/Node.js.html",
    "revision": "1149a4d4cd9e92c29fb2ce77c74aa587"
  },
  {
    "url": "category/Nuxt.html",
    "revision": "f6cc77ee44f078700375280cf75cdc29"
  },
  {
    "url": "category/React.html",
    "revision": "59ae37ffe9184144b58c93ea503e9fb1"
  },
  {
    "url": "category/Vue.html",
    "revision": "a8e9f04864ef19cabebdd2a9d5260ac5"
  },
  {
    "url": "category/Wechatapplet.html",
    "revision": "a6e9ae1424541997184247f2146dee68"
  },
  {
    "url": "category/win7.html",
    "revision": "adc2155a6678a8247591230c3533e72a"
  },
  {
    "url": "index.html",
    "revision": "ef904d7a6a45cb9bb272ba2451f2ed87"
  },
  {
    "url": "library/index.html",
    "revision": "7765c0b8f3b9db8b5ef8c92f277f8564"
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
    "revision": "2600574401d2ec923f8e42ec8ed15faa"
  },
  {
    "url": "tag/Docker.html",
    "revision": "eecf5745fe46c0f57b4fecff0f17b835"
  },
  {
    "url": "tag/Echarts.html",
    "revision": "6951f9bd440325a5a1dbe76abe61f8bc"
  },
  {
    "url": "tag/elasticsearch.html",
    "revision": "fc7923905a4b7c53a8b44d606d58f55f"
  },
  {
    "url": "tag/Html5.html",
    "revision": "b5d3461d99aa583259fe613558f59dce"
  },
  {
    "url": "tag/index.html",
    "revision": "2b2779f6a4830ab12f1c439e24850f4f"
  },
  {
    "url": "tag/JavaScript.html",
    "revision": "da10e9ce4ae8e563d53bfae93d2a4d9c"
  },
  {
    "url": "tag/Jenkins.html",
    "revision": "599d6fedaed1ef6f8499a752397622a5"
  },
  {
    "url": "tag/JQuery.html",
    "revision": "06b6593acff7e842df054e96530ceaeb"
  },
  {
    "url": "tag/Leaflet.html",
    "revision": "1296b1678278948c3884fdaf85b972c7"
  },
  {
    "url": "tag/MongonDB.html",
    "revision": "85460a65e26d5fae1396bf4257b79c43"
  },
  {
    "url": "tag/MySql.html",
    "revision": "183a2c5456908aefd154a71a13f04630"
  },
  {
    "url": "tag/Nginx.html",
    "revision": "e5575c23005a00112e3148735f000a3a"
  },
  {
    "url": "tag/Node.js.html",
    "revision": "5346261c5bc30e5d64b58c06936d2f17"
  },
  {
    "url": "tag/Nuxt.html",
    "revision": "b0661f6a122c116a8ddef8ecc462a583"
  },
  {
    "url": "tag/React.html",
    "revision": "d8325b5c5852ee44f162e103bb5ff063"
  },
  {
    "url": "tag/Vue.html",
    "revision": "a02013bff52a7675c9d9b4bdbe6ca172"
  },
  {
    "url": "tag/Wechatapplet.html",
    "revision": "ce53e63b0afe394bae61046608d1862e"
  },
  {
    "url": "tag/win7.html",
    "revision": "425b237cb6d4c7751309a66c8bb66bf6"
  },
  {
    "url": "timeLine/index.html",
    "revision": "f9913ea89d71db9befc07af2f9948d62"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "da475ce92d8e332f76cc5556388e9fd7"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "7e729c1b82ca5af23482287af45b05b0"
  },
  {
    "url": "views/Centos/3.html",
    "revision": "0c9145e2613e14cf77a7b6adf6dee6be"
  },
  {
    "url": "views/Docker/Docker使用过程中遇到的问题.html",
    "revision": "6b87d6e7fe1016eb70dcbbd9a241c3b7"
  },
  {
    "url": "views/Docker/Docker命令.html",
    "revision": "11021b3b1811d5ab48a05b3de8d89246"
  },
  {
    "url": "views/Docker/Docker容器挂载.html",
    "revision": "c6bcc8ee1c4d78f118ee8d35852d819f"
  },
  {
    "url": "views/Docker/Docker迁移与备份.html",
    "revision": "3bdb721a6c934f3877c80e24f8672cea"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "ff6d34136cb137019ec5090ddc2b478c"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "6afdb643e457d117f1eb9ea9feb66a96"
  },
  {
    "url": "views/elasticSearch/2.html",
    "revision": "7f10d3de8d478c4c471567c18cc7593c"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "749c0a85a071d632fafc135848164f8c"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "03a9ecd52b6d0abbcecddd7d429d5909"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "3bb23829982036e217e03f672ef9c560"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "739b3d382a44dce94a927843a5808682"
  },
  {
    "url": "views/JavaScript/3.html",
    "revision": "e010c709b5bca501d5e4c7892fb828bd"
  },
  {
    "url": "views/Jenkins/1.html",
    "revision": "c515e4391d53f45d094c96d2d0f89db5"
  },
  {
    "url": "views/Jenkins/2.html",
    "revision": "f13b3a81d2e6636095a650a0a278272f"
  },
  {
    "url": "views/Jenkins/3.html",
    "revision": "107a87a5bc1887b095f13b18f3f6b61a"
  },
  {
    "url": "views/Jenkins/4.html",
    "revision": "65d1f1525931858e24177a5fd204a189"
  },
  {
    "url": "views/Jenkins/5.html",
    "revision": "4e12399778322c12349b9538a459a512"
  },
  {
    "url": "views/Jenkins/jenkins+gitblit.html",
    "revision": "9dc3a04807ed93739285df226e1db7c5"
  },
  {
    "url": "views/JQuery/1.html",
    "revision": "b5b356e77e8a577d42574792a861c82c"
  },
  {
    "url": "views/Leaflet/1.html",
    "revision": "e654dd0fa78265374a79667f0b149444"
  },
  {
    "url": "views/mondonDB/1.html",
    "revision": "312615a79d173b7a7c2e27c9be463cc4"
  },
  {
    "url": "views/mondonDB/2.html",
    "revision": "e3ee7450bb3c1771ea9fb70b6c2e2272"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "658cab0bdac81e26c85f244a1555d319"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "6d4ca7750e023a1d2fc28404f0303e2e"
  },
  {
    "url": "views/nginx/2.html",
    "revision": "28e04fcc3cab0ac342f688a8ec8bb365"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "8b5a85b6953cd59122c8271560cdb58c"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "b2b59f3999d205b35c568612970991d7"
  },
  {
    "url": "views/nodejs/3.html",
    "revision": "469217e59d38a1e83eed80c9921db65f"
  },
  {
    "url": "views/nodejs/4.html",
    "revision": "33f9cd06aba699d0e1dc9e7e81702365"
  },
  {
    "url": "views/nodejs/express.html",
    "revision": "1825d7efa48df289f1e3d4104b6e950e"
  },
  {
    "url": "views/nuxt/lesson1.html",
    "revision": "c9e9fa5c531c1f9f685bc30ba29ba113"
  },
  {
    "url": "views/nuxt/lesson2.html",
    "revision": "2d7a127221b1c650f55c87081254c992"
  },
  {
    "url": "views/other/guide.html",
    "revision": "2b6bd09c85fc9f2771ad71c5d4c48952"
  },
  {
    "url": "views/react/1.html",
    "revision": "39e875417c5f28a42196e339f0a75af8"
  },
  {
    "url": "views/vue/1.html",
    "revision": "2bd16cc095a652f3f375fad383da6e76"
  },
  {
    "url": "views/vue/2.html",
    "revision": "0d936e4ed52fe238061f70851bfb4583"
  },
  {
    "url": "views/vue/3.html",
    "revision": "d4cbc88d32f929e2d315dfd4f4d0187c"
  },
  {
    "url": "views/vue/4.html",
    "revision": "8bb55681a1efceb2f7f774f2aedb56b1"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "5f6d18313ba047f45b71a3ef9f5b4f17"
  },
  {
    "url": "views/win7/1.html",
    "revision": "ec2bf868cc07324eabc0a50b2ffbce40"
  },
  {
    "url": "views/win7/2.html",
    "revision": "27d1466b59a990c616d56fe4b8cdd40b"
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
