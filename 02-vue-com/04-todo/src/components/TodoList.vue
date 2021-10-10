<template>
  <ul class="todo-main">
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" :deleteTodo="deleteTodo"></TodoItem>
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  name: "TodoList",
  components: {TodoItem},
  props: ['todos', 'deleteTodo']
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>