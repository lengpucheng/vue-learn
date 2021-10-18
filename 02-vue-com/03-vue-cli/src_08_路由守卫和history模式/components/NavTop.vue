<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button aria-controls="navbar" aria-expanded="false" class="navbar-toggle collapsed" data-target="#navbar"
                data-toggle="collapse" type="button">
          <span class="sr-only">导航条</span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">LengPucheng</a>
      </div>
      <div class="navbar-collapse collapse" id="navbar">
        <ul class="nav navbar-nav navbar-link">
          <li v-for="route in routerList"><a href="#" @click.prevent="togo(route.path)">{{ route.name }}</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a :href="user.id">
            <span class="glyphicon glyphicon-home"></span>
            <span>  </span>
            <span>{{ user.name }}</span></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavTop",
  data() {
    return {
      routerList: [
        {name: '登录', path: '/login'},
        {name: '新闻', path: '/news'},
        {name: '数据', path: '/list'},
        {name: '配置', path: '/config'},
        {name: '关于', path: '/about'},
      ],
      user: {
        name: "lpc",
        id: "#"
      }
    }
  },
  methods:{
    togo(path){
      /* 使用push 方式直接跳转 */
      this.$router.push(path)
      /* 使用 replace 跳转 会覆盖历史记录*/
      // this.$router.replace(path)
    }
  }
}
</script>

<style scoped>
li:hover {
  background-color: #66afe9;
}
</style>