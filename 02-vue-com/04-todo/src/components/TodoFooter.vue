<template>
  <div class="todo-footer" v-show="todos.length">
    <label>
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
          <span>已完成{{ todoDone }}</span> / 全部{{ todos.length }}
        </span>
    <button class="btn btn-danger" @click="done">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ['todos'],
  methods: {
    done() {
      this.$emit("done")
    }
  },
  computed: {
    todoDone() {
      // 第一个参数为处理函数  第二个参数为初始值    处理函数会被调N次 N为数组元素
      // pre 是上一次的返回值（第一次为初始值）  current是当前的元素
      // 最后一次条用统计函数的返回是reduce的返回
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    },
    isAll: {
      get() {
        return this.todos.length === this.todoDone && this.todos.length > 0
      },
      set(value) {
        if (value) {
          this.todos.forEach(todo => {
            todo.done = true
          })
        } else {
          this.todos.forEach(todo => {
            todo.done = false
          })
        }
      }
    },
  },
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>