import Vue from "vue";
import Vuex from 'vuex'
import axios from "axios";

/* 使用Vuex 数据控制插件 */
Vue.use(Vuex)

/* 使用模块化 */
const CountOptions = {
    /* 开启命名空间 */
    namespaced: true,
    actions: {
        addOdd(ctx, value) {
            if (value % 2 !== 0) {
                ctx.commit("Add", value)
            }
        },
        addWait(ctx, value) {
            setTimeout(() => {
                ctx.commit("Add", value)
            }, 500)
        }
    },
    mutations: {
        Add(state, value) {
            console.log("Dao Add被调用", state, value)
            state.sum += value
        },
        Subtraction(state, value) {
            console.log("Dao Subtraction被调用", state, value)
            state.sum -= value
        },
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
    state: {
        sum: 0,
        subject: "Vue",
        school: "wtu",
        location: "wuhan",
    }
}

const PersonOptions = {
    namespaced: true,
    actions: {
        /* ctx 为当前 */
        addNameYun(ctx, value) {
            if (value.name.indexOf('云') !== -1) {
                /* 使用本命名空间下可以直接调用 */
                ctx.commit('AddPerson', value)
            } else {
                alert("不包含云")
            }
        },
        addAutoName(ctx, value) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    value.name = response.data
                    ctx.commit('AddPerson', value)
                },
                error => {
                    value.name = error.message
                    ctx.commit('AddPerson', value)
                }
            )
        }
    },
    mutations: {
        /* state为当前的state */
        AddPerson(state, value) {
            console.log("AddPerson 被调用", state, value)
            state.personList.push(value)
        }
    },
    getters: {
        firstName(state) {
            return state.personList[0].name
        }
    },
    state: {
        personList: [
            {id: '001', name: "name", age: "20"},
        ],
    },
}

export default new Vuex.Store({
    /* 导入模块 key为别名 */
    modules: {
        'count': CountOptions,
        'person': PersonOptions,
    }
})


