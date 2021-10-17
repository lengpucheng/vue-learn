<template>
  <div>
    <div class="inner cover"
         style="margin-top: 100px;margin-bottom: 25px;padding: 20px;background-color: rgba(152,206,234,0.3);border-radius: 20px">
      <div class="form-signin" style="padding: 20px">
        <h1 style="margin-bottom: 40px" class="cover-heading">WTR资源管理</h1>
        <form>
          <label for="userName" class="sr-only">用户名</label>
          <input type="text" id="userName" class="form-control" required autofocus v-model="name"
                 placeholder="请输入用户名">
          <p></p>
          <label for="passWord" class="sr-only">密 码</label>
          <input type="password" id="passWord" class="form-control" required v-model="password"
                 placeholder="请输入密码">
          <p style="text-align:left;color: #f34a4a"><b></b></p>
          <input type="submit" value="登录" style="margin-top: 20px"
                 class="btn btn-lg btn-primary btn-block" @click.prevent="login">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      name: "",
      password: "",
    }
  },
  methods: {
    login() {
      if (this.name && this.password) {
        window.localStorage.setItem("name", this.name)
        window.localStorage.setItem("pass", this.password)
        window.localStorage.setItem("user", "true")
        alert("登录成功")
        /* 与默认的go类似 */
        // this.$router.go(-1)
        /* 向后退 */
        // this.$router.back()
        /* 前进 */
        // this.$router.forward()
        /* 使用 replace 跳转 */
        this.$router.replace("/")
      } else {
        alert("用户名和密码不能为空")
      }
    }
  }
}
</script>

<style scoped>

</style>