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
    "revision": "5ba07ee4b99caf20eac088dfe3f6304c"
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
    "url": "assets/js/11.842b0e15.js",
    "revision": "76193880440c0f3618047624d6af2898"
  },
  {
    "url": "assets/js/12.2ec4e6d5.js",
    "revision": "fe8c7e98366dc14ac60824609b5b4a35"
  },
  {
    "url": "assets/js/13.6732404c.js",
    "revision": "7619becc69acbbc96cec22946cb5e269"
  },
  {
    "url": "assets/js/14.e7b977a6.js",
    "revision": "78023e49edc447bfb04b56ba94b5b11c"
  },
  {
    "url": "assets/js/15.92034207.js",
    "revision": "85949ea6859f8b9c7bac88f76c8914cc"
  },
  {
    "url": "assets/js/16.928038b2.js",
    "revision": "00122cde580652a256b45a8ee233f5ff"
  },
  {
    "url": "assets/js/17.268d4498.js",
    "revision": "a7659cde8684196cc8fbcfebdaf710bf"
  },
  {
    "url": "assets/js/18.08fd441e.js",
    "revision": "0d042d43938ae3d60ae1302c513f2fb1"
  },
  {
    "url": "assets/js/19.b6ca52b9.js",
    "revision": "1b18ca5bbb6ac96455c4788cc575cacd"
  },
  {
    "url": "assets/js/20.75fdf80f.js",
    "revision": "4e79b6ba7800fd6c4d98f37f8d4255a0"
  },
  {
    "url": "assets/js/21.17931ac6.js",
    "revision": "6711dcf65ce37410fbadad8a893d6267"
  },
  {
    "url": "assets/js/22.648a99ad.js",
    "revision": "650026547b8a6277081bb7d4abc6a1e0"
  },
  {
    "url": "assets/js/23.85918870.js",
    "revision": "1cd253f61f86ee955b1bbc53dfdd6915"
  },
  {
    "url": "assets/js/24.546b0b0b.js",
    "revision": "c3ce5aa730296bc4e49461eb1d06b970"
  },
  {
    "url": "assets/js/25.9b774521.js",
    "revision": "7bc03b7b6eed934363ba46911b20c293"
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
    "url": "assets/js/28.4ce9e9b0.js",
    "revision": "47e2d6e6fc042ed9f24bfc3918904676"
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
    "url": "assets/js/33.0df9aa04.js",
    "revision": "398e3fd835d53c3585a920d48b461ee4"
  },
  {
    "url": "assets/js/34.fd90a1f3.js",
    "revision": "985ba4ca90dbcd64b8c9ddb2247b96a1"
  },
  {
    "url": "assets/js/35.b5d908aa.js",
    "revision": "ad126319ee80a3875bb0202144ccb141"
  },
  {
    "url": "assets/js/36.af86e735.js",
    "revision": "a11a9667edb0a270f0f38a6c9b6000be"
  },
  {
    "url": "assets/js/37.8a325085.js",
    "revision": "1b52ec02911dba8ce4ca10328604f6b6"
  },
  {
    "url": "assets/js/38.0cb82589.js",
    "revision": "dd043bbd077b29535994fc07cf260c06"
  },
  {
    "url": "assets/js/39.d960c1b1.js",
    "revision": "837739417aeda31bb487b59d2ebc9baa"
  },
  {
    "url": "assets/js/4.41bed2ca.js",
    "revision": "e1af1547f251f4f344f1bfd9814c3cc0"
  },
  {
    "url": "assets/js/40.0a37b058.js",
    "revision": "808d60f0ab2ea6d2d3b0eab4086a313b"
  },
  {
    "url": "assets/js/41.ebe0d6c6.js",
    "revision": "e2599a43cdb4945bcdb099e18daa6f4a"
  },
  {
    "url": "assets/js/42.e4318d48.js",
    "revision": "4a6b774b5ceb7329c8895733c858d835"
  },
  {
    "url": "assets/js/43.32ad6138.js",
    "revision": "d7220de60829ab518ff2f94a3fe18f66"
  },
  {
    "url": "assets/js/44.d346d6cf.js",
    "revision": "49b0a7a87f9aa5e36f232a5844c34030"
  },
  {
    "url": "assets/js/45.da324d2c.js",
    "revision": "3db902e32ce0d9d5feee3f6a0e97ac4b"
  },
  {
    "url": "assets/js/46.4d4f847f.js",
    "revision": "4a83444905e0109505feebbbe92d52a2"
  },
  {
    "url": "assets/js/47.1c1eef7a.js",
    "revision": "efce3cd7db7f62aaecfc52b02dd24f53"
  },
  {
    "url": "assets/js/48.22a51162.js",
    "revision": "e0a1db5062892c41b5245b1461026b18"
  },
  {
    "url": "assets/js/49.d686876a.js",
    "revision": "9a88f2ebd4d6c464ef718bc5e59f0c14"
  },
  {
    "url": "assets/js/5.95ddbaf6.js",
    "revision": "253de68d061f0e8303d7040284b2ddb5"
  },
  {
    "url": "assets/js/50.f3a302ab.js",
    "revision": "f2a0572e5f054f1cff950640a3b2e25c"
  },
  {
    "url": "assets/js/51.a07b34c8.js",
    "revision": "073e173b730364361b5f5181812652cd"
  },
  {
    "url": "assets/js/52.9c804202.js",
    "revision": "e5484b93e2befddac57c1676ee0f3f7d"
  },
  {
    "url": "assets/js/53.96b2bd36.js",
    "revision": "0e135254ccfe98226c2416a7ee107019"
  },
  {
    "url": "assets/js/54.047b455b.js",
    "revision": "b774a6c474e317cfd15afaa91a2d847f"
  },
  {
    "url": "assets/js/55.86275bfa.js",
    "revision": "1ee49b484a7aaf69d0a806ff6bb413f6"
  },
  {
    "url": "assets/js/56.a1059c69.js",
    "revision": "fcbda45fec96d7314846f164780b44dd"
  },
  {
    "url": "assets/js/57.2f07de8c.js",
    "revision": "3b47c9fd58f868941ca91407e6befea3"
  },
  {
    "url": "assets/js/58.777183db.js",
    "revision": "f907ac60039bfb5b0667a1f7e66c2775"
  },
  {
    "url": "assets/js/59.c6e533dd.js",
    "revision": "b48ecafee5767960b68fff7d653931ab"
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
    "url": "assets/js/app.d41f998f.js",
    "revision": "61939c4c2e1b41fd9d9c066bc8dcf335"
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
    "revision": "51b44ad4a7381c038b736273a1ee1512"
  },
  {
    "url": "category/Docker.html",
    "revision": "cfd708f335e237f9180146e2dd342d9a"
  },
  {
    "url": "category/Echarts.html",
    "revision": "fb56201e95b3bd17093dbe33b96e8c8b"
  },
  {
    "url": "category/elasticsearch.html",
    "revision": "262539aa6372deaf1aaabfd1e2a72448"
  },
  {
    "url": "category/Html5.html",
    "revision": "f962371cf1341ce14caf84f47de03ca8"
  },
  {
    "url": "category/index.html",
    "revision": "051491a5c6f63c98801c1e2184a35bda"
  },
  {
    "url": "category/JavaScript.html",
    "revision": "d1f40224b6875119444ae3753463277b"
  },
  {
    "url": "category/Jenkins.html",
    "revision": "f3e169ff67db2f04b47ea88366cf99fc"
  },
  {
    "url": "category/JQuery.html",
    "revision": "7228fc707215c3f8eaff11812b4157da"
  },
  {
    "url": "category/Kylin.html",
    "revision": "495c0afbc5f0eb576a23a734b926f64b"
  },
  {
    "url": "category/Leaflet.html",
    "revision": "faa784a9e525cf7570b0cabbe9b225e8"
  },
  {
    "url": "category/MongonDB.html",
    "revision": "8034915d345b399a5b18ead41bcf66a0"
  },
  {
    "url": "category/MySql.html",
    "revision": "222fc21cb1fa5033e669159b4c045db5"
  },
  {
    "url": "category/Nginx.html",
    "revision": "bd17624748c18cf831bb01e19d10b9f4"
  },
  {
    "url": "category/Node.js.html",
    "revision": "ea628fe7749d06cb18097e0c8ed37e1f"
  },
  {
    "url": "category/Nuxt.html",
    "revision": "25054970b2e693d280b8af2437ee3c0d"
  },
  {
    "url": "category/React.html",
    "revision": "0fddae8015349552b44cdbbd5363c341"
  },
  {
    "url": "category/Vue.html",
    "revision": "9c7de82b1bff4ca43effdc8879485ace"
  },
  {
    "url": "category/Wechatapplet.html",
    "revision": "848b6074671e6237e7bc1cd9e7c5ddc4"
  },
  {
    "url": "category/win7.html",
    "revision": "51a8c4b68db75c653b41cc3d4074e284"
  },
  {
    "url": "index.html",
    "revision": "984d6e57c9a4e30b70174f687b25de5b"
  },
  {
    "url": "library/index.html",
    "revision": "b622480d5eb14756e90b22d385baeba6"
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
    "revision": "7121eb377c5fbebad20ad5cbdb0398f7"
  },
  {
    "url": "tag/Docker.html",
    "revision": "1425aac9786554fa76b85d7eec8ce209"
  },
  {
    "url": "tag/Echarts.html",
    "revision": "42046d2a34eaae4e7aabd3104e14a223"
  },
  {
    "url": "tag/elasticsearch.html",
    "revision": "32907c380906eb5f46e11b1eddc24227"
  },
  {
    "url": "tag/Html5.html",
    "revision": "9c0dc1997ee0fee2d3d567b44d30ef62"
  },
  {
    "url": "tag/index.html",
    "revision": "b74e2e0786c28fb68e254243937a816d"
  },
  {
    "url": "tag/JavaScript.html",
    "revision": "138e9acec435205c9e87ae97fe25ac52"
  },
  {
    "url": "tag/Jenkins.html",
    "revision": "e754e554abf3b5bafab641fae8704de5"
  },
  {
    "url": "tag/JQuery.html",
    "revision": "28becbe432303d1e5a48634571f27de8"
  },
  {
    "url": "tag/Kylin.html",
    "revision": "e81970d8f2a23aa41569cdf63d981a26"
  },
  {
    "url": "tag/Leaflet.html",
    "revision": "83b413f66c4dd11e1b7671489409e426"
  },
  {
    "url": "tag/MongonDB.html",
    "revision": "fa3fa84bd85bf089265021c4622936cd"
  },
  {
    "url": "tag/MySql.html",
    "revision": "2afdadf3e4ab31d5908039566dab1e25"
  },
  {
    "url": "tag/Nginx.html",
    "revision": "f62712b10293dc59a4f2d4c064b21957"
  },
  {
    "url": "tag/Node.js.html",
    "revision": "96c6ea358d2d5ea348963085d527bd71"
  },
  {
    "url": "tag/Nuxt.html",
    "revision": "e37c737c1f1fde40dd8dbfd4dfddb24f"
  },
  {
    "url": "tag/React.html",
    "revision": "40b69255b24799c297f3d3511d7f619b"
  },
  {
    "url": "tag/Vue.html",
    "revision": "759bffcfce58a38dfefdc5af9c203826"
  },
  {
    "url": "tag/Wechatapplet.html",
    "revision": "8693554df68b12f2d9a41e526fd61edc"
  },
  {
    "url": "tag/win7.html",
    "revision": "0dfc15753eca619211d7e8f71c62f7e5"
  },
  {
    "url": "timeLine/index.html",
    "revision": "909d25ff60e084a82778bb0530075c04"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "42931a418d66e46f9130e282536be037"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "8658699ea8c00396f3a6b3b279800797"
  },
  {
    "url": "views/Centos/3.html",
    "revision": "c095d4ed0c068b0b3f9785293ab36f13"
  },
  {
    "url": "views/Docker/Docker使用过程中遇到的问题.html",
    "revision": "b0971b3831ad88006877a28dee8a7c6c"
  },
  {
    "url": "views/Docker/Docker命令.html",
    "revision": "6b9be90391e0efd83e234680d3251d01"
  },
  {
    "url": "views/Docker/Docker容器挂载.html",
    "revision": "464a78175396d6c0c1cbc7fbddc575fa"
  },
  {
    "url": "views/Docker/Docker迁移与备份.html",
    "revision": "3bc498edb6fc30da360bdbb4f32927c4"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "09e40ef5d55b5679058c6b37e4e20202"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "d3afe522ef04476b1975bbf37a31c7ba"
  },
  {
    "url": "views/elasticSearch/2.html",
    "revision": "ca57f350275e4dcd0f148242a4804f1d"
  },
  {
    "url": "views/elasticSearch/3.html",
    "revision": "04412b50e984d0e76ffc66d59b879b52"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "5289fd2aaf98bbf6fb6a8937be9dd1b6"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "1326bed44fb874e3a8bca0c85c5be42a"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "8502dcff683272dcfe32f4bb505971e5"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "4608e058d64e9cc3ff4622aaa603ae72"
  },
  {
    "url": "views/JavaScript/3.html",
    "revision": "158b31e6791a652b336d18f10b2de8a7"
  },
  {
    "url": "views/Jenkins/1.html",
    "revision": "bb2f358f3c2a63e652f09723034ee2a9"
  },
  {
    "url": "views/Jenkins/2.html",
    "revision": "1f058d07fe4c5c62677da78fc2af949b"
  },
  {
    "url": "views/Jenkins/3.html",
    "revision": "7b593a7c4cc4b65a469e7971e38a499f"
  },
  {
    "url": "views/Jenkins/4.html",
    "revision": "4bcdf8fcb2fce69c5c416f50b0b1ccf7"
  },
  {
    "url": "views/Jenkins/5.html",
    "revision": "a50a858633784ba7154565f269dd9bd2"
  },
  {
    "url": "views/Jenkins/jenkins+gitblit.html",
    "revision": "6a9f58cf61db838e5dfed8dcbc6e17a7"
  },
  {
    "url": "views/JQuery/1.html",
    "revision": "7150768b221a08c248908e7d07c16a09"
  },
  {
    "url": "views/Kylin/1.html",
    "revision": "7e02eb94de76aa1d874ed447e47b1b96"
  },
  {
    "url": "views/Leaflet/1.html",
    "revision": "6c4348666fab12256df4788bfeb49f6f"
  },
  {
    "url": "views/mondonDB/1.html",
    "revision": "a5ca77c9971254e7dc76a5b0a6be6f61"
  },
  {
    "url": "views/mondonDB/2.html",
    "revision": "dba4bea1cdb5389b30401016b6191dfb"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "6c47e238b2b301ac7ea44a7ccc2d2660"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "bb31c581e9688a2dd2371e39beecb82e"
  },
  {
    "url": "views/nginx/2.html",
    "revision": "4f12e9720784b177560be6d39fdf6801"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "ab840c17ab03137abb9c72b9cdf8b40c"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "e7c0d0f318af200991e429484e5e2931"
  },
  {
    "url": "views/nodejs/3.html",
    "revision": "debf533a73519ae88037dff3bc1f5a1b"
  },
  {
    "url": "views/nodejs/4.html",
    "revision": "f759eebce5e98c64e3173ce8c2587f94"
  },
  {
    "url": "views/nodejs/express.html",
    "revision": "c6bb8bdd752869007290c7e481c20cac"
  },
  {
    "url": "views/nuxt/lesson1.html",
    "revision": "6e48e9e0ab65edee8662fc6ca28aab34"
  },
  {
    "url": "views/nuxt/lesson2.html",
    "revision": "a6e21ab4a08c2bb31ab0b5a056b112f5"
  },
  {
    "url": "views/other/guide.html",
    "revision": "b739f69e472b6620269492e514f0ac3a"
  },
  {
    "url": "views/react/1.html",
    "revision": "79972d1ec103dd9112a58a73fa8dddca"
  },
  {
    "url": "views/vue/1.html",
    "revision": "3de5cb6d7fc6ec3be0b6cf9a6180f9c7"
  },
  {
    "url": "views/vue/2.html",
    "revision": "a9f63e96587fb94529744668fe8f030a"
  },
  {
    "url": "views/vue/3.html",
    "revision": "36171af0a3ad6db362652aff83941803"
  },
  {
    "url": "views/vue/4.html",
    "revision": "7ee3d1e8ba9122b0be2e3d6b7ed08030"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "63e93abb92b9996edcdab74c72a09f46"
  },
  {
    "url": "views/win7/1.html",
    "revision": "a9fafeadb055a804ea57c11e1a0a300c"
  },
  {
    "url": "views/win7/2.html",
    "revision": "f681e1b229efcc300b3c1aebe94da508"
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
