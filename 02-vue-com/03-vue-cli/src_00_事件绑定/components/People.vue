<template>
  <div>
    <h1>{{ title }}</h1>
    <p>学生姓名:{{ name }}</p>
    <p>学生年龄:{{ myAge - 10 }}</p>
    <p>学生性别:{{ sex }}</p>
    <button @click="put">修改AGE</button>
    <hr>
  </div>
</template>

<script>
export default {
  name: "People",
  data() {
    return {
      title: "Student",
      /* data在prop后加载 因此可以使用数据代理解决 修改prop的数据异常的情况 */
      myAge: this.age,
    }
  },
  /* prop属性参数  prop的优先级高于data 在data前加载 */

  /*  简单接收*/
  // props:['name','age','sex'],

  /* 格式接收 */
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String,
  // }

  /* 严格接收 (必要性、和默认值) */
  props: {
    name: {
      type: String, // 类型
      required: true,// 必须的
    },
    age: {
      type: Number,
      default: 99,// 默认值
    },
    sex: {
      type: String,
      required: true,
    }
  },
  methods: {
    put() {
      /* 一般不适用直接修改 prop的属性 */
      /* 可以使用数据代理 */
      this.myAge++
    }
  }
}
</script>

<!--
所有的css最终会汇总到一起  若冲突了则会被后引入的覆盖
使用scoped 就可以人style在局部使用
一般在App组件不使用scoped
可以使用 lang来定义使用的语言  less 或 css
-->
<style scoped lang="less">

</style>