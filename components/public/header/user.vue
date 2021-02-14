<!---*
* @description 用户信息
* @fileName user.vue
* @author 叶金龙
* @date 2021/02/14 23:33:45
*--->
<template>
  <duiv class="m-user">
    <template v-if="user"
      >欢迎您， <span class="username">{{ user }}</span> [<nuxt-link to="/exit"
        >退出</nuxt-link
      >]
    </template>
    <template v-else>
      <nuxt-link to="/login" class="login">立即登录</nuxt-link>
      <nuxt-link to="/register" class="register">注册</nuxt-link>
    </template>
  </duiv>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      user: "",
    };
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