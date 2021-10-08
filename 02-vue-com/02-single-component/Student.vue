<template>
  <!--  组件的结构 -->
  <div class="dome">
    <h2>学生名称：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="showName">显示</button>
  </div>
</template>

<script>
export default {
  /* 名称用于在 开发者工具显示  默认应该和文件名相同 */
  name: 'School',
  data() {
    return {
      name: "LPC",
      age: 23,
    }
  },
  methods: {
    showName() {
      alert(this.name)
    }
  }
}
</script>

<style>
.dome {
  background-color: darkkhaki;
}

/*  样式 */
</style>