import Vue from "vue";
import Router from './router'
/* Vue和插件需要在前面引入 */
import App from "./App";


Vue.config.productionTip = false

new Vue({
    el: "#app",
    router: Router,
    render: h => h(App)
})