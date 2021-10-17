<template>
  <div>
    <h1>人员列表</h1>
    <button @click="addAuto">自动添加</button>
    <input type="text" property="输入名称" v-model="name" @keydown.enter="add">
    <button @click="addYun">添加YUN</button>
    <p>第一个名字{{ first }}</p>
    <ul>
      <li v-for="per in personList">
        {{ per.id }}--{{ per.name }}--{{ per.age }}
      </li>
    </ul>
    <h3 style="color: #66afe9">上方结果为{{ count }}</h3>
  </div>
</template>

<script>
export default {
  name: "Person",
  data() {
    return {
      name: "",
    }
  },
  computed: {
    personList() {
      return this.$store.state.person.personList
    },
    count() {
      return this.$store.state.count.sum
    },
    first() {
      /* 使用 A[X] 获取不符合.命名规范的A的属性X */
      return this.$store.getters["person/firstName"]
    }
  },
  methods: {
    add() {
      /* 使用 命名空间调用 */
      this.$store.commit('person/AddPerson', {id: "", name: this.name, age: this.count})
    },
    addYun() {
      this.$store.dispatch('person/addNameYun', {id: "", name: this.name, age: this.count})
    },
    addAuto() {
      this.$store.dispatch("person/addAutoName", {id: "", age: this.count})
    }
  }
}
</script>

<style scoped>

</style>