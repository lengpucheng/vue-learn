import App from "./App";
import Vue from "vue";
import VueRouter from 'vue-router'
import Router from './router'
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
    el: "#app",
    router: Router,
    render: h => h(App)
})