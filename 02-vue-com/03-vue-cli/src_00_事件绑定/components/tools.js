/* 编写工具类 */
export const show = {
    methods: {
        show() {
            alert(this)
        }
    }
}

export const mount = {
    mounted() {
        console.log("混合挂载！！")
    }
}