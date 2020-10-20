<template>
  <footer class="footer">
    <ul v-if="copyright" class="copyright">
      <li v-for="item in copyright" :key="item.text" class="copyright-item">
        <i
          >{{ item.text }} | Powered by
          <a href="https://vuepress.vuejs.org/zh/" target="_blank"
            >VuePress</a
          ></i
        >
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  computed: {
    copyright() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.copyright) || []
      );
    },
  },
};
</script>

<style lang="stylus" scoped>
ol, ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer {
  min-height: 60px;
  box-sizing: border-box;
  background-color: $footerBgColor;
  display: flex;
  padding: 15px 32px;
  transition: margin-left 500ms ease-in;
  justify-content: center;
  align-items: center;

  .copyright {
    display: flex;
    justify-content: flex-end;

    .copyright-item {
      flex: 0 0 auto;
      padding: 0 10px;
      position: relative;
      line-height: 12px;
      border-right: 1px solid $footerColor;

      &:last-child {
        border-right: none;
      }

      a {
        font-size: 12px;
        color: $footerColor;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
          color: rgba(255, 255, 255, 0.9);
        }
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .footer {
    min-height: 100px;
    flex-direction: column;

    .copyright {
      display: block;

      .copyright-item {
        line-height: 1;
        border-right: none;
        text-align: center;
      }
    }
  }
}
</style>
