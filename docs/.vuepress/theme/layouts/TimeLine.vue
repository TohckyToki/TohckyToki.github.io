<template>
  <div id="timeline">
    <ul v-if="allblog" class="line-content">
      <li v-for="(value, key) in nodes">
        <div class="timestamp">{{ key.split('"').join("") }}</div>
        <ul>
          <li v-for="blog in value" class="line-item">
            <header>
              <a :href="blog.path">
                {{ blog.title }}
              </a>
              <span>{{
                `${(blog.date.getMonth() + 1)
                  .toString()
                  .padStart(2, "0")}-${blog.date
                  .getDate()
                  .toString()
                  .padStart(2, "0")}`
              }}</span>
            </header>
            <p>{{ blog.summary }}</p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang="stylus" scope>
.line-content {
  list-style-type: none;
  border-left-color: cadetblue;
  border-left-width: 10px;
  border-left-style: double;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  .timestamp {
    padding-left: 15px;
    margin-left: -5px;
    background: silver;
    color: white;
    font-size: 1.5rem;
    border-radius: 0 20px 20px 0;
    box-shadow: 3px 3px 3px grey;
  }

  ul {
    list-style-type: none;
  }
}

.line-item {
  position: relative;
  border-width: 2px;
  border-style: dashed;
  border-color: silver;
  border-radius: 10px;
  margin: 1rem 0;
  padding: 0.5rem;

  >header {
    font-size: 1.3rem;

    >a {
      text-decoration: none;
      color: skyblue;

      &:hover {
        color: $accentColor;
      }
    }

    >span {
      float: right;
      color: darkgray;
    }
  }

  &::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 20px;
    border-width: 8px;
    border-style: double;
    border-color: cadetblue;
    transform: translate(-50%, -50%);
    top: 50%;
    left: -45px;
    background: white;
  }
}
</style>

<script>
export default {
  data: function () {
    return {
      nodes: null,
      currentCount: 0,
    };
  },

  computed: {
    allblog() {
      return (
        this.$site.pages
          .filter((e) => e.id)
          .sort((e1, e2) =>
            e1.frontmatter.date > e2.frontmatter.date
              ? -1
              : e1.frontmatter.date < e2.frontmatter.date
              ? 1
              : 0
          )
          .map((e) => ({
            title: e.title,
            summary: e.summary,
            path: e.path,
            date: new Date(e.frontmatter.date),
          })) || null
      );
    },
  },

  mounted() {
    const perPageCount = 10;
    window.vueObject = this;

    if (this.allblog && this.allblog.length > this.currentCount) {
      let pages = this.allblog.slice(
        this.currentCount,
        this.currentCount + perPageCount
      );
      this.nodes = this.nodes || {};
      Object.assign(
        this.nodes,
        this.groupBy(
          pages,
          (e) =>
            `${e.date.getFullYear()}-${(e.date.getMonth() + 1)
              .toString()
              .padStart(2, "0")}`
        )
      );
      this.currentCount += perPageCount;
    }
  },

  methods: {
    groupBy(list, fn) {
      const groups = {};
      list.forEach(function (o) {
        const group = JSON.stringify(fn(o));
        groups[group] = groups[group] || [];
        groups[group].push(o);
      });
      return groups;
    },
  },
};
</script>
