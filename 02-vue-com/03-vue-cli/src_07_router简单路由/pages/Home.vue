<template>
  <div class="panel-body">
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul class="nav nav-tabs">
          <li>
            <router-link class="list-group-item" to="/home/news" active-class="active">News</router-link>
          </li>
          <li>
            <router-link class="list-group-item" to="/home/message" active-class="active">Message</router-link>
          </li>
        </ul>
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log("Home 挂载")
  },
  /* 路由切中的时候 组件会被销毁 */
  beforeDestroy() {
    console.log("Home 即将被销毁")
  }
}
</script>

<style scoped>

</style>