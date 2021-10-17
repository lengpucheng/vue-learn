<template>
  <div>
    <ul v-show="$route.query.id">
      <li>ID:{{ $route.query.id }}</li>
      <li>MSG:{{ $route.query.title }}</li>
    </ul>
    <ul v-show="id">
      <li>ID:{{ id }}</li>
      <li>MSG:{{ title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  /* 从路由 props */
  props: ['id', 'title']
}
</script>

<style scoped>

</style>