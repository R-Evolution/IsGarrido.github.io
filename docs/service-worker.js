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
    "revision": "54b4176a019ee3fe5d71ce97c4f9dafa"
  },
  {
    "url": "assets/css/0.styles.e67848d1.css",
    "revision": "28466d23b08865a6a03810511abe401e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.97081326.js",
    "revision": "79de5b6e555f0690c77288ce98c830a0"
  },
  {
    "url": "assets/js/11.4e229377.js",
    "revision": "a1ca4c9f05fb0976b0e4ecaa0eb6cea6"
  },
  {
    "url": "assets/js/12.d09564fe.js",
    "revision": "c71cb7f2530e91a9488de298388262a0"
  },
  {
    "url": "assets/js/13.d2eedb9c.js",
    "revision": "3e244d1c6cb82f6fa9fe76b878259428"
  },
  {
    "url": "assets/js/14.21fc6f2e.js",
    "revision": "e15e407f5447412edcf0cd9504ceb602"
  },
  {
    "url": "assets/js/15.f6277f6a.js",
    "revision": "b689a6e7b7881a5966178c5650628be3"
  },
  {
    "url": "assets/js/16.785a4056.js",
    "revision": "3648501bd7afd896dc91db6c2b74aa0f"
  },
  {
    "url": "assets/js/17.29b8b6e0.js",
    "revision": "79e989fdc3cc7f0aeb0dc505e0b1e5e1"
  },
  {
    "url": "assets/js/18.e4182333.js",
    "revision": "8b009d45ae51b8f1bff3f77c30451f8a"
  },
  {
    "url": "assets/js/19.854e35b9.js",
    "revision": "585538ff9ee624d14ee11b1e1ac9414a"
  },
  {
    "url": "assets/js/2.bf09ab3e.js",
    "revision": "93b008680a27e9c605ab21eb314d9066"
  },
  {
    "url": "assets/js/20.0cd24770.js",
    "revision": "18c63737dc8b8d7ecc434ed1816ee1fc"
  },
  {
    "url": "assets/js/21.afea7e0e.js",
    "revision": "b29e8dcbcf9b3508ea27e86ef83a4d50"
  },
  {
    "url": "assets/js/22.c3d22d44.js",
    "revision": "f7dfec84897e754d7af463f80469838d"
  },
  {
    "url": "assets/js/23.3f13d7f9.js",
    "revision": "b99aa6f754b83cc01f794b21b97e5a50"
  },
  {
    "url": "assets/js/24.82178993.js",
    "revision": "9ab93ccb270b53645d2d5de59aa391b8"
  },
  {
    "url": "assets/js/25.ad6aea52.js",
    "revision": "b9ed112bf65fbdec6df6c863a4d1fc60"
  },
  {
    "url": "assets/js/26.9f4f49a0.js",
    "revision": "56341199a9a674435516b1b4404a220b"
  },
  {
    "url": "assets/js/27.60f72921.js",
    "revision": "dbff05a6de6853595ca2da1077337257"
  },
  {
    "url": "assets/js/3.39de329d.js",
    "revision": "e9ec48e8162f2d4bee0d939940f39c2a"
  },
  {
    "url": "assets/js/4.3305ce7b.js",
    "revision": "446c9d0169388ec558ca593e6fe79eb9"
  },
  {
    "url": "assets/js/5.5f921164.js",
    "revision": "2fe59b1add67e4efbda2f14de58a51a8"
  },
  {
    "url": "assets/js/6.373217f2.js",
    "revision": "c26cb61b19041b8224dfe6191805dd88"
  },
  {
    "url": "assets/js/7.26e0e9a8.js",
    "revision": "aeec43ae4416f19eed795179eb91297e"
  },
  {
    "url": "assets/js/8.ef56097e.js",
    "revision": "0c874ab98f1f268fd9d69783b1b3c819"
  },
  {
    "url": "assets/js/9.3cd4c21a.js",
    "revision": "827cda40bd7ccc355c8228e2e7d6a8ba"
  },
  {
    "url": "assets/js/app.b4ba90af.js",
    "revision": "74bea39d2a0322495ab26c2e43775a56"
  },
  {
    "url": "css/bulma.css",
    "revision": "622a639bd8c06b4f16510775ff12d117"
  },
  {
    "url": "css/custom.css",
    "revision": "c17659a1884c0d2884b82a2579182761"
  },
  {
    "url": "en/guide/assets.html",
    "revision": "a2c99abbfba4667d3890e13d3413d258"
  },
  {
    "url": "en/guide/basic-config.html",
    "revision": "02b43f49f710fe35fb78d7f143b6afaf"
  },
  {
    "url": "en/guide/custom-themes.html",
    "revision": "ba6cf17f30fe75918fca824cc155011c"
  },
  {
    "url": "en/guide/deploy.html",
    "revision": "7df56a64d1a78246f41fa5b1073c4738"
  },
  {
    "url": "en/guide/getting-started.html",
    "revision": "e8a8b77b3cbad31b283ba8d92a0919e6"
  },
  {
    "url": "en/guide/i18n.html",
    "revision": "6058f3049dcb2f957bfef93e03a16944"
  },
  {
    "url": "en/guide/index.html",
    "revision": "2dfad8e3dc06dc561b47ba0d40033430"
  },
  {
    "url": "en/guide/markdown.html",
    "revision": "8eba7a597df2aba45e45c2160c0f8e78"
  },
  {
    "url": "en/guide/using-vue.html",
    "revision": "0da98d536639e95bac859a0ae2ad31a5"
  },
  {
    "url": "en/index.html",
    "revision": "4208f1f7ff729780f1c9ea4e73562b8d"
  },
  {
    "url": "guide/assets.html",
    "revision": "736bd19a7b10a21a4375b89a13909bf4"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "4f84e43a15ac1ab2b8cb63c82e78d3a4"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "fd192b131d956a77a1636ef65f09bcc2"
  },
  {
    "url": "guide/deploy.html",
    "revision": "8034095bc39d3042f240af2ae1a5a8a0"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "78227a86a1f672ba7b4b4438600d9e6f"
  },
  {
    "url": "guide/i18n.html",
    "revision": "816cbd0c686527a82399026d7aeaf4af"
  },
  {
    "url": "guide/index.html",
    "revision": "f3d6fcadb97fc2cd880b5714dc3dacd8"
  },
  {
    "url": "guide/markdown.html",
    "revision": "3703d7b85a30d01679f3e13aedfd9e58"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "cd155b71c8db42bb3ee199a237a75e34"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
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
    "revision": "59083c43d9c9e760d74ae6b8523f4462"
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
