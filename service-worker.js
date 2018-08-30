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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6fa91f0aebf6709580038d56d552884c"
  },
  {
    "url": "assets/css/0.styles.48fe940e.css",
    "revision": "28466d23b08865a6a03810511abe401e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.73e87c51.js",
    "revision": "5e199aec0b86afe683374ea33c14e7a4"
  },
  {
    "url": "assets/js/11.1166f9e3.js",
    "revision": "7c867e4ed8ce2ac336237f10dfdd88f8"
  },
  {
    "url": "assets/js/12.6c909ec7.js",
    "revision": "8fd6576ab3ccb31f46b2f743a4090d11"
  },
  {
    "url": "assets/js/13.4bba6153.js",
    "revision": "1c2663ad5eb376d0d361257d563ec7cc"
  },
  {
    "url": "assets/js/14.5a5071c5.js",
    "revision": "8b91e55b9e3f5abbf092d46ff37cc5d7"
  },
  {
    "url": "assets/js/15.58541da6.js",
    "revision": "cc036702fe8a7d66491effb90a284f97"
  },
  {
    "url": "assets/js/16.bff25cc5.js",
    "revision": "35cf3025d241445eeb81dfa5d462c58e"
  },
  {
    "url": "assets/js/17.94edefa0.js",
    "revision": "70c0aef4676e25343179bbbcf585f245"
  },
  {
    "url": "assets/js/18.e378c567.js",
    "revision": "385338dba070fe30add5f2949facecfb"
  },
  {
    "url": "assets/js/19.df55366d.js",
    "revision": "69542c518ad924009b04748c9c9f0ca1"
  },
  {
    "url": "assets/js/2.bf09ab3e.js",
    "revision": "93b008680a27e9c605ab21eb314d9066"
  },
  {
    "url": "assets/js/20.ed54525e.js",
    "revision": "81e767157232b68b68f53fe6ff9100fb"
  },
  {
    "url": "assets/js/21.09a50083.js",
    "revision": "64ea2c1d88015372784863a62ea22632"
  },
  {
    "url": "assets/js/22.6b1f36bb.js",
    "revision": "cc65eec10ed055e2d480143fbff64e7e"
  },
  {
    "url": "assets/js/23.78be7731.js",
    "revision": "a07774c2661738cdb701da79d115a503"
  },
  {
    "url": "assets/js/24.3988803f.js",
    "revision": "b63ca10135222c09ebbe719552c920cb"
  },
  {
    "url": "assets/js/25.c617549b.js",
    "revision": "52a3af446f3efde81b4c8c5a600728e9"
  },
  {
    "url": "assets/js/26.d7749bfc.js",
    "revision": "51ef849b6b5407b838e22e0da2e81d7b"
  },
  {
    "url": "assets/js/27.817fe9d7.js",
    "revision": "d462219d0146b4ac9e22b851bc128217"
  },
  {
    "url": "assets/js/28.3c7e361d.js",
    "revision": "62b50884d54f41ba03dccd9355ee447f"
  },
  {
    "url": "assets/js/29.21812e02.js",
    "revision": "cad64b0c6869591a22008615dc8af9d9"
  },
  {
    "url": "assets/js/3.fd781a9c.js",
    "revision": "39561123a1aa16af1f104d485fddfe9a"
  },
  {
    "url": "assets/js/30.b443b204.js",
    "revision": "d181d22b32782f9c0b014d42656bbcf2"
  },
  {
    "url": "assets/js/31.435f0ef8.js",
    "revision": "bba3672eed32f0939229c69af76a7049"
  },
  {
    "url": "assets/js/32.73ec3843.js",
    "revision": "b883d17aa69a83f5abba10a899d07763"
  },
  {
    "url": "assets/js/33.9382bc60.js",
    "revision": "a4afb7fa3d9242d200ba74401a61ef0a"
  },
  {
    "url": "assets/js/34.cf3d1860.js",
    "revision": "ef76d40c2bb141b06ba02935cbb8b1e0"
  },
  {
    "url": "assets/js/35.38501a11.js",
    "revision": "a349cc4eb7b39088fe157e48d33ef8f8"
  },
  {
    "url": "assets/js/36.a6b994b6.js",
    "revision": "d7a1d0a5778fee65076c8bde6d0c269e"
  },
  {
    "url": "assets/js/4.6511e6ac.js",
    "revision": "90b8bd1c41f355c501581c29075b784e"
  },
  {
    "url": "assets/js/5.2d97badf.js",
    "revision": "db9d422f5486200479fe762e1f806924"
  },
  {
    "url": "assets/js/6.522f4b53.js",
    "revision": "472ffd963cd19dba883fb8f01bd6bb22"
  },
  {
    "url": "assets/js/7.f5a3ad38.js",
    "revision": "ed172506846a4e7438856af3929506d8"
  },
  {
    "url": "assets/js/8.ada7d9f0.js",
    "revision": "b14e68eb695b08fa92b62852dfa08ed0"
  },
  {
    "url": "assets/js/9.6cf2b15e.js",
    "revision": "ff20a5ab2fdad33f649f2a731caa35bd"
  },
  {
    "url": "assets/js/app.093c58d7.js",
    "revision": "0d4bf2360d8707ccbd0f2464aaac99c0"
  },
  {
    "url": "blog/entry.html",
    "revision": "d510491749f7621ff4ff3ff8a7e37034"
  },
  {
    "url": "css/bulma.css",
    "revision": "622a639bd8c06b4f16510775ff12d117"
  },
  {
    "url": "css/custom.css",
    "revision": "bccb02045061feaaadcf7378c1ce422e"
  },
  {
    "url": "documents/TFG.html",
    "revision": "3503c9b84bf5e7046300407fe449a257"
  },
  {
    "url": "documents/TFM.html",
    "revision": "47d2d1d337998ffff4ebb6d017ec74c3"
  },
  {
    "url": "en/guide/assets.html",
    "revision": "466b8b7c142f7f5086c8b67cac545291"
  },
  {
    "url": "en/guide/basic-config.html",
    "revision": "ab45be638c238e74a9033159961be098"
  },
  {
    "url": "en/guide/custom-themes.html",
    "revision": "b378eb5f8b1040f594fac52a0e088113"
  },
  {
    "url": "en/guide/deploy.html",
    "revision": "3fad5cb18e0fa775f43cca69f15cd020"
  },
  {
    "url": "en/guide/getting-started.html",
    "revision": "5925a7caa435470ffd801209a3289f74"
  },
  {
    "url": "en/guide/i18n.html",
    "revision": "09eb0854b04d420046f3c6cc9abcac77"
  },
  {
    "url": "en/guide/index.html",
    "revision": "4a89f4ab6edf6b73d3d9713bd74a8526"
  },
  {
    "url": "en/guide/markdown.html",
    "revision": "f744cb10c68b69f7bf6c58f655495825"
  },
  {
    "url": "en/guide/using-vue.html",
    "revision": "83b7f375e33d7d8bd2ece14fc54864b9"
  },
  {
    "url": "en/index.html",
    "revision": "82aaf2d20ce82594b221576f2cbd5e5b"
  },
  {
    "url": "guide/assets.html",
    "revision": "c04b783833cfb28d9f61dc4be30f6e06"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "f5292532091d8e35fedc7d71fc2776a3"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "e13f9e2f2d30d075119ae01d97f96940"
  },
  {
    "url": "guide/deploy.html",
    "revision": "40827dce76644b45b5018754e809cabb"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "d5d0e71415610f4f2cdc6c45295a9c42"
  },
  {
    "url": "guide/i18n.html",
    "revision": "492fb1e1062a98973b0eedbbd4b31f87"
  },
  {
    "url": "guide/index.html",
    "revision": "328a1ad68bdd2d8bd7e0c49a4387bf1a"
  },
  {
    "url": "guide/markdown.html",
    "revision": "650fd069643ec339e4e8c8ed852419d8"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "e6df3d2e826ccc94533e62a5cb76acb0"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "heroback.jpg",
    "revision": "214a85d872acfc789bee191789c15332"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "ff5430505af09e2b04142fa88a306c8c"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "poc/phantomjs.html",
    "revision": "a0fcfeb3fc8290e61c384f7e26a29e93"
  },
  {
    "url": "resources/usability.html",
    "revision": "100ae9b27c9bf4b9a602b709f55e2e18"
  },
  {
    "url": "whoami/index.html",
    "revision": "5b2b351b9baa99b8978038b65d92766a"
  },
  {
    "url": "whoami/tech.html",
    "revision": "962491df513af87da89ccde4b46313e9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
