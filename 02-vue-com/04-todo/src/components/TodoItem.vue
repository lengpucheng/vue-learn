<template>
  <li>
    <label>
      <input type="checkbox" v-model="todo.done"/>
      <!--  blur 为失去焦点    -->
      <input type="text"
             v-show="todo.isEdit"
             :value="todo.title"
             @blur="handleEdit(todo)"
             @keydown.enter="handleEdit(todo)"
             ref="editTodo">
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="doDelete(todo.id)">删除</button>
    <button v-show="!todo.isEdit" class="btn btn-editor" @click="doEdit(todo)">编辑</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  // 声明接收todo对象
  props: ['todo'],
  methods: {
    doDelete(id) {
      // 删除
      if (confirm("是否进行删除？")) {
        console.log(id)
        // 触发事件
        this.$root.$emit("deleteTodo", id)
      }
    },
    doEdit(todo) {
      if (todo.hasOwnProperty('isEdit')) {
        // 如果有这个属性就改为true
        todo.isEdit = true
      } else {
        // 否则就添加 set添加的属性才能被VUE捕获观察
        this.$set(todo, 'isEdit', true)
      }
      // 设置其为焦点  nextTick 为当节点渲染完毕后执行 （本次函数调用后渲染DOM节点后执行）
      // 若直接focus 由于目前还没有 input 会导致聚焦失败
      this.$nextTick(() => {
        // 获取焦点
        this.$refs.editTodo.focus()
      })
    },
    handleEdit(todo) {
      todo.isEdit = false
      if (!this.$refs.editTodo.value.trim()) {
        return alert("不能为空")
      }
      // 由于是对象的形式因此可以进行直接修改
      todo.title = this.$refs.editTodo.value
      // 使用事件总线改变
      // this.$root.$emit("editTodo", todo)
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: aquamarine;
}

li:hover button {
  display: block;
}
</style>