<!---*
* @description  出口文件
* @fileName index.vue
* @author 叶金龙
* @date 2021/02/14 23:15:48
*--->
<template>
  <el-row :gutter="0" class="m-header">
    <el-col :span="4">
      <Geo />
    </el-col>
    <el-col :span="6">
      <User />
    </el-col>
    <el-col :span="14">
      <Nav />
    </el-col>
  </el-row>
</template
>

<script>
import Geo from "./geo";
import User from "./user";
import Nav from "./nav";
export default {
  name: "",
  components: { Geo, User, Nav },
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
@import "@/assets/css/public/layout.scss";
@import "@/assets/css/public/header/index.scss";
</style>