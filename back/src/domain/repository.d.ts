import { Todo } from '@/application/services/todos.service';

export interface ITodosRepository {
  getTodo(id: number): Todo;
  getTodos(): Todo[];
  createTodo(todo: Todo): Todo;
  updateTodo(id: number, params: Partial<Omit<Todo, 'id'>>): Todo;
}
