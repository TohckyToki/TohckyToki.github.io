<template>
  <div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css" />
    <div id="gitalk-container"></div>
  </div>
</template>
<script>
export default {
  name: "comment",
  data() {
    return {};
  },
  mounted() {
    const Gitalk = require("gitalk")
    new Gitalk({
      clientID: "75b92e7b2532bf0770d1",
      clientSecret: "6e3e2e8bb9d0bc09b082e95a699554dc14353c88",
      repo: "TohckyToki.github.io",
      owner: "TohckyToki",
      admin: ["TohckyToki"],
      id: location.pathname,
      distractionFreeMode: false
    }).render("gitalk-container");
  }
};
</script>