<template>
  <!--  组件的结构 -->
  <div class="dome">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">显示</button>
  </div>
</template>

<script>
/* 单独暴露 */
// export const school = Vue.extend({
//   data() {
//     return {
//       schoolName: "",
//       address: "",
//     }
//   }
// })
/* 统一暴露 */
// export {school}
/* 默认暴露 */
// export default school

/* 使用默认暴露组件交互相关的代码 */
// export default  Vue.extend({
//   data() {
//     return {
//       schoolName: "",
//       address: "",
//     }
//   }
// })

/*
*  单一 和统一 暴露后导入需要
*  import {???} form path
*
*  使用默认暴露可以直接
*  import ??? form path
*
* */



/* 直接使用配置对象作为默认暴露 省略Vue.extend */
export default {
  /* 名称用于在 开发者工具显示  默认应该和文件名相同 */
  name: 'School',
  data() {
    return {
      schoolName: "WTU",
      address: "WUHAN",
    }
  },
  methods: {
    showName() {
      alert(this.schoolName)
    }
  }
}



</script>

<style>
.dome {
  background-color: darkkhaki;
}

/*  样式 */
</style>