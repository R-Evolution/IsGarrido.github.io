module.exports = {

  dest: 'vuepress',

  // Locale
  locales: {
    '/': {
      // Template
      lang: 'es-ES',
      title: 'Ismael Garrido Muñoz - Portfolio ES',
      description: 'Portfolio'
    },
    '/en/': {
      // Template
      lang: 'en-EN',
      title: 'Ismael Garrido Muñoz - Portfolio EN',
      description: 'Portfolio'
    }
  },

  // HEADER TAGS
  head: [
    // CUSTOM
    ['meta', { charset: 'utf-8'}],
    ['meta', { name: 'viewport', content: "width=device-width, initial-scale=1"}],
    ['script', { src: 'https://use.fontawesome.com/releases/v5.1.0/js/all.js'}],

    // VUE
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,

  themeConfig: {
    repo: 'IsGarrido/IsGarrido',
    editLinks: true,
    docsDir: 'docs',

    locales: {
      '/': {
        label: 'Español',
        selectText: 'Idioma',
        editLinkText: 'Editar en GitHub',
        lastUpdated: 'Última actualización',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          {
            text: 'Guia',
            link: '/guide/',
          },
          {
            text: 'Config Reference',
            link: '/config/'
          },
          {
            text: 'Default Theme Config',
            link: '/default-theme-config/'
          },
          {
            text: 'Changelog',
            link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
          }
        ],
        sidebar: {
          '/guide/': genSidebarConfig('Guia')
        }
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          {
            text: 'Guide',
            link: '/guide/',
          },
          {
            text: 'Config Reference',
            link: '/config/'
          },
          {
            text: 'Default Theme Config',
            link: '/default-theme-config/'
          },
          {
            text: 'Changelog',
            link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
          }
        ],
        sidebar: {
          '/guide/': genSidebarConfig('Guide')
        }
      },
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n',
        'deploy'
      ]
    }
  ]
}
