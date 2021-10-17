<template>
  <div class="container">
    <Card>
      <Category name="食物" :listData="foods">
        <!--   自定义标签内的html 内容将 覆盖组件中的slot标签内容  若slot不存在则不会显示    -->
        <img src="http://wtushop.hll520.cn/image/7.jpg" alt="美食"/>
      </Category>
      <Category name="游戏" :listData="games"/>
      <Category name="电影" :listData="movies">
        <iframe src="//player.bilibili.com/player.html?aid=804122638&bvid=BV1Zy4y1K7SH&cid=373348512&page=102"
                scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
      </Category>
    </Card>
    <hr>
    <Card>
      <CategoryName name="热门电影" :list-data="movies">
        <h4 slot="head">热门电影</h4>
        <h4 slot="footer"><a>点击观看</a></h4>
      </CategoryName>
      <CategoryName name="热门美食" :list-data="foods">
        <!--  若使用 template 可以 使用 v-slot:name    -->
        <template v-slot:box>
          <img src="http://wtushop.hll520.cn/image/7.jpg" alt="美食"/>
        </template>
        <h4 slot="footer"><a>点击抢购</a></h4>
      </CategoryName>
    </Card>
    <hr>
    <Card>
      <CategoryNS>
        <!--   使用 scop 接收传入的数据 来自定义HTML解析     -->
        <!--   scope 为名称  即 所有slot传输数据的对象     -->
        <template scope="datas">
          <ul v-for="data of datas.datas">
            <li>{{ data }}</li>
          </ul>
        </template>
      </CategoryNS>
      <CategoryNS>
        <template scope="datas">
          <ol v-for="data of datas.datas">
            <li>{{ data }}</li>
          </ol>
        </template>
      </CategoryNS>
      <CategoryNS>
        <!--   使用 scop 接收传入的数据 来自定义HTML解析     -->
        <template scope="datas">
          <h4 v-for="data of datas.datas">{{ data }}</h4>
        </template>
      </CategoryNS>
    </Card>

  </div>
</template>

<script>
import Category from "./components/Category";
import CategoryName from "./components/CategoryName";
import CategoryNS from "./components/CategoryNS";
import Card from "./components/Card";

export default {
  name: "App",
  data() {
    return {
      foods: ["鱼香肉丝", "宫保鸡丁", '土豆牛腩', '糖醋排骨'],
      games: ['王者荣耀', ' 刺激战场 ', 'QQ飞车', '元神'],
      movies: ['大决战', '大进军', '大转折', '开国大典', '功勋'],
    }
  },
  components: {
    CategoryNS,
    CategoryName,
    Category,
    Card
  },
}
</script>

<style scoped>
</style>