---
title: 主页
summary: TohckyToki的个人博客
---

## 欢迎来到我的个人博客

### 这里主要用来分享一些个人学习过程的总结

- 关于作者

  由于作者主要从事.Net开发，所以技术分享主要以.Net和Windows相关为主，大概会包括以下部分，.Net平台各种语言的学习经验，Powershell，AutoHotKey和各种Windows软件使用

- 关于文章

  由于技术解决方案大多具有时效性，所以不能保证所有内容都完全正确，文章会注明写作日期，请查看文章之前，先确定内容是否已经过时。如果已经过时，可以尝试联系作者更新，但是无法保证一定会更新。

<div class="start-button">
  <router-link to="/blogs/">查看文章列表 →</router-link>
</div>

<style scope lang="stylus">
$startButtonColor = lightgray

.start-button
  margin-top: 30px;
  > a
    cursor: pointer;
    border-width: 2px;
    border-style: solid;
    padding: 10px;
    border-radius: 10px;
    outline: none;
    border-color: $startButtonColor;
    color: $startButtonColor;
    text-decoration: blink;
    &:hover
      border-color: $accentColor;
      color: $accentColor;
      text-decoration: blink !important;
</style>