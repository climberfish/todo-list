<template>
  <div class="todo-list">
    <h2 class="title">Today's Tasks</h2>
    <CreateTodo @todoCreated="todoCreated"/>
    <TodoItem v-for="(todo, idx) in todos" :key="idx"
      :title="todo.title"
      :completed="todo.completed"
      :id="todo.id"
      @toggleItem="toggleTodo(idx)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CreateTodo from '@/components/CreateTodo.vue';
import TodoItem from '@/components/TodoItem.vue';
import api from '@/api';
import { Todo } from '@/api/contract';

export default defineComponent({
  components: { CreateTodo, TodoItem },
  data(): { todos: Todo[] } {
    return {
      todos: [],
    };
  },
  async created() {
    this.todos = await api.todos.getTodos();
  },
  methods: {
    todoCreated(todo: Todo) {
      this.todos.push(todo);
    },
    toggleTodo(idx: number) {
      this.todos[idx].completed = !this.todos[idx].completed;
    },
  },
});
</script>

<style>
.todo-list {
  padding: 16px;
  max-width: 600px;
}
.todo-list > .title {
  color: #352f4f;
}
</style>
