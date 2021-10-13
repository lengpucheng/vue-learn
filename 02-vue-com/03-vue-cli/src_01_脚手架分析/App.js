// 引入VUE
// import Vue from 'vue'
// 完整版VUE
import Vue from 'vue/dist/vue'
import App from './App'
// 引入APP
// 关闭VUE的production 提示
Vue.config.productionTip = false


// 创建VUE实例对象
new Vue({
    // 完成了 将APP放入容器中
    render: h => h(App),
}).$mount('#app')
// mount 挂载到app

// // 使用原始方式
// new Vue({
//     el: "#app",
//     // render 由VUE自动调用
//     render(createElement) {
//         console.log('render')
//         /* createElement 用于创建标签  k为标签 v为内容 */
//         return createElement('h1', '你好啊')
//     },
//     template: `
//       <app></app>
//     `,
//     components: {
//         app
//     }
// })