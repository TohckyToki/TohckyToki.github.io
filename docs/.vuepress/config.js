module.exports = {
  plugins: ['@vuepress/back-to-top'],

  title: 'YohnV',
  description: 'YohnV的个人博客',

  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }]
  ],

  theme: '@vuepress/blog',

  themeConfig: {
    logo: '/logo.ico',
    smoothScroll: true,
    dateFormat: 'YYYY-MM-DD',

    directories: [
      {
        id: 'blogs',
        dirname: '_blogs',
        path: '/blogs/',
        title: '博客',
        itemPermalink: '/blog/:year/:month/:day/:slug',
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
        text: '标签',
        link: '/tag/',
      },
    ],

    globalPagination: {
      prevText:'上一頁', // Text for previous links.
      nextText:'下一頁', // Text for next links.
      layout:'Pagination', // Layout for pagination page
    },

    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/TohckyToki/TohckyToki.github.io',
        },
        {
          type: 'mail',
          link: 'mailto:yuengfu.v@outlook.com',
        }
      ],

      copyright: [
        {
          text: 'Copyright © 2019 YuengFu | Built using VuePress',
          link: '/',
        },
      ],
    },
  },

  markdown: {
    lineNumbers: true
  }

}