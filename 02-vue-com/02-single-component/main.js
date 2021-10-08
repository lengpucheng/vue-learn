/* vue 的 入口 */
/* ES6 中的 import 和 export 浏览器无法识别 必须使用node进行编译 */
import App from "./App.vue";

/*
*  VUE 只 负责 App 组件
*  所有的 组件由App 管理
*  使用 vue-cli 启动
*  cli ---- command line interface 命令行接口工具
* */
new Vue({
    el: "root",
    template: `
        <app></app>
    `,
    components: {
        App
    }

})