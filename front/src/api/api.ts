import { CreateTodoRequest, GetTodosRequest, UpdateTodoRequest } from '@/api/contract';

const getTodos: GetTodosRequest = () => api.get('/todos/');

const createTodo: CreateTodoRequest = (title) => api.post('/todos/', { title });

const updateTodo: UpdateTodoRequest = (id, params) => api.put('/todos/', { id, ...params });

export default { todos: { getTodos, createTodo, updateTodo } };
