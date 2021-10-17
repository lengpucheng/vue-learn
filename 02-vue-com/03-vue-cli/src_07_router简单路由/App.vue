<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始跳转 -->
          <!--          <a class="list-group-item" href="./about.html">About</a>-->
          <!--          <a class="list-group-item active" href="./home.html">Home</a>-->

          <!--    使用router  实际上是a标签    active-class 当活动时 向class 中添加样式 -->
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <!--  replace 模式会 将历史记录的最后一条替换为当前  否则默认为向历史记录栈中加入当前的跳转        -->
          <router-link replace class="list-group-item" active-class="active" to="/home">Home</router-link>
          <!--    使用别名直接跳转到三级        -->
          <router-link class="list-group-item" :to="{name:'Detail'}" active-class="active">Status</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--  指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {}
}
</script>

<style scoped>

</style>