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
    "revision": "3b057cf70f34682c4926b37d57b846ee"
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
    "url": "assets/js/1.a604803d.js",
    "revision": "7bdfc96a27859f8c75cf07e7315d774a"
  },
  {
    "url": "assets/js/10.7e5c0c1d.js",
    "revision": "c12ff31c94bddf201873c0f12206b31e"
  },
  {
    "url": "assets/js/11.23f1da3a.js",
    "revision": "6f42b86534c46192ae753fa5326be441"
  },
  {
    "url": "assets/js/12.30efa764.js",
    "revision": "e146dcc81b8581f44dc12f5c3d4b53c4"
  },
  {
    "url": "assets/js/13.96583ee3.js",
    "revision": "8a29dc51485ed50626eb16fa9d0d2de7"
  },
  {
    "url": "assets/js/14.a7137e4f.js",
    "revision": "38de08cfb0e5262b71094d785178ee58"
  },
  {
    "url": "assets/js/15.5793867f.js",
    "revision": "249153bd99c269ce67f10155a2d7bf87"
  },
  {
    "url": "assets/js/16.df420a1f.js",
    "revision": "ab3f7c7171152b748367608684da8ab7"
  },
  {
    "url": "assets/js/17.34e50c9d.js",
    "revision": "628d18988711efc4640a88ea6fec3088"
  },
  {
    "url": "assets/js/18.8868d3b5.js",
    "revision": "6c669877d81feea8efdd5428c9ce8670"
  },
  {
    "url": "assets/js/19.a8857d21.js",
    "revision": "51cc60985ee41b4c9924f8fc27a0ee59"
  },
  {
    "url": "assets/js/20.732a8ea9.js",
    "revision": "0322717b37e16a4b91221151e961a5aa"
  },
  {
    "url": "assets/js/21.53a0eb2d.js",
    "revision": "975a484a3b68ddf5efbfa3cbdbcf2a72"
  },
  {
    "url": "assets/js/22.93b9befc.js",
    "revision": "0ef839fde7268cf54e5928246f664c98"
  },
  {
    "url": "assets/js/23.1e2ee631.js",
    "revision": "48e21abf9d8484f87e553776ef937593"
  },
  {
    "url": "assets/js/24.a593e533.js",
    "revision": "cf7897032df55dfd53477ca3397b0b51"
  },
  {
    "url": "assets/js/25.aebd89c9.js",
    "revision": "6adcc1cd9ea8cf1f9bb085a4fd16f1d8"
  },
  {
    "url": "assets/js/26.9af5b071.js",
    "revision": "7e71af10afdc5db421341a9882c4d5f7"
  },
  {
    "url": "assets/js/27.13e2383f.js",
    "revision": "e720444862100279045913ae92b67b7b"
  },
  {
    "url": "assets/js/28.8d60db6d.js",
    "revision": "d198cbb8898f21f8b2ad4e3425fc97f3"
  },
  {
    "url": "assets/js/29.9641b985.js",
    "revision": "81d229297c85b8a637a329f2f8b1773e"
  },
  {
    "url": "assets/js/30.9a3e2e56.js",
    "revision": "75ab666d145915e4aec900967a922f82"
  },
  {
    "url": "assets/js/31.795ff504.js",
    "revision": "c7f978cd4615d7ad268c96dac82cca89"
  },
  {
    "url": "assets/js/32.dff622b5.js",
    "revision": "0223e140c587bc366da82173a205f4d4"
  },
  {
    "url": "assets/js/33.73505831.js",
    "revision": "f1fecf652775f00356f2715bf5bdfd8a"
  },
  {
    "url": "assets/js/34.e15f13db.js",
    "revision": "295b52cf55ff6fa54a35f4605f1ec2a6"
  },
  {
    "url": "assets/js/35.a6dc679e.js",
    "revision": "4625bd531f3489f0f91a6e0a1e6871bc"
  },
  {
    "url": "assets/js/36.6a189b77.js",
    "revision": "b10ba92b2b5fd036a385bca71b3f898a"
  },
  {
    "url": "assets/js/4.7929d29c.js",
    "revision": "deeeb56772c3c37b3bc910a4dd7329e9"
  },
  {
    "url": "assets/js/5.f55c285b.js",
    "revision": "67ffe8b132170c78d34435bf1fab2a1a"
  },
  {
    "url": "assets/js/6.c07e20e0.js",
    "revision": "af0127bbaa9f13baf9838022df22c8f4"
  },
  {
    "url": "assets/js/7.4ec80e09.js",
    "revision": "72e52bb813334a65cfaa64f60ae4e86f"
  },
  {
    "url": "assets/js/8.57f6507f.js",
    "revision": "e84fb7e198a05f1006e4aa4487111a11"
  },
  {
    "url": "assets/js/9.d44100f6.js",
    "revision": "9b8a37744058e7b0a5d4b5d2e493f044"
  },
  {
    "url": "assets/js/app.01b64065.js",
    "revision": "be7a8329ae804493ea192b20681b5708"
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
    "revision": "6735ed6fbe2b7d2c5bb2c3052bdaf61e"
  },
  {
    "url": "category/Echarts.html",
    "revision": "618d4b993135a1e5c62bb0101ea97fb5"
  },
  {
    "url": "category/Html5.html",
    "revision": "07391d63c44ce0648c5419e21591d933"
  },
  {
    "url": "category/index.html",
    "revision": "8aa4ef6b52e4067157b79b15dc7ed811"
  },
  {
    "url": "category/JavaScript.html",
    "revision": "c9bb14568d0a7ce40d6cd555a45ca55b"
  },
  {
    "url": "category/MongonDB.html",
    "revision": "cc0d426013cf83f5e0005d3e99da301d"
  },
  {
    "url": "category/MySql.html",
    "revision": "5e691ece77b398f6ad6eca4b3afb8852"
  },
  {
    "url": "category/Nginx.html",
    "revision": "d8f48935e0c85b263f7f4b3b9d6af0b7"
  },
  {
    "url": "category/Node.js.html",
    "revision": "26f254fd7cb2133db0664485c6eaa227"
  },
  {
    "url": "category/React.html",
    "revision": "c469e46b11aa140df2d85bb9ec3da099"
  },
  {
    "url": "category/Vue.html",
    "revision": "1072c6b12ca177b9bd6985fda1287e7d"
  },
  {
    "url": "category/Wechatapplet.html",
    "revision": "b942244acfe5275dfba1b9a42b199a5e"
  },
  {
    "url": "category/win7.html",
    "revision": "5d939220dad9738713f2e2b2e7d2eb55"
  },
  {
    "url": "index.html",
    "revision": "5926b39ec55bb6f98b2f25a68fd04df8"
  },
  {
    "url": "library/index.html",
    "revision": "7f0e061ace812e06ddc315b2b85b62a1"
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
    "revision": "3ae638adef9dee96840358d4d142d967"
  },
  {
    "url": "tag/Echarts.html",
    "revision": "a26ff36f5099da6f60583a46116e53a8"
  },
  {
    "url": "tag/Html5.html",
    "revision": "20a569ede1024008e9bdaa54db870246"
  },
  {
    "url": "tag/index.html",
    "revision": "d3a871e43239e7e5e7e4a07cbaa38019"
  },
  {
    "url": "tag/JavaScript.html",
    "revision": "bda7b1bd69f96107a6f71273c9906ec4"
  },
  {
    "url": "tag/MongonDB.html",
    "revision": "76c5775b672516558ab3d0d295d7fea0"
  },
  {
    "url": "tag/MySql.html",
    "revision": "6bd51a562a4ad476b94d13d9f9834614"
  },
  {
    "url": "tag/Nginx.html",
    "revision": "d55e48e75ac254bdf035a20b129c3b9d"
  },
  {
    "url": "tag/Node.js.html",
    "revision": "2c566694a982e77945972c737365c346"
  },
  {
    "url": "tag/React.html",
    "revision": "995aa87ce486b1a4834e4977d3644dba"
  },
  {
    "url": "tag/Vue.html",
    "revision": "d65abc30aed92e270a566871a1b4dbe7"
  },
  {
    "url": "tag/Wechatapplet.html",
    "revision": "2aaf42972c826faab693753cc2bb8078"
  },
  {
    "url": "tag/win7.html",
    "revision": "377765d14894d3b3688f9c3bc775ee9e"
  },
  {
    "url": "timeLine/index.html",
    "revision": "7edb736329b03f6937f7f566a72f313d"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "5751ee7ea02de342adb3334b76da4535"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "ff9c9c9621132e189c28bb68822b7d93"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "29f78b43bb452eee1fcaf7f9591f042a"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "1a9b8e147f184ec2572d2cb9a516135a"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "1cce79b6cfdaa169a00a67f0e9b92a19"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "a07a8102f0a22c069b715c78d3420beb"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "25fc148092597eace9812eda840ca5cb"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "4ee436309f400fe14724bd4d58095385"
  },
  {
    "url": "views/JavaScript/3.html",
    "revision": "c294dce48e6bb6f3a6b227464ff6e702"
  },
  {
    "url": "views/mondonDB/1.html",
    "revision": "6ca6b5ddab041b6ebaa162abf0cf81b7"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "57ef0bca18ee244e4a6cc8e33460f02a"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "5960b5f015d82cbb288eb4078a97d9e3"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "1a5a0776e318cf9b33eb180afb4d3dac"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "c1bb4d597267bb9556beb9afbb95f7aa"
  },
  {
    "url": "views/other/guide.html",
    "revision": "a7fe6e02ce239ec29d1e33e963c40970"
  },
  {
    "url": "views/react/1.html",
    "revision": "4ed4e5675fe95c8677e1426333bfb5d4"
  },
  {
    "url": "views/vue/1.html",
    "revision": "184443411a213f7fd461b934fd5714f0"
  },
  {
    "url": "views/vue/2.html",
    "revision": "35bad0ef53f91a0b88f4b8cf01c1a7cf"
  },
  {
    "url": "views/vue/3.html",
    "revision": "7cf336dd2e2313e3f5019d9c7d8b9cb7"
  },
  {
    "url": "views/vue/4.html",
    "revision": "8820b9c6d502a2b3bf329bb364fdfb31"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "504d963f7ffc90261314a5377d237715"
  },
  {
    "url": "views/win7/1.html",
    "revision": "7080053d92fce0c3c177c8dd704da638"
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
