<template>
  <div>
    <h1>{{ title }}</h1>
    <p>学生姓名:{{ name }}</p>
    <!--  自定义指令优先于 插值语法 -->
    <p v-bing10="myAge">学生年龄:{{ myAge - 10 }}</p>
    <p>学生性别:{{ sex }}</p>
    <button @click="put">修改AGE</button>
    <button @click="sendApp">发送给APP</button>
    <button @click="offActive">解绑</button>
  </div>
</template>

<script>
export default {
  name: "Student",
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
    },
    sendApp() {
      /* 触发事件  参数A 为事件名  参数B 事件参数 */
      this.$emit('sendName', this.name, 999, 888, 1000)
    },
    offActive() {
      // 解绑事件
      this.$off('sendName')

      // 解绑多个事件
      // this.$off(['sendName'])

      // 解绑全部事件
      // this.$off()
    }
  }
}
</script>

<style scoped>

</style>