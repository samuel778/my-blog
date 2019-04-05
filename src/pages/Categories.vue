<template>
  <div>
    <div class="container">
      <div class="cate_header">
        <span class="cate_title">{{categories}}</span>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Tags
  name: "Categories",
  components: {
  },
  data() {
    return {
      categories: this.$route.query.categories
    };
  },
  watch: {
    $route(to, from) {
      if (to.query.categories !== from.query.categories) {
        this.categories = to.query.categories;
      } else {
        return false;
      }
    }
  }
};
</script>
