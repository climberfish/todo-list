<template>
  <form class="new-todo" @submit.prevent="createTodo" >
    <input type="text" name="title" placeholder="New Todo" v-model="title">
    <button type="submit" :disabled="creating">Add Todo</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import api from '@/api';

export default defineComponent({
  data() {
    return {
      title: '',
      creating: false,
    };
  },
  methods: {
    async createTodo() {
      if (!this.title) return;
      this.creating = true;
      const newTodo = await api.todos.createTodo(this.title);
      this.title = '';
      this.$emit('todoCreated', newTodo);
      this.creating = false;
    },
  },
});
</script>

<style>
.new-todo {
  display: flex;
}
.new-todo > [name=title] {
  padding: 8px;
  border: none;
  flex: 1;
  border-radius: 8px 0 0 8px;
}
.new-todo > button {
  padding: 8px;
  border: none;
  border-radius: 0 8px 8px 0;
  color: #fff;
  background: #3b723b;
  cursor: pointer;
}

.new-todo > button[disabled] {
  color: lightgray;
  background: gray;
}
</style>
