/* 1. 非ES（CS）引入 */
const express = require('express')
/* 使用history 解决非hash问题 */
const history = require('connect-history-api-fallback')

/* 2. 创建express */
const app = express()


app.use(history())
/* 3-1 解析代理静态文件 */
/* __dirname为当前服务器启动的根目录
*  会将 static目录下的全部映射到 /
*  若存在 index.html 文件会直接执行返回
*  */
app.use(express.static(__dirname + '/static'))

/* 3-2 创建控制器 来响应请求 */
app.get('/person', (request, response) => {
    /* request get 从请求体中读取数据 */
    // request.get("name")

    /* response send 向响应中写入数据 （最终返回） */
    response.send({
        name: "tom",
        age: 18
    })
})

/* 4. 启动服务器监听 */
app.listen(5000, err => {
    if (!err) {
        console.log("服务器启动，监听5000")
    }
})

/* 直接使用 node server(文件名 去掉.js) 既可以启动 */