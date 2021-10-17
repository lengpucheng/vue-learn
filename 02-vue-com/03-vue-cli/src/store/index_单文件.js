import Vue from "vue";
import Vuex from 'vuex'

/* 使用Vuex 数据控制插件 */
Vue.use(Vuex)

/* 数据业务逻辑
*  类比于Service 对数据的封装
*  */
const actions = {
    /* 业务的参数为 ctx--mini版的store包含了mutations和其他方法  value实际的参数 */
    addOdd(ctx, value) {
        if (value % 2 !== 0) {
            /* 使用commit 可以调用 mutations中的方法
            *  commit在store上
            *  参数一为 方法名
            *  参数二为 实际参数
            *  */
            ctx.commit("Add", value)
        }
    },
    addWait(ctx, value) {
        /* 延时器
        *  参数一为 需要执行的函数
        *  参数二为 延时的时间毫秒
        *  */
        setTimeout(() => {
            ctx.commit("Add", value)
        }, 500)
    }

}

/* 数据操作
*  类比于 dao操作  组件操作数据
*  */
const mutations = {
    /*  参数为 state元素数据库 和 value实际参数  */
    Add(state, value) {
        console.log("Dao Add被调用", state, value)
        state.sum += value
    },
    Subtraction(state, value) {
        console.log("Dao Subtraction被调用", state, value)
        state.sum -= value
    },
    AddPerson(state, value) {
        console.log("AddPerson 被调用", state, value)
        state.personList.push(value)
    }
}

/* 数据获取 get
*  类似于计算属性 computer
*  */
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}


/* 数据源头
*  类比于数据库
*  */
const state = {
    sum: 0,
    subject: "Vue",
    school: "wtu",
    location: "wuhan",
    personList: [
        {id: '001', name: "name", age: "20"},
    ],
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
})


