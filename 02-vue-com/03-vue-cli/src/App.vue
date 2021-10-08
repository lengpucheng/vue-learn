<template>
  <div>
    <img src="./assets/logo.png" alt="logo"/>
    <School></School>
    <Student></Student>
  </div>

</template>

<script>
/* 引入 可以省略后缀.vue*/
import School from "./components/School";
import Student from "./components/Student";

export default {
  name: "App",
  /* 注册组件 */
  components: {
    School,
    Student
  }
}
</script>