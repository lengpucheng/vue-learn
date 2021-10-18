import Vue from "vue";

import App from "./App";

/* 按需引入 CSS将自动分析 */
import {Button, DatePicker,Row} from 'element-ui';
/* 使用 component 或use 进行全局注册 */
Vue.component('lp-bt', Button); // 引入的别名
Vue.use(DatePicker)
Vue.use(Row)
/*
* 全局引入 较大
* 引入ElementUI的组件库和全部样式 */
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    el: "#app",
    render: h => h(App)
})