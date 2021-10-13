<template>
  <div class="student">
    <h1>学生名称：{{ name }}</h1>
    <h1>学生年龄：{{ age }}</h1>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "LPC",
      age: 18
    }
  },
  mounted() {
    /* this是vueComponent的实例对象，其原型为vueComponent构造者原型，由于vueComponent原型为 Vue的原型
    *  因此 Vue原型上的属性在实例上也可见,由于 $bus是最初的Vue实例本身
    *  因此 可以将事件绑定到 this.$bus 使其在任何地方都可以被调用
    *  */
    this.$bus.$on("sendName", (name) => {
      console.log("student收到", name)
    })
  },
  beforeDestroy() {
    // 组件被销毁前注销自定义事件 避免bus过载
    this.$bus.$off(['sendName'])
  }

}
</script>

<style scoped>
.student {
  background-color: #b9ff48;
  padding: 5px;
  margin: 5px;
}
</style>