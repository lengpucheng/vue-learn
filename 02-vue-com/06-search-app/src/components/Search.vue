<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">搜索GitHub用户</h3>
    <div>
      <input type="text" placeholder="输入搜索关键字" v-model="keyWord" @keydown.enter="searchData"/>&nbsp;
      <button @click="searchData">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    }
  },
  methods: {
    searchData() {
      this.$root.$emit("search", {isInit: false, isError: '', isLoading: true, userList: []})
      this.$http.get(`http://localhost:8080/v1/search/users?q=${this.keyWord}`).then(
          response => {
            console.log("请求成功", response.data)
            this.$root.$emit("search", {isError: '', isLoading: false, userList: response.data.items})
          },
          error => {
            console.log("请求失败", error.message)
            this.$root.$emit("search", {isError: error.message, isLoading: false, userList: []})
          }
      )
    }
  }
}
</script>

<style scoped>

</style>