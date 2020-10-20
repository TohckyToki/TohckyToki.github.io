module.exports = {
  plugins: [
    '@vuepress/back-to-top',
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-180474738-1'
      }
    ]
  ],

  title: `TohckyToki's Blog`,
  description: 'TohckyToki的个人博客',

  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  themeConfig: {
    profile: '/logo.png',
    smoothScroll: true,
    dateFormat: 'YYYY-MM-DD',

    directories: [
      {
        id: 'blogs',
        dirname: '_blogs',
        path: '/blogs/',
        title: '博客',
        itemPermalink: '/blogs/:year/:month/:day/:slug',
        pagination: {
          lengthPerPage: 10,
        },
      },
      {
        id: 'tools',
        dirname: '_tools',
        path: '/tools/',
        title: '工具',
        itemPermalink: '/tools/:year/:month/:day/:slug',
        pagination: {
          lengthPerPage: 10,
        },
      },
    ],

    nav: [
      {
        text: '博客',
        link: '/blogs/',
      },
      {
        text: '工具',
        link: '/tools/',
      },
    ],

    globalPagination: {
      prevText: '<', // Text for previous links.
      nextText: '>', // Text for next links.
      layout: 'Pagination', // Layout for pagination page
    },

    sideNav: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/TohckyToki',
        },
        {
          type: 'mail',
          link: 'mailto:Tohcky@outlook.com',
        },
      ],
    },

    footer: {
      copyright: [
        {
          text: 'Copyright © 2019 TohckyToki',
          link: '/',
        },
      ],
    },
  },

  markdown: {
    lineNumbers: true
  }

}