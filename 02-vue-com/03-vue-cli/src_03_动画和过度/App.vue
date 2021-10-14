<template>
  <div>
    <Test/>
    <hr>
    <TestOver/>
    <hr>
    <TestGroup/>
    <hr>
    <TestAnimate/>
  </div>
</template>

<script>
import Test from "./components/Test";
import TestOver from "./components/TestOver";
import TestGroup from "./components/TestGroup";
import TestAnimate from "./components/TestAnimate";

export default {
  name: "App",
  components: {
    Test,
    TestOver,
    TestGroup,
    TestAnimate
  }
}
</script>

<style scoped>

</style>