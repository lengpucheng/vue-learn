/* 导入 store 其中 Vue已经在里导入 */
import App from "./App";
import Vue from "vue";
import router from './router'


Vue.config.productionTip = false
/* 使用vue-router
*  使用新的配置项 router
*  */


new Vue({
    el: "#app",
    router: router,
    /* 配置Store */
    render: h => h(App)
})