module.exports =(options, ctx) => {
  return {
    extend: '@vuepress/blog',

    extendPageData(pageCtx) {
      if (!pageCtx.frontmatter.lang) {
        pageCtx.frontmatter.lang = 'zh-CN'
      }
    },

    additionalPages: [
      {
         path: '/timeline/',
         frontmatter: {
            layout: 'TimeLine'
         }
      }
    ],

  }
}