<template>
  <div class="container">
    <search/>
    <List/>
  </div>
</template>

<script>
/* 使用import引入assets静态文件夹的资源 */
/* 但是使用 import引入会严格检擦 一般使用在html页面引入 */
// import './assets/css/bootstrap.css'
/*
*  通常静态库的引入是在public中放置文件后 在index.html中直接引入
* */
import List from "./components/List";
import Search from "./components/Search";
export default {
  name: 'App',
  components: {
    List,
    Search,
  }
}
</script>

<style>

</style>
