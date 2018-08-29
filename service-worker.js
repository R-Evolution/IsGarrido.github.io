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
    "revision": "277e20908edb6d40aeff1a93958335d6"
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
    "url": "assets/js/app.4b3258af.js",
    "revision": "a2cda7b33dd732c4b41924bfb56569a5"
  },
  {
    "url": "blog/entry.html",
    "revision": "fc32b188cd405600a2b41d03ba65902d"
  },
  {
    "url": "css/bulma.css",
    "revision": "622a639bd8c06b4f16510775ff12d117"
  },
  {
    "url": "css/custom.css",
    "revision": "3ed21af0c0908438c75692b8037282a8"
  },
  {
    "url": "documents/TFG.html",
    "revision": "8df8df300c37e23b956387757699ceb5"
  },
  {
    "url": "documents/TFM.html",
    "revision": "097ba3eca34acc6f5d83a746079570f3"
  },
  {
    "url": "en/guide/assets.html",
    "revision": "72e7e74190100b26e452f5e03e55f33a"
  },
  {
    "url": "en/guide/basic-config.html",
    "revision": "b9ad51fc2061529a11d7d3128959c670"
  },
  {
    "url": "en/guide/custom-themes.html",
    "revision": "7851deca99c77df22238bf5f0e83feb2"
  },
  {
    "url": "en/guide/deploy.html",
    "revision": "c3a2a0cf50b8eebc4df6cb3032879c33"
  },
  {
    "url": "en/guide/getting-started.html",
    "revision": "33af304ec4d90c6fdf6e229af247ba8d"
  },
  {
    "url": "en/guide/i18n.html",
    "revision": "5ab67f2167f382a21ee195c22c6ae616"
  },
  {
    "url": "en/guide/index.html",
    "revision": "6b14f62079c1c2bc37265dd4abf857ca"
  },
  {
    "url": "en/guide/markdown.html",
    "revision": "dc11cff6da028f9361ef72ad934453a1"
  },
  {
    "url": "en/guide/using-vue.html",
    "revision": "b677dc156d92a3fd6b18c022f7a78a2b"
  },
  {
    "url": "en/index.html",
    "revision": "f719d56d66a09135d2fca5d4feff68d0"
  },
  {
    "url": "guide/assets.html",
    "revision": "24fb588f18a5fb749a7e5b9973e6f26e"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "e75fe13092d1ea6bd61e2bf21179f7db"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "571b51906d5854da899f9d7983b4cdd6"
  },
  {
    "url": "guide/deploy.html",
    "revision": "cf72fae06b32c42dbfa1f4c613505e16"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "b7250f95244d09e1ad4e13b2943a86f6"
  },
  {
    "url": "guide/i18n.html",
    "revision": "22b654f893e9ffabe37f25a31ffaefd9"
  },
  {
    "url": "guide/index.html",
    "revision": "668c840285d56662764ec5c8ac3a4c50"
  },
  {
    "url": "guide/markdown.html",
    "revision": "67c3ef891015ffb794bcbe1ed706e87f"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "7100b7fcd8ef9b5feeb8375c4983963a"
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
    "revision": "087a87703bd55580b19f547f26a516ae"
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
    "revision": "e8f5108a3cc43b6da5a7f09d1dce109a"
  },
  {
    "url": "resources/usability.html",
    "revision": "43daa59d42d6eca2e1f9ac3ab78bdc59"
  },
  {
    "url": "whoami/index.html",
    "revision": "d1f1515567faaaed805915346b47482e"
  },
  {
    "url": "whoami/tech.html",
    "revision": "4578aa51bfa727c4026d4d79a8946189"
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
