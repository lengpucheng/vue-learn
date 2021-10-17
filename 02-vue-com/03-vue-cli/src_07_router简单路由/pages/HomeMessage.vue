<template>
  <div>
    <h3>query</h3>
    <ul>
      <li v-for="msg in messageList" :key="msg.id">
        <!--   跳转路由 携带 查询字符串参数  用字符串写法   -->
        <!--        <router-link :to="`/home/message/detail?id=${msg.id}&title=${msg.title}`">{{ msg.title }}</router-link>&nbsp;&nbsp;-->
        <!--   对象方式传输     -->
        <router-link :to="{
          path:'/home/message/detail',
          query:{
            id:msg.id,
            title:msg.title
          }
        }">{{ msg.title }}
        </router-link>&nbsp;&nbsp;
      </li>
    </ul>
    <hr>
    <h3>params</h3>
    <ul>
      <li v-for="msg in messageList" :key="msg.id">
        <!--   模板字符串方式      -->
        <!--        <router-link :to="`/home/message/detail/${msg.id}/${msg.title}`">{{msg.title}}</router-link>-->
        <router-link :to="{
          /* 使用这种对象params 只能使用别名
          *  不可以使用 path 因为path已经被写死
          *  使用name 可以读取 :params
          *  */
          name:'DetailPath',
          params:{
             id:msg.id,
             title: msg.title,
          }
        }">{{ msg.title }}
        </router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HomeMessage",
  data() {
    return {
      messageList: [
        {id: "001", title: "message01"},
        {id: "002", title: "message02"},
        {id: "003", title: "message03"},
        {id: "004", title: "message04"},
        {id: "005", title: "message05"},
      ],
    }
  }
}
</script>

<style scoped>

</style>