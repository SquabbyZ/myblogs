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
    "revision": "95fe0c1d9d10e5c01eae138c84c13a63"
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
    "url": "assets/js/1.a604803d.js",
    "revision": "7bdfc96a27859f8c75cf07e7315d774a"
  },
  {
    "url": "assets/js/10.327bf74d.js",
    "revision": "ca8643d9fcb9f6185054eb4b65458cf5"
  },
  {
    "url": "assets/js/11.100b7216.js",
    "revision": "c2c78b46ccdde84393d53c5e2874657d"
  },
  {
    "url": "assets/js/12.61edc885.js",
    "revision": "fcf31d9c312e9fe060a422830d43b2a4"
  },
  {
    "url": "assets/js/13.6f3e23f7.js",
    "revision": "6112504f18631de878bd5e57ec6642fd"
  },
  {
    "url": "assets/js/14.e80edc9e.js",
    "revision": "d32677ecea5316d1f9565cb3aa32f321"
  },
  {
    "url": "assets/js/15.b5cf31a3.js",
    "revision": "9c88283f6307496830ab6f5af8211c3d"
  },
  {
    "url": "assets/js/16.be73acc5.js",
    "revision": "975c00f3a831a2b5371edde70169e62c"
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
    "url": "assets/js/19.0de4f313.js",
    "revision": "0a3cc1e55bdc8103fdc8b108dd0d059d"
  },
  {
    "url": "assets/js/20.5332a17d.js",
    "revision": "80d1afd3a0e58f17d1bf456057c41a72"
  },
  {
    "url": "assets/js/21.021c5d4a.js",
    "revision": "62506ebc3ab562ba985b02fe97d34339"
  },
  {
    "url": "assets/js/22.0159c609.js",
    "revision": "9cbc398bc9fd39bbc7fed19d54d568f6"
  },
  {
    "url": "assets/js/23.903f475b.js",
    "revision": "8f3405d1f5290792ffda4edf50cfc011"
  },
  {
    "url": "assets/js/24.32f4fd64.js",
    "revision": "031e100626279fb0be0c0e539ec286e1"
  },
  {
    "url": "assets/js/25.ffdfa5e8.js",
    "revision": "6dbd3266d6984684a142012696214557"
  },
  {
    "url": "assets/js/26.aad5ebb8.js",
    "revision": "093d3a77eda94eb51e82f7997452438f"
  },
  {
    "url": "assets/js/27.064c74c0.js",
    "revision": "759d4d0e665c8e58f8f476246b9a71e7"
  },
  {
    "url": "assets/js/28.4ce9e9b0.js",
    "revision": "47e2d6e6fc042ed9f24bfc3918904676"
  },
  {
    "url": "assets/js/29.851e52c3.js",
    "revision": "8d1573232d8c10779b0a5208c5f067d0"
  },
  {
    "url": "assets/js/30.6d6e664a.js",
    "revision": "496e3b75cbf75e5b14d0b5cc01e76f01"
  },
  {
    "url": "assets/js/31.2d1c86c7.js",
    "revision": "009c92ec216ba2b668279771cfa9f030"
  },
  {
    "url": "assets/js/32.8da034a0.js",
    "revision": "b16496fdc0bed0f8406859ef1f233f18"
  },
  {
    "url": "assets/js/33.1dfb7eb1.js",
    "revision": "f72ca061bf0af492df8a12a457d9c945"
  },
  {
    "url": "assets/js/34.b01609a6.js",
    "revision": "ddb2e4cff57020808b026fd4712c387a"
  },
  {
    "url": "assets/js/35.8bd7c113.js",
    "revision": "cbb284c2dec4109bd646fa25be2afd9c"
  },
  {
    "url": "assets/js/36.6adc3f92.js",
    "revision": "69fe8ce510ceacbf5e787af6e9528fac"
  },
  {
    "url": "assets/js/37.1e5199a9.js",
    "revision": "b29b94f49e08123b749e91648af2453e"
  },
  {
    "url": "assets/js/38.001f5c4b.js",
    "revision": "f85e724136b11871000f299f5dd425a1"
  },
  {
    "url": "assets/js/39.3c62b230.js",
    "revision": "17672757c14ff5ddb821a57a583d5687"
  },
  {
    "url": "assets/js/4.a70fb2d7.js",
    "revision": "8597f6b5a18ddf05e9aa868b723c4156"
  },
  {
    "url": "assets/js/40.a8d56bbf.js",
    "revision": "0c5af5f9140add1ab7fbb8d988782a40"
  },
  {
    "url": "assets/js/41.cf73b8d9.js",
    "revision": "4f9f80203ad88d15cf5a787f55b82496"
  },
  {
    "url": "assets/js/42.1dda1de7.js",
    "revision": "ad7e2ff855dc05b1ee4e6bc0f1616ec0"
  },
  {
    "url": "assets/js/43.c6b39bc0.js",
    "revision": "5034aee961426796ac54f7632186e6b8"
  },
  {
    "url": "assets/js/44.389c133b.js",
    "revision": "ff9773c53b26c7934a7a4b47c84a8b4f"
  },
  {
    "url": "assets/js/45.6e852fc7.js",
    "revision": "18f2c71f15a7128442ca23507a495d1a"
  },
  {
    "url": "assets/js/46.ebf3bd7e.js",
    "revision": "eb3823c2c302f0792e33d9a8001652a0"
  },
  {
    "url": "assets/js/47.d0c1cd90.js",
    "revision": "34011068cfceccbcc727d418b75776ba"
  },
  {
    "url": "assets/js/48.e5132d7d.js",
    "revision": "5b20fec8e69fb3c57915a72c556a8d1b"
  },
  {
    "url": "assets/js/49.6e4d189e.js",
    "revision": "7bf8bcf49d2fa49c0853e106fca43dcc"
  },
  {
    "url": "assets/js/5.f55c285b.js",
    "revision": "67ffe8b132170c78d34435bf1fab2a1a"
  },
  {
    "url": "assets/js/50.510a0a46.js",
    "revision": "f5fe1b669f551b0354b10db66a575d8d"
  },
  {
    "url": "assets/js/51.b2f44ab5.js",
    "revision": "c0bddcbeadf34c83856cf4c3515e5223"
  },
  {
    "url": "assets/js/52.147e6d22.js",
    "revision": "a9bd61f0c352198731b9eaf548cadcb5"
  },
  {
    "url": "assets/js/53.f2034905.js",
    "revision": "40bbea6ffc79b5a75094fa98f793e9e1"
  },
  {
    "url": "assets/js/54.594a264c.js",
    "revision": "10e7efe728c5c58b8507e9ef03755086"
  },
  {
    "url": "assets/js/55.5adae858.js",
    "revision": "7ff76c7e839b8eb1785c6d69938e2016"
  },
  {
    "url": "assets/js/56.30d20085.js",
    "revision": "48f6dff5db7e2486e7360abaddab6ed1"
  },
  {
    "url": "assets/js/57.875910cc.js",
    "revision": "05db2ba2655e3a92258de91cff9d6fb6"
  },
  {
    "url": "assets/js/6.c07e20e0.js",
    "revision": "af0127bbaa9f13baf9838022df22c8f4"
  },
  {
    "url": "assets/js/7.b91b821e.js",
    "revision": "9db3930e63741ed899e8855a283ba30e"
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
    "url": "assets/js/app.5f8353c1.js",
    "revision": "177ab925642b238a6ec62f6c4a70aa79"
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
    "revision": "e7435ef2e31299ba6071e6afc1ed03a0"
  },
  {
    "url": "category/Docker.html",
    "revision": "d4a6e37673f8822f1793ed8d0ad84d6c"
  },
  {
    "url": "category/Echarts.html",
    "revision": "45fdd1ccde6c15bdbba8ca80ed997f85"
  },
  {
    "url": "category/Html5.html",
    "revision": "095f03c28d8076bb6b548db59af3da6c"
  },
  {
    "url": "category/index.html",
    "revision": "940c432c7a7e3ec073cc93a044f1985e"
  },
  {
    "url": "category/JavaScript.html",
    "revision": "9dfacf32144eea1cd28cbb61a5b0868e"
  },
  {
    "url": "category/Jenkins.html",
    "revision": "9024d21c25b951f39af54585799f30ff"
  },
  {
    "url": "category/JQuery.html",
    "revision": "0b91b1e889aace33e61b4ef13ae0ec8a"
  },
  {
    "url": "category/Leaflet.html",
    "revision": "4e38eb1e82c6df16c04ebcccb1782a1a"
  },
  {
    "url": "category/MongonDB.html",
    "revision": "de493fc652cfd12e4fc4585f95c3fb2e"
  },
  {
    "url": "category/MySql.html",
    "revision": "474c960fe3b8a9bbf47346a9bd6ae526"
  },
  {
    "url": "category/Nginx.html",
    "revision": "1ceb7a17419b244cfdba327d4652589a"
  },
  {
    "url": "category/Node.js.html",
    "revision": "a219678c02c0dc6cf01b497dfac673a6"
  },
  {
    "url": "category/Nuxt.html",
    "revision": "fa89c5f7725477337eb7285be0a16721"
  },
  {
    "url": "category/React.html",
    "revision": "15eb0d4fa7a06c36e1de11fd66e77956"
  },
  {
    "url": "category/Vue.html",
    "revision": "329d7837f0bec72b8b2f396881297d97"
  },
  {
    "url": "category/Wechatapplet.html",
    "revision": "62b131c1313e0e5ad169221d85309dc1"
  },
  {
    "url": "category/win7.html",
    "revision": "df5e1c452acd0fc35d3a3f03dcd11a2f"
  },
  {
    "url": "index.html",
    "revision": "9a0e97853cd4382c952af8eba5d2f5b4"
  },
  {
    "url": "library/index.html",
    "revision": "47697c04fc31cbe6bb682c0ba9f04f9d"
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
    "revision": "f8058df97211c0366c6f637650d4380b"
  },
  {
    "url": "tag/Docker.html",
    "revision": "590cbd01a050a671f83e7bd02b420ab2"
  },
  {
    "url": "tag/Echarts.html",
    "revision": "1c52c8f71ec100b302f4365bc399f0db"
  },
  {
    "url": "tag/Html5.html",
    "revision": "fe97f273dd64f1ff80586a738260cd7c"
  },
  {
    "url": "tag/index.html",
    "revision": "695201d154527e77c6e682eaf4facc48"
  },
  {
    "url": "tag/JavaScript.html",
    "revision": "3dd5cf67323c2f5fedf27428e4a5a401"
  },
  {
    "url": "tag/Jenkins.html",
    "revision": "81595d75e0e3b33eb9bb3fe61e3eb5ba"
  },
  {
    "url": "tag/JQuery.html",
    "revision": "6df50154b9688dc6d1cb41bfaa0f2782"
  },
  {
    "url": "tag/Leaflet.html",
    "revision": "5a8a573ddf9642c95d2ab7d6d3462799"
  },
  {
    "url": "tag/MongonDB.html",
    "revision": "0d83faf3d3996ef2080e7c1f68e6eac1"
  },
  {
    "url": "tag/MySql.html",
    "revision": "36b67248b08e88dd92ccb374067ddcc0"
  },
  {
    "url": "tag/Nginx.html",
    "revision": "dc9ee4cf62d7353ac9fe3be4d38a5b5c"
  },
  {
    "url": "tag/Node.js.html",
    "revision": "04bd69a3530d93fed00afeab7ab68fbb"
  },
  {
    "url": "tag/Nuxt.html",
    "revision": "8a56f5c466c605648176ad9c4145cf13"
  },
  {
    "url": "tag/React.html",
    "revision": "75a57bb2552ba497ebc00e6d745f26a2"
  },
  {
    "url": "tag/Vue.html",
    "revision": "d2be729c22395345e506593b8e6eb854"
  },
  {
    "url": "tag/Wechatapplet.html",
    "revision": "c96f975a7263d0c1b7273b447bb23a5a"
  },
  {
    "url": "tag/win7.html",
    "revision": "4a5911149ddcfaf3f59cacdc23d8a9c8"
  },
  {
    "url": "timeLine/index.html",
    "revision": "f5a4b4e7843e06200304e771fa45e7bc"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "e91e4015d05fb700162fb25c38fa0075"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "069ca5f8fb052efd7b7eab7bf037717c"
  },
  {
    "url": "views/Centos/3.html",
    "revision": "61c26d22b4c8721ada2046efdd63e32d"
  },
  {
    "url": "views/Docker/Docker使用过程中遇到的问题.html",
    "revision": "8c75b0e78b2415ee623c6c43d36c3041"
  },
  {
    "url": "views/Docker/Docker命令.html",
    "revision": "9458e264331768b3892cd9576269f31e"
  },
  {
    "url": "views/Docker/Docker容器挂载.html",
    "revision": "9dd3abea973d094441abb224e49101a7"
  },
  {
    "url": "views/Docker/Docker迁移与备份.html",
    "revision": "b3124e23fb8d0ed9083ccbb8745864a4"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "7e1306ef9bb646cb9949a8f895c7face"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "15b437364229ad23fbcb9f5c0d8942e0"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "38c0219c8da24a0efae33c6b76168159"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "8e77ab2ec7f72adc68b9fce79e3ec23b"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "784528dc76cd2f287749973f1212128a"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "f7ca58b7beaa42e7eed468ffb13e7d23"
  },
  {
    "url": "views/JavaScript/3.html",
    "revision": "2f4d3e9a3f25991862a9db333c869ee9"
  },
  {
    "url": "views/Jenkins/1.html",
    "revision": "7fd8f3917897747623b0a0e9ce4de6ea"
  },
  {
    "url": "views/Jenkins/2.html",
    "revision": "702c5ecf6f89010bfc0e04ee49cab399"
  },
  {
    "url": "views/Jenkins/3.html",
    "revision": "9a8c5ed9b5beb2ca2c35fe027ad358b0"
  },
  {
    "url": "views/Jenkins/4.html",
    "revision": "011f4ae9fff765d120b3386b83b17b9b"
  },
  {
    "url": "views/Jenkins/5.html",
    "revision": "f094a525e8e9a55c263bef5906747bde"
  },
  {
    "url": "views/Jenkins/jenkins+gitblit.html",
    "revision": "e0e0115e3b4ed5a2c15ec6b9d140b0eb"
  },
  {
    "url": "views/JQuery/1.html",
    "revision": "29281924ac702482558a92fbd17c09c1"
  },
  {
    "url": "views/Leaflet/1.html",
    "revision": "b4d7ffaa9fec4b73b65d176fbe52ed7e"
  },
  {
    "url": "views/mondonDB/1.html",
    "revision": "748eed337444e0d71330bd034fa1f1c6"
  },
  {
    "url": "views/mondonDB/2.html",
    "revision": "66e9abe9ea1f0c04cfa2b4c2b99d0ac8"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "5a1453d75a4df7a4f0b0e3e98090d659"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "c9fa75cc68d4f36031c20ec06399b934"
  },
  {
    "url": "views/nginx/2.html",
    "revision": "52238d3ea632945c27713a496e5adc02"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "92fcd0d56c0da9f1d3d75d94c30ac6f7"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "9fbd9adbebe3fdf27646e8ced0dd6c32"
  },
  {
    "url": "views/nodejs/3.html",
    "revision": "8bbb40c1caf39349b2ff4a5e60d75a79"
  },
  {
    "url": "views/nodejs/4.html",
    "revision": "18f76400c4533728e2b613b22d9f1c1d"
  },
  {
    "url": "views/nodejs/express.html",
    "revision": "674b0885884904c4b28394aa048a04ab"
  },
  {
    "url": "views/nuxt/lesson1.html",
    "revision": "10dee13d6fc83f6c0e766d3a574453fb"
  },
  {
    "url": "views/nuxt/lesson2.html",
    "revision": "ae17cae22877a933a353e5b887fd85da"
  },
  {
    "url": "views/other/guide.html",
    "revision": "5e0046be5ed2249924966234d46dcf5b"
  },
  {
    "url": "views/react/1.html",
    "revision": "0acf4bbd0c354446b6dd797049fa1d60"
  },
  {
    "url": "views/vue/1.html",
    "revision": "f8da65d59ec876b888a84a0317ecd5fa"
  },
  {
    "url": "views/vue/2.html",
    "revision": "69c75a837025492725a09d8ced9ff64b"
  },
  {
    "url": "views/vue/3.html",
    "revision": "81c1bfa43c620eeab85b7a45385dbc2d"
  },
  {
    "url": "views/vue/4.html",
    "revision": "b4c7dc1e9652a19742a841b50a22d64d"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "576e0e2c74d70bc186accd892965ba6e"
  },
  {
    "url": "views/win7/1.html",
    "revision": "08ab914aa6d8ce0270ea826604cb6ac3"
  },
  {
    "url": "views/win7/2.html",
    "revision": "40e0573108670426037cf72ff3abd918"
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
