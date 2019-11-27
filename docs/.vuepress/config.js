module.exports = {
  plugins: ['@vuepress/back-to-top'],

  locales: {
    '/': {
      lang: 'zh-CN',
      title: '锈蚀花火',
      description: '锈蚀花火的个人博客'
    },
  },

  themeConfig: {
    logo: '/logo.ico',
    smoothScroll: true,

    locales: {
      '/': {
        lastUpdated: '最终更新：',

        nav: [
          { text: '文章', link: '/blog/' },
          { text: 'Github', link: 'https://github.com/TohckyToki/TohckyToki.github.io' },
        ],

        sidebar: {
          '/blog/pwsh/': [
            {
              title: '返回分类',
              path: '/blog/',
            },
            {
              title: 'Powershell入门',
              path: '000001.html',
            },
          ],
          '/blog/other/': [
            {
              title: '返回分类',
              path: '/blog/',
            },
            {
              title: '使用GtiHubPages搭建个人博客',
              path: '000001.html',
            },
          ],
          '/blog/': [
            {
              title: 'Powershell',
              path: '/blog/pwsh/',
            },
            {
              title: '其他',
              path: '/blog/other/',
            },
          ],
        },
      }
    }

  },

  markdown: {
    lineNumbers: true
  }

}