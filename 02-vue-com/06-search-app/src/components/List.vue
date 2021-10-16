<template>
  <div>
    <div v-if="messages.isInit" class="row">
      使用搜索框搜索
    </div>
    <div v-show="messages.isLoading" class="row">正在加载</div>
    <div v-show="messages.isError" class="row">发生错误，{{ messages.isError }}</div>
    <div v-show="messages.userList" class="row">
      <transition-group
          appear
          name="animate__animated animate__bounce"
          enter-active-class="animate__bounceIn"
          leave-active-class="animate__bounceOut"
      >
        <div class="card" v-for="user in messages.userList" :key="user.id">
          <a :href="user.html_url" target="_blank">
            <transition
                appear
                name="animate__animated animate__bounce"
                enter-active-class="animate__bounceIn"
                leave-active-class="animate__bounceOut"
            >
              <img :src="user.avatar_url" style='width: 100px' alt="头像">
            </transition>
          </a>
          <p class="card-text">{{ user.login }}</p>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import 'animate.css'

export default {
  name: "List",
  data() {
    return {
      messages: {
        isInit: true,
        isError: '',
        isLoading: false,
        userList: [],
      }
    }
  },
  mounted() {
    this.$root.$on("search", (res) => {
      // {...a,...b} 将ab中重名的字段以后者为准进行合并 后者没有的以前者为准
      this.messages = {...this.messages, ...res}
      console.log(res)
    })
  },
  beforeDestroy() {
    this.$root.$off("search")
  }
}
</script>

<style scoped>

.v-enter-active {
  animation: userShow 0.75s;
}

.v-leave-active {
  animation: userLeave 0.5s linear;
}

@keyframes userShow {
  from {
    opacity: 25%;
    transform: translateY(-100%);
    background-color: #66afe9;
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes userLeave {
  from {
    transform: translateY(0);
    background-color: rgba(220, 55, 55, 0.73);
  }
  to {
    opacity: 0;
    transform: translateY(100%);
  }
}

.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  opacity: 75%;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card:hover {
  float: left;
  opacity: 1;
  background-color: rgba(202, 253, 202, 0.53);
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>