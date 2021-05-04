import Todo from '@/application/services/todos.service';

export interface ITodosRepository {
  getTodo(id: number): Promise<Todo>;
  getTodos(): Promise<Todo[]>;
  createTodo(todo: Todo): Promise<Todo>;
  updateTodo(id: number, params: Partial<Omit<Todo, 'id'>>): Promise<Todo>;
}
