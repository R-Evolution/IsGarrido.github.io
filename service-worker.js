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
    "revision": "aaca250f0a3b4ba30457864ea03c1fa9"
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
    "url": "assets/js/5.765da087.js",
    "revision": "9beef0666b199a11a991172b3c88f941"
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
    "url": "assets/js/app.ebfef5cb.js",
    "revision": "fa2cd9a0bfd6a168bad7c85a28621ebb"
  },
  {
    "url": "blog/entry.html",
    "revision": "15d98f7ba600b4dc0c7f2db84a8f5005"
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
    "revision": "a97c9d7c1c65067715c61228f1687e15"
  },
  {
    "url": "documents/TFM.html",
    "revision": "fbeb54abb76a0e66770eedcc74b30d04"
  },
  {
    "url": "en/guide/assets.html",
    "revision": "fbda28aec6a57057ca9297a36b9459a5"
  },
  {
    "url": "en/guide/basic-config.html",
    "revision": "dada960edc7b677d9019503d33e34a00"
  },
  {
    "url": "en/guide/custom-themes.html",
    "revision": "49656274b91d061dfd2d627e8412eef9"
  },
  {
    "url": "en/guide/deploy.html",
    "revision": "69deb1b7e97a0d9e9464d8c631c49bbb"
  },
  {
    "url": "en/guide/getting-started.html",
    "revision": "c3a145752d2dc4eeee4db325fa45655d"
  },
  {
    "url": "en/guide/i18n.html",
    "revision": "c016d55b81db2b8bd6553c42eb00e6e5"
  },
  {
    "url": "en/guide/index.html",
    "revision": "26ae4d1eb31b988f406c9a2731e46126"
  },
  {
    "url": "en/guide/markdown.html",
    "revision": "bb098c08727b314a9ad1a6cee9dcfba2"
  },
  {
    "url": "en/guide/using-vue.html",
    "revision": "5181bafe5b97636e46c7541d9bbf3d7d"
  },
  {
    "url": "en/index.html",
    "revision": "8261210cd613c5542d8c229b10e03789"
  },
  {
    "url": "guide/assets.html",
    "revision": "9db8df02c05e5fa926c05c52c44c40f3"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "9778f144dfd0d87265c38f7e1f440658"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "accd80cda9937d4520c8bffde8e4d00b"
  },
  {
    "url": "guide/deploy.html",
    "revision": "2d05329327a789691d9335482e7bb94a"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "3f64681fd8a70b5d60d50eac457a87ea"
  },
  {
    "url": "guide/i18n.html",
    "revision": "5088e629f760f579db9cfc8c09ca4b15"
  },
  {
    "url": "guide/index.html",
    "revision": "e17155ce3aa11ea49b20431558b9c06a"
  },
  {
    "url": "guide/markdown.html",
    "revision": "05a8c5349b7145808409d3ca5827efd9"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "ff92cdebc7a8e20b48e23bedd70c1f11"
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
    "revision": "7cf47d990f09d6bde75aff56a607fdb8"
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
    "revision": "1a0e6f80aedc17ce038eb4b1c95ca9ca"
  },
  {
    "url": "resources/usability.html",
    "revision": "725320d6e7887d1716f9aa5efec906ae"
  },
  {
    "url": "whoami/index.html",
    "revision": "f0971def2045b96bf91b45f7f9dc7882"
  },
  {
    "url": "whoami/tech.html",
    "revision": "a98cf80e5029f9888a63927683f1f86b"
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
