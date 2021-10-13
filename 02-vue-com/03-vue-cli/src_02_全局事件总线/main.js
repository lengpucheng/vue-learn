import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局事件总线满足 以下两个条件：
// 1. 所有组件都可见
// 2. 可以调用$emit $on $once 方法来进行事件绑定和触发

// 综上满足以上条件有两个
// 1. windows 全局对象 公共父类
// 2. Vue和其子类的实例对象

// 由于  所有 组件构造者vueComponent是所有各个组件的公共父原型 且其父原型为Vue的原型 因此可以在 Vue的原型上添加一个Vue的实例
// 由于 最初的Vue实例已经在main中构造因此可以在创建Vue最初的状态进行挂载
// 即  beforeCreate


new Vue({
    render: h => h(App),
    beforeCreate() {
        // 注册全局事件总线
        // 默认已经有了 $root 等同于这里的 bus
        Vue.prototype.$bus = this
    }
}).$mount('#app')
