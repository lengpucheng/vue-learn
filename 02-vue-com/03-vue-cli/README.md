# 03-vue-cli

## 包管理

`package.json` 为当前软件包的描述配置文件

```json
{
  "name": "03-vue-cli",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  }
}
```

其中 scripts 为 webpack短语法 即指行`npm run xxx`实际上执行的是其短语发对应的命令

+ `serve`:本地开发时使用来测试
+ `build`:最终编译，将包编译成可以使用的 html\js\css文件
+ `lint`:对全部文件进行语法检测

`package-lock.json`为依赖管理文件,用于锁住需要的包的版本和地址

## src

+ `main.js`是一切的开端，使用npm run 后就将执行其中的代码
    + 使用 `import Vue from 'vue'`引入是残缺版的VUE，因此不包含模板解析器
    + 使用`render: h => h(App)`可以引入模板解析器
    + 或者引入完整版VUE `import Vue from 'vue/dist/vue'` 按照普通方式运行
    + render实际上是一个会被自动调用的函数，其中有一个参数是`createElement`用于创建节点元素
    + 没有模板解析器的vue的VUE文件中<template></template>中的模板将使用其他包渲染`vue-template-compiler`
```js
new Vue({
  render(createElement){
    /* createElement 用于创建标签  k为标签 v为内容 */
    return createElement('h1', '你好啊')
  },
})
// 由于不需要this 因此可以变成箭头函数 由于只有一行 因此可以省略 return
// (createElement)=>{createElement('h1', '你好啊')}
// 由于是箭头函数 不能简写 因此需要指定 对象的key 
// render:h=>h(app)
// app 已经 import因此也无需注册
```
+ `assets`静态资源文件夹
+ `components`组件文件夹
+ `App.vue` APP组件

## public

公开的资源，`index.html`为起始页，其中`<%= BASE_URL %>`指的`public`路径

### 热加载运行

```
npm run serve
```

### 构建包

```
npm run build
```

### 代码检测

```
npm run lint
```


## Vue-cli 配置文件
在src同级目录下创建`vue.config.js`,按照如下的提示进行
[VUE-CLI配置](https://cli.vuejs.org/zh/config/#lintonsave)