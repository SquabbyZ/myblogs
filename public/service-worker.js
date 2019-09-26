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
    "revision": "a9608d3984aa4c7b33463bda088dc03d"
  },
  {
    "url": "assets/css/0.styles.6224b5c9.css",
    "revision": "316f73eaed03c65341cdf6f402f1d508"
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
    "url": "assets/js/1.0a9eb53e.js",
    "revision": "e1eacfaf1ae1ba5d9d10c897d1332646"
  },
  {
    "url": "assets/js/10.1c88e67c.js",
    "revision": "baef816fffd645d057b15697a92f2c6e"
  },
  {
    "url": "assets/js/11.6d863a5b.js",
    "revision": "9e7939f3da7faa74a5ba1ccae4846333"
  },
  {
    "url": "assets/js/12.f18e9afb.js",
    "revision": "b64503892b4941a75f1914759b600269"
  },
  {
    "url": "assets/js/13.1fbaeefd.js",
    "revision": "447ed89243791f18735ba2390b9f7a76"
  },
  {
    "url": "assets/js/14.59ee8e22.js",
    "revision": "d0e46c883264728aabd47af094985934"
  },
  {
    "url": "assets/js/15.5f2fff44.js",
    "revision": "82f8de1f9bbb4ecc4a0a2fd4e7da0498"
  },
  {
    "url": "assets/js/16.9d83ba9c.js",
    "revision": "4a743265d4d66c74556a5052aae2b471"
  },
  {
    "url": "assets/js/17.f2eee6bf.js",
    "revision": "a93e9ff6900c2ed1edb1ad48cdff6313"
  },
  {
    "url": "assets/js/18.57fb867d.js",
    "revision": "769a6831b4f838a9383a6229c53f75c5"
  },
  {
    "url": "assets/js/19.b1f819c6.js",
    "revision": "e1ebb8b83e9c61bfecb7215dbfb0793d"
  },
  {
    "url": "assets/js/20.60d399dd.js",
    "revision": "014e4717334c58f6bb6506e8804eb289"
  },
  {
    "url": "assets/js/21.2737090e.js",
    "revision": "48f6160ec88edd3d08553ca469d70ce6"
  },
  {
    "url": "assets/js/22.4af3e2a6.js",
    "revision": "f0078f44a1157a314f256c32b874c655"
  },
  {
    "url": "assets/js/23.3591e2fd.js",
    "revision": "5dbaf29b077a09572fc6b89bcf4ad054"
  },
  {
    "url": "assets/js/24.535087c2.js",
    "revision": "da9726b6ce3257415b756ad73521092c"
  },
  {
    "url": "assets/js/25.f5f15ac7.js",
    "revision": "eef89a776b93f48358071bac2b745e64"
  },
  {
    "url": "assets/js/26.3163d408.js",
    "revision": "25884bc801ecbc0ec80559fbcf0253a9"
  },
  {
    "url": "assets/js/27.dcef1736.js",
    "revision": "6bce02202f667bab741e80f31a0a80ec"
  },
  {
    "url": "assets/js/28.66a217d9.js",
    "revision": "0f2b9137758b9492961205538600df06"
  },
  {
    "url": "assets/js/29.ae4df2d7.js",
    "revision": "141582f9f65e639ba5aa38816db76656"
  },
  {
    "url": "assets/js/30.a6bc8b95.js",
    "revision": "9d1828c3dbb6949c1fd6556f766dafc7"
  },
  {
    "url": "assets/js/4.668e08f8.js",
    "revision": "e45c0bc29f0c6647c9f9ab98dd623f26"
  },
  {
    "url": "assets/js/5.586d16d5.js",
    "revision": "44764d15844ce42a49cfd264848f1475"
  },
  {
    "url": "assets/js/6.c07e20e0.js",
    "revision": "af0127bbaa9f13baf9838022df22c8f4"
  },
  {
    "url": "assets/js/7.730e7b5f.js",
    "revision": "50cfd09d6605c0c7886ccd4941b1b733"
  },
  {
    "url": "assets/js/8.57f6507f.js",
    "revision": "e84fb7e198a05f1006e4aa4487111a11"
  },
  {
    "url": "assets/js/9.464f77f0.js",
    "revision": "24b0562729bdc0c81b328a205ed16e0a"
  },
  {
    "url": "assets/js/app.2a9a8e60.js",
    "revision": "28bba9a30f4898182dac1947ababacd4"
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
    "revision": "d4166d3ebfd600486db42fc2d5e00a14"
  },
  {
    "url": "category/Echarts.html",
    "revision": "195763a1ee0f2bcd9a3cfe0a7be55865"
  },
  {
    "url": "category/Html5.html",
    "revision": "96bd32c5cb21e7648c57fad471b36d71"
  },
  {
    "url": "category/index.html",
    "revision": "2db2cb86063461a9b2400195147d36d3"
  },
  {
    "url": "category/JavaScript.html",
    "revision": "59b0f9e91ad531a40d3cf2d17769609d"
  },
  {
    "url": "category/MySql.html",
    "revision": "758ed18a97c28267b9b010f8a3e5b256"
  },
  {
    "url": "category/Nginx.html",
    "revision": "9a604f3dadde5d8a50d8f52ccd62aa72"
  },
  {
    "url": "category/Node.js.html",
    "revision": "3487202e1385cbf04e85e9862464233b"
  },
  {
    "url": "category/React.html",
    "revision": "20d58e3d1034d738c656370211ac2f17"
  },
  {
    "url": "category/Vue.html",
    "revision": "fc1446c87c38f727616c8e7758363df4"
  },
  {
    "url": "category/Wechatapplet.html",
    "revision": "415ff7ca6acd6276ea0bbe37509407ca"
  },
  {
    "url": "category/win7.html",
    "revision": "9daf4cfcf88cce0a9494739fb1475bee"
  },
  {
    "url": "index.html",
    "revision": "a48affe3f675353e6592cd08480aa67c"
  },
  {
    "url": "library/index.html",
    "revision": "43c78b94c3700c0c038056ab78f06dd5"
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
    "revision": "e42273b59607a8defc6fced0b49781bd"
  },
  {
    "url": "tag/Echarts.html",
    "revision": "6b4b66f542621ff337d9ee8005e583c3"
  },
  {
    "url": "tag/Html5.html",
    "revision": "9b4ec3510c93d38eb5a7c76808506a99"
  },
  {
    "url": "tag/index.html",
    "revision": "7f2b3e493cc7040d045fdb943a6662f4"
  },
  {
    "url": "tag/JavaScript.html",
    "revision": "e222f870f405cd9c10248522272f0a6e"
  },
  {
    "url": "tag/MySql.html",
    "revision": "1b7419dd3d93c80dd0c93a0acb82b1ac"
  },
  {
    "url": "tag/Nginx.html",
    "revision": "d5eb94d6f8c1b29bba3d5634ab6157f0"
  },
  {
    "url": "tag/Node.js.html",
    "revision": "601cb93c8efdd43be877ff4d8cffdce5"
  },
  {
    "url": "tag/React.html",
    "revision": "9aff14b80b4bcb57d353618e4fd8fb06"
  },
  {
    "url": "tag/Vue.html",
    "revision": "ce60c9e30bc1a4a91f6a101aa88fbd31"
  },
  {
    "url": "tag/Wechatapplet.html",
    "revision": "8acd472bc753d64241675b4705a149b6"
  },
  {
    "url": "tag/win7.html",
    "revision": "8af1b1de873ed86d9e3c5826698d35ba"
  },
  {
    "url": "timeLine/index.html",
    "revision": "c507442c80f1be2b5a0c981e6e5eff7c"
  },
  {
    "url": "views/Centos/1.html",
    "revision": "0329664c434be3465fd5719685d2e40c"
  },
  {
    "url": "views/Centos/2.html",
    "revision": "155246b8bd645c38bd81af34193bbd11"
  },
  {
    "url": "views/echarts/1.html",
    "revision": "aed94aa4479912cf0cc0bf49a61c81ca"
  },
  {
    "url": "views/elasticSearch/1.html",
    "revision": "16737adff9adeee0ab57434fa1078b4e"
  },
  {
    "url": "views/Html5/1.html",
    "revision": "42e0f4dd7e075d976e30a37fff30317a"
  },
  {
    "url": "views/JavaScript/1.html",
    "revision": "fd8c4463d276274cc93cdda246279f93"
  },
  {
    "url": "views/JavaScript/2.html",
    "revision": "63c128e4e0a3f5534662eabc20a8b075"
  },
  {
    "url": "views/MySql/1.html",
    "revision": "8f2a068b4784d8f1f7589dff7a06f33f"
  },
  {
    "url": "views/nginx/1.html",
    "revision": "e555b3140a3af24e9e4171ce35373dee"
  },
  {
    "url": "views/nodejs/1.html",
    "revision": "6b2c22a22edee57ae9b8229d97eec2bb"
  },
  {
    "url": "views/nodejs/2.html",
    "revision": "87f5c0fb5eaa87d284ab430784b217f3"
  },
  {
    "url": "views/other/guide.html",
    "revision": "00ef3c407297bc38a93244c143a74922"
  },
  {
    "url": "views/react/1.html",
    "revision": "595c7adfeffa9ab47f27d04e16e54199"
  },
  {
    "url": "views/vue/1.html",
    "revision": "8305eb199958666733c7d5d44af9b723"
  },
  {
    "url": "views/Wechatapplet/1.html",
    "revision": "2e66fd97819a11942880e8f15c3f2feb"
  },
  {
    "url": "views/win7/1.html",
    "revision": "9c4874d12fc87051938a26e28c54aee5"
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
