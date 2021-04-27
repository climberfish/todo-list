import { Todo } from '@/domain/entities/todo.entity';
import { ITodosRepository } from '@/domain/repository';
import { defaultDb as db } from '@/infra/db';

const TodosRepository: ITodosRepository = {
  getTodo(id: number): Todo | undefined {
    return db.todos.find((todo) => todo.id === id);
  },
  getTodos(): Todo[] {
    return db.todos;
  },
  createTodo(todo: Todo): Todo {
    const newTodo = { ...todo, id: db.todos.length + 1 };
    db.todos.push(newTodo);
    return newTodo;
  },
  updateTodo(id: number, params: Partial<Omit<Todo, 'id'>>): Todo {
    const todoToUpdate = db.todos.find((todo) => todo.id === id);
    if (!todoToUpdate) {
      throw new Error('Todo not found');
    }
    if (params.title !== undefined) todoToUpdate.title = params.title;
    if (params.completed !== undefined) todoToUpdate.completed = params.completed;
    return todoToUpdate;
  },
};

export default TodosRepository;
