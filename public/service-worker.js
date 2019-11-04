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
    "revision": "4c6a1e368dbb703feb99ca84118e4115"
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
    "url": "assets/js/1.c304072a.js",
    "revision": "3ca213cc573d2c1cbc83a2e16596f727"
  },
  {
    "url": "assets/js/10.664de4ce.js",
    "revision": "d663a898e7fe7d06808f37b2b1e16283"
  },
  {
    "url": "assets/js/11.53ea6390.js",
    "revision": "64a1d9ae56c8a0ab501b2dddb60f4266"
  },
  {
    "url": "assets/js/12.f473a820.js",
    "revision": "2bdfe6b4abb5ccd8a47f5895113fafcb"
  },
  {
    "url": "assets/js/13.cbb2a428.js",
    "revision": "7412fda23fbc913f161ac8046d0ae270"
  },
  {
    "url": "assets/js/14.8fd435ab.js",
    "revision": "28e37b7c63ab5ec5f13385eeaad2a9a2"
  },
  {
    "url": "assets/js/15.8f5c6e24.js",
    "revision": "312fc480ea190e1c5ba665131a783299"
  },
  {
    "url": "assets/js/16.6e89a52a.js",
    "revision": "2b36c5ec50889ceee4023d1a304a7475"
  },
  {
    "url": "assets/js/17.8c166218.js",
    "revision": "1bb7485784ad3aab0c081a27da7b36a6"
  },
  {
    "url": "assets/js/18.6d13c2dd.js",
    "revision": "f712b09edfc1da191d52ea1835274109"
  },
  {
    "url": "assets/js/19.7e0cb815.js",
    "revision": "e63794266d85a6ec89b7c5cb7b11673f"
  },
  {
    "url": "assets/js/20.e9bef936.js",
    "revision": "103f32f25a643692aa03c440980e3a58"
  },
  {
    "url": "assets/js/21.45558623.js",
    "revision": "de69f4c9757ae7e845f8d6ea0bb4f11e"
  },
  {
    "url": "assets/js/22.484e4bfd.js",
    "revision": "a55669e3c8b52610b1ee3641b8f85001"
  },
  {
    "url": "assets/js/23.25fabf0b.js",
    "revision": "447f8d9a3eeaba585d4adb13be564657"
  },
  {
    "url": "assets/js/24.5bd43fae.js",
    "revision": "d9e752935c1f47540f083a7ae1b060e5"
  },
  {
    "url": "assets/js/25.5f820fef.js",
    "revision": "adb998369069a3ca0e5c159345cfd1d1"
  },
  {
    "url": "assets/js/26.4e142781.js",
    "revision": "f0ad42f08aee2840b3c7dbbb44498f39"
  },
  {
    "url": "assets/js/27.4fd01116.js",
    "revision": "bcbaf6ec266f7cfc985bdaa5615272fd"
  },
  {
    "url": "assets/js/28.3b291947.js",
    "revision": "e9f25c4040c44158e75ae11884db5567"
  },
  {
    "url": "assets/js/29.26c10675.js",
    "revision": "55e1f864ec1b5611b965c39aa366e3ea"
  },
  {
    "url": "assets/js/30.93af41f1.js",
    "revision": "d6661c1b56e7e584591d215b57689ca7"
  },
  {
    "url": "assets/js/31.9b3a9f16.js",
    "revision": "23b791223a6c42842961b256c52ce036"
  },
  {
    "url": "assets/js/32.65713345.js",
    "revision": "d450535aeadc461cff7b51b5d6431b5f"
  },
  {
    "url": "assets/js/33.1eb1fdd6.js",
    "revision": "0e7cb7306fd5b56ce05f540b19c5093e"
  },
  {
    "url": "assets/js/34.4642a0a7.js",
    "revision": "0735898c2ef18252834b7ba3ba2853ef"
  },
  {
    "url": "assets/js/35.67b89b60.js",
    "revision": "81155ff38e585b0742536de975dbee65"
  },
  {
    "url": "assets/js/36.12beed7d.js",
    "revision": "95d6e917f39b63fc12a41bd5cfb46dc2"
  },
  {
    "url": "assets/js/37.153f8324.js",
    "revision": "cebbefebcad18bc7c72546353006a6d6"
  },
  {
    "url": "assets/js/38.731052a3.js",
    "revision": "06d36b96cb631c1061617e7be7f5993e"
  },
  {
    "url": "assets/js/39.f5a1aebf.js",
    "revision": "c9f71b0961804c1598e27cf35e9c75e9"
  },
  {
    "url": "assets/js/4.dd7b09ef.js",
    "revision": "a4081dcd3eeea95073f56b3dbdde8671"
  },
  {
    "url": "assets/js/40.111d768b.js",
    "revision": "9db53615f79fda7ca30ebc174ebfa1ac"
  },
  {
    "url": "assets/js/41.82cc7ba1.js",
    "revision": "b973500cd6d58f1ebd37886a72311250"
  },
  {
    "url": "assets/js/42.7f16363b.js",
    "revision": "96fadd566954942220e9b7c8f3386996"
  },
  {
    "url": "assets/js/43.80c10dbd.js",
    "revision": "b072ea431c556b6b7ed1d8d982742d96"
  },
  {
    "url": "assets/js/44.a14e1b5f.js",
    "revision": "95a4d781ce61f51ff320b50b9563146a"
  },
  {
    "url": "assets/js/45.520d3a32.js",
    "revision": "9a1a31c174adb197d9882d067670bc88"
  },
  {
    "url": "assets/js/46.13434b45.js",
    "revision": "e34b2021ce2614f5bad2a2614033cb4c"
  },
  {
    "url": "assets/js/47.244e655c.js",
    "revision": "618bc2dd222ec7abea3960aaa2e8192d"
  },
  {
    "url": "assets/js/5.95ddbaf6.js",
    "revision": "253de68d061f0e8303d7040284b2ddb5"
  },
  {
    "url": "assets/js/6.c07e20e0.js",
    "revision": "af0127bbaa9f13baf9838022df22c8f4"
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
    "url": "assets/js/app.6e9a029f.js",
    "revision": "ce1d54792592345d2e4ef88b87d32269"
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
    "revision": "4e56557950b5426235e252d137534d51"
  },
  {
    "url": "category/Echarts.html",
    "revision": "00ed829eb40d4e74f75c687ceed66f45"
  },
  {
    "url": "category/Html5.html",
    "revision": "0f5f7fd83b7569ba4254d4d32485f143"
  },
  {
    "url": "category/index.html",
    "revision": "0b81e59d9ae3007024ec53daaa0231bf"
  },
  {
    "url": "category/JavaScript.html",
    "revision": "208434299d5b664a34d9ac21544c2778"
  },
  {
    "url": "category/Jenkins.html",
    "revision": "2229287e3a0ec9031eac13faaad816ed"
  },
  {
    "url": "category/JQuery.html",
    "revision": "3cd798602d75241b659e5afbdcf2378c"
  },
  {
    "url": "category/MongonDB.html",
    "revision": "8222d1a65bdb67649746e6c05706b363"
  },
  {
    "url": "category/MySql.html",
    "revision": "5eefad5d00f5db126129575e5c8f8b9f"
  },
  {
    "url": "category/Nginx.html",
    "revision": "bad4315a5f82045601c648fc90c7d37f"
  },
  {
    "url": "category/Node.js.html",
    "revision": "3d58b18a8ce840669ec43dd57933b89b"
  },
  {
    "url": "category/Nuxt.html",
    "revision": "16160daf152d1017022dc280541758a6"
  },
  {
    "url": "category/React.html",
    "revision": "f8025e57cf8b64d2df8117076aace1c6"
  },
  {
    "url": "category/Vue.html",
    "revision": "811063332af0ef0250835d602dc136e1"
  },
  {
    "url": "category/Wechatapplet.html",
    "revision": "180f33d2ea631f17f75d4d3cb48aa382"
  },
  {
    "url": "category/win7.html",
    "revision": "95569a4a440cfe64a1e9597baba8b7c4"
  },
  {
    "url": "index.html",
    "revision": "0814b57aabb8f411503652c448b967b9"
  },
  {
    "url": "library/index.html",
    "revision": "a5328ae87d584bca26e1a754360345d1"
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
    "revision": "cc7d385fdd06760b5df6051f7a388dca"
  },
  {
    "url": "tag/Echarts.html",
    "revision": "b8ae79515e4ffafc22e33e5f59b0ec6c"
  },
  {
    "url": "tag/Html5.html",
    "revision": "9705824fd38e988c80ab32df1257d320"
  },
  {
    "url": "tag/index.html",
    "revision": "30e94180fe61a7a9cff07ffc7bba5890"
  },
  {
    "url": "tag/JavaScript.html",
    "revision": "937cbe9afcb20c8bc42cd6ca57d6c6e2"
  },
  {
    "url": "tag/Jenkins.html",
    "revision": "bc336e0129951570c8041661e16734a7"
  },
  {
    "url": "tag/JQuery.html",
    "revision": "ea7e450b34e04f0d5c590296df6efd28"
  },
  {
    "url": "tag/MongonDB.html",
    "revision": "dec7b15e649e30355539723c373b9617"
  },
  {
    "url": "tag/MySql.html",
    "revision": "bb440a72994e18ca65a58bac07c64038"
  },
  {
    "url": "tag/Nginx.html",
    "revision": "5f71258f92d96f33cde9c6b227e7b95f"
  },
  {
    "url": "tag/Node.js.html",
    "revision": "acac56174b3697d0d3a7beded53fca98"
  },
  {
    "url": "tag/Nuxt.html",
    "revision": "ad685babad35486e5a5ead162eb1af9e"
  },
  {
    "url": "tag/React.html",
    "revision": "c34ac0e9cf5cc439bad61025fe9e429e"
  },
  {
    "url": "tag/Vue.html",
    "revision": "4234362d0e3476a846fa776b7a02689d"
  },
  {
    "url": "tag/Wechatapplet.html",
    "revision": "6db0f163fb736008a20b25de89481ec7"
  },
  {
    "url": "tag/win7.html",
    "revision": "a6a8c8f8f875d22361aeaf1b0f45027a"
  },
  {
    "url": "timeLine/index.html",
    "revision": "dc05f39085a59d63e4e7522a937e229a"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "1cfe3f78eedb1a7af22f4794d94262bd"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "dfb1c9422146f6475bc3b1d86402da20"
  },
  {
    "url": "views/Centos/3.html",
    "revision": "e8ce8daf0b34348509140a1187b8f7cd"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "d74fb1760a45cde6c09220a788d36e05"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "dbf2de57ff7f8e8c6dcc129bd499c15d"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "be022653b5c4cde46544f9ab94cf5292"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "ace5c84bcc5d19eb92be6fcef9457121"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "3dd5bfb0311ca75abc12ea5931fc85b6"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "653dad2ca534e1b4d574bf391a1a7532"
  },
  {
    "url": "views/JavaScript/3.html",
    "revision": "a2b70733a73bcdcf188deaf84167ad32"
  },
  {
    "url": "views/Jenkins/1.html",
    "revision": "5987652192b4a22b954455ecba1341d7"
  },
  {
    "url": "views/Jenkins/2.html",
    "revision": "3b2856bd501ab7ff855888f7f4366ebe"
  },
  {
    "url": "views/Jenkins/3.html",
    "revision": "d00626bc85fc83e32e8493c5a60c3027"
  },
  {
    "url": "views/Jenkins/4.html",
    "revision": "371377960e50a5b729c80a8b2e171df4"
  },
  {
    "url": "views/Jenkins/5.html",
    "revision": "49a432133dde48ba7faf8dd7ea3e4d2b"
  },
  {
    "url": "views/JQuery/1.html",
    "revision": "1bc046bab1cc091a664aec44a807e174"
  },
  {
    "url": "views/mondonDB/1.html",
    "revision": "e9c5abc4e429ecd3589aacd0757fee0a"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "aef49dda287b24e31b28bb46df9aa79f"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "a0d4ac0b9ad000b216bedc337f4dfcd9"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "c2cd49d4613ced0c279046bf952eb431"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "64b85a149e5aa91b1d0aaec2a07631d9"
  },
  {
    "url": "views/nodejs/express.html",
    "revision": "46f2968851e56ce866e0c8d7c4a0a55b"
  },
  {
    "url": "views/nuxt/lesson1.html",
    "revision": "0452921054c2838c9c7e7acff7ec1ef1"
  },
  {
    "url": "views/nuxt/lesson2.html",
    "revision": "84c157627792166e966ed49e36edeb14"
  },
  {
    "url": "views/other/guide.html",
    "revision": "ec3a02bd319887f9c07dc49e9f3898fd"
  },
  {
    "url": "views/react/1.html",
    "revision": "0e66cb333a104977fe1c44f20cdb6499"
  },
  {
    "url": "views/vue/1.html",
    "revision": "18f5caff006bb4a8f907f8342f256cf9"
  },
  {
    "url": "views/vue/2.html",
    "revision": "058bc62e583fc00b76eff79e8f77eb0d"
  },
  {
    "url": "views/vue/3.html",
    "revision": "7e8adf7bd3fd7ae2feced1b7696aa00c"
  },
  {
    "url": "views/vue/4.html",
    "revision": "f9ec08fcced9e84db0c3180c08286e7c"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "57c844920200250385901d7818f96520"
  },
  {
    "url": "views/win7/1.html",
    "revision": "a0ac5ecfc67cf86f7ca11807d7fa4238"
  },
  {
    "url": "views/win7/2.html",
    "revision": "8e5a6b025cbbeecf9a18d7dda3b37cfe"
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
