module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '锈蚀花火',
      description: '锈蚀花火的个人博客'
    },
  },

  themeConfig: {
    logo: '/logo.ico',

    locales: {
      '/': {
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
              title: 'GitHub Pages的搭建',
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

  }

}