<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" property="输入名称" v-model="name" @keydown.enter="add">
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
      return this.$store.state.personList
    },
    count() {
      return this.$store.state.sum
    }
  },
  methods: {
    add() {
      this.$store.commit('AddPerson', {id: "", name: this.name, age: this.count})
    }
  }
}
</script>

<style scoped>

</style>