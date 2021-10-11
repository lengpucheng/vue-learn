<template>
  <div>
    <h1>Vue</h1>
    <!--  使用ref 可以给 结构打标签  使用 this.$refs.name 可以直接获取  -->
    <p v-text="msg" ref="msg"></p>
    <button @click="showDom">显示DOM</button>
    <button @click="put">修改名称</button>
    <!--  ref给组件打标签后 获取的即为组件的实例对象  -->
    <School ref="sch" :receive="receive"></School>
    <School :receive="receive"/>
    <hr>
    <h1>学生</h1>
    <!--  使用 props 属性来传参 -->
    <Student name="张三" :age='19' sex="男" @sendName="receive"></Student>
    <!--   使用 : 即 v-bind: 让''中的为js表达式的结果  即 数字17  否则为字符串 -->
    <Student name="李四" :age='17' sex="女" ref="stu2"></Student>
    <Student name="张吴" :age='27' sex="女" ref="stu3"></Student>
    <!--  所有的事件都会默认为是 自定义事件  必须添加 native 修饰符 才会解析为原生的 js 事件   -->
    <Student name="李玉刚" :age='27' sex="女" ref="stu3" @click.native="alert('点击')"></Student>
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
    receive(name) {
      console.log("app收到", name)
    },
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
  },
  mounted() {
    // 使用异步事件绑定
    this.$refs.stu2.$on('sendName', this.receive)
    // 使用匿名函数必须使用箭头函数(this 向外找） 否则 this为调用者即事件所有的内部的组件
    // once 为只是 触发一次
    this.$refs.stu3.$once('sendName', (name, ...p) => {
      // 可以使用可变参数来接收  接收后将为数组
      console.log('app收到了', name, p)
    })
  }
}
</script>

<style>

</style>