import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import qs from 'qs'

/* 设置 qs 跨域 */
// axios.
// axios.interceptors.request.use(function (config) {
//     config.data = qs.stringify(config.data)
//     return config
// }, function (error) {
//     return Promise.reject(error)
// })
Vue.config.productionTip = false
/* 配置全局http请求 */
Vue.prototype.$http = axios


new Vue({
    render: h => h(App),
}).$mount('#app')
