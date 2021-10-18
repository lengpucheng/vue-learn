import VueRouter from 'vue-router'
import News from "../pages/News";
import Configer from "../pages/Configer";
import About from "../pages/About";
import ShowList from "../pages/ShowList";
import Login from "../pages/Login";
import Vue from "vue";

Vue.use(VueRouter)

const router = new VueRouter({
    /*
    *  路由模式
    *  1. history  路径不含#
    *       使用页面中的路由和hash相同，但如果直接从地址栏输入会当成 url发给服务器 可能导致404错误
    *       解决需要服务器配置 \* 通配
    *
    *  2. hash 路径含#  #后边的内容称为hash hash后的不属于资源  不会传输给服务器
    *
    *  */
    mode: 'history',
    routes: [
        {
            name: 'News',
            path: '/news',
            component: News,
            meta: {title: '新闻'}
        },
        {
            name: 'Configer',
            path: '/config',
            component: Configer,
            meta: {title: '配置'}
        },
        {
            name: 'About',
            path: '/about',
            component: About,
            meta: {title: '关于', open: true}
        },
        {
            name: 'ShowList',
            path: '/list',
            component: ShowList,
            meta: {title: '数据浏览'}
        },
        {
            name: 'Login',
            path: '/login',
            component: Login,
            meta: {title: '登录', open: true},
            /* 独享路由首位
            *  仅对当前路由生效
            *  在全局路由过后  进入当前路由的组件前生效
            *  */
            beforeEnter(to, from, next) {
                if (window.localStorage.getItem("user") === "true") {
                    alert("已经登录")
                } else {
                    next()
                }
            }
        }
    ],
})

/* 前置路由首位  在页面跳转前执行 */
router.beforeEach((to, from, next) => {
    if (!to.meta.open && to.path !== '/') {
        // 如果是非开放页面就拦截
        if (window.localStorage.getItem("user") !== "true") {
            alert("请先登录")
            // 修改登录方向
            to.name = 'login'
            to.path = '/login'
            this.push('login')
            return
        }
    }
    /* 执行next函数将继续执行 */
    next()
})

/* 后置路由首位 在页面跳转后执行 */
router.afterEach((to, from) => {
    document.title = to.meta.title || 'Manage'
})

export default router