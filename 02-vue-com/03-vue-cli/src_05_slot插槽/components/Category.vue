<template>
  <div class="category">
    <h3>默认插槽</h3>
    <h3>{{ name }}</h3>
    <!-- slot-插槽 若标签不是自闭和 标签中的内容将出现并覆盖 slot中的内容 -->
    <!--  若有多个默认插槽  每个插槽都会出现相同的内容  -->
    <slot>
      <ul v-for="data of listData">
        <li>{{ data }}</li>
      </ul>
    </slot>
  </div>
</template>
<script>
export default {
  name: "Category",
  props: ['listData', 'name']
}
</script>

<style scoped>
img, iframe {
  width: 100%;
}

.category {
  background-color: #66afe9;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
  background-color: #da4f49;
}
</style>