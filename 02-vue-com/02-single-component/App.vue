<template>
  <div>
    <School></School>
    <Student></Student>
  </div>

</template>

<script>
/* 引入 可以省略后缀.vue*/
import School from "./School";
import Student from "./Student";

export default {
  name: "App",
  /* 注册组件 */
  components: {
    School,
    Student
  }

}
</script>