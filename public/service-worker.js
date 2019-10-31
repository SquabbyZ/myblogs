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
    "revision": "b2038e56ea91f2fde8ba7a320df4238c"
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
    "url": "assets/js/10.3557e0f8.js",
    "revision": "87658110bf06c28a301e84e27146f01b"
  },
  {
    "url": "assets/js/11.53ea6390.js",
    "revision": "64a1d9ae56c8a0ab501b2dddb60f4266"
  },
  {
    "url": "assets/js/12.ecf65c3c.js",
    "revision": "46725c2a145f1d28039c8ecc7b279de0"
  },
  {
    "url": "assets/js/13.cbb2a428.js",
    "revision": "7412fda23fbc913f161ac8046d0ae270"
  },
  {
    "url": "assets/js/14.6fb35edd.js",
    "revision": "7fa299b724c83722d746584a0516bf24"
  },
  {
    "url": "assets/js/15.8607a68c.js",
    "revision": "834daedadc9e46423535a5ad70b6af5c"
  },
  {
    "url": "assets/js/16.8b75cd8e.js",
    "revision": "245a91d0827d6bbac064c41e141d471b"
  },
  {
    "url": "assets/js/17.a9804e58.js",
    "revision": "84b6f157cbcfdcdda8c195364baa0598"
  },
  {
    "url": "assets/js/18.1010f0cb.js",
    "revision": "b7bdee9b610297f9deaa5dae96bb7f86"
  },
  {
    "url": "assets/js/19.567c9603.js",
    "revision": "4277b4288e76001579c0c8c61255596c"
  },
  {
    "url": "assets/js/20.78771e0b.js",
    "revision": "f202b7f650dac4fe4e131e2efbf05b25"
  },
  {
    "url": "assets/js/21.a841e8fc.js",
    "revision": "bf43f3b5c0bccea73cdc976f3ab4c338"
  },
  {
    "url": "assets/js/22.e0f7eb3a.js",
    "revision": "93aa44d8703b2f692e89c33f49d1aad9"
  },
  {
    "url": "assets/js/23.89c244df.js",
    "revision": "960bd61b118fc456728a5c2f186f7541"
  },
  {
    "url": "assets/js/24.11775f95.js",
    "revision": "d946bd26eb2dcf49dcbec307be125be7"
  },
  {
    "url": "assets/js/25.fe040ee6.js",
    "revision": "10e95113668f092555952b522e292b5f"
  },
  {
    "url": "assets/js/26.401aa3d5.js",
    "revision": "6d90da6602801124c7ad984867f21cf3"
  },
  {
    "url": "assets/js/27.46dbf586.js",
    "revision": "3d93d6a3475ec46363404de8e3650595"
  },
  {
    "url": "assets/js/28.e701881e.js",
    "revision": "8a3fbf48d26aab0c48383d256ba42e09"
  },
  {
    "url": "assets/js/29.8c3dd9d4.js",
    "revision": "bbedf749bc3e175667cff87df21cc484"
  },
  {
    "url": "assets/js/30.ade62a15.js",
    "revision": "ace8383310fdf43b61488e183921ff53"
  },
  {
    "url": "assets/js/31.0a931153.js",
    "revision": "37caf838f2bc6f34efb2273678694e9a"
  },
  {
    "url": "assets/js/32.00dbad57.js",
    "revision": "e0849517eaab24a6e2c4b1dd7d04e61f"
  },
  {
    "url": "assets/js/33.662c1d99.js",
    "revision": "db83a6fc4b7a59d01785dc5a4fcaa529"
  },
  {
    "url": "assets/js/34.d4dd1a2e.js",
    "revision": "bbc2c5cb3f7176e2be65f9155d7df899"
  },
  {
    "url": "assets/js/35.d17365c6.js",
    "revision": "7e81866b8b868569cd81370b8420f96d"
  },
  {
    "url": "assets/js/36.9faecc71.js",
    "revision": "27bcd55081b142fa0c20f9fda4202fd5"
  },
  {
    "url": "assets/js/37.fc6907c0.js",
    "revision": "f3c70686903bfd940c3f827426afb888"
  },
  {
    "url": "assets/js/38.528d4571.js",
    "revision": "58d396854a03e0891d1d4e37e7141d27"
  },
  {
    "url": "assets/js/39.be7229dc.js",
    "revision": "c3b6df04c359909e9506e851bea510c6"
  },
  {
    "url": "assets/js/4.aa6aa63d.js",
    "revision": "715d909f2d4c1f4ea2923eaea9b19075"
  },
  {
    "url": "assets/js/40.f4aa49c5.js",
    "revision": "b6dca7fa317ac4eaa2f14e99b5884bbd"
  },
  {
    "url": "assets/js/41.de21bf41.js",
    "revision": "b7e93756353d5d7da436120626b8af58"
  },
  {
    "url": "assets/js/42.da3559be.js",
    "revision": "af22728d2c3f678b2ba5b2adfe078464"
  },
  {
    "url": "assets/js/43.b064aa19.js",
    "revision": "1b23396a60eba849664e7b23fa80c343"
  },
  {
    "url": "assets/js/44.7443a373.js",
    "revision": "63369cfc6b37f9c9a6576c4902524853"
  },
  {
    "url": "assets/js/45.18be889f.js",
    "revision": "4bcbef549360453ad8a1275b467d4ae5"
  },
  {
    "url": "assets/js/5.a904bb98.js",
    "revision": "2541b058a3a59f5bce95e16e45d768d8"
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
    "url": "assets/js/app.924252cb.js",
    "revision": "54ab3bed8914c86a957bc7a996ea3c55"
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
    "revision": "f50673f39110e1015a5fcf64682f118d"
  },
  {
    "url": "category/Echarts.html",
    "revision": "305e8629fd9b76881c043372db621821"
  },
  {
    "url": "category/Html5.html",
    "revision": "bf4e0bf8020689f4f22b6a7e66c2ede7"
  },
  {
    "url": "category/index.html",
    "revision": "74f59ac53edb63152e9804c2b1f92797"
  },
  {
    "url": "category/JavaScript.html",
    "revision": "eed51a9be821242e0e6ca1d7a73b60d7"
  },
  {
    "url": "category/Jenkis.html",
    "revision": "97b76eb791fa5d785653e113cd91a887"
  },
  {
    "url": "category/JQuery.html",
    "revision": "4d94954f747496306e833f10afc932b7"
  },
  {
    "url": "category/MongonDB.html",
    "revision": "e4aa29c858482ea3f2a5a75d9fbe2faf"
  },
  {
    "url": "category/MySql.html",
    "revision": "29c4aa41e8f959750bf8a016c3101df3"
  },
  {
    "url": "category/Nginx.html",
    "revision": "312b45075d9bdd16c42f43eb11dfa7a1"
  },
  {
    "url": "category/Node.js.html",
    "revision": "d0156325fa6f5d940c5a842630281e11"
  },
  {
    "url": "category/Nuxt.html",
    "revision": "71a68059eaa3773dea2eafe0758ce6aa"
  },
  {
    "url": "category/React.html",
    "revision": "a6c66a0a08111b6abd5a20d4cdcd7dba"
  },
  {
    "url": "category/Vue.html",
    "revision": "7fa674272161232865614bcad2f08c37"
  },
  {
    "url": "category/Wechatapplet.html",
    "revision": "4d6647c7e1822ba077ac8e8bc33cfc76"
  },
  {
    "url": "category/win7.html",
    "revision": "870110a2f90cebb6f6caf812375b84f7"
  },
  {
    "url": "index.html",
    "revision": "5452893fb32df490884aed3524aae6a9"
  },
  {
    "url": "library/index.html",
    "revision": "17bdbb544e51887c95d1a92a6c3dff82"
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
    "revision": "da7195a01cfc2d6798955f0f498e6d9c"
  },
  {
    "url": "tag/Echarts.html",
    "revision": "17e86a1936ca0449827c6eaec24b3cc6"
  },
  {
    "url": "tag/Html5.html",
    "revision": "cb447ca078e0a5976733e08a443be797"
  },
  {
    "url": "tag/index.html",
    "revision": "37e5a11eb630d697325c3e9c5a6fb588"
  },
  {
    "url": "tag/JavaScript.html",
    "revision": "c9a731b68c8da20f8374d5e6250f99d6"
  },
  {
    "url": "tag/Jenkis.html",
    "revision": "38b908f929d8e6b85274153bd6adfd39"
  },
  {
    "url": "tag/JQuery.html",
    "revision": "2c4c47db88987b1a8941d8dbf865296a"
  },
  {
    "url": "tag/MongonDB.html",
    "revision": "7300cc231703da5ff473b50d8b073db2"
  },
  {
    "url": "tag/MySql.html",
    "revision": "ddebde38c72af7c3eee3873bb01cd8c7"
  },
  {
    "url": "tag/Nginx.html",
    "revision": "94a173b559c092a585c721e1867154d5"
  },
  {
    "url": "tag/Node.js.html",
    "revision": "16fc6bd63d254c7b5154658326c7f1ea"
  },
  {
    "url": "tag/Nuxt.html",
    "revision": "25a879bc5ef83c5ba31a953b6afe1ecb"
  },
  {
    "url": "tag/React.html",
    "revision": "7746c937111dcd02d1dc202f082dfa8e"
  },
  {
    "url": "tag/Vue.html",
    "revision": "5c7b0dde17baec8d85f2376535384b9b"
  },
  {
    "url": "tag/Wechatapplet.html",
    "revision": "591b6a43024a9487699ac23906d3f52e"
  },
  {
    "url": "tag/win7.html",
    "revision": "d7d971b5ed9e21d3252eb0e7936bd4f4"
  },
  {
    "url": "timeLine/index.html",
    "revision": "c182949980baa918ac36422cc5d6ccfb"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "fc3f6b4bbff4ad052e8fca8a80cfcdd8"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "c33a7d46ebdb0019e472a5b73779c5aa"
  },
  {
    "url": "views/Centos/3.html",
    "revision": "14829be3ffa6bbee1fbbfbf922b92d16"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "05110270e50a67359a2230ac67291356"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "6ae4212e28163959deb4778c3621af26"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "c1d3754563500bcdc17c7b06a0e1304d"
  },
  {
    "url": "views/Html5/2.html",
    "revision": "f106ab9000d58c02baa36f3fbb20e7c6"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "c71fc79d59588417e4e4ff10491945ec"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "fd95884987aecfec79125e399ea5c4a7"
  },
  {
    "url": "views/JavaScript/3.html",
    "revision": "e210332245840c0e0179d9e0cbb75761"
  },
  {
    "url": "views/Jenkis/1.html",
    "revision": "ea411136385c6263d794192a621fa64f"
  },
  {
    "url": "views/Jenkis/2.html",
    "revision": "70c8c1e2e3d5795b8886ef4e9ba3862f"
  },
  {
    "url": "views/Jenkis/3.html",
    "revision": "f1da76020cbfaa0a4dea3d3d8a93a81d"
  },
  {
    "url": "views/Jenkis/4.html",
    "revision": "7e3a651e79130053b6dfcfdd42d7c6a0"
  },
  {
    "url": "views/JQuery/1.html",
    "revision": "984ca3b71a0603f0f0078fe5110bf7e6"
  },
  {
    "url": "views/mondonDB/1.html",
    "revision": "186b15cf2a3db990ceabbb2adb4e0f74"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "a3f16755598141a03d6d7ec3cb496f63"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "4db943eaf158a33360cf66e3e2be3905"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "71fbbff5d4d7d3ff0be9dfe65ed0140d"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "019f20beb0d32c61516505035ed3d686"
  },
  {
    "url": "views/nodejs/express.html",
    "revision": "9d7010555de0014d63decd7382cc7f47"
  },
  {
    "url": "views/nuxt/lesson1.html",
    "revision": "93508489815d0d8ce2c981d052c411d9"
  },
  {
    "url": "views/nuxt/lesson2.html",
    "revision": "987828cfc9c9bfb685d2a8d63a7253ad"
  },
  {
    "url": "views/other/guide.html",
    "revision": "ba6d262167a0b1cd2f0a0dcde3c994a5"
  },
  {
    "url": "views/react/1.html",
    "revision": "774448f66dcfb7605942d7afc5795b31"
  },
  {
    "url": "views/vue/1.html",
    "revision": "9bdd6fcb3a9995f17d0593343e527d1f"
  },
  {
    "url": "views/vue/2.html",
    "revision": "743c9fa2aa57f43a2c89ca7e2088e7e0"
  },
  {
    "url": "views/vue/3.html",
    "revision": "4a81c6530fa69caf69ae97b7b0db9055"
  },
  {
    "url": "views/vue/4.html",
    "revision": "cfec2d8a58956ee7f95afb6f3e03791c"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "e0479eaaa77b45c20de19785caad07c3"
  },
  {
    "url": "views/win7/1.html",
    "revision": "de0ece3677f70478bcabca05e7dfc583"
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
