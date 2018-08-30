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
    "revision": "714960e180fa8b84d0e02d5cc3fa91c9"
  },
  {
    "url": "assets/css/0.styles.05cb3bcf.css",
    "revision": "f7401d00278a2c47be796475f5ff5134"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.63c67029.js",
    "revision": "a8e44590253af9fbdec91bc81edc62fd"
  },
  {
    "url": "assets/js/11.71d95ab7.js",
    "revision": "5f78dfd2d3ba48d7b32d4304051909d7"
  },
  {
    "url": "assets/js/12.f874ce8e.js",
    "revision": "24dfdb857da54a92af1f36c8817bedf9"
  },
  {
    "url": "assets/js/13.8f2c7b78.js",
    "revision": "0cbb38d74542baf233fea254619f875e"
  },
  {
    "url": "assets/js/14.f8277a85.js",
    "revision": "0f09bcac7ed3a5c3e97ed7100ee4a35e"
  },
  {
    "url": "assets/js/15.8ee337d5.js",
    "revision": "2602f4cf0311d373c08317fac04e53d8"
  },
  {
    "url": "assets/js/16.164e3972.js",
    "revision": "e431b3d3b8cd83661ec8e06efccaf3f3"
  },
  {
    "url": "assets/js/17.894cbac4.js",
    "revision": "d577891af8340a6ec3157288a4d185ed"
  },
  {
    "url": "assets/js/18.47fdae0f.js",
    "revision": "0ae14fad0282d22c9be3aa1145c0bb07"
  },
  {
    "url": "assets/js/19.1974180d.js",
    "revision": "8752bb73bf0e84135df81abe84f7bdd4"
  },
  {
    "url": "assets/js/2.016a7370.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.9b73326f.js",
    "revision": "79e715cd1d6d31cabd5b7871b5b139af"
  },
  {
    "url": "assets/js/21.285d064a.js",
    "revision": "64ba7766a3a4ae3a722a98eac11886f2"
  },
  {
    "url": "assets/js/22.947bb148.js",
    "revision": "351ea9069f74b29a9be55cf5c880c4a5"
  },
  {
    "url": "assets/js/23.14be1363.js",
    "revision": "32aa9be1b687de2fe49f7959a0a25c23"
  },
  {
    "url": "assets/js/24.2d42fff5.js",
    "revision": "60023844db1da701405cf38eabd6a419"
  },
  {
    "url": "assets/js/25.970f335c.js",
    "revision": "d5216cb604efe82fb25439b0f3ce04dc"
  },
  {
    "url": "assets/js/26.87c8072a.js",
    "revision": "2815793669ce91ef9fb4f8c34eb6b10b"
  },
  {
    "url": "assets/js/27.c32a0387.js",
    "revision": "5e25c7069abd3fb1fa0dc45be32c07ab"
  },
  {
    "url": "assets/js/28.94026b1b.js",
    "revision": "6c9c3ce0553b3b8fe67d0fae981865ae"
  },
  {
    "url": "assets/js/29.14ee46e2.js",
    "revision": "041915cc5971be5b962b82a2f6c889ec"
  },
  {
    "url": "assets/js/3.8d046e46.js",
    "revision": "47bf5250b89cb9f2fbbcd77eb3529661"
  },
  {
    "url": "assets/js/30.ebb02928.js",
    "revision": "0a190f8ad995490bcba13e4d01a2a77e"
  },
  {
    "url": "assets/js/31.e5ef1566.js",
    "revision": "798ff8ffabe4f86c21e9a381f35af14e"
  },
  {
    "url": "assets/js/32.8ed9ef08.js",
    "revision": "d45d6cf974264f253e7b24a53c797bd6"
  },
  {
    "url": "assets/js/33.191c70c9.js",
    "revision": "8a7109971f2090e5e88c756f3db73236"
  },
  {
    "url": "assets/js/34.062ad42c.js",
    "revision": "fbd65d99bb8a7b37db7b44234991f818"
  },
  {
    "url": "assets/js/35.0b36b84b.js",
    "revision": "0697e3a3d3883df835d417d3d5cf9a7a"
  },
  {
    "url": "assets/js/36.addd19b6.js",
    "revision": "37c1dcef1a9596488833dd8b3ad0f09c"
  },
  {
    "url": "assets/js/37.6e2c61e5.js",
    "revision": "f4c51baa5a930266dbdd31d2d6509536"
  },
  {
    "url": "assets/js/38.f187c3c8.js",
    "revision": "8bb65bd078a0c0f8e05738a07e5b3691"
  },
  {
    "url": "assets/js/39.51f4e1b6.js",
    "revision": "8f431ce5c1263f32cab7acabb8110760"
  },
  {
    "url": "assets/js/4.374e6313.js",
    "revision": "db92a6917f50730147e576afbfad8082"
  },
  {
    "url": "assets/js/40.48960943.js",
    "revision": "e07a763e3be4771e4ede3ca792ec3c25"
  },
  {
    "url": "assets/js/41.920448be.js",
    "revision": "6d6fe9579fe1a5efc51cfc92180cd146"
  },
  {
    "url": "assets/js/42.0af23958.js",
    "revision": "0db26f9d201c2b72eab3d70dc200bca7"
  },
  {
    "url": "assets/js/43.cde687ac.js",
    "revision": "b3ab21ecc4ac4720488f8b0875d92e55"
  },
  {
    "url": "assets/js/5.dab2262e.js",
    "revision": "03f2a664e9f057c8854396b176638526"
  },
  {
    "url": "assets/js/6.9ce83e4f.js",
    "revision": "4bf930da067a593e1a998bc5488ac72b"
  },
  {
    "url": "assets/js/7.b2672887.js",
    "revision": "7edd7643e47e478e7d7ba31f3096816d"
  },
  {
    "url": "assets/js/8.ee554375.js",
    "revision": "7c245ce3aaa2200216f44e32e6c20b92"
  },
  {
    "url": "assets/js/9.60b05d4f.js",
    "revision": "009f68f6ee2baf0e4ec2d5ac57249684"
  },
  {
    "url": "assets/js/app.6e092f41.js",
    "revision": "11e011c050f9a45456ee43fc77e4afa4"
  },
  {
    "url": "blog/entry.html",
    "revision": "49668f39d1db98c584c8d8ff7d226eee"
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
    "revision": "bf679d7d0d0a1fd7e03c7bb7f95ecfec"
  },
  {
    "url": "documents/TFM.html",
    "revision": "6b7ec7cb934dff0676b4c464b4b6f825"
  },
  {
    "url": "en/blog/entry.html",
    "revision": "651529cac706f7c627697b13755ab1fc"
  },
  {
    "url": "en/documents/TFG.html",
    "revision": "1f9a7684ace124db2378bdca54af3e07"
  },
  {
    "url": "en/documents/TFM.html",
    "revision": "a30d047b037e473706feab04fa7efa74"
  },
  {
    "url": "en/guide/assets.html",
    "revision": "6cf94c1bfcb91ff09d7389121291e2b7"
  },
  {
    "url": "en/guide/basic-config.html",
    "revision": "c16f1da993b6ade15ca3292ad9dd65a6"
  },
  {
    "url": "en/guide/custom-themes.html",
    "revision": "07ea6175854dd9400f53f9270083aa67"
  },
  {
    "url": "en/guide/deploy.html",
    "revision": "1f84d92d3fb94fffa3d2550fd8f82818"
  },
  {
    "url": "en/guide/getting-started.html",
    "revision": "85de8ff02d0419566baa960a1460fba4"
  },
  {
    "url": "en/guide/i18n.html",
    "revision": "a3d2d7866f014798788fcc34fd26626b"
  },
  {
    "url": "en/guide/index.html",
    "revision": "1458697c583f5fd3b958d9258effec02"
  },
  {
    "url": "en/guide/markdown.html",
    "revision": "f26d3d0340e48b42b7cb1869ba855a88"
  },
  {
    "url": "en/guide/using-vue.html",
    "revision": "f97dcaf849797d0592a07fb9eb1bfefd"
  },
  {
    "url": "en/index.html",
    "revision": "00f383ef0aa4b8a81df33b930d3a6dab"
  },
  {
    "url": "en/poc/phantomjs.html",
    "revision": "78b256328f314249b63c4d2897143356"
  },
  {
    "url": "en/resources/usability.html",
    "revision": "2b726d5df8f64b8e401834de8ae688fb"
  },
  {
    "url": "en/whoami/index.html",
    "revision": "75c076d69c160066dd0e1cf13486f698"
  },
  {
    "url": "en/whoami/tech.html",
    "revision": "a543b780eb2c664c34fa67f9c978298e"
  },
  {
    "url": "guide/assets.html",
    "revision": "270cf6e22a20bf9beec2eb0acda989fd"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "fc4f0e942aa1daff314b422f482b639b"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "7425693cb4a7e24883056ff7d09d595d"
  },
  {
    "url": "guide/deploy.html",
    "revision": "d7baa6fc9f771b9be46f04ad60fb5c97"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "609036f10718dd879e102dbefae7710b"
  },
  {
    "url": "guide/i18n.html",
    "revision": "c9d22bf164008c219a71f926cec5e947"
  },
  {
    "url": "guide/index.html",
    "revision": "6b14c7c8465e589e791959747b8efb48"
  },
  {
    "url": "guide/markdown.html",
    "revision": "a3534164644a69197f73e7db01aa38b8"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "7a39df1e73dcc2812652efd492115395"
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
    "revision": "27fcf70b35a4439c4a1bee6cc691f64d"
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
    "revision": "07d511054a69d08e298c2ba76a2d641e"
  },
  {
    "url": "resources/usability.html",
    "revision": "19f3bb13b559abfa61b7326593d55cd2"
  },
  {
    "url": "whoami/index.html",
    "revision": "e8723beda56706f74ec8d93014f44636"
  },
  {
    "url": "whoami/tech.html",
    "revision": "080e04b71e4953f651558b0c92c80d9c"
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
