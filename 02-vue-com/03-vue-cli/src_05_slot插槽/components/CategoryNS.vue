<template>
  <div class="category">
    <h3>命名空间/作用域插槽</h3>
    <h3>新海诚热门电影</h3>
    <!--   可以将数据传入slot中共使用者使用 -->
    <slot :datas="movies">this is footer</slot>
  </div>
</template>
<script>
export default {
  name: "CategoryNS",
  data() {
    return {
      movies: ['你的名字', '追逐繁星的孩子', '秒速五厘米', '言叶之庭', '天气之子'],
    }
  }
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