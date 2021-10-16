<template>
  <div class="category">
    <h3>具名插槽</h3>
    <h3>{{ name }}</h3>
<!--  若使用 name 则 在组件中插值时 在其中的 给上属性 slot=name 即可进入指定插槽  -->
    <slot name="head"></slot>
    <slot name="box">
      <ul v-for="data of listData">
        <li>{{ data }}</li>
      </ul>
    </slot>
    <slot name="footer">this is footer</slot>
  </div>
</template>
<script>
export default {
  name: "CategoryName",
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
  height: 500px;
}

h3 {
  text-align: center;
  background-color: #da4f49;
}
</style>