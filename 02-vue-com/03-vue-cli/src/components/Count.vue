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
    /* 否则需要使用  ns.属性 来获取/执行 */
    /* 使用命名空间  p1 命名空间  p2 同单文件 */
    ...mapState('count', ['subject', 'school', 'location', 'sum']),
    ...mapState('person', ['personList']),
    ...mapGetters('count', ['bigSum'])
  },
  methods: {
    ...mapMutations('count', ['Add', 'Subtraction']),
    ...mapActions('count', ['addOdd', 'addWait']),
  }
}
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>