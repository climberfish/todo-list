<template>
  <TodoList/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoList from '@/components/TodoList.vue';

export default defineComponent({
  name: 'App',
  components: { TodoList },
});
</script>

<style>
body {
  background: lightgray;
}
</style>
