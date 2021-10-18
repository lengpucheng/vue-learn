<template>
<div>
  <NavTop></NavTop>
  <Container/>
</div>
</template>

<script>
import NavTop from "./components/NavTop";
import Container from "./components/Container";
export default {
  name: "App",
  components: {
    NavTop,
    Container,
  }
}
</script>

<style scoped>

</style>