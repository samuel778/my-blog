<template>
  <div class="home_post_list">
    <button @click="click">click</button>
    <el-table :data="allPosts" stripe style="width: 100%">
      <el-table-column prop="date" label="日期"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="title" label="标题"> </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button @click="handlePostLink(scope.row.name)" type="text">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { postData } from "../utils/data.js";
import { getAllCategories } from "../utils/datafilter.js";

export default {
  // 主页
  name: "Allpost",
  data() {
    return {
      allPosts: JSON.parse(postData),
      categories: getAllCategories(JSON.parse(postData))
    };
  },
  components: {},
  methods: {
    handlePostLink: function(postName, dir = "post") {
      this.$router.push(`/${dir}/${postName}`);
    },
    click() {
      console.log(this.allPosts);
    }
  }
};
</script>
