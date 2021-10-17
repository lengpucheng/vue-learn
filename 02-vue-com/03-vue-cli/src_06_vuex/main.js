/* 导入 store 其中 Vue已经在里导入 */
import Store from './store'
import App from "./App";
import Vue from "vue";

Vue.config.productionTip = false

new Vue({
    el: "#app",
    /* 配置Store */
    store: Store,
    render: h => h(App)
})