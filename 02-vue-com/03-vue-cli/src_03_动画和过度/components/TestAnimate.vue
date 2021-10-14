<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
<!-- 引入库名
    使得name=库的基class
    动画使用 enter或 leave的class为库中的 class
 -->
    <transition
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__wobble"
        leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow">Animate.style动画</h1>
    </transition>
  </div>

</template>

<script>
/* 引入类库 */
import 'animate.css'

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
  background-color: #f8a529;
}
</style>