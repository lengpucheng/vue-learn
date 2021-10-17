<template>
  <h2>About</h2>
</template>

<script>
/* 当配置 路由后 路由组件会多两个属性
  1. $route 记录当前的路由
  2. $router属性记录当前的路由器 */
export default {
  name: "About",
  mounted() {
    console.log("About 挂载")
  },
  /* 路由切中的时候 组件会被销毁 */
  beforeDestroy() {
    console.log("About 即将被销毁")
  }
}
</script>

<style scoped>

</style>