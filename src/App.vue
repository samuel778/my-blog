<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="home">Home</el-menu-item>
      <el-menu-item index="all">Articles</el-menu-item>
      <el-menu-item index="tags">Tags</el-menu-item>
      <el-menu-item index="resume">Resume</el-menu-item>
      <el-menu-item index="gallery">Photos</el-menu-item>
    </el-menu>

    <router-view class="router-view" />
  </div>
</template>

<script scoped>
import { postData } from "./utils/data.js";
import { getAllCategories } from "./utils/datafilter.js";
export default {
  components: {},
  name: "App",
  data() {
    return {
      activeIndex: "home"
    };
  },
  methods: {
    handleSelect(dir, categorie = "") {
      let path;
      if (categorie) {
        path = `/${dir}?${dir}=${categorie}`;
      } else {
        path = `/${dir}`;
      }
      this.$router.push(path);
    },
    menu: function() {
      let scrollCount =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollCount > 130) {
        this.menuFixed = true;
      } else {
        this.menuFixed = false;
      }
    }
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
    data() {
      // return this.$page.frontmatter;
    },
    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    },

    heroImageStyle() {
      return (
        this.data.heroImageStyle || {
          maxHeight: "200px",
          margin: "6rem auto 1.5rem"
        }
      );
    },
    categories: function() {
      return Array.from(new Set(getAllCategories(JSON.parse(postData))));
    }
  },
  watch: {
    $route(to, from) {
      this.showCommonFooter = to.name === "Allpost" || to.name === "Home";
    }
  },

  mounted() {
    window.addEventListener("scroll", this.menu);
  }
};
</script>
