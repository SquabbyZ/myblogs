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
    "revision": "d9d25c4d3f075499986dfcf6f31a992d"
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
    "url": "assets/js/12.47348e71.js",
    "revision": "8620f6db606615816ca4049caa2b12dc"
  },
  {
    "url": "assets/js/13.468c2e8d.js",
    "revision": "e281faae4f985e131520fee9db64510e"
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
    "url": "assets/js/app.b842781e.js",
    "revision": "da93491f634121ecb30ebbe00b095755"
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
    "revision": "80b61b8648eafc6d34c528317d27028a"
  },
  {
    "url": "category/Echarts.html",
    "revision": "9583f364cb952559f5eb41e01241c401"
  },
  {
    "url": "category/Html5.html",
    "revision": "5dfc9ced837ccd86663e182c8ce98b4c"
  },
  {
    "url": "category/index.html",
    "revision": "a4e0b9466fdc2aa2d939ed750409b501"
  },
  {
    "url": "category/JavaScript.html",
    "revision": "1e6618a05dfbe713029083830a1e3772"
  },
  {
    "url": "category/Jenkins.html",
    "revision": "ef9913b3fddb98584f51505b03d88e63"
  },
  {
    "url": "category/JQuery.html",
    "revision": "84d7c086876765c1935fc96ab01c1e4e"
  },
  {
    "url": "category/MongonDB.html",
    "revision": "74c14479473ed7a070efdf15b54154c8"
  },
  {
    "url": "category/MySql.html",
    "revision": "ef7d63b3e558c46952c58762a29f2990"
  },
  {
    "url": "category/Nginx.html",
    "revision": "532fb4eadc26b1c2599456384318ee54"
  },
  {
    "url": "category/Node.js.html",
    "revision": "f019430267af1d560e7f84d83a16e46d"
  },
  {
    "url": "category/Nuxt.html",
    "revision": "3a68d6d8258bd3921d7bf57a7c213d2d"
  },
  {
    "url": "category/React.html",
    "revision": "22e656b063ac952b53f61c89ad0fce97"
  },
  {
    "url": "category/Vue.html",
    "revision": "3146454a6ed3e822accf02329791aa19"
  },
  {
    "url": "category/Wechatapplet.html",
    "revision": "33beca95348a4b74457effd99341ff71"
  },
  {
    "url": "category/win7.html",
    "revision": "0f2fc566e2879fde826ebb4c2c53b2f1"
  },
  {
    "url": "index.html",
    "revision": "4f323896e9da1a4f8241f2a45a696455"
  },
  {
    "url": "library/index.html",
    "revision": "b9732dbf372885b7b2724fb2483a95b4"
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
    "revision": "ed0bf003e92570510a892104ee469110"
  },
  {
    "url": "tag/Echarts.html",
    "revision": "85ad41a4d60f1825fd0bf79c017a0339"
  },
  {
    "url": "tag/Html5.html",
    "revision": "66cba7c1275e6ad1b176badb153fcde6"
  },
  {
    "url": "tag/index.html",
    "revision": "7ed37cf56b1ebc74f55475bd620197a8"
  },
  {
    "url": "tag/JavaScript.html",
    "revision": "ed997e368bb145e861519f2f60bd5fcf"
  },
  {
    "url": "tag/Jenkins.html",
    "revision": "eff117fd154a04903e9aa3474dee34cf"
  },
  {
    "url": "tag/JQuery.html",
    "revision": "97207ca275f3383cdd05fdaee6d6cecc"
  },
  {
    "url": "tag/MongonDB.html",
    "revision": "37af904cad7a77475bdefc0b14fcbf76"
  },
  {
    "url": "tag/MySql.html",
    "revision": "eba6ad83a228f73674550e424b1ed1ad"
  },
  {
    "url": "tag/Nginx.html",
    "revision": "2fc317f522a37121a7ab6950f2db8378"
  },
  {
    "url": "tag/Node.js.html",
    "revision": "d268014bf030767cdd4b14101d5bc890"
  },
  {
    "url": "tag/Nuxt.html",
    "revision": "fb45674e0c268c5e6d20262cbf50db3f"
  },
  {
    "url": "tag/React.html",
    "revision": "1a360b02b7e3a91184d2f204fcfb8ab5"
  },
  {
    "url": "tag/Vue.html",
    "revision": "512534e533e96bc17373975c765da9f6"
  },
  {
    "url": "tag/Wechatapplet.html",
    "revision": "608d8342b6287a7c1953bd3135e94787"
  },
  {
    "url": "tag/win7.html",
    "revision": "a3261df33dea17680abb90d6e785bc16"
  },
  {
    "url": "timeLine/index.html",
    "revision": "7bd22f0eec37262b5429f60e1dded686"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "3e2c644af6aa22ceebd336f8da5c57cc"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "5a502b3c1330a73806e2713a4d098281"
  },
  {
    "url": "views/Centos/3.html",
    "revision": "1df5a0d186c60e56805438145eaaebe9"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "3708927ab55d7bbaa170cd444a666a7a"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "49b2f4a355c76096d4c4ecb2412eea96"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "526077fc1dbe003ae999c1bee0db0aa9"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "7df409237110e845fd7c32c5931db5a4"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "4ba087acddc09a15a71f972a9eb94377"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "0016a4baea07d4d035af99047f5a6727"
  },
  {
    "url": "views/JavaScript/3.html",
    "revision": "c4848561151977251e6d62d065d038ed"
  },
  {
    "url": "views/Jenkins/1.html",
    "revision": "89f4532374865277218ab82757b9cdfa"
  },
  {
    "url": "views/Jenkins/2.html",
    "revision": "c9d49806ba5301ec3f1d2dc18c2258d0"
  },
  {
    "url": "views/Jenkins/3.html",
    "revision": "5fea0173f9638396e5e5589b8b549398"
  },
  {
    "url": "views/Jenkins/4.html",
    "revision": "25a4152b7da90fb545e931902a0be37f"
  },
  {
    "url": "views/Jenkins/5.html",
    "revision": "c503a35adc1911f8817526ac63523bac"
  },
  {
    "url": "views/JQuery/1.html",
    "revision": "21154e1c2ab20dc4dfd12e09e4c4ca1f"
  },
  {
    "url": "views/mondonDB/1.html",
    "revision": "8599f8592b31be771b69cbd41ee5a527"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "6a5a37191855be738a12d4be82633887"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "f55dfd0ac2f816b3447a4838035af54a"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "8bb4c21e007dfd55362e50217626a4fe"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "5ccb193b60a17fd9b505543fbe0423c6"
  },
  {
    "url": "views/nodejs/express.html",
    "revision": "c923726f5b16339095d4d9e195283792"
  },
  {
    "url": "views/nuxt/lesson1.html",
    "revision": "4f8b4e7a923cce7b4eee1e6f62c71770"
  },
  {
    "url": "views/nuxt/lesson2.html",
    "revision": "0e36442046b7bb7214aec0dfd4f7c580"
  },
  {
    "url": "views/other/guide.html",
    "revision": "b4e6af17d050319a5fd8e1a743f6847f"
  },
  {
    "url": "views/react/1.html",
    "revision": "29c06a2878650d0a9d32f8aa96f9cd26"
  },
  {
    "url": "views/vue/1.html",
    "revision": "0733957f823f7883e34d50200319fc79"
  },
  {
    "url": "views/vue/2.html",
    "revision": "ff3e1a09740b2ccfca4f4a25585b14c7"
  },
  {
    "url": "views/vue/3.html",
    "revision": "ac1a5e0e037abe9e782d7d42181a8a66"
  },
  {
    "url": "views/vue/4.html",
    "revision": "0e5af211e27a6dbd5dce25c7d99d2187"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "5eecf2bd58b45edf10e9dbd2d261fb35"
  },
  {
    "url": "views/win7/1.html",
    "revision": "e9c2d139b8d3ab03c302784011c38958"
  },
  {
    "url": "views/win7/2.html",
    "revision": "b5b98a099045a1bc9f8d89f074874bad"
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
