<template>
  <aside :class="'side-nav ' + sideNavClass">
    <div class="close-button" @click="toggleSideNav"></div>
    <div class="side-content">
      <span class="logo">
        <img :src="this.$themeConfig.profile" alt="个人头像" />
      </span>
      <p class="auth-name">TohckyToki<em>(TkTk)</em></p>
      <div>
        <RouterLink to="/timeline/">
          文章<b>{{ blogPageCount }}</b>
        </RouterLink>
        <RouterLink to="/tag/">
          标签<b>{{ tagCount }}</b>
        </RouterLink>
      </div>
      <ul v-if="contact" class="contact">
        <li
          v-for="item in contact"
          :key="item.iconComponent"
          class="contact-item"
        >
          <NavLink :link="item.link">
            <component :is="item.iconComponent"></component>
            {{ item.text }}
          </NavLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import {
  CodepenIcon,
  CodesandboxIcon,
  FacebookIcon,
  GithubIcon,
  GitlabIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MessageSquareIcon,
  MusicIcon,
  PhoneIcon,
  TwitterIcon,
  VideoIcon,
  YoutubeIcon,
} from "vue-feather-icons";

export default {
  components: {
    CodepenIcon,
    CodesandboxIcon,
    FacebookIcon,
    GithubIcon,
    GitlabIcon,
    GlobeIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon,
    MessageSquareIcon,
    MusicIcon,
    PhoneIcon,
    TwitterIcon,
    VideoIcon,
    YoutubeIcon,
  },

  data: function () {
    return {
      sideNavClass: "",
      isOpen: false,

      blogPageCount: 0,
      tagCount: 0,
    };
  },
  methods: {
    toggleSideNav() {
      this.isOpen = !this.isOpen;
      this.sideNavClass = this.isOpen ? "manual open" : "manual close";
    },
    getIconComponentName(contactType) {
      switch (contactType) {
        case "codepen":
          return "CodepenIcon";
        case "codesandbox":
          return "CodesandboxIcon";
        case "facebook":
          return "FacebookIcon";
        case "github":
          return "GithubIcon";
        case "gitlab":
          return "GitlabIcon";
        case "instagram":
          return "InstagramIcon";
        case "linkedin":
          return "LinkedinIcon";
        case "mail":
          return "MailIcon";
        case "messenger":
          return "MessageSquareIcon";
        case "music":
          return "MusicIcon";
        case "phone":
          return "PhoneIcon";
        case "twitter":
          return "TwitterIcon";
        case "video":
          return "VideoIcon";
        case "web":
          return "GlobeIcon";
        case "youtube":
          return "YoutubeIcon";
        default:
          return "";
      }
    },
    computeOpenFlag() {
      this.isOpen = window.innerWidth > 1200 ? true : false;
    },
  },
  mounted() {
    this.computeOpenFlag();
    window.onresize = () => {
      if (this.sideNavClass !== "") {
        this.sideNavClass = "";
      }
      this.computeOpenFlag();
    };

    this.blogPageCount = this.$site.pages.filter(
      (e) => e.relativePath && e.relativePath !== "index.md"
    ).length;

    this.tagCount = this.$tag.length;
  },

  computed: {
    contact() {
      return (
        (this.$themeConfig.sideNav && this.$themeConfig.sideNav.contact) ||
        []
      )
        .map(({ type, link }) => {
          return {
            iconComponent: this.getIconComponentName(type),
            link,
          };
        })
        .filter(({ iconComponent }) => iconComponent);
    },
  },

  watch: {
    $route(to, from) {
      this.sideNavClass = "";
      this.computeOpenFlag();
    },
  },
};
</script>

<style lang="stylus">
$closeButtonSize = 30px;
$sideContentTextColor = white;

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
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .logo {
      margin: 2rem 0 1rem 0;
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
      color: $sideContentTextColor;
      text-align: center;
      margin-top: 0;

      >em {
        display: block;
      }

      +div {
        text-align: center;
        margin: 0;
        width: 60%;
        display: flex;

        >a {
          flex-grow: 1;
          margin: 1rem 0;
          cursor: pointer;
          color: $sideContentTextColor;
          text-decoration: none;

          &:hover {
            color: $accentColor;
          }

          >b {
            display: block;
          }
        }
      }
    }

    .contact {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      list-style-type: none;
      padding: 0;
      width: 70%;
    }

    .contact-item {
      margin: 0 5px;

      a {
        font-size: 12px;
        color: $sideContentTextColor;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
          color: $accentColor;
        }
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