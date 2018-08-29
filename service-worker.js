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
    "revision": "1e50b6e97011ff24b391dd483006eb3c"
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
    "url": "assets/js/10.6dcd21e0.js",
    "revision": "f0dd03de68f7df14bccb2763a0d43437"
  },
  {
    "url": "assets/js/11.c146d612.js",
    "revision": "49625f79ce89f65795782174d7bbb651"
  },
  {
    "url": "assets/js/12.2b84d099.js",
    "revision": "d49fd6c7114fd814eb0fc60a3cefcebc"
  },
  {
    "url": "assets/js/13.3898730f.js",
    "revision": "f0303edea36eb125c51da5913d2063fb"
  },
  {
    "url": "assets/js/14.f22980ec.js",
    "revision": "b2266e526eb16869d8b983577c25adab"
  },
  {
    "url": "assets/js/15.18b93382.js",
    "revision": "7928c4736e11208e685651706645d7e5"
  },
  {
    "url": "assets/js/16.f1494384.js",
    "revision": "c95977c9c969b92cde7d79db5339d7e6"
  },
  {
    "url": "assets/js/17.ff44d3de.js",
    "revision": "5f1bda16fef28ae1bd58ea80d7cca41a"
  },
  {
    "url": "assets/js/18.2ac7b95d.js",
    "revision": "d020398e430ec286b101c3b34da73a04"
  },
  {
    "url": "assets/js/19.f9f46fbd.js",
    "revision": "a7e05a8a64ff9cb238e6565d2ff33f24"
  },
  {
    "url": "assets/js/2.bf09ab3e.js",
    "revision": "93b008680a27e9c605ab21eb314d9066"
  },
  {
    "url": "assets/js/20.0cdce4b2.js",
    "revision": "9fa00cadb5be9d2bb29d0b78ac07a223"
  },
  {
    "url": "assets/js/21.01d82c1a.js",
    "revision": "3d872b822fec419f838d3a126bc52f10"
  },
  {
    "url": "assets/js/22.7f1fe608.js",
    "revision": "dcb0108334cf03985a3b8ec757d2798c"
  },
  {
    "url": "assets/js/23.4aea4af8.js",
    "revision": "b32a96e5d8c71d478003200a2dff44f9"
  },
  {
    "url": "assets/js/24.8ff90361.js",
    "revision": "85cb7e2b607a2e57b606a4cbe8f96c2b"
  },
  {
    "url": "assets/js/25.6ce93568.js",
    "revision": "3a5683cea024e5ec604a1bd3252c72f4"
  },
  {
    "url": "assets/js/26.de4fdf8b.js",
    "revision": "78824fc38f53e313657875ce30795630"
  },
  {
    "url": "assets/js/27.c5a78da2.js",
    "revision": "7486e364b0d64070d0ea9e5950c9c56e"
  },
  {
    "url": "assets/js/28.aa87a2a9.js",
    "revision": "7d6f6ba96841d5184396bf76e8f5fd55"
  },
  {
    "url": "assets/js/29.c0542410.js",
    "revision": "8de9b7f4915b6d5e7e707fb2bf02a679"
  },
  {
    "url": "assets/js/3.fd781a9c.js",
    "revision": "39561123a1aa16af1f104d485fddfe9a"
  },
  {
    "url": "assets/js/30.b4c0fd05.js",
    "revision": "9cf1810fd36af1862fc469f1d61b8928"
  },
  {
    "url": "assets/js/31.7ae987a1.js",
    "revision": "7133057b46603ab9d1648fa43fdf28eb"
  },
  {
    "url": "assets/js/32.e82a4ca6.js",
    "revision": "ed64062f5dc3c4fb43c36395648ca501"
  },
  {
    "url": "assets/js/33.fe5d365c.js",
    "revision": "973e45a8bcee39cc160e1b12dcd64204"
  },
  {
    "url": "assets/js/34.d208c22c.js",
    "revision": "852a7f4ad1fab940cf644131e1425452"
  },
  {
    "url": "assets/js/35.cfb52dad.js",
    "revision": "786a3af52698cc20e925d7a185f93f83"
  },
  {
    "url": "assets/js/4.3305ce7b.js",
    "revision": "446c9d0169388ec558ca593e6fe79eb9"
  },
  {
    "url": "assets/js/5.7b6cdf3a.js",
    "revision": "2bb899b459034bd1db310f74b08c149e"
  },
  {
    "url": "assets/js/6.2634431a.js",
    "revision": "52667b293b1e8abe4b732bf85fef38cb"
  },
  {
    "url": "assets/js/7.7393e875.js",
    "revision": "60c4132a35d0d0ec5effa6044b0a4486"
  },
  {
    "url": "assets/js/8.73014f0e.js",
    "revision": "7412ac91d10f1d786f607f0e1e92e4f2"
  },
  {
    "url": "assets/js/9.9e6ad04b.js",
    "revision": "775e7df0bebd5a1d875c999c63311a06"
  },
  {
    "url": "assets/js/app.ab3291f1.js",
    "revision": "704b072f1d788a22406f4ea3f8c1bbc3"
  },
  {
    "url": "blog/entry.html",
    "revision": "a3230b4819b5246be67c5add97d6f9b4"
  },
  {
    "url": "css/bulma.css",
    "revision": "622a639bd8c06b4f16510775ff12d117"
  },
  {
    "url": "css/custom.css",
    "revision": "ac383ece35ad30fca30bc750f7288259"
  },
  {
    "url": "documents/TFG.html",
    "revision": "7e5d29fc879279a15aaeed23447a3280"
  },
  {
    "url": "documents/TFM.html",
    "revision": "2fc9600d64fbf78decce992ca54668f8"
  },
  {
    "url": "en/guide/assets.html",
    "revision": "5a5f0c7577e54c1f07603d51f0a4019d"
  },
  {
    "url": "en/guide/basic-config.html",
    "revision": "4ad2baeca2c92dc871f3c23d478f1b58"
  },
  {
    "url": "en/guide/custom-themes.html",
    "revision": "032d7d44f1721fbd8c267e5f1c7cba05"
  },
  {
    "url": "en/guide/deploy.html",
    "revision": "1cd392ef4a9d127ce4fc0e9afdce4865"
  },
  {
    "url": "en/guide/getting-started.html",
    "revision": "de6a6ac6d515cfdae648ea9ab7b23647"
  },
  {
    "url": "en/guide/i18n.html",
    "revision": "94056b8efa49554e32a1b89d70b4e2db"
  },
  {
    "url": "en/guide/index.html",
    "revision": "826f49dcc6f118306a80b9bd6f46e4b2"
  },
  {
    "url": "en/guide/markdown.html",
    "revision": "73ad510d611a9cff37d2dbd472df5d19"
  },
  {
    "url": "en/guide/using-vue.html",
    "revision": "845bdcb905bbead2c33b8c56ee6d9127"
  },
  {
    "url": "en/index.html",
    "revision": "7ec88fbe957bd1fa2ce5e0c3dd52c0d7"
  },
  {
    "url": "guide/assets.html",
    "revision": "49d66524f1603753fa891ac0fbf4ae7f"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "5e8a0c9b8b4c78b0c43df43195f7e85f"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "c718efa39d6e0cb7187de9e2f2603e19"
  },
  {
    "url": "guide/deploy.html",
    "revision": "fd3a8d20828aec68ed91647aa150e813"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "64c601d6c56cf88959eff56076c7b5bf"
  },
  {
    "url": "guide/i18n.html",
    "revision": "5ae92a4e580d9fe68480e837ff1fe656"
  },
  {
    "url": "guide/index.html",
    "revision": "433e2ddcef27986b31bd2b15e9baef07"
  },
  {
    "url": "guide/markdown.html",
    "revision": "295dca5d863e3284d6be804465407233"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "08a4e6edaef5293f8702d05054878c1e"
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
    "revision": "85b89fa36893fb0f7613dc9564082e3f"
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
    "revision": "3896f83a38b044c0d192b5f52c15e138"
  },
  {
    "url": "resources/usability.html",
    "revision": "eefccbc747a6ca21f5402494df463e2d"
  },
  {
    "url": "whoami/index.html",
    "revision": "71698439481b6f8a7acfcdabba9a0033"
  },
  {
    "url": "whoami/tech.html",
    "revision": "2a0fdab3824082d975dfc01c5b336bfb"
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
