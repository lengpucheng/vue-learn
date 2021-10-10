import Vue from 'vue'
import App from "@/App"
import {mount} from "@/components/tools";
import plugins from "@/plugins";

Vue.config.productionTip = false


// 使用全局混合后 所有的VM和VC都会挂载
Vue.mixin(mount)

// 引入插件
Vue.use(plugins,1,2,3)

new Vue({
    el: "#app",
    render: h => h(App)
})