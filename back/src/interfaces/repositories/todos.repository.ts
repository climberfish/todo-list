import Todo from '@/domain/entities/todo.entity';
import { ITodosRepository } from '@/domain/repository';
import db from '@/infra/db';

const repository = () => db().getRepository(Todo);

const TodosRepository: ITodosRepository = {
  getTodo(id: number): Promise<Todo | undefined> {
    return repository().findOne({ where: { id } });
  },

  getTodos(): Promise<Todo[]> {
    return repository().find();
  },

  createTodo(todo: Todo): Promise<Todo> {
    return repository().save(todo);
  },

  async updateTodo(id: number, params: Partial<Omit<Todo, 'id'>>): Promise<Todo> {
    const response = await repository().update(id, params);
    const updatedTodo = response.generatedMaps[0] as Todo;
    return updatedTodo;
  },
};

export default TodosRepository;
