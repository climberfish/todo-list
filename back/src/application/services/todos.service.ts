import { Todo } from '@/domain/entities/todo.entity';
import TodosRepository from '@/interfaces/repositories/todos.repository';

const TodosService = {
  getTodo: TodosRepository.getTodo,

  getTodos: TodosRepository.getTodos,

  createTodo: (title: string): Todo => TodosRepository.createTodo({ title, completed: false }),

  updateTodo: TodosRepository.updateTodo,
};

export default TodosService;
