module.exports =() => {
  return {
    extend: '@vuepress/blog',

    extendPageData(pageCtx) {
      if (!pageCtx.frontmatter.lang) {
        pageCtx.frontmatter.lang = 'zh-CN'
      }
    },
  }
}