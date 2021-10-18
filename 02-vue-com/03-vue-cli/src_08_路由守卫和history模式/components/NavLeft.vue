<template>
  <div class="col-sm-3 col-md-2 sidebar" id="menu">
    <div style="height: 10%;text-align:center;margin-bottom: 50px">
      <h1 id="avatar" style="font-size: 50px">{{ user.name }}</h1>
    </div>

    <ul class="nav nav-sidebar" v-for="group in routeList">
      <li v-for="route in group">
        <router-link :to="route.path" active-class="active">{{ route.name }}</router-link>
      </li>
    </ul>
    <a href="#">
      <button class="btn btn-danger" style="width: 100%" @click="logout">
        退出登录
      </button>
    </a>
  </div>
</template>

<script>
export default {
  name: "NavLeft",
  data() {
    return {
      routeList: [
        [
          {name: '登录', path: '/login'},
          {name: '关于', path: '/about'},
        ],
        [
          {name: '新闻', path: '/news'},
          {name: '数据', path: '/list'},
          {name: '配置', path: '/config'},
        ],
        [
          {name: '哔哩哔哩', path: 'https://www.bilibili.com/'},
          {name: '优酷', path: 'https://youku.com'},
          {name: 'CCTV', path: 'https://cctv.com'},
        ],
      ],
      user: {
        name: "",
        id: "#"
      }
    }
  },
  methods: {
    logout() {
      window.localStorage.setItem("name", "")
      window.localStorage.setItem("user", "")
      alert("退出登录")
    }
  },
  mounted() {
    this.user.name = localStorage.getItem("name")
  }
}
</script>

<style scoped>
li:hover {
  background-color: #00a6d7;
}

.active {
  background-color: #66afe9;
}
</style>