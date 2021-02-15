<!---*
* @description  
* @fileName index.vue
* @author 叶金龙
* @date 2021/02/15 17:02:58
*--->
<template>
  <div class="m-header">
    <el-row>
      <el-col>
        <top-bar></top-bar>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <search-bar></search-bar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import topBar from "./topBar";
import searchBar from "./searchBar";
export default {
  name: "",
  components: { topBar, searchBar },
  data() {
    return {};
  },
  props: {},
  watch: {
    xxx: {},
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang='scss'>
@import "@/assets/css/public/header/index";
</style>