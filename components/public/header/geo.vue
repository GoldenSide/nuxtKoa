<!---*
* @description 城市定位
* @fileName geo.vue
* @author 叶金龙
* @date 2021/02/14 23:10:00
*--->
<template>
  <div class="m-geo">
    <i class="el-icon-location"></i>
    北京市
    <nuxt-link to="/changeCity" class="changeCity">切换城市</nuxt-link>[香河
    廊坊 天津]
  </div>
</template>

<script>
export default {
  name: "geo",
  components: {},
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
</style>