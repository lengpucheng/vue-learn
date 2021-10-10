<template>
  <div>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="show">弹</button>
  </div>

</template>

<script>
import {show} from "@/components/tools";

export default {
  name: "School",
  data() {
    return {
      name: "",
      address: "",
    }
  },
  /* 可以引入第三方或者公共库js  其中同名的会直接混合 不会覆盖 */
  /* 若遇到同名的二级属性后 以组件为主 一级属性则直接混合 且 混合的优先于 组件  （通常用于生命周期） */
  mixins: [show],
  mounted() {
    console.log("this is School mount")
  }
}
</script>

<style>

</style>