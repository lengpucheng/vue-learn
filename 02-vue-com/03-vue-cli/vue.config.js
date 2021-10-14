module.exports = {
    pages: {
        index: {
            // 不可以留空 否则会加载空
            // 修改入口 文件
            entry: 'src/main.js',
        },
    },
    /* 开启代理服务器 服务器端口和后端端口一致 做后端代理
    *  将 5000 反向代理到 8080
    *  若 8080 本身就有的时候 就不会进行代理
    *  否则会将 8080 代理到 5000端口
    *  只能配置一个代理
    *  */
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // },


    /* 多代理配置且详细配置x */
    devServer: {
        proxy: {
            /* 请求前缀 将指定的请求前缀转发到 */
            '/api/v1': {
                /* 被代理的 地址 */
                target: 'http://localhost:5000',
                /* 重写路径  m:v k为正则匹配值  v为替换的值 */
                pathRewrite: {'^/api/v1': ''},
                /* 是否支持websocket */
                ws: true,
                /* 是否改变源地址
                *  即是否改变请求头的 host 值
                *  若为false 则显示真实地址 8080
                *  若为true  则显示代理地址 5000
                *  */
                changeOrigin: true,
            },
            '/api/v2': {
                target: 'http://localhost:5001',
                pathRewrite: {'^/api/v2': ''},
                ws: true,
                changeOrigin: false,
            }
        }
    },
    // 关闭强制语法检测
    lintOnSave: false
}