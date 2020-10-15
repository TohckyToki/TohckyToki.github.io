<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404</h1>

      <blockquote>{{ getMsg() }}</blockquote>

      <RouterLink to="/">
        回到主页
      </RouterLink>
    </div>
  </div>
</template>

<script>
const msgs = [
  `这里什么也没有(@_@)`,
  `你是怎么发现这里的( •̀ ω •́ )✧`,
  `404哦Ψ(￣∀￣)Ψ`,
  `似乎你点到了不该点到的地方(╯°□°）╯︵ ┻━┻`
]
export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>