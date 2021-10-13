<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!--   也可以传函数     -->
        <TodoHeader @reviver="reviver"/>
        <TodoList :todos="todos"/>
        <TodoFooter :todos="todos" @done="removeDone"/>
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from "@/components/TodoHeader";
import TodoList from "@/components/TodoList";
import TodoFooter from "@/components/TodoFooter";

export default {
  name: "App",
  components: {TodoFooter, TodoList, TodoHeader},
  methods: {
    /* 将函数作为参数传给子 */
    reviver(todo) {
      this.todos.push(todo)
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    removeDone() {
      this.todos = this.todos.filter(todo => !todo.done)
    }
  },
  data() {
    return {
      todos: []
    }
  },
  // 监控todos 的变化
  watch: {
    todos: {
      // 开启深度监控 监控内部属性的变化
      deep: true,
      handler(value) {
        window.localStorage.setItem("todos", JSON.stringify(value))
      }
    },
  },
  mounted() {
    // 若前者为空则使用 [] 空数组 避免空指针
    this.todos = JSON.parse(window.localStorage.getItem("todos")) || []
    // 挂载全局事件
    this.$root.$on("deleteTodo", (id) => {
      this.deleteTodo(id)
    })
    this.$root.$on("editTodo", (n) => {
      this.todos.forEach((todo) => {
        if (n.id === todo.id) {
          todo.title = n.title
        }
      })

    })
  }
}
</script>

<style>
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn-editor {
  color: #fff;
  background-color: #00a6d7;
  border: 1px solid #22ccff;
}

.btn-editor:hover {
  color: #fff;
  background-color: #00a6d7;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>