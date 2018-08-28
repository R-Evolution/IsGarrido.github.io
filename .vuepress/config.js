module.exports = {

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

  // Build
  dest: 'IsGarrido',

  // Links
  themeConfig: {

    repo: 'IsGarrido/IsGarrido',
    editLinks: true,
    docsDir: 'content',


    // ARRIBA
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      }
    ],

    // IZQ
    sidebar: 'auto',
    lastUpdated: 'Last Updated'
    //activeHeaderLinks: false, // Default: true

    //displayAllHeaders: true // Default: false


  }

}
