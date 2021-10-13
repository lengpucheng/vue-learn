<template>
  <div>
    <School/>
    <Student/>
  </div>
</template>

<script>
import School from "./components/School"
import Student from "./components/Student"

export default {
  name: "App",
  components: {
    Student,
    School
  }
}
</script>

<style scoped>

</style>