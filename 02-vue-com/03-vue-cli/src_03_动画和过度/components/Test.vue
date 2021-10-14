<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <!--   使用transition包裹会自动添加动画  添加 appear 会在第一次加载时也生效动画 -->
    <transition name="show" appear>
      <!--  会在显示和出现前 立即添加一个 class样式     -->
      <h1 v-show="isShow">这是CSS动画</h1>
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
  background-color: bisque;
}

/* v改为自定义的名称 将仅仅只是作用用 带有name标签同名的 transition 上 */
.show-enter-active {
  animation: moveShow 0.5s;
}

.show-leave-active {
  animation: transShow 0.5s reverse;
}

/* vue 自动添加的 进入动画 到transition 包裹的内容中 作用于没有添加 name标签的其他动画上 */
.v-enter-active {
  animation: moveShow 0.6s linear;
}

/* 自动添加的 离开动画 */
.v-leave-active {
  animation: moveShow 0.5s reverse;
}

/* 定义一个类样式 */
.come {
  /* 动画 -动画名称 持续时间  匀速   */
  animation: moveShow 1s linear;
}

.go {
  /*  reverse 反转 */
  animation: moveShow 1s reverse;
}

/* 定义动画 */
@keyframes moveShow {
  /* 从 */
  from {
    /* 移动  X移动   位置为-100% */
    transform: translateX(-100%);
  }
  /* 到 */
  to {
    /* X位置为 0（中央） */
    transform: translateX(0px);
  }
}

@keyframes transShow {
  from{
    opacity: 0;
  }
  to{
    opacity: 100%;
  }
}
</style>