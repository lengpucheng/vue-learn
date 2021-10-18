<template>
  <div>
    <div class="inner cover">
      <h1 class="cover-heading">Hello WTRer！</h1>
      <p class="lead">
        这是WTR的媒体资源管理系统,方便快捷的管理WTR每天产生的海量数据<br/>
        对接教务系统，自动获取并排出空课表<br/>
        数据采集现已支持哔哩哔哩自动采集
        <br/>
        已经在停留{{ time }}秒
      </p>
      <p class="lead">
        <a href="/login/manage" class="btn btn-lg btn-default">进入系统</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      time: 0
    }
  },
  /* route的生命周期 当组件被激活时
  *  只要当 keep-alive 时才生效
  * */
  activated() {
    console.log("新闻激活")
    this.inter = setInterval(() => {
      this.time++
      console.log("@@")
    }, 500)
  },
  /* 当组件激活取消时  若缓存组件 则不会调用销毁 但会调用这个 */
  deactivated() {
    console.log("新闻失活")
    clearInterval(this.inter)
  }
}
</script>

<style scoped>

</style>