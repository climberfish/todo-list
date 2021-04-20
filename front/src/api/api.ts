import { CreateTodoRequest, GetTodosRequest, UpdateTodoRequest } from 'api/contract';
import Axios from 'axios';

const api = Axios.create({ baseURL: 'http://localhost:4000' });

const getTodos: GetTodosRequest = () => api.get('/todos/').then(({ data }) => data.todos);

const createTodo: CreateTodoRequest = (title) => api.post('/todos/', { title }).then(({ data }) => data);

const updateTodo: UpdateTodoRequest = (id, params) => api.put(`/todos/${id}`, params).then(({ data }) => data);

export default { todos: { getTodos, createTodo, updateTodo } };
