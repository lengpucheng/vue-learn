<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
}
</script>

<style scoped>

.container {
  /* 流动 */
  display: flex;
  /* 中间主轴对齐 */
  justify-content: space-around;
}
</style>