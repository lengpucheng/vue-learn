/* 定义插件 */
export default {
    /* install 会被 vue自动调用  参数为 Vue的构造函数 */
    /* 也可以自定义接收参数 */
    install(Vue, a, b,) {
        /* 可以使用Vue 给其添加全局配置 */
        console.log("@@@@@@@@@install.....", Vue, a, b, c)
        // 全局过滤器
        // value 为 | 前的数据 还可以接收参数
        Vue.filter("slice", function (value) {
            return value.slice(0, 4)
        })

        // 全局指令  element 是DOM  binding 是 value
        Vue.direction('bing10', function (element, binding) {
            console.log(element)
            console.log(binding)
            element.innerText = binding.value * 10
        })

        // 全局混入
        // Vue.mixin()

        // 全局方法 (给原行添加方法 则实例也可以拿到）
        Vue.prototype.hello = () => {
            alert(this)
        }
    }
}