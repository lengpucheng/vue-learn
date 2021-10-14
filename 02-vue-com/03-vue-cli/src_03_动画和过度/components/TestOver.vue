<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <!--   使用transition包裹会自动添加动画  添加 appear 会在第一次加载时也生效动画 -->
    <transition name="show" appear>
      <!--  会在显示和出现前 立即添加一个 class样式     -->
      <h1 v-show="isShow">这是Vue过度</h1>
    </transition>
  </div>

</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: #30b836;
  /* 默认Vue动画事件 一般不再这里写 避免破坏 */
  /*transition: 0.5s linear;*/
}

/* 进入和离开的动画激活效果 */
.show-enter-active, .show-leave-active {
  transition: 0.5s linear;
}

/* VUE默认过度 */
/* 进入的起点 和离开的终点*/
.show-enter, .show-leave-to {
  transform: translateX(-100%);
}

/* 进入的终点和离开的起点 */
.show-enter-to, .show-leave {
  transform: translateX(0);
}
</style>