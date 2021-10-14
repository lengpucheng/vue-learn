<template>
  <div>
    <button @click="getStu">获取学生信息</button>
    <p>{{stu}}</p>
    <hr>
    <button @click="getCar">获取Car</button>
    <p>{{car}}</p>
  </div>
</template>

<script>
/* 引入Axios */
import axios from 'axios'

export default {
  name: "App",
  data(){
    return {
      stu:"",
      car:"",
    }
  },
  components: {},
  methods: {
    getStu() {
      /* CORS 规范
      *  要求请求的  协议、域名 和 端口  一模一样
      *  其中
      *  请求已经发过去了，并且服务器收到了，但是由于跨域避免XSS 服务器不会返回结果
      *
      *  解决办法：
      *  1. 服务端cors解决办法： 后端使用cors配置
      *  2. 前端jsonp解决方案：jsonp 使用script 获取 get 脚本不受跨域限制 但是前后端都有修改 且只能使用get
      *  3. 使用代理服务器: nginx代理 即前端和和代理服务器同源，代理服务器和后端使用纯的http不受跨域限制
      *     3.1 nginx开启代理服务器
      *     3.2 使用 vue-cli开启代理服务器  修改 vue.config.js文件
      *  */
      /* 使用代理代理服务器后 直接用 8080 */
      axios.get('http://localhost:8080/api/v1/students').then(
          /* 成功回调 */
          response => {
            /*
            * response 为请求结果对象
            * .data 才是请求结果
            *  */
            console.log('请求成功', response.data)
            this.stu=response.data
          },
          /* 异常回调 */
          error => {
            /*
            * error 为错误对象
            * .message 为错误信息
            * */
            console.log('请求失败', error.message)
            this.stu=error.message
          }
      )
    },
    getCar() {
      axios.get('http://localhost:8080/api/v2/cars').then(
          response => {
            console.log(response.data)
            this.car=response.data
          },
          error => {
            console.log(error.message)
            this.car=error.message
          }
      )
    }
  }
}
</script>

<style scoped>

</style>