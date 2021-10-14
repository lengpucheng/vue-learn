<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <!--  transition 只能包裹一个根节点标签  多个用group -->
    <transition-group name="show">
      <!--  transition group 中必须加key 和v-for 相同     -->
      <h1 v-show="isShow" key="1">Vue Group动画1</h1>
      <h1 v-show="!isShow" key="2">Vue Group动画2</h1>
    </transition-group>
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
  background-color: #6f30b8;
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