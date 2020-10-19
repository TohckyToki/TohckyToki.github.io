<template>
  <aside :class="'side-nav ' + sideNavClass">
    <div class="close-button" @click="toggleSideNav"></div>
    <div class="side-content">
      <span class="logo">
        <img src="/logo.png" alt="个人头像" />
      </span>
      <p class="auth-name">TohckyToki<em>(TkTk)</em></p>
    </div>
  </aside>
</template>

<script>
export default {
  data: function () {
    return {
      sideNavClass: "",
      isOpen: window.innerWidth > 1200 ? true : false,

      blogPageCount: 0,
      tagCount: 0
    };
  },
  methods: {
    toggleSideNav() {
      this.isOpen = !this.isOpen;
      this.sideNavClass = this.isOpen ? "manual open" : "manual close";
    },
  },
  mounted() {
    window.onresize = () => {
      if (this.sideNavClass == "") {
        this.isOpen = window.innerWidth > 1200 ? true : false;
      } else {
        this.sideNavClass = "";
      }
    };
    window.vueObject = this;
    window.$frontmatterKey = this.$frontmatterKey

    this.blogPageCount = this.$site.pages.filter(e=>e.relativePath && e.relativePath !== 'index.md').length
    console.log(this.blogPageCount)

  },
};
</script>

<style lang="stylus">
$closeButtonSize = 30px;

.side-nav {
  margin-left: -200px;
  width: 200px;
  transition: margin-left 500ms ease-in;
  min-height: calc(100vh - 60px);
  margin-top: $headerHeight;
  position: fixed;
  top: 0;
  z-index: 5;

  .close-button {
    width: $closeButtonSize;
    height: $closeButtonSize;
    position: absolute;
    top: 0;
    right: 0 - $closeButtonSize;
    background-image: url('../assets/menu.svg');
    background-size: 22px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    background-color: currentColor;

    &:hover {
      background-color: #a9a9a9;
    }
  }

  .side-content {
    position: fixed;
    width: 200px;
    height: calc(100vh - 60px);
    top: $headerHeight;
    background: currentColor;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-flow: wrap;
    align-content: flex-start;

    .logo {
      margin: 1rem;
      width: 6rem;
      height: 6rem;
      position: relative;
      cursor: pointer;

      &::before {
        content: '';
        width: 6rem;
        height: 6rem;
        background: repeating-linear-gradient(60deg, gray, transparent 100%);
        transition: all 500ms;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 2rem;
        opacity: 0.5;
      }

      &:hover {
        &::before {
          animation: 1s rotateBackground infinite;
        }
      }

      >img {
        position: absolute;
        top: 0;
        left: 0;
        height: 4rem;
        width: 4rem;
        margin: 1rem;
      }
    }

    .auth-name {
      color: antiquewhite;
      text-align: center;
      margin-top: 0;

      >em {
        display: block;
      }
    }
  }
}

@keyframes rotateBackground {
  for num in 0 .. 100 {
    {1% * num} {
      background: repeating-linear-gradient(unit(60 + num * (360 / 100), deg), gray, transparent 100%);
    }
  }
}
</style>