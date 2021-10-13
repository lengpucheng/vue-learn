<template>
  <div class="school">
    <h1>学校名称：{{ name }}</h1>
    <h1>学校地址：{{ address }}</h1>
    <button @click="send">发送名称</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "WTU",
      address: "WUHAN"
    }
  },
  methods: {
    send() {
      this.$bus.$emit("sendName", this.name)
    }
  }

}
</script>

<style scoped>
.school {
  background-color: aquamarine;
  padding: 5px;
  margin: 5px;
}
</style>