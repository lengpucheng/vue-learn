<template>
  <div>
    <h3>项目：{{ subject }}</h3>
    <h3>学校：{{ school }}</h3>
    <h3>地址：{{ location }}</h3>
    <hr>
    <h1> 当前SUM: {{ sum }}</h1>
    <h1> 当前SUM10倍: {{ bigSum }}</h1>
    <hr>
    <select v-model.number="num">
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <button @click="Add(num)">+</button>
    <button @click="Subtraction(num)">-</button>
    <button @click="addOdd(num)">加奇数</button>
    <button @click="addWait(num)">等等加</button>
    <h3 style="color: #da4f49">下方总数为 {{ personList.length }}</h3>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'

export default {
  name: "Count",
  data() {
    return {
      num: 0
    }
  },
  computed: {
    /* 手动编写计算属性 */
    /* subject() {
       return this.$store.state.subject
     },
     school() {
       return this.$store.state.school
     },
     location() {
       return this.$store.state.location
     },
     sum() {
       return this.$store.state.sum
     },*/

    /*
    *  使用 mapState 自动映射
    *  其会工具 key-value自动映射成 [key:func(){return state.value},...]的函数组
    *  ...可以将数组解构成一系列key对象属性
    * */
    // ...mapState({subject: 'subject', school: 'school', location: 'location', sum: 'sum'}),

    /*
    *  若 key-value相同，可以使用 [] 数组的简写形式
    *  */
    ...mapState(['subject', 'school', 'location', 'sum', 'personList']),
    /* 同理  getters 也可以使用 map映射到计算属性 */
    ...mapGetters(['bigSum'])
  },
  methods: {
    // add() {
    //   /* 使用commit 调用 dao方法 */
    //   this.$store.commit("Add", this.num)
    // },
    // subtraction() {
    //   this.$store.commit("Subtraction", this.num)
    // },

    /* 同理使用 mapMutations也可以自动创建 methods 需要参数在调用时候传输
    *  key 为函数名
    *  value 为函数体 对应 store中的 mutations
    *  自动调用 commit 执行相应的方法
    *   */
    // ...mapMutations({add: 'Add', subtraction: 'Subtraction'})

    /* 同理 若方法名和 mutations中相同可以使用数组简写 */
    ...mapMutations(['Add', 'Subtraction']),
    // addOdd() {
    //   /* 使用 dispatch 调用 业务方法 */
    //   this.$store.dispatch("addOdd", this.num)
    // },
    // addWait() {
    //   this.$store.dispatch("addWait", this.num)
    // }

    /* 同理 actions 也可以使用 map映射或者简写
    *  自动调用 dispatch
    *  */
    // ...mapActions({addOdd:'addOdd',addWait:'addWait'})
    ...mapActions(['addOdd', 'addWait']),
  }
}
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>