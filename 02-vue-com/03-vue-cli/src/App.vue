<template>
  <div>
    <h1>Vue</h1>
    <!--  使用ref 可以给 结构打标签  使用 this.$refs.name 可以直接获取  -->
    <p v-text="msg" ref="msg"></p>
    <button @click="showDom">显示DOM</button>
    <button @click="put">修改名称</button>
    <!--  ref给组件打标签后 获取的即为组件的实例对象  -->
    <School ref="sch"></School>
    <School/>
    <hr>
    <h1>学生</h1>
    <!--  使用 props 属性来传参 -->
    <Student name="张三" :age='19' sex="男"></Student>
<!--   使用 : 即 v-bind: 让''中的为js表达式的结果  即 数字17  否则为字符串 -->
    <Student name="李四" :age='17' sex="女"></Student>
  </div>

</template>

<script>
import School from "@/components/School"
import Student from "@/components/Student";

export default {
  name: "App",
  components: {
    School,
    Student
  },
  data() {
    return {
      msg: "this is Msg",
    }
  },
  methods: {
    showDom() {
      /* 对于HTML获取的是真实的DOM */
      alert(this.$refs.msg)
      /* 对于组件获取的是 组件的实例对象  */
      console.log(this.$refs.sch)
      console.log(this.$refs.sch.name)
    },
    put() {
      this.$refs.sch.name = "WTU"
    }
  }
}
</script>

<style>

</style>