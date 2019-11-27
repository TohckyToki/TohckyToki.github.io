<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css">
    <div id="gitalk-container"></div>
    <script id="script" src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"></script>
</template>
<script>
export default {
  name: 'comment',
  data() {
    return {};
  },
  mounted() {
    document.querySelector('#script').onload = () => {
      new Gitalk({
        clientID: '75b92e7b2532bf0770d1',
        clientSecret: '6e3e2e8bb9d0bc09b082e95a699554dc14353c88',
        repo: 'TohckyToki.github.io',
        owner: 'TohckyToki',
        // 这里接受一个数组，可以添加多个管理员
        admin: ['TohckyToki'],
        // id 用于当前页面的唯一标识，一般来讲 pathname 足够了，
       
        // 但是如果你的 pathname 超过 50 个字符，GitHub 将不会成功创建 issue，此情况可以考虑给每个页面生成 hash 值的方法.
        id: location.pathname,
        distractionFreeMode: false,
      }).render('gitalk-container');
    };
  },
};
</script>