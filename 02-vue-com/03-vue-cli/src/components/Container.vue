<template>
  <div class="container-fluid">
    <div class="row">
      <NavLeft></NavLeft>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <!--  使用keep alive 包裹的 组件被切走后不会被销毁会被缓存        -->
        <!--   可以使用 include 来表明那些组件可以被缓存 若不使用则所有都会缓存     -->
        <!--    name为组件名  对应VUE中的 name    -->
        <keep-alive :include="['Login','Configer']">
          <router-view>
            <h1>欢迎使用</h1>
          </router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import NavLeft from "./NavLeft";
import Login from "../pages/Login";

export default {
  name: "Container",
  components: {
    Login,
    NavLeft,
  }
}
</script>

<style scoped>

</style>