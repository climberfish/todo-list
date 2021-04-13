<template>
  <div class="todo-item" @click="toggleItem">
    <input type="checkbox" :checked="completed"/>
    <span :class="{ completed }">{{title}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import apiMock from '@/api/apimock';

export default defineComponent({
  props: {
    id: { type: Number, required: true },
    title: String,
    completed: Boolean,
  },
  data() {
    return {
      updating: false,
    };
  },
  methods: {
    async toggleItem() {
      this.updating = true;
      await apiMock.todos.updateTodo(this.id, { completed: !this.completed });
      this.$emit('toggleItem');
      this.updating = false;
    },
  },
});
</script>

<style>
.todo-item {
  background: #fff;
  border-radius: 8px;
  margin: 8px 0;
  padding: 16px;
}
.todo-item > .completed {
  text-decoration: line-through;
}
</style>
