import VueRouter from 'vue-router'
import About from "../pages/About";
import Home from "../pages/Home";
import Vue from "vue";
import HomeNews from "../pages/HomeNews";
import HomeMessage from "../pages/HomeMessage";
import Detail from "../pages/Detail";

Vue.use(VueRouter)
// 创建路由器
export default new VueRouter({
    routes: [
        /* 创建路由 */
        {
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
            /* 配置子路由 */
            children: [
                /* 多级路由 会自动 补充 / */
                {
                    path: 'message',
                    component: HomeMessage,
                    children: [
                        {
                            /* 使用name别名 可以使用 对象方式直接跳转 */
                            name: "Detail",
                            path: 'detail',
                            component: Detail
                        },
                        {
                            name: "DetailPath",
                            /* 使用 path 传递参数 */
                            path: 'detail/:id/:title',
                            component: Detail,
                            /* 第一种写法  这里的props 会以 props的形式传给 Detail组件  */
                            // props:{id:'01',title:"xxx"}
                            /* 若 props为真则会把所有的 params参数以props 形式传递给组件  */
                            // props: true
                            /* 函数写法 参数是 route对象 可以预先赋值后传给 组件 */
                            /*props(route) {
                                return {id: route.query.id, title: route.params.title}
                            }*/
                            /* 使用解构赋值来写 --- 解构赋值 可以将一个对象解开留下仅限于的字段 可以连续嵌套 */
                            props({query, params}) {
                                return {id: query.id|params.id, title: query.title|params.title}
                            }
                        }
                    ]
                },
                {
                    path: 'news',
                    component: HomeNews,
                }
            ]
        }

    ]
})