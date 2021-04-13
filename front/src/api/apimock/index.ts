import {
  CreateTodoRequest, GetTodosRequest, Todo, UpdateTodoRequest,
} from '@/api/contract';
import { mockasync } from '@/api/apimock/mockutils';
import { todos } from '@/api/apimock/fixtures/todos';

const getTodos: GetTodosRequest = () => mockasync(todos);

const createTodo: CreateTodoRequest = (title) => {
  const todo = { title, id: todos.length, completed: false };
  todos.push(todo);
  return mockasync(todo);
};

const updateTodo: UpdateTodoRequest = (idToUpdate, params) => {
  const todo = todos.find(({ id }) => id === idToUpdate) as Todo;
  return mockasync(todo);
};

export default { todos: { getTodos, createTodo, updateTodo } };
